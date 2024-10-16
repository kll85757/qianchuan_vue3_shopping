<script setup>
import { useCategoryStore } from '@/stores'
const categoryStore = useCategoryStore()
const brands = [
  '三菱',
  '富士',
  '仓敷化工 KURAKA',
  'CEC中央电机',
  '兴研|koken',
  'ANELVA',
  'OMRON',
  '东洋技研',
  '光阳社',
  '七星科学',
  'DYNALOY'
]
const categories = [
  { id: 1, name: '生産加工用品' },
  { id: 2, name: '工事用品' },
  { id: 3, name: '作业工具' },
  { id: 4, name: '化工环境安全用品' },
  { id: 5, name: '物流保管用品' },
  { id: 6, name: '研究管理用品' },
  { id: 7, name: '办公用品' },
  { id: 8, name: '科学实验器具' },
  { id: 9, name: '季节商品' },
  { id: 10, name: '电脑配件' },
  { id: 11, name: '家电' },
  { id: 12, name: '粗糙度比较样块' }
]
const brandList = [
  {
    id: '1005000',
    name: '三菱11',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005001',
    name: '富士',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005002',
    name: '仓敷化工 KURAKA',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005003',
    name: 'CEC中央电机',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005004',
    name: '兴研|koken',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005005',
    name: 'ANELVA',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005006',
    name: 'OMRON',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005007',
    name: '东洋技研',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005008',
    name: '光阳社',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  },
  {
    id: '1005009',
    name: '七星科学',
    picture:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png',
    children: [
      {
        id: '1005999003',
        name: '化工用品',
        picture:
          'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView',
        children: null,
        goods: null
      }
    ]
  }
]
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <!-- <li v-for="item in categoryStore.categoryList" :key="item.id"> -->
      <li v-for="item in categories" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <!-- <RouterLink v-for="i in item.children.slice(0, 2)" :key="i.id" to="/">{{
          i.name
        }}</RouterLink> -->
        <!-- 弹层layer位置 -->
        <div class="layer">
          <!-- <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4> -->
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink :to="`/detail/${i.id}`">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 41px;
      line-height: 41px;

      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;

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
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                background: #e3f9f4;
              }

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
                  color: #666;
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
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
