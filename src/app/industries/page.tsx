import { Metadata } from "next";
import { useEffect, useState } from "react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesSelector from "@/components/industries/IndustriesSelector";
import IndustriesComparison from "@/components/industries/IndustriesComparison";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Industries — Content Writing for SaaS, Startups & Consulting",
  description: "WordPinchh creates content for SaaS, startups, consulting firms and professional services. Industry-specific content that ranks and converts.",
};

export default function IndustriesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/20">Loading...</div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden max-w-[100vw]">
      <IndustriesHero />
      <IndustriesSelector />
      <IndustriesComparison />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
}
