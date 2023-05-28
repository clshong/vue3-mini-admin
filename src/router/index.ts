import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
]

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
