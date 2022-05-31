const isProduction = process.env.NODE_ENV === 'production' // 是否是生产模式
const plugins = []

if (isProduction) {
  // 生产环境配置
  plugins.push('transform-remove-console') // 去掉 console
} else {
  console.log(process.env.ENV)
  // 开发测试环境配置
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
