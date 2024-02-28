import Identity from "../Identity";
import styles from "@/styles/scss/Chat.module.scss";

export default function Content() {
  return (
    <div className={styles.content}>
      <Identity size={30} />
      <p>
        {`Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,`}
      </p>
    </div>
  );
}
