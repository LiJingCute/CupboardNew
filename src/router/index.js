import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'edit', affix: true }
      }
    ]
  },
 
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/deviceds',
    component: Layout,
    redirect: '/deviceds',
    name: 'deviceds',
    children: [
      {
        path: 'device',
        component: () => import('@/pages/deviceds/device'),
        name: 'device',
        meta: {
          title: '设备管理',
          icon: 'drag'
        }
      },
    ]
  },
  {
    path: '/gezi',
    component: Layout,
    redirect: '/gezi',
    name: 'gezi',
    children: [
      {
        path: 'gekou',
        component: () => import('@/pages/gezi/gekou'),
        name: 'gekou',
        meta: {
          title: '格口管理',
          icon: 'eye'
        }
      },
    ]
  },
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders',
    name: 'orders',
    children: [
      {
        path: 'order',
        component: () => import('@/pages/orders/order'),
        name: 'order',
        meta: {
          title: '订单管理',
          icon: 'form'
        }
      },
    ]
  },
  {
    path: '/run',
    component: Layout,
    redirect: '/run',
    name: 'run',
    children: [
      {
        path: 'videomonitoring',
        component: () => import('@/pages/run/running'),
        name: 'running',
        meta: {
          title: '运行日志',
          icon: 'link'
        }
      },
    ]
  },
  {
    path: '/open',
    component: Layout,
    redirect: '/open',
    name: 'open',
    children: [
      {
        path: 'openCup',
        component: () => import('@/pages/open/openCup'),
        name: 'openCup',
        meta: {
          title: '开箱日志',
          icon: 'lock'
        }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'system',
    meta:{
      title:"系统设置",
      icon:"guide"
    },
    children: [
      {
        path: 'user',
        component: () => import('@/pages/system/user'),
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'user'
        }
      },
      {
        path: 'role',
        component: () => import('@/pages/system/role'),
        name: 'openCup',
        meta: {
          title: '角色管理',
          icon: 'star'
        }
      },
      {
        path: 'deliver',
        component: () => import('@/pages/system/deliver'),
        name: 'openCup',
        meta: {
          title: '投递员管理',
          icon: 'skill'
        }
      },
    ]
  },
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
