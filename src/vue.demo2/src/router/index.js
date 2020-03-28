import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'//oidc
import store from '@/store'

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
    path: '/oidc-callback', //oidc
    component: () => import('@/views/Oidc/OidcCallback.vue'),
    name: "oidcCallback" ,
    hidden:true,
  },
  {
      path: '/oidc-callback-error',//oidc
      name: 'oidcCallbackError',
      component: () => import('@/views/Oidc/OidcCallbackError.vue'),
      meta: {
          isPublic: true
      },
      hidden:true
  },
  {
    path: '/oidc-silent-renew',//oidc
    name: 'oidcSilentRenew',
    component: () => import('@/views/Oidc/OidcSilentRenew.vue'),
    meta: {
        isPublic: true
    },
    hidden:true
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
    },
    {
      path: 'lang',
      name: 'lang',
      component: () => import('@/views/VueLearn/Lang.vue'),
      meta: { title: 'Lang-i18n',icon: 'el-icon-milk-tea', affix: false }
    },
    {
      path: 'localStore',
      name: 'localStore',
      component: () => import('@/views/VueLearn/LocalStore.vue'),
      meta: { title: 'LocalStore',icon: 'el-icon-milk-tea', affix: false }
    },
    {
      path: 'directive',
      name: 'directive',
      component: () => import('@/views/VueLearn/Directive.vue'),
      meta: { title: 'Directive指令',icon: 'el-icon-milk-tea', affix: false }
    },
    {
      path: 'api',
      name: 'api',
      component: () => import('@/views/VueLearn/Api.vue'),
      meta: { title: 'Api学习',icon: 'el-icon-milk-tea', affix: false }
    },
    {
      path: 'productIframe',
      name: 'productIframe',
      component: () => import('@/views/VueLearn/ProductIframe.vue'),
      meta: { title: 'Iframe学习',icon: 'el-icon-milk-tea', affix: false }
    }
  ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach(vuexOidcCreateRouterMiddleware(store))//oidc

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

 
