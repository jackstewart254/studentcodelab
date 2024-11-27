"use client";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { Dimensions } from "./types/Dimensions";
import Landing from "./landing/page";

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div
      className="flex flex-col w-screen bg-[#171717] fixed"
      style={{ height: dimensions.height - 60 }}
    >
      <Landing dims={dimensions} />
    </div>
  );
}
