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
  status: 'active' | 'inactive'
  avatar: string
}

const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { 
    field: 'avatar', 
    headerName: '头像', 
    width: 100,
    cellRenderer: (params: any) => {
      return `<img src="${params.value}" alt="头像" style="width: 32px; height: 32px; border-radius: 50%;" />`
    }
  },
  { field: 'name', headerName: '姓名', width: 120 },
  { field: 'email', headerName: '邮箱', width: 200 },
  { field: 'age', headerName: '年龄', width: 80 },
  { 
    field: 'status', 
    headerName: '状态', 
    width: 100,
    cellRenderer: (params: any) => {
      const status = params.value
      const color = status === 'active' ? '#52c41a' : '#ff4d4f'
      const text = status === 'active' ? '活跃' : '非活跃'
      return `<span style="color: ${color}; font-weight: bold;">${text}</span>`
    }
  }
]

const dataSource: User[] = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    age: 25,
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    age: 30,
    status: 'inactive',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    age: 28,
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    age: 32,
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4'
  },
  {
    id: 5,
    name: '钱七',
    email: 'qianqi@example.com',
    age: 27,
    status: 'inactive',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5'
  }
]
</script>

<style scoped>
.hk-data-grid {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
</style>