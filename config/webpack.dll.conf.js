/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 16:59:29
 * @LastEditTime: 2019-08-20 16:52:40
 * @LastEditors: Please set LastEditors
 */
const path = require('path')
const webpack = require('webpack')
const paths = require('./paths')
const publicPath = paths.servedPath
process.env.NODE_ENV = 'production'
module.exports = {
  entry: {
    // react: [
    //   'react',
    //   'react-dom'
    // ],
    icon: [
      // 'antd/lib',
      '@ant-design/icons/lib/dist.js'
    ],
    charts: [
      'bizcharts/umd/BizCharts.js',
      '@antv/data-set/build/data-set.js'
    ]
  },
  output: {
    path: paths.appPublic,
    filename: 'static/js/[name].js',
    library: '[name]_library', // same with webpack.DllPlugin name option
    publicPath: publicPath
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(paths.appPublic, 'static/js/[name]-manifest.json'),
      name: '[name]_library',
      context: paths.appPublic
    })
  ]
}
