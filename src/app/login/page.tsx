"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });

  const handleChange = (args: {}) => {
    setUserData({ ...userData, ...args });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", userData);
      console.log(response.data);
      toast.success(`Welcome ${response.data.user.username}`);
    } catch (error) {
      console.log("Login Error ", error.message);

      toast.error(`Signup Error: ${error?.response?.data?.error}`);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen p-2">
      <form className="flex flex-col  gap-4 border w-[400px] h-[440px]  p-4 rounded-xl justify-center items-center">
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
            login{" "}
          </button>
        </div>
        <p>
          Create a new account? <Link href="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
