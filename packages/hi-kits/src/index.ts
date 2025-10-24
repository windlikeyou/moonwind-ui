import type { App } from 'vue'

// 导入组件
import { HiButton, HiDataGrid } from '@hi-kits/components'

// 全局安装函数
const install = (app: App): void => {
  // 注册 Button 组件
  app.component('HiButton', HiButton)
  // 注册 DataGrid 组件
  app.component('HiDataGrid', HiDataGrid)
}

// 默认导出，支持全局安装
export default {
  install
}

// 按需导出组件
export {
  HiButton,
  HiDataGrid
}

// 导出类型
export * from '@hi-kits/components'

// 重新导出其他包的功能
export * from '@hi-kits/hooks'
export * from '@hi-kits/utils'

// 版本信息
export const version = '1.0.0'