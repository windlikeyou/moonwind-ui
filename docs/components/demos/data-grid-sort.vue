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
  salary: number
  department: string
}

const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 80, sortable: true },
  { field: 'name', headerName: '姓名', width: 120, sortable: true },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80, sortable: true },
  { 
    field: 'salary', 
    headerName: '薪资', 
    width: 120, 
    sortable: true,
    cellRenderer: (params: any) => {
      return `¥${params.value.toLocaleString()}`
    }
  },
  { field: 'department', headerName: '部门', width: 120, sortable: true }
]

const dataSource: User[] = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    age: 25,
    salary: 8000,
    department: '技术部'
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    age: 30,
    salary: 12000,
    department: '产品部'
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    age: 28,
    salary: 10000,
    department: '设计部'
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    age: 32,
    salary: 15000,
    department: '技术部'
  },
  {
    id: 5,
    name: '钱七',
    email: 'qianqi@example.com',
    age: 27,
    salary: 9000,
    department: '运营部'
  },
  {
    id: 6,
    name: '孙八',
    email: 'sunba@example.com',
    age: 35,
    salary: 18000,
    department: '产品部'
  },
  {
    id: 7,
    name: '周九',
    email: 'zhoujiu@example.com',
    age: 26,
    salary: 7500,
    department: '设计部'
  },
  {
    id: 8,
    name: '吴十',
    email: 'wushi@example.com',
    age: 29,
    salary: 11000,
    department: '技术部'
  }
]
</script>

<style scoped>
.hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>