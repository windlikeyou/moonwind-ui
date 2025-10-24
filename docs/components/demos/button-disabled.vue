<template>
  <div class="button-demo">
    <HiButton disabled>默认按钮</HiButton>
    <HiButton type="primary" disabled>主要按钮</HiButton>
    <HiButton type="success" disabled>成功按钮</HiButton>
    <HiButton type="warning" disabled>警告按钮</HiButton>
    <HiButton type="danger" disabled>危险按钮</HiButton>
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