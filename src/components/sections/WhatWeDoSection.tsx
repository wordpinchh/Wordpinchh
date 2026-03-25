"use client";

export default function WhatWeDoSection() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="bg-[#f3efe7] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative">

        {/* Top label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs tracking-[0.3em] text-gray-500">02</span>
          <div className="w-12 h-px bg-gray-400" />
          <span className="text-xs tracking-[0.3em] text-gray-500">
            SERVICES
          </span>
        </div>

        {/* BIG TYPOGRAPHY */}
        <div className="leading-[0.9] space-y-2">

          {/* WHAT */}
          <h1 className="text-[80px] md:text-[120px] lg:text-[140px] font-serif font-black text-[#1a120b]">
            WHAT
          </h1>

          {/* WE (outline) */}
          <h1 className="text-[80px] md:text-[120px] lg:text-[140px] font-serif font-medium text-transparent stroke-text">
            WE
          </h1>

          {/* DO */}
          <h1 className="text-[80px] md:text-[120px] lg:text-[140px] font-serif font-black text-[#ff3c00]">
            DO
          </h1>
        </div>

        {/* TAGLINE */}
        <p className="mt-10 max-w-md text-sm italic text-gray-600 leading-relaxed">
          Three jobs. One agency. Google, AI engines, and humans who actually buy.
        </p>

        {/* BIG NUMBER */}
        <div className="absolute bottom-10 right-10 text-[80px] text-gray-300 font-semibold opacity-40">
          07
          <div className="text-xs tracking-[0.3em] mt-1">Services</div>
        </div>
      </div>

      {/* RIGHT SIDE (keep yours mostly same) */}
      <div className="bg-[#120a05] text-white px-8 md:px-16 py-20 flex flex-col justify-center">

        <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-8">
          WHAT'S COVERED
        </h3>

        <div className="space-y-6">
          {[
            "SEO Blog Writing",
            "LinkedIn Ghostwriting",
            "Landing Page Copywriting",
            "Website Content",
            "GEO: Generative Engine Optimization",
            "AEO: Answer Engine Optimization",
            "AI Content Strategy",
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-800 pb-4 group cursor-pointer"
            >
              <span className="text-lg group-hover:text-[#ff3c00] transition">
                {item}
              </span>

              <span className="text-xs px-3 py-1 rounded-full bg-[#1f140c] text-[#ff3c00]">
                {i < 4 ? "CORE" : "NEW"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-[#ff3c00] text-sm tracking-wide cursor-pointer">
          NOT SURE WHICH? TALK TO US →
        </div>
      </div>
    </section>
  );
}
