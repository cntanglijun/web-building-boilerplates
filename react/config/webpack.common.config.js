const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function isProd() {
  return process.env.NODE_ENV === 'production'
}

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.jsx')
  ],

  output: {
    filename: '[name].js'
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /.css$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.styl(us)?$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.less$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProd() ? 'images/[contenthash:8].[ext]' : '[contenthash:8].[ext]'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },

  stats: {
    modules: false,
    children: false
  }
}
