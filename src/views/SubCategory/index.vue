<script setup>
import { getSubCategoryAPI, getSubCategoryListAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 获取分类商品数据
const goodList = ref([])
const reqData = ref({
  pageNum: 1,
  pageSize: 50,
  queryCondition: {
    productName: "example",
    categoryId: 123
  }
})

// 加载状态
const disabled = ref(false)

// 获取商品列表数据
const getGoodList = async (isNextPage = false) => {
  try {
    const res = await getSubCategoryListAPI(reqData.value)
    if (isNextPage) {
      // 拼接数据到现有商品列表
      goodList.value = [...goodList.value, ...res.data.records]
    } else {
      goodList.value = res.data.records
    }

    // 如果没有更多数据，则禁用加载
    if (res.data.records.length < reqData.value.pageSize) {
      disabled.value = true
    }
  } catch (error) {
    console.error('获取商品列表失败:', error)
  }
}

// 页面加载时获取数据
onMounted(() => getGoodList())

// 列表筛选实现
const tabChange = () => {
  reqData.value.pageNum = 1
  disabled.value = false // 重置加载状态
  getGoodList() // 重新获取数据
}

// 商品列表无限加载逻辑
const load = async () => {
  // 递增页码请求下一页
  reqData.value.pageNum++
  await getGoodList(true) // 请求下一页数据
}
</script>


<template>
  <div class="container">
    <div class="sub-container">
      <!-- <el-tabs v-model="reqData.queryCondition.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs> -->
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
        infinite-scroll-immediate-check="false"
      >
        <!-- 商品列表 -->
        <goods-item
          v-for="good in goodList"
          :key="good.id"
          :good="good"
        ></goods-item>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
