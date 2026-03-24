'use client';

import { useState, useEffect } from 'react';

export default function AboutContrast() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const notList = [
    '20 AI-generated articles a month at $10 each',
    'Keyword-stuffed content with no strategic angle',
    'Agencies that never push back on your ideas',
    'One-off projects with no commitment to consistency',
    'Vanity metrics — traffic without conversions'
  ];

  const fitList = [
    {
      title: 'Content as investment',
      normal: 'You understand that content compounds over time — ',
      highlight: 'and you\'re building for the long term, not chasing one viral article.'
    },
    {
      title: 'Want a real partner',
      normal: 'You want someone who will push back with better ideas —',
      highlight: 'not just execute whatever brief you hand them without question.'
    },
    {
      title: 'Committed to consistency',
      normal: 'You\'re committed to publishing consistently over the long term —',
      highlight: 'not stopping when the first article doesn\'t go viral.'
    },
    {
      title: 'Real expertise to share',
      normal: 'You have genuine knowledge and experience. Our job is to make it visible —',
      highlight: 'not invent a point of view for you.'
    }
  ];

  return (
    <section 
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{
        borderBottom: '3px double var(--about-border-heavy)',
        animation: 'slideUp 0.5s ease 0.2s both'
      }}
    >
      {/* CONTRAST BAD */}
      <div 
        className="relative px-12 py-14"
        style={{
          background: 'var(--about-paper-3)',
          borderRight: '1px solid var(--about-border-heavy)'
        }}
      >
        {/* BACKGROUND DECORATIVE TEXT */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '160px',
            fontWeight: 900,
            color: 'rgba(26,18,8,0.04)',
            textTransform: 'uppercase',
            letterSpacing: '-0.04em'
          }}
        >
          NOT ANUS
        </div>

        {/* LABEL */}
        <div 
          className="flex items-center gap-2.5 mb-6"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 700
          }}
        >
          <span 
            style={{
              color: 'var(--about-ink-4)'
            }}
          >
            ✕
          </span>
          {' '}
          What we're not
        </div>

        {/* HEADING */}
        <h3 
          className="mb-6"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1.05,
            letterSpacing: '-0.01em'
          }}
        >
          <span 
            className="relative"
            style={{
              position: 'relative',
              color: 'var(--about-ink-4)'
            }}
          >
            The wrong fit
          </span>
        </h3>

        {/* BODY */}
        <p 
          className="mb-5"
          style={{
            fontSize: '14px',
            lineHeight: 1.75,
            color: 'var(--about-ink-3)',
            fontWeight: 400
          }}
        >
          We're not the right fit for everyone. If you're looking for 20 AI-generated articles a month at $10 each, there are platforms for that. It won't work — but they exist.
        </p>

        {/* NOT LIST */}
        <ul 
          className="flex flex-col gap-2.5 mt-5"
          style={{
            listStyle: 'none'
          }}
        >
          {notList.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-2.5"
              style={{
                fontSize: '13px',
                lineHeight: 1.5,
                color: 'var(--about-ink-4)',
                textDecoration: 'line-through',
                textDecorationColor: 'var(--about-red)',
                textDecorationThickness: '1.5px'
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CONTRAST GOOD */}
      <div 
        className="px-12 py-14 flex flex-col"
        style={{
          background: 'var(--about-ink)'
        }}
      >
        {/* LABEL */}
        <div 
          className="flex items-center gap-2.5 mb-7"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#c42119'
          }}
        >
          <span 
            style={{
              color: 'var(--about-red)'
            }}
          >
            →
          </span>
          {' '}
          Who we work best with
        </div>

        {/* HEADING */}
        <h3 
          className="mb-7"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--about-paper)',
            marginBottom: '28px'
          }}
        >
          The <em 
            style={{
              color: '#FFD97A',
              fontStyle: 'italic',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: '0.82em',
              textTransform: 'none'
            }}
          >
            right
          </em> fit looks like this
        </h3>

        {/* FIT LIST */}
        <ul 
          className="flex-1 flex flex-col gap-0"
          style={{
            listStyle: 'none'
          }}
        >
          {fitList.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-3.5 py-4 border-b border-[rgba(255,255,255,0.07)] last:border-b-0"
            >
              {/* ICON */}
              <div 
                className="shrink-0 mt-0.5"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg 
                  viewBox="0 0 24 24"
                  style={{
                    width: '10px',
                    height: '10px',
                    stroke: '#FFD97A',
                    fill: 'none',
                    strokeWidth: '2.5',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* TEXT */}
              <div 
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                <strong 
                  style={{
                    color: 'rgba(255,255,255,0.95)',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '2px',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.title}
                </strong>
                {item.normal} <em 
                  style={{
                    fontStyle: 'italic',
                    color: '#FFD97A'
                  }}
                >
                  {item.highlight}
                </em>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
