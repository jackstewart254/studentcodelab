"use client";

const Header = () => {
  return (
    <div className="flex flex-row h-[60px] border-b border-[#2E2E2E] px-[40px] items-center justify-between w-screen">
      <div className="flex flex-row h-full items-center">
        <h1 className="text-white text-[20px] font-[600] pr-5">
          Student Code Lab
        </h1>
        <p className="text-white text-[14px] font-[400] h-[20px]">
          Case studies
        </p>
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
