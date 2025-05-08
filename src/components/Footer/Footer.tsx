import React from "react";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer
      className="bg-no-repeat bg-cover bg-center w-full text-white text-right h-fit sm:h-[488px]"
      style={{ backgroundImage: "url('/footer/Tooltip.png')" }}
    >
      <section className="max-w-[1224px] mx-auto py-22 px-4 mt-20 sm:mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-right">
              از جدیدترین اخبار مطلع شوید
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-2 rounded bg-white/10 backdrop-blur-sm text-right"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                عضویت
              </button>
            </div>
            <p className="text-sm mt-6 text-right">
              استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا
              پروژه‌های پیشرفته، جهان استارت‌آپ‌ها را از اینجا کشف کنید.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-4 text-right">دسترسی سریع</h3>
              <ul className="space-y-2 text-right">
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    حساب کاربری
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-4 text-right">محتوای مفید</h3>
              <ul className="space-y-2 text-right">
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    لیست استارتاپ های ایرانی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    ارزش گزاری استارتاپ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    ایده های استارتاپی
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    قوانین و مقررات
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-right">اطلاعات تماس</h3>
            <div className="space-y-2">
              <p className="flex items-start justify-end text-right">
                <span>تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</span>
                <span className="mr-2">:آدرس</span>
              </p>
              <p className="flex items-center justify-end">
                <span dir="ltr">09123456789</span>
                <span className="mr-2">:شماره تماس</span>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-semibold mb-2 text-right">
                ما را در شبکه های اجتماعی دنبال کنید:
              </h4>
              <div className="flex space-x-4  justify-end">
                <CiInstagram className="text-2xl" />
                <PiTelegramLogoThin className="text-2xl" />
                <AiOutlineMail className="text-2xl" />
                <CiTwitter className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p>
            <span className="font-semibold hover:text-blue-400 ">
              Mahdi-Devm
            </span>{" "}
            / تمامی حقوق این وب‌سایت متعلق به کانسپتو می‌باشد. ©
            {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
