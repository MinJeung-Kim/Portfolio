import Link from "next/link";
import styles from "./Header.module.scss";

export default function HeaderNavigation() {
  const MENUS = [
    { href: "/about", title: "about" },
    { href: "/blog", title: "blog" },
    { href: "/career", title: "career" },
    { href: "/community", title: "community" },
  ];

  return (
    <nav className={styles.nav}>
      {MENUS.map(({ href, title }) => (
        <Link key={title} href={href} className={styles.menu}>
          {title.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
