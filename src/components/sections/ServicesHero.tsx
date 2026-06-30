"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Sun } from "lucide-react";

const serviceImages = [
  IMAGES.services.solarInstallations,
  IMAGES.services.boreholeDrilling,
  IMAGES.services.solarWaterPumps,
  IMAGES.services.waterStorage,
  IMAGES.services.backupPower,
  IMAGES.services.maintenance,
];

export function ServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];
  const services = SERVICES.slice(0, 6);

  return (
    <section id="services" className="relative section-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${IMAGES.patterns.dots})` }} />
      <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-8">
            <h2 className="font-display font-bold text-display-lg text-white leading-tight">
              Harness The Power Of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
                The Sun And Water
              </span>
            </h2>

            <p className="text-body-lg text-white/60 leading-relaxed">
              From residential solar installations to industrial borehole drilling, we deliver
              comprehensive energy and water solutions that power homes, businesses, and communities
              across Zimbabwe with reliability and expertise.
            </p>

            <StaggerContainer staggerDelay={0.08} className="space-y-3">
              {services.map((service, index) => (
                <StaggerItem key={service.id}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-350 group flex items-center gap-4 ${
                      activeIndex === index
                        ? "bg-white/10 border border-brand-gold/30"
                        : "bg-transparent border border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
                        activeIndex === index
                          ? "bg-brand-gold text-charcoal"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display font-medium transition-colors ${
                        activeIndex === index ? "text-white" : "text-white/50"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/30 to-charcoal relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${serviceImages[activeIndex]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 p-8 lg:p-10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/20 backdrop-blur-sm flex items-center justify-center">
                        <Sun className="w-5 h-5 text-brand-gold" />
                      </div>
                      <span className="text-caption uppercase tracking-widest text-brand-gold font-medium">
                        Featured Service
                      </span>
                    </div>
                    <motion.h3
                      key={`title-${activeIndex}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-display font-bold text-display-sm text-white mb-3"
                    >
                      {activeService.title}
                    </motion.h3>
                    <motion.p
                      key={`desc-${activeIndex}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="text-body-md text-white/70 mb-6 max-w-xl"
                    >
                      {activeService.description}
                    </motion.p>
                    <motion.div
                      key={`tags-${activeIndex}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 mb-6"
                    >
                      {activeService.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-caption text-white/80 border border-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </motion.div>
                    <motion.div
                      key={`cta-${activeIndex}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button variant="primary" className="group">
                        Learn More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}