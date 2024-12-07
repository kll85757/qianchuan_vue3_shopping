<script setup>
import { ref, onMounted } from 'vue';
import { getAlbumImages } from '@/apis/category';
import { useRoute } from 'vue-router';

const route = useRoute();
const albumId = ref(route.params.albumId);
const albumDetails = ref(null);
const albumImages = ref([]); // 用于存储相册图片数组
const viewerVisible = ref(false); // 全屏图片查看器是否可见
const currentIndex = ref(0); // 当前全屏查看的图片索引

async function fetchAlbumImages() {
  try {
    const response = await getAlbumImages(albumId.value);
    albumDetails.value = response.data; // 存储相册详细信息

    // 转换图片字符串为数组
    if (albumDetails.value.picture) {
      albumImages.value = albumDetails.value.picture.split(','); // 转换为数组
    } else {
      albumImages.value = []; // 如果没有图片，初始化为空数组
    }
  } catch (error) {
    console.error('获取相册图片出错:', error);
  }
}

// 打开全屏图片查看器
function openImageViewer(index) {
  currentIndex.value = index;
  viewerVisible.value = true;
}

// 关闭全屏图片查看器
function closeImageViewer() {
  viewerVisible.value = false;
}

onMounted(() => {
  fetchAlbumImages();
});
</script>

<template>
  <div class="album-detail">
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/album' }">全部相册</el-breadcrumb-item>
          <el-breadcrumb-item>{{ albumDetails?.name || '相册详情' }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 相册信息 -->
      <div class="album-info">
        <h3>{{ albumDetails?.name || '相册详情' }}</h3>
        <p>{{ albumDetails?.description }}</p>
        <p class="meta-info">
          <span>图片数量: {{ albumDetails?.picNum }}</span>
          <span>创建时间: {{ albumDetails?.createTime }}</span>
        </p>
      </div>

      <!-- 图片网格 -->
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
    </div>

    <!-- 全屏图片查看器 -->
    <el-image-viewer
      v-model="viewerVisible"
      :url-list="albumImages"
      :initial-index="currentIndex"
      @close="closeImageViewer"
    />
  </div>
</template>

<style scoped lang="scss">
.album-detail {
  font-family: Arial, sans-serif;

  .bread-container {
    padding: 20px 0;
  }

  .album-info {
    text-align: center;
    margin: 20px 0;

    h3 {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #555;
      margin: 5px 0;

      &.meta-info {
        font-size: 14px;
        color: #888;

        span {
          margin-right: 10px;
        }
      }
    }
  }

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
</style>
