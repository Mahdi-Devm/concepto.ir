import Image from "next/image";
import React from "react";

function Memberaboutpage() {
  return (
    <div>
      <div className="text-center mt-20 mb-5 space-y-2 border-t stroke-stone-400 md:border-none">
        <h1 className="font-semibold text-1xl md:text-2xl lg:text-4xl ">
          اعضای تیم کانسپتو
        </h1>
        <span className="text-md">کانسپتی برای تو</span>
      </div>

      <div className="flex flex-wrap w-full justify-center gap-10 md:gap-20">
        <div className="w-full sm:w-1/3 md:w-auto">
          <Image
            width={300}
            height={100}
            src="/about/Members/1.png"
            alt="Team Member 1"
            className="w-70 md:w-full mx-auto h-auto"
          />
        </div>
        <div className="w-full sm:w-1/3 md:w-auto">
          <Image
            width={300}
            height={100}
            src="/about/Members/3.png"
            alt="Team Member 2"
            className="w-70 md:w-full mx-auto h-auto"
          />
        </div>
        <div className="w-full sm:w-1/3 md:w-auto">
          <Image
            width={300}
            height={100}
            src="/about/Members/2.png"
            alt="Team Member 3"
            className="w-70 md:w-full mx-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Memberaboutpage;
