/*
 * @Author: dongjia
 * @Date: 2022-07-10 13:59:40
 * @LastEditTime: 2022-07-10 17:39:12
 * @LastEditors: aleaner
 * @Description: 柱状图表类
 * @FilePath: \vue3-vite\src\modules\echart\assets\echarts\bar-chart.ts
 * 怎么可能会有bug！！！
 */
import Chart from './Chart'
import merge from "merge"
// 图表
import * as echarts from "echarts/core" // 用于注册图表的组件和方法的
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'; // 图表额外插件
import { BarChart } from 'echarts/charts'; // 柱状图表
import { CanvasRenderer } from 'echarts/renderers'; // 图表canvas渲染

echarts.use([GridComponent, TooltipComponent, LegendComponent, BarChart, CanvasRenderer])
// 引入实例对象的类型注解
import { ChartOptions, initOptions } from "./init-options"
import { ECBasicOption, GridOption, LegendOption, SeriesOption, TooltipOption, XAXisOption, YAXisOption } from 'echarts/types/dist/shared';

export default class myBarChart extends Chart implements ChartOptions {
  // 图表容器
  container: HTMLElement;
  // 图表实例
  $myChart: echarts.ECharts;
  // 图表数据
  data: number[] = [];
  // 是否启用自适应布局
  resize: boolean = true;

  // 是否启用tooltip提示组件
  showTooltip: boolean = true;
  // 悬浮展示配置
  tooltip: TooltipOption = {
    trigger: "item"
  }

  // 是否启用legend图例
  showLegend: boolean = true;
  // 图例配置
  legend: LegendOption = {
    right: 0,
    orient: "vertical",
    top: "center",
    icon: "circle"
  }

  // 布局配置
  grid: GridOption = {
    left: '0',
    right: '0',
    bottom: '0',
    top: "20px",
    containLabel: true
  }

  // x轴配置
  xAxis: XAXisOption & { data?: string[] } = {
    type: "category",
    data: []
  }

  // y轴配置
  yAxis: YAXisOption = {
    type: "value"
  }

  // 图形配置
  series: SeriesOption = {
    name: "",
    type: "bar",
    data: []
  }

  constructor(options: initOptions) {
    super();

    // 图表的容器container
    this.container = options.container
    // 合并options参数
    const mergedData = this.MergeOptions(options)
    const { data, xData, resize } = mergedData
    this.$myChart = echarts.init(options.container)

    // 监听容器
    if (resize) this.addResize()
    // 设置options
    this.setOptions(data, xData)
  }

  // 合并参数
  MergeOptions(options: initOptions) {
    const {
      color,
      tooltip,
      showTooltip = true,
      legend,
      showLegend = false,
      series,
      xAxis,
      yAxis,
      xData,
      data,
      grid,
      resize = true,
    } = options
    this.showTooltip = showTooltip
    this.showLegend = showLegend
    this.resize = resize

    if (color) this.color = color
    if (showTooltip && tooltip) merge.recursive(this.tooltip, tooltip)
    if (legend) merge.recursive(this.legend, legend)
    if (series) merge.recursive(this.series, series)
    if (xAxis) merge.recursive(this.xAxis, xAxis)
    if (yAxis) merge.recursive(this.yAxis, yAxis)
    if (grid) merge.recursive(this.grid, grid)

    return {
      color,
      tooltip,
      showTooltip,
      legend,
      showLegend,
      series,
      xAxis,
      yAxis,
      xData,
      data,
      grid,
      resize,
    }
  }

  // 设置图表
  setOptions(data: initOptions['data'], xData: initOptions['xData']) {
    this.xAxis.data = xData; // 挂载坐标数据
    this.data = data // 挂载，方便formatter查询

    // 配置对象
    const options: ECBasicOption = {
      color: this.color,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      grid: this.grid,
      series: [
        merge.recursive(this.series, { data })
      ],
    }

    // 使用tooltip组件
    if (this.showTooltip) options.tooltip = this.tooltip
    // 使用legend组件
    if (this.showLegend) options.legend = this.legend

    // 设置
    this.$myChart.setOption(options)
  }
}