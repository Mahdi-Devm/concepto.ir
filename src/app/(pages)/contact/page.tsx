import React from "react";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>تماس با ما - سایت من</title>
        <meta name="description" content="برای ارتباط با ما اینجا کلیک کنید." />
        <meta name="keywords" content="تماس با ما, ارتباط, پشتیبانی" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        {/* نقشه */}
        <div className="w-full h-[300px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7638023813956!2d51.3889738152627!3d35.68919758019427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017daf70e5a9%3A0x4bfb586e2e1cfde9!2sTehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1626430993830!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* فرم تماس */}
        <div className="w-[1220px] mx-auto bg-white p-10 rounded-xl ">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            فرم تماس با ما
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* نام کامل */}
            <div className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-700">
                نام کامل
              </label>
              <input
                type="text"
                className="border pl-10 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="مثلاً علی رضایی"
              />
            </div>

            {/* شماره تماس */}
            <div className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-700">
                شماره تماس
              </label>

              <input
                type="tel"
                className="border pl-10 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="09123456789"
              />
            </div>

            {/* ایمیل */}
            <div className="flex flex-col relative col-span-1 md:col-span-2">
              <label className="mb-1 text-sm font-medium text-gray-700">
                ایمیل
              </label>

              <input
                type="email"
                className="border pl-10 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="your@email.com"
              />
            </div>

            {/* پیام */}
            <div className="flex flex-col relative col-span-1 md:col-span-2">
              <label className="mb-1 text-sm font-medium text-gray-700">
                پیام شما
              </label>

              <textarea
                rows={5}
                className="border pl-10 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="پیام خود را اینجا بنویسید..."
              ></textarea>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
