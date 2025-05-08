import React from "react";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
  return (
    <div className="w-[439px] h-[48px] bg-gray-200 rounded-lg flex items-center px-4 dir-rtl">
      <button className="mr-2 text-gray-600">
        <CiSearch className="text-2xl" />
      </button>
      <input
        type="text"
        placeholder="جستجو کسب‌ و کار"
        className="w-full h-full bg-transparent border-none outline-none text-right text-gray-700 placeholder-gray-500"
      />
    </div>
  );
}

export default Searchbar;
