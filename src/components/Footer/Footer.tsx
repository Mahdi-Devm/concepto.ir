import React from "react";

function Footer() {
  return (
    <footer
      className="bg-no-repeat bg-cover bg-center w-full text-white text-right h-[478px]"
      style={{ backgroundImage: "url('/footer/Tooltip.png')" }}
    >
      <section className="max-w-[1224px] mx-auto py-32 px-4">
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
              <div className="flex space-x-4 space-x-reverse justify-end">
                <a href="#" className="hover:text-blue-300 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.597 1.8 1.162.568.568.912 1.132 1.163 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427-.25.668-.595 1.235-1.163 1.8-.568.568-1.132.912-1.8 1.163-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.235-.595-1.8-1.163-.568-.568-.912-1.132-1.163-1.8-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.597-1.235.162-1.8.568-.568 1.132-.912 1.8-1.163.636-.247 1.363-.416 2.427-.465C9.456 2.013 9.8 2 12 2h.315zm-.075 18c2.333 0 2.642.01 3.585.052.864.04 1.334.184 1.646.307.414.16.71.35 1.02.66.31.31.5.606.66 1.02.123.312.267.782.307 1.646.042.949.052 1.234.052 3.585s-.01 2.642-.052 3.585c-.04.864-.184 1.334-.307 1.646-.16.414-.35.71-.66 1.02-.31.31-.606.5-1.02.66-.312.123-.782.267-1.646.307-.943.042-1.229.052-3.585.052s-2.642-.01-3.585-.052c-.864-.04-1.334-.184-1.646-.307-.414-.16-.71-.35-1.02-.66-.31-.31-.5-.606-.66-1.02-.123-.312-.267-.782-.307-1.646-.042-.949-.052-1.234-.052-3.585s.01-2.642.052-3.585c.04-.864.184-1.334.307-1.646.16-.414.35-.71.66-1.02.31-.31.606-.5 1.02-.66.312-.123.782-.267 1.646-.307.943-.042 1.229-.052 3.585-.052z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>
            تمامی حقوق این وب‌سایت متعلق به کانسپتو می‌باشد. ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
