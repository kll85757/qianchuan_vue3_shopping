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
    img: '../src/assets/images/0001.jpg',
    time: '2023/9/15 10:23:45',
    name: '全球钢铁需求预计2024年将增长2.3%'
  },
  {
    id: 2,
    img: '../src/assets/images/0001.jpg',
    time: '2023/9/12 14:30:18',
    name: '新能源汽车带动锂电池原材料价格上涨'
  },
  {
    id: 3,
    img: '../src/assets/images/0001.jpg',
    time: '2023/9/8 09:15:33',
    name: '半导体芯片短缺影响工业自动化设备生产'
  },
  {
    id: 4,
    img: '../src/assets/images/0001.jpg',
    time: '2023/9/5 16:45:22',
    name: '石油价格波动引发化工原料成本上升'
  },
  {
    id: 5,
    img: '../src/assets/images/0001.jpg',
    time: '2023/9/2 11:20:57',
    name: '稀土元素供应紧张，电机制造商寻找替代方案'
  }
]</script>

<template>
  <HomePanel title="新闻资讯" subTitle="掌握最新行业动态">
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
