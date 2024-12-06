<script setup>
import { ref, onMounted } from 'vue';
import { getNewsList } from '@/apis/category' // Assuming getNewsList is in '@/apis/api'
import HomePanel from './HomePanel.vue';
import { useRouter } from 'vue-router';

const newsList = ref([]);
const router = useRouter();

// Fetch news list
const fetchNewsList = async () => {
  try {
    const response = await getNewsList({ pageNo: 1, pageSize: 10 });
    if (response.success && response.data.records) {
      // 筛选 keyWords 包含 "01" 的新闻
      newsList.value = response.data.records.filter(item => item.keyWords?.includes('01'));
    } else {
      console.error(response.msg || '获取新闻列表失败');
    }
  } catch (error) {
    console.error('获取新闻列表出错:', error);
  }
};

// Navigate to news details
const navigateToDetails = id => {
  router.push(`/news/${id}`); // Ensure a route exists for `/news/:id`
};

onMounted(() => fetchNewsList());
</script>


<template>
  <HomePanel title="产品资讯" subTitle="行业一手最新产品">
    <template #main>
      <ul class="news-list">
        <li v-for="item in newsList" :key="item.id" @click="navigateToDetails(item.id)">
          <div class="news-info">
            <h3>{{ item.title }}</h3>
          </div>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>


<style scoped lang="scss">
.news-list {
  display: flex;
  width: 48%;

  flex-direction: column;
  gap: 5px;

  li {
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 6px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .news-info {
      h3 {
        font-size: 16px;
        color: #333;
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
