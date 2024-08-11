<script setup>
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { getGoodsProductAPI } from '@/apis/home'
import GoodsItem from '@/components/GoodsItem.vue'
// 获取热门品牌数据
const goodsProductList = ref([])
const getGoodsProduct = async () => {
  const res = await getGoodsProductAPI()
  goodsProductList.value = res.result
}

const goodsDemo = [
  {
    id: '1005000',
    name: '特价产品',
    picture:
      '../src/assets/images/p01.png' ,
    saleInfo: '1111',
    children: [
      {
        id: '1005999003',
        name: '居家生活用品',
        layer: 2,
        parent: null
      },
      {
        id: '1008017',
        name: '收纳',
        layer: 2,
        parent: null
      },
      {
        id: '1017000',
        name: '宠物食品',
        layer: 2,
        parent: null
      },
      {
        id: '109243003',
        name: '艺术藏品',
        layer: 2,
        parent: null
      },
      {
        id: '109248004',
        name: '宠物用品',
        layer: 2,
        parent: null
      },
      {
        id: '109293000',
        name: '家庭医疗',
        layer: 2,
        parent: null
      },
      {
        id: '109308000',
        name: '中医保健',
        layer: 2,
        parent: null
      }
    ],
    goods: [
      {
        id: '113536',
        name: '三菱電磁開閉器用UN-HZ12 UN-HZ12CX',
        desc: '型号：UN-HZ12 UN-HZ12CX，品牌：三菱',
        price: '500.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 120
      },
      {
        id: '113527',
        name: '三菱電球形蛍光灯EFD15ED12E17 EFD15EL12E17',
        desc: '型号：EFD15ED12E17 EFD15EL12E17 EFD15EN12E17，品牌：三菱',
        price: '300.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 95
      },
      {
        id: '113457',
        name: '三菱コンパクト形蛍光灯 FDL13EX-D FDL13EX-',
        desc: '型号：FDL13EX-D FDL13EX-L FDL13EX-N FDL18EX-D，品牌：三菱',
        price: '350.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 88
      },
      {
        id: '113442',
        name: '三菱漏電断路器 NV30-CS 3P 5A 100-230V',
        desc: '型号：NV30-CS 3P 5A 100-230V，品牌：三菱',
        price: '600.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 110
      },
      {
        id: '113383',
        name: '三菱電球形蛍光灯EFD10ED8E17 EFD10EL8E17 E',
        desc: '型号：EFD10ED8E17 EFD10EL8E17 EFD10EN8E17，品牌：三菱',
        price: '250.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 75
      },
      {
        id: '113366',
        name: '三菱天井埋込形換気扇 VD-18ZB8 VD-20ZB8 VD',
        desc: '型号：VD-18ZB8 VD-20ZB8 VD-23ZB8，品牌：三菱',
        price: '450.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 140
      }
    ]
  },
  {
    id: '1005002',
    name: '热卖产品',
    picture:
    '../src/assets/images/p01.png' ,
    saleInfo: '3折起狂欢',
    children: [
      {
        id: '1005012',
        name: '南北干货',
        layer: 2,
        parent: null
      },
      {
        id: '1036003',
        name: '调味酱菜',
        layer: 2,
        parent: null
      },
      {
        id: '109201001',
        name: '方便食品',
        layer: 2,
        parent: null
      },
      {
        id: '109206007',
        name: '米面粮油',
        layer: 2,
        parent: null
      },
      {
        id: '109264007',
        name: '名酒馆',
        layer: 2,
        parent: null
      },
      {
        id: '109285003',
        name: '进口酒',
        layer: 2,
        parent: null
      }
    ],
    goods: [
      {
        id: '113536',
        name: '三菱電磁開閉器用UN-HZ12 UN-HZ12CX',
        desc: '型号：UN-HZ12 UN-HZ12CX，品牌：三菱',
        price: '500.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 120
      },
      {
        id: '113527',
        name: '三菱電球形蛍光灯EFD15ED12E17 EFD15EL12E17',
        desc: '型号：EFD15ED12E17 EFD15EL12E17 EFD15EN12E17，品牌：三菱',
        price: '300.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 95
      },
      {
        id: '113457',
        name: '三菱コンパクト形蛍光灯 FDL13EX-D FDL13EX-',
        desc: '型号：FDL13EX-D FDL13EX-L FDL13EX-N FDL18EX-D，品牌：三菱',
        price: '350.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 88
      },
      {
        id: '113442',
        name: '三菱漏電断路器 NV30-CS 3P 5A 100-230V',
        desc: '型号：NV30-CS 3P 5A 100-230V，品牌：三菱',
        price: '600.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 110
      },
      {
        id: '113383',
        name: '三菱電球形蛍光灯EFD10ED8E17 EFD10EL8E17 E',
        desc: '型号：EFD10ED8E17 EFD10EL8E17 EFD10EN8E17，品牌：三菱',
        price: '250.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 75
      },
      {
        id: '113366',
        name: '三菱天井埋込形換気扇 VD-18ZB8 VD-20ZB8 VD',
        desc: '型号：VD-18ZB8 VD-20ZB8 VD-23ZB8，品牌：三菱',
        price: '450.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 140
      }
    ]
  },
  {
    id: '1010000',
    name: '库存产品',
    picture:
    '../src/assets/images/p01.png' ,
    saleInfo: '大额优惠\r\n等你来拿',
    children: [
      {
        id: '109303000',
        name: '钱包/胸包',
        layer: 2,
        parent: null
      },
      {
        id: '109311005',
        name: '女式靴子',
        layer: 2,
        parent: null
      },
      {
        id: '109311006',
        name: '女式休闲鞋',
        layer: 2,
        parent: null
      },
      {
        id: '109311007',
        name: '女式运动鞋',
        layer: 2,
        parent: null
      },
      {
        id: '109315000',
        name: '11.11购物狂欢',
        layer: 2,
        parent: null
      },
      {
        id: '109318003',
        name: '【年末狂欢季】',
        layer: 2,
        parent: null
      }
    ],
    goods: [
      {
        id: '113536',
        name: '三菱電磁開閉器用UN-HZ12 UN-HZ12CX',
        desc: '型号：UN-HZ12 UN-HZ12CX，品牌：三菱',
        price: '500.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 120
      },
      {
        id: '113527',
        name: '三菱電球形蛍光灯EFD15ED12E17 EFD15EL12E17',
        desc: '型号：EFD15ED12E17 EFD15EL12E17 EFD15EN12E17，品牌：三菱',
        price: '300.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 95
      },
      {
        id: '113457',
        name: '三菱コンパクト形蛍光灯 FDL13EX-D FDL13EX-',
        desc: '型号：FDL13EX-D FDL13EX-L FDL13EX-N FDL18EX-D，品牌：三菱',
        price: '350.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 88
      },
      {
        id: '113442',
        name: '三菱漏電断路器 NV30-CS 3P 5A 100-230V',
        desc: '型号：NV30-CS 3P 5A 100-230V，品牌：三菱',
        price: '600.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 110
      },
      {
        id: '113383',
        name: '三菱電球形蛍光灯EFD10ED8E17 EFD10EL8E17 E',
        desc: '型号：EFD10ED8E17 EFD10EL8E17 EFD10EN8E17，品牌：三菱',
        price: '250.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 75
      },
      {
        id: '113366',
        name: '三菱天井埋込形換気扇 VD-18ZB8 VD-20ZB8 VD',
        desc: '型号：VD-18ZB8 VD-20ZB8 VD-23ZB8，品牌：三菱',
        price: '450.00',
        picture:
          'http://www.njqcjd.net/UploadFiles/Pictrue/news/mono08583994-070417-02.jpg',
        orderNum: 140
      }
    ]
  },
 
]

onMounted(() => getGoodsProduct())
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsDemo" :key="cate.id">
      <template #main>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-img-lazy="cate.picture" />
            <strong class="label">
              <!-- <span>化工用品</span> -->
              <!-- <span>{{ cate.saleInfo }}</span> -->
            </strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in cate.goods" :key="good.id">
              <GoodsItem :good="good"></GoodsItem>
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
