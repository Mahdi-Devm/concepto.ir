"use client";
import React, { useState } from "react";
import Head from "next/head";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";

// Sample job data
const jobs = [
  {
    id: 1,
    title: "توسعه‌دهنده فرانت‌اند",
    company: "شرکت فناوری نوین",
    location: "تهران",
    type: "تمام وقت",
    salary: "توافقی",
    experience: "3 تا 5 سال",
    skills: ["React", "TypeScript", "Next.js"],
    logo: "/images/company1.png",
    date: "1402/12/15",
    description:
      "به دنبال یک توسعه‌دهنده فرانت‌اند با تجربه در React و TypeScript هستیم.",
  },
  // Add more sample jobs here
];

const categories = [
  "همه",
  "توسعه نرم‌افزار",
  "طراحی",
  "مدیریت",
  "بازاریابی",
  "فروش",
];

const JobCard = ({ job }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex items-center">
        <img
          src={job.logo}
          alt={job.company}
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>
      <button className="text-blue-500 hover:text-blue-700">
        <FaStar className="w-6 h-6" />
      </button>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <span className="flex items-center text-gray-600">
        <FaMapMarkerAlt className="ml-1" />
        {job.location}
      </span>
      <span className="flex items-center text-gray-600">
        <FaBriefcase className="ml-1" />
        {job.type}
      </span>
      <span className="flex items-center text-gray-600">
        <FaMoneyBillWave className="ml-1" />
        {job.salary}
      </span>
    </div>
    <div className="mt-4">
      <p className="text-gray-700">{job.description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {job.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-gray-500 text-sm">{job.date}</span>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        ارسال رزومه
      </button>
    </div>
  </div>
);

function Job() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "همه" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>فرصت‌های شغلی - سایت من</title>
        <meta
          name="description"
          content="فرصت‌های شغلی و استخدام در شرکت ما."
        />
        <meta name="keywords" content="فرصت شغلی, استخدام, کار در شرکت" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">فرصت‌های شغلی</h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو در فرصت‌های شغلی..."
                  className="w-full px-4 py-2 border rounded-lg pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            در خبرنامه فرصت‌های شغلی عضو شوید
          </h3>
          <p className="text-gray-600 mb-4">
            برای دریافت آخرین فرصت‌های شغلی در ایمیل خود عضو خبرنامه ما شوید.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
