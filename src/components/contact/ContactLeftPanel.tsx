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

  // Auto-cycle steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 5) + 1);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const handleStepHover = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <aside className="relative border-r border-[rgba(255,255,255,0.07)] flex flex-col sticky top-0 h-screen overflow-hidden"
      style={{
        animation: 'fadeUp 0.5s ease both',
      }}
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(255,255,255,0.025) 79px,
              rgba(255,255,255,0.025) 80px
            )
          `,
        }}
      />

      {/* Top Section */}
      <div className="relative z-10 p-12 border-b border-[rgba(255,255,255,0.07)]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7 font-bold text-sm uppercase text-[#6B6860]" style={{
            fontSize: 'clamp(1.5rem, 2vw, 1rem)',
          }}>
          <div className="w-6 h-px bg-[#CAFF4A]" />
          Contact
        </div>

        {/* Title */}
        <h1 className="font-bold text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] text-[#F0EDE6] mb-5"
          style={{
            fontSize: 'clamp(4rem, 6vw, 7rem)',
          }}
        >
          Let's<br />
          <span className="text-[#CAFF4A]">Talk.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm leading-[1.75] text-[#6B6860] font-light italic max-w-[500px]" style={{fontSize: '20px'}}>
          Start with a Free Content Audit. No pitch, no pressure — just a clear picture of where you are and what's possible.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative z-10 flex-1 p-9 flex flex-col overflow-y-auto">
        <div className="font-bold text-xs tracking-[0.22em] uppercase text-[#3A3830] mb-6" style={{fontSize: '22px'}}>
          What happens next
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex gap-5 p-9 relative transition-all duration-300 cursor-pointer ${
              activeStep === step.id ? 'opacity-100' : 'opacity-50'
            }`}
            onMouseEnter={() => handleStepHover(step.id)}
            style={{
              animation: activeStep === step.id ? 'fadeUp 0.3s ease both' : 'none',
            }}
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[15px] top-[50px] bottom-[-18px] w-px bg-[rgba(255,255,255,0.07)]" />
            )}

            {/* Step Dot */}
            <div className={`w-12 h-12 border border-[rgba(255,255,255,0.12)] rounded-full flex items-center justify-center shrink-0 relative z-10 bg-[#0B0B09] transition-all duration-300 ${
              activeStep === step.id ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.08)]' : ''
            }`}>
              <span className={`font-bold text-xs transition-colors duration-300 ${
                activeStep === step.id ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
              }`}>
                {String(step.id).padStart(2, '0')}
              </span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <div className={`font-bold text-base font-medium text-[#F0EDE6] mb-1 leading-[1.3] transition-opacity duration-300 ${
                activeStep === step.id ? 'opacity-100' : 'opacity-50'
              }`} style={{ fontSize: '20px' }}>
                {step.title}
              </div>
              <div className={`text-sm leading-[1.6] text-[#6B6860] font-light overflow-hidden transition-all duration-400 ${
                activeStep === step.id ? 'max-h-[60px]' : 'max-h-0'
              }`} style={{ fontSize: '18px' }}>
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promise Badge */}
      <div className="relative z-10 mx-13 mb-10 bg-[rgba(202,255,74,0.08)] border border-[rgba(202,255,74,0.2)] rounded-[12px] p-4 flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-lg bg-[rgba(202,255,74,0.15)] border border-[rgba(202,255,74,0.2)] flex items-center justify-center shrink-0 text-base">
          ✦
        </div>
        <div className="text-sm leading-[1.5] text-[rgba(202,255,74,0.8)] font-light">
          <strong className="block text-[#CAFF4A] font-medium text-base mb-0.5 font-bold text-xs tracking-[0.02em]" style={{fontSize: '25px'}}>
            No commitment required
          </strong>
          <span style={{fontSize: '15px'}}>
            Keep the report whether we work together or not. It's yours.
          </span>
        </div>
      </div>

      {/* Add fadeUp animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
}
