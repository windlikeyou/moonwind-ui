<template>
  <HiDataGrid
    :columns="columns"
    :fetch="fetchData"
    :pagination="pagination"
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
}

const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: '姓名', width: 120 },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80 },
  { field: 'department', headerName: '部门', width: 120 }
]

const pagination = {
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: true
}

const fetchData = async (params: any) => {
  // 模拟 API 请求
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const { current = 1, pageSize = 10 } = params
  const total = 100
  const start = (current - 1) * pageSize
  
  const data: User[] = Array.from({ length: pageSize }, (_, index) => ({
    id: start + index + 1,
    name: `用户${start + index + 1}`,
    email: `user${start + index + 1}@example.com`,
    age: 20 + (start + index) % 40,
    department: ['技术部', '产品部', '设计部', '运营部'][index % 4]
  }))
  
  return {
    data,
    total
  }
}
</script>

<style scoped>
.hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>