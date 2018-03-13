'use strict'
module.exports = {
  NODE_ENV: '"production"',
  SERVER_ENV: '"' + process.argv[2] + '"',
  // 是否展示webpack构建打包之后的分析报告
  npm_config_report: true,
}
