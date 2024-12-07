<script setup>
import { ref, onMounted } from 'vue';
import { getAlbumList } from '@/apis/category';
import { useRouter } from 'vue-router';

const albumLists = ref([]); // 初始化为空数组
const router = useRouter();

async function getAllAlbums() {
  let allAlbums = [];
  let pageNo = 1;
  let pageSize = 10;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await getAlbumList({ pageNo, pageSize });
      const albums = response.data.records || response.data; // 根据接口返回数据的结构获取相册列表

      allAlbums = allAlbums.concat(albums);

      hasMore = albums.length === pageSize; // 判断是否还有下一页数据
      pageNo++;
    } catch (error) {
      console.error("获取相册列表出错:", error);
      hasMore = false; // 出现错误时停止循环
    }
  }

  albumLists.value = allAlbums; // 将获取到的所有相册数据赋值给 albumLists
}

onMounted(() => {
  getAllAlbums().then(() => {
    console.log("所有相册:", albumLists.value); // 验证数据是否加载成功
  });
});
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>全部相册</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="sub-list">
        <h3>全部相册</h3>
        <ul class="typesBox">
          <li class="typesBlock" v-for="album in albumLists" :key="album.id">
            <a @click.prevent="router.push(`/album/${album.id}`)">
              <img style="width: 200px; height: 200px;" :src="album.picture" />
              <p>{{ album.name }}</p>
              <p>图片数量: {{ album.picNum }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 200px;
        margin: 16px;
        background: #f9f9f9;
        border: 1px solid #eee;
        border-radius: 8px;
        overflow: hidden;
        transition: box-shadow 0.2s;

        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        a {
          text-align: center;
          display: block;
          padding: 16px;
          font-size: 16px;

          img {
            width: 160px;
            height: 160px;
            margin: 0 auto 8px;
            border-radius: 4px;
            object-fit: cover;
          }

          p {
            margin: 0;
            line-height: 24px;
            font-size: 14px;
            color: #333;
          }

          &:hover {
            color: #3a8ee6;
          }
        }
      }
    }
  }

  .bread-container {
    padding: 25px 0;
  }

  .container {
    margin-top: 20px;
  }
}
</style>
