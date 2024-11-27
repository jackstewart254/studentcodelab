"use client";
import { Dimensions } from "@/app/types/Dimensions";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { arrow, org, user } from "../components/svg/svg";

const Landing = ({ dims }: { dims: Dimensions }) => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [render, setRender] = useState<number>(0);
  const [textAnim, setTextAnim] = useState<number>(0);

  useEffect(() => {
    if (refresh === true) {
      const timer1 = setTimeout(() => setRender(1), 500);
      const timer2 = setTimeout(() => {
        setRender(2);
      }, 2500);
      const timer3 = setTimeout(() => setRender(3), 3500);
      const timer4 = setTimeout(() => {
        setRender(4);
      }, 5500);
      const timer5 = setTimeout(() => setRender(5), 6500);
      const timer6 = setTimeout(() => {
        setRender(6);
      }, 7500);
      const timer7 = setTimeout(() => {
        setRender(7);
        setRefresh(false);
      }, 8500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
      };
    } else {
      setRefresh(true);
    }
  }, [refresh]);

  useEffect(() => {
    if (render === 1) {
      const timer1 = setTimeout(() => {
        setTextAnim(1);
      }, 500);
      const timer2 = setTimeout(() => {
        setTextAnim(2);
      }, 1000);
      const timer3 = setTimeout(() => {
        setTextAnim(3);
      }, 1500);
      const timer4 = setTimeout(() => {
        setTextAnim(0);
      }, 2000);
    }
    if (render === 3) {
      const timer1 = setTimeout(() => {
        setTextAnim(1);
      }, 500);
      const timer2 = setTimeout(() => {
        setTextAnim(2);
      }, 1000);
      const timer3 = setTimeout(() => {
        setTextAnim(3);
      }, 1500);
      const timer4 = setTimeout(() => {
        setTextAnim(0);
      }, 2000);
    }
    if (render === 5) {
      const timer1 = setTimeout(() => {
        setTextAnim(1);
      }, 500);
      const timer2 = setTimeout(() => {
        setTextAnim(0);
      }, 1000);
      // const timer2 = setTimeout(() => {
      //   setTextAnim(2);
      // }, 1000);
      // const timer3 = setTimeout(() => {
      //   setTextAnim(3);
      // }, 1500);
    }
  }, [render]);

  useEffect(() => {
    console.log(textAnim);
  }, [textAnim]);

  const renderMoving = () => (
    <div className="flex flex-row items-center mt-[40px]">
      <div className="h-[110px] w-[100px] border border-[#818181] rounded-[10px] flex items-center justify-center">
        {org()}
      </div>
      <motion.div className="w-[51px] relative mx-[40px] justify-center flex h-[15px]">
        <p className="absolute top-[-28px] text-white">
          {render >= 0 && render < 4
            ? "Task"
            : render === 4
            ? "Software"
            : render > 4 && render <= 7
            ? "Payment"
            : ""}
        </p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: render >= 0 && render < 4 ? 0 : render === 4 ? 180 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="h-[15px]"
        >
          {arrow()}
        </motion.div>
      </motion.div>
      <div className="flex flex-col relative items-center">
        <p className="text-white font-[600] text-[24px]">Student Code Lab</p>
        <div className="absolute bottom-[-56px] flex flex-col w-[140px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: textAnim >= 1 ? 1 : 0 }}
            className="text-white"
          >
            {render < 3
              ? "- Break down task"
              : render < 5
              ? "- Test software"
              : "- Take commission"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: textAnim >= 2 ? 1 : 0 }}
            className="text-white"
          >
            {render < 3 ? "- Add suggestions" : "- Check security"}
          </motion.p>
        </div>
      </div>
      <motion.div className="h-[15px] relative mx-[40px] items-center w-[51px] flex flex-col">
        <p className="absolute top-[-28px] text-white">
          {render < 2
            ? ""
            : render === 2
            ? "Task"
            : render >= 3 && render <= 5
            ? "Software"
            : "Payment"}
        </p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: render <= 2 ? 0 : render >= 3 && render <= 5 ? 180 : 0,
          }}
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
