<!--
 * @Author: dongjia
 * @Date: 2022-07-02 18:37:22
 * @LastEditTime: 2022-07-02 19:23:20
 * @LastEditors: aleaner
 * @Description: 孙子组件
 * @FilePath: \vue3-vite\src\components\ProvideInject\grandsonA.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div style="flex: 1;color: #FFF;">
    <div class="sub-content">
      <p class="main-title">这是孙子组件</p>
      <div>接收根组件传过来的值：</div>
      <div>grandsonName：{{ ancestor.grandsonName }}</div>
      <button @click="changeName">修改根组件传过来的值</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 获取根组件传输的值
let ancestor = inject<any>('ancestor')

// 修改根组件的值
const changeName = () => {
  ancestor.grandsonName.value = "grandsonB"
}
</script>

<style lang="scss" scoped>
.sub-content {
  margin-top: 20px;
  padding: 20px;
  background-color: blue;

  .main-title {
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>