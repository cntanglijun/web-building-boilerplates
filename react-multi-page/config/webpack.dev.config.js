const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')
const host = '0.0.0.0'
const port = '8080'

// 开发环境支持热模块更新功能
Object.keys(webpackCommonConfig.entry).forEach(entry => {
  webpackCommonConfig.entry[entry] = [ 'react-hot-loader/patch' ].concat(webpackCommonConfig.entry[entry])
})

const devConfig = {
  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  mode: 'development',

  devtool: 'eval-source-map',

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devServer: {
    hot: true,
    hotOnly: true,
    host,
    port,
    inline: true,
    compress: true,
    historyApiFallback: false,
    contentBase: path.resolve(__dirname, '../src')

    // 设置 API 代理
    /*proxy: [
      {
        context: [],
        target: '',
        secure: false,
        changeOrigin: true
      }
    ]*/
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = merge.smart(webpackCommonConfig, devConfig)
