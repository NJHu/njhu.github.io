// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {GET} from './assets/js/request'

// Element是一套为开发者、设计师和产品经理准备的基于Vue2.0的组件库
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: `<App/>`
})

// 让我们将注册 Service Worker，使其出场并开始表演。通过添加以下注册代码来完成此操作：
// 如果你打开浏览器访问 http://localhost:8080 (即 http://127.0.0.1)，你应该会看到在 dist 目录创建出服务，并可以访问 webpack 应用程序。如果停止服务器然后刷新，则 webpack 应用程序不再可访问。
// 这就是我们最终要改变的现状。在本章结束时，我们应该要实现的是，停止服务器然后刷新，仍然可以查看应用程序正常运行。
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js').then(registration => {
//       console.log('SW registered: ', registration)
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError)
//     })
//   })
// }

Vue.prototype.GET = function (url, data, success, failure, showLoading) {
  if (showLoading === undefined) {
    // showLoading = true;
  }
  if (showLoading) {
    // vue.showLoading();
  }

  GET(url, function (response) {
    success(response)
  }, function (error) {
    failure(error)
  })
}
