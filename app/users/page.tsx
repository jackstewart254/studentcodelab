"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";

export default function Home() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="flex flex-col w-screen bg-[#171717] fixed h-screen">
      <h1 className="text-white">HELOOO</h1>
    </div>
  );
}
