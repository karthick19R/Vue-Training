<script setup>
import { userdetail } from '@/stores/score';
import { useRoute } from 'vue-router';
import signupComponent from '@/components/signupComponent.vue';
const userstore =userdetail()
const route =useRoute()
const formData = reactive({
    id :'',
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    phonenumber: '',
    password: '',
    repassword: ''
})

function loaduser(user){
Object.assign(formData,user)
Object.assign(formData.repassword,user.password)
}
console.log(route.params.id)
const user =userstore.users.find((u)= u.id === Number(route.params.id))
console.log(user)
loaduser(user)
</script>

<template>
<signupComponent
v-model="formData"/>
</template>