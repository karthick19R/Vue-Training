import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const userdetail = defineStore('user', () => {

  const users = reactive([])

  function addUser(user) {
    users.push({...user})
  }

  function removeUser(index){
    users.splice(index,1)
  }

  return {users ,addUser,removeUser }
})
