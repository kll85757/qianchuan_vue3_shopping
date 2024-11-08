<script setup>
import { RouterLink } from 'vue-router'
import { useCategoryStore } from '@/stores'
import LayoutCart from '@/views/Layout/components/LayoutCart.vue'
// 获取pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>
      <ul class="app-header-nav">
        <!-- <li>
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
          <RouterLink to="/category/sub/14">产品中心
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
          <RouterLink to="/inquiry">咨询
            <span>Consultation</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">联系方式
            <span>Contact</span>

          </RouterLink>
        </li>
        <li>
          <RouterLink to="/productInfo">技术资料PDF
            <p>Documentation</p>
          </RouterLink>
        </li>

        <!-- <li
          class="home"
          v-for="item in categoryStore.categoryList"
          :key="item.id"
        >
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{
            item.name
          }}</RouterLink>
        </li> -->
      </ul>

      <!-- 头部购物车 -->
      <!-- <LayoutCart></LayoutCart> -->
    </div>
    <div class="search-box">
      <i class="iconfont icon-search"></i>
      <div class="input-container">
        <input type="text" placeholder="搜索品名,型号" />
        <button type="button">搜索</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 1020px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 22px;

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

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
