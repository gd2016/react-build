/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 17:53:33
 * @LastEditTime: 2019-08-22 10:43:37
 * @LastEditors: Please set LastEditors
 */
'use strict'
const paths = require('./paths')
const fs = require('fs-extra')
const webpackConfig = require('./webpack.base.conf')('production')
const chalk = require('chalk')
const webpack = require('webpack')
const ora = require('ora')
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const spinner = ora('building for production...')
spinner.start()
fs.emptyDirSync(paths.appBuild)
// Merge with the public folder
copyPublicFolder()

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
  ))
})

function copyPublicFolder () {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  })
}
