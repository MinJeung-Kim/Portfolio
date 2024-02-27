"use client";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Header from "./Header";
import { NextFont } from "next/dist/compiled/@next/font";
import styles from "@/styles/scss/Main.module.scss";

type Props = { children: React.ReactNode; font: NextFont };

export default function Main({ children, font }: Props) {
  return (
    <DarkModeProvider>
      <body className={font.className}>
        <Header />
        <main>{children}</main>
      </body>
    </DarkModeProvider>
  );
}
