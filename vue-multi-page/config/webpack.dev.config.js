const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')

const host = '0.0.0.0'
const port = '8080'

const devConfig = {
  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  mode: 'development',

  devtool: 'cheap-eval-source-map',

  devServer: {
    hot: true,
    hotOnly: true,
    host,
    port,
    inline: true,
    compress: true,
    historyApiFallback: false,
    contentBase: path.resolve(__dirname, '../src')
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = merge(webpackCommonConfig, devConfig)
