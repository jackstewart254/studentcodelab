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
    <div style={{ height: dimensions.height - 60 }} className="w-screen p-5 ">
      <h1 className="text-white"></h1>
    </div>
  );
}
