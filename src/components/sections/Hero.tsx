"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { HERO_STATS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const bgY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 bg-gradient-to-br from-brand-blue via-charcoal to-charcoal"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.hero.background})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${IMAGES.patterns.grid})` }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal/90" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-brand-gold/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-1/3 right-[15%] w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 opacity-10"
        style={{ backgroundImage: `url(${IMAGES.hero.sunburst})`, backgroundSize: "contain" }}
      />

      <div className="absolute bottom-1/4 left-[10%] w-3 h-3 rounded-full bg-brand-gold/30 blur-[2px]" />
      <div className="absolute top-1/3 right-[20%] w-2 h-2 rounded-full bg-brand-gold/20 blur-[1px]" />
      <div className="absolute bottom-1/2 left-[30%] w-1.5 h-1.5 rounded-full bg-brand-blue/40 blur-[1px]" />

      <div className="relative z-10 container-main flex flex-col justify-center min-h-screen pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-caption text-white/80 uppercase tracking-wider font-medium">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              Premium Solar & Water Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-display-xl text-white leading-[0.95] mb-6 text-balance"
          >
            Solar Energy &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
              Water Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-lg text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            Reliable solar installations, borehole drilling, and water infrastructure solutions
            designed for homes, farms, schools, commercial properties, and communities across Zimbabwe.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <MagneticButton>
              <Button variant="primary" size="lg" className="group text-body-lg">
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="glass rounded-2xl p-5 lg:p-6 text-center hover:shadow-glass-lg transition-all duration-350 hover:-translate-y-1 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="font-display font-bold text-display-sm text-brand-gold mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-body-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        >
          <span className="text-caption uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}