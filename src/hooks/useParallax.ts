"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

interface ParallaxOptions {
  offset?: number;
  damping?: number;
  stiffness?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { offset = 50, damping = 20, stiffness = 100 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping,
    stiffness,
  });

  const y = useTransform(smoothProgress, [0, 1], [offset, -offset]);

  return { ref, y, scrollYProgress: smoothProgress };
}

export function useParallaxValue(scrollYProgress: MotionValue<number>) {
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  return { y, opacity };
}

export function useParallaxScale(scrollYProgress: MotionValue<number>) {
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  return { scale };
}

export function useParallaxRotate(scrollYProgress: MotionValue<number>) {
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  return { rotate };
}