"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  const navlinks = [
    { link: "/", name: "خانه" },
    { link: "/about", name: "درباره ما" },
    { link: "/contact", name: "تماس با ما" },
    { link: "/job", name: "فرصت های شغلی" },
    { link: "/company", name: "شرکت ها" },
  ];

  return (
    <nav className="bg-white  mt-5 ">
      <div className="max-w-[1224px] mx-auto flex justify-end items-center h-[56px] px-4">
        <ul className="flex space-x-5">
          {navlinks.map((navlink) => (
            <li
              key={navlink.link}
              className={`text-lg font-medium transition-all duration-300 ease-in-out hover:bg-[#1a73e9] hover:text-white px-4 py-1  rounded-lg ${
                pathname === navlink.link ? "bg-[#1a73e9] text-white " : ""
              }`}
            >
              <Link href={navlink.link}>
                <span>{navlink.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
