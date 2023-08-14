// vue中导入App
import { App } from 'vue'

import table from './table/index'

const components = [table]

export default {
  install(app: App) {
    components.map((component) => {
      app.use(component)
    })
  },
}
