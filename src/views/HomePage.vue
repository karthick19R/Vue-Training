<script setup>
import { useUserDetails } from '@/stores/score'

const store = useUserDetails()
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
      class="pa-5"
    >
      Edit User
    </v-btn>
    <v-btn
    color="primary"
    variant="elevated"
    :to="`/table`"
    class="pa-5"
>View All Users
</v-btn>
  
    <v-btn
      color="error"
      variant="tonal"
      to="/logout"
      class="pa-5"
    >
      Logout
    </v-btn>

  </v-container>
</template>
