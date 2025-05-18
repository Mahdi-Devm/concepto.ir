"use client";
import React from "react";

const Newsletter: React.FC = () => (
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
);

export default Newsletter;
