const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const isProductionMode = process.env.NODE_ENV === "production";
const ENV_PUBLIC = require("./config/index");

module.exports = {
  target: "web",
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true, // 构建前清理 /dist 文件夹
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  // 解析器
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-template-vue",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(ENV_PUBLIC),
    // 自动加载模块，而不必在任何地方加载模块。
    new webpack.ProvidePlugin({
      _: "lodash",
      // $_map: ["lodash", "map"],
      Vue: "vue",
    }),
  ],
};
