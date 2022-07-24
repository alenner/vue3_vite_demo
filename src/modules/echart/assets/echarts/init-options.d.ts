import { TooltipComponentOption, LegendComponentOption, GridComponentOption, XAXisComponentOption, YAXisComponentOption, SeriesOption } from "echarts"
export interface initOptions {
  container: HTMLElement;
  color?: string[];
  tooltip?: TooltipComponentOption;
  showTooltip?: boolean;
  legend?: LegendComponentOption;
  showLegend?: boolean;
  series?: SeriesOption;
  xAxis?: XAXisComponentOption;
  yAxis?: YAXisComponentOption;
  xData: string[];
  data: number[];
  grid?: GridComponentOption;
  resize?: boolean;
}

export interface ChartOptions {
  tooltip?: TooltipOption;
  legend?: LegendOption;
  grid?: GridOption;
  xAxis?: XAXisOption & { data?: string[] };
  yAxis?: YAXisOption;
  serise?: SeriesOption;
}
