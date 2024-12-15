"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { useGlobal } from "../context/global";

const Aim = () => {
  const { global, setGlobal } = useGlobal();

  useEffect(() => {
    setGlobal({ ...global, render: "aim" });
  }, []);

  return (
    <div className="w-screen items-center justify-center flex p-[20px] h-[calc(100vh-60px)]">
      <div className="w-[260px] sm:w-[420px] grid grid-rows-[auto,auto,auto] gap-5 items-center justify-center">
        <p className="text-lg sm:text-2xl   text-white font-[600]">
          Student Code Lab{" "}
          <span className="text-sm sm:text-lg font-[400]">is a</span> Student
          only Technical Hub.{" "}
        </p>
        <p className="text-lg sm:text-2xl text-white font-[600]">
          <span className="text-sm sm:text-lg font-[400]">We are</span> Building{" "}
          <span className="text-sm sm:text-lg font-[400]">a</span> Generation{" "}
          <span className="text-sm sm:text-lg font-[400]">of</span> Young,
          Skilled <span className="text-sm sm:text-lg font-[400]">and </span>
          Ambitious Developers.
        </p>
        <p className="text-lg sm:text-2xl text-white font-[600]">
          Learn
          <span className="text-sm sm:text-lg font-[400]">,</span> Build
          <span className="text-sm sm:text-lg font-[400]">,</span> Compete{" "}
          <span className="text-sm sm:text-lg font-[400]">and </span> Earn.
        </p>
      </div>
    </div>
  );
};

export default Aim;
