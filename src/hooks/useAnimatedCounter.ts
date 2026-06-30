"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface AnimatedCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  enabled?: boolean;
  delay?: number;
}

export function useAnimatedCounter(options: AnimatedCounterOptions) {
  const { end, duration = 2000, start = 0, enabled = true, delay = 0 } = options;
  const [value, setValue] = useState(start);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const startedRef = useRef(false);

  const animate = useCallback(() => {
    if (!startTimeRef.current) {
      startTimeRef.current = performance.now();
    }

    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(start + (end - start) * easeOutQuart);

    setValue(current);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setValue(end);
    }
  }, [start, end, duration]);

  useEffect(() => {
    if (!enabled || startedRef.current) return;
    startedRef.current = true;

    const timeout = setTimeout(() => {
      startTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, animate, delay]);

  return value;
}