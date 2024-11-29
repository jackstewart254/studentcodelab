import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../components/header";
import { GlobalProvider } from "../context/global";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <GlobalProvider>
    <html
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] fixed`}
    >
      <div className="antialiased bg-[#171717] fixed w-screen h-screen">
        {children}
      </div>
    </html>
    // </GlobalProvider>
  );
}
