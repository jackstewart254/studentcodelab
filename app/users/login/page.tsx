"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../../types/Dimensions";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const transferPage = (page: string) => {
    if (page === "home") {
      router.push("../");
    }
    if (page === "signup") {
      router.push("./signup");
    }
  };

  return (
    <div className="h-screen flex-row sm:grid md:grid lg:grid lg:grid-cols-2 w-screen">
      <div className="lg:flex md:hidden sm:hidden hidden"></div>
      <div className="flex bg-white relative items-center justify-center flex-col h-screen p-[20px]">
        <div className="absolute right-5 top-5 flex flex-row">
          <button
            className="py-[8px] px-[10px] flex items-center justify-center hover:bg-[#F4F4F5] rounded-[4px] bg-white"
            onClick={() => {
              transferPage("signup");
            }}
          >
            <p className="font-[500] text-sm">Signup</p>
          </button>
          <button
            className="py-[8px] px-[10px] flex items-center justify-center hover:bg-[#F4F4F5] rounded-[4px] bg-white ml-5"
            onClick={() => {
              transferPage("home");
            }}
          >
            <p className="font-[500] text-sm">Home</p>
          </button>
        </div>
        <div className="sm:w-[350px] md:w-[400px] lg:[500px] w-full max-w-[350px] flex items-center flex-col">
          <h1 className="mb-5 font-[600] text-[18px]">
            Login @ Student Code Lab
          </h1>
          <div className="w-full flex flex-col gap-[10px]">
            <input
              placeholder="example@university-email.com"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            <input
              placeholder="P@ssw0rd1"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="password"
            />
            <button className="flex h-9 w-full bg-[#171717] rounded-[4px] items-center justify-center hover:opacity-90">
              <p className="text-white text-sm">Sign in</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
