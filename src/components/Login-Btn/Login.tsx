"use client";
import React from "react";
import { CiLogin } from "react-icons/ci";

function LoginBtn({ mobileView = false }) {
  return (
    <button
      className={`btnnotblue border-1 flex justify-center items-center rounded-md ${
        mobileView ? "w-[40px] h-[40px]" : "w-[184px] h-[48px]"
      }`}
    >
      {!mobileView && <span className="ml-2">ورود/ثبت نام</span>}
      <CiLogin className="text-2xl" />
    </button>
  );
}

export default LoginBtn;
