"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section className="py-28" style={{ 
      background: "floralwhite",
      borderTop: "16px solid",
      borderBottom: "16px solid",
      borderImage: "linear-gradient(90deg, #6C5CE7, #A29BFE, #74b9ff, #6C5CE7) 1"
    }}>
      <div className="max-w-[900px] mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl leading-relaxed mb-8" style={{ color: "black" }}>
            We collaborate with brands that believe in <span className="font-semibold" style={{ color: "#6C5CE7" }}>bold ideas</span>, <span className="font-semibold" style={{ color: "#6C5CE7" }}>powerful storytelling</span>, and meaningful digital growth.
          </p>

          <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: "black" }}>
            Together, we transform content into strategy and creativity into <span className="font-semibold" style={{ color: "#6C5CE7" }}>measurable impact</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
