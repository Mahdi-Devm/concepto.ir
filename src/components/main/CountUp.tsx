import React, { useState, useEffect, useRef } from "react";

interface CountUpProps {
  start: number;
  end: number;
  duration?: number;
  separator?: string;
  prefix?: string;
  suffix?: string;
  bgColor?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 1000,
  separator = ",",
  prefix = "",
  suffix = "",
  bgColor = "#FFECB3",
}) => {
  const [count, setCount] = useState<number>(start);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }
  }, [isVisible, start, end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // تغییرات زمانی که 50% از المان در صفحه دیده شود
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div
        className="w-32 h-12 rounded-full flex items-center justify-center mb-2"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-4xl font-bold">
          {prefix}
          {formatNumber(count)}
          {suffix}
        </span>
      </div>
    </div>
  );
};

export default CountUp;
