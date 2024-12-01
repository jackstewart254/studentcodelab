import localFont from "next/font/local";
import "../globals.css";
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

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="custom-layout">
      <main>{children}</main>
    </div>
  );
}
