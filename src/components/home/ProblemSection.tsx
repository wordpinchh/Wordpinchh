"use client";

import { useEffect, useState } from "react";

export function ProblemSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const painPoints = [
    "Your blog has three posts — all from 18 months ago",
    "Your LinkedIn is quiet while competitors build audiences daily",
    "Your website copy reads like every other agency in your space",
    "You tried AI content. It ranked for nothing and sounded like nothing",
    "You hired a freelancer. The brief took longer than the article"
  ];

  if (!mounted) return null;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(255,255,255,0.07)]">
      {/* Left Column */}
      <div className="px-16 py-18 lg:border-r border-[rgba(255,255,255,0.07)]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-0.5 bg-(--home-red)" />
          <span 
            className="text-[clamp(14px, 4vw, 20px)] tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--home-red)'
            }}
          >
            The Problem
          </span>
        </div>

        {/* Headline */}
        <h2 
          className="mb-7"
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
          You're great at what you do.<br />
          <em style={{
            fontFamily: 'var(--font-inter)',
            fontStyle: 'italic',
            textTransform: 'none',
            color: 'var(--home-muted)',
            fontSize: '0.82em',
            fontWeight: 400
          }}>But nobody can find you.</em>
        </h2>

        {/* Body */}
        <p 
          className="mb-5"
          style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            lineHeight: 1.8,
            color: 'var(--home-muted)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 400
          }}
        >
          You've built something worth talking about. The problem? Content keeps falling to the bottom of the list.
        </p>
        <p 
          className="mb-8"
          style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            lineHeight: 1.8,
            color: 'var(--home-muted)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 400
          }}
        >
          Sound familiar?
        </p>

        {/* Pain Points */}
        <ul className="mt-8 flex flex-col gap-0">
          {painPoints.map((point, index) => (
            <li 
              key={index}
              className="flex items-start gap-3.5 py-4 border-b border-[rgba(255,255,255,0.07)] first:border-t first:border-[rgba(255,255,255,0.07)] relative overflow-hidden transition-all duration-250 hover:bg-[rgba(255,255,255,0.02)]"
            >
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-px"
                style={{
                  background: 'var(--home-red-dim)',
                  border: '1px solid rgba(204,32,32,0.2)'
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full opacity-50"
                  style={{ background: 'var(--home-red)' }}
                />
              </div>
              <span 
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: 1.6,
                  color: 'var(--home-muted)',
                  fontWeight: 400,
                  fontFamily: 'var(--font-inter)',
                  fontStyle: 'italic'
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="px-16 py-18 flex flex-col justify-between">
        {/* Meanwhile Box */}
        <div 
          className="rounded-2xl p-8 mb-8 relative overflow-hidden"
          style={{
            background: 'var(--home-surface)',
            border: '1px solid var(--home-border-2)'
          }}
        >
          <div 
            className="absolute -top-2.5 left-4 text-[120px] leading-none opacity-[0.03]"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--home-text)'
            }}
          >
            "
          </div>
          <div 
            className="mb-3.5"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(12px, 3vw, 15px)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--home-gold)'
            }}
          >
            Meanwhile
          </div>
          <p 
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1.4rem, 4vw, 1.6rem)',
              lineHeight: 1.7,
              color: 'var(--home-text)',
              fontStyle: 'italic'
            }}
          >
            The founder down the street who publishes consistently is getting inbound leads, speaking invitations, and the "how did you get so well-known?" question you want to be asked.
          </p>
        </div>

        {/* AI Shift Box */}
        <div 
          className="rounded-2xl p-7"
          style={{
            background: 'var(--home-lime-dim)',
            border: '1px solid rgba(202,255,74,0.15)'
          }}
        >
          <div 
            className="flex items-center gap-2.5 mb-3"
            style={{
              fontFamily: 'var(--font-fahkwang)',
              fontSize: 'clamp(12px, 3vw, 15px)',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--home-lime)'
            }}
          >
            ↑ Search Has Changed
          </div>
          <p 
            style={{
              fontSize: 'clamp(20px, 5vw, 25.6px)',
              lineHeight: 1.7,
              color: 'rgba(202,255,74,0.65)',
              fontWeight: 300,
              fontFamily: 'var(--font-inter)',
              fontStyle: 'italic'
            }}
          >
            Your buyers aren't just searching Google anymore. They're asking ChatGPT which agencies to hire, prompting Perplexity for the best consultants in your space. If your content isn't built for both worlds, <strong style={{ color: 'var(--home-lime)' }}>you're invisible twice over.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
