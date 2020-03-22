import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import menu from './modules/menu'

import { vuexOidcCreateStoreModule } from 'vuex-oidc'//oidc
import { oidcSettings } from '@/config/oidc'//oidc

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    tagsView,
    menu,
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings, 
      // Optional OIDC store settings
      { 
        namespaced: false, routeBase: '/', publicRoutePaths: []
      },
      // Optional OIDC event listeners
      {
        userLoaded: (user) => console.log('OIDC user is loaded:', user),
        userUnloaded: () => console.log('OIDC user is unloaded'),
        accessTokenExpiring: () => console.log('Access token will expire'),
        accessTokenExpired: () => console.log('Access token did expire'),
        silentRenewError: () => console.log('OIDC user is unloaded'),
        userSignedOut: () => console.log('OIDC user is signed out'),
        oidcError: (payload) => console.log(`An error occured at ${payload.context}:`, payload.error)
      }
      )
  },
  getters
})

export default store
