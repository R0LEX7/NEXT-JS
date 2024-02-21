
import React from "react";
import { Table } from "@mantine/core";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const userTable = (users) => {
  console.log("users" ,users);
  console.log("users array->" ,users.users);
  const rows = users?.users.map((element) => (
    <Table.Tr key={element._id}>
      <Table.Td>{element._id}</Table.Td>
      <Table.Td>{element.username}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.isVerified ? "True" : "False"}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div className=" flex justify-center mt-6 items-start h-screen">
     <div className= "w-3/5">
     <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>_id</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>isVerified</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
     </div>
    </div>
  );
};

export default userTable;
