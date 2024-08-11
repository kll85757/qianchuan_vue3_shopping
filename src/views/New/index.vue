<script setup>
import { getDetailAPI } from '@/apis/detail'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsSku from '@/components/GoodsSku.vue'
import { useCartStore } from '@/stores/index'
import { ElMessage } from 'element-plus'
// 获取商品详情
const good = ref({})
const route = useRoute()
const getGoods = async () => {
  const res = await getDetailAPI(route.params.id)
  good.value = res.result
  // 替换 mainPictures 数组中的图片
  const newImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXIkmzMNdgVDN_TwU1RMGo-EfQDBMKMpnjQ&s'
  good.value.mainPictures = [newImage, newImage, newImage]

  console.log(good.value.mainPictures)
  console.log(good.value.mainPictures)
  console.log(good.value.mainPictures)
}
getGoods()
// 加入购物车逻辑
// 1.选择商品规格
const skuObj = ref({})
const skuChange = (sku) => {
  skuObj.value = sku
}
// 2.输入数量
const num = ref(1)
const countChange = (count) => {
  num.value = count
}
// 3.点击加入购物车
const cartStore = useCartStore()

const add = () => {
  if (skuObj.value.skuId) {
    // 规格选择完成，触发cartStore的action
    cartStore.addCart({
      id: good.value.id,
      name: good.value.name,
      picture: good.value.mainPictures,
      price: good.value.price,
      count: num.value,
      skuId: skuObj.value.skuId,
      attrsText: skuObj.value.specsText,
      selected: true
    })
    ElMessage.success('加入购物车成功')
  } else {
    // 规格没有选择，提示用户
    ElMessage.warning('请选择完规格')
  }
}
</script>
<!-- 错误原因：goods一开始{}  {}.categories -> undefined  -> undefined[1]
1. 可选链的语法?. 
2. v-if手动控制渲染时机 保证只有数据存在才渲染-->
<template>
  <div class="xtx-goods-page">
    <!-- <div class="container" v-if="good.details"> -->
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
       
          <el-breadcrumb-item>新闻内容</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="info-container">
        <div>
      
          <div class="goods-footer">
            <div class="goods-article">
              <!-- 商品详情 -->
              <div class="goods-tabs">
                <nav>
                  <a>新闻资讯</a>
                </nav>
                <div class="goods-detail">
                  <h2>
                    供应日本SANWA路由器 LAN-SWHP501BK</h2>
                    <p class="newsTime">
                      发表时间：2023/9/7 19:36:11</p>

                    <div class="newsshow2">
            <p>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	大电 DN5400E-DC12V<br>
	大电 DN5400E DN5400E-AC 路由器，HUB,无线LAN,交换机<br>
	大电 DN5204E-AC 路由器，HUB,无线LAN,交换机<br>
	SANWA LAN-SWHP501BK<br>
	SANWA LAN-SWHP801BK<br>
	大电 DN5204E-DC12V 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-G08MA-B<br>
	大电 DN5204E-DC24V<br>
	corega スイッチングハブ CO-BSW08TX2<br>
	SANWA LAN-GIH5PSEPD 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW05TX2 路由器，HUB,无线LAN,交换机<br>
	corega スイッチングハブ CO-BSW16TX2<br>
	SANWA LAN-GIGAPOE51<br>
	iodata BSH-GP08MB 路由器，HUB,无线LAN,交换机<br>
	iodata ETG-POE04 ETG-POE04<br>
	yamaha SWX SWX2310P-10G<br>
	BUFFALO BS-GUL2016PT<br>
	ELECOM EHB-UG2C08E-PL 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-MS2016P 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2322P-16MT<br>
	Panasonic タップ型スイッチ PN21050<br>
	yamaha SWX SWX2310-18GT 路由器，HUB,无线LAN,交换机<br>
	NETGEAR GS116LP-100AJS<br>
	Panasonic タップ型スイッチ PN21050B5<br>
	ELECOM EHC-F08PN-JW<br>
	Panasonic PoEスイッチ PN22129K 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2210P-18G 路由器，HUB,无线LAN,交换机<br>
	ELECOM EHC-F08MN-HJW<br>
	Panasonic PoEスイッチ PN22129KB5<br>
	Panasonic PoEスイッチ PN25249B5 路由器，HUB,无线LAN,交换机<br>
	BUFFALO BS-GS2108P<br>
	BUFFALO BS-GS2116P<br>
	VIVOTEK AWGEV104C130<br>
	yamaha SWX SWX2310-52GT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2221P-10NT 路由器，HUB,无线LAN,交换机<br>
	yamaha SWX SWX2310P-28GT<br>
	Panasonic PoEスイッチ PN231299<br>
	Panasonic PoEスイッチ PN232499 路由器，HUB,无线LAN,交换机<br>
	Panasonic PN83169<br>
	Panasonic PN83249<br>
	&nbsp;&nbsp;</p>

        </div>
                  <!-- 属性 -->
                  <!-- <ul class="attrs">
                    <li
                      v-for="item in good.details.properties"
                      :key="item.value"
                    >
                      <span class="dt">{{ item.name }}</span>
                      <span class="dd">{{ item.value }}</span>
                    </li>
                  </ul> -->
                  <!-- 图片 -->
                </div>
              </div>
            </div>
            <div class="goods-aside">
              <!-- 24小时热榜 -->
              <goods-hot :type="1"></goods-hot>
              <!-- 周热榜 -->
              <goods-hot :type="2"></goods-hot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: '¥';
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: '•';
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: '';
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      > span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  > img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;
}

.bread-container {
  padding: 25px 0;
}
</style>
