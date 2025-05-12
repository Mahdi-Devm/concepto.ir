"use client";
import CountUp from "./CountUp";

interface Data {
  investors: number;
  activeCompanies: number;
  investmentAmount: number;
}

const NumberContent: React.FC<{ data: Data }> = ({
  data = {
    investors: 1250,
    activeCompanies: 842,
    investmentAmount: 725,
  },
}) => {
  return (
    <section className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center" dir="rtl">
        <h2 className="text-lg sm:text-3xl mb-6 sm:mb-8 font-bold text-[#1a73e9] bg-[#ffffff] p-2 rounded-lg shadow-sm">
          <span className="relative flex items-center">
            <span className="absolute inline-flex h-3 w-2 md:w-1  animate-ping rounded-full bg-sky-400 opacity-50"></span>
            <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-sky-500"></span>
          </span>
          سرمایه‌گذاری و فعالیت شرکت‌ها
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div className="flex flex-col items-center gap-4">
            <CountUp
              start={0}
              end={data.investors}
              duration={1500}
              separator=","
              bgColor="#FFECB3"
            />
            <h3 className="text-lg sm:text-xl font-semibold">سرمایه‌گذاران</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CountUp
              start={0}
              end={data.activeCompanies}
              duration={1500}
              separator=","
              bgColor="#E3F2FD"
            />
            <h3 className="text-lg sm:text-xl font-semibold">شرکت‌های فعال</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CountUp
              start={0}
              end={data.investmentAmount}
              duration={1500}
              separator=","
              bgColor="#E8F5E9"
            />
            <h3 className="text-lg sm:text-xl font-semibold">
              میلیارد تومان سرمایه‌گذاری
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberContent;
