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

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  options?: VanillaTiltOptions;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  options = {},
}) => {
  const tiltRef = useRef<HTMLDivElement & { vanillaTilt?: any }>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        ...options,
      });
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy?.();
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;
