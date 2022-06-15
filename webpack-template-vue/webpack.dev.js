const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

const ENV_DEV = require("./config/dev.env");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
    static: "./dist",
  },
  output: {
    filename: "[name].js",
  },
  plugins: [
    // 热加载
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(ENV_DEV),
  ],
  optimization: {
    runtimeChunk: "single",
  },
});
