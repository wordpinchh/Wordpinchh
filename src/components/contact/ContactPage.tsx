"use client";

import { useState, useEffect } from "react";
import ContactLeftPanel from "@/components/contact/ContactLeftPanel";
import ContactRightPanel from "@/components/contact/ContactRightPanel";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative" style={{ 
      background: 'var(--contact-bg)', 
      color: 'var(--contact-text)',
      fontFamily: "'Libre Baskerville', serif",
      overflowX: 'hidden',
      paddingTop: '60px'
    }}>
      <ContactLeftPanel />
      <ContactRightPanel />
    </div>
  );
}
