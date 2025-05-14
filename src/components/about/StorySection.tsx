"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function StorySection() {
  const [showMore, setShowMore] = useState(false);

  const fullText = `در سال ۲۰۱۵، یک گروه از افراد متخصص و متعهد با تجربه‌های گوناگون در حوزه‌های فناوری، کسب‌وکار و بازاریابی، با هم متحد شدند تا یک پلتفرم برجسته برای معرفی استارتاپ‌ها و شرکت‌های نوپا ایجاد کنند. با توجه به نیاز روزافزون جامعه به دسترسی آسان‌تر به اطلاعات درباره استارتاپ‌ها و فرصت‌های کسب‌وکار جدید، این گروه تصمیم گرفت تا با تلاش و هماهنگی فراوان، پلتفرمی راه‌اندازی کنند که به شرکت‌ها کمک کند تا به دیده شدن بیشتری دست یابند. توسعه و راه‌اندازی این پلتفرم، با مطالعه دقیق بازار و نیازهای جامعه هدف، به یک پروژه جامع و بلندمدت تبدیل شد. با استفاده از تخصص‌های فنی، بازاریابی و مدیریتی خود، این گروه به سرعت توانست به رشد و پیشرفت قابل توجهی دست یابد. از آن زمان تاکنون، این استارتاپ به عنوان یکی از منابع معتبر و قابل اعتماد برای معرفی استارتاپ‌ها و شرکت‌های نوپا به بازار شناخته شده است و همچنین به عنوان یک پلتفرم حیاتی برای ارتباطات تجاری و بنیان‌گذاران جوان محسوب می‌شود.`;

  const shortText = fullText.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div className="flex flex-col lg:flex-row mt-20 gap-10">
      <div className="lg:w-1/2 w-full text-end space-y-5 relative">
        <h1 className="text-3xl font-semibold border-b border-stone-400 pb-2">
          داستان ما
        </h1>

        <AnimatePresence initial={false}>
          <motion.div
            key={showMore ? "open" : "closed"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="text-[#444859] leading-10">
              {showMore ? fullText : shortText}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-600  border-1 p-2 rounded-xl hover:text-white  hover:bg-blue-600 text-sm transition-all"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
        </motion.button>
      </div>

      <motion.div
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          width={500}
          height={100}
          src="/about/PDPAbout.png"
          alt="about"
          className="h-120 rounded-xl "
        />
      </motion.div>
    </div>
  );
}

export default StorySection;
