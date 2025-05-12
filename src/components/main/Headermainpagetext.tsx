import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiArrowLeftWideFill } from "react-icons/ri";
function Headermainpagetext() {
  return (
    <div className="p-4 md:p-8 lg:p-12 rtl" dir="rtl">
      <div className="text-center mb-6 space-y-3 md:space-y-5">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl">
          با سرچ کمتر نتیجه بهتر بگیر
        </h1>
        <span className="text-sm md:text-base block">
          کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی
        </span>
      </div>

      <div className="flex flex-col  md:flex-row justify-center gap-3 md:gap-2">
        <button className="border btnnotblue  border-gray-300 flex justify-center items-center rounded-md h-12 md:w-44 px-4 order-2 md:order-1">
          <AiFillThunderbolt className="h-5 w-5 ml-2" />
          <span>درباره کانسپتو</span>
        </button>

        <button className="bg-blue-600 btnblue text-white border border-blue-600 flex items-center justify-center rounded-md h-12 md:w-44 px-4 order-1 md:order-2">
          رایگان شروع کن!
          <RiArrowLeftWideFill className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Headermainpagetext;
