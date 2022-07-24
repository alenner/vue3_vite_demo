<!--
 * @Author: dongjia
 * @Date: 2022-07-03 09:21:17
 * @LastEditTime: 2022-07-13 09:54:16
 * @LastEditors: aleaner
 * @Description: 子组件B
 * @FilePath: \vue3-vite\src\components\EventBus\ChildB.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="sub-content">
    <p class="content-title">子组件B</p>
    <div v-if="myGift">这是子组件A给子组件B兄弟的礼物：{{ myGift }}</div>
    <Grandson></Grandson>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import bus from "@/utils/eventBus"
let myGift = ref("")
bus.on('ChildB', (gift: string) => {
  myGift.value = gift
})
</script>

<style lang="scss" scoped>
.sub-content {
  flex: 1;
  margin-top: 20px;
  margin-left: 10px;
  padding: 20px;
  background-color: green;
  color: #FFF;

  .content-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>