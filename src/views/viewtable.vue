<script setup>
import { computed, ref } from 'vue';
// import tablecomponent from '../components/tablecomponent.vue'
import { userdetail } from '@/stores/score';

const userstore =userdetail()
const headers = computed(() => {
  if (userstore.users.length === 0) return []
  return Object.keys(userstore.users[0])
})
const search =ref('')
console.log(userstore.users)
function removeUser(index) {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this record?'
  )
  if (!confirmDelete) return
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
    <h1>User Table</h1>
    <!-- <tablecomponent :headers="headers" :rows="rows"  @delete-row="removeUser" @search-data="search = $event" /> -->
    <tablecomponent :headers="headers" :rows="rows"  @delete-row="removeUser"  v-model="search">
      <!-- <template #actions="{ index }"> -->
      <!-- <button class="delete-btn" @click="removeUser(index)">
        Remove
      </button> --> 
      <template #delete="{index}">
      <button @click="removeUser(index)">remove</button>
      </template>
    <!-- </template> -->
    </tablecomponent>
    <router-link to="/signup">
  <button type="button">Go To Forms</button>
</router-link>
</template>
<style>
h1 {
  color: rgb(10, 10, 10);
  font-weight: 500;
  margin-bottom: 16px;
}
button{
  background: #ff5c5c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s ease, transform 0.1s ease;
}

</style>