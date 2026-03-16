"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { useState, useEffect } from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="py-32 bg-[#f5f5f5]">

          <div className="max-w-[1320px] mx-auto px-6">

            <h1 className="text-[82px] font-light tracking-tight mb-6 text-black" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
              CONTACT <span className="font-semibold">US</span>
            </h1>

            <p className="max-w-[600px] text-black mb-16">
              Let's start a conversation. Whether you have a project idea,
              a collaboration in mind, or simply want to explore how Wordpinchh can help your brand grow — we'd love to hear from you.
            </p>

            <div className="grid lg:grid-cols-2 gap-20">

              {/* Animated Image */}
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.05, 1],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.07,
                    filter: "brightness(1.1)",
                  }}
                >
                  <img 
                      src="/about/contact-us.jpeg" 
                      alt="Contact"
                      className="w-full h-[520px] object-cover rounded-lg"
                  />
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#cfe4df] p-10 rounded-lg">
                <form className="space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text"
                      placeholder="First Name" 
                      className="w-full px-4 py-3 rounded-full bg-white border-none outline-none placeholder:text-black focus:placeholder-transparent text-black"
                    />
                    <input 
                      type="text"
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 rounded-full bg-white border-none outline-none placeholder:text-black focus:placeholder-transparent text-black"
                    />
                  </div>

                  <input 
                    type="email"
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-full bg-white border-none outline-none placeholder:text-black focus:placeholder-transparent text-black"
                  />

                  <input 
                    type="text"
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded-full bg-white border-none outline-none placeholder:text-black focus:placeholder-transparent text-black"
                  />

                  <textarea 
                    placeholder="Message" 
                    className="w-full px-4 py-3 rounded-full bg-white border-none outline-none h-32 placeholder:text-black focus:placeholder-transparent text-black resize-none"
                  />

                  <button 
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Submit
                  </button>

                </form>
              </div>

            </div>

          </div>

        </section>

        {/* Let's Work Together Section - Same as Homepage */}
        <section className="bg-black text-white py-[180px] px-[6vw] relative z-70">

          <div className="max-w-[1400px] mx-auto">

            {/* Animated Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[36px] md:text-[60px] lg:text-[90px] leading-none mb-8 text-white"
              style={{ fontFamily: "'Fahkwang', sans-serif", fontStyle: 'italic', fontWeight: 200 }}
            >
              Let's Work Together
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[4px] bg-[#cdebe5] mb-20"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-20"
            >
              
              {/* Left */}
              <div>
                <p className="text-gray-400 mb-6">
                  Follow our journey
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="group cursor-pointer hover:text-white transition">
                    Instagram
                    <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="group cursor-pointer hover:text-white transition">
                    LinkedIn
                    <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="group cursor-pointer hover:text-white transition">
                    Email
                    <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
              </div>

              {/* Right */}
              <div>
                <p className="text-gray-400 mb-6">
                  Want to collaborate with us?
                </p>
                <button className="bg-[#cdebe5] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                  Get Started
                </button>
              </div>

            </motion.div>
          </div>

        </section>

        {/* CTA Section - Same as Homepage */}
        <section className="w-full bg-[#c7dfd8] py-[20px] overflow-hidden flex items-center justify-center relative z-70">

          <a href="/strategy-call" className="whitespace-nowrap px-6 md:px-8">
            <h2 className="text-[24px] sm:text-[36px] md:text-[60px] lg:text-[100px] xl:text-[140px] leading-none text-black text-center hover:opacity-70 transition cursor-pointer tracking-wider" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
              BOOK A STRATEGY CALL
            </h2>
          </a>

        </section>

      </main>
    </div>
  );
}
