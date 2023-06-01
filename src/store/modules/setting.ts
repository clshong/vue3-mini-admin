import { defineStore } from 'pinia'

export const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      fold: false, //是否折叠
      rersh: false, //控制刷新
    }
  },
  actions: {},
  getters: {},
})
