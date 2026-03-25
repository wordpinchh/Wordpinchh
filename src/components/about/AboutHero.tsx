"use client";

export default function AboutHero() {
  return (
    <>
      {/* TOP RULE */}
      <div 
        className="h-[6px]"
        style={{
          background: 'var(--about-ink)',
          borderBottom: '2px solid var(--about-red)'
        }}
      />

      {/* MASTHEAD */}
      <header 
        className="flex items-center justify-between py-[28px] px-16 lg:px-16 pb-6"
        style={{
          borderBottom: '3px double var(--about-border-heavy)'
        }}
      >
        <div 
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '25px',
            fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--about-ink-3)'
          }}
        >
          Wordpinchh
        </div>
        
        <div className="text-center">
          <div 
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(4rem, 5vw, 6rem)',
              fontWeight: 900,
              letterSpacing: '-0.01em',
              lineHeight: 0.85,
              textTransform: 'uppercase',
              color: 'var(--about-ink)'
            }}
          >
            About
          </div>
          <div 
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '15px',
              letterSpacing: '0.15em',
              color: 'var(--about-ink-4)',
              marginTop: '6px',
              textTransform: 'uppercase'
            }}
          >
            The story · The beliefs · The fit
          </div>
        </div>
        
        <div 
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '15px',
            letterSpacing: '0.08em',
            color: 'var(--about-ink-4)',
            textAlign: 'right'
          }}
        >
          Content for Search.<br />
          Content for AI.<br />
          Content that converts.
        </div>
      </header>

      {/* HERO — ORIGIN STORY */}
      <section 
        className="grid grid-cols-1 lg:grid-cols-[1fr_380px]"
        style={{
          borderBottom: '2px solid var(--about-border-heavy)'
        }}
      >
        {/* HERO LEFT */}
        <div 
          className="relative px-16 lg:px-16 py-14 lg:py-14"
          style={{
            borderRight: '1px solid var(--about-border-heavy)'
          }}
        >
          {/* HERO EYEBROW */}
          <div 
            className="flex items-center gap-3 mb-8"
          >
            <div 
              className="w-9 h-0.5"
              style={{ background: 'var(--about-red)' }}
            />
            <span 
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '20px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--about-red)',
                fontWeight: 600
              }}
            >
              Why We Exist
            </span>
          </div>

          {/* HERO PULL */}
          <h1 
            className="mb-8"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: 'var(--about-ink)',
              marginBottom: '32px'
            }}
          >
            Brilliant businesses<br />
            kept losing to<br />
            mediocre ones.<br />
            <em 
              style={{
                fontStyle: 'italic',
                fontFamily: 'Libre Baskerville, serif',
                textTransform: 'none',
                fontSize: '0.85em',
                color: 'var(--about-red)',
                fontWeight: 400
              }}
            >
              Just because of content.
            </em>
          </h1>

          {/* HERO BODY */}
          <p 
            className="mb-6 max-w-[560px]"
            style={{
              fontSize: '20px',
              lineHeight: 1.85,
              color: 'var(--about-ink-2)',
              fontWeight: 400,
              marginBottom: '24px'
            }}
          >
            We started Wordpinchh because we kept watching this happen. A better product, deeper experience, stronger results — and still losing Google search, LinkedIn feed, AI recommendation, and first-impression game.
          </p>
          
          <p 
            className="max-w-[560px]"
            style={{
              fontSize: '20px',
              lineHeight: 1.85,
              color: 'var(--about-ink-2)',
              fontWeight: 400,
              marginBottom: '24px'
            }}
          >
            <strong 
              style={{
                fontWeight: 700,
                color: 'var(--about-ink)'
              }}
            >
              Expertise doesn't market itself.
            </strong> 
            {' '}That's the uncomfortable truth most agencies won't say out loud. We built Wordpinchh to fix that — for founders, SaaS startups, and consulting firms who have real expertise and need the world to find it.
          </p>
          
          <p 
            className="max-w-[560px]"
            style={{
              fontSize: '20px',
              lineHeight: 1.85,
              color: 'var(--about-ink-2)',
              fontWeight: 400
            }}
          >
            We're not a content mill. We don't use AI to churn out keyword-stuffed articles and call it strategy. We think, we research, we argue about angles, and we write — because that's the only way to produce content that actually does something.
          </p>
        </div>

        {/* HERO RIGHT - SIDEBAR: uncomfortable truths */}
        <div 
          className="px-10 py-12 flex flex-col gap-0"
          style={{
            background: 'var(--about-ink)'
          }}
        >
          <div 
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '15px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            The uncomfortable truths
          </div>
          
          {[
            { num: '01', text: 'You can have a better product and still', highlight: 'lose Google search.' },
            { num: '02', text: 'Expertise doesn\'t market itself.', highlight: 'Publishing does.' },
            { num: '03', text: 'AI is now recommending your competitors.', highlight: 'Are you in those answers?' },
            { num: '04', text: 'Most "content strategies" produce traffic.', highlight: 'We produce clients.' },
            { num: '05', text: 'The first-impression game is won', highlight: 'before the first call.' }
          ].map((truth, index) => (
            <div 
              key={index}
              className="flex items-start gap-3.5 py-4.5 border-b border-[rgba(255,255,255,0.08)] last:border-b-0"
            >
              <span 
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.2)',
                  flexShrink: 0,
                  marginTop: '3px',
                  letterSpacing: '0.06em'
                }}
              >
                {truth.num}
              </span>
              <span 
                style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                {truth.text} <em 
                  style={{
                    fontStyle: 'italic',
                    color: '#FFD97A'
                  }}
                >
                  {truth.highlight}
                </em>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
