import type { App } from 'vue'

// 导入组件
import { MButton, MDataGrid, MSpace } from '@moonwind-ui/components'

// 全局安装函数
const install = (app: App): void => {
  // 注册 Button 组件
  app.component('MButton', MButton)
  // 注册 DataGrid 组件
  app.component('MDataGrid', MDataGrid)
  // 注册 Space 组件
  app.component('MSpace', MSpace)
}

// 默认导出，支持全局安装
export default {
  install
}

// 按需导出组件
export {
  MButton,
  MDataGrid,
  MSpace,
}

// 导出类型
export * from '@moonwind-ui/components'

// 重新导出其他包的功能
export * from '@moonwind-ui/hooks'
export * from '@moonwind-ui/utils'

// 版本信息
export const version = '1.0.0'