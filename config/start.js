/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 17:53:33
 * @LastEditTime: 2019-08-21 20:55:06
 * @LastEditors: Please set LastEditors
 */
'use strict'
const portfinder = require('portfinder')
const config = require('./config')
const devWebpackConfig = require('./webpack.base.conf')('development')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', err => {
  throw err
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
        }
      }))

      resolve(devWebpackConfig)
    }
  })
})
