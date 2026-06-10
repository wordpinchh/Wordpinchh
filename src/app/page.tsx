"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { TickerSection } from "@/components/home/TickerSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhySection } from "@/components/home/WhySection";
import { LeadMagnetSection } from "@/components/home/LeadMagnetSection";
import { ConsultationSection } from "@/components/home/ConsultationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { FooterSection } from "@/components/home/FooterSection";  
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen home-page" style={{ background: 'var(--home-bg)', color: 'var(--home-text)' }}>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WordPinchh",
            "url": "https://www.wordpinchh.org",
            "logo": "https://www.wordpinchh.org/wordpinchhlogo.webp",
            "description": "WordPinchh is a content writing agency in Mumbai specialising in SEO blog writing, LinkedIn ghostwriting, website copywriting, GEO and AEO for SaaS startups and consulting firms.",
            "sameAs": [
              "https://www.linkedin.com/company/wordpinchh",
              "https://twitter.com/wordpinchh",
              "https://www.instagram.com/wordpinchh"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Service",
              "email": "wordpinchh001@gmail.com"
            }
          })
        }}
      />

      <HeroSection />
      <TickerSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <LeadMagnetSection />
      <ConsultationSection />
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