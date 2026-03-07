"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function TrustedBy() {
  const industries = [
    {
      name: "Consulting Firms",
      description: "Consulting companies build trust through insights, blogs, and thought leadership content."
    },
    {
      name: "SaaS Startups",
      description: "SaaS companies use SEO blogs and educational content to attract and nurture users."
    },
    {
      name: "Founders Building Personal Brands",
      description: "Founders can turn their knowledge and insights into authority-building LinkedIn content and blogs."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industries We <span className="text-[#6C5CE7]">Work With</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Wordpinchh focuses on industries where expertise and authority matter.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
            >
              {/* Industry Card */}
              <div className="relative bg-background border border-border rounded-lg p-6 h-32 flex flex-col justify-center transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Industry Content */}
                <div className="relative z-10 text-center">
                  <div className="text-lg md:text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-[#6C5CE7] mb-2">
                    {industry.name}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Metrics */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
      </Container>
    </section>
  );
}
