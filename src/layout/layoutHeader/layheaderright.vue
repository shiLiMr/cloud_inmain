<template>
    <div style="display: flex; align-items: center; height: 60px;">
        <div class="header-right-icon">
            <svg-icon size="20px" icon="FullScreen"></svg-icon>
        </div>
        <div class="header-right-switch">
            <el-switch v-model="value" class="mt-2"
                style="--el-switch-on-color: #dcdfe6; --el-switch-off-color: #333333" inline-prompt active-icon="Moon"
                inactive-icon="Sunny" />
        </div>
        <div class="header-right-avatar">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d0710a224a8490844f4442b04jpeg.jpeg" />
                    莉娜
                    <el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">首页</el-dropdown-item>
                        <el-dropdown-item command="b">404</el-dropdown-item>
                        <el-dropdown-item command="c">401</el-dropdown-item>
                        <el-dropdown-item command="e" divided>退出程序</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
const value = ref(true)
const handleCommand = (command: string) => {
    console.log(command)
}
</script>
<style lang='scss' scoped></style>