"use client";

import { motion } from "framer-motion";

export default function LetsWorkTogether() {
  return (
    <section className="bg-black text-white py-[180px] px-[6vw] relative z-70">

      <div className="max-w-[1400px] mx-auto">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[60px] lg:text-[90px] leading-none mb-8 Family Fahkwang Category  sans-serif Styles  Weights 200 Subsets latin Formats woff2 text-white" style={{ fontFamily: "'Fahkwang', sans-serif", fontStyle: 'italic', fontWeight: 200 }}
        >
          Let's Work Together
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[4px] bg-[#cdebe5] mb-20"
        ></motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20"
        >

          {/* Left */}
          <div>
            <p className="text-gray-400 mb-6">
              Follow our journey
            </p>

            <ul className="space-y-3 text-lg">
              <li className="group cursor-pointer hover:text-white transition">
                Instagram
                <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="group cursor-pointer hover:text-white transition">
                LinkedIn
                <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="group cursor-pointer hover:text-white transition">
                Email
                <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>

            <p className="text-gray-400 mb-6">
              Want to collaborate with us?
            </p>

            <button className="bg-[#cdebe5] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Get Started
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
