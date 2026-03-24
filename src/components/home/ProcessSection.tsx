"use client";

import { useEffect, useState } from "react";

export function ProcessSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const processSteps = [
    {
      num: '01',
      title: 'Deep Dive',
      desc: 'We spend the first week understanding your business, audience, competitors, and what\'s already working. No templates. No assumptions.'
    },
    {
      num: '02',
      title: 'Content Blueprint',
      desc: 'We map out a 90-day content plan — specific topics, formats, angles, and keywords tied to your actual growth goals. Both for traditional search and AI citation.'
    },
    {
      num: '03',
      title: 'Write, Review, Publish',
      desc: 'We write. You review. We refine. Most clients request one round of edits, if that. Then we hit publish.'
    },
    {
      num: '04',
      title: 'Measure & Iterate',
      desc: 'We track rankings, AI citation appearances, engagement, and lead attribution. What\'s working gets doubled down. What isn\'t gets cut.'
    }
  ];

  if (!mounted) return null;

  return (
    <section className="border-b border-[rgba(255,255,255,0.07)] px-16 py-18">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-0.5 bg-(--home-red)" />
        <span 
          className="text-[clamp(14px, 4vw, 20px)] tracking-[0.2em] uppercase"
          style={{
            fontFamily: 'var(--font-inter)',
            color: 'var(--home-red)'
          }}
        >
          How We Work
        </span>
      </div>
      
      <h2 
        className="max-w-[600px]"
        style={{
          fontFamily: 'var(--font-fahkwang)',
          fontSize: 'clamp(2.4rem, 4vw, 4rem)',
          fontWeight: 800,
          lineHeight: 0.95,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: 'var(--home-text)',
          marginBottom: '3.25rem'
        }}
      >
        Four steps from <em style={{
          fontFamily: 'var(--font-inter)',
          fontStyle: 'italic',
          textTransform: 'none',
          color: 'var(--home-muted)',
          fontSize: '0.82em',
          fontWeight: 400
        }}>invisible</em> to undeniable.
      </h2>

      {/* Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-13 border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden">
        {processSteps.map((step, index) => (
          <div 
            key={index}
            className="px-7 py-8 border-r border-[rgba(255,255,255,0.07)] last:border-r-0 relative transition-all duration-300 cursor-pointer hover:bg-(--home-surface)"
          >
            {/* Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-0.5 bg-transparent transition-all duration-300"
              style={{
                background: 'var(--home-lime)'
              }}
            />
            
            {/* Number */}
            <div 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-fahkwang)',
                fontSize: '4rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.06)',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}
            >
              {step.num}
            </div>

            {/* Title */}
            <div 
              className="mb-2.5"
              style={{
                fontFamily: 'var(--font-fahkwang)',
                fontSize: 'clamp(1.3rem, 4vw, 1.4rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--home-text)'
              }}
            >
              {step.title}
            </div>

            {/* Description */}
            <p 
              style={{
                fontSize: 'clamp(16px, 4vw, 19px)',
                lineHeight: 1.7,
                color: 'var(--home-muted)',
                fontWeight: 300,
                fontFamily: 'var(--font-inter)',
                fontStyle: 'italic'
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
