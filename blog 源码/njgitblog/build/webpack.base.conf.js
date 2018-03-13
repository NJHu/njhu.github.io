'use strict'

// node自带的文件路径工具
const path = require('path')

// 工具函数集合
const utils = require('./utils')

// 配置文件
const config = require('../config')
// 解析 vue的 style css-loader
const vueLoaderConfig = require('./vue-loader.conf')

// extract-text-webpack-plugin可以提取bundle中的特定文本，将提取后的文本单独存放到另外的文件
// 这里用来提取css样式
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 获取绝对路径, dir相对于本文件的路径, return绝对路径
function resolve(dir) {
  let giveAPath = path.join(__dirname, '..', dir)
  // console.log('====================')
  // console.log(giveAPath)
  return giveAPath
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  // 对src和test文件夹下的.js和.vue文件使用eslint-loader进行代码规范检查
  // include: [resolve('src'), resolve('test')],
  include: [resolve('src'), resolve('static')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 入口文件
  entry: {
    app: './src/main.js'
  },

  // webpack输出路径和命名规则
  output: {
    // 编译输出的静态资源根路径（例如：/dist）
    path: config.build.assetsRoot,
    // 编译输出的文件名
    filename: '[name].js',
    // 编译输出的路径（例如'//cdn.xxx.com/app/'）
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 模块的解析规则
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 路径别名，方便引用模块，例如有了别名之后，
      // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
      'vue$': 'vue/dist/vue.esm.js',
      // @ 表示项目跟路径
      '@': resolve('src'),
    }
  },
  // 不同类型模块的处理规则loader
  // Loaders是Webpack最重要的功能之一，他也是Webpack如此盛行的原因。通过使用不同的Loader，Webpack可以的脚本和工具，从而对不同的文件格式进行特定处理。
  // 注意：所有的Loaders都需要在npm中单独进行安装，并在webpack.config.js里进行配置。下面我们对Loaders的配置型简单梳理一下。
//   test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
// use/loader：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
// include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
// query/option：为loaders提供额外的设置选项（可选）。
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      // {
      //   test: /\.less$/,
      //   loader: "style-loader!css-loader!less-loader",
      // },
      // {
      //   test: /\.css$/,
      //   // loader: ['style-loader', 'css-loader']
      //   // loader: "style-loader!css-loader",
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {loader: 'css-loader', options: {importLoaders: 1}},
      //       'postcss-loader'
      //     ]
      //   })
      // },
      {
        // 解析 vue 中的 style css
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        // 对src和test文件夹下的.js文件使用babel-loader将es6+的代码转成es5
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        include: [resolve('src'), resolve('static'), resolve('node_modules/webpack-dev-server/client')],
      },
      {
        // 对图片资源文件使用url-loader
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的图片转成base64编码的dataURL字符串写到代码中 (为了app增量更新考虑不进行base64）
          limit: 10000,
          // 其他的图片转移到静态资源文件夹 （为了增量更新考虑文件名不进行MD5 hash）
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        // 对多媒体资源文件使用url-loader
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的资源转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          // 其他的资源转移到静态资源文件夹
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        // 对字体资源文件使用url-loader
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于?B的资源转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          // 其他的资源转移到静态资源文件夹
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
