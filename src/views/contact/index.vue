<template>
  <div class="container">
    <h1>联系方式</h1>
    <ul class="contact-list">
      <li>技术电话: 025-84659345 8662 / 6095</li>
      <li>公司传真: (86)025-84299530</li>
      <li>公司邮箱: qc84659345@163.com</li>
      <li>地址: 南京市玄武区珠江路100号 邮政编码: 210008</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contactInfo = ref([]);

// Your script logic goes here
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
  margin-bottom: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
}

li {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
