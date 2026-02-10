<script setup>
import { userdetail } from '@/stores/score'

const store = userdetail()
console.log(store.users)
console.log(store.currentuser)
const userId = store.currentuser.id
console.log(userId)
</script>

<template>
  <v-container class="d-flex ga-4">
    <v-btn
      color="primary"
      variant="outlined"
      :to="`/user/edit/${userId}`"
      :disabled="!userId"
    >
      Edit User
    </v-btn>
    <v-btn
      color="error"
      variant="tonal"
      to="/logout"
    >
      Logout
    </v-btn>
  </v-container>
</template>
