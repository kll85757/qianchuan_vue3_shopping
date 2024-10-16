<script setup>
import { getNewGoodsAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'
import HomePanel from './HomePanel.vue'

const newGoodsList = ref([])
const getNewGoods = async () => {
  // const res = await getNewGoodsAPI()
  // newGoodsList.value = res.result
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
  <HomePanel title="产品资讯" subTitle="行业一手最新产品">
    <template #main>
      <ul class="news-list">
        <li v-for="item in news" :key="item.id">
          <!-- <img :src="item.img" alt="产品图片"> -->
          <div class="news-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.time }}</p>
          </div>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  li {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .news-info {
      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
