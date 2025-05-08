import React from "react";
import { CiLogin } from "react-icons/ci";

function LoginBtn() {
  return (
    <button className="w-[184px] h-[48px] border-1 flex justify-center items-center">
      ورود/ثبت نام <CiLogin className="text-2xl" />
    </button>
  );
}

export default LoginBtn;
