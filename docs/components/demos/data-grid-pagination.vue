<template>
  <div class="demo-container">
    <HiDataGrid
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :toolbar="{ visible: true, showQuickFilter: true, showReset: true }"
      height="500px"
    />
  </div>
</template>

<script setup lang="ts">
import { HiDataGrid } from 'hi-kits'
import type { DataGridColumn, PaginationConfig } from 'hi-kits'

interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
  status: string
  joinDate: string
}

const columns: DataGridColumn<User>[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: '姓名', width: 120 },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80 },
  { field: 'department', headerName: '部门', width: 120 },
  { field: 'status', headerName: '状态', width: 100 },
  { field: 'joinDate', headerName: '入职日期', width: 120 }
]

// 生成更多数据用于分页演示
const generateData = (): User[] => {
  const departments = ['技术部', '产品部', '设计部', '市场部', '人事部', '财务部']
  const statuses = ['在职', '离职', '试用期']
  const data: User[] = []
  
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      name: `用户${i}`,
      email: `user${i}@example.com`,
      age: 20 + Math.floor(Math.random() * 20),
      department: departments[Math.floor(Math.random() * departments.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      joinDate: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
    })
  }
  
  return data
}

const dataSource = generateData()

const pagination: PaginationConfig = {
  current: 1,
  pageSize: 10,
  total: dataSource.length,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: true,
  pageSizeOptions: ['10', '20', '50', '100']
}
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