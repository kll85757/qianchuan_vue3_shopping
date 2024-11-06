<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
</script>
<template>
  <div class="home-box">
    <div class="container">
      <HomeCategory></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
    <!-- <HomeHot></HomeHot>  -->
    <HomeProduct></HomeProduct>
    <div class="container row">
      <div class="col-6">
        <HomeNew></HomeNew>
      </div>
      <div class="col-6">
        <HomeHot></HomeHot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home-box {
  .row {
    display: flex;
    padding-bottom: 20px;
    /* 使用 Flexbox 布局 */
  }

  .col-6 {
    flex: 1;
    /* 每个列占据相等的空间 */
    max-width: 50%;
    /* 最大宽度为 50% */
    box-sizing: border-box;
    /* 包括填充和边框在内的宽度计算 */
  }
}
</style>
