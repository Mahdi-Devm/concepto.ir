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

interface TiltElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
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
  const tiltRef = useRef<TiltElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        ...options,
      });
    }

    return () => {
      node?.vanillaTilt?.destroy?.();
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;
