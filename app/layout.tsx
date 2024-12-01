import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { GlobalProvider } from "../app/context/global";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sidebar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Student Code Lab",
//   description: "The future of Tech",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] fixed w-screen h-screen grid grid-rows-[auto,auto]`}
        >
          <Header />
          <div className="grid grid-cols-[auto,auto] relative">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </GlobalProvider>
  );
}
