<script setup>
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { getSubCategoryListAPI } from '@/apis/category'
import GoodsItem from '@/components/GoodsItem.vue'

import { getBrandList } from '@/apis/category'

// 定义品牌列表数据
const brands = ref([])

// 获取所有品牌
const fetchAllBrands = async () => {
  let pageNo = 1
  let hasMoreData = true

  // 循环请求直到获取完所有数据
  while (hasMoreData) {
    try {
      const res = await getBrandList({
        pageNo: pageNo,
        pageSize: 10, // 每页获取10条数据
        title: '',
        categoryCode: '',
        status: '1'
      })

      const currentPageBrands = res.data.records

      // 将当前页的数据合并到总品牌列表中
      brands.value = [...brands.value, ...currentPageBrands]

      // 如果当前页的数据小于 pageSize，说明没有更多数据了
      if (currentPageBrands.length < 10) {
        hasMoreData = false
      }

      // 增加页码以获取下一页数据
      pageNo++

    } catch (error) {
      console.error('获取品牌列表失败:', error)
      hasMoreData = false
    }
  }

  brands.value = brands.value.slice(0, 10);

}

// 页面加载时获取所有品牌
onMounted(fetchAllBrands)

// 存储三页的产品数据
const goodsProductPage2 = ref([])
const goodsProductPage3 = ref([])
const goodsProductPage4 = ref([])

// const brands = [
//   '三菱',
//   '富士',
//   '仓敷化工 KURAKA',
//   'CEC中央电机',
//   '兴研|koken',
//   'ANELVA',
//   'OMRON',
//   '东洋技研',
//   '光阳社',
//   '七星科学',
//   'DYNALOY'
// ]

const categories = [
  { id: 5, name: '接着剂' },
  { id: 6, name: '研究管理用品' },
  { id: 7, name: '修补剂' },
  { id: 8, name: '科学实验器具' }
]
const news = [
  { id: 1, title: '新型环保接着剂问世，提高粘合效率', date: '2023-06-15' },
  { id: 2, title: '实验室管理系统升级，提升研究效率', date: '2023-06-18' },
  { id: 3, title: '纳米技术在修补剂领域取得突破性进展', date: '2023-06-20' },
  { id: 4, title: '智能化科学实验器具助力精准研究', date: '2023-06-22' },
  { id: 5, title: '新型高强度工业胶水开发成功', date: '2023-06-25' },
  {
    id: 6,
    title: '实验室安全管理新规出台，保障研究人员安全',
    date: '2023-06-28'
  },

]
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
    <HomePanel title="产品大纲">
      <template #main>
        <div class="box">
          <div class="spMenu">
            <el-tabs v-model="activeTab">
              <el-tab-pane label="接着剂" name="category">
                <!-- 分类内容 -->
              </el-tab-pane>
              <el-tab-pane label="密封胶" name="brand">
                <!-- 品牌内容 -->
              </el-tab-pane>
              <el-tab-pane label="环氧树脂胶" name="brand">
                <!-- 品牌内容 -->
              </el-tab-pane>
              <el-tab-pane label="木工修补材料" name="brand">
                <!-- 品牌内容 -->
              </el-tab-pane>
              <el-tab-pane label="密封胶2" name="brand">
                <!-- 品牌内容 -->
              </el-tab-pane>
            </el-tabs>
            <div v-if="activeTab === 'category'">
              <!-- 分类内容 -->
            </div>
            <div v-if="activeTab === 'brand'">
              <!-- 品牌内容 -->
            </div>
          </div>
          <RouterLink class="cover" to="/">
            <!-- <img v-img-lazy="'../src/assets/images/p01.png'" /> -->
            <ul class="menu">
              <li class="menuItem" v-for="item in brands" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <div class="layer"></div>
                <ul>
                  <li v-for="i in item.goods" :key="i.id">
                    <RouterLink :to="`/detail/${i.id}`">
                      <img :src="i.picture" alt="" />
                      <div class="info">
                        <p class="name ellipsis-2">
                          {{ i.name }}
                        </p>
                        <p class="desc ellipsis">{{ i.desc }}</p>
                        <p class="price"><i>¥</i>{{ i.price }}</p>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </li>
              <h3 style="font-weight: 600">相关新闻</h3>
              <ul class="">
                <li class="menuItem2" v-for="item in news" :key="item.id">
                  <RouterLink to="/">{{ item.title }}</RouterLink>

                </li>
              </ul>
            </ul>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in goodsProductPage2" :key="good.id">
              <GoodsItem :good="good"></GoodsItem>
            </li>
          </ul>
          <!-- <div class="menu news" style="width: 250px">

          </div> -->
        </div>
      </template>
    </HomePanel>
  </div>

  <!-- 第三页产品数据 -->
  <!-- <HomePanel title="热卖产品">
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
    </HomePanel> -->

  <!-- 第四页产品数据 -->
  <!-- <HomePanel title="库存产品">
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
    </HomePanel> -->
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 8px 16px;
      font-size: 16px;
      border-radius: 4px;
      transition: all 0.3s ease;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 20px;
      }
    }
  }

  .spMenu {
    position: absolute;
    top: 110px;
    left: 300px;
  }

  .menu {
    padding: 20px;
    border: 1px solid #eee;
    line-height: 1.6;
    height: 550px;
    font-size: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 15px;
      padding-bottom: 10px;
      border-top: 1px solid #eee;
    }

    .menuItem {
      font-size: 12px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
      padding-left: 10px;
      border-left: 3px solid #0091ff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .menuItem2 {
      font-size: 12px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
      padding-left: 10px;
      border-left: 3px solid #ff0000;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }
  }

  .news {
    font-size: 14px;
    line-height: 1.6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    h3 {
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  .box {
    display: flex;
    gap: 20px;

    .cover {
      width: 240px;
      height: 610px;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }

      .label {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        font-size: 18px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        padding: 10px 20px;
      }
    }

    .goods-list {
      /* 使用 Grid 布局 */
      grid-template-columns: repeat(3, 1fr);
      /* 三列，每列宽度相等 */
      gap: 20px;
      /* 控制列之间的间距 */
      width: 1010px;
      /* 确保宽度为 100% */
      /* 居中对齐 */
      margin-top: 50px;
    }

    .goods-list li {
      display: inline-block;
      list-style: none;
      /* 去掉列表项的默认样式 */
      padding: 0;
      /* 去掉默认内边距 */
      margin: 0;
      width: 235px;
      /* 去掉默认外边距 */
      /* 确保宽度为100% */
      height: auto;
      /* 高度自动，确保撑满内容 */
    }


  }
}
</style>
