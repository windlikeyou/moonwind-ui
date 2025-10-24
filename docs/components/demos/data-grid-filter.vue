<template>
  <HiDataGrid
    :columns="columns"
    :data-source="dataSource"
    height="500px"
  />
</template>

<script setup lang="ts">
import { HiDataGrid } from 'hi-kits'
import type { DataGridColumn } from 'hi-kits'

interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
  status: string
}

const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: '姓名', width: 120, filter: true },
  { field: 'email', headerName: '邮箱', width: 200, filter: true },
  { field: 'age', headerName: '年龄', width: 80, filter: 'agNumberColumnFilter' },
  { 
    field: 'department', 
    headerName: '部门', 
    width: 120, 
    filter: 'agTextColumnFilter'
  },
  { 
    field: 'status', 
    headerName: '状态', 
    width: 100, 
    filter: 'agTextColumnFilter',
    cellRenderer: (params: any) => {
      const status = params.value
      const colorMap: Record<string, string> = {
        '在职': '#52c41a',
        '离职': '#ff4d4f',
        '试用期': '#faad14'
      }
      const color = colorMap[status] || '#666'
      return `<span style="color: ${color}; font-weight: bold;">${status}</span>`
    }
  }
]

const dataSource: User[] = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    age: 25,
    department: '技术部',
    status: '在职'
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    age: 30,
    department: '产品部',
    status: '在职'
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    age: 28,
    department: '设计部',
    status: '试用期'
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    age: 32,
    department: '技术部',
    status: '在职'
  },
  {
    id: 5,
    name: '钱七',
    email: 'qianqi@example.com',
    age: 27,
    department: '运营部',
    status: '离职'
  },
  {
    id: 6,
    name: '孙八',
    email: 'sunba@example.com',
    age: 35,
    department: '产品部',
    status: '在职'
  },
  {
    id: 7,
    name: '周九',
    email: 'zhoujiu@example.com',
    age: 26,
    department: '设计部',
    status: '试用期'
  },
  {
    id: 8,
    name: '吴十',
    email: 'wushi@example.com',
    age: 29,
    department: '技术部',
    status: '在职'
  },
  {
    id: 9,
    name: '郑十一',
    email: 'zhengshiyi@example.com',
    age: 31,
    department: '运营部',
    status: '在职'
  },
  {
    id: 10,
    name: '王十二',
    email: 'wangshier@example.com',
    age: 24,
    department: '设计部',
    status: '试用期'
  }
]
</script>

<style scoped>
.hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>