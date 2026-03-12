"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Tagline() {

  const words = ["clients", "founders", "consultants"];
  const [index, setIndex] = useState(0);

  // Number counting animation
  const [count5000, setCount5000] = useState(0);
  const [count50, setCount50] = useState(0);
  const [count7, setCount7] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate 5000+
      const duration5000 = 2000;
      const steps5000 = 100;
      const stepTime5000 = duration5000 / steps5000;
      let current5000 = 0;
      
      const timer5000 = setInterval(() => {
        current5000 += Math.ceil(5000 / steps5000);
        if (current5000 >= 5000) {
          setCount5000(5000);
          clearInterval(timer5000);
        } else {
          setCount5000(current5000);
        }
      }, stepTime5000);

      // Animate 50+
      const duration50 = 1500;
      const steps50 = 50;
      const stepTime50 = duration50 / steps50;
      let current50 = 0;
      
      const timer50 = setInterval(() => {
        current50 += Math.ceil(50 / steps50);
        if (current50 >= 50) {
          setCount50(50);
          clearInterval(timer50);
        } else {
          setCount50(current50);
        }
      }, stepTime50);

      // Animate 7+
      const duration7 = 1000;
      const steps7 = 14;
      const stepTime7 = duration7 / steps7;
      let current7 = 0;
      
      const timer7 = setInterval(() => {
        current7 += Math.ceil(7 / steps7);
        if (current7 >= 7) {
          setCount7(7);
          clearInterval(timer7);
        } else {
          setCount7(current7);
        }
      }, stepTime7);

      return () => {
        clearInterval(timer5000);
        clearInterval(timer50);
        clearInterval(timer7);
      };
    }
  }, [isVisible]);

  const statAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-white min-h-[120vh] z-10 pt-24 transition-colors duration-500">
      <div className="sticky top-24 flex items-center justify-center h-[70vh]">

        {/* Main Tagline */}
        <div className="max-w-5xl mb-24 text-center">

          <h2 className="text-5xl md:text-7xl font-light text-black leading-tight max-w-[900px] mx-auto">
            Turn Your Expertise Into <br />
            Content That Attracts{" "}
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-bold"
            >
              {words[index]}
            </motion.span>
          </h2>

        </div>

        {/* Stats Section - Horizontal Cards */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">

          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onViewportEnter={() => setIsVisible(true)}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20">
            <h3 className="text-6xl font-bold text-black tracking-tight">
              {count5000}+
            </h3>
            <p className="mt-3 text-gray-500">Articles Written</p>
          </motion.div>

          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20">
            <h3 className="text-6xl font-bold text-black tracking-tight">
              {count50}+
            </h3>
            <p className="mt-3 text-gray-500">Brands Supported</p>
          </motion.div>

          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20">
            <h3 className="text-6xl font-bold text-black tracking-tight">
              {count7}+
            </h3>
            <p className="mt-3 text-gray-500">Years Experience</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
