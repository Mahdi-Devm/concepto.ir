"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
  const navigat = useRouter();
  return (
    <div className="flex min-h-screen font-sans flex-col md:flex-row">
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-10 gap-10 bg-white">
        <Image
          width={300}
          height={150}
          src="/login/Container(1).png"
          alt="Logo 2"
          className="w-4/5 max-w-[450px] h-auto"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        <form className="w-full space-y-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-center">
            <Image
              width={300}
              height={150}
              src="/login/Container(2).png"
              alt="Logo 2"
              className="w-3/4 max-w-[300px] h-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-1 flex items-center justify-center gap-4">
              <span
                onClick={() => navigat.push("/login")}
                className="cursor-pointer text-blue-500  transition"
              >
                ورود
              </span>
              <span className="text-gray-400">|</span>
              <span
                onClick={() => navigat.push("/signup")}
                className="cursor-pointer text-blue-500  transition"
              >
                ثبت‌نام
              </span>
            </h2>

            <p className="text-center text-md text-gray-500 mb-4">
              برای ادامه شماره تماس را وارد کنید
            </p>
          </div>

          <div className="space-y-6">
            <input
              type="tel"
              placeholder="شماره تماس را وارد کنید"
              className="w-full p-3 border border-gray-300 rounded-lg text-right placeholder:text-right"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              تایید و دریافت کد
            </button>

            <p className="text-xs text-center text-gray-400 leading-6">
              ورود شما به معنای پذیرش{" "}
              <span className="text-blue-600 underline cursor-pointer">
                شرایط کانسپتو
              </span>{" "}
              و{" "}
              <span className="text-blue-600 underline cursor-pointer">
                قوانین حریم خصوصی
              </span>{" "}
              است
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
