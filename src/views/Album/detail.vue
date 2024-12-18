<template>
  <div class="album-detail">
    <!-- 图片列表 -->
    <div class="images-grid">
      <ul class="image-list">
        <li
          v-for="(image, index) in albumImages"
          :key="index"
          class="image-item"
          @click="openImageViewer(index)"
        >
          <img :src="image" alt="Album Image" />
        </li>
      </ul>
    </div>

    <!-- 自定义图片查看器 -->
    <div v-show="viewerVisible" class="image-viewer-overlay">
      <div class="image-viewer-content">
        <button class="close-button" @click="closeImageViewer">关闭</button>
        <img :src="albumImages[currentIndex]" alt="Preview Image" />
        <div class="viewer-controls">
          <button @click="prevImage" :disabled="currentIndex === 0">上一张</button>
          <button @click="nextImage" :disabled="currentIndex === albumImages.length - 1">下一张</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAlbumImages } from '@/apis/category';
import { useRoute } from 'vue-router';

const route = useRoute();
const albumId = ref(route.params.albumId);
const albumImages = ref([]);
const viewerVisible = ref(false);
const currentIndex = ref(0);

// 获取相册图片
async function fetchAlbumImages() {
  try {
    const response = await getAlbumImages(albumId.value);
    albumImages.value = response.data.picture.split(',') || [];
  } catch (error) {
    console.error('获取相册图片出错:', error);
  }
}

// 打开图片查看器
function openImageViewer(index) {
  currentIndex.value = index;
  viewerVisible.value = true;
}

// 关闭图片查看器
function closeImageViewer() {
  viewerVisible.value = false;
}

// 显示上一张图片
function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

// 显示下一张图片
function nextImage() {
  if (currentIndex.value < albumImages.value.length - 1) {
    currentIndex.value++;
  }
}

onMounted(() => {
  fetchAlbumImages();
});
</script>

<style scoped>
.album-detail {
  font-family: Arial, sans-serif;

  .images-grid {
    margin-top: 20px;

    .image-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;

      .image-item {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }
  }
}

.image-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .image-viewer-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 80vw;
      max-height: 80vh;
      border-radius: 8px;
    }

    .close-button {
      position: fixed;
      top: 20px;
      right: 20px;
      font-size: 18px;
      background: rgb(63, 175, 255);
      color: white;
      border: none;
      border-radius: 0;
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .viewer-controls {
      margin-top: 10px;
      display: flex;
      gap: 10px;

      button {
        padding: 10px 20px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;

        &:disabled {
          background: #ddd;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
