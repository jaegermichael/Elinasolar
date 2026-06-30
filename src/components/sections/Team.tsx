"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TEAM } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ExternalLink, Mail } from "lucide-react";

const teamImages = [
  IMAGES.team,
  IMAGES.team,
  IMAGES.team,
  IMAGES.team,
];

export function Team() {
  return (
    <section className="relative section-light overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main">
        <ScrollReveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-blue">
              Meet Our Experts
            </span>
          </div>
          <h2 className="font-display font-bold text-display-md text-charcoal">
            The People Behind Every <span className="text-brand-blue">Successful Installation</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {TEAM.map((member, index) => (
            <StaggerItem key={member.id}>
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4] bg-gradient-to-br from-brand-blue/10 to-brand-gold/10">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${teamImages[index]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-gold hover:text-charcoal transition-colors cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-gold hover:text-charcoal transition-colors cursor-pointer">
                      <Mail className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-heading-sm text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-body-sm text-brand-blue font-medium mb-2">{member.role}</p>
                <p className="text-body-sm text-gray-500">{member.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}