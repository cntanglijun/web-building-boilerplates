const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackCommonConfig = require('./webpack.common.config')
const host = '0.0.0.0'
const port = '8080'

// 开发环境支持热模块更新功能
webpackCommonConfig.entry = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://${ host }:${ port }`,
  'webpack/hot/only-dev-server'
].concat(webpackCommonConfig.entry)

const devConfig = {
  mode: 'development',

  devtool: 'eval-source-map',

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devServer: {
    hot: true,
    host,
    port,
    inline: true,
    compress: true,
    historyApiFallback: false,
    contentBase: path.resolve(__dirname, '../src'),

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
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html')
    })
  ]
}

module.exports = merge.smart(webpackCommonConfig, devConfig)
