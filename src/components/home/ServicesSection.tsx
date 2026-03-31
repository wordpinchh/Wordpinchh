"use client";

import { useEffect, useState } from "react";

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const coreServices = [
    { num: '01', name: 'SEO Blog Writing', desc: 'Long-form articles that rank and convert' },
    { num: '02', name: 'LinkedIn Ghostwriting', desc: 'Posts that build your brand and attract inbound' },
    { num: '03', name: 'Landing Page Copywriting', desc: 'Pages that turn visitors into leads' },
    { num: '04', name: 'Website Content', desc: 'Clear messaging from homepage to about page' }
  ];

  const aiServices = [
    { num: '05', name: 'GEO Optimization', desc: 'Get cited by ChatGPT, Perplexity & Google AI' },
    { num: '06', name: 'AEO Optimization', desc: 'Win zero-click answer boxes and voice results' },
    { num: '07', name: 'AI Content Strategy', desc: 'Scale production without losing your brand voice' }
  ];

  if (!mounted) return null;

  return (
    <section className="border-b border-[rgba(255,255,255,0.07)]">
      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-16 pt-10 lg:pt-16 pb-8 lg:pb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-b border-[rgba(255,255,255,0.07)]">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-5 lg:mb-6">
            <div className="w-6 h-0.5 bg-(--home-red)" />
            <span
              className="text-[clamp(12px, 3vw, 20px)] tracking-[0.2em] uppercase"
              style={{
                fontFamily: 'var(--font-inter)',
                color: 'var(--home-red)'
              }}
            >
              Services
            </span>
          </div>
          <h2
            className="mb-0"
            style={{
              fontFamily: 'var(--font-fahkwang)',
              fontSize: 'clamp(1.8rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              color: 'var(--home-text)'
            }}
          >
            Everything You Need to Be<br />
            <em style={{
              fontFamily: 'var(--font-inter)',
              fontStyle: 'italic',
              textTransform: 'none',
              color: 'var(--home-muted)',
              fontSize: '0.82em',
              fontWeight: 400
            }}>Found, Trusted & Chosen.</em>
          </h2>
        </div>
        <a
          href="/services"
          className="inline-flex items-center gap-2 shrink-0 no-underline rounded-lg transition-all duration-300"
          style={{
                  padding: 'clamp(10px, 2vw, 16px) clamp(16px, 3vw, 28px)',
                  fontFamily: 'var(--font-fahkwang)',
                  fontSize: 'clamp(13px, 3vw, 18px)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#CAFF4A',
                  border: '1.5px solid #CAFF4A',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                e.currentTarget.style.background = '#CAFF4A';
                e.currentTarget.style.color = '#0B0B09';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(202,255,74,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#CAFF4A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
              See All Services →
            </a>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[rgba(255,255,255,0.07)]">
        {/* Core Services */}
        <div className="px-5 sm:px-8 lg:px-16 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.07)]">
          <div
            className="text-[clamp(11px, 2.5vw, 15px)] tracking-[0.22em] uppercase mb-5 lg:mb-6 pb-3 border-b border-[rgba(255,255,255,0.07)]"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--home-gold)'
            }}
          >
            Core Content Services
          </div>
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.07)] last:border-b-0 cursor-pointer transition-all duration-200 rounded-lg relative overflow-hidden hover:bg-[rgba(255,255,255,0.02)]"
            >
              <span
                className="text-[10px] shrink-0 mt-0.5"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--home-muted-2)',
                  letterSpacing: '0.06em'
                }}
              >
                {service.num}
              </span>
              <div className="flex-1">
                <div
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-fahkwang)',
                    fontSize: 'clamp(1rem, 3.5vw, 1.4rem)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--home-text)'
                  }}
                >
                  {service.name}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'var(--home-muted)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-inter)'
                  }}
                >
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Services */}
        <div className="px-5 sm:px-8 lg:px-16 py-8 lg:py-10">
          <div
            className="text-[clamp(11px, 2.5vw, 15px)] tracking-[0.22em] uppercase mb-5 lg:mb-6 pb-3 border-b border-[rgba(255,255,255,0.07)]"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--home-lime)'
            }}
          >
            AI Visibility Services — New
          </div>
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.07)] last:border-b-0 cursor-pointer transition-all duration-200 rounded-lg relative overflow-hidden hover:bg-[rgba(255,255,255,0.02)]"
            >
              <span
                className="text-[10px] shrink-0 mt-0.5"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--home-muted-2)',
                  letterSpacing: '0.06em'
                }}
              >
                {service.num}
              </span>
              <div className="flex-1">
                <div
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-fahkwang)',
                    fontSize: 'clamp(1rem, 3.5vw, 1.4rem)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--home-text)'
                  }}
                >
                  {service.name}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'var(--home-muted)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-inter)'
                  }}
                >
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}