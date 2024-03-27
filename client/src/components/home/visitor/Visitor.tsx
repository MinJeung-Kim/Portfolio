import BarChart from "../../ui/chart/BarChart";
import MonthlyVisitors from "./MonthlyVisitors";
import styles from "./Visitor.module.scss";

const data = [
  { label: "JAN", value: 30 },
  { label: "FEB", value: 80 },
  { label: "MAR", value: 45 },
  { label: "APR", value: 60 },
  { label: "MAY", value: 30 },
  { label: "JUN", value: 80 },
  { label: "JUL", value: 45 },
  { label: "AUG", value: 60 },
  { label: "SEP", value: 30 },
  { label: "OCT", value: 80 },
  { label: "NOV", value: 45 },
  { label: "DEC", value: 60 },
];

export default function Visitor() {
  return (
    <div className={styles.visitor}>
      <MonthlyVisitors />
      <BarChart data={data} />
    </div>
  );
}
