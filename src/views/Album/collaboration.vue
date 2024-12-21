<template>
  <div class="album-detail">
    <h1 class="title">优质合作案例一览</h1>

    <!-- 图片列表 -->
    <div class="images-grid">
      <ul class="image-list">
        <li
          v-for="(image, index) in albumImages"
          :key="index"
          class="image-item"
          @click="openImageViewer(index)"
        >
          <div class="image-wrapper">
            <img :src="image" alt="Album Image" />
          </div>
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
const albumId = ref('1832422981879795714');
const albumImages = ref([]);
const viewerVisible = ref(false);
const currentIndex = ref(0);

async function fetchAlbumImages() {
  try {
    const response = await getAlbumImages(albumId.value);
    albumImages.value = response.data.picture.split(',') || [];
  } catch (error) {
    console.error('获取相册图片出错:', error);
  }
}

function openImageViewer(index) {
  currentIndex.value = index;
  viewerVisible.value = true;
}

function closeImageViewer() {
  viewerVisible.value = false;
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

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
  font-family: "Helvetica Neue", Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;

  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #222;
    font-weight: bold;
  }

  .images-grid {
    display: block;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    justify-items: center;
  }

  .image-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .image-item {
    /* perspective: 1000px; */
    width: 20%;
    margin-left: 10px;
    flex: 1;

    .image-wrapper {
      width: 100%;
      height: 250px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      transform: rotateY(0deg) scale(1);
      transition: transform 0.5s ease, box-shadow 0.5s;
      cursor: pointer;

      &:hover {
        transform: rotateY(10deg) scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .image-viewer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
      max-width: 70vw;
      max-height: 70vh;
      border-radius: 12px;
      animation: fadeIn 0.5s ease;
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 18px;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #c0392b;
      }
    }

    .viewer-controls {
      margin-top: 20px;
      display: flex;
      gap: 15px;

      button {
        padding: 12px 24px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s;

        &:hover {
          background: #2980b9;
        }

        &:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
