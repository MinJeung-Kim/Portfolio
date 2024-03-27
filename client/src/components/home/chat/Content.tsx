import Input from "./Input";
import Identity from "../../Identity";
import { dateFormat } from "@/util/dateFormat";
import styles from "./Chat.module.scss";

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.speechBubble}>
        <Identity size={30} />
        <div>
          <p className={styles.text}>
            {`Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,`}
          </p>
          <p className={styles.time}>{dateFormat(new Date())}</p>
        </div>
      </div>
      <Input />
    </div>
  );
}
