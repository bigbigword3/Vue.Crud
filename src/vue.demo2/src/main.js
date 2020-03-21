// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import i18n from './lang' // Internationalization
import store from './store'
import '@/icons' // icon
import '@/permission' // permission control
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false

Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
})

Vue.use(ElementUI, {   i18n: (key, value) => i18n.t(key, value) })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
