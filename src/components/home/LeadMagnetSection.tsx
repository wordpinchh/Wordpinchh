"use client";

import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

export function LeadMagnetSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("msBKOPZLM6rN0C45D");

      await emailjs.send(
        'service_15r1l2y',
        'template_3coscl9',
        {
          from_name: formData.name,
          from_email: formData.email,
          website: formData.website,
          challenge: 'Submitted via Home Page Quick Audit Form',
        }
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', website: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliverables = [
    {
      num: '01',
      text: '<strong>5 high-value blog topics</strong> your business should own — with search volume data'
    },
    {
      num: '02',
      text: '<strong>An honest look</strong> at what\'s wrong with your current website copy'
    },
    {
      num: '03',
      text: '<strong>3 LinkedIn post angles</strong> that work for your specific expertise'
    },
    {
      num: '04',
      text: '<strong>Your top 2 competitors\' content strategy</strong> — reverse-engineered'
    },
    {
      num: '05',
      text: '<strong>Whether your content is cited by AI tools</strong> — and what to do about it'
    }
  ];

  if (!mounted) return null;

  return (
    <section id="audit" className="grid grid-cols-1 lg:grid-cols-[1fr_440px] border-b border-[rgba(255,255,255,0.07)]">
      {/* Left Column */}
      <div className="px-5 sm:px-8 lg:px-16 py-10 lg:py-18 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.07)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-0.5 bg-(--home-red)" />
          <span
            className="text-[clamp(12px,3vw,20px)] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-inter)', color: 'var(--home-red)' }}
          >
            Free Content Audit
          </span>
        </div>

        <h2
          className="mb-6"
          style={{
            fontFamily: 'var(--font-fahkwang)',
            fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: 'var(--home-text)'
          }}
        >
          See exactly where your content is leaving{' '}
          <span style={{ color: 'var(--home-lime)' }}>money on the table.</span>
        </h2>

        <p
          className="mb-8 lg:mb-9"
          style={{
            fontSize: 'clamp(14px, 3.5vw, 20px)',
            lineHeight: 1.8,
            color: 'var(--home-muted)',
            fontStyle: 'italic',
            fontFamily: 'var(--font-inter)'
          }}
        >
          In 48 hours, we'll send you a personalised report. No pitch. No pressure. Just a genuinely useful report — whether you work with us or not.
        </p>

        <ul className="flex flex-col gap-0">
          {deliverables.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3.5 py-3.5 border-b border-[rgba(255,255,255,0.07)] first:border-t first:border-[rgba(255,255,255,0.07)]"
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: 'var(--home-lime-dim)',
                  border: '1px solid rgba(202,255,74,0.2)',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '9px',
                  color: 'var(--home-lime)',
                  letterSpacing: 0
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontSize: 'clamp(13px, 3vw, 18px)',
                  lineHeight: 1.6,
                  color: 'var(--home-muted)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-inter)'
                }}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column — Form */}
      <div
        className="px-5 sm:px-8 lg:px-16 py-10 lg:py-16 flex flex-col justify-center relative overflow-hidden"
        style={{ background: 'var(--home-surface)' }}
      >
        <div
          className="absolute bottom-[-20px] right-[-10px] pointer-events-none select-none"
          style={{
            fontFamily: 'var(--font-fahkwang)',
            fontSize: 'clamp(80px, 18vw, 160px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.025)',
            lineHeight: 1
          }}
        >
          FREE
        </div>

        <div className="relative z-10">

          {/* Success Message */}
          {showSuccess ? (
            <div style={{
              background: 'rgba(202,255,74,0.06)',
              border: '1px solid rgba(202,255,74,0.25)',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px', height: '48px',
                background: 'rgba(202,255,74,0.15)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '22px',
              }}>
                ✦
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#CAFF4A',
                marginBottom: '8px',
                fontFamily: 'var(--font-fahkwang)',
              }}>
                Details Received
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6B6860',
                lineHeight: 1.7,
                marginBottom: '6px',
                fontStyle: 'italic',
              }}>
                We'll review your content and send a personalised report within 48 hours.
              </p>
              <p style={{
                fontSize: '12px',
                color: 'rgba(202,255,74,0.6)',
                marginBottom: '24px',
              }}>
                No commitment · No pitch · Just honest feedback
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                style={{
                  padding: '10px 24px',
                  background: 'transparent',
                  color: '#CAFF4A',
                  border: '1px solid rgba(202,255,74,0.4)',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div
                className="mb-1.5"
                style={{
                  fontFamily: 'var(--font-fahkwang)',
                  fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--home-text)',
                  letterSpacing: '0.02em'
                }}
              >
                Get My Free Content Audit
              </div>

              <div
                className="mb-6"
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  color: 'var(--home-muted)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  fontFamily: 'var(--font-inter)'
                }}
              >
                48-hour turnaround · No commitment
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3.5 rounded-lg border border-[rgba(255,255,255,0.13)] outline-none transition-all duration-200 focus:border-(--home-lime)"
                  style={{
                    background: 'var(--home-surface-2)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'var(--home-text)'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3.5 rounded-lg border border-[rgba(255,255,255,0.13)] outline-none transition-all duration-200 focus:border-(--home-lime)"
                  style={{
                    background: 'var(--home-surface-2)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'var(--home-text)'
                  }}
                />
                <input
                  type="url"
                  placeholder="Website URL"
                  required
                  value={formData.website}
                  onChange={e => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full p-3.5 rounded-lg border border-[rgba(255,255,255,0.13)] outline-none transition-all duration-200 focus:border-(--home-lime)"
                  style={{
                    background: 'var(--home-surface-2)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'var(--home-text)'
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-4 bg-(--home-lime) text-(--home-bg) rounded-lg border-none transition-all duration-200 hover:opacity-90 mt-1 disabled:opacity-50"
                  style={{
                    fontFamily: 'var(--font-fahkwang)',
                    fontSize: 'clamp(14px, 3.5vw, 19px)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'none',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Audit →'}
                </button>
              </form>

              <div
                className="mt-3 text-center"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(11px, 2.5vw, 14px)',
                  letterSpacing: '0.08em',
                  color: 'var(--home-muted-2)'
                }}
              >
                No pitch · No pressure · Keep the report either way
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}