"use client";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { Dimensions } from "./types/Dimensions";
import Landing from "./pages/landing/page";

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#171717] fixed">
      <Header />
      <Landing dims={dimensions} />
    </div>
  );
}
