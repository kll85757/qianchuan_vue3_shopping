<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
</script>
<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <!-- <HomeHot></HomeHot>  -->
  <HomeProduct></HomeProduct>
  <div class="row">
    <div class="col-6">
      <HomeNew></HomeNew>
    </div>
    <div class="col-6">
      <HomeHot></HomeHot>
    </div>
  </div>
</template>
