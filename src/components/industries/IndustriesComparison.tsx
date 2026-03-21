"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    title: "Build authority\nthat earns inbound",
    description: "You have expertise the market wants. The gap is visibility — on Google, on LinkedIn, and now in AI answers. We close that gap systematically.",
    tags: "LinkedIn · SEO · GEO · Website Copy",
    color: "#E8FF47",
    colorDim: "rgba(232,255,71,0.08)",
    label: "Founders & Solopreneurs"
  },
  {
    title: "Build a compounding\nacquisition channel",
    description: "Content that targets buyers, not browsers. Funnel-mapped, intent-driven, and structured to appear in both Google and AI answers where your buyers research.",
    tags: "SEO · Comparison Pages · GEO · AEO",
    color: "#00D9FF",
    colorDim: "rgba(0,217,255,0.08)",
    label: "B2B SaaS Startups"
  },
  {
    title: "Build the trust that\nwins the meeting",
    description: "Thought leadership that proves you think differently. Articles that demonstrate methodology. A website that makes calling you feel obvious — not hopeful.",
    tags: "Thought Leadership · SEO · GEO · Positioning",
    color: "#FF6B35",
    colorDim: "rgba(255,107,53,0.08)",
    label: "Consulting Firms"
  }
];

export default function IndustriesComparison() {
  return (
    <section className="relative w-full border-t border-white/10 px-6 md:px-12 lg:px-16 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            className="group bg-white/3 border border-white/10 rounded-[16px] p-7 cursor-pointer hover:border-white/20 transition-all duration-300"
          >
            {/* Label */}
            <div 
              className="text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: item.color }}
            >
              {item.label}
            </div>

            {/* Title */}
            <h3 className="font-heading text-[1.25rem] leading-[1.2] tracking-[-0.01em] mb-2.5 whitespace-pre-line">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[12px] text-white/50 leading-[1.65] font-light mb-4.5">
              {item.description}
            </p>

            {/* Tags */}
            <div
              className="inline-block px-2.5 py-1 rounded-[4px] text-[10px] tracking-widest font-medium"
              style={{
                backgroundColor: item.colorDim,
                color: item.color,
              }}
            >
              {item.tags}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
