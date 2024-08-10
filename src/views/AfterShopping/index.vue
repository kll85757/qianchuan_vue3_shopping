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
        <el-row :gutter="20">
          <el-col :span="24" style="padding-top: 90px;">
            <h2 style="text-align: center;">售后服务说明</h2>
            <div></div>
            <div>
              <div class="saleservice2">
                <p>一、质量说明</p>
                <p>
                  1.
                  本公司对所销售仪器仪表均实行质保，保质期12个月至36个月（因设备原厂配置情况不同而不同）
                </p>
                <p>
                  2.
                  本公司对所销售的仪器仪表在30日内因质量问题（不含人为因素）引起的故障，负责退换事宜。
                </p>
                <p>
                  3.用户购买仪器仪表时均配有保修证书及仪器出厂合格证（保修证亦可用编号查询代替；进口设备的文件或配置说明与国产仪器有所不同，以原厂规定为准）。
                </p>
                <p>
                  4. 对因运输引起的质量问题，本公司概不负责，请用户按实价投保。
                </p>
                <p class="newsshow1">二、计量说明</p>
                <p>
                  1.本公司所销售的国产仪器仪表，均按国家相应的计量法规规定配有相应的MC计量生产许可标志。
                </p>
                <p>
                  2.依计量法规定，凡属强制检定的进口仪器仪表必须申请型式批准后方可在本公司销售。
                </p>
                <p>
                  3.用户需要特别计量单位检定合格证书的请提前预约，交款后五天后内交付检定合格证书。
                </p>
                <p>4.本公司负有用户所需有关计量法规知识的查询义务。</p>
                <p class="newsshow1">三、价量说明</p>
                <p>1.本公司仪器仪表公开报价均为含计量费、增值税价量</p>
                <p>
                  2.用户需要特别计量单位检定合格证书的费用由用户自行负责；不合格者由本公司负责并负担退换事宜。
                </p>
                <p>3.本公司可代办托运，运费、保险费由用户自行负责。</p>
                <p class="newsshow1">四、投诉电话：</p>
                <p class="saleservice3">025-84659345</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
     
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
