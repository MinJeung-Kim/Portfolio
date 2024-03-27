import styles from "@/styles/scss/Scroll.module.scss";

export default function Scroll({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.scroll_wrap}>
      <div className={styles.scroll}>{children}</div>

      <div className={styles.cover_bar}></div>
    </div>
  );
}
