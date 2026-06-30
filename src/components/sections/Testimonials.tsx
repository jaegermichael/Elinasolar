"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialImages = [
  IMAGES.testimonials,
  IMAGES.testimonials,
  IMAGES.testimonials,
  IMAGES.testimonials,
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="relative section-light overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="container-main">
        <ScrollReveal className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-caption uppercase tracking-[0.2em] font-medium text-brand-blue">
              Testimonials
            </span>
          </div>
          <h2 className="font-display font-bold text-display-md text-charcoal">
            What Our <span className="text-brand-blue">Clients Say</span>
          </h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-12"
            >
              <Quote className="w-12 h-12 text-brand-gold/30 mb-6" />
              <p className="text-body-lg text-gray-600 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonialImages[current]})` }}
                    />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-heading-sm text-charcoal">
                      {testimonial.author}
                    </div>
                    <div className="text-body-sm text-gray-500">
                      {testimonial.role}, {testimonial.location}
                    </div>
                    <div className="text-caption text-brand-blue/60">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-gold hover:text-charcoal flex items-center justify-center transition-colors duration-250"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-350 ${
                    index === current
                      ? "bg-brand-gold w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-gold hover:text-charcoal flex items-center justify-center transition-colors duration-250"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}