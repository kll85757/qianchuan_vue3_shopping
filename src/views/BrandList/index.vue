<script setup>
import { useCartStore } from '@/stores'
const cartStore = useCartStore()
// 单选操作
const handleCheck = (skuId, selected) => {
  cartStore.singleCheck(skuId, selected)
}
// 全选操作
const handleAllCheck = (selected) => {
  cartStore.allCheck(selected)
}
// 购物车中改变数量
const handeChangeCount = (skuId, count) => {
  cartStore.changeCount(skuId, count)
}
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
              <img :src="brand.imageUrl" alt="brand.name" />
              <p class="brandName">{{ brand.name }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 操作栏 -->
      <!-- <div class="action">
        <div class="batch">
          共 {{ cartStore.allCount }} 件商品，已选择
          {{ cartStore.selectedCount }} 件，商品合计：
          <span class="red">¥ {{ cartStore.selectedPrice.toFixed(2) }} </span>
        </div>
        <div class="total">
          <el-button
            size="large"
            type="primary"
            @click="$router.push('/checkout')"
            >下单结算</el-button
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { name: '三菱', imageUrl: '../src/assets/images/san.png' },
        { name: '富士', imageUrl: '../src/assets/images/fuji.png' },
        {
          name: '仓敷化工 KURAKA',
          imageUrl: '../src/assets/images/kura.png'
        },
        { name: 'CEC中央电机', imageUrl: '../src/assets/images/zy.png' },
        { name: '兴研|koken', imageUrl: '../src/assets/images/kk.png' },
        { name: 'ANELVA', imageUrl: '../src/assets/images/cv.png' },
        { name: 'OMRON', imageUrl: '../src/assets/images/OMRON.png' },
        { name: '东洋技研', imageUrl: '../src/assets/images/dy.png' },
        { name: '光阳社', imageUrl: '../src/assets/images/ky.png' },
        { name: '七星科学', imageUrl: '../src/assets/images/qx.png' },
        { name: 'DYNALOY', imageUrl: '../src/assets/images/dt.png' },
        { name: '寺西', imageUrl: '../src/assets/images/sxx.png' },
        { name: '松下', imageUrl: '../src/assets/images/sx.png' },
        // { name: '相原', imageUrl: '../src/assets/images/qrcode.png' },
        { name: 'TOYOZUMI', imageUrl: '../src/assets/images/ty.png' },
        { name: 'ANYWIRE', imageUrl: '../src/assets/images/aw.png' },
        { name: '前田', imageUrl: '../src/assets/images/qt.png' },
        {
          name: '施敏打硬CEMEDINE',
          imageUrl: '../src/assets/images/sm.png'
        },
        { name: '信明电机', imageUrl: '../src/assets/images/smdj.png' },
        {
          name: '藤井电工|FUJII DENKO',
          imageUrl: '../src/assets/images/fjdk.png'
        },
        // { name: 'sakea', imageUrl: '../src/assets/images/qrcode.png' },
        { name: '春日电机', imageUrl: '../src/assets/images/cr.png' }
      ]
    }
  },
  computed: {
    groupedBrands() {
      const result = []
      for (let i = 0; i < this.brands.length; i += 4) {
        result.push(this.brands.slice(i, i + 4))
      }
      return result
    }
  }
}
</script>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    > div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
  }

  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }
}
</style>
