"use client";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const transferPage = (page: string) => {
    if (page === "home") {
      router.push("../");
    }
    if (page === "login") {
      router.push("./login");
    }
  };
  return (
    <div className="w-screen h-screen bg-[#171717] grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex"></div>
      <div className="flex bg-white relative items-center justify-center">
        <div className="absolute right-5 top-5 flex flex-row">
          <button
            className="py-[8px] px-[10px] flex items-center justify-center hover:bg-[#F4F4F5] rounded-[4px] bg-white"
            onClick={() => {
              transferPage("login");
            }}
          >
            <p className="font-[500] text-sm">Login</p>
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
        <div className="w-[280px] sm:w-[350px] md:w-[400px] lg:[500px] max-w-[350px] flex items-center flex-col">
          <h1 className="mb-5 font-[600] text-[18px]">
            Signup @ Student Code Lab
          </h1>
          <div className="w-full flex flex-col gap-[10px]">
            <div className="grid grid-cols-2  gap-[10px]">
              <input
                placeholder="Jack"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              <input
                placeholder="Stewart"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
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

export default Signup;
