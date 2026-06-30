"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  dark?: boolean;
  containerClassName?: string;
  children: ReactNode;
}

export function Section({ className, dark, containerClassName, children, ...props }: SectionProps) {
  return (
    <motion.section
      className={cn(
        "relative py-16 lg:py-24 xl:py-32 overflow-hidden",
        dark ? "bg-charcoal text-white" : "bg-white text-charcoal",
        className
      )}
      {...props}
    >
      <div className={cn("container-main", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}