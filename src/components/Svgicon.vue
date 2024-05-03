<script setup lang='ts'>

// withDefaults(
//     defineProps<{icon:string,color?:string,size?:string|number}>(),{
//         size:'16px'
//     }
// )
const props = withDefaults(
    defineProps<{ icon: string, color?: string, size?: string | number }>(), {
    size: '16px'
}
)

import { h, resolveComponent } from 'vue'
const svg_icon = () => {
    if (props.icon) { 
        return h(resolveComponent('el-icon'), { color: props.color, size: props.size }, () => h(resolveComponent(props.icon))
        )
    }
}

// import { h } from 'vue';
// const vnode=h('div',{},['123',h('span',{style:{color:'red'}},['123'],)])

</script>
<template>
    <!-- <vnode /> -->

    <svg_icon />

    <!-- <el-icon :color="color" :size="size">
        <component :is="icon"></component>
    </el-icon> -->



</template>

<style lang='scss' scoped></style>