import Hero from "@/components/Hero";
import Chat from "@/components/chat/Chat";
import styles from "@/styles/scss/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <Chat />
      <Hero />
    </section>
  );
}
