"use client";

import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Team } from "@/components/sections/Team";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ServicesHero />
      <ProjectShowcase />
      <Team />
      <ServicesGrid />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}