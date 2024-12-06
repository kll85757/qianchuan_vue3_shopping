<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getNewsList } from '@/apis/category'

const newsList = ref([])
const totalNews = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)

const router = useRouter()

const fetchNewsList = async () => {
  const response = await getNewsList({
    pageNo: currentPage.value,
    pageSize: pageSize.value
  })
  if (response.success && response.data.records) {
    newsList.value = response.data.records
    totalNews.value = response.data.total
  }
}

const handlePageChange = (page) => {
  currentPage.value = page
  fetchNewsList()
}

const navigateToDetails = (id) => {
  router.push(`/news/${id}`)
}

onMounted(() => fetchNewsList())
</script>

<template>
  <div class="xtx-news-page">
    <div class="container">
      <div class="newsBoxLg">
        <h2>热点新闻</h2>
        <el-row :gutter="20">
          <el-col v-for="item in newsList" :key="item.id" :span="24">
            <div class="grid-content newsBox">
              <RouterLink :to="`/news/${item.id}`">
                <p>{{ item.title }}</p>
                <span class="news-time">{{ item.releaseTime }}</span>
              </RouterLink>
            </div>
          </el-col>
        </el-row>
        <el-pagination
          v-model:currentPage="currentPage"
          :page-size="pageSize"
          :total="totalNews"
          layout="prev, pager, next"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-news-page {
  margin-top: 20px;

  .newsBoxLg {
    background: #fff;
    color: #666;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .newsBox {
      padding: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      p {
        font-size: 16px;
        color: #333;
        margin: 0;
      }

      .news-time {
        float: right;
        font-size: 14px;
        color: #999;
        background: aliceblue;
        border: 1px solid #ececec;
        border-radius: 10px;
        margin-top: -27px;
        padding: 6px;
      }
    }
  }
}
</style>
