"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ReferencesSection from "@/components/ReferencesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ReferencesSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyUsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}