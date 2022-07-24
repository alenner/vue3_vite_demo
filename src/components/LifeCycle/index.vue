<!--
 * @Author: dongjia
 * @Date: 2022-07-01 10:41:16
 * @LastEditTime: 2022-07-01 11:50:33
 * @LastEditors: aleaner
 * @Description: 生命周期专项
 * @FilePath: \vue3-vite\src\components\LifeCycle\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div id="lifeCycle">
    <chidren v-if="flag"></chidren>
    <!-- 创建一个生命周期组件创建和销毁的按钮 -->
    <div class="div-btn" @click="flag = !flag">销毁或创建生命周期专项组件</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import chidren from "./children.vue"

let flag = ref(true)
</script>

<style lang="scss" scoped>
.div-btn {
  margin: 20px auto 0;
  width: fit-content;
  padding: 5px;
  background-color: red;
  border-radius: 6px;
  border: 2px solid rgb(85, 85, 85);
  color: #fff;
  cursor: pointer;
}
</style>