<template>
<el-aside  :class="store.isCollapse? 'aside-60':'aside-200'" >
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

import { useIsCollStore } from '@/stores/useIsColl';
const store = useIsCollStore();
</script>
<style lang='scss' scoped>

</style>