import { listForRouter } from '@/api/menu/menu'
import { traverseRoutes } from '@/utils/route'
import { constantRoutes } from '@/router'
import Cookies from 'js-cookie'

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
    console.log(state.routes);
  }
}

const actions = {

  getSideMenus({ commit, state }) {
    return new Promise((resolve, reject) => {
      listForRouter().then(response => {
        const menus = response
        let remoteroutes = traverseRoutes(menus)
        commit('SET_ROUTES',remoteroutes);
        resolve(remoteroutes);
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
