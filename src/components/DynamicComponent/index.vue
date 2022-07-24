<!--
 * @Author: dongjia
 * @Date: 2022-07-01 22:07:40
 * @LastEditTime: 2022-07-01 22:47:05
 * @LastEditors: aleaner
 * @Description: 动态组件专项（主组件）
 * @FilePath: \vue3-vite\src\components\DynamicComponent\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">动态组件专项(选项卡组件)</p>
    <!-- tab栏模块 -->
    <div class="tab-list">
      <button v-for="item in Tabs" :key="item.name" @click="changeTab(item)">组件{{ item.name }}</button>
    </div>
    <!-- 动态子组件模块 -->
    <component :is="currentTab.nameCom"></component>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from "vue"
import ChildA from "./ChildA.vue"
import ChildB from "./ChildB.vue"
import ChildC from "./ChildC.vue"

/**
 * 实现一个选项卡组件，点击tab栏实现组件的动态切换
 */

// 定义tab栏的数据
type TabItem = {
  name: string;
  nameCom: any; // 子组件实例
}

let Tabs = reactive<TabItem[]>([
  {
    name: "A",
    nameCom: markRaw(ChildA)
  },
  {
    name: "B",
    nameCom: markRaw(ChildB)
  },
  {
    name: "C",
    nameCom: markRaw(ChildC)
  },
])

// 定义当前选中的tab数据
let currentTab = ref<TabItem>({
  name: Tabs[0].name,
  nameCom: Tabs[0].nameCom
})

// 点击Tab栏事件
const changeTab = (tabItem: TabItem) => {
  /**
   * 当需要对整个对象进行赋值修改时，最好是用ref去创建一个响应式的对象
   * 使用reactive对整个对象进行赋值会改变原本的proxy代理对象，这样会丢失响应式
   */
  currentTab.value = tabItem
}
</script>

<style lang="scss" scoped>
.tab-list {
  width: fit-content;
  margin: 20px auto;
}
</style>