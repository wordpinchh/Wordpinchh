"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="relative bg-black text-white py-32 min-h-screen flex items-center justify-center z-20 transition-colors duration-500" style={{ paddingBottom: '0px' }}>
      <div className="text-center max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold" style={{marginLeft: -278, width: 1187, fontSize: '78px'
          }}>
            Content Challenges &{" "}
            <span className="text-purple-400">Solutions</span>
          </h2>
          <p className="mt-8 text-[16.8px] leading-[25px] text-gray-300 max-w-2xl mx-auto text-center">
            Every business faces content challenges. We transform these obstacles
            into opportunities for growth and authority building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
