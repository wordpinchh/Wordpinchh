"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useState } from "react";
import Link from "next/link";

export function Cta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", website: "" });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="content-report" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/20 via-[#A29BFE]/10 to-[#6C5CE7]/20" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/95 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C5CE7]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A29BFE]/20 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glass Container */}
          <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-12 md:p-16 shadow-2xl shadow-[#6C5CE7]/10">
            
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Heading */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get Your Free <span className="text-[#6C5CE7]">Content Opportunity Report</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We will analyze your business and show you:
              </motion.p>

              {/* Benefits List */}
              <motion.div
                className="text-left max-w-2xl mx-auto mb-8 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6C5CE7] rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">5 blog topics your company should publish</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6C5CE7] rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">SEO opportunities you're missing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6C5CE7] rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">content gaps on your website</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#6C5CE7] rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">LinkedIn post ideas to build authority</span>
                </div>
              </motion.div>

              {/* Free Text */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-sm text-muted-foreground">
                  100% free.<br />
                  No obligation.
                </p>
              </motion.div>

              {/* Lead Capture Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-all duration-300"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company"
                      required
                      className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="Website (optional)"
                      className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-all duration-300"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitted ? "✓ Report Requested!" : "Get My Free Content Report"}
                  </motion.button>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <a 
                    href="mailto:hello@wordpinchh.com?subject=Strategy Call Request&body=I'd like to book a strategy call to discuss how Wordpinchh can help with our content strategy."
                    className="w-full border border-border text-foreground px-8 py-4 rounded-lg hover:bg-muted hover:border-[#6C5CE7]/50 transition-all duration-300 font-semibold text-lg text-center block"
                  >
                    Book a Strategy Call
                  </a>
                </motion.div>
                
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm mt-4"
                  >
                    Thank you! We'll analyze your business and send your content opportunity report soon.
                  </motion.p>
                )}
              </motion.form>

              {/* Trust Line */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#6C5CE7] rounded-full" />
                  No commitment
                </span>
                <span className="hidden sm:flex">•</span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#6C5CE7] rounded-full" />
                  Free consultation
                </span>
                <span className="hidden sm:flex">•</span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#6C5CE7] rounded-full" />
                  Growth-focused strategy
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
