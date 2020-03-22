'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_BASE_API:'"http://localhost:5000"',//http://localhost:5000
  CURRENT_WEB:'"http://localhost:8080"',
  AUTHORITY:'"http://localhost:5001"'
})
