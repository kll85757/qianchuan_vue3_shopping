<script setup>
import { useCartStore } from '@/stores'
import { reactive } from 'vue'

const form = reactive({
  productName: '',
  brand: '',
  model: '',
  contactName: '',
  phone: '',
  email: '',
})

const onSubmit = () => {
  console.log('Form submitted with data:', form)
}

const cartStore = useCartStore()

// Additional cart-related functions if needed in other parts of the page
const handleCheck = (skuId, selected) => {
  cartStore.singleCheck(skuId, selected)
}
const handleAllCheck = (selected) => {
  cartStore.allCheck(selected)
}
const handeChangeCount = (skuId, count) => {
  cartStore.changeCount(skuId, count)
}
</script>


<template>
  <div class="xtx-cart-page" style="text-align: center;">
    <div class="container m-top-20" style="display: block;margin: auto;">
      <el-form :model="form" label-width="auto" style="max-width: 600px;display: block;text-align: center;margin:auto">
        <el-form-item label="Product Name">
          <el-input v-model="form.productName" />
        </el-form-item>
        <el-form-item label="Brand">
          <el-input v-model="form.brand" />
        </el-form-item>
        <el-form-item label="Model">
          <el-input v-model="form.model" />
        </el-form-item>
        <el-form-item label="Contact Name">
          <el-input v-model="form.contactName" />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item label="Email Address">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>




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

    >div {
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
