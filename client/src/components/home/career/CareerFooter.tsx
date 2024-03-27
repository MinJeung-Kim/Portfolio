import Identity from "../../Identity";
import styles from "./Career.module.scss";

export default function CareerFooter() {
  return (
    <article className={styles.footer}>
      <div className={styles.writer}>
        <Identity size={28} />
        <p className={styles.name}>Roxie</p>
      </div>

      <p className={styles.date}>2 days ago</p>
    </article>
  );
}
