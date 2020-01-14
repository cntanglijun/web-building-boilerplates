const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function isProd() {
  return process.env.NODE_ENV === 'production'
}

const config = {
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
        test: /.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
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

// 设置多页入口
const pageRoot = path.resolve(__dirname, `../src/pages`)
const files = glob.sync(path.resolve(pageRoot, '**/entry.js'))

files.forEach(file => {
  const dirname = path.resolve(path.dirname(file)).replace(pageRoot, '').slice(1).toLocaleLowerCase()
  const entry = dirname.replace(/[\\/\\]/g, '-') || 'index'

  if (!config.entry) {
    config.entry = {}
  }

  config.entry[entry] = [ file ]

  if (!config.plugins) {
    config.plugins = []
  }

  config.plugins.push(new HtmlWebpackPlugin({
    filename: path.join(dirname, 'index.html'),
    template: path.resolve(path.dirname(file), 'tpl.pug'),
    chunks: [ 'vendors', 'runtime', entry ],
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      useShortDoctype: true
    }
  }))
})

module.exports = config
