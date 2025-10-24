# DataGrid 数据表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

基础的数据表格展示用法。

<preview path="./demos/data-grid-basic.vue" title="基础用法" description="基础的数据表格展示用法。"></preview>

## 分页表格

支持分页功能的表格。

<preview path="./demos/data-grid-pagination.vue" title="分页表格" description="演示分页功能。"></preview>

## 异步数据获取

使用 fetch 函数异步获取数据。

<preview path="./demos/data-grid-fetch.vue" title="异步数据获取" description="使用 fetch 函数异步获取数据。"></preview>

## 自定义列

自定义列的显示内容。

<preview path="./demos/data-grid-custom.vue" title="自定义列" description="自定义列的显示内容。"></preview>

## 选择行

支持多选和单选。

<preview path="./demos/data-grid-selection.vue" title="选择行" description="支持多选和单选。"></preview>

## 排序

支持列排序功能。

<preview path="./demos/data-grid-sort.vue" title="排序" description="支持列排序功能。"></preview>

## 筛选

支持列筛选功能。

<preview path="./demos/data-grid-filter.vue" title="筛选" description="支持列筛选功能。"></preview>

## API 文档

### DataGrid Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columns | `DataGridColumn[]` | `[]` | 列配置 |
| dataSource | `any[]` | `[]` | 数据源 |
| height | `string \| number` | `'400px'` | 表格高度 |
| loading | `boolean` | `false` | 加载状态 |
| pagination | `PaginationConfig` | - | 分页配置 |
| toolbar | `ToolbarConfig` | - | 工具栏配置 |
| rowSelection | `RowSelectionConfig` | - | 行选择配置 |

### DataGridColumn

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| field | `string` | - | 字段名 |
| headerName | `string` | - | 列标题 |
| width | `number` | `100` | 列宽度 |
| sortable | `boolean` | `false` | 是否可排序 |
| filter | `boolean` | `false` | 是否可筛选 |
| hide | `boolean` | `false` | 是否隐藏 |
| cellRenderer | `Function` | - | 自定义渲染函数 |

### PaginationConfig

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| enabled | `boolean` | `false` | 是否启用分页 |
| pageSize | `number` | `20` | 每页条数 |
| showSizeChanger | `boolean` | `false` | 显示页面大小选择器 |
| showQuickJumper | `boolean` | `false` | 显示快速跳转 |
| showTotal | `boolean` | `false` | 显示总数信息 |

### ToolbarConfig

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| showQuickFilter | `boolean` | `false` | 显示快速过滤 |
| showReset | `boolean` | `false` | 显示重置按钮 |
| showColumnToggle | `boolean` | `false` | 显示列显示控制 |
| placement | `'top' \| 'bottom'` | `'top'` | 工具栏位置 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| row-click | `(row: any, event: Event)` | 行点击事件 |
| row-double-click | `(row: any, event: Event)` | 行双击事件 |
| selection-change | `(selectedRows: any[])` | 选择变化事件 |
| sort-change | `(sortModel: any[])` | 排序变化事件 |
| filter-change | `(filterModel: any)` | 筛选变化事件 |

<style scoped>
.demo-container {
  margin: 20px 0;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
}

.demo-container .hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>