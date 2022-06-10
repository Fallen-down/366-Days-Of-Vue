'use strict'

module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    {
      value: 'style',
      name: 'style:    代码格式(不影响代码运行的变动)'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加 feature，也不是修复bug)'
    },
    {
      value: 'perf',
      name: 'perf:     性能优化'
    },
    { value: 'test', name: 'test:     增加测试' },
    {
      value: 'chore',
      name: 'chore:    构建过程或辅助工具的变动'
    },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'WIP', name: 'WIP:      打包' }
  ],

  scopes: [
    { name: 'accounts' },
    { name: 'admin' },
    { name: 'exampleScope' },
    { name: 'changeMe' }
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // 步骤
  messages: {
    type: '请选择提交的类型',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的 issue（可选）',
    confirmCommit: '确认使用以上信息提交？（y/n）'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过问题
  skipQuestions: ['body', 'footer'],

  //  subject 长度限制
  subjectLimit: 100
}
