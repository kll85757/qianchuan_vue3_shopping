<script setup>
import { ref, onMounted, computed } from 'vue'
import { getBrandList } from '@/apis/category'

// 定义品牌列表数据
const brands = ref([])

// 获取所有品牌
const fetchAllBrands = async () => {
  let pageNo = 1
  let hasMoreData = true

  // 循环请求直到获取完所有数据
  while (hasMoreData) {
    try {
      const res = await getBrandList({
        pageNo: pageNo,
        pageSize: 10, // 每页获取10条数据
        title: '',
        categoryCode: '',
        status: '1'
      })

      const currentPageBrands = res.data.records

      // 将当前页的数据合并到总品牌列表中
      brands.value = [...brands.value, ...currentPageBrands]

      // 如果当前页的数据小于 pageSize，说明没有更多数据了
      if (currentPageBrands.length < 10) {
        hasMoreData = false
      }

      // 增加页码以获取下一页数据
      pageNo++

    } catch (error) {
      console.error('获取品牌列表失败:', error)
      hasMoreData = false
    }
  }
}

// 页面加载时获取所有品牌
onMounted(fetchAllBrands)

// 将品牌分组以便在页面中展示
const groupedBrands = computed(() => {
  const result = []
  for (let i = 0; i < brands.value.length; i += 4) {
    result.push(brands.value.slice(i, i + 4))
  }
  return result
})
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <el-row
          :gutter="20"
          v-for="(row, rowIndex) in groupedBrands"
          :key="rowIndex"
        >
          <el-col :span="6" v-for="(brand, colIndex) in row" :key="colIndex">
            <div class="grid-content ep-bg-purple brandBox">
              <!-- 显示品牌名称和图片 -->
              <img v-if="brand.imageUrl" :src="brand.imageUrl" alt="brand.name" />
              <p class="brandName">{{ brand.name }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    .brandBox {
      text-align: center;
      padding: 10px;
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
      .brandName {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .brandBox:hover {
      transform: translateY(-5px);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
