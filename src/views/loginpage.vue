<script setup>
import Logincomponent from '@/components/logincomponent.vue';
import { reactive } from 'vue';
import { useUserDetails } from '@/stores/score'
import { useRouter } from 'vue-router';
const userstore = useUserDetails()
const router =useRouter()
const credentials = reactive({
    'email':'',
    'password':''
})

function login(){
    console.log(userstore.users)
    console.log(credentials)
    const result = userstore.users.find((user)=>user.email===credentials.email)
    console.log("result",result)
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
    <div class="signup-container">
        <v-container class="d-flex justify-center align-items-center min-height-100vh">
            <v-card width="420" elevation="2" class="d-flex justify-center align-center signup-card">
             <v-card-title class="d-flex justify-center align-items-center text-center text-h6 bg-primary text-white py-4">
                 Login
             </v-card-title>

                <v-card-text class="pa-6 d-flex justify-center align-center">
                    <Logincomponent v-model="credentials" @login="login" />
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="text-center pa-4">
                    <p class="text-caption text-grey mb-3">Don't have an account?</p>
                    <router-link to="/signup" style="text-decoration:none;">
                        <v-btn variant="text" color="primary">Create an account</v-btn>
                    </router-link>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>
.login-page { min-height:100vh; background-color:#f5f5f5; display:flex; align-items:center; justify-content:center; }
.min-height-100vh { min-height:100vh; }
.login-card { border-radius:8px; }
</style>