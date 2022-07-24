<!--
 * @Author: dongjia
 * @Date: 2022-06-30 22:17:12
 * @LastEditTime: 2022-07-05 11:21:22
 * @LastEditors: aleaner
 * @Description: To~系列Api专项
 * @FilePath: \vue3-vite\src\modules\toApi\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div>
    <p class="item-title">To~系列Api专项练习</p>
    <div class="ref-item">
      <div class="item-content">
        <p>toRef</p>
        <div>name:{{ name1 }}</div>
        <div>age:{{ obj.age }}</div>
        <button @click="changeName">改变name</button>
      </div>
      <div class="item-content">
        <p>toRefs</p>
        <div>name:{{ name }}</div>
        <div>age:{{ age }}</div>
        <div>son.name:{{ son.name }}</div>
        name: <input v-model="name">
        age: <input v-model="age">
        son.name: <input v-model="son.name">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from "vue"

// 先定义一个响应式的对象
let obj = reactive({
  name: "liang",
  age: 18,
  son: {
    name: "liang",
    age: 2
  }
})

/**
 * 使用toRef可以提取出响应式对象的一个属性转化成ref对象,改属性的修改可以影响到原对象
 */
let name1 = toRef(obj, 'name')

/**
 * 使用toRefs可以将对象的所有属性转化成ref对象
 */
let { name, age, son } = toRefs(obj)

/**
 * 使用toRaw可以copy响应式对象成为非响应式对象,原响应式对象更改非响应式对象也会更新
 */
let objRaw = toRaw(obj)
function changeName() {
  name1.value = "zhang" // 如果原对象不是一个reactive响应式对象，这个name不会触发视图的更新（为什么？）
  objRaw.age++ // 为什么第一次触发时可以视图会更新？
  console.log(obj, name1, objRaw)
}

</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
  font-size: 20px;
  color: #727272;
  font-weight: bold;
}

.ref-item {
  display: flex;
  margin-top: 20px;

  .item-content+.item-content {
    margin-left: 20px;
  }

  .item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: bold;
    }
  }

}
</style>