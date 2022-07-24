<!--
 * @Author: dongjia
 * @Date: 2022-07-04 23:52:58
 * @LastEditTime: 2022-07-05 11:23:04
 * @LastEditors: aleaner
 * @Description: 侧边菜单栏
 * @FilePath: \vue3-vite\src\components\Default\LeftSideMenu.vue
 * 怎么可能会有bug！！！
-->
<template>
  <el-menu router :default-active="defaultActive" @open="handleOpen" @close="handleClose">
    <!-- 二级菜单使用 -->
    <!-- <el-sub-menu index="1">
      <template #title>xxx</template>
    </el-sub-menu> -->
    <el-menu-item v-for="menuItem in menuList" :index="menuItem.path">
      {{ menuItem?.meta?.title || menuItem.name }}
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { SubRouters } from "@/config"

const route = useRoute()

const menuList = computed(() => {
  return SubRouters.filter(item => item.name)
})

const defaultActive = computed(() => {
  return route.path
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>