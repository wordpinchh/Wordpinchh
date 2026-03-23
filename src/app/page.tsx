"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { TickerSection } from "@/components/home/TickerSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhySection } from "@/components/home/WhySection";
import { LeadMagnetSection } from "@/components/home/LeadMagnetSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { FooterSection } from "@/components/home/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen home-page" style={{ background: 'var(--home-bg)', color: 'var(--home-text)' }}>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <LeadMagnetSection />
      <FinalCTASection />
      <FooterSection />
      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
