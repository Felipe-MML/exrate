"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CiMenuBurger } from "react-icons/ci";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-primarybuttons text-contrast h-14 select-none">
      <img src="/logo.png" alt="logo" className="w-50" />
      <ul className="flex gap-5 mx-10 max-sm:hidden">
        <li
          className={`p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300 ${
            pathname === "/" ? "bg-contrast text-mainText" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300 ${
            pathname === "/price" ? "bg-contrast text-mainText" : ""
          }`}
        >
          <Link href="/price">Conversor</Link>
        </li>
      </ul>
      <ul className="flex gap-5 mx-10 sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none hover:cursor-pointer">
            <CiMenuBurger className="text-2xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/price">Conversion</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
};

export default NavBar;
