"use client";
import Header from "./header/Header";
import TokenStorage from "@/db/token";
import HttpClient from "@/network/http";
import AuthService from "@/service/auth";
import { AuthErrorEventBus, AuthProvider } from "@/context/AuthContext";
import styles from "@/styles/scss/Main.module.scss";
import io from "socket.io-client";

type Props = { children: React.ReactNode };

const baseURL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL || "", authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);

const socketIO = io(baseURL || "");
socketIO.on("connect_error", (error) => {
  console.log("socket error", error);
});

socketIO.on("roxie", (msg) => console.log(msg));

export default function Main({ children }: Props) {
  return (
    <AuthProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
    >
      {children}
    </AuthProvider>
  );
}
