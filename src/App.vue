<script setup>
import {RouterView } from 'vue-router'
import { provide,ref } from 'vue';
const theme = ref('light')
function changetheme(){
  theme.value = theme.value === 'dark'?'light':'dark'
}
provide('themes',{
  theme,changetheme
})
</script>

<template >
  <v-app >
<div id="app">
     <RouterView />
    </div>
  </v-app>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
  padding-left: 0%;
  padding-right: 0%;

}
</style>