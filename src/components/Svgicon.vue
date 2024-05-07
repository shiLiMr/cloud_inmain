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
        return h(resolveComponent('el-icon'), { color: props.color, size: props.size }, [ h(resolveComponent(props.icon))]
        )
    }
}

//const vnode=h('div',{color:'red',size:'16px'},['1234567899'])

</script>
<template>
    <!-- <vnode /> -->

    <svg_icon />

    <!-- <el-icon :color="color" :size="size">
        <component :is="icon"></component>
    </el-icon> -->



</template>

<style lang='scss' scoped></style>