<template>
  <div class="demo-button">
    <div class="demo-button-row">
      <hi-button size="large">大型按钮</hi-button>
      <hi-button size="medium">中等按钮</hi-button>
      <hi-button size="small">小型按钮</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button size="large" type="primary">大型按钮</hi-button>
      <hi-button size="medium" type="primary">中等按钮</hi-button>
      <hi-button size="small" type="primary">小型按钮</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button size="large" type="success">大型按钮</hi-button>
      <hi-button size="medium" type="success">中等按钮</hi-button>
      <hi-button size="small" type="success">小型按钮</hi-button>
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