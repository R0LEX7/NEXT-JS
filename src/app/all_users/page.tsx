"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "@/components/userTable";

const page = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/api/users/all_users");
      console.log(response.data.data);
      setAllUsers(response.data.data);
    } catch (error : any) {
      console.log("error : ", error.message);
    }
  };
  return (
    <div>
      {allUsers != null && allUsers.length > 0 ? (
        <UserTable users={allUsers} />
      ) : (
        <h1> no users</h1>
      )}
    </div>
  );
};

export default page;
