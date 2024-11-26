"use client";
import { Dimensions } from "@/app/types/Dimensions";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { arrow, org, user } from "../../components/svg/svg";

const Landing = ({ dims }: { dims: Dimensions }) => {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(!render);
    }, 3000);

    return () => clearTimeout(timer);
  }, [render]);

  const renderMoving = () => (
    <div className="flex flex-row items-center mt-[40px]">
      <div className="h-[110px] w-[100px] border border-[#818181] rounded-[10px] flex items-center justify-center">
        {org()}
      </div>
      <motion.div
        initial={{ height: 15 }}
        animate={{ height: render === false ? 15 : 55 }}
        className="w-[51px] relative mx-[40px] justify-center flex"
      >
        <p className="absolute top-[-28px] text-white">
          {render === true ? "Payment" : "Task"}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: render === true ? 1 : 0 }}
          className="absolute bottom-[-28px] text-white"
        >
          Software
        </motion.p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: render === false ? 0 : 0 }}
          transition={{ duration: 0.5 }}
          className="h-[15px] absolute top-0"
        >
          {arrow()}
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: render === false ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          className="h-[15px] absolute bottom-0"
        >
          {arrow()}
        </motion.div>
      </motion.div>
      <div className="flex flex-col relative items-center">
        <p className="absolute top-[-24px] text-white font-[400]">
          {render === true ? "Test software" : "Process task"}
        </p>
        <p className="text-white font-[600] text-[24px]">Student Code Lab</p>
      </div>
      <motion.div
        className="h-[15px] relative mx-[40px] items-center w-[51px] flex flex-col"
        initial={{ height: 15 }}
        animate={{ height: render === false ? 15 : 55 }}
      >
        <p className="absolute top-[-28px] text-white">
          {render === true ? "Payment" : "Task"}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: render === true ? 1 : 0 }}
          className="absolute bottom-[-28px] text-white"
        >
          Software
        </motion.p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: render === false ? 0 : 0 }}
          transition={{ duration: 0.5 }}
          className="h-[15px] absolute top-0"
        >
          {arrow()}
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: render === false ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          className="h-[15px] absolute bottom-0"
        >
          {arrow()}
        </motion.div>
      </motion.div>
      <div className="h-[110px] w-[100px] border border-[#818181] rounded-[10px] flex items-center justify-center">
        {user()}
      </div>
    </div>
  );

  return (
    <div
      style={{ height: `${dims.height - 60}px` }}
      className="w-screen items-center justify-center flex flex-col"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-white text-[32px] font-[600] mb-5">
          Software Marketplace for Students
        </h1>
        <p className="text-white text-[20px] font-[600]">
          Find, Solve <span className="font-[300]">and</span> Earn
        </p>
      </div>
      {renderMoving()}
    </div>
  );
};

export default Landing;
