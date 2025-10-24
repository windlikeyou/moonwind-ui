import DataGridComponent from './DataGrid.vue'
import { withInstall } from '@hi-kits/utils'
import type { Plugin } from 'vue'

import type { 
  DataGridProps, 
  DataGridInstance, 
  DataGridColumn,
  PaginationConfig,
} from './types'

// 使用 withInstall 包装主组件和子组件，添加明确的类型注释
const HiDataGrid: typeof DataGridComponent & Plugin = withInstall(DataGridComponent)

export { 
  HiDataGrid,
  type DataGridProps, 
  type DataGridInstance, 
  type DataGridColumn,
  type PaginationConfig,
}

// 默认导出支持全局安装的组件
export default HiDataGrid
