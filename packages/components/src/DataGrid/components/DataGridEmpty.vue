<template>
  <div v-if="visible" :class="e('empty')">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@hi-kits/hooks'

interface Props {
  visible: boolean
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: '暂无数据'
})

// 命名空间
const { e } = useNamespace('data-grid')
</script>