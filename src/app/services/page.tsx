"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/ui/container";
import { useState } from "react";

export default function ServicesPage() {
  const services = [
    {
      name: "Content Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      name: "Brand Identity",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
    },
    {
      name: "Website Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
    {
      name: "SEO & Content Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      name: "Social Media Content",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    },
  ];

  const serviceDetails = [
    {
      title: "Content Strategy",
      description:
        "We help brands define clear messaging, audience direction, and content systems that drive consistent growth and engagement.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Brand Identity",
      description:
        "We create visual identities that communicate your brand's essence with clarity, consistency, and impact.",
      image:
        "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
    },
    {
      title: "Website Design",
      description:
        "Modern, responsive websites designed to deliver seamless user experiences and convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Data-driven strategies that improve visibility, increase traffic, and drive long-term growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "Social Media Content",
      description:
        "Compelling content that builds community, drives engagement, and tells your brand story across platforms.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We understand your brand, audience, and goals to build a strong foundation.",
    },
    {
      number: "02",
      title: "Strategize",
      desc: "We create a clear roadmap that aligns creativity with business objectives.",
    },
    {
      number: "03",
      title: "Create",
      desc: "We design and develop impactful content and digital experiences.",
    },
    {
      number: "04",
      title: "Scale",
      desc: "We optimize, refine, and grow your brand with data-driven insights.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* 1️⃣ SERVICES HERO - PREMIUM UPGRADE */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">

          {/* Moving Gradient Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(120deg, #0f172a, #1e3a8a, #000000)",
              backgroundSize: "200% 200%",
            }}
          />

          {/* Glow Layer */}
          <motion.div
            className="absolute inset-0 opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-linear-to-r from-purple-500 via-blue-500 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative text-center px-6">

            <div className="relative mb-6">

              <div className="absolute inset-0 blur-3xl opacity-20 bg-linear-to-r from-purple-500 to-blue-500" />

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-[70px] md:text-[120px] font-light tracking-tight"
                style={{ fontFamily: "'Fahkwang', sans-serif" }}
              >
                WHAT WE <span className="font-semibold">DO</span>
              </motion.h1>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[600px] mx-auto text-lg text-neutral-300"
            >
              We help brands grow through strategy, storytelling,
              and meaningful digital experiences.
            </motion.p>

          </div>

        </section>

        {/* 2️⃣ SERVICES LIST - EDITORIAL STYLE */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="space-y-6 text-3xl md:text-4xl">
              {[
                "Content Strategy",
                "Brand Identity", 
                "Website Design",
                "SEO & Content Marketing",
                "Social Media Content",
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                  {/* Row */}
                  <div className="flex items-center justify-between pb-4">
                    <span className="transition duration-300 group-hover:translate-x-2">
                      {service}
                    </span>
                    <span className="transition duration-300 group-hover:translate-x-2 opacity-70">
                      →
                    </span>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-white/20 group-hover:bg-white transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3️⃣ SERVICE DETAIL BLOCKS - RESPONSIVE UPGRADE */}
        <section className="py-16 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-4 md:px-6 space-y-16 md:space-y-32">
            {serviceDetails.map((service, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center ${
                  i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center lg:text-left flex flex-col justify-center min-h-[160px] p-5"
                >
                  <h2 
                    className="text-3xl md:text-4xl lg:text-[50px] font-light tracking-tight mb-4 md:mb-6 text-black"
                    style={{ fontFamily: "'Fahkwang', sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 text-base md:text-lg max-w-none lg:max-w-[500px]">
                    {service.description}
                  </p>
                </motion.div>
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  animate={{ scale: [1, 1.05] }}
                  className="order-first lg:order-last flex items-center justify-center"
                >
                  <img
                    src={service.image}
                    className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* 4️⃣ PROCESS SECTION - RESPONSIVE UPGRADE */}
        <section className="py-16 md:py-32 bg-black text-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[70px] font-light mb-12 md:mb-20 text-center"
              style={{ fontFamily: "'Fahkwang', sans-serif" }}
            >
              HOW WE <span className="font-semibold">WORK</span>
            </motion.h2>
            {/* Divider */}
            <div className="border-t border-neutral-800 mb-8 md:mb-16" />
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center group hover:-translate-y-2 transition duration-300"
                >
                  {/* Number */}
                  <p className="text-3xl md:text-5xl text-neutral-600 mb-3 md:mb-4 group-hover:text-white transition">
                    {step.number}
                  </p>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5️⃣ EDITORIAL BREAK - PREMIUM UPGRADE */}
        <section className="relative py-40 text-center bg-white overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[200px] bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-[80px] md:text-[110px] font-light leading-[1.05] tracking-tight bg-linear-to-r from-black via-neutral-700 to-black bg-clip-text text-transparent"
            style={{ fontFamily: "'Fahkwang', sans-serif" }}
          >
            FROM IDEAS <br />
            TO <span className="font-semibold">IMPACT.</span>
          </motion.h2>

        </section>

        {/* 6️⃣ CTA SECTION - RESPONSIVE UPGRADE */}
        <section className="relative py-16 md:py-32 text-white text-center via-[#0f172a] to-black overflow-hidden">
          {/* Motion Glow */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          >
            <div className="w-full h-full bg-linear-to-r from-purple-500 via-blue-500 to-transparent blur-3xl" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-2xl md:text-3xl lg:text-[40px] md:text-[60px] font-light mb-6 md:mb-10"
            style={{ fontFamily: "'Fahkwang', sans-serif" }}
          >
            Ready to build something meaningful?
          </motion.h3>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative inline-flex items-center gap-2 md:gap-4 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:gap-4 md:hover:gap-6 hover:scale-105 transition-all duration-300"
          >
            Start a Project →
          </motion.a>
        </section>

      </main>
    </div>
  );
}
