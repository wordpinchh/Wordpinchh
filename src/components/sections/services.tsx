"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Services() {
  const services = [
    {
      title: "SEO Blog Writing",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=300&fit=crop&crop=center",
      bulletPoints: [
        "Long-form articles that rank",
        "Strategic keyword research",
        "Authority-building content"
      ]
    },
    {
      title: "LinkedIn Ghostwriting",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop&crop=center",
      bulletPoints: [
        "Thought leadership posts",
        "Founder-focused content",
        "Engagement optimization"
      ]
    },
    {
      title: "Landing Page Copywriting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center",
      bulletPoints: [
        "Conversion-focused copy",
        "Clear value propositions",
        "Compelling messaging"
      ]
    },
    {
      title: "Website Content",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=300&fit=crop&crop=center",
      bulletPoints: [
        "Clear website messaging",
        "Service descriptions",
        "Trust-building content"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Content Services That Build <span className="text-[#6C5CE7]">Authority</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic content designed to help businesses grow visibility, credibility, and inbound opportunities.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -5 }}
            >
              {/* Card */}
              <div className="relative bg-muted border border-border rounded-xl p-6 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Image */}
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-[#6C5CE7] mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to build your authority with strategic content?
          </p>
          <button className="bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold">
            Get Started Today
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
