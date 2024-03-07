import Content from "./Content";
import Header from "./Header";
import styles from "@/styles/scss/Chat.module.scss";

export default function Chat() {
  return (
    <div className={styles.chat}>
      <Header />
      <Content />
    </div>
  );
}