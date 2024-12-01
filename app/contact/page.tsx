"use client";

import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { motion } from "motion/react";

const Contact = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const [person, setPerson] = useState(false);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight - 60,
    });
  }, []);

  return (
    <div className="items-center justify-center w-screen h-[calc(100vh-60px)] flex p-5 flex-col">
      <div className="grid grid-rows-3 gap-5 w-[280px] bg-white p-5 rounded-md sm:w-[360px]">
        <div className="w-full bg-white h-9 rounded-md relative overflow-clip items-center flex border">
          <button
            className="w-1/2 h-full flex items-center justify-center z-10"
            onClick={() => {
              setPerson(false);
            }}
          >
            <p
              style={{ color: person === true ? "#171717" : "white" }}
              className="text-[#171717] text-sm font-[400]"
            >
              Individual
            </p>
          </button>
          <button
            className="w-1/2 h-full flex items-center justify-center z-10"
            onClick={() => {
              setPerson(true);
            }}
          >
            <p
              style={{ color: person === true ? "white" : "#171717" }}
              className="text-sm font-[400]"
            >
              Business
            </p>
          </button>
          <motion.div
            className="bg-[#0795FF] h-9 w-1/2 absolute"
            animate={{ left: person === true ? "50%" : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <input
          className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          placeholder={
            person === false
              ? "example@gmail.com"
              : "example@business-email.com"
          }
        />
        <input
          className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          placeholder="John Smith"
        />
        <textarea
          className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[36px] max-h-[300px]"
          placeholder="Purpose* (Software need?)"
        />
        <button className="w-full h-9 bg-[#0795FF] rounded-md flex items-center justify-center">
          <p className="text-white text-sm">Contact</p>
        </button>
      </div>
      <p className="text-white mt-[10px] text-sm font-[300]">
        Powered by{" "}
        <span className="text-[#07BC86] font-[500]">McleanStewart</span>
      </p>
    </div>
  );
};

export default Contact;
