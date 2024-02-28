"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import HeaderNavigation from "./HeaderNavigation";
import styles from "@/styles/scss/Header.module.scss";
import SearchIcon from "../icons/SearchIcon";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <p className={styles.logo}>ROXIE DEV.</p>
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
