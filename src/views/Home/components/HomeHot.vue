<script setup>
import HomePanel from './HomePanel.vue'
import { getHotGoodsAPI } from '@/apis/home'
import { ref } from 'vue'

const hotGoodsList = ref([])
const getHotGoods = async () => {
  const res = await getHotGoodsAPI()
  hotGoodsList.value = res.result
}
getHotGoods()
const goodsList = [
    {
        "name": "KGC-5系|吸收缶  KGC-5",
        "code": "KGC-5MC",
        "text": "特長：取り付けできる口罩のバリエーションが豊富。",
        "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono03338842-1.jpg"
    },
    {
        "name": "直結式小型防毒面具  面",
        "code": "DD-3",
        "text": "特長：面体中央部の伝声器により|口罩を装着したまま会話や指示が可能。",
        "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono07076833-050726-02.jpg"
    },
    {
        "name": "口罩 550|兴研|koken",
        "code": "550|",
        "text": "特長|吸着能力の高いカーボン滤盒ーをプラスしていますので|有機ガスに対応。",
        "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono09470282-080409-02.jpg"
    },
    {
        "name": "1005用KC滤芯滤盒  179",
        "code": "179000|",
        "text": "適合口罩：1005RR-04|1005RRX-04|内容量：1組 5枚 入。",
        "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08446182-100531-02.jpg"
    },
    // {
    //     "name": "防毒面具 7121RG  面体",
    //     "code": "7121RG-02",
    //     "text": "特長：有機ガス|吸収缶に区分L3対応の高性能滤盒を内蔵し|軽量。",
    //     "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono06845081-041227-02.jpg"
    // },
    // {
    //     "name": "滤芯押さえ10型L用  口",
    //     "code": "10型L用",
    //     "text": "適合：KGC-10L|内容量：1个。",
    //     "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono35124677-110526-02.jpg"
    // },
    // {
    //     "name": "仓敷化工 KURAKA 多环防",
    //     "code": "RM-60-3B  RM-60-3BN",
    //     "text": "特長：低い固有振動数が得られます。広い荷重範囲で固有振動数が調整可能。",
    //     "img": "http://www.njqcjd.net/UploadFiles/Pictrue/news/mono38745147-120215-10.jpg"
    // }
]


</script>

<template>
  <HomePanel title="人气产品" sub-title="热卖产品">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in goodsList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.img" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="desc">{{ item.code }}</p>
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

    img {
      width: 306px;
      height: 306px;
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
