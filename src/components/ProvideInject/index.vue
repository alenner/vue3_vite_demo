<!--
 * @Author: dongjia
 * @Date: 2022-07-02 18:34:46
 * @LastEditTime: 2022-07-02 19:26:23
 * @LastEditors: aleaner
 * @Description: 依赖注入专项(根组件)
 * @FilePath: \vue3-vite\src\components\ProvideInject\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">依赖注入专项</p>
    <div class="main-content">
      <p class="main-title">这是根组件</p>
      <div class="data-form">
        <div>grandsonName:{{ grandsonName }}</div>
        <div>generation:{{ generation }}</div>
      </div>
      <ChildCom></ChildCom>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide } from "vue"
import ChildCom from "./ChildCom.vue"

// 定义一个ref对象
let grandsonName = ref('grandsonA')

// 定义一个reactive对象
let generation = reactive({
  childName: "childCom",
  grandson: {
    grandsonA_name: "grandsonA",
    grandsonB_name: "grandsonB"
  }
})

/**
 * 把之前定义的变量放到provide当中
 * 如果想传输多个数据，就先将这些定义好的数据封装成一个对象再provide传值
 */
provide('ancestor', {
  grandsonName,
  generation
})
</script>

<style lang="scss" scoped>
.main-content {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: red;

  .main-title {
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
  }

  .data-form {
    color: #FFF;

    div+div {
      margin-top: 10px;
    }
  }
}
</style>