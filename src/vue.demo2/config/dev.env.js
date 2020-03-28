'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
/*
  VUE_APP_BASE_API:'"http://localhost:5000"',//http://localhost:5000
  CURRENT_WEB:'"http://localhost:8080"',
  AUTHORITY:'"http://localhost:5001"'
*/
  VUE_APP_BASE_API:'"http://47.112.212.161:902"',
  CURRENT_WEB:'"http://localhost:8080"',
  AUTHORITY:'"http://47.112.212.161:903"',
  PRODUCT_HOST:'"http://localhost:9080"'
})
