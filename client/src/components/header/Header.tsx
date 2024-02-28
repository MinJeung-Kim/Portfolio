"use client";
import Link from "next/link";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import SearchIcon from "../icons/SearchIcon";
import HeaderNavigation from "./HeaderNavigation";
import { useDarkMode } from "@/context/DarkModeContext";
import styles from "@/styles/scss/Header.module.scss";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        ROXIE DEV.
      </Link>
      <HeaderNavigation />
      <button onClick={toggleDarkMode}>
        {!darkMode ? <MoonIcon /> : <SunIcon />}
      </button>
      <div className={styles.search}>
        <SearchIcon />
      </div>
    </header>
  );
}
