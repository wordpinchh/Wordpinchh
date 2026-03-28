"use client";

import { useState, useEffect } from "react";

export default function ContactLeftPanel() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "We review your content",
      desc: "Website, LinkedIn, and any existing content — we look at everything through the lens of a buyer finding you for the first time."
    },
    {
      id: 2,
      title: "We check your AI visibility",
      desc: "We test whether your content is showing up in AI-generated answers for the queries your ideal clients are actually asking."
    },
    {
      id: 3,
      title: "We map the gaps",
      desc: "We identify your biggest content gaps and quick wins — across traditional search and AI visibility."
    },
    {
      id: 4,
      title: "Report in 48 hours",
      desc: "A personalised report lands in your inbox — specific to your business, your goals, your gaps."
    },
    {
      id: 5,
      title: "Optional 30-min call",
      desc: "If it makes sense, we hop on a call to discuss next steps. No commitment, no pressure."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 5) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="left-panel">
      {/* BACKGROUND LINES */}
      <div className="bg-lines" />

      {/* TOP */}
      <div className="top">
        <div className="kicker">
          <div className="line" />
          Contact
        </div>

        <h1 className="title">
          Let's<br />
          <span>Talk.</span>
        </h1>

        <p className="subtitle">
          Start with a Free Content Audit. No pitch, no pressure — just a clear
          picture of where you are and what's possible.
        </p>
      </div>

      {/* STEPS */}
      <div className="steps">
        <div className="steps-title">What happens next</div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${activeStep === step.id ? "active" : ""}`}
            onMouseEnter={() => setActiveStep(step.id)}
          >
            {index < steps.length - 1 && <div className="connector" />}

            <div className="dot">
              {String(step.id).padStart(2, "0")}
            </div>

            <div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* BADGE */}
      <div className="badge">
        <div className="icon">✦</div>
        <div>
          <strong>No commitment required</strong>
          <span>
            Keep the report whether we work together or not. It's yours.
          </span>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .left-panel {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          background: #0b0b09;
        }

        .bg-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 79px,
            rgba(255,255,255,0.03) 79px,
            rgba(255,255,255,0.03) 80px
          );
          pointer-events: none;
        }

        .top {
          padding: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          z-index: 1;
        }

        .kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6b6860;
          margin-bottom: 20px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #caff4a;
        }

        .title {
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 900;
          line-height: 1;
          color: #f0ede6;
        }

        .title span {
          color: #caff4a;
        }

        .subtitle {
          margin-top: 16px;
          font-size: 16px;
          line-height: 1.7;
          color: #6b6860;
          font-style: italic;
          max-width: 400px;
        }

        .steps {
          padding: 32px;
          flex: 1;
          overflow-y: auto;
          z-index: 1;
        }

        .steps-title {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3830;
          margin-bottom: 20px;
        }

        .step {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          position: relative;
          opacity: 0.5;
          transition: 0.3s;
        }

        .step.active {
          opacity: 1;
        }

        .connector {
          position: absolute;
          left: 20px;
          top: 40px;
          bottom: -10px;
          width: 1px;
          background: rgba(255,255,255,0.07);
        }

        .dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #6b6860;
        }

        .step.active .dot {
          border-color: #caff4a;
          color: #caff4a;
        }

        .step-title {
          font-size: 16px;
          color: #f0ede6;
          margin-bottom: 4px;
        }

        .step-desc {
          font-size: 14px;
          color: #6b6860;
          max-height: 0;
          overflow: hidden;
          transition: 0.3s;
        }

        .step.active .step-desc {
          max-height: 80px;
        }

        .badge {
          margin: 24px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(202,255,74,0.08);
          border: 1px solid rgba(202,255,74,0.2);
          display: flex;
          gap: 12px;
        }

        .icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(202,255,74,0.15);
          border-radius: 8px;
        }

        .badge strong {
          display: block;
          color: #caff4a;
          font-size: 14px;
        }

        .badge span {
          font-size: 13px;
          color: rgba(202,255,74,0.7);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1024px) {
          .left-panel {
            position: relative;
            height: auto;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
        }

        @media (max-width: 768px) {
          .top {
            padding: 32px 20px;
          }

          .steps {
            padding: 20px;
          }

          .title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 14px;
          }

          .step-title {
            font-size: 14px;
          }

          .step-desc {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </aside>
  );
}