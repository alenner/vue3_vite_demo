<!--
 * @Author: dongjia
 * @Date: 2022-07-03 09:22:10
 * @LastEditTime: 2022-07-05 11:57:25
 * @LastEditors: aleaner
 * @Description: 孙子组件
 * @FilePath: \vue3-vite\src\components\EventBus\Grandson.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="grand-content">
    <p class="content-title">孙子组件</p>
    <div v-if="myGift">这是子组件A给外甥组件的礼物：{{ myGift }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import bus from "@/utils/eventBus"

let myGift = ref("")
bus.on('Nephew', (gift: string) => {
  myGift.value = gift
})
</script>

<style lang="scss" scoped>
.grand-content {
  margin-top: 20px;
  padding: 20px;
  background-color: purple;
  color: #FFF;

  .content-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>