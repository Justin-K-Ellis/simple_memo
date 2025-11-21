import type { Metadata } from "next";
import { Noto_Sans_Mono, Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import SidebarContainer from "./components/SidebarContainer";

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
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
      <body className={`${roboto.variable} ${notoSansMono.variable}`}>
        <Navbar />
        <div className="container">
          <SidebarContainer />
          <div className="inner-container">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
