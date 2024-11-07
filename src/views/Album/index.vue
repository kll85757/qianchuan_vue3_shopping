<script setup>
import { ref, onMounted } from 'vue';
import GoodsItem from '@/components/GoodsItem.vue';
import { getAlbumList } from '@/apis/category';

let albumLists = ref([]); // 初始化为空数组

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

const types = [
  { "grade2": "8", "PID": "生産加工用品", "name": "生産加工用品" },
  { "grade2": "14", "PID": "工事用品", "name": "工事用品" },
  { "grade2": "27", "PID": "作业工具 ", "name": "作业工具" },
  { "grade2": "41", "PID": "防护用品", "name": "化工环境安全用品" },
  { "grade2": "47", "PID": "物流保管用品", "name": "物流保管用品" },
  { "grade2": "52", "PID": "研究管理用品", "name": "研究管理用品" },
  { "grade2": "59", "PID": "办公室", "name": "办公用品" },
  { "grade2": "165", "PID": "科学实验器具", "name": "科学实验器具" },
  { "grade2": "166", "PID": "季节商品", "name": "季节商品" },
  { "grade2": "167", "PID": "电脑配件", "name": "电脑配件" },
  { "grade2": "168", "PID": "家电", "name": "家电" },
  { "grade2": "173", "PID": "粗糙度比较样块", "name": "粗糙度比较样块" }
];
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
            <RouterLink :to="`/category/sub/${album.id}`">
              <img style="width: 250px; height: 200px;" :src="album.picture" />
              <p>{{ album.name }}</p>
              <p>{{ album.picNum }}</p>
            </RouterLink>
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
        width: 168px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
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
