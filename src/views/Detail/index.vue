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
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 图片预览区，先判断是否有图片，否则显示默认图片 -->
              <goods-image :imageList="imageList"></goods-image>
            </div>
            <div class="spec">
              <!-- 替换标题 -->
              <p class="g-name">{{ good.title }}</p>
              <!-- 替换品牌 -->
              <p class="g-desc">品牌 - {{ good.brandCode || '无品牌信息' }}</p>
              <!-- 替换型号 -->
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
              <el-input-number v-model="num" :min="1" @change="countChange" />
              <!-- 按钮 -->
              <div>
                <el-button size="large" class="btn" @click="add">下单</el-button>
                <el-button size="large" class="btn" @click="add">询价</el-button>
              </div>
            </div>
          </div>
          
          <!-- 商品详情 -->
          <div class="goods-detail">
            <p v-for="(detail, index) in good.productDetail?.split('<br />')" :key="index">
              {{ detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDetailAPI } from '@/apis/detail'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsSku from '@/components/GoodsSku.vue'
import { useCartStore } from '@/stores/index'
import { ElMessage } from 'element-plus'

const good = ref({})
const route = useRoute()

// 默认图片
const defaultImage = 'https://via.placeholder.com/150'

// 获取商品详情
const getGoods = async () => {
  const res = await getDetailAPI(route.params.id)
  good.value = res.data

  // 判断图片是否为空，如果为空则使用默认图片
  const imageList = res.data.pictures && res.data.pictures.length > 0 ? res.data.pictures : [defaultImage]
  good.value.imageList = imageList
}
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
      name: good.value.title, // 使用接口返回的产品标题
      picture: good.value.imageList,
      price: good.value.price,
      count: num.value,
      skuId: skuObj.value.skuId,
      attrsText: skuObj.value.specsText,
      selected: true
    })
    ElMessage.success('加入购物车成功')
  } else {
    ElMessage.warning('请选择完规格')
  }
}
</script>

<style scoped lang="scss">
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-model {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: '¥';
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;
  }

  .btn {
    margin-top: 20px;
  }

  .bread-container {
    padding: 25px 0;
  }

  .goods-detail {
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
  }
}
</style>
