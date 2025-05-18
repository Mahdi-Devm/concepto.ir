"use client";
import React from "react";
import { FaSearch, FaSort } from "react-icons/fa";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedExperience: string;
  setSelectedExperience: (experience: string) => void;
  selectedContractType: string;
  setSelectedContractType: (type: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const categories = [
  "همه",
  "توسعه نرم‌افزار",
  "طراحی",
  "مدیریت",
  "بازاریابی",
  "فروش",
];

const experienceLevels = [
  "همه",
  "کارآموز",
  "کمتر از 2 سال",
  "2 تا 5 سال",
  "5 تا 10 سال",
  "بیش از 10 سال",
];

const contractTypes = ["همه", "تمام وقت", "پاره وقت", "دورکاری", "پروژه‌ای"];

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedExperience,
  setSelectedExperience,
  selectedContractType,
  setSelectedContractType,
  sortBy,
  setSortBy,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
    <div className="flex flex-col gap-4">
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
        <div className="flex items-center gap-2">
          <FaSort className="text-gray-600" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="newest">جدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select
            value={selectedContractType}
            onChange={(e) => setSelectedContractType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {contractTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default SearchFilters;
