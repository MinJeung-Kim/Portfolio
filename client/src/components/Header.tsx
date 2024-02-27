"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header>
      <button onClick={toggleDarkMode}>
        {!darkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
}
