<template>
  <div class="demo-container">
    <HiDataGrid
      :columns="columns"
      :data-source="dataSource"
      height="400px"
    />
  </div>
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
  { field: 'name', headerName: '姓名', width: 120 },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80 },
  { field: 'department', headerName: '部门', width: 120 },
  { field: 'status', headerName: '状态', width: 100 }
]

const dataSource: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', age: 28, department: '技术部', status: '在职' },
  { id: 2, name: '李四', email: 'lisi@example.com', age: 32, department: '产品部', status: '在职' },
  { id: 3, name: '王五', email: 'wangwu@example.com', age: 25, department: '设计部', status: '在职' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', age: 30, department: '市场部', status: '离职' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', age: 27, department: '技术部', status: '在职' },
  { id: 6, name: '孙八', email: 'sunba@example.com', age: 35, department: '人事部', status: '在职' },
  { id: 7, name: '周九', email: 'zhoujiu@example.com', age: 29, department: '财务部', status: '在职' },
  { id: 8, name: '吴十', email: 'wushi@example.com', age: 26, department: '技术部', status: '在职' }
]
</script>

<style scoped>
.demo-container {
  margin: 20px 0;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  padding: 16px;
  background: #fff;
}

.hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>