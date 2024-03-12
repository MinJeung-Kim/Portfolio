import Main from "@/components/Main";
import BlogGrid from "@/components/blog/BlogGrid";
import CareerGrid from "@/components/career/CareerGrid";
import styles from "@/styles/scss/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <Main />
      <BlogGrid />
      <CareerGrid />
    </section>
  );
}
