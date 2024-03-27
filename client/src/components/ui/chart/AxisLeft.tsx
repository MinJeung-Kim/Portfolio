import { useEffect, useRef } from "react";
import { axisLeft, select } from "d3";
import { AxisLeftProps } from "@/model/chart";

export function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale).ticks(3));
    }
  }, [scale]);

  return <g ref={ref} />;
}
