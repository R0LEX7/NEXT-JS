"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import MyButton from "@/components/Custom/myButton";
import { Profile } from "@/components/profile";
import axios from "axios";

const Page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get("/api/users/profile");
      console.log(response.data.user);
      setUser(response.data.user);
    } catch (error:any) {
      console.log("error ", error);
    }
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      {user && <Profile user={user} />}
    </div>
  );
};

export default Page;
