<template>
  <div class="container">
    <h1>xx商品技术资料</h1>
    <ul class="doc-list">
      <li v-for="doc in docs" :key="doc.id" class="doc-item">
        <span class="doc-id">{{ doc.id }}</span>
        <div class="doc-info">
          <a :href="doc.path" target="_blank">{{ doc.title }}</a>
          <p>{{ doc.description }}</p>
        </div>
        <a :href="doc.path" download class="download-button">下载</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 假数据文件路径
// import mockData from '@/assets/mockData.json';

const mockData = [
  {
    "id": 1,
    "title": "xx商品技术手册",
    "description": "详细介绍xx商品的技术参数和操作方法。",
    "path": "path/to/manual.pdf"
  },
  {
    "id": 2,
    "title": "xx商品用户指南",
    "description": "指导用户如何安装和维护xx商品。",
    "path": "path/to/user_guide.doc"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
  {
    "id": 3,
    "title": "xx商品常见问题解答",
    "description": "解答用户在使用xx商品时可能遇到的常见问题。",
    "path": "path/to/faq.pdf"
  },
]



const docs = ref([]);

onMounted(() => {
  // 模拟加载技术资料数据
  docs.value = mockData;
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
  color: #333;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.doc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 600px;
}

.doc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ddd;
  /* border-radius: 8px; */
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.doc-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.doc-info {
  flex-grow: 1;
  text-align: left;
  padding-right: 20px;
}

.doc-info a {
  font-size: 1.2rem;
  color: #0073e6;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 8px;
  transition: color 0.2s;
}

.doc-info a:hover {
  color: #005bb5;
  text-decoration: underline;
}

.doc-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.download-button {
  background-color: #0073e6;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s;
}

.download-button:hover {
  background-color: #005bb5;
}

.doc-id{
  padding: 5px 15px;
}
</style>
