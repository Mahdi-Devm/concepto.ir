"use client";
import React, { useState } from "react";
import Head from "next/head";
import SearchFilters from "./components/SearchFilters";
import JobList from "./components/JobList";
import Newsletter from "./components/Newsletter";
import { jobs } from "./components/JobData";

function Job() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedExperience, setSelectedExperience] = useState("همه");
  const [selectedContractType, setSelectedContractType] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const handleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs
    .filter((job) => {
      const matchesCategory =
        selectedCategory === "همه" || job.category === selectedCategory;
      const matchesExperience =
        selectedExperience === "همه" || job.experience === selectedExperience;
      const matchesContractType =
        selectedContractType === "همه" || job.type === selectedContractType;
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      return (
        matchesCategory &&
        matchesExperience &&
        matchesContractType &&
        matchesSearch
      );
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
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

        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          selectedContractType={selectedContractType}
          setSelectedContractType={setSelectedContractType}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <JobList
          jobs={filteredJobs}
          savedJobs={savedJobs}
          onSaveJob={handleSaveJob}
        />

        <Newsletter />
      </div>
    </>
  );
}

export default Job;
