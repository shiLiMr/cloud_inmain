<template>
<div class="common-layout">
    <el-container>
      <!-- aside -->
      <layAside></layAside>
      <el-container direction="vertical">
        <!-- header -->
        <layHeader></layHeader>
        <!-- main -->
        <layMain></layMain>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const layAside =defineAsyncComponent(()=>import('./layoutAside/index.vue'))
const layHeader =defineAsyncComponent(()=>import('./layoutHeader/index.vue'))
const layMain =defineAsyncComponent(()=>import('./layoutMain/index.vue'))


</script>
<style lang='scss' scoped>

</style>