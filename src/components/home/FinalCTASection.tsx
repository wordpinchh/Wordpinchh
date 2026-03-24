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
      {/* Premium Background with Multiple Layers */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(202,255,74,0.08) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.015) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Animated Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(80px, 16vw, 220px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.035)',
          letterSpacing: '-0.04em',
          animation: 'float 6s ease-in-out infinite',
          textShadow: '0 0 40px rgba(255,255,255,0.05)'
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
            fontSize: 'clamp(14px, 3.5vw, 20px)',
            letterSpacing: '0.22em',
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
            fontSize: 'clamp(2.8rem, 10vw, 8rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--home-text)',
            textShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          The second best time<br />
          <span className="outline" style={{
            WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
            color: 'transparent'
          }}>is now.</span>
        </h2>

        {/* Body */}
        <p 
          className="max-w-[800px] mx-auto mb-12 whitespace-nowrap"
          style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            lineHeight: 1.5,
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
            className="inline-flex items-center gap-2.5 px-9 py-4.5 no-underline rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden group"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '18px 36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #caff4a 0%, #b8e539 100%)',
              color: '#000000',
              boxShadow: '0 8px 32px rgba(202,255,74,0.25), 0 0 0 1px rgba(202,255,74,0.1)'
            }}
          >
            <span className="relative z-10">Book a Strategy Call →</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)'
              }}
            />
          </a>
          <a 
            href="#audit" 
            className="inline-flex items-center gap-2.5 px-9 py-4.5 no-underline rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-xl relative overflow-hidden group"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(14px, 3.5vw, 20px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '18px 36px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              color: 'var(--home-text)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }}
          >
            <span className="relative z-10">Get Your Free Content Audit</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(202,255,74,0.08) 0%, transparent 100%)'
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
