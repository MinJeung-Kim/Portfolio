import Hero from "./Hero";
import Chat from "./home/chat/Chat";
import styles from "@/styles/scss/Main.module.scss";

export default function Main() {
  return (
    <section className={styles.main}>
      <Chat />
      <Hero />
    </section>
  );
}
