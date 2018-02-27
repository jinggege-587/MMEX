'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST:JSON.stringify(process.env.HOST || ""),
  MOCK:process.env.MOCK || false
})
