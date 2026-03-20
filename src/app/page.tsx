"use client";

import { Hero } from "@/components/sections/hero";
import Tagline from "@/components/Tagline";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Services, AIVisibility } from "@/components/sections/services";
import { Navbar } from "@/components/layout/navbar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { WhyWordpinchh } from "@/components/sections/why-wordpinchh";
import { useEffect, useState } from "react";
import LeadMagnet from "@/components/LeadMagnet";
import SectionSpacer from "@/components/SectionSpacer";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import Footer from "@/components/Footer";
import BottomCTA from "@/components/BottomCTA";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Tagline />
      <ProblemSolution />
      <Services />
      <AIVisibility />
      <WhyWordpinchh />
      <LeadMagnet />
      <LetsWorkTogether />
      <Footer />
      <BottomCTA />
      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
