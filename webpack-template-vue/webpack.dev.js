const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

const ENV_DEV = require("./config/dev.env");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].js",
  },
  plugins: [new webpack.DefinePlugin(ENV_DEV)],
  optimization: {
    runtimeChunk: "single",
  },
});
