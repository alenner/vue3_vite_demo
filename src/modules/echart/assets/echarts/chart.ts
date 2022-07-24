/*
 * @Author: dongjia
 * @Date: 2022-07-10 14:01:25
 * @LastEditTime: 2022-07-10 18:04:21
 * @LastEditors: aleaner
 * @Description: 图表基类
 * @FilePath: \vue3-vite\src\modules\echart\assets\echarts\chart.ts
 * 怎么可能会有bug！！！
 */
import { colors } from "./theme"
import debounce from "lodash/debounce"
import { addListener, removeListener } from "resize-detector"
import * as echarts from "echarts/core" // 用于注册图表的组件和方法的

// 子类实例的必须属性
interface childChartClass {
  container: HTMLElement;
  $myChart: echarts.ECharts;
  resize: boolean;
}

interface baseChart {
  color: string[];
  addResize(): void;
  onResize(): void;
  removeResize(): void;
  dispose(): void;
}

export default class Chart implements baseChart {
  color = colors

  constructor() {
    // 给onResize事件添加防抖动
    this.onResize = debounce(this.onResize.bind(this as unknown as childChartClass & baseChart), 300)
  }

  // 添加resize监听事件
  addResize(this: childChartClass & baseChart) {
    addListener(this.container, this.onResize)
  }

  // resize事件，可实现图表的自适应布局
  onResize(this: childChartClass & baseChart) {
    this.$myChart.resize()
  }

  // 移除resize监听事件
  removeResize(this: childChartClass & baseChart) {
    removeListener(this.container, this.onResize)
  }

  // 图表实例销毁事件
  dispose(this: childChartClass & baseChart) {
    this.$myChart.dispose()
    if (this.resize) this.removeResize()
  }
}