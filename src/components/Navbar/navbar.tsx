'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/profile",
    name: "Me",
  },
  {
    path: "/all_users",
    name: "all users",
  },
];

export function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className=" sticky w-1/2 h-1/5 justify-between flex flex-row">
        {navLinks.map((link, ind) => (
          <NavLinkComp key={ind} item={link} />
        ))}
      </div>
    </div>
  );
}

const NavLinkComp = ({item}) => {
    console.log(item);

  return (
    <Link href={item.path}>
      <h3>{item.name}</h3>
    </Link>
  );
};
