import { useEffect, useRef } from "react";
import { axisBottom, select } from "d3";
import { AxisBottomProps } from "@/model/chart";

export default function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current)
        .call(axisBottom(scale).tickSize(0))
        .select(".domain")
        .remove();
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}
