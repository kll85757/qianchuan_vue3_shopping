<script setup>
import HomePanel from './HomePanel.vue'
import { getSubCategoryListAPI } from '@/apis/category' // 使用正确的 API
import { ref, onMounted } from 'vue'

const hotGoodsList = ref([])

// 获取产品列表接口的数据，按时间排序，获取最新的4个产品
const getHotGoods = async () => {
  try {
    const res = await getSubCategoryListAPI({
      pageNo: 1,
      pageSize: 4, // 获取最新的4个产品
      condition: {
        status: '1', // 只获取发布状态的产品
        sortField: 'releaseTime', // 按发布时间排序
        sortOrder: 'desc' // 时间倒序，最新产品在前
      }
    })
    hotGoodsList.value = res.data.records // 将返回的产品记录存入 hotGoodsList
  } catch (error) {
    console.error('获取产品列表失败:', error)
  }
}

// 页面加载时获取数据
onMounted(getHotGoods)

</script>

<template>
  <HomePanel title="人气产品" sub-title="热卖产品">
    <template #main>
      <ul class="goods-list">
        <!-- 通过API获取到的产品列表展示 -->
        <li v-for="item in hotGoodsList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <!-- 如果有图片则显示图片，否则显示占位符 -->
            <div class="image-placeholder">
              <img v-if="item.pictures && item.pictures.length > 0" :src="item.pictures[0]" alt="产品图片" />
              <div v-else class="placeholder">图片缺失</div>
            </div>
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.categoryCode }}</p> <!-- 使用 categoryCode 来代替 code -->
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    .image-placeholder {
      width: 306px;
      height: 306px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0; /* 占位符背景颜色 */
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .placeholder {
      font-size: 20px;
      color: #999;
      text-align: center;
    }

    p {
      font-size: 14px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
