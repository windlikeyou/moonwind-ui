import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { HkDataGrid } from 'hi-kits'
import type { DataGridColumn } from 'hi-kits'

interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
}

// 提供 ResizeObserver 的简单 polyfill，避免在测试环境缺失导致报错
beforeAll(() => {
  if (!(globalThis as any).ResizeObserver) {
    ;(globalThis as any).ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  }
})

describe('HkDataGrid (Vitest Demo)', () => {
  const columns: DataGridColumn<User>[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: '姓名', width: 120 },
    { field: 'email', headerName: '邮箱', width: 200 },
    { field: 'age', headerName: '年龄', width: 80 },
    { field: 'department', headerName: '部门', width: 120 }
  ]

  const dataSource: User[] = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', age: 28, department: '技术部' },
    { id: 2, name: '李四', email: 'lisi@example.com', age: 32, department: '产品部' },
    { id: 3, name: '王五', email: 'wangwu@example.com', age: 25, department: '设计部' }
  ]

  it('renders ag-grid and displays rows', async () => {
    const wrapper = mount(HkDataGrid, {
      props: {
        columns,
        dataSource,
        height: '400px',
        bordered: true
      },
      attachTo: document.body
    })

    // 等待内部 Grid 初始化与数据刷新
    await nextTick()
    await new Promise((r) => setTimeout(r, 10))

    // 断言 ag-grid 的根节点与表头存在
    const root = wrapper.find('.ag-root')
    expect(root.exists()).toBe(true)
    const headerCells = document.querySelectorAll('.ag-header .ag-header-cell')
    expect(headerCells.length).toBe(columns.length)

    // 断言至少有一行和若干单元格渲染
    const rows = document.querySelectorAll('.ag-center-cols-container .ag-row')
    expect(rows.length).toBeGreaterThan(0)
    const cells = document.querySelectorAll('.ag-center-cols-container .ag-cell')
    expect(cells.length).toBeGreaterThan(0)

    // 清理
    wrapper.unmount()
  })

  it('renders selection column when checkbox selection enabled', async () => {
    const wrapper = mount(HkDataGrid, {
      props: {
        columns,
        dataSource,
        height: '400px',
        rowSelection: { type: 'checkbox' }
      },
      attachTo: document.body
    })

    await nextTick()
    await new Promise((r) => setTimeout(r, 10))

    // 表头应该包含选择列，数量为原始列 + 1
    const headerCells = document.querySelectorAll('.ag-header .ag-header-cell')
    expect(headerCells.length).toBe(columns.length + 1)

    // 中心区域应该有选择列单元格，列 id 为 __selection__
    const selectionCells = document.querySelectorAll('.ag-center-cols-container .ag-cell[col-id="__selection__"]')
    expect(selectionCells.length).toBeGreaterThan(0)

    wrapper.unmount()
  })
})