const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackCommonConfig = require('./webpack.common.config')

const host = '0.0.0.0'
const port = '8080'

const devConfig = {
  mode: 'development',

  devtool: 'cheap-eval-source-map',

  devServer: {
    hot: true,
    host,
    port,
    inline: true,
    compress: true,
    historyApiFallback: false,
    contentBase: path.resolve(__dirname, '../src')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html')
    })
  ]
}

module.exports = merge(webpackCommonConfig, devConfig)
