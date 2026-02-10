<script setup>
import { computed, reactive, ref } from 'vue'
import vCapitalize from '../custom/directive.js'
import { counter } from '@/custom/composable.js'

const value= defineModel()
const emit = defineEmits(['submit'])
const signtry = counter()
const signsuccess = counter()
const errors = reactive({})
const vFocus = {
  mounted(el){
    el.focus()
  }
}
function validate() {
    Object.keys(errors).forEach(key => delete errors[key])
  if (value.value.firstname == "" ) {
    errors.firstname = "First Name  is required"
  }
  if (!value.value.lastname) {
    errors.lastname = "lastname is required"
  }
  if (value.value.gender == "") {
    errors.gender = "Please select gender"
  } if (!value.value.email) {
    errors.email = "Email is required"
  }
  if (!value.value.phonenumber) {
    errors.phonenumber = "Phone number is required"
  } if (!value.value.password) {
    errors.password = "Password is required"
    if (!value.value.repassword) {
      errors.repassword = "Retype your password"
    }
  } if (value.value.password !== value.value.repassword) {
    errors.repassword = "Passwords do not match"
  }

}
function resetform() {
  value.value.firstname = ""
  value.value.lastname = ""
  value.value.gender = ""
  value.value.email = ""
  value.value.phonenumber = ""
  value.value.password = ""
  value.value.repassword = ""
  Object.keys(errors).forEach(key => delete errors[key])
}
// function congrat(){
//   window.alert("User Created Successfully")
// }
function submitform() {
 // console.log(user)
  signtry.increment();
  // if (Object.keys(validationError.value).length > 0) {
  //   return
  // }
  validate() 
  console.log(errors)
  if (Object.keys(errors).length > 0) {
    return
  }
  signsuccess.increment()
  emit('submit',value.value)
  resetform()
}
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-card
      width="420"
      class="pa-6"
      elevation="3"
    >
      <v-card-title class="text-center text-h6">
        SIGN UP
      </v-card-title>

      <v-divider class="mb-4" />

      <v-form @submit.prevent="submitform">
        <v-text-field
          v-capitalize
          label="First Name"
          v-model="value.firstname"
          :error-messages="errors.firstname"
        >
      </v-text-field>

        <v-text-field
          label="Last Name"
          v-model="value.lastname"
          v-capitalize
          :error-messages="errors.lastname"
        />
        <v-radio-group
        label="Gender"
        v-model="value.gender"
        :error-messages="errors.gender"
        inline
        density="compact"
        color="primary"
        >
        <v-radio label="Male" value="male"></v-radio>
        <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>

        <v-text-field
          label="Phone Number"
          v-model="value.phonenumber"
          :error-messages="errors.phonenumber"
        />

        <v-text-field
          label="Email"
          type="email"
          v-model="value.email"
          :error-messages="errors.email"
        />

        <v-text-field
          label="Password"
          type="password"
          v-model="value.password"
          :error-messages="errors.password"
        />

        <v-text-field
          label="Confirm Password"
          type="password"
          v-model="value.repassword"
          :error-messages="errors.repassword"
        />
        <v-btn
          color="primary"
          block
          type="submit"
          class="mt-4"
        >
          Submit
        </v-btn>

        <v-btn
          variant="outlined"
          block
          class="mt-2"
          @click="resetform"
        >
          Reset
        </v-btn>
      </v-form>

      <v-alert
        type="info"
        variant="tonal"
        class="mt-4"
      >
        Number of Users : {{ signtry.count }} tried, {{ signsuccess.count }} successful
      </v-alert>
    </v-card>
  </v-container>
</template>

<!-- 
<template>
  <div class="page">
    <form @submit.prevent="submitform" @reset.prevent="resetform">
      <div class="form">
        <h3 class="title">Sign Up Form</h3>
        <div class="field">
          <label for="firstname">First Name</label>
          <input type="text" v-focus  id="firstname" name="firstname" v-model="value.firstname"  v-capitalize :style="{ borderColor: errors.firstname ? 'red' : '#ccc'}">
           <small v-if="validationError.firstname" class="error">
            {{ validationError.firstname }}
          </small> 
          <small v-if="errors.firstname" class="error">
            {{ errors.firstname }}
          </small>
        </div>
        <div class="field">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" v-model="value.lastname"  v-capitalize :style="{ borderColor: errors.lastname ? 'red' : '#ccc'}">
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
            <input type="radio" name="gender" value="male" v-model="value.gender">Male
            <input type="radio" name="gender" value="female" v-model="value.gender">Female
          </div>
          <small v-if="errors.gender" class="error">{{ errors.gender }}</small>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email"  id="email" name="email" v-model="value.email" :style="{ borderColor: errors.email ? 'red' : '#ccc'}">
          <small v-if="validationError.email" class="error">
            {{ validationError.email }}
          </small>
          <small v-if="errors.email" class="error">
            {{ errors.email }}
          </small>
        </div>
        <div class="field">
          <label for="phonenumber">Phone Number</label>
          <input type="text"  id="phonenumber" name="phonenumber" v-model="value.phonenumber" :style="{ borderColor: errors.phonenumber ? 'red' : '#ccc'}">
          <small v-if="validationError.phonenumber" class="error">
            {{ validationError.phonenumber }}
          </small> 
          <small v-if="errors.phonenumber" class="error">
            {{ errors.phonenumber }}
          </small>
        </div>

        <div class="field">
          <label for="password">Enter Your Password</label>
          <input type="password"  id="password" minlength="6" v-model="value.password" :style="{ borderColor: errors.password ? 'red' : '#ccc'}">
          !-- <small v-if="validationError.password" class="error">{{ validationError.password }}</small> 
          <small v-if="errors.password" class="error">{{ errors.password }}</small>
        </div>
        <div class="field">
          <label for="repassword">Confirm your password</label>
          <input type="password"  id="repassword" minlength="6" v-model="value.repassword" :style="{ borderColor: errors.repassword ? 'red' : '#ccc'}">
          <small v-if="validationError.repassword" class="error">{{ validationError.repassword }}</small> 
          <small v-if="errors.repassword" class="error">{{ errors.repassword }}</small>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
        <br><p id="nosignup">Number of People tried signing in {{ signtry.count }} and from it {{ signsuccess.count }} were successful </p>
    </form>
      </div>

 
  <div>{{ users }}</div> 
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
  color: #000;
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

button:hover {
  background-color: #ffd700;
}

input:valid {
  border: 1px solid green;
}

#signbox {
  background-color: rgb(4, 28, 28);
}
h3{
  color: #000;
  font-weight: 100;
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
</style> -->