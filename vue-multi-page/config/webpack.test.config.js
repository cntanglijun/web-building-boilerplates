const merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')

const testConfig = {
  devtool: 'inline-source-map',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.spec.js$/i,
        enforce: 'pre',
        use: [
          {
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(webpackCommonConfig, testConfig)
