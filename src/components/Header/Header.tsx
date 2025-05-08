import React from "react";
import Logo from "./Logo";
import Serchbar from "./Serchbar";
import LoginBtn from "../Login-Btn/Login";
import { AiFillThunderbolt } from "react-icons/ai";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="max-w-[1224px] mx-auto mt-3">
      <section className="flex justify-between h-[48px]">
        <div className="flex">
          <button className="w-[184px] h-[48px] bg-amber-100">
            <AiFillThunderbolt />
            رایگان شروع کن!
          </button>
          <LoginBtn />
        </div>
        <div className="flex">
          <Serchbar />
          <Logo />
        </div>
      </section>
      <section>
        <Navbar />
      </section>
    </header>
  );
}

export default Header;
