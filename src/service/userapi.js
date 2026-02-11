import { api } from "./api";

export async function getuser(){
    console.log("Going to run getuser function to fetch all users")
    return await api.get('/user/group/all')
}
