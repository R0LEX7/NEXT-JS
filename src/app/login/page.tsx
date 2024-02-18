"use client";
import { Fieldset, TextInput, Button, Group } from "@mantine/core";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import MyButton from "@/components/Custom/myButton";
import "@/components/Custom/mantine.css"


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
      router.push("/profile");
    } catch (error) {
      console.log("Login Error ", error.message);

      toast.error(`Signup Error: ${error?.response?.data?.error}`);
    }
  };

  return (
    <div className=" flex justify-center  items-center w-full h-screen p-2">
      <Fieldset
      radius="lg"
        legend=" Login "
        className="bg-transparent border text-[#AE3EC8] w-[400px] h-[300px] border-[#AE3EC8]"
      >
        <TextInput
          label="Email"
          placeholder="Type your Email.."
          mt="md"
          type="email"
          bg={"transparent"}
          variant="unstyle"
          value={userData.email}
          onChange={(e) => handleChange({ email: e.target.value })}
        />
        <TextInput
          label="Password"
          placeholder="Type your Password..."
          type="password"
          bg={"transparent"}
          variant="unstyle"
          value={userData.password}
          onChange={(e) => handleChange({ password: e.target.value })}
        />

        <Group justify="flex-start" mt="md">
        <p>
          Create a new account? <Link href="/signup">Sign Up</Link>
        </p>
          <MyButton title={"Login"} handleClick={handleSubmit} />
        </Group>
      </Fieldset>
    </div>
  );
};

export default Page;
