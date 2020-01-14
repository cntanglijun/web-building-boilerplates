const { spawn } = require('child_process')
const webpack = require('webpack')
const { resolve } = require('path')
const rimraf = require('rimraf')
const webpackProdConfig = require('../config/webpack.prod.config')
const config = require('../config/config')

// 删除目录
rimraf.sync(resolve(__dirname, '..', config.distRoot))

function queue(funcs) {
  funcs.length && funcs.shift()(next)

  function next() {
    funcs.length && funcs.shift()(next)
  }
}

function genQueueFuncs() {
  const funcs = [

    // webpack 打包
    function(next) {
      const startDate = new Date()

      webpack(webpackProdConfig, (err, stats) => {
        if (err || stats.hasErrors()) {

          // eslint-disable-next-line no-console
          console.log(stats.toString())
        } else {

          // eslint-disable-next-line no-console
          console.log('√ webpack 打包成功，用时：', ((new Date() - startDate) / 1000).toFixed(2) + '秒')
          next()
        }
      })
    }
  ]

  // 雪碧图合并
  if (config.cssSprite) {
    funcs.push(function() {
      const startDate = new Date()

      spawn('node', [ resolve(__dirname, '.', 'sprites.js') ], { stdio: 'inherit' })
        .on('close', code => {
          if (code === 0) {

            // eslint-disable-next-line no-console
            console.log('√ 雪碧图制作成功，用时：', ((new Date() - startDate) / 1000).toFixed(2) + '秒')
          }
        })
    })
  }

  return funcs
}


queue(genQueueFuncs())
