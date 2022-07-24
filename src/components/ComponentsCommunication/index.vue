<!--
 * @Author: dongjia
 * @Date: 2022-07-01 11:46:35
 * @LastEditTime: 2022-07-01 22:22:35
 * @LastEditors: aleaner
 * @Description: 父子组件通信专项(主组件)
 * @FilePath: \vue3-vite\src\components\ComponentsCommunication\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">父子组件通信专项</p>
    <div class="father-component">
      <p class="title">这是父组件</p>
      <div style="color: #FFF;">父组件的一些数据：</div>
      <div class="data-form">简介：{{ desc }}</div>
      <div class="data-form">数组：{{ arr }}</div>
      <div class="data-form">对象：{{ obj }}</div>
      <div class="data-form" v-if="child_arr.length">接收到子组件的值:{{ child_arr }}</div>
      <div class="data-form">修改子组件的值:</div>
      <div class="data-form" v-if="child">子组件的简介：<input v-model="child.desc" /></div>
      <children ref="child" :p_desc="desc" :p_arr="arr" :p_obj="obj" @changeDesc="desc = '父组件的值被修改了！'"
        @fromChildrenEvent="getChildrenEvent">
      </children>
    </div>
  </div>
</template>

<script setup lang="ts">
import children from "./children.vue"
import { ref, reactive } from "vue"

// 定义父组件的数据
let desc = ref("这是父组件的简介。")
let arr = reactive<string[]>(['liang', 'zhang', 'liu'])
let obj = reactive({
  name: "liang",
  age: 25,
  son: {
    name: "liang",
    age: 2
  }
})

// 定义一个接收子组件事件的值,但是不推荐这种方法去获取子组件的值
let child_arr = reactive<number[]>([]);

// 接收子组件的事件并获取子组件的值
function getChildrenEvent(childArr: number[]) {
  child_arr.splice(0)
  child_arr.push(...childArr)
}

// 通过ref获取子组件暴露的数据或者事件,推荐用这种方法去获取子组件的数据
let child = ref<any>(null)
// console.log('child', child.value) // 获取不到子组件的实例，这时候父组件实例还在创建阶段
</script>

<style lang="scss" scoped>
.father-component {
  padding: 20px;
  background-color: blue;
  margin: 0 10%;

  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  .data-form {
    color: #fff;
  }
}
</style>