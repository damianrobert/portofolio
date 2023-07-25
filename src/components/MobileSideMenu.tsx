"use client";
import { useState } from "react";
import { Icons } from "./Icons";
import Link from "next/link";

export default function MobileSideMenu() {
  const [open, setOpen] = useState(false);

  const handleSideMenu = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`md:hidden ${
        open ? "bg-zinc-100 border-l-2 border-gray-300" : null
      } absolute top-0 right-0`}
    >
      <div
        className={open ? "hidden" : "block cursor-pointer"}
        onClick={handleSideMenu}
      >
        <Icons.hamburgerMenu height={28} width={28} stroke="black" />
      </div>

      <div
        className={open ? "block cursor-pointer float-right" : "hidden"}
        onClick={handleSideMenu}
      >
        <Icons.x height={28} width={28} stroke="black" />
      </div>

      <div
        className={
          open
            ? "flex flex-col items-center min-h-screen p-4 pt-10 w-36"
            : "hidden"
        }
      >
        <Link
          href="https://github.com/damianrobert"
          target="_blank"
          className="bg-zinc-200 p-[.2rem] my-2 rounded-md w-fit cursor-pointer"
        >
          <Icons.github height={24} width={24} stroke="black" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/roberto-damian-radulescu-214432253/"
          target="_blank"
          className="bg-zinc-200 p-[.2rem] my-2 rounded-md w-fit cursor-pointer"
        >
          <Icons.linkedin height={24} width={24} stroke="black" />
        </Link>

        <div className="flex items-center">
          <div className="w-fit mx-2 my-4">
            <Icons.mapPin width={15} height={15} stroke="black" />
          </div>
          <p>Bucharest</p>
        </div>
      </div>
    </div>
  );
}
