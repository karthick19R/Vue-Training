<script setup>
import { computed, ref } from 'vue';
import tablecomponent from '../components/tablecomponent.vue'
import { userdetail } from '@/stores/score';
const userstore =userdetail()
const headers = computed(() => {
  if (userstore.users.length === 0) return []
  return Object.keys(userstore.users[0])
})
const search =ref('')
console.log(userstore.users)

function removeUser(index){
  userstore.removeUser(index)
}
const rows=computed(()=>{
  if (search.value == ''){return userstore.users}
  return userstore.users.filter(row=>{
    return Object.values(row).some(value=> String(value).toLowerCase().includes(search.value.toLowerCase()))
  })
})
</script>
<template>
    <h1 class="h1">User Table</h1>
    <tablecomponent :headers="headers" :rows="rows"  @delete-row="removeUser" @search-data="search = $event"/>
    <router-link to="/signup">
  <button type="button">Go To Forms</button>
</router-link>
</template>
<style>
.h1 {
  font-weight: 500;
  margin-bottom: 16px;
}
</style>