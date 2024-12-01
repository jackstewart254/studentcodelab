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
    <div
      className="p-5"
      style={{ width: dimensions.width - 60, height: dimensions.height - 60 }}
    >
      <h1 className="text-white">Profile</h1>
    </div>
  );
};

export default Profile;
