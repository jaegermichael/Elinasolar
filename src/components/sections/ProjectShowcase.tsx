"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { PROJECTS, METRICS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const projectImages = [
  IMAGES.projects.project1,
  IMAGES.projects.project2,
  IMAGES.projects.project3,
  IMAGES.projects.project4,
  IMAGES.projects.project5,
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="relative section-light overflow-hidden">
      <div className="absolute top-20 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="container-main">
        <ScrollReveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-blue">
              Our Work
            </span>
          </div>
          <h2 className="font-display font-bold text-display-md text-charcoal mb-4">
            Real Projects. <span className="text-brand-blue">Real Results.</span>
          </h2>
          <p className="text-body-md text-gray-500 max-w-2xl mx-auto">
            Showcase of our successful installations and infrastructure projects completed
            across Zimbabwe, delivering energy independence and water security.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-6">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <StaggerContainer staggerDelay={0.12} className="space-y-6">
              {[0, 1, 2].map((index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand-blue/10 to-brand-gold/10">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${projectImages[index]})` }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                      <h3 className="font-display font-semibold text-heading-sm text-white mb-1">
                        {PROJECTS[index].title}
                      </h3>
                      <p className="text-body-sm text-white/70">
                        {PROJECTS[index].location} &mdash; {PROJECTS[index].category}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5">
            <StaggerContainer staggerDelay={0.12} className="space-y-6">
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
                >
                  <div className="w-full h-full bg-gradient-to-br from-brand-gold/10 to-brand-blue/10">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${projectImages[3]})` }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                    <h3 className="font-display font-semibold text-heading-sm text-white mb-1">
                      {PROJECTS[3].title}
                    </h3>
                    <p className="text-body-sm text-white/70">
                      {PROJECTS[3].location} &mdash; {PROJECTS[3].category}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <div className="grid grid-cols-2 gap-4">
                  {[4, 5].map((index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-brand-blue/10 to-brand-gold/10">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${projectImages[index]})` }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                        <p className="text-body-sm text-white font-medium truncate">
                          {PROJECTS[index].title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-14 lg:mt-18">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {METRICS.map((metric) => (
              <StaggerItem key={metric.label}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-gold/20 transition-all duration-350 hover:shadow-glass-lg"
                >
                  <div className="font-display font-bold text-display-sm text-brand-blue mb-1">
                    {metric.value}
                  </div>
                  <div className="text-body-sm text-gray-500">{metric.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
}