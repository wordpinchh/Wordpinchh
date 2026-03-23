"use client";

import { useState } from "react";

export default function ContactRightPanel() {
  const [activePath, setActivePath] = useState<'audit' | 'call'>('audit');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenge: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showSuccess) {
    return (
      <main className="p-14 lg:p-20 bg-[#111110] flex flex-col items-center justify-center text-center">
        <div className="w-18 h-18 bg-[rgba(202,255,74,0.08)] border border-[rgba(202,255,74,0.2)] rounded-full flex items-center justify-center text-[28px] mb-5">
          ✦
        </div>
        <h2 className="text-[1.5rem] font-bold tracking-tight text-[#F0EDE6] mb-5" style={{ fontFamily: "var(--font-fahkwang)" }}>
          You're in.
        </h2>
        <p className="text-[15px] leading-[1.7] text-[#6B6860] font-light italic max-w-[340px] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
          We'll review your content and send your personalised audit within 48 hours. Check your inbox — and keep an eye on spam just in case.
        </p>
        <div className="text-[10px] tracking-[0.12em] text-[#6B6860] uppercase font-mono mt-2">
          No commitment · Yours to keep
        </div>
      </main>
    );
  }

  return (
    <main className="p-14 lg:p-20 bg-[#111110] flex flex-col">
      
      {/* Path Switcher */}
      <div className="grid grid-cols-2 gap-2.5 mb-11">
        <button
          onClick={() => setActivePath('audit')}
          className={`p-4 border rounded-xl text-left transition-all duration-250 relative overflow-hidden ${
            activePath === 'audit' 
              ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.08)]' 
              : 'border-[rgba(255,255,255,0.12)] bg-transparent hover:border-[rgba(255,255,255,0.12)] hover:bg-[#181816]'
          }`}
        >
          <div className={`absolute top-3 right-3.5 w-1.5 h-1.5 rounded-full bg-[#CAFF4A] transition-opacity duration-200 ${
            activePath === 'audit' ? 'opacity-100' : 'opacity-0'
          }`} />
          <span className={`block text-[11px] font-semibold tracking-[0.04em] mb-1 transition-colors duration-200 ${
            activePath === 'audit' ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-fahkwang)" }}>
            Free Content Audit
          </span>
          <span className={`block text-[12px] font-light italic leading-[1.4] transition-colors duration-200 ${
            activePath === 'audit' ? 'text-[rgba(202,255,74,0.6)]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-inter)" }}>
            Get a personalised report within 48 hrs
          </span>
        </button>

        <button
          onClick={() => setActivePath('call')}
          className={`p-4 border rounded-xl text-left transition-all duration-250 relative overflow-hidden ${
            activePath === 'call' 
              ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.08)]' 
              : 'border-[rgba(255,255,255,0.12)] bg-transparent hover:border-[rgba(255,255,255,0.12)] hover:bg-[#181816]'
          }`}
        >
          <div className={`absolute top-3 right-3.5 w-1.5 h-1.5 rounded-full bg-[#CAFF4A] transition-opacity duration-200 ${
            activePath === 'call' ? 'opacity-100' : 'opacity-0'
          }`} />
          <span className={`block text-[11px] font-semibold tracking-[0.04em] mb-1 transition-colors duration-200 ${
            activePath === 'call' ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-fahkwang)" }}>
            Book a Strategy Call
          </span>
          <span className={`block text-[12px] font-light italic leading-[1.4] transition-colors duration-200 ${
            activePath === 'call' ? 'text-[rgba(202,255,74,0.6)]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-inter)" }}>
            30 minutes, direct conversation
          </span>
        </button>
      </div>

      {/* Audit Form Panel */}
      {activePath === 'audit' && (
        <div>
          <h2 className="text-[clamp(1.3rem,2vw,1.7rem)] font-bold tracking-[-0.02em] text-[#F0EDE6] mb-2 leading-[1.2] text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>
            Get your Free<br />Content Audit
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#6B6860] font-light italic mb-9 text-left" style={{ fontFamily: "var(--font-inter)" }}>
            Fill in your details. We'll review your content and send a personalised report — no fluff, no pitch, just honest assessment.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Smith"
                  required
                  autoComplete="name"
                  className="bg-[#181816] border border-[rgba(255,255,255,0.12)] rounded-[10px] p-[14px_18px] text-[15px] text-[#F0EDE6] outline-none transition-all duration-200 placeholder:text-[#3A3830] placeholder:italic focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.04)] focus:placeholder-transparent"
                  style={{ fontFamily: "'Newsreader', serif" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@company.com"
                  required
                  autoComplete="email"
                  className="bg-[#181816] border border-[rgba(255,255,255,0.12)] rounded-[10px] p-[14px_18px] text-[15px] text-[#F0EDE6] outline-none transition-all duration-200 placeholder:text-[#3A3830] placeholder:italic focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.04)] focus:placeholder-transparent"
                  style={{ fontFamily: "'Newsreader', serif" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-3.5">
              <label className="text-[10px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
                Company / website URL
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://yourwebsite.com"
                required
                className="bg-[#181816] border border-[rgba(255,255,255,0.12)] rounded-[10px] p-[14px_18px] text-[15px] text-[#F0EDE6] outline-none transition-all duration-200 placeholder:text-[#3A3830] placeholder:italic focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.04)] focus:placeholder-transparent"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-[10px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
                Your biggest content challenge right now
              </label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                placeholder="E.g. We're getting traffic but no leads. Or — we're invisible in AI search results. Or — our blog exists but we haven't published in months..."
                required
                rows={4}
                className="bg-[#181816] border border-[rgba(255,255,255,0.12)] rounded-[10px] p-[14px_18px] text-[15px] text-[#F0EDE6] outline-none resize-none transition-all duration-200 placeholder:text-[#3A3830] placeholder:italic focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.04)] focus:placeholder-transparent leading-[1.65]"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 p-[18px_32px] bg-[#CAFF4A] text-[#0B0B09] font-bold tracking-[0.04em] border-none rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-[13px] hover:opacity-90 hover:-translate-y-px active:translate-y-0"
              style={{ fontFamily: "var(--font-fahkwang)" }}
            >
              <span>Send Details — Get the Free Audit</span>
              <span className="w-8 h-8 bg-[rgba(0,0,0,0.15)] rounded-lg flex items-center justify-center text-[16px] shrink-0">
                →
              </span>
            </button>
          </form>

          <div className="text-[11px] text-[#6B6860] text-center mt-3.5 font-mono tracking-[0.06em]">
            Personalised report within 48 hours · No commitment
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-3.5 my-7">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#3A3830] font-mono">
              Prefer a call instead?
            </span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
          </div>

          <button
            onClick={() => setActivePath('call')}
            className="w-full p-[18px_32px] bg-transparent text-[#CAFF4A] font-bold tracking-[0.04em] border-[1.5px] border-[#CAFF4A] rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-[13px] hover:bg-[#CAFF4A] hover:text-[#0B0B09] hover:-translate-y-px active:translate-y-0"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <span>Book a 30-Minute Strategy Call</span>
            <span className="w-8 h-8 border border-[rgba(202,255,74,0.3)] rounded-lg flex items-center justify-center text-[16px]">
              →
            </span>
          </button>
        </div>
      )}

      {/* Call Panel */}
      {activePath === 'call' && (
        <div>
          <h2 className="text-[clamp(1.3rem,2vw,1.7rem)] font-bold tracking-[-0.02em] text-[#F0EDE6] mb-2 leading-[1.2] text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>
            Book a Strategy Call
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#6B6860] font-light italic mb-9 text-left" style={{ fontFamily: "var(--font-inter)" }}>
            30 minutes to discuss your content challenges and explore how we can help you grow.
          </p>

          <div className="bg-[#181816] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 mb-7">
            <div className="text-[9px] tracking-[0.22em] uppercase text-[#3A3830] mb-4.5 pb-3 border-b border-[rgba(255,255,255,0.07)] font-mono">
              What's included
            </div>

            <div className="space-y-0">
              <div className="flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
                <div className="text-[14px] leading-[1.55] text-[#6B6860] font-light text-left" style={{ fontFamily: "var(--font-inter)" }}>
                  <strong className="block text-[#F0EDE6] font-medium text-[14px] mb-0.25 text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>Content strategy review</strong>
                  We'll analyze your current content and identify quick wins
                </div>
              </div>

              <div className="flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
                <div className="text-[14px] leading-[1.55] text-[#6B6860] font-light text-left" style={{ fontFamily: "var(--font-inter)" }}>
                  <strong className="block text-[#F0EDE6] font-medium text-[14px] mb-0.25 text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>AI visibility assessment</strong>
                  Check how you're showing up in AI-generated answers
                </div>
              </div>

              <div className="flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
                <div className="text-[14px] leading-[1.55] text-[#6B6860] font-light text-left" style={{ fontFamily: "var(--font-inter)" }}>
                  <strong className="block text-[#F0EDE6] font-medium text-[14px] mb-0.25 text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>Actionable recommendations</strong>
                  Specific steps you can take immediately after the call
                </div>
              </div>

              <div className="flex items-start gap-3 py-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
                <div className="text-[14px] leading-[1.55] text-[#6B6860] font-light text-left" style={{ fontFamily: "var(--font-inter)" }}>
                  <strong className="block text-[#F0EDE6] font-medium text-[14px] mb-0.25 text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>No pressure, no pitch</strong>
                  Just honest advice and a clear path forward
                </div>
              </div>
            </div>
          </div>

          <button
            className="w-full p-[18px_32px] bg-transparent text-[#CAFF4A] font-bold tracking-[0.04em] border-[1.5px] border-[#CAFF4A] rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-[13px] hover:bg-[#CAFF4A] hover:text-[#0B0B09] hover:-translate-y-px active:translate-y-0"
            style={{ fontFamily: "var(--font-fahkwang)" }}
          >
            <span>Book Your 30-Minute Call</span>
            <span className="w-8 h-8 border border-[rgba(202,255,74,0.3)] rounded-lg flex items-center justify-center text-[16px]">
              →
            </span>
          </button>

          <div className="text-[11px] text-[#6B6860] text-center mt-3.5 font-mono tracking-[0.06em]">
            Free consultation · No obligation
          </div>
        </div>
      )}
    </main>
  );
}
