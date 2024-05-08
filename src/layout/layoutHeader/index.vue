<template>
<el-header>
    <!-- left -->
    <LayoutHeaderLeft></LayoutHeaderLeft>
    <!-- right -->
    <LayoutHeaderRight></LayoutHeaderRight>
</el-header>
</template>
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const LayoutHeaderLeft = defineAsyncComponent(() => import('./layheaderleft.vue'))
const LayoutHeaderRight = defineAsyncComponent(() => import('./layheaderright.vue'))


</script>
<style lang='scss' scoped>

</style>