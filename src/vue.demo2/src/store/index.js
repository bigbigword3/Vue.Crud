import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings:settings,
    tagsView,
    menu
  },
  getters
})

export default store
