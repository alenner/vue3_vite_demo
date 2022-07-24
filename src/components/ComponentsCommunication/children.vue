<!--
 * @Author: dongjia
 * @Date: 2022-07-01 11:57:36
 * @LastEditTime: 2022-07-01 12:59:31
 * @LastEditors: aleaner
 * @Description: 父子组件通信专项(子组件)
 * @FilePath: \vue3-vite\src\components\ComponentsCommunication\children.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div class="child-component">
    <p class="title">这是子组件</p>
    <div style="color: #FFF;">子组件的一些数据：</div>
    <div class="data-form">简介：{{ desc }}</div>
    <div class="data-form">数组：{{ arr }}</div>
    <div class="data-form">对象：{{ obj }}</div>
    <div style="color: #FFF;margin-top: 20px;">父组件传过来的一些数据：</div>
    <div class="data-form">简介：{{ p_desc }}</div>
    <div class="data-form">数组：{{ p_arr }}</div>
    <div class="data-form">对象：{{ p_obj }}</div>
    <button @click="changeParentDesc">修改父组件的简介</button>
    <button @click="emitEventToParent">向父组件传递事件并接收子组件的数组</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

// 定义父组件的数据
let desc = ref("这是子组件的简介。")
let arr = reactive<number[]>([1, 2, 3, 4, 5])
let obj = reactive({
  name: "zhang",
  age: 20,
  son: {
    name: "zhang",
    age: 1
  }
})

type Props = {
  p_desc: string;
  p_arr: string[];
  p_obj: object | null;
}

//定义父组件的接收事件
const emits = defineEmits(["changeDesc", "fromChildrenEvent"])

// 接收父组件传值
const prop = withDefaults(defineProps<Props>(), {
  p_desc: "父组件默认简介",
  p_arr: () => ["li", "lin", "chen"],
  p_obj: () => null
})

// 向父组件暴露子组件的数据或事件，这样父组件可以修改子组件的数据
defineExpose({
  desc, arr, obj
})

// 打印父组件的值
// prop.p_desc = "改值" // 无法直接修改父组件的值，因为这些值只是只读属性的
console.log(prop.p_desc) // 这是父组件的简介。

// 修改父组件的简介事件
function changeParentDesc() {
  emits('changeDesc')
}

// 向父组件传递事件
function emitEventToParent() {
  emits('fromChildrenEvent', arr)
}
</script>

<style lang="scss" scoped>
.child-component {
  margin-top: 20px;
  background-color: red;
  padding: 20px;

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