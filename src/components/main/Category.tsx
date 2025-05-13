import React from "react";
import Image from "next/image";
import TiltCard from "@/features/stylingmainpage/VanillaTilt ";

const categories = [
  { src: "/mainpage/items/Button.png", label: "دکمه‌ها" },
  { src: "/mainpage/items/Button(1).png", label: "کلیدها" },
  { src: "/mainpage/items/Button(2).png", label: "عملگرها" },
  { src: "/mainpage/items/Button(3).png", label: "فشاردهنده" },
  { src: "/mainpage/items/Switch(5).png", label: "سوییچ" },
  { src: "/mainpage/items/Switch(6).png", label: "سوییچ ۲" },
  { src: "/mainpage/items/Switch(3).png", label: "دوطرفه" },
  { src: "/mainpage/items/Slider(1).png", label: "اسلایدر" },
  { src: "/mainpage/items/Switch(4).png", label: "سه‌حالته" },
  { src: "/mainpage/items/Switch(1).png", label: "کنترلی" },
  { src: "/mainpage/items/Switch.png", label: "پاور" },
  { src: "/mainpage/items/Switch(2).png", label: "الکترونیکی" },
];

function Category() {
  return (
    <section className="px-4 py-8">
      <div className="flex items-center justify-center gap-4 mb-6">
        <hr className="border border-stone-300 w-32" />
        <h1 className="text-xl font-semibold text-gray-800">دسته‌بندی‌ها</h1>
        <hr className="border border-stone-300 w-32" />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-6 place-items-center">
        {categories.slice(0, 12).map((item, idx) => (
          <TiltCard key={idx} className="w-25 h-30 md:w-40 md:h-40">
            <div className="group relative overflow-hidden flex flex-col items-center text-center w-full h-full justify-center rounded-2xl shadow-xl transition-all duration-500 bg-white/20 border border-white/20 backdrop-blur-lg hover:backdrop-blur-xl hover:shadow-2xl ring-1 ring-white/20">
              <div className="absolute inset-0 z-0 transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-blue-300/50 group-hover:to-blue-600/420 rounded-2xl mix-blend-overlay"></div>

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative border-2 border-[#1a73e9] rounded-full p-2 transition-all duration-300 group-hover:scale-105 group-hover:border-[#1a73e9] group-hover:shadow-md bg-white/50 backdrop-blur-sm">
                  <Image
                    src={item.src}
                    alt={item.label}
                    layout="fill"
                    objectFit="contain"
                    className="p-1"
                  />
                </div>
                <span className="mt-3 text-md text-gray-700 group-hover:text-black hover:font-semibold transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export default Category;
