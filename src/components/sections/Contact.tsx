"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CONTACT_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";

const contactDetails = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: CONTACT_INFO.phone },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: CONTACT_INFO.email },
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: CONTACT_INFO.address },
  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: CONTACT_INFO.hours },
];

export function Contact() {
  return (
    <section id="contact" className="relative section-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${IMAGES.patterns.dots})` }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-gold">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-display font-bold text-display-md text-white leading-tight mb-6">
                Ready To Power Your Property?
              </h2>
              <p className="text-body-lg text-white/60 max-w-lg">
                Contact us today for a free consultation and quote. Let&apos;s discuss how we can
                help you achieve energy independence and water security.
              </p>
            </div>

            <StaggerContainer staggerDelay={0.12} className="space-y-5">
              {contactDetails.map((detail) => (
                <StaggerItem key={detail.label}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold/10 transition-colors duration-250">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-caption uppercase tracking-wider text-white/40 mb-1">
                        {detail.label}
                      </div>
                      <div className="text-body-md text-white/80 font-medium">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="font-display font-semibold text-heading-sm text-white mb-6">
                Get Free Quote
              </h3>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label-field">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-field">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label-field">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="input-field"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="label-field">Service Required</label>
                    <select id="service" className="input-field">
                      <option value="" className="bg-charcoal">Select a service</option>
                      <option value="solar" className="bg-charcoal">Solar Installation</option>
                      <option value="borehole" className="bg-charcoal">Borehole Drilling</option>
                      <option value="pump" className="bg-charcoal">Solar Water Pump</option>
                      <option value="storage" className="bg-charcoal">Water Storage</option>
                      <option value="backup" className="bg-charcoal">Backup Power</option>
                      <option value="maintenance" className="bg-charcoal">Maintenance</option>
                      <option value="other" className="bg-charcoal">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="label-field">Location</label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Your location"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label-field">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your project"
                    className="input-field resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full group text-body-lg">
                  <Send className="w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}