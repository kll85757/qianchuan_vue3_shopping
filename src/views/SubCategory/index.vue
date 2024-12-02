<script setup>
import { getSubCategoryAPI, getSubCategoryListAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


const categories = [
  {
    id: 1, name: '生産加工用品', menu: [
      { id: 1.1, name: '作業服・安全靴' },
      { id: 1.2, name: '手袋' },
      { id: 1.3, name: 'マスク' },
      { id: 1.4, name: '作業服' },
      { id: 1.5, name: '安全靴・作業靴' },
      { id: 1.6, name: '安全保護具' },
      { id: 1.7, name: 'テープ' },
      { id: 1.8, name: '物流用品' },
      { id: 1.9, name: '保管用品' },
      { id: 1.10, name: '梱包用品' }
    ]
  },
  // { id: 2, name: '工事用品' },
  {
    id: 3, name: '作业工具', menu: [
      { id: 3.1, name: '作業工具' },
      { id: 3.2, name: '電動工具' },
      { id: 3.3, name: 'エンジン工具' },
      { id: 3.4, name: '空圧工具' },
      { id: 3.5, name: '縫製用品' }
    ]
  },
  {
    id: 4, name: '化工环境安全用品', menu: [
      { id: 4.1, name: 'スプレー・オイル・グリス' },
      { id: 4.2, name: '塗料' },
      { id: 4.3, name: '接着剤・補修材' },
      { id: 4.4, name: '溶接用品' }
    ]
  },
  {
    id: 5, name: '農業資材・園芸用品', menu: [
      { id: 5.1, name: '農業・園芸資材' },
      { id: 5.2, name: '肥料・農薬・除草剤・種' },
      { id: 5.3, name: '農具' },
      { id: 5.4, name: '農業機械' }
    ]
  },
  {
    id: 6, name: '厨房機器/店舗用品', menu: [
      { id: 6.1, name: '厨房用品' },
      { id: 6.2, name: '卓上消耗品' },
      { id: 6.3, name: '店舗什器・備品' }
    ]
  },
  {
    id: 7, name: '医療・介護用品', menu: [
      { id: 7.1, name: '救急・衛生' },
      { id: 7.2, name: 'ヘルスケア' },
      { id: 7.3, name: '医療' },
      { id: 7.4, name: '介護用品' }
    ]
  },
  {
    id: 8, name: '建築金物・建材', menu: [
      { id: 8.1, name: '塗装・養生・内装用品' },
      { id: 8.2, name: '建築金物' },
      { id: 8.3, name: '建材・エクステリア' },
      { id: 8.4, name: '住設機器' }
    ]
  },
  {
    id: 9, name: '住設機器', menu: [
      { id: 9.1, name: '空調・電設資材' },
      { id: 9.2, name: '電気材料' }
    ]
  },
  {
    id: 10, name: '電気材料', menu: [
      { id: 10.1, name: '配管・水廻り設備部材' },
      { id: 10.2, name: 'ポンプ・送風機・電熱機器' },
      { id: 10.3, name: 'コンプレッサー・空圧機器・ホース' },
      { id: 10.4, name: '油圧機器・油圧ホース' },
      { id: 10.5, name: 'SMC製品簡単検索' }
    ]
  },
  {
    id: 11, name: 'メカニカル部品/機構部品', menu: [
      { id: 11.1, name: 'メカニカル部品' },
      { id: 11.2, name: '機構部品' }
    ]
  },
  {
    id: 12, name: '制御機器', menu: [
      { id: 12.1, name: '制御機器' },
      { id: 12.2, name: 'はんだ関連・静電気対策用品' },
      { id: 12.3, name: 'オムロン製品簡単検索' }
    ]
  },
  {
    id: 13, name: 'ねじ・ボルト・釘/素材', menu: [
      { id: 13.1, name: 'ねじ・ボルト・釘' },
      { id: 13.2, name: '素材(切板・プレート・丸棒・パイプ・シート)' }
    ]
  },

]

const mainCategories = ref([
  { id: 1, name: '生産加工用品' },
  { id: 3, name: '作业工具' },
  { id: 4, name: '化工环境安全用品' },
  { id: 5, name: '農業資材・園芸用品' },
  { id: 6, name: '厨房機器/店舗用品' },
  { id: 7, name: '医療・介護用品' },
  { id: 8, name: '建築金物・建材' },
  { id: 9, name: '住設機器' },
  { id: 10, name: '電気材料' },
  { id: 11, name: 'メカニカル部品/機構部品' },
  { id: 12, name: '制御機器' },
  { id: 13, name: 'ねじ・ボルト・釘/素材' },
])

const categoryRefs = ref({})


// 获取分类商品数据
const goodList = ref([])
const reqData = ref({
  pageNum: 1,
  pageSize: 50,
  queryCondition: {
    productName: "example",
    categoryId: 123
  }
})

// 加载状态
const disabled = ref(false)

// 获取商品列表数据
const getGoodList = async (isNextPage = false) => {
  try {
    const res = await getSubCategoryListAPI(reqData.value)
    if (isNextPage) {
      // 拼接数据到现有商品列表
      goodList.value = [...goodList.value, ...res.data.records]
    } else {
      goodList.value = res.data.records
    }

    // 如果没有更多数据，则禁用加载
    if (res.data.records.length < reqData.value.pageSize) {
      disabled.value = true
    }
  } catch (error) {
    console.error('获取商品列表失败:', error)
  }
}

// 页面加载时获取数据
onMounted(() => getGoodList())

onMounted(() => {
  mainCategories.value.forEach((category) => {
    categoryRefs.value[category.id] = document.getElementById(`category-${category.id}`)
  })
})

const scrollToCategory = (id) => {
  const section = categoryRefs.value[id]
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


</script>


<template>
  <div class="container">

    <div class="category-nav">
      <h2 class="type_title">
        <el-icon><Memo /></el-icon>
        <span>全部分类</span>
      </h2>
      <ul>
        <li v-for="category in mainCategories" @click="scrollToCategory(category.id)" :key="category.id">
            {{ category.name }}
        </li>
      </ul>
    </div>

    <ul class="menu">
      <li v-for="item in categories" :key="item.id" :id="`category-${item.id}`">
        <RouterLink to="/">{{ item.name }}</RouterLink>
  
        <div class="layer">
          <ul>
            <li v-for="i in item.menu" :key="i.id">
             
              <RouterLink
                :to="`/listByType?categoryCode=${i.id}&categoryName=${i.name}`"
              >
                <div class="info">
                  <p class="name ellipsis-2">{{ i.name }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="sub-container">

    </div>
  </div>
</template>


<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}

.menu {
  li {
    padding-left: 40px;
    // height: 41px;
    line-height: 41px;

    // &:hover {
    //   background: $xtxColor;
    // }

    a {
      margin-right: 4px;
      color: #0096ff;

      &:first-child {
        font-size: 16px;
      }
    }

    .layer {
      // width: 464px;
      // height: 500px;
      background: rgba(255, 255, 255, 0.8);
      left: 250px;
      top: 0;
      padding: 15px 15px;
      min-width: 10em;
      /* 设置最大宽度为10em */
      overflow: hidden;
      /* 隐藏超出部分 */
      white-space: nowrap;
      /* 防止换行 */
      text-overflow: ellipsis;
      /* 超出显示省略号 */



      h4 {
        font-size: 20px;
        font-weight: normal;
        line-height: 80px;

        small {
          font-size: 16px;
          color: #666;
        }
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 200px;
          height: 43px;
          text-align: center;
          margin-right: 15px;
          margin-bottom: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          background: #ffffff;
          padding-left: 0;

          &:hover {
            background-color: #0096ff;
            color: #fff;
            font-weight: bold;
          }


          a {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            padding: 10px;

            // &:hover {
            //   background: #0084ff;
            //   color: #fff !important;
            //   border-radius: 5px;
            // }

            img {
              width: 95px;
              height: 95px;
            }

            .info {
              padding-left: 10px;
              line-height: 24px;
              overflow: hidden;

              .name {
                font-size: 16px;
                color: #2f2f2f;
              }

              .desc {
                color: #999;
              }

              .price {
                font-size: 22px;
                color: $priceColor;

                i {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }

    // 关键样式  hover状态下的layer盒子变成block
    // &:hover {
    //   .layer {
    //     display: block;
    //   }
    // }
  }
}
.category-nav {
  padding: 10px;
  background-color: #3399ff; /* Light background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern touch */
}

.category-nav > ul {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  gap: 10px; /* Adds spacing between items */
  justify-content: center; /* Centers the items */
  list-style-type: none; /* Removes default bullets */
  padding: 0;
  margin: 0;
}

.category-nav > ul > li {
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px; /* Rounds corners for a modern look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds subtle depth */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover transition */
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  flex: 1 1 auto; /* Allows the items to be auto-sized */
}

.category-nav > ul > li > button {
  background-color: #007bff00;
  border: 0;
}

.category-nav > ul > li:hover {
  transform: translateY(-3px); /* Slight lift on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Deepens shadow on hover */
  background-color: #e9f5ff; /* Light hover color */
  color: #007bff;
}

.type_title{
  text-align: start;
  color: #fff;
  padding: 5px;
  line-height: 25px;
  height: 25px;
}
.type_title > i{
  display: inline-block;
  line-height: 45px;
  height: 45px;

}
.type_title > span{
  display: inline-block;
  line-height: 25px;
  height: 25px;

}

</style>
