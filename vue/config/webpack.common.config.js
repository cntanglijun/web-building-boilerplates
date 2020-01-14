const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function isProd() {
  return process.env.NODE_ENV === 'production'
}

const baseConfig = {
  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    filename: '[name].js'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [
      '.js',
      '.vue',
      '.json'
    ]
  },

  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /.pug$/i,
        use: [
          'pug-plain-loader'
        ]
      },
      {
        test: /\.ejs/i,
        use: [
          'ejs-plain-loader'
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl(us)?$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProd() ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(png|jp(e)?g|gif|svg)$/i,
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

  plugins: [
    new VueLoaderPlugin()
  ],

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

module.exports = baseConfig
