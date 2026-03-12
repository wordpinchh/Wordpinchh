"use client";

import { Hero } from "@/components/sections/hero";
import Tagline from "@/components/Tagline";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Services } from "@/components/sections/services";
import { Cta } from "@/components/sections/cta";
import { Navbar } from "@/components/layout/navbar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ProblemCards } from "@/components/sections/problem-cards";
import { WhyWordpinchh } from "@/components/sections/why-wordpinchh";
import { useEffect, useState } from "react";

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
        <div className="fixed top-0 left-0 right-0 z-50 bg-black">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-2xl font-bold text-white">
              Wordpinch<span className="text-accent">h</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <span key={item.name} className="text-white/90">
                  {item.name}
                </span>
              ))}
            </div>
            <button className="bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-6 py-2 rounded-lg">
              Get Free Content Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Tagline />
      <ProblemSolution />
      <ProblemCards />
      <HowItWorks />
      <Results />
      <Portfolio />
      <Insights />
      <Services />
      <WhyWordpinchh />
      <Cta />
    </div>
  );
}
