<!--
 * @Author: dongjia
 * @Date: 2022-07-03 11:32:15
 * @LastEditTime: 2022-07-03 12:09:53
 * @LastEditors: aleaner
 * @Description: 组件v-model指令(子组件)
 * @FilePath: \vue3-vite\src\components\ComponentVmodel\Child.vue
 * 怎么可能会有bug！！！
-->
<template>
  <div v-if="modelValue" class="sub-content">
    <div class="content-header">
      <p class="content-title">子组件</p>
      <button @click="close">隐藏</button>
    </div>
    <div>这是父组件的简介：{{ desc }}</div>
    <div>修改父组件的简介：<input v-model="Desc"></div>
    <div>这是父组件的数据对象：{{ p_obj }}</div>
    <div>修改父组件的name属性：<input v-model="p_obj.name"></div>
    <div>修改父组件的son.name属性：<input v-model="p_obj.son.name"></div>
  </div>
</template>

<script setup lang="ts">
type Pobj = {
  name: string,
  son: {
    name: string
  }
}
/**
 * modelValue是v-model指令的默认属性
 * desc是v-model指令的自定义属性，通过父组件v-model:desc="xxx"实现
 */
type Props = {
  modelValue: boolean,
  desc: string,
  p_obj: Pobj,
}

const props = defineProps<Props>()

// 需要用到emit实现v-model的双向绑定'update:[PropsKey]'
const emits = defineEmits(['update:modelValue', 'update:desc'])

const close = () => {
  emits('update:modelValue', false)
}

// 想要修改父组件的简介内容(ref对象)，需要配合computed使用
const Desc = computed({
  get: () => {
    return props.desc
  },
  set: (val) => {
    emits('update:desc', val)
  }
})
</script>

<style lang="scss" scoped>
.sub-content {
  margin-top: 20px;
  padding: 20px;
  background-color: blue;
  color: #FFF;



  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content-title {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>