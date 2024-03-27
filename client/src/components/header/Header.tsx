"use client";
import Link from "next/link";
import SunIcon from "../ui/icons/SunIcon";
import MoonIcon from "../ui/icons/MoonIcon";
import MenuIcon from "../ui/icons/MenuIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import HeaderNavigation from "./HeaderNavigation";
import { useDarkMode } from "@/context/DarkModeContext";
import styles from "./Header.module.scss";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        ROXIE DEV.
      </Link>
      <div className={styles.menu_icon}>
        <MenuIcon />
      </div>

      <div className={styles.menu}>
        <HeaderNavigation />
        <button onClick={toggleDarkMode}>
          {!darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
        <div className={styles.search}>
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}
