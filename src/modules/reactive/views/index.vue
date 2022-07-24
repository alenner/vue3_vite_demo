<!--
 * @Author: dongjia
 * @Date: 2022-06-30 11:28:48
 * @LastEditTime: 2022-07-05 11:11:14
 * @LastEditors: aleaner
 * @Description: reactive全家桶专项
 * @FilePath: \vue3-vite\src\modules\reactive\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <p class="item-title">reactive专项练习</p>
  <div class="reactive-item">
    <div class="item-content">
      <p>reactive</p>
      <div>name:{{ obj.name }}</div>
      <div>age:{{ obj.age }}</div>
      <div>son.name:{{ obj.son.name }}</div>
      <div>son.age:{{ obj.son.age }}</div>
      <!-- 不需要像ref响应式那样.value去修改值 -->
      <span>name:<input v-model="obj.name" /></span>
      <span>age:<input v-model="obj.age" /></span>
      <span>son.age:<input v-model="obj.son.age" /></span>
      <div>array: {{ arr }}</div>
      <button @click="arr.push('liang')">添加"liang"</button>
      <button @click="arr.pop()">删除最后一项</button>
    </div>
    <div class="item-content">
      <p>readonly</p>
      <div>name:{{ obj.name }}</div>
      <div>age:{{ obj.age }}</div>
      <button @click="copyObj">copy一份只读数据</button>
      <template v-if="showCopyObj">
        <div v-if="copy.name">copy.name:{{ copy.name }}</div>
        <div v-if="copy.age">copy.age:{{ copy.age }}</div>
        <!-- 尝试修改copy的值 -->
        <button @click="ChangeCopyName">修改copy.name</button>
      </template>
    </div>
    <div class="item-content">
      <p>shallowReactive</p>
      <div>name:{{ shallowObj.name }}</div>
      <div>age:{{ shallowObj.age }}</div>
      <div>son.name:{{ shallowObj.son.name }}</div>
      <div>son.age:{{ shallowObj.son.age }}</div>
      <!-- 不需要像ref响应式那样.value去修改值 -->
      <span>name:<input v-model="shallowObj.name" /></span>
      <span>age:<input v-model="shallowObj.age" /></span>
      <span>son.age:<input v-model="shallowObj.son.age" /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
// reactive全家桶(只能用于数组[],对象{}等复杂的引用数据类型数据响应式操作)
import { ref, reactive, readonly, shallowReactive } from "vue"
type Son = {
  name: string; age: number;
}
type Peopel = {
  name: string;
  age: number;
  son: Son;
}

/**
 * reactive的基本使用
 */
let obj = reactive<Peopel>({
  name: "liang",
  age: 25,
  son: {
    name: "liang",
    age: 2
  }
})

let arr = reactive<string[]>([
  "liang", "zhang", "liu"
])

/*
* readonly的基本使用
*/
let copy: Peopel = readonly(obj);
let showCopyObj = ref<boolean>(false)

const copyObj = () => {
  // readonly只能在setup阶段使用吗？？？
  copy = readonly(obj); // 无效的
  console.log(copy.name) // liang

  // 显示copy的对象
  showCopyObj.value = true
}

// 尝试修改copy的name的值
const ChangeCopyName = () => {
  copy.name = "zhang"
  window.alert("copy对象为只读属性，不可以被修改")
}

/**
 * shallowReactive的基本使用
 * 可以看到son的属性值没有响应式操作，这个方法是一个浅层响应式方式，只响应对象或者数组的第一层属性或者数据
 */
let shallowObj = shallowReactive<Peopel>({
  name: "zhang",
  age: 18,
  son: {
    name: "zhang",
    age: 5
  }
})

</script>

<style lang="scss" scoped>
.item-title {
  text-align: center;
  font-size: 20px;
  color: #727272;
  font-weight: bold;
}

.reactive-item {
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

    input {
      width: 100px;
    }
  }

}
</style>