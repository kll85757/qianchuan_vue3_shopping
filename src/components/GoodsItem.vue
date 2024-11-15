<script setup>
defineProps({
  good: {
    type: Object,
    define: () => { }
  }
})
</script>
<template>
  <RouterLink :to="`/detail/${good.id}`" class="goods-item">
    <img v-if="good.picture" v-img-lazy="good.picture" src="../assets/images/0001.jpg" alt="" />
    <p class="name ellipsis">{{ good.title }}</p>
    <p class="desc ellipsis">{{ good.description }}</p>
    <!-- <p class="price">&yen;{{ good.price }}</p> -->
  </RouterLink>
</template>
<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 100%;
  /* 确保宽度为100% */
  height: 100%;
  /* 确保高度为100% */
  text-align: center;
  transition: all 0.5s;
  padding: 10px;
  /* 可选：添加内边距以增加内容的舒适度 */

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 100%;
    height: 167px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
