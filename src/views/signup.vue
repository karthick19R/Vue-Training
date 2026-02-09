<script setup>
import { computed, reactive, ref } from 'vue'
import { userdetail } from '@/stores/score'
import signupComponent from '@/components/signupComponent.vue'
const userstore = userdetail()
const user = reactive({
  firstname: "",
  lastname: "",
  gender: "",
  email: "",
  phonenumber: "",
  password: "",
  repassword: ""
})

// const errors = reactive({})

//const show = ref(false)
// function showtable() {
//   show.value = true
// }
// function removetable() {
//   show.value = false
// }
// function resetform() {
//   user.firstname = ""
//   user.lastname = ""
//   user.gender = ""
//   user.email = ""
//   user.phonenumber = ""
//   user.password = ""
//   user.repassword = ""
//   Object.keys(errors).forEach(key => delete errors[key])
// }

// const validationError = computed(() => {
//   const e = {}
//   if (user.firstname != '' && (user.firstname.length < 3)) {
//     e.firstname = "First Name must be atleast 3 character"
//     delete errors.firstname
//   }
//   else {
//     delete e.firstname
//   }
//   if (user.lastname != '' && user.lastname.length < 3) {
//     e.lastname = "Last Must be atleast 3 character"
//     delete errors.lastname
//   }
//   else {
//     delete e.lastname
//   }
//   if (user.email && !/^\S+@\S+\.\S+$/.test(user.email)) {
//     e.email = "Invalid Email format"
//     delete errors.email
//   }
//   else {
//     delete e.email
//   }
//   if (user.gender) {
//     delete errors.gender
//   }
//   if (user.phonenumber && (!/^\d{10}$/.test(user.phonenumber))) {
//     e.phonenumber = "Invalid Mobile number format"
//     delete errors.phonenumber
//   }
//   else {
//     delete e.phonenumber
//   }
//   if (user.password && user.password.length < 6) {
//     e.password = "Password should be atleast 6 charachter"
//     delete errors.password
//   }
//   else {
//     delete e.password
//   }
//   if (user.repassword && user.repassword.length < 6) {
//     e.repassword = "Password should be atleast 6 charachter"
//     delete errors.repassword
//   }
//   else {
//     delete e.repassword
//   }
//   if (user.repassword && !(user.repassword == user.password)) {
//     e.repassword = "Passwords do not match"

//   }
//   else {
//     delete e.repassword
//   }
//   return e
// })
// const fullname = computed(() => {
//   return `${user.firstname}  ${user.lastname}`
// })
// function validate() {
//     Object.keys(errors).forEach(key => delete errors[key])
//   if (user.firstname == "") {
//     errors.firstname = "First Name  is required"
//   }
//   if (!user.lastname) {
//     errors.lastname = "lastname is required"
//   }
//   if (user.gender == "") {
//     errors.gender = "Please select gender"
//   } if (!user.email) {
//     errors.email = "Email is required"
//   }
//   if (!user.phonenumber) {
//     errors.phonenumber = "Phone number is required"
//   } if (!user.password) {
//     errors.password = "Password is required"
//     if (!user.repassword) {
//       errors.repassword = "Retype your password"
//     }
//   } if (user.password !== user.repassword) {
//     errors.repassword = "Passwords do not match"
//   }

// }
function congrat(){
  window.alert("User Created Successfully")
}
function submitform(data) {
  console.log(data)
  //console.log(fullname.value)
  userstore.addUser({
    username:`${data.firstname}  ${data.lastname}`,
    gender: data.gender,
    email: data.email,
    phonenumber: data.phonenumber,
    password :data.password
  }
  )
  console.log(userstore.users)
  congrat()
  ///resetform()
}
</script>
<template>
  <div class="page">
    <!-- <form @submit.prevent="submitform" @reset.prevent="resetform">
      <div class="form">
        <h3 class="title">Sign Up Form</h3>
         <label for="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" v-model="user.firstname">
           <small v-if="validationError.firstname" class="error">
            {{ validationError.firstname }}
          </small> 
          <small v-if="errors.firstname" class="error">
            {{ errors.firstname }}
          </small>
        </div>
        <div class="field">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" v-model="user.lastname">
           <small v-if="validationError.lastname" class="error">
            {{ validationError.lastname }}
          </small> 
          <small v-if="errors.lastname" class="error">
            {{ errors.lastname }}
          </small>
        </div>
        <div class="field">
          <label for="gender">Gender</label>
          <div class="radio-group">
            <input type="radio" name="gender" value="male" v-model="user.gender">Male
            <input type="radio" name="gender" value="female" v-model="user.gender">Female
          </div>
          <small v-if="errors.gender" class="error">{{ errors.gender }}</small>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="user.email">
           <small v-if="validationError.email" class="error">
            {{ validationError.email }}
          </small>
          <small v-if="errors.email" class="error">
            {{ errors.email }}
          </small>
        </div>
        <div class="field">
          <label for="phonenumber">Phone Number</label>
          <input type="text" id="phonenumber" name="phonenumber" v-model="user.phonenumber">
           <small v-if="validationError.phonenumber" class="error">
            {{ validationError.phonenumber }}
          </small> 
          <small v-if="errors.phonenumber" class="error">
            {{ errors.phonenumber }}
          </small>
        </div>

        <div class="field">
          <label for="password">Enter Your Password</label>
          <input type="password" id="password" minlength="6" v-model="user.password">
           <small v-if="validationError.password" class="error">{{ validationError.password }}</small> 
          <small v-if="errors.password" class="error">{{ errors.password }}</small>
        </div>
        <div class="field">
          <label for="repassword">Confirm your password</label>
          <input type="password" id="repassword" minlength="6" v-model="user.repassword">
           <small v-if="validationError.repassword" class="error">{{ validationError.repassword }}</small> 
          <small v-if="errors.repassword" class="error">{{ errors.repassword }}</small>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form> -->
<signupComponent v-model="user" @submit="submitform"></signupComponent>
 </div>
  <router-link to="/table">
    <button type="button">View Users</button>
  </router-link>
  <router-link to="/login">
    <button type="button">Login</button>
  </router-link>
  <!-- <div>
    <p id="nosignup">Number of People tried signing in {{ signtry }} and from it {{ signsuccess }} were successful </p>
  </div> -->
  <!-- <div>{{ users }}</div> -->
  <!-- <div v-show=false class="data-table">
    <div id="usertabletitle">
    <h2>Last Sign In Users</h2>
    </div>
    <div>
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
          <tr v-for="(u, i) in userstore.users" :key="i">
            <td>{{ u.username }}</td>
            <td>{{ u.gender }}</td>
            <td>{{ u.email }}</td>
            <td>{{ u.phonenumber }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="removetable">close</button>
    </div> -->
  <!-- </div> -->

</template>

<style scoped>

</style>
