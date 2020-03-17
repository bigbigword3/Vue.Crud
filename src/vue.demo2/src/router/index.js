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

 
