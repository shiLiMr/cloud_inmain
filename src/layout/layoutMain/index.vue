<template>
    <el-main>
        <el-scrollbar>
        <router-view v-slot="{ Component }">
            <Transition name="fass" made="out-in">
                <keep-alive>
                    <component :is="Component" v-if="$route.meta.keepAlive" ></component>
                </keep-alive>
            </Transition>
            <Transition name="fass" made="out-in">
                <component :is="Component" v-if="!$route.meta.keepAlive" ></component>
            </Transition>
        </router-view>
    </el-scrollbar>
    </el-main>
</template>
<script setup lang='ts'>


</script>
<style lang='scss' scoped>
.fass-enter-active,
.fass-leave-active {
    opacity: 0;
  transition: all 0.5s ease;
}

.fass-enter-from,
.fass-leave-to {
  opacity: 0;
}

.fass-enter-active{
    transform: translateX(-20%);
}
.fass-leave-to{
    transform: translateX(20%);
}
</style>