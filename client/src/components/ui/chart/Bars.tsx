import {
  AxisBottomProps,
  AxisLeftProps,
  BarChartProps,
  TooltipProps,
} from "@/model/chart";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  data: BarChartProps["data"];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
  setTooltip: Dispatch<SetStateAction<TooltipProps | null>>;
}

export function Bars({ data, height, scaleX, scaleY, setTooltip }: Props) {
  const borderRadius = 8; // 막대 둥근 모서리 반지름

  return (
    <>
      {data.map(({ value, label }, i) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="#EDEFEF"
          rx={borderRadius}
          ry={borderRadius}
          onMouseEnter={(e) => {
            setTooltip({
              x: e.clientX,
              y: e.clientY,
              index: i,
            });
          }}
          onMouseLeave={() => setTooltip(null)}
        />
      ))}
    </>
  );
}
