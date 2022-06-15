module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 修复 Require statement not part of import —— require 报错
    '@typescript-eslint/no-var-requires': 'off',
    // 修复 ProvidePlugin 自动导入 不需要定义导致的报错
    'no-undef': 'warn',
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 'off',
    // 不允许向模板添加多个根节点
    'vue/no-multiple-template-root': 'off',
  },
}
