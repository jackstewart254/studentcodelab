"use client";
import { useGlobal } from "../context/global";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Popup = () => {
  const { global, setGlobal } = useGlobal();
  const { showPopup, popupContent } = global;
  const router = useRouter();

  const closePopup = () => {
    setGlobal({ ...global, showPopup: false });
  };

  const takeToMissionStatement = () => {
    router.push("./missionStatement");
    setGlobal({ ...global, showPopup: false });
  };

  const fieldEmptyPopup = () => (
    <div className="w-[240px] bg-white border border-[#d9d9d9] p-[10px] rounded-md sm:w-[320px] absolute z-20 flex flex-col gap-[10px]">
      <p className="text-sm font-[400]">All fields must be filled</p>
      <button
        className="w-full py-1 bg-red-600 rounded-md"
        onClick={closePopup}
      >
        <p className="text-sm font-[400] text-white">Close</p>
      </button>
    </div>
  );

  const successfulWaitlist = () => (
    <div className="w-[240px] bg-white border border-[#d9d9d9] p-[10px] rounded-md sm:w-[320px] absolute z-20 flex flex-col gap-[10px]">
      <p className="text-sm font-[500]">
        <span className="font-[600] text-base">AWESOME!</span> Welcome aboard
        this journey
      </p>
      <button
        className="w-full py-1 bg-[#0795FF] rounded-md"
        onClick={takeToMissionStatement}
      >
        <p className="text-sm font-[400] text-white">View mission statement</p>
      </button>
    </div>
  );

  const alreadyPresent = () => (
    <div className="w-[240px] bg-white border border-[#d9d9d9] p-[10px] rounded-md sm:w-[320px] absolute z-20 flex flex-col gap-[10px]">
      <p className="text-sm font-[500]">
        You've already joined the Early Birds
      </p>
      <button
        className="w-full py-1 bg-red-600 rounded-md"
        onClick={closePopup}
      >
        <p className="text-sm font-[400] text-white">Close</p>
      </button>
    </div>
  );

  return (
    <motion.div
      className="w-full h-full absolute flex items-center justify-center z-10"
      initial={{ zIndex: -100, opacity: 0 }}
      animate={{
        opacity: showPopup === true ? 1 : 0,
        zIndex: showPopup === true ? 10 : -100,
      }}
    >
      <div className="w-full h-full bg-black opacity-30" />
      {popupContent === 0
        ? fieldEmptyPopup()
        : popupContent === 1
        ? alreadyPresent()
        : successfulWaitlist()}
    </motion.div>
  );
};

export default Popup;