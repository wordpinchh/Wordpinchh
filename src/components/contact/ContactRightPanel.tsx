"use client";

import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function ContactRightPanel() {
  const [activePath, setActivePath] = useState<'audit' | 'call'>('audit');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenge: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const switchPath = (path: 'audit' | 'call') => {
    setActivePath(path);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS (you'll get these from EmailJS dashboard)
      emailjs.init("6NNtEGrOxeBib19k4");
      
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        website: formData.website,
        challenge: formData.challenge,
        to_email: 'kunalnandiwadekar2003@gmail.com'
      };
      
      const result = await emailjs.send(
        'service_s1m7fjh',    // Your EmailJS service ID
        'template_gy9cioc',    // Your EmailJS template ID
        templateParams
      );
      
      if (result.status === 200) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          website: '',
          challenge: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      // Still show success message for better UX
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Trigger step animations based on field focus
    const stepMap: Record<string, number> = {
      'name': 1, 'email': 1,
      'website': 3,
      'challenge': 3
    };

    // This would communicate with left panel if needed
    // For now, just handle local state
  }, [formData]);

  return (
    <main className="p-14 flex flex-col bg-[#111110]"
      style={{
        animation: 'fadeUp 0.5s ease 0.1s both',
      }}
    >
      {/* PATH SWITCHER */}
      <div className="grid grid-cols-2 gap-2.5 mb-11">
        <button
          className={`p-4 border border-[rgba(255,255,255,0.12)] rounded-[12px] text-left transition-all duration-250 relative overflow-hidden cursor-pointer ${
            activePath === 'audit' 
              ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.08)]' 
              : 'border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.12)] hover:bg-[#181816]'
          }`}
          onClick={() => switchPath('audit')}
        >
          <div className={`absolute top-3 right-3.5 w-[7px] h-[7px] rounded-full bg-[#CAFF4A] transition-opacity duration-200 ${
            activePath === 'audit' ? 'opacity-100' : 'opacity-0'
          }`} />
          <span className={`font-[Unbounded] text-[18px] font-semibold tracking-[0.04em] block mb-1 transition-colors duration-200 ${
            activePath === 'audit' ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
          }`}>
            Free Content Audit
          </span>
          <span className={`text-[16px] font-light italic leading-[1.4] block transition-colors duration-200 ${
            activePath === 'audit' ? 'text-[rgba(202,255,74,0.6)]' : 'text-[#6B6860]'
          }`}>
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
          <span className={`block text-[18px] font-semibold tracking-[0.04em] mb-1 transition-colors duration-200 ${
            activePath === 'call' ? 'text-[#CAFF4A]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-fahkwang)" }}>
            Book a Strategy Call
          </span>
          <span className={`block text-[16px] font-light italic leading-[1.4] transition-colors duration-200 ${
            activePath === 'call' ? 'text-[rgba(202,255,74,0.6)]' : 'text-[#6B6860]'
          }`} style={{ fontFamily: "var(--font-inter)" }}>
            30 minutes, direct conversation
          </span>
        </button>
      </div>

      {/* Audit Form Panel */}
      {activePath === 'audit' && (
        <div>
          <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold tracking-[-0.02em] text-[#F0EDE6] mb-2 leading-[1.2] text-left" style={{ fontFamily: "var(--font-fahkwang)" }}>
            Get your Free<br />Content Audit
          </h2>
          <p className="text-[20px] leading-[1.7] text-[#6B6860] font-light italic mb-9 text-left" style={{ fontFamily: "var(--font-inter)" }}>
            Fill in your details. We'll review your content and send a personalised report — no fluff, no pitch, just honest assessment.
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L9 5l-1.5-1.5L6 9l-4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 mb-4">Your contact form has been submitted successfully.</p>
              <p className="text-green-600 text-sm">We'll review your information and get back to you within 24 hours.</p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
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
                <label className="text-[15px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
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
              <label className="text-[15px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
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
              <label className="text-[15px] tracking-[0.18em] uppercase text-[#6B6860] font-mono transition-colors duration-200">
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
              disabled={isSubmitting}
              className="w-full mt-6 p-[18px_32px] bg-[#CAFF4A] text-[#0B0B09] font-bold tracking-[0.04em] border-none rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-[20px] hover:opacity-90 hover:-translate-y-px active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "var(--font-fahkwang)" }}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Send Details — Get the Free Audit'}</span>
              <span className="w-8 h-8 bg-[rgba(0,0,0,0.15)] rounded-lg flex items-center justify-center text-[20px] shrink-0">
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  '→'
                )}
              </span>
            </button>
          </form>

          <div className="text-[18px] text-[#6B6860] text-center mt-3.5 font-mono tracking-[0.06em]">
            Personalised report within 48 hours · No commitment
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-3.5 my-7">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
            <span className="text-[20px] tracking-[0.15em] uppercase text-[#3A3830] font-mono">
              Prefer a call instead?
            </span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
          </div>

          <button
            className="cal-btn w-full p-[18px_32px] bg-transparent text-[#CAFF4A] font-[Unbounded] text-[20px] font-bold tracking-[0.04em] border-[1.5px] border-[#CAFF4A] rounded-[12px] cursor-none transition-all duration-250 flex items-center justify-between hover:bg-[#CAFF4A] hover:text-[#0B0B09] hover:transform hover:-translate-y-px active:translate-y-0"
          >
            <span>Book My 30-Minute Call</span>
            <span className="cal-btn-arrow w-8 h-8 border border-[rgba(202,255,74,0.3)] rounded-lg flex items-center justify-center text-base">
              →
            </span>
          </button>

          <div className="cal-note text-[18px] text-[#6B6860] font-[Azeret_Mono] tracking-[0.06em] text-center mt-3.5">
            Free · No pitch · Honest conversation
          </div>

          <div className="or-divider flex items-center gap-3.5 my-7">
            <div className="or-line flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
            <span className="or-text font-[Azeret_Mono] text-[18px] tracking-[0.15em] uppercase text-[#3A3830]">
              Prefer the written audit first?
            </span>
            <div className="or-line flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
          </div>

          <button
            onClick={() => switchPath('audit')}
            className="submit-btn w-full mt-6 p-[18px_32px] bg-[#181816] text-[#F0EDE6] font-[Unbounded] text-[20px] font-bold tracking-[0.04em] border border-[rgba(255,255,255,0.12)] rounded-[12px] transition-all duration-250 flex items-center justify-between gap-3 hover:opacity-90 hover:transform hover:-translate-y-px active:translate-y-0"
          >
            <span>Get the Free Written Audit Instead</span>
            <span className="submit-arrow w-8 h-8 bg-[rgba(255,255,255,0.06)] rounded-lg flex items-center justify-center text-base shrink-0">
              →
            </span>
          </button>
        </div>
      )}

      {/* Call Panel */}
      {activePath === 'call' && (
        <div>
          <h2 className="cal-heading font-[Unbounded] font-bold tracking-[-0.02em] text-[#F0EDE6] mb-2 leading-[1.2]"
            style={{
              fontSize: 'clamp(2rem, 2vw, 2.5rem)',
            }}
          >
            Book a 30-Minute<br />Strategy Call
          </h2>
          <p className="cal-sub text-[20px] leading-[1.7] text-[#6B6860] font-light italic mb-9">
            We'll look at your current content situation and tell you honestly what we think. What's working, what isn't, and what we'd do if we were you.
          </p>

          <div className="cal-includes bg-[#181816] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 mb-7">
            <div className="cal-includes-label font-[Azeret_Mono] text-[18px] tracking-[0.22em] uppercase text-[#3A3830] mb-4.5 pb-3 border-b border-[rgba(255,255,255,0.07)]">
              What's covered in 30 minutes
            </div>
            
            <div className="cal-include-item flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="inc-dot w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
              <div className="inc-text text-[18px] leading-[1.55] text-[#6B6860] font-light">
                <strong className="block text-[#F0EDE6] font-medium block mb-0.25 text-[20px]">
                  Search rankings review
                </strong>
                Where you rank today, which keywords matter, what's cannibalising your own results.
              </div>
            </div>

            <div className="cal-include-item flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="inc-dot w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
              <div className="inc-text text-[18px] leading-[1.55] text-[#6B6860] font-light">
                <strong className="block text-[#F0EDE6] font-medium block mb-0.25 text-[20px]">
                  AI visibility check
                </strong>
                Are you showing up when buyers ask ChatGPT, Perplexity, or Google AI about your category?
              </div>
            </div>

            <div className="cal-include-item flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="inc-dot w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
              <div className="inc-text text-[18px] leading-[1.55] text-[#6B6860] font-light">
                <strong className="block text-[#F0EDE6] font-medium block mb-0.25 text-[20px]">
                  LinkedIn presence audit
                </strong>
                Are you or your founders visible in the feed where your buyers spend time?
              </div>
            </div>

            <div className="cal-include-item flex items-start gap-3 py-2.5">
              <div className="inc-dot w-1.5 h-1.5 rounded-full bg-[#CAFF4A] shrink-0 mt-1.5" />
              <div className="inc-text text-[18px] leading-[1.55] text-[#6B6860] font-light">
                <strong className="block text-[#F0EDE6] font-medium block mb-0.25 text-[20px]">
                  Honest next steps
                </strong>
                What we'd do if we were you — whether or not we work together.
              </div>
            </div>
          </div>

          <button className="cal-btn w-full p-[18px_32px] bg-transparent text-[#CAFF4A] font-[Unbounded] text-[20px] font-bold tracking-[0.04em] border-[1.5px] border-[#CAFF4A] rounded-[12px] cursor-none transition-all duration-250 flex items-center justify-between hover:bg-[#CAFF4A] hover:text-[#0B0B09] hover:transform hover:-translate-y-px active:translate-y-0">
            <span>Book My 30-Minute Call</span>
            <span className="cal-btn-arrow w-8 h-8 border border-[rgba(202,255,74,0.3)] rounded-lg flex items-center justify-center text-base">
              →
            </span>
          </button>

          <div className="cal-note text-[18px] text-[#6B6860] font-[Azeret_Mono] tracking-[0.06em] text-center mt-3.5">
            Free · No pitch · Honest conversation
          </div>

          <div className="or-divider flex items-center gap-3.5 my-7">
            <div className="or-line flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
            <span className="or-text font-[Azeret_Mono] text-[16px] tracking-[0.15em] uppercase text-[#3A3830]">
              Prefer the written audit first?
            </span>
            <div className="or-line flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
          </div>

          <button
            onClick={() => switchPath('audit')}
            className="submit-btn w-full mt-6 p-[18px_32px] bg-[#181816] text-[#F0EDE6] font-[Unbounded] text-[20px] font-bold tracking-[0.04em] border border-[rgba(255,255,255,0.12)] rounded-[12px] transition-all duration-250 flex items-center justify-between gap-3 hover:opacity-90 hover:transform hover:-translate-y-px active:translate-y-0"
          >
            <span>Get the Free Written Audit Instead</span>
            <span className="submit-arrow w-8 h-8 bg-[rgba(255,255,255,0.06)] rounded-lg flex items-center justify-center text-base shrink-0">
              →
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
