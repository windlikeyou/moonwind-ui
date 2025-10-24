<template>
  <div class="demo-container">
    <div class="selection-info">
      <p>已选择 {{ selectedKeys.length }} 行数据</p>
      <div v-if="selectedKeys.length > 0" class="selected-items">
        <strong>选中的用户：</strong>
        <span v-for="(key, index) in selectedKeys" :key="key">
          {{ getSelectedUserName(key) }}{{ index < selectedKeys.length - 1 ? ', ' : '' }}
        </span>
      </div>
    </div>
    
    <HiDataGrid
      :columns="columns"
      :data-source="dataSource"
      :row-selection="rowSelection"
      :toolbar="{ visible: true, showColumnToggle: true, showReset: true }"
      height="400px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HiDataGrid } from 'hi-kits'
import type { DataGridColumn, RowSelectionConfig } from 'hi-kits'

interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
  status: string
}

const columns: DataGridColumn<User>[] = [
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

const selectedKeys = ref<number[]>([])

const rowSelection: RowSelectionConfig<User> = {
  type: 'checkbox',
  selectedKeys: selectedKeys.value,
  onChange: (keys: number[], rows: User[]) => {
    selectedKeys.value = keys
    console.log('选中的行:', rows)
  }
}

const getSelectedUserName = (id: number): string => {
  const user = dataSource.find(u => u.id === id)
  return user ? user.name : ''
}
</script>

<style scoped>
.demo-container {
  margin: 20px 0;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  padding: 20px;
}

.selection-info {
  margin-bottom: 16px;
  padding: 12px;
  background-color: #f6f8fa;
  border-radius: 4px;
  border: 1px solid #e1e5e9;
}

.selection-info p {
  margin: 0 0 8px 0;
  font-weight: 500;
  color: #24292f;
}

.selected-items {
  color: #656d76;
  font-size: 14px;
}

.selected-items strong {
  color: #24292f;
}
</style>