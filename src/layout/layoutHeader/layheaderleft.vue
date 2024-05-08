<template>
    <div style="display: flex;align-items: center;">
        <div class="header-left-icon">
            <svg-icon :icon="store.isCollapse ? 'Expand' : 'Fold'" @click="handleFoldClick"></svg-icon>
        </div>
        <!-- 面包屑 -->
        <div class="header-left-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item  v-for="(item, index) in mmlists" :key="index">
                    <span style="display: flex;align-items: center;" v-if="index===mmlists!.length-1">
                        <svg-icon :icon="item.meta.icon"></svg-icon>    {{ item.meta.title }}
                    </span>
                    <a v-else style="display: flex;align-items: center;" @click="gocilck(item)">
                        <svg-icon :icon="item.meta.icon"></svg-icon>   {{ item.meta.title }}
                    </a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { useIsCollStore } from '@/stores/useIsColl';
const store = useIsCollStore();
const handleFoldClick = () => {
    store.isCollapse = !store.isCollapse;
}
import {ref,watch,onMounted} from 'vue'
import { useRouter,useRoute, type RouteLocationNormalized ,type RouteRecordNormalized, onBeforeRouteUpdate} from 'vue-router';
const router = useRouter();
const route=useRoute();

const mmlists=ref<RouteRecordNormalized[]>([]);

// watch(route,(newValue)=>{
//     console.log(newValue);
//      mmlists.value=t.matched.filter(item=> item.meta&& item.meta.title&& item.meta.icon);
// },{immediate:true,deep:true})

const getroutelist=(t:RouteLocationNormalized)=>{
    mmlists.value=t.matched.filter(item=> item.meta&& item.meta.title&& item.meta.icon);
}
onBeforeRouteUpdate(to=>{ // 路由更新触发，相当于监听
    getroutelist(to);
})
onMounted(()=>{ // 监听
    getroutelist(route);
})

const gocilck=(item:RouteRecordNormalized)=>{// 路由跳转
    const {path,redirect} =item;
    if (redirect) router.push(redirect as string)
    else router.push(path)
}

</script>
<style lang='scss' scoped></style>