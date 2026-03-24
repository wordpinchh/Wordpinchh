"use client";

import { useEffect, useState } from "react";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesSelector from "@/components/industries/IndustriesSelector";
import IndustriesComparison from "@/components/industries/IndustriesComparison";

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
    <div className="min-h-screen bg-black">
      <IndustriesHero />
      <IndustriesSelector />
      <IndustriesComparison />
    </div>
  );
}
