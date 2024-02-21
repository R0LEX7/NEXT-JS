
import { Text, Paper, Title } from "@mantine/core";



export function Profile({user}) {
    console.log("props" , user);

  return (
    <Paper shadow="xs" radius="md" p="xl" className="bg-black  border border-[#AE3EC8]">
      <Title  className="capitalize text-[#AE3EC8]" order={4}> Username : {user?.username}</Title>
      <Text className="capitalize text-[#AE3EC8]" > email : {user?.email}</Text>
      <Text></Text>
    </Paper>
  );
}
