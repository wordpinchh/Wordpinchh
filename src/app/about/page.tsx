import AboutHero from "@/components/about/AboutHero";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutContrast from "@/components/about/AboutContrast";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen relative">
      
      {/* GRAIN TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.05] z-[1]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <AboutHero />
        <AboutManifesto />
        <AboutContrast />
        <AboutCTA />
      </div>
    </div>
  );
}
