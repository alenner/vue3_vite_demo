<!--
 * @Author: dongjia
 * @Date: 2022-07-03 09:13:05
 * @LastEditTime: 2022-07-13 09:53:50
 * @LastEditors: aleaner
 * @Description: 事件总线Bus专项（主组件）
 * @FilePath: \vue3-vite\src\components\EventBus\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">事件总线Bus专项</p>
    <div class="main-content">
      <p class="content-title">根组件(利用eventBus事件总线实现兄弟或非兄弟组件之间的通信)</p>
      <div class="child-component">
        <ChildA></ChildA>
        <ChildB></ChildB>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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

  .child-component {
    display: flex;
  }
}
</style>