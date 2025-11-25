<template>
  <div class="playground">
    <h1>Moonwind UI Playground</h1>
    <div class="card">
      <h2>Button Demo</h2>
      <div class="row">
        <MButton>Default</MButton>
        <MButton type="primary">Primary</MButton>
        <MButton type="success">Success</MButton>
        <MButton type="warning">Warning</MButton>
        <MButton type="danger">Danger</MButton>
      </div>
    </div>

    <div class="card">
      <h2>Icons Demo</h2>
      <div class="row icons">
        <IconCheck />
        <IconClose />
        <IconLoading />
        <IconSearch />
        <IconPlus />
        <IconMinus />
        <IconEdit />
        <IconDelete />
        <IconColumn />
      </div>
    </div>

    <div class="card">
      <h2>DataGrid Demo</h2>
      <MDataGrid
        :columns="columns"
        :data-source="dataSource"
        height="300px"
        sider-bar
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MButton, MDataGrid } from 'moonwind-ui'
import { IconCheck, IconClose, IconLoading, IconSearch, IconPlus, IconMinus, IconEdit, IconDelete, IconColumn } from '@moonwind-ui/icons'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'role', headerName: 'Role', width: 150 },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'address', headerName: 'Address', width: 150 }
]

const dataSource = [
  { id: 1, name: 'Alice', role: 'Developer', age: 25, sex: 'Female', address: '123 Main St' },
  { id: 2, name: 'Bob', role: 'Designer', age: 30, sex: 'Male', address: '456 Elm St' },
  { id: 3, name: 'Charlie', role: 'Manager', age: 35, sex: 'Male', address: '789 Oak St' }
]
</script>

<style>
body {
  margin: 0;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f7fa;
}

.playground {
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
}

.row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

h1 {
  margin-bottom: 32px;
  color: #1f2937;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #374151;
  font-size: 1.2rem;
}

.icons {
  color: #4b5563;
}

.m-icon {
  width: 24px;
  height: 24px;
}
</style>
