"use client";

import { useEffect, useState } from "react";

export function WhySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whyItems = [
    {
      num: '01',
      title: 'We Write for Humans & Optimise for Machines',
      desc: 'Search has two audiences now: the person reading your content and the AI system deciding whether to cite it. We write for both — every piece earns visibility across traditional search, AI answer engines, and the humans who actually buy from you.'
    },
    {
      num: '02',
      title: 'We Think Before We Type',
      desc: 'Every brief starts with strategy — what angle will cut through, what the reader needs to believe, what action we want them to take, and how we want AI to categorise and cite this content. Writing without that thinking produces words. Writing with it produces results.'
    },
    {
      num: '03',
      title: 'We Stay Ahead of How Search Is Changing',
      desc: 'SEO, GEO, AEO — the landscape is shifting faster than most businesses can track. We\'re obsessively current on how AI systems discover, evaluate, and cite content. You shouldn\'t have to worry about this. We do.'
    },
    {
      num: '04',
      title: 'We\'re Built for Busy Founders & Lean Teams',
      desc: 'Your involvement: one kickoff call, a quick review, occasional feedback. Everything else — strategy, writing, optimisation, monitoring — is handled.'
    }
  ];

  if (!mounted) return null;

  return (
    <section className="border-b border-[rgba(255,255,255,0.07)]">
      {/* Header */}
      <div className="px-16 pt-16 pb-10 border-b border-[rgba(255,255,255,0.07)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-0.5 bg-(--home-red)" />
          <span 
            className="text-[clamp(14px, 4vw, 20px)] tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--home-red)'
            }}
          >
            Why Wordpinchh
          </span>
        </div>
        
        <h2 
          className="mb-0"
          style={{
            fontFamily: 'var(--font-fahkwang)',
            fontSize: 'clamp(2.4rem, 4vw, 4rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: 'var(--home-text)'
          }}
        >
          We don't just write.<br />
          <em style={{
            fontFamily: 'var(--font-inter)',
            fontStyle: 'italic',
            textTransform: 'none',
            color: 'var(--home-muted)',
            fontSize: '0.82em',
            fontWeight: 400
          }}>We build your content engine.</em>
        </h2>
      </div>

      {/* Why Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[rgba(255,255,255,0.07)]">
        {whyItems.map((item, index) => (
          <div 
            key={index}
            className="px-16 py-11 border-b border-r border-[rgba(255,255,255,0.07)] relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-(--home-surface) last:border-b-0 even:border-r-0"
          >
            {/* Hover Accent */}
            <div 
              className="absolute top-0 left-0 w-0.5 h-0 transition-all duration-400"
              style={{
                background: 'var(--home-lime)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Number */}
            <div 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(16px, 4vw, 20px)',
                letterSpacing: '0.15em',
                color: 'var(--home-muted-2)'
              }}
            >
              {item.num}
            </div>

            {/* Title */}
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-fahkwang)',
                fontSize: 'clamp(1.4rem, 4vw, 1.5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                color: 'var(--home-text)',
                lineHeight: 1.15
              }}
            >
              {item.title}
            </div>

            {/* Description */}
            <p 
              style={{
                fontSize: 'clamp(15px, 4vw, 17px)',
                lineHeight: 1.75,
                color: 'var(--home-muted)',
                fontWeight: 300,
                fontFamily: 'var(--font-inter)',
                fontStyle: 'italic'
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
