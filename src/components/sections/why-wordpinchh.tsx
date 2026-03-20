"use client";

import { useState } from "react";

export function WhyWordpinchh() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: "For Humans & Machines",
      icon: "✍️",
      title: "Writing for Two Audiences",
      description: "Search has two audiences now: person reading your content and AI system deciding whether to cite it. Every piece we write earns visibility across traditional search, AI answer engines, and for humans who actually buy from you.",
      oldWay: [
        {
          title: "Write for Google only",
          text: "Optimise for rankings. Ignore AI search entirely."
        },
        {
          title: "Keywords stuffed, readers ignored",
          text: "Content optimised for bots but unreadable to humans."
        },
        {
          title: "Invisible in AI answers",
          text: "Not structured to be cited by ChatGPT, Perplexity, or Gemini."
        }
      ],
      newWay: [
        {
          title: "Write for humans AND AI",
          text: "Every piece earns visibility across SEO, GEO, and AEO simultaneously."
        },
        {
          title: "Compelling enough to convert",
          text: "Reads naturally, persuades deeply, ranks broadly."
        },
        {
          title: "Built to be cited by AI engines",
          text: "Structured so ChatGPT, Gemini, and Perplexity surface your brand."
        }
      ]
    },
    {
      id: 1,
      label: "Strategy First",
      icon: "🧠",
      title: "We Think Before We Type",
      description: "Every brief starts with strategy — what angle will cut through, what the reader needs to believe, what action we want them to take, and how we want AI to categorise and cite this content. Writing without that thinking produces words. Writing with it produces results.",
      oldWay: [
        {
          title: "Generic brief",
          text: "One-size-fits-all approach that misses the mark."
        },
        {
          title: "No research or insight",
          text: "Writing based on assumptions rather than data."
        },
        {
          title: "Poor structure",
          text: "Hard for AI to extract and cite properly."
        }
      ],
      newWay: [
        {
          title: "Data-driven strategy",
          text: "Every brief starts with deep research into your market, competitors, and what's already working."
        },
        {
          title: "Clear messaging framework",
          text: "We define exactly what problem we solve and how, with crystal-clear positioning."
        },
        {
          title: "Persuasive architecture",
          text: "Content structured to guide readers from problem to solution naturally."
        }
      ]
    },
    {
      id: 2,
      label: "Create & Optimize",
      icon: "⚡",
      title: "We Write, You Review",
      description: "We write. You review. We refine. Most clients request one round of edits, if that. Then we hit publish.",
      oldWay: [
        {
          title: "Slow, generic writing",
          text: "Content that sounds like it could be for any company."
        },
        {
          title: "No quality control",
          text: "Publishing without proper review and optimization."
        },
        {
          title: "Missing SEO elements",
          text: "Content that won't rank or get cited properly."
        }
      ],
      newWay: [
        {
          title: "Collaborative writing",
          text: "We work with you to get the tone and insights exactly right."
        },
        {
          title: "SEO-optimized publishing",
          text: "Every piece is optimized for search engines and AI citation from day one."
        },
        {
          title: "Performance tracking",
          text: "We monitor rankings, AI mentions, and engagement to optimize continuously."
        }
      ]
    },
    {
      id: 3,
      label: "Distribute & Amplify",
      icon: "🚀",
      title: "We Measure & Iterate",
      description: "We track rankings, AI citation appearances, engagement, and lead attribution. What's working gets doubled down. What isn't gets cut.",
      oldWay: [
        {
          title: "Publish and pray",
          text: "Content published without tracking or optimization."
        },
        {
          title: "No data analysis",
          text: "Flying blind without knowing what actually works."
        },
        {
          title: "Set it and forget it",
          text: "Content that doesn't compound or improve over time."
        }
      ],
      newWay: [
        {
          title: "Comprehensive analytics",
          text: "We track everything: rankings, AI citations, engagement, conversions, and ROI."
        },
        {
          title: "Continuous optimization",
          text: "We constantly test and improve content based on performance data."
        },
        {
          title: "Strategic amplification",
          text: "We amplify what works across all channels to maximize reach and impact."
        }
      ]
    }
  ];

  const stepColors = [
    { bg: '#f59e0b', light: '#fef2f2' },
    { bg: '#3b82f6', light: '#eef2ff' },
    { bg: '#8b5cf6', light: '#e0f2fe' },
    { bg: '#dc2626', light: '#fef3c7' }
  ];

  return (
    <section className="py-20 z-40 relative min-h-screen" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#f0f8ff' }}></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 relative z-20">
          <div className="inline-block">
            <span className="font-label text-black mb-6 inline-block">
              Our Approach
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-black mb-4 font-bold" style={{ fontFamily: 'var(--font-fahkwang)' }}>
            Why <span className="font-bold">Wordpinchh</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', lineHeight: 1.7 , color: 'black'}}>
            We have a four-step process that turns content into a compounding growth engine — for search, for AI, and for the humans who actually buy.
          </p>
        </div>

        {/* Step Tabs */}
        <nav className="flex justify-center mb-12 relative z-30">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e2d5d5] z-0"></div>
          <div className="flex gap-0 relative z-10">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center gap-2 px-6 pb-4 pt-3 cursor-pointer transition-all duration-200 ${
                  activeStep === index ? 'text-current' : 'text-gray-400'
                }`}
                style={{
                  color: activeStep === index ? stepColors[index].bg : '#999'
                }}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-250 ${
                    activeStep === index ? 'text-black' : 'bg-gray-300 text-gray-600'
                  }`}
                  style={{
                    backgroundColor: activeStep === index ? stepColors[index].bg : '#E2DDD5'
                  }}
                >
                  {index + 1}
                </div>
                <span className="text-xs font-medium whitespace-nowrap tracking-wide text-black" style={{ fontFamily: 'var(--font-fahkwang)' }}>
                  {step.label}
                </span>
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-250 ${
                    activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    backgroundColor: activeStep === index ? stepColors[index].bg : 'transparent'
                  }}
                ></div>
              </button>
            ))}
          </div>
        </nav>

        {/* Active Panel */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 relative z-20">
          {steps.map((step, index) => (
            <div key={step.id} className={activeStep === index ? 'block' : 'hidden'}>
              {/* Step Description */}
              <div className="bg-white border border-[#E2DDD5] rounded-xl p-5 mb-7 flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                  style={{ backgroundColor: stepColors[index].light }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-heading text-sm mb-1 text-black" style={{ fontFamily: 'var(--font-fahkwang)' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-light" style={{ color: 'darkslategray', fontFamily: 'var(--font-barlow)' }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Old Way */}
                <div className="bg-gray-50 border border-[#E2DDD5] rounded-xl p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-black mb-5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Old Way
                  </div>
                  <div className="space-y-3.5">
                    {step.oldWay.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 py-3.5 border-b border-gray-200 last:border-0 first:pt-0">
                        <svg className="w-5.5 h-5.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        <div>
                          <strong className="block text-xs font-semibold mb-1 text-black">{item.title}</strong>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wordpinchh Way */}
                <div 
                  className="border-2 rounded-xl p-7 bg-white"
                  style={{ borderColor: stepColors[index].bg, backgroundColor: stepColors[index].light }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: stepColors[index].bg }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Wordpinchh Way
                  </div>
                  <div className="space-y-3.5">
                    {step.newWay.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 py-3.5 border-b border-gray-200 last:border-0 first:pt-0">
                        <svg className="w-5.5 h-5.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={stepColors[index].bg} strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div>
                          <strong className="block text-xs font-semibold mb-1 text-black" style={{ color: stepColors[index].bg }}>{item.title}</strong>
                          <p className="text-xs text-muted leading-relaxed" style={{ color: 'grey' }}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeStep === index ? 'w-6 rounded' : 'w-2'
              }`}
              style={{
                backgroundColor: activeStep === index ? stepColors[index].bg : '#E2DDD5'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
