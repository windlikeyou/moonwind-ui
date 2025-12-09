<script setup>
import { MSpace, MButton } from 'moonwind-ui'
import { h } from 'vue'

const split = h('span', { style: { color: '#ccc' } }, '|')
</script>

<template>
  <MSpace :split="split">
    <MButton type="text">Link</MButton>
    <MButton type="text">Link</MButton>
    <MButton type="text">Link</MButton>
  </MSpace>
</template>
