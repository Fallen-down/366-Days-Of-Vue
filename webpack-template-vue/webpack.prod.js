const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash:8].js', // contenthash 默认 20
  },
  plugins: [
    // 打包分析
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // 在static模式下，将生成带有bundle报告的单个 HTML 文件 report.html
      openAnalyzer: false, // 默认值：true。 在默认浏览器中自动打开报告。
    }),
    // gzip 压缩
    new CompressionPlugin({
      threshold: 10240,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
})
