"use client";

export function PrivacyHero() {
  return (
    <div 
      className="relative overflow-hidden px-12 py-20 lg:px-48 lg:py-18"
      style={{ background: '#1a1410' }}
    >
      {/* Decorative Quote Mark */}
      <div 
        className="absolute -top-20 -right-10 text-[#faf8f4] select-none pointer-events-none"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '28rem',
          lineHeight: 1,
          opacity: 0.03
        }}
      >
        "
      </div>
      
      <div className="relative max-w-[760px]">
        <span 
          className="text-xs font-medium tracking-[0.2em] uppercase text-[#c8623a] mb-5 block"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Legal & Transparency
        </span>
        
        <h1 
          className="text-[clamp(41.6px,5vw,64px)] font-normal text-[#faf8f4] leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Privacy <em style={{ color: '#c8623a', fontStyle: 'italic' }}>Policy</em>
        </h1>
        
        <p 
          className="text-[13px] text-[#8a7a6e] font-normal"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Last updated: March 26, 2026 &nbsp;·&nbsp; Effective immediately
        </p>
      </div>
    </div>
  );
}
