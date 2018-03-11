import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('../pages/Error')
    },
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/',
      component: () => import('../pages/Home'),
      children: [
        {
          path: '/',
          components: {
            topnavigationbar: () => import('../components/TopNavigationBar'),
            bottombar: () => import('../components/BottomBar'),
            contentlist: () => import('../pages/HomeContentList'),
            webrightnav: () => import('../pages/HomeRightNav')
          }
        }
      ]
    }
  ]
})

// 路由拦截， 跳转之前进行处理
router.beforeEach((to, from, next) => {
  // console.log('beforeEachbeforeEachbeforeEach')
  // console.log('to ======')
  // console.log(to)
  // console.log('from ======')
  // console.log(from)
  if (to.name) {
    document.title = to.name
  }
  // to.meta.title = to.name
  next()
})

// 路由拦截， 跳转之后进行处理
router.afterEach((to, from) => {
  // console.log('afterEachafterEachafterEach')
  // console.log('to ======')
  // console.log(to)
  // console.log('from ======')
  // console.log(from)
})

export default router
