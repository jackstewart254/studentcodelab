"use client";
import { useEffect } from "react";
import { useGlobal } from "../context/global";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const hideHeaderPaths = ["/users/signup", "/users/login"];
  const paths = ["/explore", "/library", "/profile", "/blog"];
  console.log(pathname);
  const { global, setGlobal } = useGlobal();
  const { render } = global;
  const route = useRouter();

  const changeRender = (newRender: string) => {
    setGlobal({ render: newRender });
    if (newRender === "missionStatement") {
      route.push("/missionStatement");
    }
    if (newRender === "landing") {
      route.push("./");
    }
    if (newRender === "case") {
      route.push("/case");
    }
    if (newRender === "contact") {
      route.push("/waitlist");
    }
    if (newRender === "signup") {
      route.push("/users/signup");
    }
    if (newRender === "login") {
      route.push("/users/login");
    }
    if (newRender === "blog") {
      route.push("/blog");
    }
  };

  // if (hideHeaderPaths.includes(pathname)) {
  //   return <div></div>;
  // } else {
  return (
    <div className="flex flex-row h-[60px] border-b border-[#2E2E2E] lg:px-[40px] md:px-[40px] sm:px-[20px] px-[10px] items-center justify-between w-screen">
      <div className="items-center grid grid-cols-[auto,auto]">
        <button
          className="mr-5"
          onClick={() => {
            changeRender("landing");
          }}
        >
          <h1 className="text-white hidden sm:flex  text-base font-[600] sm:text-lg md:text-lg lg:text-lg">
            Student Code Lab
          </h1>
          <h1 className="text-white flex sm:hidden  text-base font-[600] sm:text-lg md:text-lg lg:text-lg">
            Home
          </h1>
        </button>
        {/* {paths.includes(pathname) && (
            <button
              onClick={() => {
                changeRender("blog");
              }}
              className="items-center inline-block p-0"
            >
              <p className="text-white hover:text-[#8A8A8C] text-sm font-[400] m-0">
                Blog
              </p>
            </button>
          )} */}
        {/* {!paths.includes(pathname) && ( */}
        <div className="grid-cols-2 items-center flex gap-5 md:gap-5 lg:gap-5">
          {/* <button
                className="hidden sm:hidden md:flex lg:flex"
                onClick={() => {
                  changeRender("case");
                }}
              >
                <p className="text-white hover:text-[#8A8A8C] md:text-md font-[500]">
                  Case Studies
                </p>
              </button> */}
          <button
            onClick={() => {
              changeRender("contact");
            }}
          >
            <motion.p
              className="text-white hover:text-[#8A8A8C] text-[14px] font-[400]"
              animate={{
                color: render === "contact" ? "#8A8A8C" : "white",
              }}
            >
              Join Waitlist
            </motion.p>
          </button>
          <button
            onClick={() => {
              changeRender("missionStatement");
            }}
          >
            <motion.p
              className="text-white hover:text-[#8A8A8C] text-[14px] font-[400]"
              animate={{ color: render === "aim" ? "#8A8A8C" : "white" }}
            >
              Mission Statement
            </motion.p>
          </button>
        </div>
        {/* )} */}
      </div>
      {/* {!paths.includes(pathname) && (
          <div className="flex-row items-center hidden sm:hidden md:flex lg:flex">
            <button
              onClick={() => {
                changeRender("login");
              }}
            >
              <p className="text-white text-[14px]">Log in</p>
            </button>
            <button
              className="h-[40px] px-5 bg-[#0795FF] rounded-[4px] items-center justify-center ml-5"
              onClick={() => {
                changeRender("signup");
              }}
            >
              <p className="text-white font-[600] text-[14px]">
                Student? <span className="font-[400]">- Sign up</span>
              </p>
            </button>
          </div>
        )} */}
    </div>
  );
  // }
};

export default Header;
