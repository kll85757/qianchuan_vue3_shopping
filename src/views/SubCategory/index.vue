<script setup>
import { getSubCategoryAPI, getSubCategoryListAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// 获取分类面包屑导航数据
const subCategoryList = ref({})
const route = useRoute()


const goodsInfoDemo = [
  {
    name: '变压器保险丝 熔丝 PL-G 0.6KV T2A 100KA',
    id: '1',
    info: '三菱保险丝 熔丝 PL-G 0.6KV T2A 100KA PL-G 7.2/3.6kV T1A 40kA PL-G 7.2/3.6kV T2A 40kA',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg"

  },
  {
    name: '施敏打硬 施敏打印cemedine防水胶 8060',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    id: '2',
    info: '耐候性・耐熱性・耐寒性に優れ－50℃～150℃の温度範囲でゴム状弾'
  },
  {
    name: 'IBS 光阻 阀C5-4-P特价直销',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    id: '3',
    info: 'C5-3-K C5-3-P C5-3-V C5-4-K C5-4-P C5-4-V'
  },
  {
    name: '防尘口罩 7191DK-XRB-02',
    id: '4',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    info: '特長：滤盒ーはラウンドプリーツ状に一体抄紙成形したもので|过滤'
  },
  {
    name: '防毒面具 R-5X 面体',
    id: '5',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    info: '特長：R-5と同一の面体で|装着安定性に優れる4点式しめひもを採用'
  },
  {
    name: 'KGC-5系|吸收缶 KGC-5MC',
    id: '6',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    info: '特長：取り付けできる口罩のバリエーションが豊富。'
  },
  {
    name: '防毒面具 R-5X 面体',
    id: '7',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    info: '特長：R-5と同一の面体で|装着安定性に優れる4点式しめひもを採用'
  },
  {
    name: '1005用KC滤芯滤盒 179000',
    id: '8',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    info: '適合口罩：1005RR-04|1005RRX-04|内容量：1組 5枚 入'
  },
  {
    name: '直結式小型防毒面具 面体 DD-3',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    id: '9',
    info: '特長：面体中央部の伝声器により|口罩を装着したまま会話や指示が'
  },
  {
    name: '仓敷化工 KURAKA 丸型防振橡胶 KA-30-26HCR KA-30CR',
    picture: "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg",

    id: '10',
    info: '特長：構造が簡単で安価 ： 構造が簡単であり、取付けも容易です'
  }
]



// 获取分类商品数据
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryListAPI(reqData.value)
  // goodList.value = res.result.items
  goodList.value = goodsInfoDemo
}
onMounted(() => getGoodList())

// 列表筛选实现
const tabChange = () => {
  reqData.value.page = 1
  getGoodList()
}

// 商品列表无限加载逻辑
const disabled = ref(false)
const load = async () => {
  // 获取下一页数据
  reqData.value.page++
  const res = await getSubCategoryListAPI(reqData.value)
  // 拼接数据
  goodList.value = [...goodList.value, ...goodsInfoDemo];
  // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <!-- <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${subCategoryList.parentId}` }"
          >{{ subCategoryList.parentName }}</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
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
