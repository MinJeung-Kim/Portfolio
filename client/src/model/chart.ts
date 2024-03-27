import { ScaleBand, ScaleLinear } from "d3";

export interface DataItem {
  label: string;
  value: number;
}

export interface BarChartProps {
  data: DataItem[];
}

export interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

export interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}

export interface TooltipProps {
  x: number;
  y: number;
  index: number;
}
