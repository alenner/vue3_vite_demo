<!--
 * @Author: dongjia
 * @Date: 2022-06-30 23:47:55
 * @LastEditTime: 2022-07-05 11:27:28
 * @LastEditors: aleaner
 * @Description: Watch监听专项
 * @FilePath: \vue3-vite\src\modules\watch\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">Watch专项练习</p>
    <div class="handle-view">
      <div class="left">
        <div>text:<input v-model="text"></div>
        <div>refObjName:<input v-model="refObj.name"></div>
        <div>refObjAge:<input v-model="refObj.age"></div>
        <button @click="changeRefObj">changeRefObj</button>
        <div>reactiveObjName:<input v-model="reactiveObj.name"></div>
        <div>reactiveObjAge:<input v-model="reactiveObj.age"></div>
        <button @click="changeObj">changeObj</button>
        <button @click="stopWatching">stopWatching</button>
      </div>
      <div class="right">watchLog:{{ watchLog }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue"

let watchLog = ref("")
let timer: any = null
// 定义一个简单数据类型的ref对象
let text = ref("Hello world!")
// 定义一个引用数据类型ref对象
let refObj = ref({
  name: "liang",
  age: 18
})

let reactiveObj = reactive({
  name: "zhang",
  age: 20
})

// 对text进行监听
watch(text, (newVal, oldVal) => {
  console.log(oldVal, newVal)
  watchLogChange(newVal)
})

/**
 * 对refObj进行监听
 * 想要监听对象中某个属性，可以在watch的第一个参数传一个函数返回该对象的某个属性的值，比如：() => refObj.value.name
 */
watch(refObj, (newVal, oldVal) => {
  console.log(oldVal, newVal)
  watchLogChange(newVal)
}, {
  deep: true // 对于ref对象，设deep:true的时候，input修改的值会触发watch监听
})

/**
 * 对reactiveObj进行监听
 * 想要监听对象中某个属性，可以在watch的第一个参数传一个函数返回该对象的某个属性的值，比如：() => reactiveObj.age
 */
watch(() => reactiveObj.age, (newVal, oldVal) => {
  console.log(oldVal, newVal)
  watchLogChange(newVal)
}) // 对于reactive对象，不用设置deep:true，input修改属性值就可以触发watch监听

// 定义一个普通对象
let obj = {
  name: "liu",
  age: 13
}
/**
 * 使用watchEffect监听
 * onivalidate是一个回调函数，主要是在数据变化之前触发
 * watchEffect函数会返回一个停止监听事件,我这里用stopWatching表示
 */
const stopWatching = watchEffect((onivalidate) => {
  // 将定义过的对象放进来就会对这些对象进行监听
  // 好像只有简单数据类型，或者是obj对象的属性值还能触发？？？
  // console.log('text', text.value)
  // console.log('obj', obj)
  console.log('refObj', refObj.value.name, refObj.value.age)
  // console.log('reactiveObj', reactiveObj.name, reactiveObj.age)
  onivalidate(() => {
    console.log('before')
  })
}, {
  // 副作用刷新时机配置"pre":组件更新前触发 "sync":强制效果始终同步触发 "post":组件更新后触发（比较常用）
  flush: "post"
})

function changeRefObj() {
  refObj.value = {
    name: "zhang",
    age: 20
  } // 可以触发watch监听
}

// 修改普通对象的值
function changeObj() {
  obj.name = "li"
  obj.age = 10
  console.log(obj)
}

function watchLogChange(newVal: any) {
  watchLog.value = newVal
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(() => {
    watchLog.value = ""
    clearTimeout(timer)
    timer = null
  }, 3000)
}

</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
  font-size: 20px;
  color: #727272;
  font-weight: bold;
}

.handle-view {
  display: flex;

  div {
    flex: 1;
  }

  .right {
    margin-left: 20px;
  }
}
</style>