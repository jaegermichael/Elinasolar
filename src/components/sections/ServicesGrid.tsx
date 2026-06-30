"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ArrowRight } from "lucide-react";

const gridImages = [
  IMAGES.services.solarInstallations,
  IMAGES.services.boreholeDrilling,
  IMAGES.services.solarWaterPumps,
  IMAGES.services.waterStorage,
  IMAGES.services.backupPower,
  IMAGES.services.maintenance,
];

export function ServicesGrid() {
  return (
    <section className="relative section-light overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url(${IMAGES.patterns.grid})` }} />
      <div className="container-main relative z-10">
        <ScrollReveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-blue">
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-bold text-display-md text-charcoal">
            Comprehensive <span className="text-brand-blue">Energy & Water</span> Solutions
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.id}>
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-brand-gold/20 transition-all duration-350 hover:shadow-glass-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-blue/20 to-brand-gold/20">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${gridImages[index]})` }}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-350">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-heading-sm text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feat) => (
                      <span
                        key={feat}
                        className="px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-blue/5 to-brand-gold/5 text-caption text-gray-500 border border-brand-blue/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.cta.href}
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-brand-blue hover:text-brand-gold transition-colors group/link"
                  >
                    {service.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}