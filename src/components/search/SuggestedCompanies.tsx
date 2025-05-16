"use client";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

/**
 * Sample company data for the suggested companies list
 * @type {Array<{id: number, name: string, logoUrl: string}>}
 */
const companyData = [
  { id: 1, name: "بلوبانک", logoUrl: "logobeand/Button(10).png" },
  { id: 2, name: "اسنپ", logoUrl: "logobeand/Button(9).png" },
  { id: 3, name: "علی‌بابا", logoUrl: "logobeand/Button(11).png" },
  { id: 4, name: "اسنپ فود", logoUrl: "logobeand/Button(12).png" },
  { id: 5, name: "تپسی", logoUrl: "logobeand/Button(13).png" },
  { id: 6, name: "جابینجا", logoUrl: "logobeand/Button(14).png" },
  { id: 7, name: "ایرانسل", logoUrl: "logobeand/Button(15).png" },
  { id: 8, name: "دیوار", logoUrl: "logobeand/Button(16).png" },
  { id: 9, name: "دیجی‌کالا", logoUrl: "logobeand/Button(17).png" },
  { id: 10, name: "بلوبانک", logoUrl: "logobeand/Button(10).png" },
  { id: 11, name: "اسنپ فود", logoUrl: "logobeand/Button(18).png" },
];

/**
 * SuggestedCompanies Component
 *
 * Displays a list of suggested companies with their logos and names.
 * The component includes a header with a title and a "view more" button,
 * and a scrollable list of companies with bookmark functionality.
 *
 * @returns {JSX.Element} The rendered SuggestedCompanies component
 */
function SuggestedCompanies() {
  return (
    <div className="flex px-4 sm:px-6 md:px-8 lg:px-full py-15 items-start justify-center">
      <div className="rounded-2xl min-w-[250px] w-full overflow-hidden flex-1 flex-shrink flex-basis-0 bg-white max-w-full shadow-sm">
        {/* Header section with title and view more button */}
        <div className="flex w-full items-center overflow-hidden font-[IRANSansX,-apple-system,Roboto,Helvetica,sans-serif] justify-between max-w-full">
          <div className="items-center border-b border-[#CBCED7] self-stretch flex min-w-[240px] mt-auto mb-auto w-full px-3 sm:px-5 py-4 sm:py-5 gap-2 sm:gap-4 overflow-hidden justify-start flex-wrap flex-1 flex-shrink flex-basis-0 bg-white max-w-full">
            {/* View more button */}
            <div className="rounded-xl self-stretch flex mt-auto mb-auto min-h-[32px] px-2 items-center gap-1 overflow-hidden text-sm text-[#0D6EFD] font-medium capitalize leading-[25px] justify-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-[#0D6EFD] self-stretch mt-auto mb-auto">
                مشاهده بیشتر
              </div>
              <AiOutlineArrowLeft className="w-5 h-5 self-stretch mt-auto mb-auto flex-shrink-0" />
            </div>

            {/* Title with icon */}
            <div className="self-stretch flex min-w-[240px] mt-auto mb-auto py-[1px] items-center gap-2 text-lg sm:text-xl text-[#444859] font-bold whitespace-nowrap leading-[1.4] justify-end flex-wrap flex-1 flex-shrink flex-basis-[16px] max-w-full md:whitespace-normal">
              <div className="text-[#444859] self-stretch mt-auto mb-auto">
                پیشنهادها
              </div>
              <img
                src="/search/icons/suggestion.png"
                alt="Suggestions icon"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain object-center self-stretch mt-auto mb-auto flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Companies list */}
        <div className="w-full pr-2 py-2 max-w-full">
          {companyData.map((company, index) => (
            <div key={company.id} className="w-full max-w-full bg-white">
              {/* Company item with logo, name and bookmark button */}
              <div className="flex w-full px-3 sm:px-4 py-3 sm:py-4 items-center justify-end flex-wrap max-w-full">
                {/* Bookmark button */}
                <button
                  className="rounded-xl self-stretch flex mt-auto mb-auto min-h-[40px] px-2 items-center gap-2 overflow-hidden justify-center w-10 hover:bg-gray-100 transition-colors"
                  aria-label={`Bookmark ${company.name}`}
                >
                  <AiOutlineArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 object-contain object-center self-stretch mt-auto mb-auto" />
                </button>

                {/* Company info with logo */}
                <div className="self-stretch flex min-w-[240px] mt-auto mb-auto items-center gap-3 sm:gap-4 font-[IRANSansX,-apple-system,Roboto,Helvetica,sans-serif] text-sm text-[#2E303B] font-medium whitespace-nowrap text-right capitalize leading-[25px] justify-end flex-wrap flex-1 flex-shrink flex-basis-[16px] max-w-full md:whitespace-normal">
                  <div className="text-[#2E303B] self-stretch mt-auto mb-auto flex-1 flex-shrink flex-basis-0 max-w-full">
                    {company.name}
                  </div>
                  <img
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain object-center rounded-xl self-stretch mt-auto mb-auto flex-shrink-0"
                  />
                </div>
              </div>

              {/* Divider line between companies (except for the last one) */}
              {index < companyData.length - 1 && (
                <div className="w-full pr-[40px] sm:pr-[72px] max-w-full md:pr-5">
                  <div className="border-[#E9EAEE] border border-solid bg-[#E9EAEE] min-h-[1px] w-full max-w-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedCompanies;
