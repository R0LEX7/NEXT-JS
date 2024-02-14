"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const Page: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: null,
    username: null,
    password: null,
  });

  const handleChange = (args: {}) => {
    setUserData({ ...userData, ...args });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(userData);
    console.log("====================================");
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <form className="flex flex-col  gap-4 border w-[400px] h-[600px]  p-4 rounded-xl justify-center items-center">
        <div className="w-full flex items-center border h-[60px] p-3 rounded-lg">
          <input
            className="w-full h-[50px] text-xl  bg-transparent outline-none"
            placeholder="email"
            type="email"
            value={userData.email}
            onChange={(e) => handleChange({ email: e.target.value })}
          />
        </div>
        <div className="w-full flex items-center border h-[60px] p-3 rounded-lg">
          <input
            className="w-full h-[50px] text-xl  bg-transparent outline-none"
            placeholder="username"
            type="text"
            value={userData.username}
            onChange={(e) => handleChange({ username: e.target.value })}
          />
        </div>
        <div className="w-full flex items-center border h-[60px] p-3 rounded-lg">
          <input
            className="w-full h-[50px] text-xl  bg-transparent outline-none"
            placeholder="password"
            type="password"
            value={userData.password}
            onChange={(e) => handleChange({ password: e.target.value })}
          />
        </div>
        <div className="w-full flex items-center border h-[60px] p-3 rounded-lg">
          <button
            className="w-full h-[50px] text-xl  bg-transparent outline-none"
            onClick={(e) => handleSubmit(e)}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
