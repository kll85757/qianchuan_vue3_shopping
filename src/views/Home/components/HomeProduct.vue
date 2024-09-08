<script setup>
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { getSubCategoryListAPI } from '@/apis/category'
import GoodsItem from '@/components/GoodsItem.vue'

// 存储三页的产品数据
const goodsProductPage2 = ref([])
const goodsProductPage3 = ref([])
const goodsProductPage4 = ref([])

// 获取指定页数和条数的产品数据
const fetchProductData = async (page, targetList) => {
  try {
    const res = await getSubCategoryListAPI({
      pageNo: page, // 页数
      pageSize: 8, // 每页8条数据
      condition: {
        status: '1', // 只获取发布状态的产品
        sortField: 'releaseTime', // 按发布时间排序
        sortOrder: 'desc' // 时间倒序
      }
    })
    targetList.value = res.data.records // 将数据存入目标列表
  } catch (error) {
    console.error(`获取第${page}页产品列表失败:`, error)
  }
}

// 页面加载时获取第二、第三、第四页的数据
onMounted(async () => {
  await fetchProductData(2, goodsProductPage2)
  await fetchProductData(3, goodsProductPage3)
  await fetchProductData(4, goodsProductPage4)
})
</script>

<template>
  <div class="home-product">
    <!-- 第二页产品数据 -->
    <HomePanel title="特价产品">
      <template #main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-img-lazy="'../src/assets/images/p01.png'" />
            <strong class="label"></strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in goodsProductPage2" :key="good.id">
              <GoodsItem :good="good"></GoodsItem>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>

    <!-- 第三页产品数据 -->
    <HomePanel title="热卖产品">
      <template #main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-img-lazy="'../src/assets/images/p01.png'" />
            <strong class="label"></strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in goodsProductPage3" :key="good.id">
              <GoodsItem :good="good"></GoodsItem>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>

    <!-- 第四页产品数据 -->
    <HomePanel title="库存产品">
      <template #main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-img-lazy="'../src/assets/images/p01.png'" />
            <strong class="label"></strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in goodsProductPage4" :key="good.id">
              <GoodsItem :good="good"></GoodsItem>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
