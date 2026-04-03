"use client";

import { Metadata } from "next";
import { useState, useEffect } from "react";
import ContactLeftPanel from "@/components/contact/ContactLeftPanel";
import ContactRightPanel from "@/components/contact/ContactRightPanel";

export const metadata: Metadata = {
  title: "Contact — Get Your Free Content Audit",
  description: "Get a free personalised content audit from WordPinchh. No pitch, no pressure — just an honest report on your content gaps within 48 hours.",
};

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#0B0B09] text-[#F0EDE6] overflow-x-hidden pt-16"
        style={{ position: 'relative' }}
      >
        {/* Grain Texture Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-9998"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\")",
          }}
        />
        <ContactLeftPanel />
        <ContactRightPanel />
      </div>
    </>
  );
}