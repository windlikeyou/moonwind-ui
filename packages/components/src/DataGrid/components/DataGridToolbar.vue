<template>
  <div v-if="visible" :class="[e('toolbar')]">
    <div :class="e('toolbar-left')">
      <label v-if="config?.showQuickFilter" :class="e('quick-filter')">
        <span>快速过滤：</span>
        <input 
          type="text" 
          :value="quickFilterText" 
          @input="handleQuickFilterChange"
          placeholder="输入关键字..." 
        />
      </label>
      <button 
        v-if="config?.showReset" 
        :class="e('btn')" 
        @click="handleReset"
      >
        重置
      </button>
    </div>
    <div v-if="config?.showColumnToggle" :class="e('toolbar-right')">
      <span :class="e('label')">显示列：</span>
      <label 
        v-for="col in toggleableColumns" 
        :key="col.field as string" 
        :class="e('checkbox')"
      >
        <input 
          type="checkbox" 
          :checked="!col.hide" 
          @change="handleToggleColumn(col)" 
        />
        <span>{{ col.headerName || (col.field as string) }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@hi-kits/hooks'
import type { DataGridColumn } from '../types'

interface Props {
  config?: any
  columns: DataGridColumn[]
  quickFilterText: string
}

interface Emits {
  (e: 'quick-filter-change', value: string): void
  (e: 'reset'): void
  (e: 'toggle-column', column: DataGridColumn): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 命名空间
const { e } = useNamespace('data-grid')

// 计算属性
const visible = computed(() => props.config?.visible ?? false)

const toggleableColumns = computed(() => {
  return props.columns.filter((c) => c.field !== '__selection__')
})

// 事件处理
const handleQuickFilterChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('quick-filter-change', target.value)
}

const handleReset = () => {
  emit('reset')
}

const handleToggleColumn = (column: DataGridColumn) => {
  emit('toggle-column', column)
}
</script>