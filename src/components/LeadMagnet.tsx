"use client";

import Link from "next/link";

export default function LeadMagnet() {
  return (
    <section className="bg-[#c7dfd8] py-20 md:py-28 lg:py-[140px] px-6 relative z-60">

      <div className="max-w-[900px] mx-auto">

        <div className="relative bg-[#0a0a0f] rounded-[24px] p-[80px] text-center border border-white/10">

          {/* Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600/30 to-indigo-600/30 blur-[120px] opacity-40 -z-10"></div>

          {/* Heading */}
          <h2 className="font-heading text-white mb-6 leading-none tracking-wide" style={{ 
            fontSize: '51px', 
            fontFamily: "var(--font-fahkwang)",
            fontWeight: 300,
            letterSpacing: "-0.02em"
          }}>
            Free Content Audit :{" "}
            <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              See exactly where your content is leaving money on the table
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-600 leading-relaxed text-[16px] sm:text-[18px] mb-10" style={{ 
            fontFamily: "Inter, sans-serif"
          }}>
            We will analyze your business and show you:
          </p>

          {/* Bullet Points */}
          <ul className="text-neutral-600 leading-relaxed text-[16px] sm:text-[18px] space-y-3 mb-12 text-left max-w-[520px] mx-auto" style={{ 
            fontFamily: "Inter, sans-serif"
          }}>
            <li>• 5 high-value blog topics your business should own</li>
            <li>• An honest look at what's wrong with your current website copy</li>
            <li>• 3 LinkedIn post angles that work for your specific expertise</li>
            <li>• Your top 2 competitors' content strategy, reverse-engineered</li>
            <li>• Whether your content is being cited by AI tools</li>
          </ul>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            <input
              type="text"
              placeholder="Name"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white"
            />

            <input
              type="text"
              placeholder="Company"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white"
            />

            <input
              type="text"
              placeholder="Website (optional)"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white"
            />

          </div>

          {/* Button */}
          <Link href="/contact">
            <button className="font-body text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all hover:opacity-90">
              Get Free Report
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
