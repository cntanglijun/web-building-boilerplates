const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConfig = require('./webpack.common.config')

const prodConfig = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[chunkhash].js',
    hashDigestLength: 8
  },

  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[chunkhash].css'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/fav.png')
      }
    ])
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
}

module.exports = merge(webpackCommonConfig, prodConfig)
