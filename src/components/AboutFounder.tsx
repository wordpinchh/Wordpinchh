"use client";

export default function AboutFounder() {
  return (
    <section className="py-32" style={{ background: "#d7f5eb" }}>

      <div className="max-w-[1320px] mx-auto px-6">

        <h2 className="text-[72px] font-light tracking-tight mb-16 text-center leading-[1.1] text-black" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
          MEET THE <span className="font-semibold">FOUNDER</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Founder Image */}
          <div>
            <img 
              src="/about/wordpinchh.jpg"
              alt="Founder of Wordpinchh"
              className="rounded-xl w-full object-cover h-[520px] lg:h-[600px]"
            />
          </div>

          {/* Founder Info */}
          <div>

            <h3 className="text-3xl font-semibold mb-2 text-black">
              Founder Name
            </h3>

            <p className="text-neutral-500 mb-6 text-lg">
              Founder, Wordpinchh
            </p>

            <p className="text-neutral-600 leading-relaxed text-lg">
              Passionate about digital storytelling and brand strategy, founder of Wordpinchh focuses on helping businesses transform ideas into impactful brand experiences. With a deep understanding of content, design, and digital growth, Wordpinchh was built to empower brands with purposeful communication and measurable results.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
