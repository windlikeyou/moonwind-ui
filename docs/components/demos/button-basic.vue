<template>
  <div class="button-demo">
    <HiButton>默认按钮</HiButton>
    <HiButton type="primary">主要按钮</HiButton>
    <HiButton type="success">成功按钮</HiButton>
    <HiButton type="warning">警告按钮</HiButton>
    <HiButton type="danger">危险按钮</HiButton>
  </div>
</template>

<script setup>
import { HiButton } from 'hi-kits'
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>