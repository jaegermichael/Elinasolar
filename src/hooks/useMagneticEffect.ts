"use client";

import { useRef, useCallback } from "react";
import { useMotionValue, useTransform, useSpring } from "framer-motion";

interface MagneticOptions {
  strength?: number;
  damping?: number;
  stiffness?: number;
}

export function useMagneticEffect(options: MagneticOptions = {}) {
  const { strength = 0.3, damping = 15, stiffness = 150 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(useTransform(mouseX, [-100, 100], [-strength * 30, strength * 30]), {
    damping,
    stiffness,
  });
  const y = useSpring(useTransform(mouseY, [-100, 100], [-strength * 30, strength * 30]), {
    damping,
    stiffness,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;
        mouseX.set(dx);
        mouseY.set(dy);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}