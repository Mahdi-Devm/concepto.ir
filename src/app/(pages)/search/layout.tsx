import React, { ReactNode } from "react";
import Nabarsearch from "@/components/search/Nabarsearch";
import { AiFillThunderbolt } from "react-icons/ai";
interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <section>
      <Nabarsearch />
      <div className="mt-6 shadow-md rounded-2xl">
        <div className="flex justify-between">
          <p className="text-sm flex justify-center items-center text-blue-500 p-2">
            <span>مشاهده بیشتر </span>
            <AiFillThunderbolt />
          </p>
          <h1 className="text-xl font-bold p-2">پیشنهادها</h1>
        </div>
        <hr className="text-stone-300" />
        {children}
      </div>
    </section>
  );
}

export default layout;
