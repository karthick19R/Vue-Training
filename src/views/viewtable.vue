<script setup>
import tablecomponent from '../components/tablecomponent.vue'
import { userdetail } from '@/stores/score';
const userstore =userdetail()
console.log(userstore.users)
console.log(Object.keys(userstore.users))

</script>
<template>
    <h1 class="h1">Table</h1>
    <tablecomponent :header="userstore.users.keys" :values="userstore.users" />
</template>
<style>
.h1{
    font-weight: 100;
    color: rgb(1, 10, 7);
}
</style>