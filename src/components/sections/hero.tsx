"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="sticky top-0 h-svh z-10 bg-[#0A0A0A] overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-purple-500/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* 3-Tile Cinematic Slider - Full Screen */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-3 pl-0 md:pl-[120px] lg:pl-[220px]">
            
            {/* Left Tile - Half Cut */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden md:block relative w-[520px] h-[80vh] rounded-[150px] overflow-hidden cursor-pointer group shrink-0"
              style={{ marginLeft: "-500px", fontFamily: "var(--font-fahkwang)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1200&q=80"
                alt="Strategic Content"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black"></h3>
                <p className="text-neutral-600 leading-relaxed text-[17px]"></p>
              </div>
            </motion.div>

            {/* Center Tile - Wider, Less Height */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative w-[88vw] md:w-[900px] lg:w-[1100px] h-[70vh] md:h-[80vh] rounded-[80px] md:rounded-[150px] overflow-hidden cursor-pointer group shrink-0 shadow-2xl shadow-purple-500/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Authority Building"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black"></h3>
                <p className="text-neutral-600 leading-relaxed text-[17px]"></p>
              </div>
            </motion.div>

            {/* Right Tile - Half Cut */}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="hidden md:block relative w-[520px] h-[80vh] rounded-[150px] overflow-hidden cursor-pointer group shrink-0"
              style={{ marginRight: "-300px", fontFamily: "var(--font-barlow)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1200&q=80"
                alt="Growth Focused"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 text-white text-right">
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black"></h3>
                <p className="text-neutral-600 leading-relaxed text-[17px]"></p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
