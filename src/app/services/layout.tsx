"use client";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="services-page" style={{ background: "var(--bg)", minHeight: "100vh", width: "100%", fontFamily: "'Fraunces', serif" }}>
      <Navbar />
      <main>
        {children}
      </main>
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}
