"use client";
import { useEffect, useState } from "react";
import { Dimensions } from "../types/Dimensions";

const Profile = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="p-5 w-[calc(100vw-100px)] h-[calc(100vh-60px)]">
      <h1 className="text-white">Profile</h1>
    </div>
  );
};

export default Profile;
