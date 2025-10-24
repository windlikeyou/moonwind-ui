<template>
  <div class="demo-button">
    <div class="demo-button-row">
      <hi-button round>圆角按钮</hi-button>
      <hi-button type="primary" round>主要按钮</hi-button>
      <hi-button type="success" round>成功按钮</hi-button>
      <hi-button type="warning" round>警告按钮</hi-button>
      <hi-button type="danger" round>危险按钮</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button size="large" round>大型圆角</hi-button>
      <hi-button size="medium" round>中等圆角</hi-button>
      <hi-button size="small" round>小型圆角</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button type="primary" round disabled>禁用状态</hi-button>
      <hi-button type="success" round loading>加载状态</hi-button>
    </div>
  </div>
</template>

<script setup>
import { HiButton } from 'hi-kits'
</script>

<style scoped>
.demo-button-row {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}
</style>