"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { jobs } from "@/context/jobs";

export default function Jobopportunities() {
  return (
    <section aria-label="فرصت‌های شغلی" className="py-10 w-100 md:w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <hr className="border border-stone-300 w-32" />
          <h2 className="text-2xl font-semibold text-gray-800">
            فرصت‌های شغلی
          </h2>
          <hr className="border border-stone-300 w-32" />
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // نمایش 1 اسلاید در موبایل
              spaceBetween: 10, // فاصله کمتر بین اسلایدها
            },
            768: {
              slidesPerView: 2, // نمایش 2 اسلاید در تبلت
            },
            1024: {
              slidesPerView: 3, // نمایش 3 اسلاید در دسکتاپ
            },
            1280: {
              slidesPerView: 5, // نمایش 4 اسلاید در صفحات بزرگتر
            },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <article
                className="rounded-xl h-80 md:h-80 bg-[#F6F6F6] shadow-md overflow-hidden p-4 flex flex-col max-w-sm mx-auto"
                itemScope
                itemType="https://schema.org/JobPosting"
              >
                <Image
                  width={300}
                  height={200}
                  src={job.image}
                  alt={`تصویر موقعیت شغلی ${job.title} در ${job.company}`}
                  className="w-full mt-5 h-20 md:h-25 object-cover rounded-lg mb-3"
                  itemProp="image"
                />
                <h3
                  className="text-lg font-semibold mb-2 mt-10"
                  itemProp="title"
                >
                  {job.title}
                </h3>
                <p
                  className="text-sm text-gray-600 mb-2"
                  itemProp="hiringOrganization"
                >
                  شرکت: {job.company}
                </p>
                <ul className="flex flex-wrap gap-2 mt-auto text-xs text-white">
                  {job.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-blue-500 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
