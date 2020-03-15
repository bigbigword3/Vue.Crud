import Vue from 'vue'
import Router from 'vue-router'
import product_list from '@/views/product/product_list'
import product_detail from '@/views/product/product_detail'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)


export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'product_list',
    meta:{ title:'前端固定的菜单',icon: 'el-icon-star-off'},
    children: [{
      path: 'product_list',
      name: 'product_list',
      component: () => import('@/views/product/product_list'),
      meta: { title: '产品列表',icon: 'el-icon-s-marketing', affix: true }
    },
    {
      path: 'product_category',
      name: 'product_category',
      component: () => import('@/views/product/product_category'),
      meta: { title: '产品分类',icon: 'el-icon-s-marketing', affix: true }
    },
    {
      path: '/product/detail/:id',
      name: 'product_detail',
      hidden:true,
      component: () => import('@/views/product/product_detail'),
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

 
