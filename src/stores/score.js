import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const userdetail = defineStore('user', () => {
  const currentuser =reactive({})
  const id = ref(1)
  const users = reactive([])

  function addUser(data) {
    users.push({id:id.value++ , ...data})
  }

  function removeUser(index){
    users.splice(index,1)
  }
  function loggeduser(data){
    Object.assign(currentuser,data)
  }
  function updateUser(id, updatedData) {
  const user = users.find(u => u.id === id)
  if (user) {
    Object.assign(user, updatedData)
  }
}

  return {users ,addUser,removeUser,loggeduser,currentuser,updateUser }
})
