"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="sticky top-[80px] min-h-[60vh] md:h-[60vh] bg-black text-white z-30 flex items-center justify-center px-6">

      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[78px]
              font-light
              leading-tight
              max-w-[1200px]
              mx-auto
              whitespace-normal
              lg:whitespace-nowrap
            "
            style={{ fontFamily: "'Fahkwang', sans-serif" }}
          >
            Content Challenges &{" "}
            <span className="text-purple-400">Solutions</span>
          </h2>
          <p className="
            mt-6 md:mt-8
            text-sm sm:text-base
            leading-relaxed
            text-gray-300
            max-w-xl md:max-w-2xl
            mx-auto
            text-center
          ">
            Every business faces content challenges. We transform these obstacles
            into opportunities for growth and authority building.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
