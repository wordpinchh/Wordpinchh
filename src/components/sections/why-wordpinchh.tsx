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
      description: "Search has two audiences now: the person reading your content and the AI system deciding whether to cite it. Every piece we write earns visibility across traditional search, AI answer engines, and the humans who actually buy from you.",
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
          title: "Brief = keyword + word count",
          text: "Writers receive minimal direction. Angle is guesswork."
        },
        {
          title: "Self-researched articles",
          text: "Writers search the web, regurgitate what already exists."
        },
        {
          title: "No conversion intent",
          text: "Pieces are informational — there's no desired reader action."
        }
      ],
      newWay: [
        {
          title: "Strategic brief every time",
          text: "Angle, reader belief, CTA, and AI categorisation — all defined before writing starts."
        },
        {
          title: "Interview-informed writing",
          text: "We extract your expertise. Your ideas, our words."
        },
        {
          title: "Results-oriented from word one",
          text: "Every paragraph moves the reader toward belief, then action."
        }
      ]
    },
    {
      id: 2,
      label: "Ahead of Search",
      icon: "🔭",
      title: "We Stay Ahead of How Search Is Changing",
      description: "SEO, GEO, AEO — the landscape is shifting faster than most businesses can track. We're obsessively current on how AI systems discover, evaluate, and cite content. You shouldn't have to worry about this. We do.",
      oldWay: [
        {
          title: "Chase last year's tactics",
          text: "Agencies recycle 2022 SEO playbooks into 2025 AI-first reality."
        },
        {
          title: "Ignore AI answer engines",
          text: "No strategy for Perplexity, ChatGPT, Gemini, or AI Overviews."
        },
        {
          title: "React to changes, never lead",
          text: "You're always one algorithm update behind."
        }
      ],
      newWay: [
        {
          title: "Obsessively current on AI search",
          text: "We track how AI systems discover, evaluate, and cite content in real-time."
        },
        {
          title: "Future-proof content strategy",
          text: "Built for today's SEO and tomorrow's AI answer engines."
        },
        {
          title: "You lead, competitors follow",
          text: "We position you ahead of algorithm changes, not behind them."
        }
      ]
    },
    {
      id: 3,
      label: "Built for Lean Teams",
      icon: "🚀",
      title: "Designed for Teams That Need Results, Not Headaches",
      description: "You don't have time for content agencies that need hand-holding. We're built for lean teams that need expertise, execution, and measurable outcomes without the drama.",
      oldWay: [
        {
          title: "High-maintenance relationships",
          text: "Constant check-ins, endless revisions, missed deadlines."
        },
        {
          title: "Generic content mills",
          text: "One-size-fits-all approach that doesn't understand your business."
        },
        {
          title: "No accountability",
          text: "They deliver words, not results. You're left wondering if it worked."
        }
      ],
      newWay: [
        {
          title: "Set it and forget it workflow",
          text: "Minimal meetings, maximum impact. We handle the details, you get the results."
        },
        {
          title: "Deeply customized approach",
          text: "We learn your business inside out so content sounds like you, just better."
        },
        {
          title: "Results-obsessed delivery",
          text: "Every piece comes with clear metrics and expected business outcomes."
        }
      ]
    }
  ];

  const stepColors = [
    { bg: "#1A1A2E", light: "#F2F2F8" },
    { bg: "#2D4A8A", light: "#F0F4FB" },
    { bg: "#2A7A5C", light: "#F0F9F5" },
    { bg: "#7A2A6E", light: "#F9F0F8" }
  ];

  return (
    <section className="py-20 z-40 relative min-h-screen" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#f0f8ff' }}></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 relative z-20">
          <div className="inline-block">
            <span className="text-xs font-semibold tracking-widest uppercase text-red-600 bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Our Approach
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A2E] mb-4 font-bold">
            Why <span className="font-bold">Wordpinchh</span>
          </h2>
          <p className="text-[#3D3D5C] max-w-lg mx-auto leading-relaxed">
            We have a four-step process that turns content into a compounding growth engine — for search, for AI, and for the humans who actually buy.
          </p>
        </div>

        {/* Step Tabs */}
        <nav className="flex justify-center mb-12 relative z-30">
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E2DDD5] z-0"></div>
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
                    activeStep === index ? 'text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                  style={{
                    backgroundColor: activeStep === index ? stepColors[index].bg : '#E2DDD5'
                  }}
                >
                  {index + 1}
                </div>
                <span className="text-xs font-medium whitespace-nowrap tracking-wide">
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
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ backgroundColor: stepColors[index].light }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-[#1A1A2E]">{step.title}</h3>
                  <p className="text-xs text-[#3D3D5C] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Old Way */}
                <div className="bg-gray-50 border border-[#E2DDD5] rounded-xl p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                    Old Way
                  </div>
                  <div className="space-y-3.5">
                    {step.oldWay.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 py-3.5 border-b border-gray-200 last:border-0 first:pt-0">
                        <svg className="w-5.5 h-5.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        <div>
                          <strong className="block text-xs font-semibold mb-1 text-gray-700">{item.title}</strong>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Wordpinchh Way
                  </div>
                  <div className="space-y-3.5">
                    {step.newWay.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 py-3.5 border-b border-gray-200 last:border-0 first:pt-0">
                        <svg className="w-5.5 h-5.5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke={stepColors[index].bg} strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="16 10 11 15 8 12"/>
                        </svg>
                        <div>
                          <strong className="block text-xs font-semibold mb-1" style={{ color: stepColors[index].bg }}>{item.title}</strong>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
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
