"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RequestCTA() {
  return (
    <section className="mx-[80px] mb-[80px] bg-black rounded-[20px] p-[56px_64px] grid grid-cols-[1fr_auto] items-center gap-12 relative overflow-hidden reveal">
      
      {/* Background Text */}
      <div className="absolute right-[180px] top-[-20px] text-[200px] font-bold text-white/3 leading-none pointer-events-none tracking-tight">
        MORE
      </div>

      {/* Left Content */}
      <div>
        {/* Eyebrow */}
        <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-[14px] flex items-center gap-2">
          <div className="flex-1 h-px bg-white/20" />
          Want to see more?
        </div>

        {/* Title */}
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white mb-3">
          Full samples available<br />on <em className="text-[#B5E550]">request.</em>
        </h2>

        {/* Description */}
        <p className="text-[14px] leading-[1.7] text-white/45 max-w-[440px]">
          Including before/after comparisons, full-length SEO articles, GEO-structured content, and LinkedIn ghostwriting examples. No fluff — just actual work.
        </p>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col gap-3">
        <Link href="/contact">
          <button className="px-8 py-4 bg-[#B5E550] text-black text-[13px] font-semibold tracking-[0.05em] rounded-lg hover:scale-[0.97] active:scale-[0.95] transition-all duration-150 whitespace-nowrap">
            → Request Sample Work
          </button>
        </Link>
        
        <Link href="/contact">
          <button className="px-8 py-4 bg-transparent border border-white/15 text-white/60 text-[13px] font-semibold tracking-[0.05em] rounded-lg hover:scale-[0.97] active:scale-[0.95] transition-all duration-150 whitespace-nowrap">
            Book a Strategy Call
          </button>
        </Link>
        
        <div className="text-[10px] text-white/20 text-center tracking-widest">
          Samples sent within 24 hours
        </div>
      </div>
    </section>
  );
}
