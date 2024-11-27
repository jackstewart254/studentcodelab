"use client";
import { useEffect } from "react";
import { useGlobal } from "../context/global";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { global, setGlobal } = useGlobal();
  const { render } = global;
  const route = useRouter();

  const changeRender = (newRender: string) => {
    setGlobal({ render: newRender });
    if (newRender === "aim") {
      route.push("/aim");
    }
    if (newRender === "landing") {
      route.push("./");
    }
    if (newRender === "case") {
      route.push("/case");
    }
    if (newRender === "contact") {
      route.push("/contact");
    }
  };

  return (
    <div className="flex flex-row h-[60px] border-b border-[#2E2E2E] px-[40px] items-center justify-between w-screen">
      <div className="flex flex-row h-full items-center">
        <button
          className="mr-5"
          onClick={() => {
            changeRender("landing");
          }}
        >
          <h1 className="text-white text-[20px] font-[600]">
            Student Code Lab
          </h1>
        </button>
        <button
          className="items-center flex mr-5"
          onClick={() => {
            changeRender("case");
          }}
        >
          <motion.div
            style={{
              backgroundColor: render === "case" ? "white" : "#171717",
              width: render === "case" ? 4 : 0,
            }}
            className="h-[4px] bg-white rounded-xl"
            initial={{ marginRight: 0 }}
            animate={{ marginRight: render === "case" ? 10 : 0 }}
          />
          <p className="text-white text-[14px] font-[400] h-[20px]">
            Case Studies
          </p>
        </button>
        <button
          className="items-center flex mr-5"
          onClick={() => {
            changeRender("contact");
          }}
        >
          <motion.div
            style={{
              backgroundColor: render === "contact" ? "white" : "#171717",
              width: render === "contact" ? 4 : 0,
            }}
            className="h-[4px] bg-white rounded-xl"
            initial={{ marginRight: 0 }}
            animate={{ marginRight: render === "contact" ? 10 : 0 }}
          />
          <p className="text-white text-[14px] font-[400] h-[20px]">Contact</p>
        </button>
        <button
          className="items-center flex"
          onClick={() => {
            changeRender("aim");
          }}
        >
          <motion.div
            style={{
              backgroundColor: render === "aim" ? "white" : "#171717",
              width: render === "aim" ? 4 : 0,
            }}
            className="h-[4px] bg-white rounded-xl"
            initial={{ marginRight: 0 }}
            animate={{ marginRight: render === "aim" ? 10 : 0 }}
          />
          <p className="text-white text-[14px] font-[400] h-[20px]">Our Aim</p>
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button>
          <p className="text-white text-[14px]">Log in</p>
        </button>
        <button className="h-[40px] px-5 bg-[#0795FF] rounded-[4px] items-center justify-center ml-5">
          <p className="text-white font-[600] text-[14px]">
            Student? <span className="font-[400]">- Sign up</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
