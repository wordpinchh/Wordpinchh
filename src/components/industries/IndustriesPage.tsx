"use client";

import { useEffect, useState } from "react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesSelector from "@/components/industries/IndustriesSelector";
import IndustriesComparison from "@/components/industries/IndustriesComparison";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function IndustriesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="industries-page min-h-screen relative" style={{ 
      background: 'var(--industries-bg)', 
      color: 'var(--industries-text)',
      fontFamily: "'Libre Baskerville', serif",
      overflowX: 'hidden',
      paddingTop: '60px'
    }}>
      <IndustriesHero />
      <IndustriesSelector />
      <IndustriesComparison />
      <FooterSection />
      <FinalCTASection />
    </div>
  );
}
