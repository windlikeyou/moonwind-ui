<template>
  <div v-if="visible" :class="e('pagination')">
    <div :class="e('pagination-info')">
      <span v-if="config?.showTotal">
        {{ paginationText }}
      </span>
    </div>
    <div :class="e('pagination-controls')">
      <button 
        :disabled="current <= 1"
        @click="handlePageChange(current - 1)"
        :class="e('pagination-btn')"
      >
        上一页
      </button>
      <span :class="e('pagination-current')">
        {{ current }} / {{ totalPages }}
      </span>
      <button 
        :disabled="current >= totalPages"
        @click="handlePageChange(current + 1)"
        :class="e('pagination-btn')"
      >
        下一页
      </button>
      <select 
        v-if="config?.showSizeChanger"
        :value="pageSize"
        @change="handlePageSizeChange"
        :class="e('pagination-size')"
      >
        <option 
          v-for="size in pageSizeOptions" 
          :key="size" 
          :value="size"
        >
          {{ size }} 条/页
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@hi-kits/hooks'
import type { PaginationConfig } from '../types'

interface Props {
  config?: PaginationConfig | null
  current: number
  pageSize: number
  total: number
}

interface Emits {
  (e: 'page-change', page: number): void
  (e: 'page-size-change', pageSize: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 命名空间
const { e } = useNamespace('data-grid')

// 计算属性
const visible = computed(() => !!props.config)

const totalPages = computed(() => {
  return Math.ceil(props.total / props.pageSize) || 1
})

const pageSizeOptions = computed(() => {
  return props.config?.pageSizeOptions || ['10', '20', '50', '100']
})

const paginationText = computed((): string => {
  const start = (props.current - 1) * props.pageSize + 1
  const end = Math.min(props.current * props.pageSize, props.total)
  
  if (typeof props.config?.showTotal === 'function') {
    return props.config.showTotal(props.total, [start, end])
  }
  
  return `共 ${props.total} 条数据，显示第 ${start}-${end} 条`
})

// 事件处理
const handlePageChange = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  emit('page-change', page)
}

const handlePageSizeChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const newPageSize = parseInt(target.value, 10)
  emit('page-size-change', newPageSize)
}
</script>