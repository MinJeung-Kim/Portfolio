import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header/Header";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "@/styles/css/globals.css";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "록시의 Portfolio",
    template: "록시의 Portfolio | %s",
  },
  description: "프론트엔드 개발자 록시의 Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <DarkModeProvider>
          <Header />
          <main>{children}</main>
        </DarkModeProvider>
        <div id="portal" />
      </body>
    </html>
  );
}
