module.exports = {
  plugins: [
    ["postcss-short", { prefix: "x" }],
    [
      "postcss-preset-env",
      {
        postcssOptions: {
          parser: "postcss-js",
        },
        execute: true,
      },
    ],
  ],
};
