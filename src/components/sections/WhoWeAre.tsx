"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FEATURES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Star } from "lucide-react";

export function WhoWeAre() {
  return (
    <section id="about" className="relative section-light overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StaggerContainer staggerDelay={0.15}>
                <StaggerItem>
                  <div className="space-y-4">
                    <div className="image-container aspect-[3/4] group cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-blue/40 rounded-2xl overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${IMAGES.about.solar})` }}
                        />
                      </div>
                    </div>
                    <div className="image-container aspect-square group cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-brand-green/30 to-brand-blue/30 rounded-2xl overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${IMAGES.about.borehole})` }}
                        />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="pt-8">
                    <div className="image-container aspect-square group cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-blue/20 rounded-2xl overflow-hidden">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${IMAGES.about.wind})` }}
                        />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-blue">
                  Who We Are
                </span>
              </div>

              <h2 className="font-display font-bold text-display-md text-charcoal leading-tight">
                Sustainable Energy.{" "}
                <span className="text-brand-blue">Reliable Water.</span> Lasting Impact.
              </h2>

              <p className="text-body-md text-gray-600 leading-relaxed">
                We help homeowners, businesses, farms, schools, and institutions achieve
                energy independence and water security through professional solar and
                borehole solutions tailored to Zimbabwe&apos;s unique needs.
              </p>

              <Button variant="dark" size="lg" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-yellow-300 flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-charcoal" fill="currentColor" />
                    </div>
                  ))}
                </div>
                <span className="text-body-sm text-gray-500 font-medium">
                  500+ Happy Customers
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-16 lg:mt-20">
          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group relative p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-gold/20 transition-all duration-350 hover:shadow-glass-lg hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-350">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-semibold text-heading-sm text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
}