"use client";

import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { Portfolio } from "@/components/sections/portfolio";
import { Insights } from "@/components/sections/insights";
import { Services } from "@/components/sections/services";
import { Cta } from "@/components/sections/cta";
import { Navbar } from "@/components/layout/navbar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { WhyWordpinchh } from "@/components/sections/why-wordpinchh";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProblemSolution />
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
