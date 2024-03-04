"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import Header from "./header/Header";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { AuthErrorEventBus, AuthProvider } from "@/context/AuthContext";
import TokenStorage from "@/db/token";
import HttpClient from "@/network/http";
import AuthService from "@/service/auth";
import styles from "@/styles/scss/Main.module.scss";

type Props = { children: React.ReactNode; font: NextFont };

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(String(baseURL));
const authErrorEventBus = new AuthErrorEventBus();
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
