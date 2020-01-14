const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConfig = require('./webpack.common.config')

const prodConfig = {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'scripts/[chunkhash].js',
    hashDigestLength: 8
  },

  mode: 'production',

  devtool: 'source-map',

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
    runtimeChunk: {
      name: 'runtime'
    },
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
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../src/fav.png')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[contenthash:8].css'
    })
  ]
}

module.exports = merge.smart(webpackCommonConfig, prodConfig)
