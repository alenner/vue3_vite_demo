<!--
 * @Author: dongjia
 * @Date: 2022-07-04 23:07:28
 * @LastEditTime: 2022-07-05 11:09:20
 * @LastEditors: aleaner
 * @Description: 项目主页面
 * @FilePath: \vue3-vite\src\modules\admin\views\admin.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="main-page">
    <Header>
      <template #left>logo</template>
      <template #right>梁栋佳</template>
    </Header>
    <LeftSide>
      <LeftSideMenu></LeftSideMenu>
    </LeftSide>
    <MainContent>
      <RouterView></RouterView>
    </MainContent>
  </div>
</template>

<script setup lang="ts">
import Header from "@/layout/header.vue"
import LeftSide from "@/layout/leftside.vue"
import MainContent from "@/layout/main.vue"
import LeftSideMenu from "@/components/Default/LeftSideMenu.vue";
</script>

<style lang="scss" scoped>
.main-page {}
</style>