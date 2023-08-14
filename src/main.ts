import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'

import '@/styles/index.scss'

import router from './router'

import pinia from './store'

import mUi from './components/index'

// 获取应用实例对象
const app = createApp(App)

import GloablComponent from '@/plugins'

import 'virtual:uno.css'

// 将应用挂载到挂载点上
app
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(GloablComponent)
  .use(router)
  .use(pinia)
  .use(mUi)

app.mount('#app')
