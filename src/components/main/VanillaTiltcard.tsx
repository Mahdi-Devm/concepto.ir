"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import VanillaTilt, { VanillaTiltOptions } from "vanilla-tilt";

interface VanillaTiltcardProps {
  children: ReactNode;
  className?: string;
  options?: VanillaTiltOptions;
}

const VanillaTiltcard: React.FC<VanillaTiltcardProps> = ({
  children,
  className = "",
  options = {},
}) => {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10, // حساسیت مناسب برای کاردهای بزرگ
        speed: 600, // سرعت انیمیشن بیشتر برای حرکت نرم
        glare: true,
        "max-glare": 0.25, // شدت تابش نور متعادل‌تر
        gyroscope: false,
        scale: 1.03, // کمی بزرگ‌تر شدن کارت در هنگام حرکت
        perspective: 1000, // ایجاد عمق بیشتر برای احساس حرکت طبیعی
        "ease-in-out": true, // نرم‌تر کردن انیمیشن
        ...options,
      });
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy?.();
    };
  }, [options]);

  return (
    <div
      ref={tiltRef}
      className={`${className} transition-transform duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default VanillaTiltcard;
