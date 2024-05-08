<template>
<el-aside width="200px" >
    <!-- logo -->
    <laylogo></laylogo>
    <!-- menus -->
    <laymenus></laymenus>
</el-aside>
</template>
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
const laylogo=defineAsyncComponent(()=>import('@/layout/layoutAside/Logo.vue'))
const laymenus=defineAsyncComponent(()=>import('@/layout/layoutAside/Menus.vue'))

</script>
<style lang='scss' scoped>

</style>