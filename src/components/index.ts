// 把components中的所组件都进行全局化注册
// 通过插件的方式
import ImageViews from './ImageViews/index.vue'
import Sku from './XtxSku/index.vue'
import type { App } from 'vue'

export const componentPlugin = {
  install(app: App) {
    // app.component('组件名字'，组件配置对象)
    app.component('XtxImageView', ImageViews)
    app.component('XtxSku', Sku)
  }
}
