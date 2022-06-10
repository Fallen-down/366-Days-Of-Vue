const isProductionMode = process.env.NODE_ENV === "production";

const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: "3.22",
    },
  ],
];

const plugins = [
  "@babel/plugin-transform-runtime", // 重用 Babel 注入的助手代码来节省 codeize。
  "@babel/plugin-proposal-object-rest-spread", // ES2018
];

// 生产环境
if (isProductionMode) {
  plugins.push([
    // 清除 console.log
    "transform-remove-console",
    {
      // 保留 console.error 与 console.warn
      exclude: ["error", "warn"],
    },
  ]);
}

module.exports = {
  presets,
  plugins,
};
