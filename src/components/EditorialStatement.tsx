"use client";

import { motion } from "framer-motion";

export default function EditorialStatement() {
  const lines = [
    { text: "WE BUILD BRANDS", highlights: ["BRANDS"] },
    { text: "THROUGH STRATEGY", highlights: ["STRATEGY"] },
    { text: "STORYTELLING  & DESIGN", highlights: ["STORYTELLING", "DESIGN"] }
  ];

  return (
    <section className="py-40 bg-black text-center overflow-hidden">

      {lines.map((line, lineIndex) => (
        <motion.h2
          key={lineIndex}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: lineIndex * 0.2 }}
          className="text-[56px] md:text-[80px] font-light leading-[1.05] tracking-tight text-white"
          style={{ 
            fontFamily: "'Fahkwang', sans-serif",
            letterSpacing: "-0.02em"
          }}
        >
          {line.text.split(" ").map((word, wordIndex) => {
            const isHighlighted = line.highlights.includes(word);
            
            return (
              <motion.span
                key={wordIndex}
                className={isHighlighted ? "inline-block" : ""}
                animate={isHighlighted ? {
                  color: ["#ffffff", "#9fffd1", "#ffffff"],
                } : {}}
                transition={isHighlighted ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: lineIndex * 0.2 + wordIndex * 0.1
                } : {}}
              >
                {word}
                {wordIndex < line.text.split(" ").length - 1 && " "}
              </motion.span>
            );
          })}
        </motion.h2>
      ))}

    </section>
  );
}
