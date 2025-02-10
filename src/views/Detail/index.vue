<template>
  <div class="xtx-goods-page">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>产品详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="info-container">
        <div>
          <div class="goods-info">
            <div class="media">
              <goods-image :imageList="good.imageList"></goods-image>
            </div>
            <div class="spec">
              <p class="g-name">{{ good.title }}</p>
              <p class="g-desc">品牌 - {{ good.brandCode || '无品牌信息' }}</p>
              <p class="g-model">产品编号: {{ good.categoryCode || '无型号信息' }}</p>
              <p class="g-price">
                <span v-if="good.price">¥{{ good.price }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>描述</dt>
                  <dd>{{ good.description || '无描述信息' }}</dd>
                </dl>
              </div>
              <GoodsSku :goods="good" @change="skuChange"></GoodsSku>
              <div>
                <el-button size="large" type="success" class="btn" @click="showAskPriceDialog">询价 Request Quote</el-button>
                <el-button size="large" class="btn">查看全部 Check All</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-container">
        <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick">
          <el-tab-pane label="商品详情" name="detail">
            <div class="goods-detail">
              <h2>商品详情</h2>
              <p v-for="(detail, index) in good.productDetail?.split('<br />')" :key="index">{{ detail }}</p>
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
import { getDetailAPI, fetchProductsByBrandAPI, fetchProductsByCategoryAPI } from '@/apis/detail';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoodsSku from '@/components/GoodsSku.vue';
import { useCartStore } from '@/stores/index';
import { ElMessage } from 'element-plus';
import { getBrandList } from '@/apis/category';

const brands = ref([]);
const good = ref({});
const route = useRoute();
const recommendItems = ref([]); // Initialize as an empty array
const activeTab = ref('detail'); // Default to show product details
const askPriceDialogVisible = ref(false);
const news = ref([]); // Initialize as an empty array

// Fetch product details
const getGoods = async () => {
  const res = await getDetailAPI(route.params.id);
  good.value = res.data;

  const imageList = (good.value.pictures && good.value.pictures.length > 0) ? good.value.pictures : ['https://via.placeholder.com/150'];
  good.value.imageList = imageList;

  // Fetch related products after getting the product details
  await fetchRelatedProducts();
}

// Fetch related products based on brand and category
const fetchRelatedProducts = async () => {
  const brandId = good.value.brandCode; // Assuming brandCode is the identifier for the brand
  const categoryId = good.value.categoryCode; // Assuming categoryCode is the identifier for the category

  try {
    const [relatedProductsByBrand, relatedProductsByCategory] = await Promise.all([
      fetchProductsByBrandAPI(brandId),
      fetchProductsByCategoryAPI(categoryId)
    ]);
    recommendItems.value = [
      ...relatedProductsByBrand.data,
      ...relatedProductsByCategory.data
    ]; // Merging the results
  } catch (error) {
    console.error('Error fetching related products:', error);
  }
}

// Initialize brands on mounted
onMounted(async () => {
  try {
    const response = await getBrandList({
      pageNo: 1,
      pageSize: 100,
      condition: {
        title: '',
        categoryCode: '',
        status: '1'
      }
    });
    brands.value = response.data.records || [];
  } catch (error) {
    console.error('获取品牌列表出错:', error);
  }
});

// Other functions (skuChange, copyPhone, copyEmail, etc.) remain unchanged...

getGoods();
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