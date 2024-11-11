<script setup>
// import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores'
// 置顶导航
const { y } = useScroll(window)

// 获取pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <!-- <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/category/1005000">所有产品</RouterLink>
        </li>
        <li>
          <RouterLink to="/brandList">品牌中心</RouterLink>
        </li>
        <li>
          <RouterLink to="/News">新闻资讯</RouterLink>
        </li>
        <li>
          <RouterLink to="/AF">售后服务</RouterLink>
        </li> -->

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

      <!-- <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div> -->
    </div>
    <div>
      <div class="search-box">
        <i class="iconfont icon-search"></i>
        <div class="input-container">
          <input type="text" placeholder="搜索品名,型号" />
          <button type="button">搜索</button>
        </div>
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
</style>
