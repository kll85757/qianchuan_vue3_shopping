<script setup>
import { getNewGoodsAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'
import HomePanel from './HomePanel.vue'

const newGoodsList = ref([])
const getNewGoods = async () => {
  const res = await getNewGoodsAPI()
  newGoodsList.value = res.result
}
onMounted(() => getNewGoods())

const news = [
  {
    id: 1,
    img:'../src/assets/images/0001.jpg',
    time: '2023/9/7 19:36:11',
    name: '供应日本SANWA路由器 LAN-SWHP501BK'
  },
  {
    id: 2,
    img:'../src/assets/images/0001.jpg',

    time: '2023/8/29 15:20:22',
    name: '日本原装进口IODATA显示器 GigaCrysta EX-LDGCWF29...'
  },
  {
    id: 3,
    img:'../src/assets/images/0001.jpg',

    time: '2023/8/18 14:58:58',
    name: '三菱 通风机扇EWF-25ASA EWF-35CTA40A2'
  },
  {
    id: 4,
    img:'../src/assets/images/0001.jpg',

    time: '2023/7/17 21:23:47',
    name: '一级代理日本三菱PL形 保险丝 PL-G LINK 0.6KV T2A'
  }
]
</script>

<template>
  <HomePanel title="行业资讯" subTitle="行业一手资讯">
    <template #main>
      <!-- 下面是插槽主体内容模版 -->
      <ul class="goods-list">
        <li v-for="item in news" :key="item.id">
          <RouterLink :to="`/new/${item.id}`">
            <img :src="item.img" alt="" />

            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.time }}</p>
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
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #EEEEEE;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
