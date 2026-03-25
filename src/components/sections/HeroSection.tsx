"use client";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[42vh] border-b-2 border-[#0F0A00]">

      {/* LEFT */}
      <div className="px-[60px] py-[52px] border-r-2 border-[#0F0A00] flex flex-col justify-between bg-[#F5F0E8]">

        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.12em] text-[#8A7F6E]">
            02
          </span>
          <div className="w-[48px] h-[1px] bg-[#8A7F6E]" />
          <span className="font-mono text-[20px] tracking-[0.12em] text-[#8A7F6E] uppercase">
            Services
          </span>
        </div>

        {/* Title */}
        <div>
          <h1 
            className="font-[Bebas_Neue] text-[clamp(12rem,12vw,11rem)] leading-[0.88] tracking-[0.01em] text-[#0F0A00] mt-5"
            style={{
              fontWeight: 600,
              fontSize: '200px'
            }}
          >
            WHAT <br />
            <span className="outline-text">WE</span> <br />
            <span className="text-[#FF3B00]">DO</span>
          </h1>

          {/* Bottom */}
          <div className="flex items-end justify-between mt-8 gap-5">
            <p className="text-[25px] leading-[1.7] text-[#8A7F6E] italic font-light max-w-[400px]">
              Three jobs. One agency. Google, AI engines, and the humans who actually buy.
            </p>

            <div className="font-[Bebas_Neue] text-[6rem] leading-none text-[#E3DBC8] text-right">
              07
              <span className="block font-mono text-[20px] tracking-[0.2em] text-[#8A7F6E]">
                Services
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-[#0F0A00] px-10 py-12 flex flex-col justify-between relative overflow-hidden text-white">

        {/* Background W */}
        <div className="absolute bottom-[-40px] right-[-20px] text-[280px] font-[Bebas_Neue] text-white/5 pointer-events-none leading-none">
          W
        </div>

        {/* Content */}
        <div>
          <div className="font-mono text-[20px] tracking-[0.2em] text-white/40 uppercase mb-6">
            What's covered
          </div>

          <div className="flex flex-col">
            {[
              ["SEO Blog Writing", "Core"],
              ["LinkedIn Ghostwriting", "Core"],
              ["Landing Page Copy", "Core"],
              ["Website Content", "Core"],
              ["GEO Optimization", "New"],
              ["AEO Optimization", "New"],
              ["AI Content Strategy", "New"],
            ].map(([title, tag], i) => (
              <div
                key={i}
                className="flex items-center justify-between py-[18px] border-t border-white/10"
              >
                <span className="text-[22px] font-serif font-bold">
                  {title}
                </span>

                <span
                  className={`text-[15px] uppercase tracking-[0.12em] px-3 py-1 rounded-full font-mono ${
                    tag === "Core"
                      ? "bg-[#C4922A]/20 text-[#C4922A]"
                      : "bg-[#FF3B00]/20 text-[#FF3B00]"
                  }`}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-[17px] tracking-[0.1em] uppercase text-[#FF3B00] hover:gap-4 transition-all"
          >
            Not sure which? Talk to us →
          </a>
        </div>
      </div>
    </section>
  );
}
