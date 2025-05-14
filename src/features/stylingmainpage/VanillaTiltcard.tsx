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
  [key: string]: unknown;
}

interface VanillaTiltcardProps {
  children: ReactNode;
  className?: string;
  options?: VanillaTiltOptions;
}

interface TiltElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

const VanillaTiltcard: React.FC<VanillaTiltcardProps> = ({
  children,
  className = "",
  options = {},
}) => {
  const tiltRef = useRef<TiltElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
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
      node?.vanillaTilt?.destroy?.();
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
