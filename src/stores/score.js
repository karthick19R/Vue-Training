import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const userdetail = defineStore('user', () => {

  const users = reactive([])

  function addUser(user) {
    // console.log(user)
    // console.log(typeof(user))
    // console.log({...user})
    users.push({...user})
    //console.log(users)
  }

  function removeUser(index){
    users.splice(index,1)
  }

  return {users ,addUser,removeUser }
})
