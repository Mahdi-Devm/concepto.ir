import React from "react";
import Logo from "./Logo";
import Serchbar from "./Serchbar";
import LoginBtn from "../Login-Btn/Login";

function Header() {
  return (
    <header className="max-w-[1224px] mx-auto">
      <section>
        <div>
          <Logo />
          <Serchbar />
        </div>
        <div>
          <button>رایگان شروع کن!</button>
          <LoginBtn />
        </div>
      </section>
      <section>List header navbr </section>
    </header>
  );
}

export default Header;
