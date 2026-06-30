"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal/80 backdrop-blur-glass border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/15 shadow-sm shadow-black/10 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="Eliana Solar & Boreholes logo"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-white text-heading-sm">
                Eliana
              </span>
              <span className="block text-caption text-white/60 -mt-1">
                Solar & Boreholes
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body-sm text-white/70 hover:text-white transition-colors duration-250 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="hidden sm:flex">
              Get Quote
            </Button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal/95 backdrop-blur-glass border-t border-white/10"
          >
            <div className="container-main py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-heading-sm text-white/70 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" className="w-full mt-4">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}