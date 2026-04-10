"use client";

export default function PortfolioHeader() {
  return (
    <>
      <style>{`
        .portfolio-header {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 80px;
          background: #0E0D0A;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 128px 64px 80px;
          align-items: end;
        }

        .portfolio-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.02em;
          color: #F0EDE6;
          text-transform: uppercase;
          font-size: clamp(4rem, 9vw, 8rem);
        }

        .portfolio-desc {
          font-family: 'Libre Baskerville', serif;
          font-size: 20px;
          line-height: 1.8;
          color: #F0EDE6;
          font-style: italic;
          margin-bottom: 24px;
        }

        .stat-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: #F0EDE6;
          line-height: 1;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #F0EDE6;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .portfolio-header {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 80px 40px 60px;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .portfolio-header {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 76px 20px 40px;
          }

          .portfolio-headline {
            font-size: clamp(3.2rem, 14vw, 5rem);
          }

          .portfolio-desc {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .stats-row {
            gap: 24px !important;
          }

          .stat-number {
            font-size: 2.2rem;
          }

          .stat-label {
            font-size: 12px;
          }

          .eyebrow-text {
            font-size: 11px !important;
            margin-bottom: 12px !important;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .portfolio-header {
            padding: 72px 16px 36px;
          }

          .portfolio-headline {
            font-size: clamp(2.8rem, 13vw, 4rem);
          }
        }
      `}</style>

      <header className="portfolio-header">
        {/* LEFT — eyebrow + big headline */}
        <div>
          {/* Eyebrow */}
          <div
            className="eyebrow-text flex items-center uppercase mb-[18px]"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "20px",
              letterSpacing: "0.2em",
              color: "#7A7268",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: "1px",
                background: "#CAFF4A",
                flexShrink: 0,
              }}
            />
            Portfolio
          </div>

          {/* Headline */}
          <h1 className="portfolio-headline">
            Words That
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #F0EDE6",
              }}
            >
              Ranked.
            </span>
            <br />
            <span style={{ color: "#CAFF4A" }}>Converted.</span>
          </h1>
        </div>

        {/* RIGHT — description + stats */}
        <div style={{ paddingBottom: "4px" }}>
          <p className="portfolio-desc">
            Real work. Thirty Five pieces across four service types and six
            industries — SEO blogs, LinkedIn thought leadership, website copy,
            and more. Unlock any piece by sharing your details.
          </p>

          {/* Stats row */}
          <div className="stats-row flex" style={{ gap: "36px" }}>
            {[
              { n: "35", l: "Samples" },
              { n: "4", l: "Service Types" },
              { n: "6", l: "Industries" },
            ].map(({ n, l }) => (
              <div key={l} className="flex flex-col" style={{ gap: "3px" }}>
                <div className="stat-number">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}