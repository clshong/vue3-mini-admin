import { defineStore } from 'pinia'

import { login } from '@/api/user/index'
import type { LoginFrom, LoginRes } from '@/api/user/type'
import type { UserState } from './type/type'
// 引入本地存储方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoute } from '@/router/routes'

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识
      menuRoutes: constantRoute, //仓库存储生成菜单需要（路由）
    }
  },
  actions: {
    async UseLoign(data: LoginFrom) {
      const result: LoginRes = await login(data)
      console.log(result)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
