"use client";

import { useEffect, useState } from "react";

export function FinalCTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-25 text-center relative overflow-hidden"
      style={{ background: '#020202' }}
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(202,255,74,0.08) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.015) 0%, transparent 50%)
          `
        }}
      />

      {/* Animated Background Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(60px, 18vw, 220px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.035)',
          letterSpacing: '-0.04em',
          animation: 'float 6s ease-in-out infinite',
          whiteSpace: 'nowrap'
        }}
      >
        NOW
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Label */}
        <div
          className="mb-6 inline-block px-4 py-2 rounded-full"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(11px, 2.5vw, 18px)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--home-muted)',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          The best time to start was a year ago.
        </div>

        {/* Headline */}
        <h2
          className="mb-7"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(2.5rem, 10vw, 8rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--home-text)'
          }}
        >
          The second best time<br />
          <span
            className="outline"
            style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
              color: 'transparent'
            }}
          >
            is now.
          </span>
        </h2>

        {/* Body */}
        <p
          className="max-w-[700px] mx-auto mb-10 lg:mb-12"
          style={{
            fontSize: 'clamp(15px, 3.5vw, 22px)',
            lineHeight: 1.6,
            color: 'var(--home-muted)',
            fontStyle: 'italic',
            fontFamily: 'var(--font-inter)'
          }}
        >
          Your expertise deserves an audience. Let's build one.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 no-underline rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: 'clamp(14px, 3vw, 18px) clamp(24px, 5vw, 36px)',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #caff4a 0%, #b8e539 100%)',
              color: '#000000',
              boxShadow: '0 8px 32px rgba(202,255,74,0.25)'
            }}
          >
            <span className="relative z-10">Book a Strategy Call →</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)' }}
            />
          </a>
          
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 no-underline rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: 'clamp(14px, 3vw, 18px) clamp(24px, 5vw, 36px)',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              color: 'var(--home-text)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <span className="relative z-10">Get Your Free Content Audit</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, rgba(202,255,74,0.08) 0%, transparent 100%)' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}