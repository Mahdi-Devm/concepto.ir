import React from "react";
import Logo from "./Logo";
import Serchbar from "./Serchbar";
import LoginBtn from "../Login-Btn/Login";
import { AiFillThunderbolt } from "react-icons/ai";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="max-w-[1224px] mx-auto mt-3">
      <section className="flex justify-between h-[48px] items-center">
        <div className="flex items-center">
          <button className="btnblue w-[184px] h-[48px] border-1 flex items-center justify-center rounded-md">
            <AiFillThunderbolt className="mr-2" />
            رایگان شروع کن!
          </button>
          <LoginBtn />
        </div>
        <div className="flex items-center">
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
