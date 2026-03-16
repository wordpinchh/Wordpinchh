"use client";

import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-[1320px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=800&q=80"
              width={700}
              height={800}
              alt="Wordpinchh team"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Text */}
          <div>

            <h2 className="text-[80px] font-light tracking-tight mb-10 text-black" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
              ABOUT US
            </h2>

            <p className="text-[18px] leading-[28px] text-neutral-600 max-w-[520px]">
              Wordpinchh is a digital-first creative studio focused on
              building meaningful brand experiences. We combine design,
              technology, and strategy to help brands communicate with
              clarity and impact.
              <br /><br />
              Our work blends thoughtful storytelling with modern digital
              craftsmanship — creating products, platforms, and campaigns
              that feel intentional, scalable, and future-ready.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
