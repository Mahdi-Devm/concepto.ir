"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";

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

interface JobCardProps {
  job: Job;
  onSave: (id: number) => void;
  isSaved: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSave, isSaved }) => (
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
      <button
        onClick={() => onSave(job.id)}
        className={`${
          isSaved ? "text-yellow-500" : "text-gray-400"
        } hover:text-yellow-500 transition-colors`}
      >
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
      {job.skills.map((skill: string, index: number) => (
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

export default JobCard;
