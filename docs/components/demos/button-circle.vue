<template>
  <div class="demo-button">
    <div class="demo-button-row">
      <hi-button circle>+</hi-button>
      <hi-button type="primary" circle>✓</hi-button>
      <hi-button type="success" circle>✓</hi-button>
      <hi-button type="warning" circle>!</hi-button>
      <hi-button type="danger" circle>×</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button size="large" circle>L</hi-button>
      <hi-button size="medium" circle>M</hi-button>
      <hi-button size="small" circle>S</hi-button>
    </div>
    <div class="demo-button-row">
      <hi-button type="primary" circle disabled>D</hi-button>
      <hi-button type="success" circle loading></hi-button>
      <hi-button circle>📝</hi-button>
      <hi-button type="danger" circle>🗑</hi-button>
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