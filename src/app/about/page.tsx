import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ManifestoSection from "@/components/about/AboutManifesto";
import AboutContrast from "@/components/about/AboutContrast";
import AboutCTA from "@/components/about/AboutCTA";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "About Us — WordPinchh Content Writing Agency Mumbai",
  description: "WordPinchh is a Mumbai-based content writing agency helping SaaS startups and consulting firms show up in Google search and AI-generated answers.",
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
