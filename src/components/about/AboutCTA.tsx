"use client";

export default function AboutCTA() {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        padding: '72px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: '60px',
        background: 'var(--about-paper)',
        borderBottom: '6px solid var(--about-ink)'
      }}
    >
      {/* CTA TEXT WRAP */}
      <div>
        {/* KICKER */}
        <div 
          className="flex items-center gap-3 mb-4"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '20px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--about-red)',
            marginBottom: '16px'
          }}
        >
          <div 
            className="w-6 h-0.5"
            style={{ background: 'var(--about-red)' }}
          />
          If that's you
        </div>

        {/* HEADLINE */}
        <h2 
          className="mb-4.5"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 4rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            color: 'var(--about-ink)',
            marginBottom: '18px'
          }}
        >
          We'll do great<br />
          work together.
        </h2>

        {/* COPY */}
        <p 
          style={{
            fontSize: '20px',
            lineHeight: 1.75,
            color: 'var(--about-ink-3)',
            fontWeight: 400,
            maxWidth: '480px',
            fontStyle: 'italic'
          }}
        >
          Tell us where you are, what you've tried, and What you're trying to build. We'll tell you whether and how we can help — no obligation, no pitch deck.
        </p>
      </div>

      {/* CTA BUTTON WRAP */}
      <div 
        className="relative z-10"
        style={{ flexShrink: 0 }}
      >
        <a 
          href="/contact"
          className="cta-btn"
        >
          Book a Strategy Call
        </a>
        
        {/* NOTE */}
        <div 
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '20px',
            letterSpacing: '0.08em',
            color: 'var(--about-ink-4)',
            marginTop: '14px',
            textAlign: 'center'
          }}
        >
          Free · 30 minutes · No pitch
        </div>
      </div>

      {/* BUTTON STYLES */}
      <style jsx>{`
        .cta-btn {
          position: relative;
          display: block;
          padding: 20px 40px;
          background: var(--about-ink);
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          transition: background 0.25s;
        }

        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 4px -4px -4px 4px;
          border: 2px solid var(--about-ink);
          transition: all 0.2s;
          z-index: -1;
        }

        .cta-btn:hover {
          background: var(--about-red);
        }

        .cta-btn:hover::after {
          border-color: var(--about-red);
          inset: 6px -6px -6px 6px;
        }
      `}</style>
    </section>
  );
}
