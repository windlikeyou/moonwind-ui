<template>
  <div class="demo-button">
    <div class="demo-button-row">
      <hi-button loading>加载中</hi-button>
      <hi-button type="primary" loading>主要按钮</hi-button>
      <hi-button type="success" loading>成功按钮</hi-button>
      <hi-button type="warning" loading>警告按钮</hi-button>
      <hi-button type="danger" loading>危险按钮</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button size="large" loading>大型按钮</hi-button>
      <hi-button size="medium" loading>中等按钮</hi-button>
      <hi-button size="small" loading>小型按钮</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button :loading="isLoading" @click="handleClick">
        {{ isLoading ? '加载中...' : '点击加载' }}
      </hi-button>
      <hi-button type="primary" :loading="isLoading2" @click="handleClick2">
        {{ isLoading2 ? '提交中...' : '提交' }}
      </hi-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HiButton } from 'hi-kits'

const isLoading = ref(false)
const isLoading2 = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

const handleClick2 = () => {
  isLoading2.value = true
  setTimeout(() => {
    isLoading2.value = false
  }, 3000)
}
</script>

<style scoped>
.demo-button-row {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}
</style>