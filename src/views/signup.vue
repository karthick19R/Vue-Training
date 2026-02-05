<script setup>
import { computed, reactive, ref } from 'vue'
import { userdetail } from '@/stores/score'
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
const errors = reactive({})
const signtry = ref(0)
const signsuccess = ref(0)
const show = ref(false)
function showtable() {
  show.value = true
}
function removetable() {
  show.value = false
}
function resetform() {
  user.firstname = ""
  user.lastname = ""
  user.gender = ""
  user.email = ""
  user.phonenumber = ""
  user.password = ""
  user.repassword = ""
  Object.keys(errors).forEach(key => delete errors[key])
}

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
const fullname = computed(() => {
  return `${user.firstname}  ${user.lastname}`
})
function validate() {
  if (user.firstname == "") {
    errors.firstname = "First Name  is required"
  }
  if (!user.lastname) {
    errors.lastname = "lastname is required"
  }
  if (user.gender == "") {
    errors.gender = "Please select gender"
  } if (!user.email) {
    errors.email = "Email is required"
  }
  if (!user.phonenumber) {
    errors.phonenumber = "Phone number is required"
  } if (!user.password) {
    errors.password = "Password is required"
    if (!user.repassword) {
      errors.repassword = "Retype your password"
    }
  } if (user.password !== user.repassword) {
    errors.repassword = "Passwords do not match"
  }

}
function congrat(){
  window.alert("User Created Successfully")
}
function submitform() {
  console.log(user)
  signtry.value++;
  // if (Object.keys(validationError.value).length > 0) {
  //   return
  // }
  validate() 
  if (Object.keys(errors).length > 0) {
    return
  }

  signsuccess.value++
  console.log(fullname.value)
  userstore.addUser({
    username: fullname.value,
    gender: user.gender,
    email: user.email,
    phonenumber: user.phonenumber
  }
  )
  console.log(userstore.users)
  // users.push({
  //   username: fullname.value,
  //   gender: user.gender,
  //   email: user.email,
  //   phonenumber: user.phonenumber
  // })
  congrat()
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
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" v-model="user.firstname">
          <!-- <small v-if="validationError.firstname" class="error">
            {{ validationError.firstname }}
          </small> -->
          <small v-if="errors.firstname" class="error">
            {{ errors.firstname }}
          </small>
        </div>
        <div class="field">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" v-model="user.lastname">
          <!-- <small v-if="validationError.lastname" class="error">
            {{ validationError.lastname }}
          </small> -->
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
          <!-- <small v-if="validationError.email" class="error">
            {{ validationError.email }}
          </small> -->
          <small v-if="errors.email" class="error">
            {{ errors.email }}
          </small>
        </div>
        <div class="field">
          <label for="phonenumber">Phone Number</label>
          <input type="text" id="phonenumber" name="phonenumber" v-model="user.phonenumber">
          <!-- <small v-if="validationError.phonenumber" class="error">
            {{ validationError.phonenumber }}
          </small> -->
          <small v-if="errors.phonenumber" class="error">
            {{ errors.phonenumber }}
          </small>
        </div>

        <div class="field">
          <label for="password">Enter Your Password</label>
          <input type="password" id="password" minlength="6" v-model="user.password">
          <!-- <small v-if="validationError.password" class="error">{{ validationError.password }}</small> -->
          <small v-if="errors.password" class="error">{{ errors.password }}</small>
        </div>
        <div class="field">
          <label for="repassword">Confirm your password</label>
          <input type="password" id="repassword" minlength="6" v-model="user.repassword">
          <!-- <small v-if="validationError.repassword" class="error">{{ validationError.repassword }}</small> -->
          <small v-if="errors.repassword" class="error">{{ errors.repassword }}</small>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  <div>
    <p id="nosignup">Number of People tried signing in {{ signtry }} and from it {{ signsuccess }} were successful </p>
  </div>
  <router-link to="/table">
    <button type="button">View Users</button>
  </router-link>
  <!-- <div>{{ users }}</div> -->
  <div v-show=false class="data-table">
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

.title {
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
  border-style: solid;
}

#nosignup {
  background-color: rgb(255, 255, 255);
  color: rgb(255, 64, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

}

#usertabletitle {
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

.error {
  color: #e91111;
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

#signbox {
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
