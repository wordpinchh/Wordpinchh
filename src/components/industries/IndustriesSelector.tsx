"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    id: 1,
    name: "Founders &\nSolopreneurs",
    tagline: "You've built real expertise. Your content should prove it.",
    color: "#E8FF47",
    colorDim: "rgba(232,255,71,0.08)",
    title: "You're good at what you do.\nYour online presence should be too.",
    subtitle: "You get referrals. You close deals when you're in the room. The problem is your online presence doesn't reflect any of that — and it's limiting who finds you.",
    intro: "We help founders build a content presence that works while you sleep: LinkedIn posts that attract inbound DMs, a blog that ranks for searches your ideal clients are making, and a website that closes conversations before they even start.",
    deliverables: [
      { icon: "LP", title: "LinkedIn Ghostwriting", desc: "Posts that sound like you — just sharper and more consistent" },
      { icon: "WC", title: "Website Copy", desc: "Translates your experience into client-facing value" },
      { icon: "SB", title: "SEO Blog", desc: "Ranks for searches your ideal clients are already making" },
      { icon: "GE", title: "GEO Content", desc: "Puts your name in AI recommendations for your expertise area" },
    ],
    signals: [
      { quote: "You're good at what you do. You get referrals. You close deals when you're in the room.", label: "The situation we start with — every time" },
      { quote: "A clear, differentiated point of view — not a personal brand that feels cringe.", label: "What we build toward" },
      { quote: "Increasingly — content structured to get your name cited when someone asks AI for experts in your field.", label: "The new opportunity" },
    ],
    ctaText: "Typically works for consultants, coaches, freelancers, and thought leaders",
    ctaButton: "Start with a content audit →"
  },
  {
    id: 2,
    name: "B2B SaaS\nStartups",
    tagline: "Your cheapest acquisition channel — when it's done right.",
    color: "#00D9FF",
    colorDim: "rgba(0,217,255,0.08)",
    title: "Content isn't a nice-to-have.\nIt's your cheapest acquisition channel.",
    subtitle: "The SaaS companies that win with content don't publish more. They publish smarter — bottom-of-funnel posts that capture people already looking to buy.",
    intro: "And now there's a third channel: AI search. Your buyers are asking ChatGPT and Perplexity which tools to use. The SaaS companies getting cited in those answers are building an acquisition channel that compounds with zero ad spend.",
    deliverables: [
      { icon: "SC", title: "SEO Funnel Content", desc: "Mapped to TOFU, MOFU, and BOFU — not random topics" },
      { icon: "CP", title: "Comparison & Alt Pages", desc: "Convert high-intent searchers at the decision stage" },
      { icon: "PL", title: "Product-Led Blog", desc: "Integrates your tool naturally into every narrative" },
      { icon: "AI", title: "GEO + AEO Content", desc: "Appear in AI tool recommendations — ChatGPT, Perplexity, Gemini" },
      { icon: "FL", title: "Founder LinkedIn", desc: "Builds trust with your target market at the top of the funnel" },
    ],
    signals: [
      { quote: "The SaaS companies that win with content don't publish more. They publish smarter.", label: "The principle we operate on" },
      { quote: "Bottom-of-funnel posts that capture people already looking to buy.", label: "Where we start — not traffic, but intent" },
      { quote: "An acquisition channel that compounds with zero ad spend.", label: "The compounding return we build toward" },
    ],
    ctaText: "Typically works for B2B SaaS with 6+ months of content runway to invest",
    ctaButton: "Book a SaaS content strategy call →"
  },
  {
    id: 3,
    name: "Consulting\nFirms",
    tagline: "The firms that publish consistently get called first.",
    color: "#FF6B35",
    colorDim: "rgba(255,107,53,0.08)",
    title: "The firms that publish\nconsistently get called first.",
    subtitle: "Consulting is a trust business. And trust at scale is built through consistent, intelligent content — articles that demonstrate your methodology, insights that prove you think differently.",
    intro: "We help consulting firms create the content infrastructure that larger firms have built over decades — adapted for boutique and specialist firms that need to move faster and be more specific. That includes getting cited when decision-makers ask AI for recommendations in your space.",
    deliverables: [
      { icon: "TL", title: "Thought Leadership Articles", desc: "Showcase your frameworks and IP — not generic insights" },
      { icon: "SC", title: "SEO Content", desc: "Attracts searches from your ideal client profile" },
      { icon: "WC", title: "Website Positioning Copy", desc: "Positions your firm as the specialist, not just a provider" },
      { icon: "PA", title: "Partner LinkedIn Content", desc: "Builds individual authority for founding partners" },
      { icon: "GE", title: "GEO Citations", desc: "Earns mentions when buyers ask AI for firms in your category" },
    ],
    signals: [
      { quote: "The firms that publish consistently are the ones that get called first.", label: "What consistent publishing actually does" },
      { quote: "A website that makes the decision to call you feel obvious.", label: "The positioning outcome we build toward" },
      { quote: "Boutique and specialist firms that need to move faster and be more specific.", label: "Why we focus on this type — not the Big 4" },
    ],
    ctaText: "Typically works for boutique and specialist firms — strategy, ops, finance, HR, legal",
    ctaButton: "Discuss your firm's content strategy →"
  }
];

export default function IndustriesSelector() {
  const [activeTab, setActiveTab] = useState(1);
  const currentIndustry = industries.find(ind => ind.id === activeTab);

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] min-h-[680px]">
        
        {/* LEFT: TABS */}
        <nav className="border-r border-white/10">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className={`relative px-10 py-9 border-b border-white/10 cursor-pointer transition-all ${
                activeTab === industry.id ? 'bg-white/5' : 'hover:bg-white/2'
              }`}
              onClick={() => setActiveTab(industry.id)}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Active indicator */}
              {activeTab === industry.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ backgroundColor: industry.color }}
                  initial={false}
                />
              )}

              {/* Index */}
              <div
                className={`text-[10px] tracking-[0.18em] uppercase mb-2 transition-colors ${
                  activeTab === industry.id ? 'opacity-70' : 'text-white/20'
                }`}
                style={{ color: activeTab === industry.id ? industry.color : undefined }}
              >
                {String(industry.id).padStart(2, '0')} / 03
              </div>

              {/* Name */}
              <div
                className={`font-heading text-[1.5rem] leading-[1.2] tracking-[-0.01em] whitespace-pre-line transition-colors ${
                  activeTab === industry.id ? 'text-white' : 'text-white/40'
                }`}
              >
                {industry.name}
              </div>

              {/* Tagline */}
              <motion.div
                className="text-[12px] text-white/30 italic leading-normal mt-1.5 overflow-hidden"
                initial={false}
                animate={{
                  maxHeight: activeTab === industry.id ? 60 : 0,
                  opacity: activeTab === industry.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {industry.tagline}
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[16px]"
                initial={false}
                animate={{
                  opacity: activeTab === industry.id ? 1 : 0,
                  x: activeTab === industry.id ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                style={{ color: activeTab === industry.id ? industry.color : undefined }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </nav>

        {/* RIGHT: PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative p-12 lg:p-16 overflow-y-auto"
          >
            {/* Background Number */}
            <div
              className="absolute -right-5 -top-8 text-[280px] leading-none opacity-[0.04] font-heading pointer-events-none select-none"
              style={{ color: currentIndustry?.color }}
            >
              {String(currentIndustry?.id).padStart(2, '0')}
            </div>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-5 h-px" style={{ backgroundColor: currentIndustry?.color }} />
                <span
                  className="text-[10px] tracking-[0.22em] uppercase"
                  style={{ color: currentIndustry?.color }}
                >
                  {currentIndustry?.name.replace('\n', ' ')}
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 whitespace-pre-line">
                {currentIndustry?.title}
              </h2>

              <p className="text-[15px] text-white/50 italic leading-[1.65] font-light max-w-[540px]">
                {currentIndustry?.subtitle}
              </p>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Left Column */}
              <div>
                <p className="text-[14px] leading-[1.85] text-white/50 font-light mb-7">
                  {currentIndustry?.intro}
                </p>

                <div className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-3.5 pb-2.5 border-b border-white/10">
                  What we build for you
                </div>

                {currentIndustry?.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 py-3 border-b border-white/10 last:border-b-0"
                  >
                    <div
                      className="w-7 h-7 rounded-[6px] flex items-center justify-center shrink-0 text-[12px] font-semibold font-mono mt-0.5"
                      style={{
                        backgroundColor: currentIndustry?.colorDim,
                        color: currentIndustry?.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white mb-0.5 block">
                        {item.title}
                      </div>
                      <div className="text-[13px] text-white/50 font-light leading-[1.55]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div>
                {currentIndustry?.signals.map((signal, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-[14px] border mb-4 last:mb-0 relative overflow-hidden ${
                      i === 0 ? '' : 'bg-white/3 border-white/10'
                    }`}
                    style={{
                      backgroundColor: i === 0 ? currentIndustry?.colorDim : undefined,
                      borderColor: i === 0 ? `${currentIndustry?.color}20` : undefined,
                    }}
                  >
                    {i === 0 && (
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[14px]"
                        style={{ backgroundColor: currentIndustry?.color }}
                      />
                    )}
                    <div className="font-heading text-[1.05rem] italic leading-[1.55] text-white mb-3.5">
                      {signal.quote}
                    </div>
                    <div className="text-[11px] text-white/20 tracking-[0.06em]">
                      {signal.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-7 border-t border-white/10 flex items-center justify-between gap-6">
              <span className="text-[13px] text-white/50 font-light italic">
                {currentIndustry?.ctaText}
              </span>
              <button
                className="px-5.5 py-2.5 rounded-[8px] text-[12px] font-medium tracking-[0.04em] border-none text-black whitespace-nowrap hover:opacity-85 transition-opacity"
                style={{ backgroundColor: currentIndustry?.color }}
              >
                {currentIndustry?.ctaButton}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
