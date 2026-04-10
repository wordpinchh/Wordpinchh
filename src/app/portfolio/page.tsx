"use client";

import { useState, useEffect } from "react";
import { portfolioSamples } from "@/data/portfolioSamples";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import LogoMarquee from "@/components/portfolio/LogoMarquee";
import FilterBarNew from "@/components/portfolio/FilterBarNew";
import PortfolioGridNew from "@/components/portfolio/PortfolioGridNew";
import GateModalNew from "@/components/portfolio/GateModalNew";
import ContentModalNew from "@/components/portfolio/ContentModalNew";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { FooterSection } from "@/components/home/FooterSection";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [gateOpen, setGateOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<any>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);

  // Manage body scroll when content modal opens/closes
  useEffect(() => {
    if (contentOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [contentOpen]);

  const openGate = (id: string) => {
    setPendingId(id);
    setGateOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGate = () => {
    setGateOpen(false);
    document.body.style.overflow = '';
    setPendingId(null);
  };

  const openContent = (id: string) => {
    const sample = portfolioSamples[id];
    if (!sample) return;
    
    setSelectedSample(sample);
    setContentOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContent = () => {
    setContentOpen(false);
    document.body.style.overflow = '';
  };

  const handleGateSubmit = () => {
    // In production: POST to your form endpoint here
    setGateOpen(false);
    setUnlocked(true);
    setTimeout(() => {
      closeGate();
      if (pendingId) {
        openContent(pendingId);
        setPendingId(null);
      }
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#0E0D0A] text-[#F0EDE6] overflow-x-hidden">
      
      
      {/* HEADER */}
      <PortfolioHeader />

      {/* LOGO MARQUEE */}
      <LogoMarquee />

      {/* FILTER BAR */}
      <FilterBarNew filter={filter} setFilter={setFilter} />

      {/* GRID */}
      <PortfolioGridNew filter={filter} openGate={openGate} />

      {/* GATE MODAL */}
      <GateModalNew 
        isOpen={gateOpen} 
        onClose={closeGate} 
        onUnlocked={handleGateSubmit}
        pendingId={pendingId}
      />

      {/* CONTENT MODAL */}
      <ContentModalNew 
        isOpen={contentOpen} 
        onClose={closeContent} 
        sample={selectedSample}
      />

      {/* FINAL CTA */}
      <FinalCTASection />
      
      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
