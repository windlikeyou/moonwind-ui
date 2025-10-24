<template>
  <div class="demo-container">
    <HiDataGrid
      :columns="columns"
      :data-source="dataSource"
      height="400px"
      :toolbar="{
        showQuickFilter: true,
        showReset: true,
        showColumnToggle: true,
        placement: 'top'
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { HiDataGrid } from 'hi-kits'
import type { DataGridColumn, ToolbarConfig } from 'hi-kits'

interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
  status: string
  salary: number
}

const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 80, sortable: true },
  { field: 'name', headerName: '姓名', width: 120, sortable: true },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80, sortable: true },
  { field: 'department', headerName: '部门', width: 120, filter: true },
  { field: 'status', headerName: '状态', width: 100, filter: true },
  { field: 'salary', headerName: '薪资', width: 120, sortable: true }
]

const dataSource: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', age: 28, department: '技术部', status: '在职', salary: 15000 },
  { id: 2, name: '李四', email: 'lisi@example.com', age: 32, department: '产品部', status: '在职', salary: 18000 },
  { id: 3, name: '王五', email: 'wangwu@example.com', age: 25, department: '设计部', status: '在职', salary: 12000 },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', age: 30, department: '市场部', status: '离职', salary: 14000 },
  { id: 5, name: '钱七', email: 'qianqi@example.com', age: 27, department: '技术部', status: '在职', salary: 16000 },
  { id: 6, name: '孙八', email: 'sunba@example.com', age: 35, department: '人事部', status: '在职', salary: 13000 },
  { id: 7, name: '周九', email: 'zhoujiu@example.com', age: 29, department: '财务部', status: '在职', salary: 17000 },
  { id: 8, name: '吴十', email: 'wushi@example.com', age: 26, department: '技术部', status: '试用期', salary: 11000 },
  { id: 9, name: '郑十一', email: 'zheng11@example.com', age: 31, department: '产品部', status: '在职', salary: 19000 },
  { id: 10, name: '王十二', email: 'wang12@example.com', age: 24, department: '设计部', status: '试用期', salary: 10000 }
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