import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function Searchbar() {
  return (
    <div className="w-[439px] h-[48px] bg-gray-200 rounded-lg flex items-center px-4">
      <input
        type="text"
        placeholder="جستجو..."
        className="w-full h-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
      />
      <button className="ml-2 text-gray-600">
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}

export default Searchbar;
