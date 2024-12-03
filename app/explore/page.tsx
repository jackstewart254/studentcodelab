"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [current, setCurrent] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    console.log(current);
  }, [current]);

  const array = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  const changeRender = (robject: { id: number }) => {
    const serializedObject = JSON.stringify(robject.id);
    router.push(`/explore/${robject.id}`);
  };

  return (
    <div className="w-[calc(100vw-100px)] h-[calc(100vh-60px)] p-5 grid grid-rows-[auto,auto] gap-5">
      <div className="flex flex-row border-b border-[#2E2E2E] pb-[10px]">
        <p className="text-white">Explore</p>
      </div>
      <div className="flex flex-row gap-5 items-start overflow-y-auto">
        <div className="w-1/4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-md p-5 grid grid-rows-1">
          <div className="flex-col w-full gap-[10px] flex">
            <p className="text-white text-sm">Languages</p>
            <div className="flex-wrap w-full flex flex-row gap-[10px]">
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">Java</p>
              </button>
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">Javascript</p>
              </button>
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">Python</p>
              </button>
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">C</p>
              </button>
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">C++</p>
              </button>
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">Rust</p>
              </button>{" "}
              <button className="px-3 py-1 rounded-md border border-[#2e2e2e] flex items-center justify-center hover:bg-[#0795ff]">
                <p className="text-white text-sm font-[400]">PhP</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4 gap-5 h-full overflow-auto scrollbar-hide">
          <div className="flex flex-col gap-5 w-full">
            {array.map((item) => {
              return (
                <button
                  onClick={() => {
                    changeRender(item);
                  }}
                  onMouseEnter={() => {
                    setCurrent(item.id);
                  }}
                  // onMouseLeave={() => {
                  //   setCurrent(0);
                  // }}
                  key={item.id}
                  className="w-full rounded-md border border-[#2e2e2e] grid grid-rows-[auto,auto] bg-[#1D1D1D] p-5 gap-[10px]"
                >
                  <h1 className="text-white text-lg font-[600] text-left">
                    Appointment booking web platform
                  </h1>
                  <p className="text-sm font-[400] text-white text-left">
                    New Student-Lecturer booking system for a university.
                    Currently, the client has a outdated booking system. The
                    solved product would be a web booking system, using the
                    outlook API.
                  </p>
                  <p className="text-sm font-[400] text-white text-left">
                    Javascript, HTML, CSS, PHP
                  </p>
                  <p className="text-sm font-[600] text-white text-left">
                    Aston University
                  </p>
                  <p className="text-sm font-[600] text-white text-left">
                    $0.00
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-1/4 bg-[#1D1D1D] border border-[#2E2E2E] rounded-md p-5 grid grid-rows-1 gap-[10px]">
          <h1 className="text-white text-lg font-[600] text-left">
            Student Code Lab Tips
          </h1>
          <p className="text-sm font-[400] text-white text-left">
            For this program we recommend using a framework built on React for
            the frontend, and for the database using supabase. Our personal
            favorite is NextJS.
          </p>
        </div>
      </div>
    </div>
  );
}
