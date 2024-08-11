<script setup>
import { fetchHotGoodsAPI } from '@/apis/detail'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
// 接受type适配不同类型的热榜数据
const props = defineProps({
  type: {
    type: Number,
    default: 1
  }
})
// 1代表24小时热销榜 2代表周热销榜
// 3代表总热销榜 可以使用type去适配title和数据列表
const titleMap = {
  1: '相关推荐',
  2: '关联产品'
}
const title = computed(() => titleMap[props.type])

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
 
]

// 获取热榜数据
const goodList = ref([])
const route = useRoute()
const getHotList = async () => {
  const res = await fetchHotGoodsAPI({
    id: route.params.id,
    type: props.type
  })
  goodList.value = res.result
}
getHotList()
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in goodsInfoDemo"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.info }}</p>
      <!-- <p class="price">&yen;{{ item.price }}</p> -->
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
