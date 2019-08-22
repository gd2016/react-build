/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 10:08:58
 * @LastEditTime: 2019-08-21 10:10:51
 * @LastEditors: Please set LastEditors
 */
module.exports = function (api) {
  api.cache(true)

  const presets = [
    'react-app'
  ]

  return {
    presets
  }
}
