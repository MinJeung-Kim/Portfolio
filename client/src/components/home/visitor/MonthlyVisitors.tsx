import ArrowCircle from "@/components/ui/icons/ArrowCircle";
import styles from "./Visitor.module.scss";

export default function MonthlyVisitors() {
  return (
    <div className={styles.monthly_visitor}>
      <h2>Number of Monthly Visitors</h2>
      <div className={styles.wrap}>
        <div className={styles.currnt_month}>
          <h1>1.32</h1>
          <div className={styles.today}>
            <p>230</p>
            <ArrowCircle />
          </div>
        </div>
        <p>Current Month</p>
      </div>
    </div>
  );
}
