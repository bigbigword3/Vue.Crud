import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)


export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    meta:{ title:'前端固定的菜单',icon: 'el-icon-star-off'},
    children: [{
      path: 'index',
      name: 'productIndex',
      component: () => import('@/views/Product/index.vue'),
      meta: { title: '产品列表',icon: 'el-icon-s-marketing', affix: false }
    },
    {
      path: 'productCategory',
      name: 'productCategory',
      component: () => import('@/views/Product/ProductCategory'),
      meta: { title: '产品分类',icon: 'el-icon-s-marketing', affix: false }
    },
    {
      path: '/product/detail/:id',
      name: 'productDetail',
      hidden:true,
      component: () => import('@/views/Product/ProductDetail'),
      meta: { title: '产品详情',icon: 'el-icon-s-flag',  affix: false }
    }]
  },
  {
    path: '/vue',
    component: Layout,
    redirect: 'vueIndex',
    meta:{ title:'Vue前端资料菜单',icon: 'el-icon-star-off'},
    children: [{
      path: 'index',
      name: 'vueIndex',
      component: () => import('@/views/VueLearn/index.vue'),
      meta: { title: 'Vuex状态',icon: 'el-icon-ice-tea', affix: false }
    },
    {
      path: 'scss',
      name: 'scss',
      component: () => import('@/views/VueLearn/Scss.vue'),
      meta: { title: 'Scss学习',icon: 'el-icon-milk-tea', affix: false }
    }]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

 
