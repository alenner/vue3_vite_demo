<!--
 * @Author: dongjia
 * @Date: 2022-06-30 09:23:40
 * @LastEditTime: 2022-07-06 16:36:43
 * @LastEditors: aleaner
 * @Description: ref专项练习
 * @FilePath: \vue3-vite\src\modules\ref\views\index.vue
 * 怎么可能会有bug！！！
-->
<template>
  <p class="item-title">ref专项练习</p>
  <div class="ref-item">
    <div class="item-content">
      <p>ref</p>
      <div>text:{{ text }}</div>
      <button @click="changeText">changeText</button>
    </div>
    <div class="item-content">
      <p>shallowRef & triggerRef</p>
      <div>obj:{{ obj }}</div>
      <button @click="changeObj">changeObj</button>
    </div>
    <div class="item-content">
      <p>customRef</p>
      <div>customObj:{{ customObj }}</div>
      <button @click="changeCustomObj">changeCustomObj</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// ref全家桶(一般用于简单数据类型的数据响应式操作)
import { ref, Ref, triggerRef, shallowRef, customRef } from "vue"
// 数据响应式ref的基本使用
let text = ref("Hello world!")
const changeText = () => {
  text.value = "Hi world!"
}


/**
 * shallowRef 和 triggerRef的应用
*/
type Son = {
  name: string;
  age: number;
}

type People = {
  name: string;
  age: number;
  role: string;
  son: Son;
}

// shallowRef的基本应用
let obj: Ref<People> = shallowRef({
  name: "liang",
  age: 18,
  role: "engineer",
  son: {
    name: "liang",
    age: 2
  }
})

const changeObj = () => {
  /**
   *  视图触发更新了，也就是说shallowRef是一个浅层的响应式,它只对value对象有响应式
  */
  // obj.value = {
  //   name: "zhang",
  //   age: 18,
  //   role: "engineer",
  //   son: {
  //     name: "zhang",
  //     age: 2
  //   }
  // }

  obj.value.name = "zhang"
  obj.value.son.name = "zhang" // 这样子视图是不会更新的，但是可以配合triggerRef使用
  triggerRef(obj) // 上面的改动可以更新到视图层上了！！！
}


/**
 * customRef的应用
*/
// 先定义一个类ref响应式对象
const myRef = <T>(value: T) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        console.log('set')
        value = newVal
        trigger()
      }
    }
  })
}

// 定义一个需要响应的变量
type Person = {
  name: string;
  age: number;
}

let customObj = myRef<Person>({
  name: "liang",
  age: 25
})

const changeCustomObj = () => {
  /**
   * 效果其实跟shallowRef差不多
  */
  // customObj.value = {
  //   name: "zhang",
  //   age: 18
  // }
  customObj.value.name = "zhang"
  triggerRef(customObj)
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