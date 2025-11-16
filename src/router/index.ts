import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CartList from '@/views/Cartlist/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/payback.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'details/:id',
          name: 'details',
          component: Details
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: PayBack
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
  // 路由滚动行为
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
