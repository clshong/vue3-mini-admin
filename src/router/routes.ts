import Layout from '@/Layout/index.vue'
export const constantRoute = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '',
      hidden: false,
      icon: '',
      showTab: false,
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
          showTab: true,
        },
      },
    ],
  },
  // {
  //   path: '/screen',
  //   name: 'Screen',
  //   component: Layout,
  //   meta: {
  //     title: '',
  //     hidden: false,
  //     icon: '',
  //     showTab: false,
  //   },
  //   children: [
  //     {
  //       path: '/screen/index',
  //       name: 'index',
  //       component: () => import('@/views/screen/index.vue'),
  //       meta: {
  //         title: '数据大屏',
  //         hidden: false,
  //         icon: 'HomeFilled',
  //         showTab: true,
  //       },
  //     },
  //   ],
  // },
  {
    path: '/screen/index',
    name: 'index',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'HomeFilled',
      showTab: true,
    },
  },
  {
    path: '/privileges',
    name: 'Privileges',
    component: Layout,
    redirect: '/permission/permission',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'HomeFilled',
      showTab: false,
    },
    children: [
      {
        path: '/permission/permission',
        name: 'Permission',
        component: () => import('@/views/privileges/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'HomeFilled',
          showTab: true,
        },
      },
      {
        path: '/permission/user',
        name: 'User',
        component: () => import('@/views/privileges/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'HomeFilled',
          showTab: true,
        },
      },
      {
        path: '/permission/role',
        name: 'Role',
        component: () => import('@/views/privileges/role/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'HomeFilled',
          showTab: true,
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      title: '错误菜单',
      hidden: true,
    },
  },
]
