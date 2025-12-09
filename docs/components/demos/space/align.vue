<script setup>
import { MSpace, MButton } from 'moonwind-ui'
</script>

<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <span class="mock-block">Start</span>
      <MSpace align="start">
        <MButton>Text</MButton>
        <div class="mock-block" style="height: 100px; background: #eee; padding: 10px;">Block</div>
      </MSpace>
    </div>
    <div class="space-align-block">
      <span class="mock-block">Center</span>
      <MSpace align="center">
        <MButton>Text</MButton>
        <div class="mock-block" style="height: 100px; background: #eee; padding: 10px;">Block</div>
      </MSpace>
    </div>
    <div class="space-align-block">
      <span class="mock-block">End</span>
      <MSpace align="end">
        <MButton>Text</MButton>
        <div class="mock-block" style="height: 100px; background: #eee; padding: 10px;">Block</div>
      </MSpace>
    </div>
  </div>
</template>

<style scoped>
.space-align-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.space-align-block {
  border: 1px solid #eee;
  padding: 10px;
  flex: none;
}
.mock-block {
  display: inline-block;
}
</style>
