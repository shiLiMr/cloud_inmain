<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Svgicon from './components/Svgicon.vue'
import  request  from './utils/request'

const add=async ()=>{
  const res=await request({
    url:'',
    method:'get',
   
  })
  console.log(res)
}
</script>


<template>

 <Svgicon icon="Odometer" color="red" size="30px" @click="add"></Svgicon>
  <RouterView />
</template>

<style scoped>

</style>
