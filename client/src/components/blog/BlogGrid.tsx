import BlogCard from "./BlogCard";
import styles from "@/styles/scss/Blog.module.scss";

const POSTS = [
  {
    id: "1",
    category: "typescript",
    description:
      "단일 연결 리스트를 사용한 stack 자료구조 : 응용편객체지향 프로그래밍으로 stack 자료구조를 구현해보자.",
    minutesAgo: "5 mins read",
    image:
      "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.845772235.1709882927&semt=ais",
  },
  {
    id: "2",
    category: "react",
    description:
      "input object 타입 동적 업데이트현업에서 사용하는 object 타입 동적 업데이트",
    minutesAgo: "5 mins read",
    image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.845772235.1709882927&semt=ais",
  },
  {
    id: "3",
    category: "docker",
    description:
      "Data Types데이터 타입에 따라 메모리에 저장되는 원리와 기본 데이터 타입에 대해 알아보자.",
    minutesAgo: "5 mins read",
    image:
      "https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?size=626&ext=jpg&ga=GA1.2.845772235.1709882927&semt=ais",
  },
  {
    id: "4",
    category: "typescript",
    description: "test",
    minutesAgo: "5 mins read",
    image:
      "https://img.freepik.com/free-photo/magical-mountains-landscape-collage_23-2150800059.jpg?size=626&ext=jpg&ga=GA1.2.845772235.1709882927&semt=ais",
  },
];

export default function BlogGrid() {
  return (
    <article className={styles.blog}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.post_list}>
        {POSTS.map((post) => (
          <li key={post.id}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </article>
  );
}
