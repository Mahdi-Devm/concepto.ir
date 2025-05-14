import Image from "next/image";
import React from "react";

function Headerabotpagetext() {
  return (
    <div className="flex mt-10 flex-col justify-center items-center space-y-2 py-10">
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl ">
        با سرچ کمتر بهترین نتیجرو بگیر!
      </h1>
      <h2 className="text-2xl text-center">
        با ما همراه باش تا درمورد کانسپتو بیشتر اطلاعات کسب کنی
      </h2>
      <span className="text-center">
        ما یک چشم انداز داریم: کمک به افراد دیگر برای موفقیت بیشتر.{" "}
        <span> این چیزی</span>
        است که ما به طور موثر هر روز برای آن کار می کنیم
      </span>
      <div className="flex gap-2 mt-5">
        <button className="btnnotblue border-1 p-2 flex justify-center items-center rounded-md ">
          مشاهده بیشتر
        </button>
        <Image
          width={200}
          height={100}
          src="/Vector.png"
          alt=""
          className="w-[70px]"
        />
      </div>
    </div>
  );
}

export default Headerabotpagetext;
