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
      className="border-t border-b border-[rgba(255,255,255,0.07)] py-3 overflow-hidden whitespace-nowrap"
      style={{ background: 'var(--home-surface)' }}
    >
      <div 
        className="inline-flex"
        style={{ animation: 'ticker 22s linear infinite' }}
      >
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span 
            key={index}
            className="flex items-center gap-5 px-10"
            style={{
              fontFamily: 'var(--font-fahkwang)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: index % 3 === 0 ? 'var(--home-text)' : 
                     index % 3 === 1 ? 'var(--home-lime)' : 
                     'var(--home-text)'
            }}
          >
            <span 
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: 'var(--home-red)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
