"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-28 bg-black">

      <div className="max-w-[1320px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div>

            <h2 className="text-[80px] font-light tracking-tight mb-10 text-white" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
              OUR STORY
            </h2>

            <p className="text-[18px] leading-[28px] text-neutral-400 max-w-[520px]">
              Founded in 2020, Wordpinchh emerged from a simple observation: 
              businesses needed more than just digital marketing—they needed 
              partners who understood their vision and could translate it into 
              measurable results. Our team of experts brings together diverse 
              backgrounds in technology, design, and marketing to create holistic 
              digital strategies that drive growth.
              <br /><br />
              We believe in the power of thoughtful design and strategic 
              thinking to transform brands and create lasting impact in the 
              digital landscape.
            </p>

          </div>

          {/* Image */}
          <div>
            <img
              src="/about/wordpinchh workspace.webp"
              alt="Wordpinchh workspace"
              className="w-full h-[520px] object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}
