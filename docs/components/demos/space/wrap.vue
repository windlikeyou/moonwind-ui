<script setup>
import { MSpace, MButton } from 'moonwind-ui'
</script>

<template>
  <MSpace wrap>
    <MButton v-for="i in 20" :key="i">Button</MButton>
  </MSpace>
</template>
