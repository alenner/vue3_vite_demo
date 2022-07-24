<!--
 * @Author: dongjia
 * @Date: 2022-07-04 22:49:38
 * @LastEditTime: 2022-07-05 11:25:35
 * @LastEditors: aleaner
 * @Description: 左侧布局容器
 * @FilePath: \vue3-vite\src\layout\leftside.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="container-left">
    <!-- 左侧布局插槽，主要用于页面导航 -->
    <el-scrollbar>
      <slot></slot>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container-left {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 160px;
}

.el-scrollbar {
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
}
</style>