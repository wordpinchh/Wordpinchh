import AboutHero from "@/components/about/AboutHero";
import ManifestoSection from "@/components/about/AboutManifesto";
import AboutContrast from "@/components/about/AboutContrast";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen relative" style={{ 
      background: 'var(--about-paper)', 
      color: 'var(--about-ink)',
      fontFamily: "'Libre Baskerville', serif",
      overflowX: 'hidden',
      paddingTop: '60px'
    }}>
      
      {/* GRAIN TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.05] z-1"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.06'/%3E%3C/svg%3E\")",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <AboutHero />
        <ManifestoSection />
        <AboutContrast />
        <AboutCTA />
      </div>
    </div>
  );
}
