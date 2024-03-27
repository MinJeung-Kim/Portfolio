import Main from "@/components/Main";
import BlogGrid from "@/components/home/blog/BlogGrid";
import CareerGrid from "@/components/home/career/CareerGrid";
import Visitor from "@/components/home/visitor/Visitor";
import styles from "@/styles/scss/app/Home.module.scss";

export default function HomePage() {
  return (
    <section className={styles.home}>
      <Main />
      <BlogGrid />
      <CareerGrid />
      {/*   <Visitor /> */}
    </section>
  );
}
