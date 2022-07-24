<!--
 * @Author: dongjia
 * @Date: 2022-07-04 22:47:07
 * @LastEditTime: 2022-07-04 23:39:35
 * @LastEditors: aleaner
 * @Description: 页面头部容器
 * @FilePath: \vue3-vite\src\layout\header.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="container-header">
    <!-- 头部左侧插槽，主要展示logo -->
    <div>
      <slot name="left"></slot>
    </div>
    <!-- 头部右侧插槽，主要显示用户登录信息的 -->
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
</style>