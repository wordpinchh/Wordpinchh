"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Tagline() {

  const words = ["CLIENTS", "FOUNDERS", "CONSULTANTS"];
  const [index, setIndex] = useState(0);

  // Number counting animation
  const [count5000, setCount5000] = useState(0);
  const [count50, setCount50] = useState(0);
  const [count7, setCount7] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

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
    <section className="sticky top-[80px] min-h-screen bg-white z-20 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full text-center">

        {/* Heading */}
        <div className="mb-16 md:mb-24">

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-black leading-tight max-w-[900px] mx-auto">
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

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">

          {/* Card 1 */}
          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onViewportEnter={() => setIsVisible(true)}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
              {count5000}+
            </h3>
            <p className="mt-2 md:mt-3 text-gray-500 text-sm md:text-base">
              Articles Written
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-6 md:p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
              {count50}+
            </h3>
            <p className="mt-2 md:mt-3 text-gray-500 text-sm md:text-base">
              Brands Supported
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={statAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-10 border text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-gray-50
              hover:border-black/20"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
              {count7}+
            </h3>
            <p className="mt-2 md:mt-3 text-gray-500 text-sm md:text-base">
              Years Experience
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
