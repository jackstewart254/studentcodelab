"use client";

import { use, useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { motion } from "motion/react";
import { insertInSupabase } from "./calls";
import { useGlobal } from "../context/global";

type User = {
  email: string;
  name: string;
  university: string;
};

const Contact = () => {
  const { global, setGlobal } = useGlobal();
  const [person, setPerson] = useState(false);
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
    university: "",
  });

  const updateUser = (prop: number, value: string) => {
    console.log(prop, value);
    if (prop === 0) {
      setUser({ ...user, email: value });
    } else if (prop === 1) {
      setUser({ ...user, name: value });
    } else {
      setUser({ ...user, university: value });
    }
  };

  const handleInsertPress = async () => {
    const res = isValidObject(user);
    if (res === false) {
      setGlobal({ ...global, showPopup: true, popupContent: 0 });
    } else {
      const res = await insertInSupabase({ payload: user });
      console.log(res);
      if (res.error === true) {
        setGlobal({ ...global, showPopup: true, popupContent: 1 });
      } else {
        setGlobal({ ...global, showPopup: true, popupContent: 2 });
      }
    }
  };

  // const isValidObject = () => {
  //   const fields = ["email", "name", "university"];
  //   let valid = true;
  //   for (let i = 0; i < fields.length; i++) {
  //     if (user[fields[i]] === "") {
  //       valid = false;
  //     }
  //   }
  //   return valid;
  // };

  const isValidObject = (obj: User) => {
    for (const key of Object.keys(obj) as (keyof User)[]) {
      if (obj[key] === "") {
        return false;
      }
    }
    return true;
  };

  const businessContact = () => (
    <div className="grid grid-rows-3 gap-5 w-[280px] bg-white p-5 rounded-md sm:w-[360px]">
      <div className="w-full bg-white h-9 rounded-md relative overflow-clip items-center flex border">
        <button
          className="w-1/2 h-full flex items-center justify-center z-10"
          onClick={() => {
            setPerson(false);
          }}
        >
          <p
            style={{ color: person === true ? "#171717" : "white" }}
            className="text-[#171717] text-sm font-[400]"
          >
            Individual
          </p>
        </button>
        <button
          className="w-1/2 h-full flex items-center justify-center z-10"
          onClick={() => {
            setPerson(true);
          }}
        >
          <p
            style={{ color: person === true ? "white" : "#171717" }}
            className="text-sm font-[400]"
          >
            Business
          </p>
        </button>
        <motion.div
          className="bg-[#0795FF] h-9 w-1/2 absolute"
          animate={{ left: person === true ? "50%" : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <input
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder={
          person === false ? "example@gmail.com" : "example@business-email.com"
        }
      />
      <input
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="John Smith"
      />
      <textarea
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[36px] max-h-[300px]"
        placeholder="Purpose* (Software need?)"
      />
      <button className="w-full h-9 bg-[#0795FF] rounded-md flex items-center justify-center">
        <p className="text-white text-sm">Contact</p>
      </button>
    </div>
  );

  const waitingListContact = () => (
    <div className="grid grid-rows-3 gap-5 w-[280px] bg-white p-5 rounded-md sm:w-[360px]">
      <input
        onChange={(event) => {
          updateUser(0, event.target.value);
        }}
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder={
          person === false ? "example@gmail.com" : "example@business-email.com"
        }
        value={user.email}
      />
      <input
        onChange={(event) => {
          updateUser(1, event.target.value);
        }}
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="John Smith"
        value={user.name}
      />
      <input
        onChange={(event) => {
          updateUser(2, event.target.value);
        }}
        className="flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="Stanford University"
        value={user.university}
      />
      <button
        className="w-full h-9 bg-[#0795FF] rounded-md flex items-center justify-center"
        onClick={handleInsertPress}
      >
        <p className="text-white text-sm">Join SCL</p>
      </button>
    </div>
  );

  return (
    <div className="items-center justify-center w-screen h-[calc(100vh-60px)] flex p-5 flex-col relative">
      {waitingListContact()}
      <p className="text-white mt-[10px] text-sm font-[300]">
        Powered by{" "}
        <span className="text-[#07BC86] font-[500]">McleanStewart</span>
      </p>
    </div>
  );
};

export default Contact;
