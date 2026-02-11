<script setup>
import { useUserDetails } from '@/stores/score'
import { computed } from 'vue'

const store = useUserDetails()
const userId = computed(() => store.currentuser.data.id)
console.log("current user",store.currentuser)
console.log("user id",userId.value)
</script>

<template>
  <v-container class="d-flex ga-4">
    <v-btn
      color="primary"
      :to="`/user/edit/${userId.value}`"
      :disabled="!userId.value"
      size="large"
    >
      Edit User
    </v-btn>
    <v-btn
      color="primary"
      :to="`/table`"
      size="large"
    >
      View All Users
    </v-btn>
  
    <v-btn
      color="error"
      :to="`/logout`"
      size="large"
    >
      Logout
    </v-btn>

  </v-container>
</template>
