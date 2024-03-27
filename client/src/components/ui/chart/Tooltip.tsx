import { DataItem, TooltipProps } from "@/model/chart";
import styles from "./Tooltip.module.scss";

type Props = { data: DataItem[]; tooltip: TooltipProps; labels: string[] };

export default function Tooltip({ data, tooltip, labels }: Props) {
  return (
    <div className={styles.tooltip} style={{ top: tooltip.y, left: tooltip.x }}>
      <span className={styles.tooltip__title}>{labels[tooltip.index]}</span>
      <h1>total number of visitors</h1>
      <p>{data[tooltip.index].value}</p>
    </div>
  );
}
