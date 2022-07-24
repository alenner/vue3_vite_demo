<!--
 * @Author: dongjia
 * @Date: 2022-07-02 18:35:52
 * @LastEditTime: 2022-07-02 18:51:31
 * @LastEditors: aleaner
 * @Description: 依赖注入（子组件）
 * @FilePath: \vue3-vite\src\components\ProvideInject\ChildCom.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="sub-content">
    <p class="main-title">这是子组件</p>
    <div class="flex-style">
      <grandsonA></grandsonA>
      <grandsonB></grandsonB>
    </div>
  </div>
</template>

<script setup lang="ts">
import grandsonA from './grandsonA.vue';
import grandsonB from './grandsonB.vue';
</script>

<style lang="scss" scoped>
.sub-content {
  margin-top: 20px;
  padding: 20px;
  background-color: green;

  .main-title {
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
  }

  .flex-style {
    display: flex;
  }
}
</style>