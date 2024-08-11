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
      <div class="newsBoxLg cart">
        <h2 style="text-align: center;">热点新闻</h2>

        <el-row
          :gutter="20"
          v-for="(row, rowIndex) in groupedBrands"
          :key="rowIndex"
        >
          <el-col :span="24" v-for="(brand, colIndex) in row" :key="colIndex">
            <div class="grid-content ep-bg-purple newsBox">
              <!-- <img :src="brand.imageUrl" alt="brand.name" /> -->
              
              <RouterLink :to="`/new/000`">
                <p class="">{{ brand.name }}
                <span style="float: right;">{{ brand.time }}</span>
              </p>
          </RouterLink>
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
      news: [
        {
          time: '2023/9/7 19:36:11',
          name: '供应日本SANWA路由器 LAN-SWHP501BK'
        },
        {
          time: '2023/8/29 15:20:22',
          name: '日本原装进口IODATA显示器 GigaCrysta EX-LDGCWF29...'
        },
        {
          time: '2023/8/18 14:58:58',
          name: '三菱 通风机扇EWF-25ASA EWF-35CTA40A2'
        },
        {
          time: '2023/7/17 21:23:47',
          name: '一级代理日本三菱PL形 保险丝 PL-G LINK 0.6KV T2A'
        },
        {
          time: '2023/7/17 21:04:15',
          name: '供应SATO保险丝底座F-7111  F-700-AL F-3321-N-1P'
        },
        {
          time: '2022/11/2 17:46:00',
          name: 'KYOWA共和手压测试泵机T-50K-P,T-100K,T-300N,T-500N'
        },
        {
          time: '2022/6/29 15:09:39',
          name: 'isel 胀紧套涨紧套 MA-5-16  MKA-8-21 MKN-8-14  MR-25-34  MT-22-47'
        },
        {
          time: '2022/6/29 15:06:32',
          name: 'is 防寒手套TS-EBMWP TS-MAMWP TS-MASWP TS-WRSWP'
        },
        {
          time: '2022/6/29 14:22:46',
          name: 'IKK润滑油1C1392A 1C1391A 1C1390A  钻头 6CD4314'
        },
        {
          time: '2022/6/29 13:59:12',
          name: 'SmartVibro振動計 IMV VM-3024H  VM-2012C'
        },
        {
          time: '2022/6/29 13:40:07',
          name: 'LUBROID	潤滑油 LS-1000| LE-1000-4L|LE-1000-240ML|'
        },
        {
          time: '2022/5/10 18:19:46',
          name: 'LANBAO 接近传感器  KBP11-4 YRMS18-6 南京千川供应'
        },
        {
          time: '2021/10/15 9:15:47',
          name: '火爆直销SAKAE色管理/棚板EKR-50BR'
        },
        {
          time: '2021/10/15 9:15:39',
          name: 'FB蓄電池FML12170  FML1208  FML1240 FML1220供应'
        },
        {
          time: '2021/10/15 9:15:32',
          name: 'FB古河 FLH蓄电池 优质供应商 FLH1220S FLH1270 FLH12240L'
        },
        {
          time: '2021/10/15 9:15:24',
          name: '古河铅蓄电池 FPX1255 FPX1275 FPX12100'
        },
        {
          time: '2021/10/15 9:15:06',
          name: '富士 变压器 FFT-SA/50/100-100 FFT-SA/3k/200-200'
        },
        {
          time: '2021/10/15 9:15:00',
          name: '富士防灾变压器 FFT-SA/500/100-100B  FFT-SA/50/200-100优质产品供应商'
        }
      ]
    }
  },
  computed: {
    groupedBrands() {
      const result = []
      for (let i = 0; i < this.news.length; i += 4) {
        result.push(this.news.slice(i, i + 4))
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
