import type { ColDef, GridApi, GridOptions } from 'ag-grid-community'
import type { VNode } from 'vue'

// 基础类型定义
export type Key = string | number

// Vue 节点类型
export type VueNode = VNode | string | number | null | undefined

// 列定义接口 - 简化版本，避免类型冲突
export interface DataGridColumn<T = any> {
  // 字段名
  field?: string | keyof T
  
  // 列标题
  headerName?: string
  
  // 列宽度
  width?: number
  
  // 最小宽度
  minWidth?: number
  
  // 最大宽度
  maxWidth?: number
  
  // 是否可排序
  sortable?: boolean
  
  // 是否可筛选
  filter?: boolean | string | any
  
  // 是否可调整大小
  resizable?: boolean
  
  // 列对齐方式
  cellStyle?: any
  
  // 自定义渲染器
  cellRenderer?: string | any
  
  // 自定义渲染器参数
  cellRendererParams?: any
  
  // 值格式化器
  valueFormatter?: (params: any) => string
  
  // 值获取器
  valueGetter?: string | ((params: any) => any)
  
  // 值设置器
  valueSetter?: string | ((params: any) => boolean)
  
  // 编辑器
  cellEditor?: string | any
  
  // 编辑器参数
  cellEditorParams?: any
  
  // 是否可编辑
  editable?: boolean | ((params: any) => boolean)
  
  // 是否隐藏
  hide?: boolean
  
  // 是否固定
  pinned?: 'left' | 'right' | null
  
  // 列分组
  columnGroupShow?: 'open' | 'closed'
  
  // 工具提示
  tooltipField?: string
  
  // 工具提示值获取器
  tooltipValueGetter?: (params: any) => string
  
  // 头部工具提示
  headerTooltip?: string
  
  // 是否启用行拖拽
  rowDrag?: boolean
  
  // 是否启用行拖拽多选
  rowDragMultiRow?: boolean
  
  // 是否启用行拖拽整行
  rowDragEntireRow?: boolean
  
  // 是否启用行拖拽文本
  rowDragText?: (params: any, dragItemCount: number) => string
  
  // 检查框选择
  checkboxSelection?: boolean | ((params: any) => boolean)
  
  // 头部检查框选择
  headerCheckboxSelection?: boolean | ((params: any) => boolean)
  
  // 头部检查框选择过滤空白
  headerCheckboxSelectionFilteredOnly?: boolean
  
  // 是否显示禁用的检查框
  showDisabledCheckboxes?: boolean
  
  // 其他 ag-grid 支持的属性
  [key: string]: any
}

// 分页配置
export interface PaginationConfig {
  current?: number
  pageSize?: number
  total?: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: boolean | ((total: number, range: [number, number]) => string)
  pageSizeOptions?: string[]
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
}

// 行选择配置
export interface RowSelection<T = any> {
  type: 'radio' | 'checkbox'
  selectedKeys?: Key[]
  onChange?: (keys: Key[], records: T[]) => void
  getCheckboxProps?: (record: T) => { disabled?: boolean; name?: string }
  onSelect?: (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void
  onSelectInvert?: (selectedRowKeys: Key[]) => void
  selections?: Array<{
    key: string
    text: string
    onSelect?: (changeableRowKeys: Key[]) => void
  }>
  hideSelectAll?: boolean
  preserveSelectedRowKeys?: boolean
  columnWidth?: number | string
  columnTitle?: string | VueNode
  fixed?: boolean | 'left' | 'right'
}

// Fetch 函数返回类型
export interface FetchResult<T = any> {
  data: T[]
  total: number
  current?: number
  pageSize?: number
}

// Fetch 函数类型
export type FetchFunction<T = any> = (params: {
  current: number
  pageSize: number
  sorter?: any
  filters?: any
}) => Promise<FetchResult<T>>

// DataGrid 组件 Props
export interface DataGridProps<T = any> extends Omit<GridOptions<T>, 'columnDefs' | 'rowData' | 'pagination' | 'rowSelection' | 'api' | 'columnApi'> {
  // 列定义
  columns: DataGridColumn<T>[]
  
  // 数据获取函数
  fetch?: FetchFunction<T>
  
  // 静态数据（与 fetch 二选一）
  dataSource?: T[]
  
  // Loading 状态
  loading?: boolean
  
  // Loading 回调
  onLoading?: (loading: boolean) => void
  
  // 分页配置
  pagination?: boolean | PaginationConfig
  
  // 行选择
  rowSelection?: RowSelection<T>
  
  // 行键值字段
  rowKey?: keyof T | ((record: T) => Key)
  
  // 表格高度
  height?: number | string
  
  // 表格宽度
  width?: number | string
  
  // 是否显示边框
  bordered?: boolean
  
  // 表格大小
  size?: 'small' | 'middle' | 'large'
  
  // 空数据时显示的内容
  locale?: {
    emptyText?: string
  }
  
  // 滚动配置
  scroll?: {
    x?: number | string | true
    y?: number | string
  }
  
  // 表格标题
  title?: string | (() => VueNode)
  
  // 表格底部
  footer?: string | (() => VueNode)

  // 工具栏配置（社区版替代 sidebar）
  toolbar?: {
    visible?: boolean
    showColumnToggle?: boolean
    showQuickFilter?: boolean
    showReset?: boolean
    placement?: 'top' | 'bottom'
  }
  
  // 展开行配置
  expandable?: {
    expandedRowKeys?: Key[]
    defaultExpandedRowKeys?: Key[]
    defaultExpandAllRows?: boolean
    expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => VueNode
    expandRowByClick?: boolean
    expandIcon?: (props: any) => VueNode
    onExpand?: (expanded: boolean, record: T) => void
    onExpandedRowsChange?: (expandedKeys: Key[]) => void
    indentSize?: number
    rowExpandable?: (record: T) => boolean
    showExpandColumn?: boolean
    fixed?: boolean | 'left' | 'right'
    columnWidth?: number | string
    columnTitle?: string | VueNode
  }
  
  // 其他事件
  onRow?: (record: T, index?: number) => any
  onHeaderRow?: (columns: DataGridColumn<T>[], index?: number) => any
  onCell?: (record: T, rowIndex?: number) => any
  onHeaderCell?: (column: DataGridColumn<T>) => any
}

// DataGrid 组件实例类型
// DataGrid 组件 Emits
export interface DataGridEmits<T = any> {
  'update:loading': [loading: boolean]
  'grid-ready': [api: GridApi<T>]
  'selection-changed': [selectedRows: T[], selectedKeys: Key[]]
  'sort-changed': [sortModel: any]
  'filter-changed': [filterModel: any]
  'row-clicked': [event: any]
  'row-double-clicked': [event: any]
  'cell-clicked': [event: any]
  'cell-double-clicked': [event: any]
  'page-changed': [page: number, pageSize: number]
}

export interface DataGridInstance<T = any> {
  // ag-grid API
  api: any
  
  // 刷新数据
  refresh: () => Promise<void>
  
  // 获取选中行
  getSelectedRows: () => T[]
  
  // 获取选中行键值
  getSelectedKeys: () => Key[]
  
  // 设置选中行
  setSelectedKeys: (keys: Key[]) => void
  
  // 清空选中
  clearSelection: () => void
  
  // 获取所有数据
  getAllData: () => T[]
  
  // 获取当前页数据
  getCurrentPageData: () => T[]
  
  // 设置分页
  setPagination: (page: number, pageSize?: number) => void
  
  // 获取分页信息
  getPagination: () => { current: number; pageSize: number; total: number }
  
  // 导出数据
  exportData: (format?: 'csv' | 'excel') => void
  
  // 重置排序
  resetSort: () => void
  
  // 重置筛选
  resetFilter: () => void
  
  // 重置列宽
  resetColumnSize: () => void
}

export interface RowSelectionConfig<T> {
  type: 'radio' | 'checkbox'
  selectedKeys?: Key[]
  onChange?: (keys: Key[], records: T[]) => void
}
// 导出所有类型
export type {
  ColDef,
  GridApi,
  GridOptions,
}