import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)



const router = new Router({
  routes: [{
      path: '/index',
      component: () => import('@/pages/index'),
      children: [{
          path: '/home',
          component: () => import('@/views/home')
        },
        {
          path: '/cart',
          component: () => import('@/views/cart')
        },
        {
          path: '/mine',
          component: () => import('@/views/mine')
        },
        {
          path: '/classify',
          component: () => import('@/views/classify')
        },
        {
          path: '/isorder',
          component: () => import('@/views/isorder')
        },
        {
          path: '/shoplist',
          component: () => import('@/views/shopList')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/shopdetail',
      component: () => import('@/pages/shopDetail')
    },
    {
      path: '/login',
      component: () => import('@/pages/login')
    },
    {
      path: '/register',
      component: () => import('@/pages/register')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
// 全局守卫
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('userInfo')) {
    next()
    return
  } 
  if (to.path == '/login') {
    next()
    return
  }
next('/login')

})

export default router
