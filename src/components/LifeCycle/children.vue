<!--
 * @Author: dongjia
 * @Date: 2022-07-01 11:37:07
 * @LastEditTime: 2022-07-01 11:56:28
 * @LastEditors: aleaner
 * @Description: 生命周期测试子组件
 * @FilePath: \vue3-vite\src\components\LifeCycle\children.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div id="lifeCycle">
    <p class="item-title">生命周期专项</p>
    <div class="content">
      <p class="list-title">生命周期日志</p>
      <div class="list-item" v-for="(item, index) in logList" :key="index">{{ item }}</div>
      <button style="margin-top: 10px;" @click="logList.splice(0)" v-if="logList.length">清空log日志</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick, reactive } from "vue"
// 定义一个数组，用来存放各个生命周期的日志
let logList = reactive<string[]>([])

// 组件创建之前
onBeforeMount(() => {
  console.log("组件创建之前,无法获取dom元素", document.getElementById("lifeCycle"))
  logList.push("组件创建之前(onBeforeMount),无法获取dom元素：" + document.getElementById("lifeCycle"))
  nextTick(() => {
    console.log("组件创建之前,试试nextTick能不能获取dom元素", document.getElementById("lifeCycle"))
    logList.push("组件创建之前(onBeforeMount),试试nextTick能不能获取dom元素：" + document.getElementById("lifeCycle"))
  }) // 看来是可以的
})

// 组件创建完成
onMounted(() => {
  console.log("组件创建完成之后,可以获取dom元素", document.getElementById("lifeCycle"))
  logList.push("组件创建完成之后(onMounted),可以获取dom元素：" + document.getElementById("lifeCycle"))
})

// onBeforeUpdate数据更新之前
onBeforeUpdate(() => {
  console.log("数据更新之前，获取生命周期日志数据", logList)
  // logList.push("数据更新之前（onBeforeUpdate），获取生命周期日志数据：" + logList)
  // alert("数据更新之前，获取生命周期日志数据" + logList)
})

//onUpdated数据更新之后
onUpdated(() => {
  console.log("数据更新之后，获取生命周期日志数据", logList)
  // logList.push("数据更新之后（onUpdated），获取生命周期日志数据：" + logList)
  // alert("数据更新之后，获取生命周期日志数据" + logList)
})

// 组件销毁之前 onBeforeUnmount
onBeforeUnmount(() => {
  console.log("组件销毁之前，可以获取生命周期日志数据", logList)
  // alert("组件销毁之前(onBeforeUnmount)，可以获取生命周期日志数据：" + logList)
  console.log("组件销毁之前，可以获取dom元素", document.getElementById("lifeCycle"))
  // alert("组件销毁之前(onBeforeUnmount)，可以获取dom元素：" + document.getElementById("lifeCycle"))
})

// 组件销毁之后 onUnmounted
onUnmounted(() => {
  console.log("组件销毁后无法获取组件的任何信息：", logList, document.getElementById("lifeCycle"))
  // alert("组件销毁后(onUnmounted)无法获取组件的任何信息：" + logList + document.getElementById("lifeCycle"))
})
</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
  font-size: 20px;
  color: #727272;
  font-weight: bold;
}

.content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .list-item {
    margin-top: 10px;
  }
}
</style>