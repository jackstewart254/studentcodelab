"use client";
import { useSearchParams } from "next/navigation";

const Task = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const serializedData = searchParams.get("id");
  console.log(serializedData);
  const data = serializedData
    ? JSON.parse(decodeURIComponent(serializedData))
    : null;
  console.log(data);

  return (
    <div className="w-screen h-[calc(100vh-60px)]">
      <h1 className="text-white">Task</h1>
    </div>
  );
};

export default Task;
