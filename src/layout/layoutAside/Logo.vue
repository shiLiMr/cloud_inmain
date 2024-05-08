<template>
<div class="aside-logo">
    <img src="http://vue3.mengxuegu.com/assets/logo-8ba32897.png" alt="">
    <div v-if="!store.isCollapse">积云-Vue3全家桶项目</div>
</div>
</template>
<script setup lang='ts'>
import { useIsCollStore } from '@/stores/useIsColl';
const store = useIsCollStore();

</script>
<style lang='scss' scoped>

</style>