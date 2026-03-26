"use client";

import Link from 'next/link';

export function PrivacyHeader() {
  return (
    <header 
      className="sticky top-0 z-100 flex items-center justify-between px-12 py-4.5 lg:px-48"
      style={{ background: '#1a1410' }}
    >
      <Link 
        href="/"
        className="text-[23px] text-[#faf8f4] no-underline"
        style={{ 
          fontFamily: "var(--font-playfair-display)",
          letterSpacing: '-0.5px'
        }}
      >
        Word<span style={{ color: '#c8623a', fontStyle: 'italic' }}>pinchh</span>
      </Link>
      
      <span 
        className="text-xs font-medium tracking-[0.12em] uppercase text-[#8a7a6e] border border-[#e0d5c8] px-3.5 py-1.25 rounded-full"
        style={{ 
          fontFamily: "var(--font-dm-sans)",
          background: '#f3ede3'
        }}
      >
        Legal
      </span>
    </header>
  );
}
