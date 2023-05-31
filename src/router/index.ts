import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { constantRoute } from './routes'

const routes: Array<RouteRecordRaw> = constantRoute

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
