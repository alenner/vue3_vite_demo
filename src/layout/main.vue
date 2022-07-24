<!--
 * @Author: dongjia
 * @Date: 2022-07-04 22:47:07
 * @LastEditTime: 2022-07-05 11:25:42
 * @LastEditors: aleaner
 * @Description: 内容布局
 * @FilePath: \vue3-vite\src\layout\main.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="page-container">
    <!-- 主要内容模块 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.page-container {
  margin-top: 60px;
  margin-left: 160px;
  padding: 20px;
  min-height: calc(100vh - 60px);
}
</style>