"use client";

export default function AboutCTA() {
  return (
    <section className="cta-section">
      {/* CTA TEXT WRAP */}
      <div>
        {/* KICKER */}
        <div className="kicker">
          <div className="line" />
          If that's you
        </div>

        {/* HEADLINE */}
        <h2 className="headline">
          We'll do great<br />
          work together.
        </h2>

        {/* COPY */}
        <p className="copy">
          Tell us where you are, what you've tried, and what you're trying to
          build. We'll tell you whether and how we can help — no obligation, no
          pitch deck.
        </p>
      </div>

      {/* CTA BUTTON */}
      <div className="cta-wrap">
        <a href="/contact" className="cta-btn">
          Book a Strategy Call
        </a>

        <div className="note">
          Free · 30 minutes · No pitch
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 60px;
          padding: 72px 64px;
          background: var(--about-paper);
          border-bottom: 6px solid var(--about-ink);
        }

        /* TEXT */
        .kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 18px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--about-red);
          margin-bottom: 16px;
        }

        .line {
          width: 24px;
          height: 2px;
          background: var(--about-red);
        }

        .headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
          letter-spacing: -0.01em;
          color: var(--about-ink);
          margin-bottom: 18px;
        }

        .copy {
          font-size: 18px;
          line-height: 1.7;
          color: var(--about-ink-3);
          max-width: 480px;
          font-style: italic;
        }

        /* CTA */
        .cta-wrap {
          text-align: center;
        }

        .cta-btn {
          position: relative;
          display: inline-block;
          padding: 18px 36px;
          background: var(--about-ink);
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
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

        .note {
          font-family: 'DM Mono', monospace;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--about-ink-4);
          margin-top: 12px;
        }

        /* ================= MOBILE ================= */
        @media (max-width: 768px) {
          .cta-section {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 48px 24px;
            text-align: left;
          }

          .headline {
            font-size: 2.2rem;
          }

          .copy {
            font-size: 16px;
          }

          .cta-wrap {
            text-align: left;
          }

          .cta-btn {
            width: 100%;
            text-align: center;
          }
        }

        /* ================= SMALL MOBILE ================= */
        @media (max-width: 480px) {
          .cta-section {
            padding: 40px 20px;
          }

          .headline {
            font-size: 2rem;
          }

          .kicker {
            font-size: 14px;
          }

          .cta-btn {
            padding: 16px 20px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}