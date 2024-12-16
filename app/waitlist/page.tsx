"use client";

import { use, useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";
import { motion } from "motion/react";
import { insertInSupabase } from "./calls";
import { useGlobal } from "../context/global";

type User = {
  email: string;
  fname: string;
  lname: string;
  year: string;
  university: string;
};

const year = ["First", "Second", "Placement", "Third", "Postgraduate"];

const Contact = () => {
  const { global, setGlobal } = useGlobal();
  const [person, setPerson] = useState(false);
  const [user, setUser] = useState<User>({
    email: "",
    fname: "",
    lname: "",
    year: "",
    university: "",
  });
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    setGlobal({ ...global, render: "contact" });
  }, []);

  const updateUser = (prop: number, value: string) => {
    console.log(prop, value);
    if (prop === 0) {
      setUser({ ...user, email: value });
    } else if (prop === 1) {
      setUser({ ...user, fname: value });
    } else if (prop === 4) {
      setUser({ ...user, lname: value });
    } else if (prop === 2) {
      setUser({ ...user, university: value });
    } else if (prop === 3) {
      console.log("update year");
      setUser({ ...user, year: value });
      setShowDropdown(false);
    }
  };

  const checkEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(user.email);
  };

  const handleDropdownPress = () => {
    setShowDropdown(!showDropdown);
  };

  const selectYear = (year: string) => {
    setUser({ ...user, year: year });
    setShowDropdown(false);
  };

  useEffect(() => {
    console.log(user.year);
  }, [user]);

  const dropdown = () => (
    <motion.div
      className="absolute top-[46px] border border-[#E4E6EA] rounded-md bg-white grid grid-rows-5 w-full overflow-clip z-10"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: showDropdown === true ? "auto" : 0,
        opacity: showDropdown === true ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      {year.map((item, index) => {
        return (
          <button
            onClick={() => {
              updateUser(3, item);
            }}
            key={index}
            className="py-1 px-3 w-full flex items-start"
            style={{
              borderBottom:
                index + 1 < year.length
                  ? "1px solid #E4E6EA"
                  : "0px solid #E4E6EA",
            }}
          >
            <p className="text-sm font-[400]">{item}</p>
          </button>
        );
      })}
    </motion.div>
  );

  const checkFields = (obj: User) => {
    let invalidFields = [];
    for (const key of Object.keys(obj) as (keyof User)[]) {
      if (key === "email") {
        const validEmail = checkEmail();
        if (validEmail === false) {
          invalidFields.push(key);
        }
      } else {
        if (obj[key] === "") {
          invalidFields.push(key);
        }
      }
    }
    return invalidFields;
  };

  const handleInsertPress = async () => {
    const response = checkFields(user);
    console.log("email", response);

    if (response.length > 0) {
      setGlobal({
        ...global,
        showPopup: true,
        popupContent: 0,
        fields: response,
      });
    } else {
      const res = await insertInSupabase({ payload: user });
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
    <div className="grid grid-rows-3 gap-5 w-full bg-white p-5 rounded-md sm:w-[360px] mx-5">
      <input
        onClick={() => {
          setShowDropdown(false);
        }}
        onChange={(event) => {
          updateUser(0, event.target.value);
        }}
        className="text-black flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder={
          person === false ? "example@gmail.com" : "example@business-email.com"
        }
        value={user.email}
      />
      <div className="grid grid-cols-2 gap-[20px]">
        <input
          onClick={() => {
            setShowDropdown(false);
          }}
          onChange={(event) => {
            updateUser(1, event.target.value);
          }}
          className="text-black flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          placeholder="John"
          value={user.fname}
        />
        <input
          onClick={() => {
            setShowDropdown(false);
          }}
          onChange={(event) => {
            updateUser(4, event.target.value);
          }}
          className="text-black flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          placeholder="Smith"
          value={user.lname}
        />
      </div>
      <input
        onClick={() => {
          setShowDropdown(false);
        }}
        onChange={(event) => {
          updateUser(2, event.target.value);
        }}
        className="text-black flex h-9 w-full rounded-md border bg-white border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="Stanford University"
        value={user.university}
      />
      <div className="relative w-full">
        <button
          className="w-full h-9 border border-[#E4E6EA] shadow-sm rounded-md py-1 px-3 items-center flex justify-start"
          onClick={handleDropdownPress}
          style={{
            outline: showDropdown === true ? "1px solid #88BCF6" : "none",
          }}
        >
          <p
            className="text-sm font-[400] text-black"
            style={{ opacity: user.year === "" ? 0.5 : 1 }}
          >
            {user.year === ""
              ? "Year of study"
              : user.year === "Postgraduate"
              ? user.year
              : `${user.year} year`}
          </p>
        </button>
        {dropdown()}
      </div>
      <button
        className="w-full h-9 bg-[#0795FF] rounded-md flex items-center justify-center"
        onClick={handleInsertPress}
      >
        <p className="text-white text-sm font-[500]">Join waiting list</p>
      </button>
    </div>
  );

  return (
    <div className="items-center justify-center w-screen h-[calc(100vh-60px)] flex p-5 flex-col relative">
      {waitingListContact()}
      {/* <p className="text-white mt-[10px] text-sm font-[300]">
        Powered by{" "}
        <span className="text-[#07BC86] font-[500]">McleanStewart</span>
      </p> */}
    </div>
  );
};

export default Contact;
