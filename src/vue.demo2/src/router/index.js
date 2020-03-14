import Vue from 'vue'
import Router from 'vue-router'
import product_list from '@/views/product/product_list'
import product_detail from '@/views/product/product_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product_list',
      component: product_list
    },
    {
      path: '/product/detail/:id',
      name: 'product_detail',
      component: product_detail
    }
  ]
})
