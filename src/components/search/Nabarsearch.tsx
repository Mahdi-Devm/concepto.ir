"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function Nabarsearch() {
  const pathname = usePathname();
  const navlinks = [
    { link: "/search/stored", name: "ذخیره شده ها" },
    { link: "/search", name: "شرکت " },
    { link: "/search/callme", name: "راه های تماسی" },
    { link: "/search/investor", name: "سرمایه گذاری " },
    { link: "/search/events", name: "رویداد " },
  ];

  return (
    <section>
      <div className="shadow-md rounded-2xl p-2">
        <h1 className="font-semibold text-2xl text-end mb-4">جستجو</h1>
        <div className="flex space-y-6 justify-end">
          <nav className=" pb-6">
            <ul className="flex  space-y-4">
              {navlinks.map((navlink) => (
                <li
                  key={navlink.link}
                  className={`text-lg font-medium transition-all duration-300 ease-in-out hover:bg-[#1a73e9] hover:text-white px-4 py-2 rounded-lg ${
                    pathname === `/search/${navlink.link}`
                      ? "bg-[#1a73e9] text-white"
                      : ""
                  }`}
                >
                  <Link href={navlink.link}>
                    <span>{navlink.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Nabarsearch;
