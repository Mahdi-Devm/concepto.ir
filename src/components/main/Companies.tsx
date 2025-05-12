"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { companies } from "@/context/companies";

export default function Companies() {
  return (
    <div className="swiper-container px-4 w-105 md:w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            autoplay: false,
          },
          768: {
            slidesPerView: 3,
            autoplay: false,
          },
          1024: {
            slidesPerView: 4,
            autoplay: false,
          },
        }}
      >
        {companies.map((company, i) => (
          <SwiperSlide key={i} className="!w-[260px] flex justify-center">
            <div className="md:max-w-full rounded-xl shadow-lg overflow-hidden flex flex-col">
              <Image
                width={360}
                height={180}
                src={company.image}
                alt={`Image of ${company.name}`}
                className="object-cover w-full h-[160px]"
              />
              <div className="p-3 sm:p-4 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold">{company.name}</h2>
                    <span className="text-sm text-gray-500">
                      تجارت الکترونیک
                    </span>
                  </div>
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={70}
                    height={80}
                  />
                </div>
                <div className="flex mt-4 gap-4 mx-auto">
                  <div className="w-[120px] p-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center">
                    <h3 className="text-sm">مخاطبین جدید</h3>
                    <span className="text-2xl text-blue-500">
                      {company.newClients}
                    </span>
                  </div>
                  <div className="w-[120px] p-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center">
                    <h3 className="text-sm">سرمایه‌گذاران جدید</h3>
                    <span className="text-2xl text-blue-500">
                      {company.newInvestors}
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-1 line-clamp-2">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    {Array.from({ length: Math.floor(company.stars) }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                    {company.stars % 1 !== 0 && (
                      <FaStar className="opacity-50" />
                    )}
                    <span className="text-sm dark:text-gray-400 ms-2">
                      {company.stars}
                    </span>
                  </div>
                  <p className="text-xs">{company.address}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
