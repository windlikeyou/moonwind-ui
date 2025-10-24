import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HiKits from 'hi-kits'
import '@hi-kits/styles/dist/index.css'

// 演示预览组件
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

// 自定义组件
import ComponentShowcase from './components/ComponentShowcase.vue'

// 自定义样式
import './custom.css'

// 滚动效果
import { initEffects } from './scroll-effects.js'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全量安装 Hi-Kits
    app.use(HiKits)

    // 注册演示预览组件
    app.component('preview', ElementPlusContainer)
    // 兼容旧命名（部分页面可能使用 <demo-preview>）
    app.component('demo-preview', ElementPlusContainer)

    // 注册自定义组件
    app.component('ComponentShowcase', ComponentShowcase)

    // 初始化滚动效果
    if (typeof window !== 'undefined') {
      initEffects()
    }
  }
} satisfies Theme