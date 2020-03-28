import Vue from 'vue'
import Router from 'vue-router'
import ProductCategory from '@/components/ProductCategory'
import Product from '@/components/Product'

Vue.use(Router)

 
export const constantRoutes = [
  {
    path: '/',
    redirect: '/product'
  }
  ,
  {
    path: '/product',
    name: 'product',
    component: Product
  }
  ,
  {
    path: '/product/productCategory',
    name: 'productCategory',
    component: ProductCategory
  }
];

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
});

const router = createRouter();

export default  router
