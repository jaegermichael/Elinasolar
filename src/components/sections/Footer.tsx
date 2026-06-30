"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SITE_NAME, SITE_TAGLINE, FOOTER_SECTIONS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Sun, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url(${IMAGES.patterns.grid})` }} />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ScrollReveal direction="up" className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-yellow-400 flex items-center justify-center">
                <Sun className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <span className="font-display font-semibold text-white text-heading-sm">
                  Eliana
                </span>
                <span className="block text-caption text-white/40 -mt-1">
                  Solar & Boreholes
                </span>
              </div>
            </a>
            <p className="text-body-sm text-white/50 leading-relaxed max-w-sm">
              {SITE_TAGLINE}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-brand-gold hover:text-charcoal transition-colors duration-250 text-caption font-semibold"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="lg:col-span-5 grid sm:grid-cols-2 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <StaggerItem key={section.title}>
                <h4 className="font-display font-semibold text-heading-sm text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-body-sm text-white/50 hover:text-brand-gold transition-colors duration-250"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-3">
            <h4 className="font-display font-semibold text-heading-sm text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { label: "Address", value: CONTACT_INFO.address },
              ].map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-body-sm text-white/50 hover:text-brand-gold transition-colors duration-250"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-body-sm text-white/50">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-caption text-white/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-brand-gold hover:text-charcoal transition-all duration-250"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}