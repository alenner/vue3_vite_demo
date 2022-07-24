<script setup lang="ts">
import { setTitle } from "@/utils/tools"
// 获取当前路由信息
const route = useRoute()
// 给当前路由设置页面标题
watch(() => route.meta.title, (newVal, oldVal) => {
  setTitle(newVal as string)
})
</script>

<template>
  <router-view></router-view>
</template>

    <style lang="scss">
    </style>
