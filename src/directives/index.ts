import { useIntersectionObserver } from '@vueuse/core'
import type { App } from 'vue'

// 定义懒加载插件

export const lazyPlugin = {
  install(app: App) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([entry]) => {
            if (entry?.isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          }
        )
      },
    })
  }
}
