//  引入全局组件
import SvgIcon from './icons/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局对象
const AllGloablComponent = { SvgIcon }

// 对外暴露插件对象
export default {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    Object.keys(AllGloablComponent).forEach((key) => {
      app.component(key, AllGloablComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
