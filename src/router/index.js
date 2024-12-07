import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import New from '@/views/New/index.vue'
import CartList from '@/views/CartList/index.vue'
import BrandList from '@/views/BrandList/index.vue'
import Album from '@/views/Album/index.vue'
import AlbumDetail from '@/views/Album/detail.vue'
import search from '@/views/Layout/components/SearchResultPage.vue'
import listByType from '@/views/Home/components/ProductPageByType.vue'
import listByBrand from '@/views/Home/components/ProductPageByBrand.vue'
import News from '@/views/News/index.vue'
import NewsPage from '@/views/New/index.vue'
import askOffer from '@/views/askOffer/index.vue'
import fileList from '@/views/fileList/index.vue'
import AF from '@/views/AfterShopping/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'new/:id',
          component: New
        },
        {
          path: 'search',
          component: search
        },
        {
          path: 'listByType',
          component: listByType
        },
        {
          path: 'listByBrand',
          component: listByBrand
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'brandList',
          component: BrandList
        },
        {
          path: 'album',
          component: Album
        },
        {
          path: '/album/:albumId',
          name: 'AlbumDetail',
          component: AlbumDetail, // 显示相册详情
          props: true, // 通过 props 传递 albumId
        },
        {
          path: 'news',
          component: News
        },
        {
          path: '/news/:id',
          component: NewsPage
        },        
        {
          path: 'AF',
          component: AF
        },
        {
          path: 'askOffer',
          component: askOffer
        },
        {
          path: 'fileList',
          component: fileList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: PayBack
        },
        {
          path: '/qa/:section', // :section 是动态路由参数
          component: () => import('@/views/QA/index.vue')
        },
           
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由切换时，页面回到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
