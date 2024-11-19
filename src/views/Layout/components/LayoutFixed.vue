<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores'
import { getSubCategoryListAPI } from '@/apis/category'

// 滚动事件
const { y } = useScroll(window)

// 获取 Pinia 中的数据
const categoryStore = useCategoryStore()

// 搜索框的输入值
const searchText = ref('')

// 搜索结果数据
const searchResults = ref([])

// 是否正在加载
const isLoading = ref(false)

// 是否显示弹窗
const showModal = ref(false)

// 搜索方法
const handleSearch = async () => {
  if (!searchText.value.trim()) {
    return
  }
  isLoading.value = true
  try {
    const params = {
      pageNo: 1,
      pageSize: 10, // 根据需求调整分页大小
      condition: {
        title: searchText.value.trim(),
        status: '1',
      },
    }
    const response = await getSubCategoryListAPI(params)
    searchResults.value = response.data?.records || [] // 假设返回数据在 `data.records` 中
    showModal.value = true // 显示弹窗
  } catch (error) {
    console.error('搜索失败:', error)
  } finally {
    isLoading.value = false
  }
}

// 关闭弹窗
const closeModal = () => {
  showModal.value = false
}
</script>



<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <!-- 导航链接 -->
        
        <li>
          <RouterLink to="/category/sub/14">产品目录
            <span>Product</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/album">产品相册
            <span>Ablum</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/brandList">品牌专区
            <span>Brand</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/news">新闻资讯
            <span>News</span>
          </RouterLink>
        </li>
        <li>
        
          <RouterLink to="/qa/about">公司概要
            <span>Company</span>
          </RouterLink>

        </li>
        <li>
          <RouterLink to="/collaboration">合作案例
            <span>Cooperation</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/askOffer">咨询
            <span>Consultation</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">联系方式
            <span>Contact</span>

          </RouterLink>
        </li>
        <li>
          <RouterLink to="/fileList">技术资料PDF
            <p>Documentation</p>
          </RouterLink>
        </li>
        <!-- <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{
            item.name
          }}</RouterLink>
        </li> -->

      </ul>
    </div>
    <div>
      <div class="search-box">
        <i class="iconfont icon-search"></i>
        <div class="input-container">
          <input
            type="text"
            placeholder="搜索品名,型号"
            v-model="searchText"
          />
          <button type="button" @click="handleSearch" :disabled="isLoading">
            {{ isLoading ? '搜索中...' : '搜索' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 弹窗 -->
  <div v-if="showModal" class="modal-backdrop" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h3>搜索结果</h3>
        <button @click="closeModal" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <ul v-if="searchResults.length > 0" class="results-list">
          <li v-for="item in searchResults" :key="item.id">
            <img :src="item.image" alt="Product Image" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
        <p v-else>未找到与 "{{ searchText }}" 相关的产品。</p>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.app-header-sticky {
  width: 100%;
  height: 130px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url('@/assets/images/logo.png') no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.search-box {
  height: 32px;
  margin: 0 20% 25px;
  position: relative;
  border: 1px solid #0083ff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* 垂直居中 */
  padding: 0 5px;

  .icon-search {
    font-size: 18px;
    color: #0093ff;
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 8px;
  }

  input {
    flex: 8;
    padding-left: 5px;
    height: 100%;
    border: none;
    outline: none;
    color: #0093ff;
    font-size: 14px;
    border-radius: 5px 0 0 5px;
  }

  button {
    flex: 2;
    height: 100%;
    border: none;
    outline: none;
    background-color: #0083ff;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
}

.app-header-nav {
  width: 1020px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    text-align: center;

    a {
      font-size: 12px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}

.search-results {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 5px 0;
      font-size: 14px;
    }
  }
}

.no-results {
  margin-top: 20px;
  color: #999;
  font-size: 14px;
  text-align: center;
}


/* 背景遮罩 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 弹窗样式 */
.modal {
  background-color: #fff;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;

  h3 {
    margin: 0;
    font-size: 16px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #333;

    &:hover {
      color: red;
    }
  }
}

.modal-body {
  padding: 20px;

  .results-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 5px;
      }

      p {
        font-size: 12px;
        text-align: center;
        margin: 0;
      }
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
}

</style>
