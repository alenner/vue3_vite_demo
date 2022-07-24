<!--
 * @Author: dongjia
 * @Date: 2022-07-01 23:15:00
 * @LastEditTime: 2022-07-02 00:56:09
 * @LastEditors: aleaner
 * @Description: 异步组件专项（主组件）
 * @FilePath: \vue3-vite\src\components\AsyncComponent\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">异步组件专项</p>
    <!-- suspense组件渲染异步组件 -->
    <suspense>
      <template #default>
        <AsyncCom></AsyncCom>
      </template>
      <template #fallback>
        loadding...
      </template>
    </suspense>
    <!-- <div>
      <AsyncCom></AsyncCom>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import AsyncCom from "./AsyncCom.vue"
import Error from "./AsyncComError.vue"
import { defineAsyncComponent } from "vue";
// simple
// const AsyncCom = defineAsyncComponent(() => import("./AsyncCom.vue"))

// with option
const AsyncCom = defineAsyncComponent({
  loader: () => import("./AsyncCom.vue"),
  // loadingComponent: h => h('组件加载中...'),
  errorComponent: Error, // 异步组件加载错误是怎么判定的？？？
  delay: 200,
  timeout: 1000,
  suspensible: true,
})
</script>

<style lang="scss" scoped>
</style>