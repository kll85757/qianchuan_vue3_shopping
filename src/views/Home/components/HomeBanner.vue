<script setup>
import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'

// 获取轮播图数据
const bannerList = ref([])
// const getBanner = async () => {
//   const res = await getBannerAPI()
//   bannerList.value = res.result
// }
// getBanner()

bannerList.value = [
  {
    id: '20',
    imgUrl:
      'https://www.trusco.co.jp/assets/img/modules/concept-slide/img-02.jpg',
    hrefUrl: '/category/1005000',
    type: '1'
  },
  {
    id: '16',
    imgUrl: 'https://www.trusco.co.jp/assets/img/modules/concept-header/bg.jpg',
    hrefUrl: '/category/1005000',
    type: '1'
  },
  {
    id: '19',
    imgUrl:
      'https://www.trusco.co.jp/assets/img/modules/concept-visual/img-02.jpg',
    hrefUrl: '/category/1013001',
    type: '1'
  },
  {
    id: '17',
    imgUrl:
      'https://www.trusco.co.jp/assets/img/modules/concept-visual/img-03.jpg',
    hrefUrl: '/category/1019000',
    type: '1'
  },
  {
    id: '18',
    imgUrl:
      'https://www.trusco.co.jp/assets/img/modules/concept-visual/img-04.jpg',
    hrefUrl: '/category/1013001',
    type: '1'
  }
]
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="lists-container">
        <div class="list">
          <h3>公司公告</h3>
          <div>1 - 新产品发布公告</div>
          <div>2 - 年度股东大会通知</div>
          <div>3 - 公司获得行业大奖</div>
        </div>
        <div class="list">
          <h3>出货记录</h3>
          <div>1 - 2023-05-15 发货1000件</div>
          <div>2 - 2023-05-16 发货1500件</div>
          <div>3 - 2023-05-17 发货2000件</div>
        </div>
        <div class="list">
          <h3>库存商品</h3>
          <div>stu901</div>
          <div>vwx234</div>
          <div>yz5678</div>
          <div>yz5678</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }

  .lists-container {
    padding: 10px;
    height: 100%;
    background-color: #ffffff9d;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    right: 0;
    top: 0;

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #eee;
      border: 1px solid #eee;
      padding: 10px;

      h3 {
        margin-bottom: 10px;
        text-align: start;
        display: block;
        width: 100%;
      }

      div {
        margin: 5px 1px;
        text-align: start;
        display: block;
        width: 200px;
        border-bottom: 1px solid #d1d1d1;
        text-overflow:ellipsis;overflow:hidden;
        word-break:break-all; 
        word-wrap:break-word;
        white-space:nowrap;
      }
    }
  }
}
</style>
