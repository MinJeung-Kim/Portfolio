"use client";
import { createContext, useContext, useEffect, useState } from "react";

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<State>({} as State);

type Children = {
  children: React.ReactNode;
};

export function DarkModeProvider({ children }: Children) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("them" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
