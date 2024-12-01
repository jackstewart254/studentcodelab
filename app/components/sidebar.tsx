"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobal } from "../context/global";

const Sidebar = () => {
  const { global, setGlobal } = useGlobal();
  const paths = ["/explore", "/library", "/profile"];
  const pathname = usePathname();
  const [Dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const route = useRouter();

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const changeRender = (newRender: string) => {
    setGlobal({ render: newRender });
    if (newRender === "explore") {
      route.push("/explore");
    }
    if (newRender === "library") {
      route.push("/library");
    }
    if (newRender === "profile") {
      route.push("/profile");
    }
  };

  if (!paths.includes(pathname)) {
    return <div className="w-0 h-0"></div>;
  } else {
    return (
      <div
        style={{ height: Dimensions.height - 60 }}
        className="w-[100px] pt-5 pl-5 border-r border-[#2E2E2E] bg-[#171717] flex items-start"
      >
        <div className="grid grid-rows-[auto,auto,auto] w-full gap-5 justify-start">
          <button
            onClick={() => {
              changeRender("explore");
            }}
          >
            <p className="text-white text-sm font-[400] hover:text-[#8A8A8C]">
              Explore
            </p>
          </button>
          <button
            onClick={() => {
              changeRender("library");
            }}
          >
            <p className="text-white text-sm font-[400] hover:text-[#8A8A8C]">
              Library
            </p>
          </button>
          <button
            onClick={() => {
              changeRender("profile");
            }}
          >
            <p className="text-white text-sm font-[400] hover:text-[#8A8A8C]">
              Profile
            </p>
          </button>
        </div>
      </div>
    );
  }
};

export default Sidebar;
