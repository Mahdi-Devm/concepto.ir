"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { jobs } from "@/context/jobs";

export default function Jobopportunities() {
  return (
    <section aria-label="فرصت‌های شغلی" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <hr className="border border-stone-300 w-32" />
          <h2 className="text-xl font-semibold text-gray-800">فرصت‌های شغلی</h2>
          <hr className="border border-stone-300 w-32" />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <article
                className="rounded-xl bg-[#F6F6F6] shadow-md overflow-hidden p-4 flex flex-col h-70"
                itemScope
                itemType="https://schema.org/JobPosting"
              >
                <Image
                  width={300}
                  height={40}
                  src={job.image}
                  alt={`تصویر موقعیت شغلی ${job.title} در ${job.company}`}
                  className="w-60 h-30 object-cover rounded-lg mb-3"
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
