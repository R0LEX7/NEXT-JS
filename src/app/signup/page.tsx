"use client";
import { Fieldset, TextInput, Button, Group } from "@mantine/core";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast"
import MyButton from "@/components/Custom/myButton";
import axios from "axios";

import "@/components/Custom/mantine.css"

const Page: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (args: {}) => {
    setUserData({ ...userData, ...args });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", userData);
      console.log("signup Success ", response.data);
      toast.success(`Signup Successfully`)
      router.push("/login")
    } catch (error : any) {
      console.log("error : ", error?.response?.data?.error);
      toast.error(`Signup Error: ${error?.response?.data?.error}`)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen p-2">

      <Fieldset

      radius="lg"
        legend=" Signup "
        className="bg-transparent border text-[#AE3EC8] w-[400px] h-[380px] border-[#AE3EC8]"
      >
        <TextInput
          label="Email"
          placeholder="Type your Username.."
          mt="md"
          type="username"
          bg={"transparent"}
          variant="unstyle"
          value={userData.username}
          onChange={(e) => handleChange({ email: e.target.value })}
        />
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

        <Group justify="space-between" mt="md">
        <p>
          Already sign up? <Link href="/login">login</Link>
        </p>
          <MyButton title={"Login"} handleClick={(e) => handleSubmit(e)} />
        </Group>
      </Fieldset>
    </div>
  );
};

export default Page;
