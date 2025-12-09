<script setup>
import { MSpace, MButton } from 'moonwind-ui'
</script>

<template>
  <MSpace :size="20">
    <MButton>Custom Size 20</MButton>
    <MButton>Custom Size 20</MButton>
  </MSpace>
  <br />
  <MSpace size="large">
    <MButton>Large</MButton>
    <MButton>Large</MButton>
  </MSpace>
</template>
