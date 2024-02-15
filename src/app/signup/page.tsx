"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast"

import axios from "axios";

const Page: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: null,
    username: null,
    password: null,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (args: {}) => {
    setUserData({ ...userData, ...args });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", userData);
      console.log("signup Success ", response.data);
      toast.success(`Signup Successfully`)
      router.push("/login")
    } catch (error) {
      console.log("error : ", error?.response?.data?.error);
      toast.error(`Signup Error: ${error?.response?.data?.error}`)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen p-2">
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
        <p>
          Already sign up? <Link href="/login">login</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
