"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export function useImageReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 80 });

  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  const scale = useTransform(smoothProgress, [0, 1], [1.1, 1]);

  return { ref, clipPath, scale };
}