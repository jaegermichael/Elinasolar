"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { PROCESS_STEPS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

function StepConnector({ index, isLast }: { index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-full h-full"
        style={{ transformOrigin: "top" }}
      >
        <div className={`w-full h-full ${isLast ? "bg-gradient-to-b from-brand-gold/50 to-transparent" : "bg-brand-gold/30"}`} />
      </motion.div>
    </div>
  );
}

export function Process() {
  return (
    <section className="relative section-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${IMAGES.patterns.dots})` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-gold">
              Our Process
            </span>
          </div>
          <h2 className="font-display font-bold text-display-md text-white">
            How We <span className="text-brand-gold">Deliver Results</span>
          </h2>
          <p className="text-body-md text-white/50 max-w-2xl mx-auto mt-4">
            From initial consultation to ongoing support, our streamlined process ensures
            a seamless experience and exceptional outcomes.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold/30 via-brand-gold/10 to-transparent" />

          <StaggerContainer staggerDelay={0.15} className="space-y-8 lg:space-y-0 relative">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <StaggerItem key={step.step}>
                  <div className={`relative lg:flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <StepConnector index={index} isLast={index === PROCESS_STEPS.length - 1} />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`lg:w-1/2 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}
                    >
                      <div className={`inline-flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <span className="font-display font-bold text-display-sm text-brand-gold/30">
                          {String(step.step).padStart(2, "0")}
                        </span>
                        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-glow-gold">
                          {step.icon}
                        </span>
                      </div>
                      <div className={`inline-block p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm ${isEven ? "lg:text-right" : ""}`}>
                        <h3 className="font-display font-semibold text-heading-sm text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-body-sm text-white/50 max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}