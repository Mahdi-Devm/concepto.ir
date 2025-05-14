import { about } from "@/context/Myabout";
import Image from "next/image";
import React from "react";

function BoxDetail() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4">
      {about.map((items) => (
        <div
          key={items.id}
          className="bg-[#f0f0f0] w-full max-w-[350px] h-auto flex flex-col space-y-5 items-end rounded-2xl p-4"
        >
          <span className="bg-[#e7e6e6] rounded-2xl flex justify-center items-center p-2">
            <Image
              width={200}
              height={50}
              src={
                items.image.startsWith("/") ? items.image : `/${items.image}`
              }
              alt=""
              className="w-[30px]"
            />
          </span>
          <h1 className="text-xl font-semibold">{items.title}</h1>
          <h2 className="text-md text-stone-800 text-end">
            {items.description}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default BoxDetail;
