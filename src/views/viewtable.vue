<script setup>
import { computed, ref } from 'vue';
// import tablecomponent from '../components/tablecomponent.vue'
import dialoguebox from '@/components/dialoguebox.vue'
import { useUserDetails } from '@/stores/score';

const userstore =useUserDetails()
const headers = computed(() => {
  if (userstore.users.length === 0) return []
  return Object.keys(userstore.users[0])
})
const showdialoguebox = ref(false)
const search =ref('')
const deleteid = ref()
console.log(userstore.users)
function removeUser(index) {
  deleteid.value=index
  // const confirmDelete = window.confirm(
  //   'Are you sure you want to delete this record?'
  // )
  // if (!confirmDelete) return
  showdialoguebox.value=true

  // userstore.removeUser(index)
}
function confirmUpdate(){
    userstore.removeUser(deleteid)
    router.push('/table')
}
const rows=computed(()=>{
  if (search.value == ''){return userstore.users}
  return userstore.users.filter(row=>{
    return Object.values(row).some(value=> String(value).toLowerCase().includes(search.value.toLowerCase()))
  })
})

</script>

<template>
  <div class="table-page">
    <v-container class="py-6">
      <v-card elevation="2" class="table-card">
        <v-card-title class="text-center text-h6 bg-primary text-white py-4">
          Users Directory
        </v-card-title>

        <v-card-text class="pa-6">
          <tablecomponent :headers="headers" :rows="rows" @delete-row="removeUser" v-model="search">
            <template #delete="{ index }">
              <v-btn size="small" color="error" variant="tonal" @click="removeUser(index)">
                Remove
              </v-btn>
            </template>
          </tablecomponent>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-center pa-4">
          <v-btn color="primary" variant="outlined" @click="$router.back()">
            Go Back
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>

    <dialoguebox v-model="showdialoguebox" @yes="confirmUpdate">
      <template #title>Delete User</template>
      <template #message>Are you sure you want to delete this user?</template>
    </dialoguebox>
  </div>
</template>

<style scoped>
.table-page { background-color:#f5f5f5; height:100vh; overflow-y:auto; }
.table-card { border-radius:8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
</style>