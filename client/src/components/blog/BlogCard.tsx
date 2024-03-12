import { Post } from "@/model/blog";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/scss/Blog.module.scss";

type Props = { post: Post };

export default function BlogCard({
  post: { id, category, description, minutesAgo, image },
}: Props) {
  return (
    <Link href={`/blog/${id}`} className={styles.blog_card}>
      <div className={styles.card}>
        <Image
          src={image}
          alt={`blog by ${category}`}
          width={300}
          height={200}
        />
      </div>

      <div className={styles.title}>
        <h2>{category.toUpperCase()}</h2>
        <p>{minutesAgo}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}
