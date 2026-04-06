import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ManifestoSection from "@/components/about/AboutManifesto";
import AboutContrast from "@/components/about/AboutContrast";
import AboutCTA from "@/components/about/AboutCTA";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Content Writing Agency Mumbai — About WordPinchh Agency",
  description: "Learn about WordPinchh agency, a leading content writing agency in Mumbai. We help SaaS startups and consulting firms dominate Google search and AI-generated answers with strategic content.",
  keywords: ["content writing agency Mumbai", "WordPinchh agency", "Mumbai content writers", "SaaS content agency", "consulting firm content", "AI content strategy"],
};

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen relative" style={{ 
      background: 'var(--about-paper)', 
      color: 'var(--about-ink)',
      fontFamily: "'Libre Baskerville', serif",
      overflowX: 'hidden',
      paddingTop: '60px'
    }}>

      {/* CONTENT */}
      <div className="relative z-10">
        <AboutHero />
        <ManifestoSection />
        <AboutContrast />
        <AboutCTA />
        <FinalCTASection />
        <FooterSection />
      </div>
    </div>
  );
}
