<script setup>
import {RouterView } from 'vue-router'
import { provide,ref } from 'vue';
const theme = ref('dark')
function changetheme(){
  theme.value = theme.value === 'dark'?'light':'dark'
}
provide('themes',{
  theme,changetheme
})
</script>

<template>
  <header>
  </header>
  <RouterView/>
</template>
<style scoped>
</style>
