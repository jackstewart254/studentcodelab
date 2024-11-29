"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { useGlobal } from "../context/global";

const Aim = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const { global, setGlobal } = useGlobal();

  useEffect(() => {
    setGlobal({ ...global, render: "aim" });
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div
      className="w-full items-center justify-center flex"
      style={{ height: dimensions.height - 60 }}
    >
      <div className={`h-[200px] w-[403px] flex flex-col`}>
        <p className="text-[24px] text-white font-[600] mb-[30px]">
          Student Code Lab <span className="text-[16px] font-[400]">is a</span>{" "}
          Student only Software Marketplace.{" "}
        </p>
        <p className="text-[24px] text-white font-[600] mb-[30px]">
          <span className="text-[16px] font-[400]">We are</span> Building{" "}
          <span className="text-[16px] font-[400]">a</span> Generation{" "}
          <span className="text-[16px] font-[400]">of</span> Young, Skilled{" "}
          <span className="text-[16px] font-[400]">and </span>
          Ambitious Developers.
        </p>
        <p className="text-[24px] text-white font-[600] mb-[30px]">
          Learn
          <span className="text-[16px] font-[400]">,</span> Build{" "}
          <span className="text-[16px] font-[400]">and </span> Earn.
        </p>
      </div>
    </div>
  );
};

export default Aim;
