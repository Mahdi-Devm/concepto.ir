"use client";
import React from "react";
import JobCard from "./JobCard";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  skills: string[];
  logo: string;
  date: string;
  description: string;
  category: string;
}

interface JobListProps {
  jobs: Job[];
  savedJobs: number[];
  onSaveJob: (id: number) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, savedJobs, onSaveJob }) => (
  <div className="space-y-4">
    <div className="mb-4 text-gray-600">{jobs.length} فرصت شغلی یافت شد</div>
    {jobs.map((job) => (
      <JobCard
        key={job.id}
        job={job}
        onSave={onSaveJob}
        isSaved={savedJobs.includes(job.id)}
      />
    ))}
  </div>
);

export default JobList;
