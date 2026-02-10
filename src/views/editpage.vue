<script setup>
import { reactive,ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserDetails } from '@/stores/score'
import SignupComponent from '@/components/signupComponent.vue'
import dialoguebox from '@/components/dialoguebox.vue'
const userstore = useUserDetails()
const route = useRoute()
const router = useRouter()

const formData = reactive({
  firstname: '',
  lastname: '',
  gender: '',
  email: '',
  phonenumber: '',
  password: '',
  repassword: ''
})

function loadUser(user) {
  const parts = user.username.trim().split(/\s+/)

  Object.assign(formData, {
    firstname: parts[0],
    lastname: parts.slice(1).join(' '),
    gender: user.gender,
    email: user.email,
    role:user.role,
    phonenumber: user.phonenumber,
    password: '',
    repassword: ''
  })
}

const user = userstore.users.find(
  u => u.id === Number(route.params.id)
)

if (!user) {
  router.push('/table')
} else {
console.log(user)
  loadUser(user)
}
const payload = ref()
const showdialoguebox = ref(false)
function submitform(data) {
   payload.value = {
    username: `${data.firstname} ${data.lastname}`,
    gender: data.gender,
    email: data.email,
    role:data.role,
    phonenumber: data.phonenumber
  }
  showdialoguebox.value=true
//   if (data.password) {
//     payload.password = data.password
//   }
}
function confirmUpdate(){
    userstore.updateUser(user.id, payload.value)
    router.push('/table')
}

</script>

<template>
  <SignupComponent
    v-model="formData"
    @submit="submitform"
  />
  <dialoguebox v-model="showdialoguebox" @yes="confirmUpdate">
    <template #title>
        Update User Feature
    </template>
    <template #message>
        Are you sure want to update the user details
    </template>
  </dialoguebox>
</template>
