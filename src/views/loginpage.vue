<script setup>
import Logincomponent from '@/components/logincomponent.vue';
import { reactive } from 'vue';
import { userdetail } from '@/stores/score'
import { useRouter } from 'vue-router';
const userstore = userdetail()
const router =useRouter()
const credentials = reactive({
    'email':'',
    'password':''
})

function login(){
    console.log(userstore.users)
    console.log(credentials)
    const result = userstore.users.find((user)=>user.email===credentials.email)
    console.log(result)
    console.log("user not found")
    if(!result) return alert("User Not Found")
    console.log("credentials")
    if(result.password !== credentials.password) return alert("Invalid Credentials")
    console.log("Inside login",result)
    alert(`welcome ${result.username}`)
    userstore.loggeduser(result)
    router.push('/home')
}
</script>
<template>
    <!-- <h>Welcome to the login form</h>
    <h1>Login Form</h1>-->
    <Logincomponent v-model="credentials" @login="login"/> 
    
</template>