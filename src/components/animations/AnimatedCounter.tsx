"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  labelClassName?: string;
  label?: string;
  formatValue?: (value: number) => string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  delay = 0,
  className,
  labelClassName,
  label,
  formatValue,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [displayedValue, setDisplayedValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const startTime = performance.now();
      let animationFrame: number;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime - delay;
        if (elapsed < 0) {
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);

        setDisplayedValue(Math.round(easedProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayedValue(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible, end, duration, delay, hasStarted]);

  const displayText = formatValue
    ? formatValue(displayedValue)
    : `${prefix}${displayedValue}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={cn("text-center", className)}
    >
      <div className="font-display font-bold text-display-sm text-brand-blue mb-1">
        {displayText}
      </div>
      {label && (
        <div className={cn("text-body-sm text-gray-500", labelClassName)}>
          {label}
        </div>
      )}
    </motion.div>
  );
}