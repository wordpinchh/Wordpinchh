"use client";

import { portfolioSamples } from "@/data/portfolioSamples";

interface PortfolioGridProps {
  filter: string;
  openGate: (id: string) => void;
}

export default function PortfolioGrid({ filter, openGate }: PortfolioGridProps) {
  const filteredSamples = Object.entries(portfolioSamples).filter(([id, sample]) => {
    if (filter === 'all') return true;
    return sample.acl.includes(filter);
  });

  const visibleCount = filteredSamples.length;

  return (
    <>
      <style>{`
        .pgrid-section {
          padding: 44px 64px 100px;
        }

        .pgrid-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .pgrid-card-featured {
          grid-column: span 2;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .pgrid-section {
            padding: 36px 40px 80px;
          }
          .pgrid-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pgrid-card-featured {
            grid-column: span 2;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .pgrid-section {
            padding: 24px 16px 64px;
          }
          .pgrid-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .pgrid-card-featured {
            grid-column: span 1;
          }
          .pgrid-thumb-tall {
            height: 160px !important;
          }
          .pgrid-title {
            font-size: 22px !important;
          }
          .pgrid-excerpt {
            font-size: 14px !important;
            max-height: 70px !important;
          }
          .pgrid-footer-text {
            font-size: 10px !important;
          }
          .pgrid-tag {
            font-size: 9px !important;
            padding: 2px 7px !important;
          }
        }
      `}</style>

      <section className="pgrid-section">
        {/* Header row */}
        <div className="flex items-center gap-[16px] mb-[28px]">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3D3930",
            }}
          >
            All Samples
          </span>
          <div className="flex-1 h-px bg-white/10" />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              color: "#3D3930",
              letterSpacing: "0.08em",
            }}
          >
            {visibleCount} pieces
          </span>
        </div>

        {/* Grid */}
        <div className="pgrid-grid">
          {filteredSamples.map(([id, sample]) => {
            const isFeatured = id === 'physio';
            const isPlaceholder = id === 'placeholder';

            if (isPlaceholder) {
              return (
                <div
                  key={id}
                  className="border border-dashed border-[#3D3930] bg-white/5 rounded-[14px] overflow-hidden cursor-pointer transition-all duration-250 flex flex-col relative"
                >
                  <div className="flex-1 flex flex-col items-center justify-center gap-[10px] p-[40px_24px] text-center">
                    <div className="w-[40px] h-[40px] rounded-[50%] border-[1.5px_dashed_#3D3930] flex items-center justify-center text-[20px] text-[#3D3930]">
                      +
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#3D3930",
                      }}
                    >
                      GEO Content
                    </div>
                    <div className="text-[11px] text-[#3D3930] italic leading-normal">
                      Sample coming soon —<br />available on request now
                    </div>
                  </div>
                </div>
              );
            }

            const accentColor =
              sample.acl.split(' ')[0] === 'seo'  ? '#7AE09A' :
              sample.acl.split(' ')[0] === 'li'   ? '#7AB8E0' :
              sample.acl.split(' ')[0] === 'wc'   ? '#E0956A' :
              sample.acl.split(' ')[0] === 'lp'   ? '#B87AE0' :
              sample.acl.split(' ')[0] === 'hc'   ? '#A07AE0' :
              sample.acl.split(' ')[0] === 'saas' ? '#7AE0D4' :
              sample.acl.split(' ')[0] === 'fin'  ? '#E0D47A' :
              sample.acl.split(' ')[0] === 'cons' ? '#E0A87A' :
              sample.acl.split(' ')[0] === 'life' ? '#E07AB8' :
              sample.acl.split(' ')[0] === 'rec'  ? '#7AB8E0' : '#7A7268';

            const thumbBg =
              sample.acl.includes('seo') ? 'linear-gradient(135deg,#0A1A10,#0D2A18)' :
              sample.acl.includes('li')  ? 'linear-gradient(135deg,#0D1F2E,#0A2040)' :
              sample.acl.includes('wc')  ? 'linear-gradient(135deg,#200A00,#3A1500)' :
              'linear-gradient(135deg,#1A1A0A,#2E1A3D)';

            const serviceTag = sample.acl.split(' ')[0];
            const industry   = sample.meta.find((m: {l:string;v:string}) => m.l === 'Industry')?.v || 'General';
            const subcategory= sample.meta.find((m: {l:string;v:string}) => m.l === 'Subcategory')?.v;

            const serviceClass =
              serviceTag === 'seo' ? 'bg-[#0A3D1F] text-[#7AE09A]' :
              serviceTag === 'li'  ? 'bg-[#0D2B4A] text-[#7AB8E0]' :
              serviceTag === 'wc'  ? 'bg-[#3D1A08] text-[#E0956A]' :
              serviceTag === 'lp'  ? 'bg-[#2E1A3D] text-[#B87AE0]' :
              'bg-white/20 text-[#7A7268]';

            const serviceText =
              serviceTag === 'seo' ? 'SEO Blog' :
              serviceTag === 'li'  ? 'LinkedIn' :
              serviceTag === 'wc'  ? 'Website Copy' :
              serviceTag === 'lp'  ? 'Landing Page' : 'Other';

            const tags = [{ text: serviceText, class: serviceClass }];
            if (industry && industry !== 'General') tags.push({ text: industry, class: 'bg-[#0D2E2E] text-[#7AE0D4]' });
            if (subcategory) tags.push({ text: subcategory, class: 'bg-[#1A0D2E] text-[#A07AE0]' });

            return (
              <div
                key={id}
                className={`bg-[#161410] border border-white/10 rounded-[14px] overflow-hidden cursor-pointer flex flex-col relative hover:border-white/30 hover:-translate-y-1 ${isFeatured ? 'pgrid-card-featured' : ''}`}
                style={{
                  transition: 'all 0.3s ease',
                  ['--ca' as string]: accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -15px ${accentColor}40, 0 20px 25px -5px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
                data-tags={sample.acl}
                data-id={id}
                onClick={() => openGate(id)}
              >
                {/* THUMB */}
                <div
                  className={`thumb ${isFeatured ? 'pgrid-thumb-tall' : ''}`}
                  style={{ background: thumbBg }}
                >
                  <div
                    className="p-[16px_20px] w-full flex flex-col gap-[6px]"
                    style={{ filter: 'blur(3px)' }}
                  >
                    <div className="h-[5px] rounded-[3px] bg-white/8" />
                    <div className="h-[9px] bg-white/15 w-[70%] mb-[2px]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[92%]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[74%]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[84%]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[88%]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[56%]" />
                    <div className="h-[5px] bg-white/8" />
                    <div className="h-[5px] bg-white/15 w-[83%]" />
                    <div className="h-[7px] bg-none" />
                  </div>

                  {/* Lock overlay */}
                  <div
                    className="thumb-lock"
                    style={{
                      position: 'absolute', top: '10%', left: 0, right: 0, bottom: 0,
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'flex-start', background: 'rgba(14,13,10,0.15)',
                      gap: '8px', paddingTop: '40px',
                    }}
                  >
                    <div className="lock-icon w-[36px] h-[36px] rounded-[50%] bg-[rgba(202,255,74,0.08)] border border-[rgba(202,255,74,0.2)] flex items-center justify-center text-[14px]">
                      🔒
                    </div>
                    <div
                      className="lock-txt"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      Unlock to read
                    </div>
                  </div>

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-50"
                    style={{ background: accentColor }}
                  />
                </div>

                {/* BODY */}
                <div className="p-[18px_16px] flex-1 flex flex-col gap-[9px]">
                  {/* Tags */}
                  <div className="flex gap-[5px] flex-wrap">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`pgrid-tag font-['DM_Mono'] tracking-widest uppercase rounded-[3px] text-white ${tag.class}`}
                        style={{
                          fontSize: "12px",
                          padding: "3px 9px",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="pgrid-title"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "30px",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                      color: "#F0EDE6",
                    }}
                  >
                    {sample.title}
                  </h3>

                  {/* Excerpt */}
                  <div className="relative overflow-hidden" style={{ maxHeight: "90px" }}>
                    <p
                      className="pgrid-excerpt"
                      style={{
                        fontSize: "20px",
                        lineHeight: 1.65,
                        color: "#7A7268",
                        fontStyle: "italic",
                      }}
                    >
                      {sample.sub.length > 100 ? sample.sub.substring(0, 100) + '...' : sample.sub}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-[24px] bg-gradient-to-t from-transparent to-[#161410]" />
                  </div>
                </div>

                {/* FOOTER */}
                <div
                  className="py-[12px] border-t border-white/10 flex items-center justify-between"
                  style={{ padding: "12px 16px" }}
                >
                  <span
                    className="pgrid-footer-text"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#FFF9C4",
                    }}
                  >
                    {sample.meta.find((m: {l:string;v:string}) => m.l === 'Words')?.v || '~1,500'} words ·{' '}
                    {sample.meta.find((m: {l:string;v:string}) => m.l === 'Client')?.v || 'Client'} ·{' '}
                    {sample.acl.split(' ')[1]}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#CAFF4A",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Unlock {isFeatured ? 'full article' : '→'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}