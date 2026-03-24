"use client";

import { useEffect, useState } from "react";

export function TickerSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tickerItems = [
    'SEO Blog Writing',
    'LinkedIn Ghostwriting', 
    'GEO Optimization',
    'AEO Optimization',
    'Website Copy',
    'Landing Page Copy',
    'AI Content Strategy',
    'Content that Converts'
  ];

  if (!mounted) return null;

  return (
    <div 
      className="border-t border-b border-[rgba(255,255,255,0.07)] py-3 overflow-hidden whitespace-nowrap relative"
      style={{ 
        background: 'linear-gradient(90deg, rgba(14,13,10,0.9) 0%, rgba(22,21,16,0.95) 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Premium Glow Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(202,255,74,0.02) 50%, transparent 100%)'
        }}
      />
      
      <div 
        className="inline-flex"
        style={{ animation: 'ticker 22s linear infinite' }}
      >
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span 
            key={index}
            className="flex items-center gap-5 px-10 transition-all duration-300 hover:scale-110"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: index % 3 === 0 ? 'var(--home-text)' : 
                     index % 3 === 1 ? 'var(--home-lime)' : 
                     'var(--home-text)',
              textShadow: index % 3 === 1 ? '0 0 10px rgba(202,255,74,0.3)' : 'none'
            }}
          >
            <span 
              className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
              style={{ 
                background: index % 3 === 0 ? 'var(--home-red)' : 'var(--home-lime)',
                boxShadow: index % 3 === 1 ? '0 0 6px rgba(202,255,74,0.5)' : 'none'
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
