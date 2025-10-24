// 导入 ag-grid 样式
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// 导入主样式文件
import './index.scss'

// 样式路径映射（SCSS 入口）
const STYLE_PATHS = {
  base: './index.scss',
  components: {
    button: './components/button.scss',
    dataGrid: './components/data-grid.scss'
  },
  tokens: './tokens/_variables.scss',
  mixins: './mixins.scss'
} as const

// 导入样式的函数
export const importStyle = async (name?: keyof typeof STYLE_PATHS | 'all') => {
  if (!name || name === 'all') {
    return
  }
  
  const path = STYLE_PATHS[name]
  if (path && typeof path === 'string') {
    await import(path as string)
  }
}

// 导出样式路径常量
export { STYLE_PATHS }

// 默认导出所有样式
export default './index.scss'