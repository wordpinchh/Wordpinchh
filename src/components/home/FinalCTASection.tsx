"use client";

import { useEffect, useState } from "react";

export function FinalCTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="px-16 py-25 text-center relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(202,255,74,0.06) 0%, transparent 60%)'
        }}
      />

      {/* Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-fahkwang)',
          fontSize: 'clamp(80px, 16vw, 220px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.04em'
        }}
      >
        NOW
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Label */}
        <div 
          className="mb-6"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--home-muted)'
          }}
        >
          The best time to start was a year ago.
        </div>

        {/* Headline */}
        <h2 
          className="mb-7"
          style={{
            fontFamily: 'var(--font-fahkwang)',
            fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--home-text)'
          }}
        >
          The second best time<br />
          <span style={{
            WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
            color: 'transparent'
          }}>is now.</span>
        </h2>

        {/* Body */}
        <p 
          className="max-w-[500px] mx-auto mb-12"
          style={{
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'var(--home-muted)',
            fontStyle: 'italic',
            fontFamily: 'var(--font-inter)'
          }}
        >
          Your expertise deserves an audience. Let's build one.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap relative">
          <a 
            href="#" 
            className="inline-flex items-center gap-2.5 px-9 py-4.5 bg-(--home-lime) text-(--home-bg) no-underline rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              fontFamily: 'var(--font-fahkwang)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Book a Strategy Call →
          </a>
          <a 
            href="#audit" 
            className="inline-flex items-center gap-2.5 px-9 py-4.5 bg-transparent text-(--home-text) border border-[rgba(255,255,255,0.13)] no-underline rounded-lg transition-all duration-200 hover:border-(--home-text) hover:bg-[rgba(255,255,255,0.04)]"
            style={{
              fontFamily: 'var(--font-fahkwang)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            Get Your Free Content Audit
          </a>
        </div>
      </div>
    </section>
  );
}
