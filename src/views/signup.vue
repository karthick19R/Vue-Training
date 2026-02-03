<script setup>
import {ref} from 'vue'
const count =ref(0)
const users=ref([])
const user = ref({
    username : "",
    gender :"",
    email :"",
    phonenumber:"",
    password :"",
    repassword:""
})
const signtry =ref(0)
const signsuccess = ref(0)
const show = ref(false)
function showtable(){
    show.value=true
}
function removetable(){
    show.value=false
}
function resetform(){
    user.value = {
    username: "",
    gender: "",
    email: "",
    phonenumber: "",
    password: "",
    repassword: ""
  } 
   
}
function submitform(){
    signtry.value++;
    if (user.value.password !=user.value.repassword){
        alert("Password. do not match")
        return
    }
    signsuccess.value++
    users.value.push({
    username: user.value.username,
    gender: user.value.gender,
    email: user.value.email,
    phonenumber: user.value.phonenumber
    })
    resetform()
    showtable()
}
</script>
<template>
<div class="page">
<form @submit.prevent="submitform" @reset.prevent="resetform">
<div class="form">
     <h3 class="title">Sign Up Form</h3>
    <div class="field">
    <label for="username">User Name</label>
    <input type="text" id="username" name="username" v-model="user.username">
    </div>
    <div class="field">
    <label for="gende">Gender</label>
    <div class="radio-group">
    <input type="radio" name="gender" value="male" v-model="user.gender">Male
    <input type="radio" name="gender" value="female" v-model="user.gender">Female
    </div>
    </div>
    <div class="field">
    <label for="email">Email</label>
    <input type="email" id ="email" name="email" v-model="user.email">
    </div>
    <div class="field">
    <label for="phonenumber">Phone Number</label>
    <input type="text" pattern ="\d{10}" title="Phone number must be 10 digits" id ="phonenumber" name="phonenumber" v-model="user.phonenumber" >
    </div>
    
    <div class="field">
    <label for="password">Enter Your Password</label>
    <input type="password"id ="password" minlength="6" v-model="user.password" >
    </div>
    <div class="field">
    <label for="repassword">Confirm your password</label>
    <input type="password"id ="repassword" minlength="6" v-model="user.repassword">
    </div>
    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
</div>
</form>
</div>
<div>
<p id="nosignup">Number of People tried signing in {{ signtry }} and from it {{ signsuccess }} were successful </p>
</div>

<!-- <div>{{ users }}</div> -->
 <div v-show="show" class="data-table">
<div id="usertabletitle"><h2>Last Sign In Users</h2></div>
<div >
<table>
  <thead>
    <tr>
      <th>username</th>
      <th>gender</th>
      <th>email</th>
      <th>phonenumber</th>
    </tr>
  </thead>

  <tbody>
    <tr  v-for="(u, i) in users" :key="i">
      <td>{{ u.username }}</td>
      <td>{{ u.gender }}</td>
      <td>{{ u.email }}</td>
      <td>{{ u.phonenumber }}</td>
    </tr>
  </tbody>
</table>
<button @click="removetable">close</button>
</div>
</div>

</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fefeff;
}
.title{
    color: #070707;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #e7a4a0;
    width: 100%;
    padding: 10px;
    font-weight: 600;
    border-radius: 8px;
    border: 1px solid #e12b2b;
    font-size: 18px;
}
.form {
  align-items: center;
  width: 320px;
  padding: 26px;
  border: 2px solid #e4a6a6;
  border-radius: 3%;
  border-style:solid;
}
#nosignup{
    background-color: rgb(255, 255, 255);
    color: rgb(255, 64, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;

}
#usertabletitle{
    background-color: rgb(255, 254, 254);
    color: rgb(4, 22, 4);
    display: flex;
    justify-content: center;
    align-items: center;

}
.field {
  margin-bottom: 12px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}
input:invalid {
  border: 1px solid red;
}
.radio-group {
  display: flex;
  gap: 16px;
  margin-top: 6px;
}
button {
  margin: 12px 0;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #e39e9d;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
button:hover {
  background-color: #ffd700;
}

input:valid {
  border: 1px solid green;
}
#signbox{
    background-color: rgb(4, 28, 28);
}

button {
  margin-right: 8px;
}
th {
  background-color: #e4a095;
  color: #000;
}

.data-table {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data-table table {
  width: 100%;
  max-width: 420px;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
