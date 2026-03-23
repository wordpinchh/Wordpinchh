"use client";

import { useState } from "react";

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

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen border-r border-[rgba(255,255,255,0.07)] flex flex-col overflow-hidden relative">
      
      {/* Top Section */}
      <div className="relative z-10 border-b border-[rgba(255,255,255,0.07)] p-12 lg:p-16">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-[#6B6860] mb-7 font-mono">
          <div className="w-6 h-px bg-[#CAFF4A]" />
          Contact
        </div>
        
        <h1 className="text-[clamp(2.8rem,4vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-5 text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>
          Let's<br />
          <span className="text-[#CAFF4A]">Talk.</span>
        </h1>
        
        <p className="text-[16px] leading-[1.75] text-[#6B6860] font-light italic max-w-[380px] text-left" style={{ fontFamily: "var(--font-inter)" }}>
          Start with a Free Content Audit. No pitch, no pressure — just a clear picture of where you are and what's possible.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative z-10 flex-1 p-12 lg:p-16 overflow-y-auto">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[#3A3830] mb-6 font-mono">
          What happens next
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative py-[18px] ${index < steps.length - 1 ? 'border-l border-[rgba(255,255,255,0.07)]' : ''}`}
              style={{ marginLeft: '15px' }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-0 top-[50px] bottom-[-18px] w-px bg-[rgba(255,255,255,0.07)]"
                  style={{ left: '-15px' }}
                />
              )}

              {/* Step dot */}
              <div 
                className={`absolute left-[-15px] top-[18px] w-[30px] h-[30px] border border-[rgba(255,255,255,0.12)] rounded-full flex items-center justify-center bg-[#0B0B09] transition-all duration-300 ${
                  activeStep === step.id ? 'border-[#CAFF4A]' : ''
                }`}
                style={{ 
                  background: activeStep === step.id ? 'rgba(202,255,74,0.08)' : '#0B0B09'
                }}
              >
                <span className={`text-[9px] transition-colors duration-300 ${
                  activeStep === step.id ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
                }`}>
                  {String(step.id).padStart(2, '0')}
                </span>
              </div>

              {/* Step content */}
              <div className="ml-6">
                <h3 
                  className={`text-[15px] font-medium leading-[1.3] mb-1 transition-opacity duration-300 text-left ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{ fontFamily: "var(--font-fahkwang)" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[13px] leading-[1.6] text-[#6B6860] font-light transition-all duration-400 overflow-hidden text-left"
                  style={{ 
                    maxHeight: activeStep === step.id ? '60px' : '0px',
                    fontFamily: "var(--font-inter)"
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promise Badge */}
      <div className="relative z-10 m-12 lg:m-16 bg-[rgba(202,255,74,0.08)] border border-[rgba(202,255,74,0.2)] rounded-[12px] p-4 flex items-center gap-3.5">
        <div className="w-9 h-9 bg-[rgba(202,255,74,0.15)] border border-[rgba(202,255,74,0.2)] rounded-lg flex items-center justify-center text-[16px] shrink-0">
          ✦
        </div>
        <div className="text-[13px] leading-normal text-[rgba(202,255,74,0.8)] font-light text-left" style={{ fontFamily: "var(--font-inter)" }}>
          <strong className="block text-[#CAFF4A] font-medium text-[13px] mb-0.5 text-left" style={{ fontFamily: "var(--font-fahkwang)", letterSpacing: '0.02em' }}>
            No commitment required
          </strong>
          Keep the report whether we work together or not. It's yours.
        </div>
      </div>
    </aside>
  );
}
