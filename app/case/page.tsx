"use client";

import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";

const Case = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div
      className="items-center justify-center"
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <h1>Case Studies page</h1>
    </div>
  );
};

export default Case;
