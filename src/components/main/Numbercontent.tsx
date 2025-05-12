import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export async function getServerSideProps() {
  const data = {
    investors: 200, // تعداد سرمایه‌گذاران
    activeCompanies: 120, // تعداد شرکت‌های فعال
    investmentAmount: 5000, // میزان سرمایه‌گذاری
  };

  // داده‌ها به عنوان props به کامپوننت ارسال می‌شوند
  return {
    props: {
      data,
    },
  };
}
function Numbercontent({ data }: { data: any }) {
  return <div>Numbercontent</div>;
}

export default Numbercontent;
