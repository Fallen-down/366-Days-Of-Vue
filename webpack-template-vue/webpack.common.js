const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isProductionMode = process.env.NODE_ENV === 'production'
const ENV_PUBLIC = require('./config/index')

module.exports = {
  target: 'web',
  entry: {
    // 共享的模块 dependOn
    app: './src/main.js',
    // app: { import: './src/main.js', dependOn: 'vue-vendors' },
    // 'vue-vendors': ['vue', 'lodash'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 构建前清理 /dist 文件夹
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.(m?js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.(sa|sc|c)ss$/i,
        oneOf: [
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,
            use: [
              isProductionMode
                ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: false,
                    },
                  }
                : 'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  // 开启 CSS Modules
                  modules: true,
                  // 自定义生成的类名
                  // localIdentName: '[local]_[hash:base64:5]',
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            use: [
              isProductionMode
                ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: false,
                    },
                  }
                : 'vue-style-loader',

              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // 解析器
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-template-vue',
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(ENV_PUBLIC),
    // 自动加载模块，而不必在任何地方加载模块。
    new webpack.ProvidePlugin({
      _: 'lodash',
      // $_map: ["lodash", "map"],
      Vue: 'vue',
    }),
  ],
}
