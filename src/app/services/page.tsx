"use client";

import ServicesNew from "@/components/sections/services-new";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/home/FooterSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", width: "100%" }}>
      <Navbar />
      <main>
        <ServicesNew />
      </main>
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}
