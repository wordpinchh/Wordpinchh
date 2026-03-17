"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden"
    >

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-linear-to-r from-purple-500 via-blue-500 to-transparent blur-3xl" />
      </motion.div>

      {/* Logo Glow Behind */}
      <div className="absolute w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Logo */}
      <motion.img
        src="/wordpinchh-logo1.png"
        alt="Wordpinchh"
        className="w-[180px] md:w-[220px] object-contain relative"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </motion.div>
  );
}
