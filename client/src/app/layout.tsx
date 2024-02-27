import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/css/globals.css";
import Main from "@/components/Main";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Main font={poppins}>{children}</Main>
    </html>
  );
}
