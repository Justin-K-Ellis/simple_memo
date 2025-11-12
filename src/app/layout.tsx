import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Memo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSansMono.variable}`}>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="inner-container">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
