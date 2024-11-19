<template>
  <div class="xtx-goods-page">
    <div class="container">

      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>生産加工用品</el-breadcrumb-item>
          <el-breadcrumb-item>机电产品</el-breadcrumb-item> -->
          <el-breadcrumb-item>产品详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>



      <div class="info-container">
        <!-- <div class="category-container">
          <div class="category-title">
            全部分类
          </div>
          <ul class="category-list">
            <li v-for="(category, index) in categories" :key="index" class="category-item"
              @mouseover="showSubCategories(index)" @mouseleave="hideSubCategories(index)">
              <div class="category-name">
                {{ category.name }}
                <i class="el-icon-arrow-right" :class="{ 'el-icon-arrow-bottom': category.showSubCategories }"></i>
              </div>
              <ul v-if="category.showSubCategories" class="sub-category-list">
                <li v-for="(item, subIndex) in category.menu" :key="subIndex">
                  <a href="#" class="sub-category-item">{{ item.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div> -->

        <!-- 全部品牌的右侧栏 -->
        <!-- <aside class="all-brands">
          <h3>全部品牌</h3>
          <ul class="brand-list">
            <li v-for="brand in brands" :key="brand.id">
              {{ brand.name }}
            </li>
          </ul>
        </aside> -->
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 图片预览区，先判断是否有图片，否则显示默认图片 -->
              <goods-image :imageList="good.imageList"></goods-image>
            </div>
            <div class="spec">
              <!-- 替换标题 -->
              <p class="g-name">{{ good.title }}</p>
              <!-- 替换品牌 -->
              <p class="g-desc">品牌 - {{ good.brandCode || '无品牌信息' }}</p>
              <!-- 替换型号 -->
              <p class="g-model">产品编号: {{ good.categoryCode || '无型号信息' }}</p>
              <p class="g-model">型号: {{ good.categoryCode || '无型号信息' }}</p>
              <!-- 替换价格 -->
              <p class="g-price">
                <!-- 如果有价格，展示价格 -->
                <span v-if="good.price">¥{{ good.price }}</span>
              </p>

              <!-- 其他产品信息 -->
              <div class="g-service">
                <dl>
                  <dt>描述</dt>
                  <dd>{{ good.description || '无描述信息' }}</dd>
                </dl>
              </div>

              <!-- SKU 组件 -->
              <GoodsSku :goods="good" @change="skuChange"></GoodsSku>
              <!-- 输入数量 -->
              <!-- <el-input-number v-model="num" :min="1" @change="countChange" /> -->
              <!-- 按钮 -->
              <div>
                <!-- <el-button size="large" class="btn" @click="add">下单</el-button> -->
                <el-button size="large" type="success" class="btn" @click="showAskPriceDialog">询价 Request
                  Quote</el-button>
                <el-button size="large" type="" class="btn">查看全部
                  Check All</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 切换区域 -->
      <div class="tab-container">
        <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick">
          <el-tab-pane label="商品详情" name="detail">
            <div class="goods-detail">
              <h2>商品详情</h2>
              <p v-for="(detail, index) in good.productDetail?.split('<br />')" :key="index">
                {{ detail }}
              </p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="相关商品" name="recommend">
            <div class="recommend-container">
              <h2>相关商品</h2>
              <div class="recommend-list">
                <div class="recommend-item" v-for="(item, index) in recommendItems" :key="index">
                  <img :src="item.imageUrl" alt="商品图片">
                  <div class="recommend-info">
                    <p class="recommend-name">{{ item.name }}</p>
                    <p class="recommend-brand">品牌：{{ item.brand }}</p>
                    <p class="recommend-price">¥{{ item.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="相关新闻" name="news">
            <div class="news-container">
              <h2>相关新闻</h2>
              <div class="news-list">
                <div class="news-item" v-for="(item, index) in news" :key="index">
                  <div class="news-info">
                    <p class="news-name">{{ item.name }}</p>
                    <p class="news-brand">发布时间：{{ item.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>



      <!-- 询价弹窗 -->
      <el-dialog v-model="askPriceDialogVisible" title="联系方式" width="300px">
        <div class="ask-price-dialog">
          <p>手机号：+86 13675176057</p>
          <p>邮箱地址：qc84659345@163.com</p>
        </div>
        <template #footer>
          <el-button style="margin-bottom: 10px;" type="primary" @click="copyPhone">复制手机号 Copy Phone</el-button>
          <el-button type="primary" @click="copyEmail">复制邮箱 Copy Email</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { getDetailAPI } from '@/apis/detail'
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import GoodsSku from '@/components/GoodsSku.vue'
import { useCartStore } from '@/stores/index'
import { ElMessage } from 'element-plus'
import { getBrandList } from '@/apis/category';

const brands = ref([]);

// 在页面初始化时调用 getBrandList
onMounted(async () => {
  try {
    const response = await getBrandList({
      pageNo: 1,
      pageSize: 100, // 设置合适的数量，或加载所有品牌
      condition: {
        title: '',
        categoryCode: '',
        status: '1'
      }
    });
    brands.value = response.data.records || []; // 假设返回的数据在 response.data 中
    console.log('品牌列表:', brands.value);
  } catch (error) {
    console.error('获取品牌列表出错:', error);
  }
});


const good = ref({})
const route = useRoute()

const categories = ref([
  {
    id: 1, name: '生産加工用品', showSubCategories: false,
    menu: [
      { id: 1.1, name: '作業服・安全靴' },
      { id: 1.2, name: '手袋' },
      { id: 1.3, name: 'マスク' },
      { id: 1.4, name: '作業服' },
      { id: 1.5, name: '安全靴・作業靴' },
      { id: 1.6, name: '安全保護具' },
      { id: 1.7, name: 'テープ' },
      { id: 1.8, name: '物流用品' },
      { id: 1.9, name: '保管用品' },
      { id: 1.10, name: '梱包用品' }
    ]
  },
  // { id: 2, name: '工事用品' },
  {
    id: 3, name: '作业工具', showSubCategories: false,
    menu: [
      { id: 3.1, name: '作業工具' },
      { id: 3.2, name: '電動工具' },
      { id: 3.3, name: 'エンジン工具' },
      { id: 3.4, name: '空圧工具' },
      { id: 3.5, name: '縫製用品' }
    ]
  },
  {
    id: 4, name: '化工环境安全用品', showSubCategories: false,
    menu: [
      { id: 4.1, name: 'スプレー・オイル・グリス' },
      { id: 4.2, name: '塗料' },
      { id: 4.3, name: '接着剤・補修材' },
      { id: 4.4, name: '溶接用品' }
    ]
  },
  {
    id: 5, name: '農業資材・園芸用品', showSubCategories: false,
    menu: [
      { id: 5.1, name: '農業・園芸資材' },
      { id: 5.2, name: '肥料・農薬・除草剤・種' },
      { id: 5.3, name: '農具' },
      { id: 5.4, name: '農業機械' }
    ]
  },
  {
    id: 6, name: '厨房機器/店舗用品', showSubCategories: false,
    menu: [
      { id: 6.1, name: '厨房用品' },
      { id: 6.2, name: '卓上消耗品' },
      { id: 6.3, name: '店舗什器・備品' }
    ]
  },
  {
    id: 7, name: '医療・介護用品', showSubCategories: false,
    menu: [
      { id: 7.1, name: '救急・衛生' },
      { id: 7.2, name: 'ヘルスケア' },
      { id: 7.3, name: '医療' },
      { id: 7.4, name: '介護用品' }
    ]
  },
  {
    id: 8, name: '建築金物・建材', showSubCategories: false,
    menu: [
      { id: 8.1, name: '塗装・養生・内装用品' },
      { id: 8.2, name: '建築金物' },
      { id: 8.3, name: '建材・エクステリア' },
      { id: 8.4, name: '住設機器' }
    ]
  },
  {
    id: 9, name: '住設機器', showSubCategories: false,
    menu: [
      { id: 9.1, name: '空調・電設資材' },
      { id: 9.2, name: '電気材料' }
    ]
  },
  {
    id: 10, name: '電気材料', showSubCategories: false,
    menu: [
      { id: 10.1, name: '配管・水廻り設備部材' },
      { id: 10.2, name: 'ポンプ・送風機・電熱機器' },
      { id: 10.3, name: 'コンプレッサー・空圧機器・ホース' },
      { id: 10.4, name: '油圧機器・油圧ホース' },
      { id: 10.5, name: 'SMC製品簡単検索' }
    ]
  },
  {
    id: 11, name: 'メカニカル部品/機構部品', showSubCategories: false,
    menu: [
      { id: 11.1, name: 'メカニカル部品' },
      { id: 11.2, name: '機構部品' }
    ]
  },
  {
    id: 12, name: '制御機器', showSubCategories: false,
    menu: [
      { id: 12.1, name: '制御機器' },
      { id: 12.2, name: 'はんだ関連・静電気対策用品' },
      { id: 12.3, name: 'オムロン製品簡単検索' }
    ]
  },
  {
    id: 13, name: 'ねじ・ボルト・釘/素材', showSubCategories: false,
    menu: [
      { id: 13.1, name: 'ねじ・ボルト・釘' },
      { id: 13.2, name: '素材(切板・プレート・丸棒・パイプ・シート)' }
    ]
  },

]);

const showSubCategories = (index) => {
  console.log('111', index, categories.value)
  categories.value[index].showSubCategories = true
}

const hideSubCategories = (index) => {
  categories.value[index].showSubCategories = false
}

// 默认图片
const defaultImage = 'https://via.placeholder.com/150'

// 获取商品详情
const getGoods = async () => {
  const res = await getDetailAPI(route.params.id)
  good.value = res.data

  // 判断图片是否为空，如果为空则使用默认图片
  // 使用接口返回的 accessPictures 属性
  console.log('aaaaaa',good.value.pictures)
  const imageList = (good.value.pictures && good.value.pictures.length > 0) ? good.value.pictures : [defaultImage];
  good.value.imageList = imageList;
  console.log('aaaaaa', imageList)
}

// 相关商品数据
const recommendItems = ref([
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品1', brand: '品牌A', price: 199 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品2', brand: '品牌B', price: 299 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品3', brand: '品牌C', price: 399 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品4', brand: '品牌D', price: 499 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品5', brand: '品牌E', price: 599 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品6', brand: '品牌F', price: 699 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品7', brand: '品牌G', price: 799 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品2', brand: '品牌B', price: 299 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品3', brand: '品牌C', price: 399 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品4', brand: '品牌D', price: 499 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品5', brand: '品牌E', price: 599 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品6', brand: '品牌F', price: 699 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品7', brand: '品牌G', price: 799 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品7', brand: '品牌G', price: 799 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品7', brand: '品牌G', price: 799 },
  { imageUrl: 'https://via.placeholder.com/100', name: '相关商品8', brand: '品牌H', price: 899 },
])
// 相关新闻数据
const news = ref([
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 199 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 299 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 399 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 499 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 599 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 699 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 799 },
  { imageUrl: 'https://via.placeholder.com/100', name: '新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻', time: '2023-12-12', price: 899 },
])

getGoods()

const skuObj = ref({})
const skuChange = (sku) => {
  skuObj.value = sku
}

const num = ref(1)
const countChange = (count) => {
  num.value = count
}

const cartStore = useCartStore()

const add = () => {
  if (skuObj.value.skuId) {
    cartStore.addCart({
      id: good.value.id,
      name: good.value.title,
      picture: good.value.imageList,
      price: good.value.price,
      count: num.value,
      skuId: skuObj.value.skuId
    })
    ElMessage.success('已成功添加到购物车')
  } else {
    ElMessage.warning('请先选择SKU')
  }
}

// 询价弹窗可见性
const askPriceDialogVisible = ref(false)

// 显示询价弹窗
const showAskPriceDialog = () => {
  askPriceDialogVisible.value = true
}

// 复制联系方式
const copyContact = async () => {
  try {
    await navigator.clipboard.writeText('+86 13651785541\n255555@163.com')
    ElMessage.success('复制成功')
  } catch (error) {
    ElMessage.error('复制失败')
  }
}

// 复制手机号
const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText('+86 13651785541')
    ElMessage.success('复制手机号成功')
  } catch (error) {
    ElMessage.error('复制手机号失败')
  }
}

// 复制邮箱地址
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('255555@163.com')
    ElMessage.success('复制邮箱地址成功')
  } catch (error) {
    ElMessage.error('复制邮箱地址失败')
  }
}

const askPrice = () => {

}

// Tab 切换逻辑
const activeTab = ref('detail') // 默认显示商品详情
const handleTabClick = (tab) => {
  // 可选：根据当前选中的 Tab 进行其他操作，例如获取数据等
  console.log('当前选中的 Tab:', tab.name)
}
</script>

<style scoped>
.xtx-goods-page {
  padding: 20px;
}

.bread-container {
  margin-bottom: 20px;
}

.goods-info {
  display: flex;
}

.media {
  flex: 1;
}

.spec {
  flex: 2;
  padding-left: 20px;
}

.g-name {
  font-size: 24px;
  font-weight: bold;
}

.g-desc,
.g-model,
.g-price {
  margin: 10px 0;
}

.g-service {
  margin-top: 20px;
}

.goods-detail {
  margin-top: 30px;
}

.recommend-container {
  margin-top: 40px;
}

.recommend-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.recommend-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  width: 120px;
  text-align: center;
}

.recommend-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.recommend-name {
  font-size: 14px;
  font-weight: bold;
}

.recommend-brand,
.recommend-price {
  font-size: 12px;
  color: #666;
}

.tab-container {
  margin-top: 20px;
}

.el-tabs {
  margin-bottom: 20px;
}

.news-container {
  margin-top: 20px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.news-item {
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
  border: 1px solid #eee;
}

.news-item:hover {
  transform: translateY(-2px);
}

.news-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-name {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
}

.news-brand {
  font-size: 14px;
  color: #888;
}

.category-container {
  width: 250px;
  position: fixed;
  left: 25px;
  z-index: 999;
  top: 150px;

}

.category-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  position: relative;
  margin-bottom: 5px;
}

.category-item :hover {
  color: rgb(0, 140, 255);
  font-weight: bold;
  background-color: #009dff;
  color: #fff;
}

.category-name {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.category-name i {
  margin-left: 5px;
  transition: transform 0.2s ease;
}

.category-name.el-icon-arrow-bottom {
  transform: rotate(90deg);
}

.sub-category-list {
  min-width: 1000px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  display: flex;
  /* 设置二级菜单横向排列 */
  position: absolute;
  left: 210px;
  top: 0;
  background-color: #ffffff;
  padding: 30px 25px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.sub-category-item {
  /* 移除 display: block */
  display: inline-block;
  flex: 1;
  width: auto;
  border: 1px solid #eee;
  padding: 5px 10px;
  color: #666;
  background-color: #fff;
  text-decoration: none;
  margin-right: 10px;
  /* 添加二级菜单项之间的间距 */
}

.sub-category-item:hover {
  background-color: #f0f0f0;
  color: rgb(0, 140, 255);
}


.main-content {
  flex: 3;
  padding: 20px;
}

.all-brands {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  position: fixed;
  right: 50px;
  width: 250px;
  top: 150px;
}

.all-brands h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.brand-list {
  list-style-type: none;
  padding: 0;
}

.brand-list li {
  margin: 5px 0;
  font-size: 16px;
  cursor: pointer;
}

.brand-list li:hover {
  text-decoration: underline;
}
</style>