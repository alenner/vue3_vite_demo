<!--
 * @Author: dongjia
 * @Date: 2022-07-03 09:20:20
 * @LastEditTime: 2022-07-05 11:57:29
 * @LastEditors: aleaner
 * @Description: 子组件A
 * @FilePath: \vue3-vite\src\components\EventBus\ChildA.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="sub-content">
    <p class="content-title">子组件A</p>
    <button @click="bus.emit('ChildB', sendBro)">给兄弟组件B一件礼物</button>
    <button @click="bus.emit('Nephew', sendNephew)">给外甥组件一件礼物</button>
    <input placeholder="想给外甥送一件什么礼物" v-model="sendNephew">
    <button @click="bus.emit('Nephew', sendNephew)">发送</button>
    <button @click="bus.off('Nephew')">停止向外甥送礼物</button>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import bus from "@/utils/eventBus"

// 定义传输给兄弟的响应式数据
let sendBro = ref('足球')

// 定义传输给兄弟的儿子的响应式数据
let sendNephew = ref('篮球')
</script>

<style lang="scss" scoped>
.sub-content {
  flex: 1;
  margin-top: 20px;
  padding: 20px;
  background-color: blue;
  color: #FFF;

  .content-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>