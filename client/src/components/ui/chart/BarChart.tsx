"use client";
import * as d3 from "d3";
import { useState } from "react";
import { Bars } from "./Bars";
import Tooltip from "./Tooltip";
import AxisBottom from "./AxisBottom";
import { DataItem, TooltipProps } from "@/model/chart";
import styles from "./BarChart.module.scss";
import { AxisLeft } from "./AxisLeft";

interface Props {
  data: DataItem[];
}

// 막대 차트 컴포넌트 정의
export default function BarChart({ data }: Props) {
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const width = 650; // 너비
  const height = 200; // 높이

  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const graphWidth = width - margin.left - margin.right; // 그래프 너비
  const graphHeight = height - margin.top - margin.bottom; // 그래프 높이

  const labels = data.map(({ label }) => label);

  // X축 스케일
  const scaleX = d3
    .scaleBand()
    .domain(labels)
    .range([0, graphWidth])
    .padding(0.25);

  // Y축 스케일
  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value) ?? 0])
    .range([graphHeight, 0]);

  return (
    <>
      <svg
        width={graphWidth + margin.left + margin.right}
        height={graphHeight + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            scale={scaleX}
            // +10 : 패딩추가
            transform={`translate(0, ${graphHeight + 10})`}
          />
          {/* <AxisLeft scale={scaleY} /> */}
          <Bars
            data={data}
            height={graphHeight}
            scaleX={scaleX}
            scaleY={scaleY}
            setTooltip={setTooltip}
          />
        </g>
      </svg>
      {tooltip !== null ? (
        <Tooltip data={data} tooltip={tooltip} labels={labels} />
      ) : null}
    </>
  );
}
