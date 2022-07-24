<!--
 * @Author: dongjia
 * @Date: 2022-07-03 11:30:47
 * @LastEditTime: 2022-07-03 12:07:38
 * @LastEditors: aleaner
 * @Description: 组件v-model指令(主组件)
 * @FilePath: \vue3-vite\src\components\ComponentVmodel\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">组件v-model指令专项</p>
    <div class="main-content">
      <p class="content-title">根组件</p>
      <div>子组件状态：{{ isShowChild ? '显示' : '隐藏' }}<button style="margin-left: 20px;"
          @click="isShowChild = true">显示子组件</button></div>
      <div>简介：{{ desc }}</div>
      <div>数据对象：{{ obj }}</div>
      <Child v-model="isShowChild" v-model:desc="desc" v-model:p_obj="obj"></Child>
    </div>
  </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue"

// 定义子组件的显示隐藏状态
let isShowChild = ref<boolean>(true)

// 定义父组件的简介
let desc = ref<string>('这是父组件的简介内容')

// 定义父组件的数据对象
let obj = reactive({
  name: "父组件",
  son: {
    name: "子组件"
  }
})
</script>

<style lang="scss" scoped>
.main-content {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: red;
  color: #FFF;

  .content-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>