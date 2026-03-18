"use client";

import { Hero } from "@/components/sections/hero";
import Tagline from "@/components/Tagline";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Services } from "@/components/sections/services";
import { Navbar } from "@/components/layout/navbar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ProblemCards } from "@/components/sections/problem-cards";
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
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-20 bg-gray-200 mb-8"></div>
          <div className="h-96 bg-gray-200 mb-8"></div>
          <div className="h-32 bg-gray-200 mb-8"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" suppressHydrationWarning>
      <Navbar />
      <Hero />
      <Tagline />
      <ProblemSolution />
      <ProblemCards />
      <Services />
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
