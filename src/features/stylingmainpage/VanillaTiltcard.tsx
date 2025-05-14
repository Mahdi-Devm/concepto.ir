"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

interface VanillaTiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  gyroscope?: boolean;
  scale?: number;
  perspective?: number;
  [key: string]: any;
}

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
  const tiltRef = useRef<(HTMLDivElement & { vanillaTilt?: any }) | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 600,
        glare: true,
        "max-glare": 0.25,
        gyroscope: false,
        scale: 1.03,
        perspective: 1000,
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
