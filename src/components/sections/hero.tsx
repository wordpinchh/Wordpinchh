"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-purple-500/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Turn Your Expertise Into{" "}
            <span className="bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] bg-clip-text text-transparent">
              Content That Attracts Clients
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Wordpinchh helps founders, consultants, and growing businesses transform their ideas into strategic blogs, LinkedIn thought leadership, and high-converting website content.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="w-full sm:w-auto bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              Get Free Content Opportunity Report
            </button>
            <button className="w-full sm:w-auto border border-border text-foreground px-8 py-4 rounded-lg hover:bg-muted hover:border-[#6C5CE7]/50 transition-all duration-300 font-semibold text-lg">
              Book a Strategy Call
            </button>
          </motion.div>

          {/* Additional visual elements */}
          <motion.div
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#6C5CE7]">200+</div>
              <div className="text-sm text-muted-foreground mt-1">Articles Written</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#6C5CE7]">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Brands Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#6C5CE7]">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
