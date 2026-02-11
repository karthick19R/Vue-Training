import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserDetails = defineStore('user', () => {
  const currentuser =reactive({
    data : {}
  })
  const id = ref(2)
  const users = reactive([{id:1,username:"karthick",email:"karthick@example.com",gender:"male",role:"Admin",phonenumber:"9876543211",password:"karthick@example.com"}])

  function addUser(data) {
    console.log(data, 'Checking store')
    users.push({id:id.value++ ,email:data.email,
              gender: data.gender,
              password: data.password,
              phonenumber:data.phonenumber,
              role: data.role,
              username:data.username
              })
    console.log("users",users)
  }

  function removeUser(index){
    users.splice(index,1)
  }
  function loggeduser(data){
    // Object.assign(currentuser,data)
    currentuser.data = data
    console.log('Current user data logged', currentuser)
    console.log('Current user  id', currentuser.data)
    // console.log(currentuser)
  }
  function updateUser(id, updatedData) {
  const user = users.find(u => u.id === id)
  if (user) {
    Object.assign(user, updatedData)
  }
}

  return {users ,addUser,removeUser,loggeduser,currentuser,updateUser }
})
