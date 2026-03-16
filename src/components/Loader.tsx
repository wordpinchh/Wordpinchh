"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]"
      >
        <Image
          src="/about/wordpinchh-logo-final.png"
          alt="Wordpinchh"
          width={220}
          height={80}
          priority
        />
      </motion.div>
    </div>
  );
}
