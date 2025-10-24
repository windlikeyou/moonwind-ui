<template>
  <div :class="[b(), dataGridClasses]">
    <!-- 工具栏（顶端） -->
    <DataGridToolbar
      v-if="toolbarPlacement === 'top'"
      :config="props.toolbar"
      :columns="props.columns"
      :quick-filter-text="quickFilterText"
      @quick-filter-change="handleQuickFilterChange"
      @reset="handleReset"
      @toggle-column="toggleColumnVisibility"
    />

    <!-- 表格标题 -->
    <div v-if="title" :class="e('title')">
      <component :is="typeof title === 'function' ? title() : title" />
    </div>

    <!-- 表格容器 -->
    <div 
      :class="e('container')"
      :style="containerStyle"
    >
      <!-- Loading 遮罩 -->
      <DataGridLoading :visible="actualLoading" />

      <!-- AG Grid 表格 -->
      <AgGridVue
        ref="agGridRef"
        class="ag-theme-alpine"
        :style="gridStyle"
        :column-defs="processedColumns"
        :row-data="currentData"
        :grid-options="gridOptions"
        :loading-overlay-component="null"
        :no-rows-overlay-component="null"
        @grid-ready="onGridReady"
        @selection-changed="onSelectionChanged"
        @sort-changed="onSortChanged"
        @filter-changed="onFilterChanged"
        @row-clicked="onRowClicked"
        @row-double-clicked="onRowDoubleClicked"
        @cell-clicked="onCellClicked"
        @cell-double-clicked="onCellDoubleClicked"
        v-bind="$attrs"
      />

      <!-- 空数据提示 -->
      <DataGridEmpty 
        :visible="!actualLoading && (!currentData || currentData.length === 0)"
        :text="locale?.emptyText"
      />
    </div>

    <!-- 分页器 -->
    <DataGridPagination
      v-if="showPagination"
      :config="paginationConfig"
      :current="currentPage"
      :page-size="currentPageSize"
      :total="totalCount"
      @page-change="handlePageChange"
      @page-size-change="handlePageSizeChange"
    />

    <!-- 底部工具栏 -->
    <DataGridToolbar
      v-if="toolbarPlacement === 'bottom'"
      :config="props.toolbar"
      :columns="props.columns"
      :quick-filter-text="quickFilterText"
      @quick-filter-change="handleQuickFilterChange"
      @reset="handleReset"
      @toggle-column="toggleColumnVisibility"
    />

    <!-- 表格底部 -->
    <div v-if="footer" :class="e('footer')">
      <component :is="typeof footer === 'function' ? footer() : footer" />
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any> = any">
import { 
  ref, 
  computed, 
  watch, 
  onMounted, 
  onUnmounted,
  nextTick,
  withDefaults,
  type CSSProperties
} from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { 
  GridApi, 
  GridReadyEvent, 
  SelectionChangedEvent, 
  SortChangedEvent, 
  FilterChangedEvent, 
  RowClickedEvent, 
  RowDoubleClickedEvent, 
  CellClickedEvent, 
  CellDoubleClickedEvent
} from 'ag-grid-community'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
// 导入子组件
import DataGridToolbar from './components/DataGridToolbar.vue'
import DataGridPagination from './components/DataGridPagination.vue'
import DataGridLoading from './components/DataGridLoading.vue'
import DataGridEmpty from './components/DataGridEmpty.vue'

// 导入类型和钩子
import type { 
  DataGridProps, 
  DataGridEmits,
  DataGridInstance, 
  DataGridColumn,
  Key,
  FetchResult,
  PaginationConfig
} from './types'
import { useNamespace } from '@hi-kits/hooks'

// 注册 AG Grid 社区模块
ModuleRegistry.registerModules([AllCommunityModule])

defineOptions({
  name: 'HiDataGrid'
})
// Props 定义
const props = withDefaults(defineProps<DataGridProps<T>>(), {
  loading: false,
  pagination: true,
  bordered: true,
  size: 'middle',
  height: 400,
  rowKey: 'id'
})

// Emits 定义
const emit = defineEmits<DataGridEmits<T>>()

// 命名空间 BEM 辅助
const { b, e, m } = useNamespace('data-grid')

// Refs
const agGridRef = ref<any>()
const gridApi = ref<GridApi<T> | null>(null)
const columnApi = ref<any>(null)

// 响应式数据
const currentData = ref<T[]>([])
const currentPage = ref(1)
const currentPageSize = ref(20)
const totalCount = ref(0)
const internalLoading = ref(false)
const selectedKeys = ref<Key[]>([])
const selectedRows = ref<T[]>([])
const quickFilterText = ref('')

// 计算属性
const actualLoading = computed(() => props.loading || internalLoading.value)

const dataGridClasses = computed(() => [
  m(props.size),
  {
    [m('loading')]: actualLoading.value
  }
])

const containerStyle = computed((): CSSProperties => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width
}))

const gridStyle = computed((): CSSProperties => ({
  height: '100%',
  width: '100%'
}))

const showPagination = computed(() => {
  return props.pagination !== false && (props.fetch || (props.dataSource && props.dataSource.length > 0))
})

const paginationConfig = computed((): PaginationConfig | null => {
  if (props.pagination === false) return null
  
  const defaultConfig: PaginationConfig = {
    current: currentPage.value,
    pageSize: currentPageSize.value,
    total: totalCount.value,
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal: true,
    pageSizeOptions: ['10', '20', '50', '100']
  }
  
  if (props.pagination === true) {
    return defaultConfig
  }
  
  return { ...defaultConfig, ...props.pagination }
})

const totalPages = computed(() => {
  return Math.ceil(totalCount.value / currentPageSize.value) || 1
})

const toolbarPlacement = computed(() => props.toolbar?.placement ?? 'top')

// 监听快速过滤输入
watch(quickFilterText, (val) => {
  (gridApi.value as any)?.setGridOption?.('quickFilterText', val)
})

// 处理列定义，添加选择列
const processedColumns = computed(() => {
  const columns: any[] = [...props.columns.map(col => ({
    ...col,
    field: typeof col.field === 'string' ? col.field : String(col.field)
  }))]
  
  // 添加选择列
  if (props.rowSelection) {
    const selectionColumn: any = {
      field: '__selection__',
      headerName: props.rowSelection.type === 'checkbox' ? '' : '选择',
      width: props.rowSelection.columnWidth as number || 50,
      minWidth: 50,
      maxWidth: 80,
      resizable: false,
      sortable: false,
      filter: false,
      suppressMenu: true,
      pinned: props.rowSelection.fixed === true ? 'left' : props.rowSelection.fixed || null,
      cellRenderer: props.rowSelection.type === 'checkbox' ? 'agCheckboxCellRenderer' : 'agRadioCellRenderer',
      headerCheckboxSelection: props.rowSelection.type === 'checkbox' && !props.rowSelection.hideSelectAll,
      checkboxSelection: props.rowSelection.type === 'checkbox',
      headerCheckboxSelectionFilteredOnly: true
    }
    
    columns.unshift(selectionColumn)
  }
  
  return columns
})

// Grid 配置
const gridOptions = computed(() => {
  const options: any = {
    theme: 'legacy',
    rowSelection: props.rowSelection ? (props.rowSelection.type === 'checkbox' ? 'multiple' : 'single') : undefined,
    suppressRowClickSelection: !!props.rowSelection,
    rowMultiSelectWithClick: props.rowSelection?.type === 'checkbox',
    pagination: false,
    paginationPageSize: undefined,
    suppressPaginationPanel: true,
    getRowId: (params: any) => {
      const rowKey = props.rowKey
      if (typeof rowKey === 'function') {
        return String(rowKey(params.data))
      }
      return String(params.data[rowKey as keyof T])
    }
  }
  
  const agGridProps = ['animateRows', 'enableCellTextSelection', 'suppressMenuHide', 'defaultColDef']
  agGridProps.forEach(prop => {
    if (prop in props) {
      options[prop] = (props as any)[prop]
    }
  })
  
  return options
})

// 方法
const getRowKey = (record: T): Key => {
  const rowKey = props.rowKey
  if (typeof rowKey === 'function') {
    return rowKey(record)
  }
  return record[rowKey as keyof T] as Key
}

const setLoading = (loading: boolean) => {
  internalLoading.value = loading
  props.onLoading?.(loading)
  emit('update:loading', loading)
}

const fetchData = async () => {
  if (!props.fetch) return

  setLoading(true)
  try {
    const sortModel = gridApi.value?.getColumnState?.()?.filter(col => col.sort) || []
    const filterModel = gridApi.value?.getFilterModel?.() || {}
    
    const params = {
      current: currentPage.value,
      pageSize: currentPageSize.value,
      sorter: sortModel,
      filters: filterModel
    }

    const result: FetchResult<T> = await props.fetch(params)
    
    currentData.value = result.data || []
    totalCount.value = result.total || 0
    
    if (result.current !== undefined) {
      currentPage.value = result.current
    }
    if (result.pageSize !== undefined) {
      currentPageSize.value = result.pageSize
    }
    
  } catch (error) {
    console.error('DataGrid fetch error:', error)
    currentData.value = []
    totalCount.value = 0
  } finally {
    setLoading(false)
  }
}

const refresh = async () => {
  if (props.fetch) {
    await fetchData()
  } else if (props.dataSource) {
    currentData.value = [...props.dataSource]
    totalCount.value = props.dataSource.length
  }
}

// 事件处理
const handleQuickFilterChange = (value: string) => {
  quickFilterText.value = value
}

const handleReset = () => {
  resetSort()
  resetFilter()
  quickFilterText.value = ''
  
  if (columnApi.value) {
    const state = columnApi.value.getColumnState()?.map((s: any) => ({ ...s, hide: false }))
    if (state) columnApi.value.applyColumnState({ state })
  }
}

const toggleColumnVisibility = (col: DataGridColumn) => {
  const field = String(col.field)
  const isHidden = !!col.hide
  col.hide = !isHidden
  
  if (columnApi.value) {
    const state = columnApi.value.getColumnState()
    const next = state.map((s: any) => (s.colId === field ? { ...s, hide: !isHidden } : s))
    columnApi.value.applyColumnState({ state: next })
  }
}

const handlePageChange = async (page: number) => {
  if (page < 1 || page > totalPages.value) return
  
  currentPage.value = page
  emit('page-changed', page, currentPageSize.value)
  
  if (props.fetch) {
    await fetchData()
  }
  
  paginationConfig.value?.onChange?.(page, currentPageSize.value)
}

const handlePageSizeChange = async (pageSize: number) => {
  currentPageSize.value = pageSize
  currentPage.value = 1
  emit('page-changed', 1, pageSize)
  
  if (props.fetch) {
    await fetchData()
  }
  
  paginationConfig.value?.onShowSizeChange?.(1, pageSize)
}

// AG Grid 事件处理
const onGridReady = (event: GridReadyEvent<T>) => {
  gridApi.value = event.api
  columnApi.value = (event as any).columnApi || (event.api as any).getColumnApi?.()
  emit('grid-ready', event.api)
  
  nextTick(() => {
    refresh()
  })
}

const onSelectionChanged = (event: SelectionChangedEvent<T>) => {
  const selectedNodes = gridApi.value?.getSelectedNodes() || []
  const newSelectedRows = selectedNodes.map(node => node.data!).filter(Boolean)
  const newSelectedKeys = newSelectedRows.map(row => getRowKey(row))
  
  selectedRows.value = newSelectedRows
  selectedKeys.value = newSelectedKeys
  
  emit('selection-changed', newSelectedRows, newSelectedKeys)
  props.rowSelection?.onChange?.(newSelectedKeys, newSelectedRows)
}

const onSortChanged = (event: SortChangedEvent<T>) => {
  emit('sort-changed', (event.api as any).getSortModel())
  
  if (props.fetch) {
    fetchData()
  }
}

const onFilterChanged = (event: FilterChangedEvent<T>) => {
  emit('filter-changed', event.api.getFilterModel())
  
  if (props.fetch) {
    fetchData()
  }
}

const onRowClicked = (event: RowClickedEvent<T>) => {
  emit('row-clicked', event)
}

const onRowDoubleClicked = (event: RowDoubleClickedEvent<T>) => {
  emit('row-double-clicked', event)
}

const onCellClicked = (event: CellClickedEvent<T>) => {
  emit('cell-clicked', event)
}

const onCellDoubleClicked = (event: CellDoubleClickedEvent<T>) => {
  emit('cell-double-clicked', event)
}

// 实例方法
const getSelectedRows = (): T[] => selectedRows.value as T[]
const getSelectedKeys = (): Key[] => selectedKeys.value

const setSelectedKeys = (keys: Key[]) => {
  if (!gridApi.value) return
  
  gridApi.value.forEachNode(node => {
    if (node.data) {
      const rowKey = getRowKey(node.data)
      node.setSelected(keys.includes(rowKey))
    }
  })
}

const clearSelection = () => {
  gridApi.value?.deselectAll()
}

const getAllData = (): T[] => currentData.value as T[]
const getCurrentPageData = (): T[] => currentData.value as T[]

const setPagination = (page: number, pageSize?: number) => {
  currentPage.value = page
  if (pageSize) {
    currentPageSize.value = pageSize
  }
  if (props.fetch) {
    fetchData()
  }
}

const getPagination = () => ({
  current: currentPage.value,
  pageSize: currentPageSize.value,
  total: totalCount.value
})

const exportData = (format?: 'csv' | 'excel') => {
  if (format === 'excel') {
    gridApi.value?.exportDataAsExcel()
  } else {
    gridApi.value?.exportDataAsCsv()
  }
}

const resetSort = () => {
  (gridApi.value as any)?.setSortModel(null)
}

const resetFilter = () => {
  (gridApi.value as any)?.setFilterModel(null)
}

const resetColumnSize = () => {
  gridApi.value?.sizeColumnsToFit()
}

// 监听器
watch(() => props.dataSource, (newData) => {
  if (newData && !props.fetch) {
    currentData.value = [...newData]
    totalCount.value = newData.length
  }
}, { immediate: true })

watch(() => props.rowSelection?.selectedKeys, (newKeys) => {
  if (newKeys && gridApi.value) {
    setSelectedKeys(newKeys)
  }
}, { immediate: true })

// 暴露实例方法
const instance: DataGridInstance<T> = {
  api: computed(() => gridApi.value) as any,
  refresh,
  getSelectedRows,
  getSelectedKeys,
  setSelectedKeys,
  clearSelection,
  getAllData,
  getCurrentPageData,
  setPagination,
  getPagination,
  exportData,
  resetSort,
  resetFilter,
  resetColumnSize
}

defineExpose(instance)

// 生命周期
onMounted(() => {
  // 组件挂载后的初始化
})

onUnmounted(() => {
  gridApi.value = null
})
</script>