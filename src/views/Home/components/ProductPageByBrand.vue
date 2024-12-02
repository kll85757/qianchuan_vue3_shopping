<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSubCategoryListAPI } from '@/apis/category' // 假设接口一致

// 搜索结果数据
const searchResults = ref([])

// 是否正在加载
const isLoading = ref(false)

// 获取路由对象
const route = useRoute()

// 从路由参数获取 brandCode 和 brandName
const brandCode = ref(route.query.brandCode || '')
const brandName = ref(route.query.brandName || '')

// 获取搜索结果
const fetchSearchResults = async () => {
    if (!brandCode.value.trim()) {
        searchResults.value = [] // 清空之前的结果
        return
    }
    isLoading.value = true
    try {
        const params = {
            pageNo: 1,
            pageSize: 10, // 根据需求调整分页大小
            condition: {
                brandCode: brandCode.value.trim(),
                status: '1',
            },
        }
        const response = await getSubCategoryListAPI(params)
        searchResults.value = response.data?.records || [] // 假设返回数据在 `data.records` 中
    } catch (error) {
        console.error('获取搜索结果失败:', error)
    } finally {
        isLoading.value = false
    }
}

// 监听路由参数变化，触发重新搜索
watch(
    () => [route.query.brandCode, route.query.brandName],
    ([newBrandCode, newBrandName]) => {
        brandCode.value = newBrandCode || ''
        brandName.value = newBrandName || ''
        fetchSearchResults()
    },
    { immediate: true } // 初次加载也触发
)
</script>


<template>
  <div class="search-results-page">
    <header class="page-header">
      <h1>{{ brandName }} 产品</h1>
      <p v-if="brandCode">关于品牌 "{{ brandName }}" 的产品列表</p>
    </header>

    <div class="results-container">
      <template v-if="!isLoading && searchResults.length > 0">
        <div v-for="item in searchResults" :key="item.id" class="product-card">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-if="item.pictures && item.pictures.length > 0" :src="item.pictures[0]" alt=""
              class="product-image" />
            <img v-else alt="" class="product-image" />
            <div class="product-info">
              <h2 class="product-title">{{ item.title }}</h2>
              <p class="product-description">
                {{ item.description || '暂无描述信息' }}
              </p>
              <button class="details-button">查看详情</button>
            </div>
          </RouterLink>
        </div>
      </template>

      <p v-else-if="!isLoading" class="no-results">
        未找到与品牌 "{{ brandName }}" 相关的产品。
      </p>
      <p v-if="isLoading" class="loading-message">正在加载数据，请稍候...</p>
    </div>
  </div>
</template>


<style scoped lang="scss">
.search-results-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;

  .page-header {
    text-align: center;
    margin-bottom: 20px;

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      font-size: 16px;
      color: #555;
    }
  }

  .results-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    .product-card {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      .product-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .product-info {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 200px;

        .product-title {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-description {
          flex-grow: 1;
          font-size: 14px;
          color: #555;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .details-button {
          align-self: flex-end;
          padding: 10px 15px;
          font-size: 14px;
          color: #fff;
          background-color: #0083ff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;

          &:hover {
            background-color: #005bb5;
          }
        }
      }
    }
  }

  .no-results {
    font-size: 16px;
    color: #777;
    text-align: center;
    margin-top: 50px;
  }

  .loading-message {
    font-size: 16px;
    color: #555;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
