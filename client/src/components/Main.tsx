"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import Header from "./header/Header";
import TokenStorage from "@/db/token";
import HttpClient from "@/network/http";
import AuthService from "@/service/auth";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { AuthErrorEventBus, AuthProvider } from "@/context/AuthContext";
import styles from "@/styles/scss/Main.module.scss";

type Props = { children: React.ReactNode; font: NextFont };

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL || "", authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);

export default function Main({ children, font }: Props) {
  return (
    <DarkModeProvider>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <body className={font.className}>
          <Header />
          <main>{children}</main>
        </body>
      </AuthProvider>
    </DarkModeProvider>
  );
}
