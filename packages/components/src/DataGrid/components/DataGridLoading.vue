<template>
  <div v-if="visible" :class="e('loading')">
    <div :class="e('loading-spinner')"></div>
    <div :class="e('loading-text')">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@hi-kits/hooks'

interface Props {
  visible: boolean
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: '加载中...'
})

// 命名空间
const { e } = useNamespace('data-grid')
</script>