"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex flex-col justify-end pb-0 relative overflow-hidden border-b border-[rgba(255,255,255,0.07)]">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridShift 20s linear infinite'
        }}
      />

      {/* Big Background Text */}
      <div
        className="hero-bg-text absolute bottom-[-60px] left-[-20px] pointer-events-none select-none whitespace-nowrap"
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(100px, 20vw, 380px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.028)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em'
        }}
      >
        WORDS THAT WORK
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] items-end gap-0 pt-[100px] lg:pt-[140px]">

        {/* Main Content */}
        <div className="px-5 sm:px-8 lg:px-16 pb-8 lg:pb-16 lg:border-r border-[rgba(255,255,255,0.07)]">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <div className="w-2 h-2 rounded-full bg-(--home-red) animate-pulse kicker-dot" />
            <span
              className="kicker-text tracking-[0.2em] uppercase"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 'clamp(11px, 2.5vw, 20px)',
                color: 'var(--home-muted)'
              }}
            >
              Content for Search · AI · Humans
            </span>
          </div>

          {/* Screen Reader H1 */}
          <h1 className="sr-only">
            Content Writing Agency in Mumbai — SEO Blogs, LinkedIn Ghostwriting and AI Content Strategy
          </h1>

          {/* Headline */}
          <h2
            className="hero-h1 mb-6 lg:mb-8"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'var(--home-text)',
            }}
          >
            Your Competitors<br />
            Are Already<br />
            <span className="outline">Publishing.</span><br />
            <span className="red">Are You?</span>
          </h2>

          {/* Description */}
          <p
            className="hero-desc mb-8 lg:mb-10"
            style={{
              fontSize: 'clamp(15px, 3vw, 24px)',
              lineHeight: 1.6,
              color: 'var(--home-muted)',
              fontFamily: 'Libre Baskerville, serif',
              fontStyle: 'italic',
              maxWidth: '600px'
            }}
          >
            Wordpinchh writes <strong>SEO blogs, LinkedIn thought leadership,</strong> and <strong>website copy</strong> for founders, SaaS startups, and consulting firms — so you show up where your buyers are already looking. In Google search, in AI-generated answers, and in the minds of every decision-maker in your space.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#audit"
              className="btn-primary inline-flex items-center justify-center gap-2.5 bg-(--home-lime) text-(--home-bg) no-underline rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(13px, 2.5vw, 18px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 24px',
                borderRadius: '8px'
              }}
            >
              Get Your Free Content Audit →
            </a>
            
            <a
              href="/contact"
              className="btn-ghost inline-flex items-center justify-center gap-2.5 bg-transparent text-(--home-text) border border-[rgba(255,255,255,0.13)] no-underline rounded-lg transition-all duration-200 hover:border-(--home-text) hover:bg-[rgba(255,255,255,0.04)]"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(13px, 2.5vw, 18px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '14px 24px',
                borderRadius: '8px'
              }}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="px-5 sm:px-8 lg:px-12 py-8 lg:pb-16 flex flex-col gap-6 lg:gap-8 border-t lg:border-t-0 border-[rgba(255,255,255,0.07)]">
          {/* Channels */}
          <div className="flex flex-col gap-0">
            {[
              { name: 'SEO Blog Writing', tag: 'Core' },
              { name: 'LinkedIn Ghostwriting', tag: 'Core' },
              { name: 'Landing Page Copy', tag: 'Core' },
              { name: 'Website Content', tag: 'Core' },
              { name: 'GEO Optimization', tag: 'New' },
              { name: 'AEO Optimization', tag: 'New' },
              { name: 'AI Content Strategy', tag: 'New' }
            ].map((channel, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 py-3 lg:py-4 border-b border-[rgba(255,255,255,0.07)] first:border-t first:border-[rgba(255,255,255,0.07)]"
              >
                <span
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--home-text)'
                  }}
                >
                  {channel.name}
                </span>
                <span
                  className="px-2.5 py-1 rounded text-[9px] uppercase shrink-0"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    letterSpacing: '0.12em',
                    background: channel.tag === 'Core' ? 'rgba(212,168,75,0.12)' : 'var(--home-lime-dim)',
                    color: channel.tag === 'Core' ? 'var(--home-gold)' : 'var(--home-lime)',
                    border: channel.tag === 'New' ? '1px solid rgba(202,255,74,0.2)' : 'none'
                  }}
                >
                  {channel.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Stat */}
          <div
            className="rounded-xl p-5 lg:p-6 border border-[rgba(255,255,255,0.07)]"
            style={{ background: 'var(--home-surface)' }}
          >
            <div
              className="text-[12px] lg:text-[13px] tracking-[0.18em] uppercase mb-2"
              style={{
                fontFamily: 'var(--font-inter)',
                color: 'var(--home-muted)'
              }}
            >
              Content compounds.
            </div>
            <div
              className="text-[2.5rem] lg:text-[3rem] font-bold leading-none mb-1"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                color: 'var(--home-lime)'
              }}
            >
              Every week
            </div>
            <div
              className="text-[14px] lg:text-[16px] italic leading-6"
              style={{
                color: 'var(--home-muted)',
                fontFamily: 'var(--font-inter)'
              }}
            >
              you're not publishing is a week your competitors are pulling ahead.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}