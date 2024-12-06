<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getNews } from '@/apis/category'; // 确保正确导入 getNews 方法

const newsDetail = ref({});
const route = useRoute();

// 获取新闻详情
const fetchNewsDetail = async () => {
  try {
    const response = await getNews(route.params.id);
    if (response.success && response.data) {
      newsDetail.value = response.data;
    } else {
      console.error(response.msg || '获取新闻详情失败');
    }
  } catch (error) {
    console.error('获取新闻详情出错:', error);
  }
};

// 调用方法获取数据
fetchNewsDetail();
</script>

<template>
  <div class="news-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻内容</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 新闻内容 -->
      <div class="news-content">
        <div class="news-detail">
          <!-- 新闻标题 -->
          <h2>{{ newsDetail.title }}</h2>
          <!-- 点击次数与发表时间 -->
          <div class="news-meta">
            <span class="news-time">点击次数：{{ newsDetail.totalClicks || '暂无' }}</span>
            <span class="click-time">发表时间：{{ newsDetail.releaseTime || '暂无' }}</span>
          </div>
          <!-- 新闻详细内容 -->
          <div class="news-body">
            <p v-html="newsDetail.newsDetail"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-page {
  .container {
    background: #fff;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .bread-container {
    margin-bottom: 20px;
    padding: 10px 0;
  }

  .news-content {
    .news-detail {
      h2 {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
      }

      .news-meta {
        text-align: end;
        font-size: 14px;
        color: #999;

        span {
          margin-left: 10px;
        }
      }

      .news-body {
        margin-top: 20px;
        line-height: 1.8;
        color: #666;

        p {
          white-space: pre-wrap;
        }
      }
    }
  }
}
</style>
