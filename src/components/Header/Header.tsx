"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Searchbar from "./Serchbar";
import LoginBtn from "../Login-Btn/Login";
import { useEffect } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const menuContainer = document.getElementById("mobile-menu");
      const target = e.target as HTMLElement;
      if (
        isMenuOpen &&
        menuContainer &&
        !menuContainer.contains(e.target as Node) &&
        !target.closest('button[aria-label="toggle-menu"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navlinks = [
    { link: "/", name: "خانه" },
    { link: "/about", name: "درباره ما" },
    { link: "/contact", name: "تماس با ما" },
    { link: "/job", name: "فرصت های شغلی" },
    { link: "/company", name: "شرکت ها" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sm:max-w-[1224px] mx-auto mt-3 px-4 ">
      <section className="hidden md:flex justify-between h-[48px] items-center">
        <div className="flex items-center gap-2 ">
          <LoginBtn />
          <button className="btnblue w-[184px] h-[48px] border-1 flex items-center justify-center rounded-md">
            رایگان شروع کن!
            <AiFillThunderbolt className="ml-2" />
          </button>
        </div>
        <div className="flex items-center">
          <Searchbar />
          <Logo />
        </div>
      </section>

      <section className="flex md:hidden justify-between items-center h-[48px]">
        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-2">
            <button className="btnblue w-[40px] h-[40px] border-1 flex items-center justify-center rounded-md">
              <AiFillThunderbolt />
            </button>
            <LoginBtn mobileView={true} />
          </div>
        </div>
        <div className="flex items-center">
          <Logo />
        </div>

        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none bg-stone-300 p-2 rounded-xl"
          aria-label="toggle-menu"
        >
          <HiMenu />
        </button>
      </section>

      <div className="md:hidden mt-3">
        <Searchbar />
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-white z-50 pt-4 px-4 overflow-y-auto"
        >
          <div className="flex justify-start mb-4">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="close-menu"
            >
              <HiX />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <nav className="border-b pb-6">
              <ul className="flex flex-col space-y-4">
                {navlinks.map((navlink) => (
                  <li
                    key={navlink.link}
                    className={`text-lg font-medium transition-all duration-300 ease-in-out hover:bg-[#1a73e9] hover:text-white px-4 py-2 rounded-lg ${
                      pathname === navlink.link ? "bg-[#1a73e9] text-white" : ""
                    }`}
                    onClick={toggleMenu}
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
      )}

      <section className="hidden md:block">
        <Navbar />
      </section>
      <hr className="text-stone-200 mb-5" />
    </header>
  );
}

export default Header;
