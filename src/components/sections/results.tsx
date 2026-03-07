"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Results() {
  const contentImpacts = [
    {
      title: "SEO Blog Growth",
      description: "Strategic blog content helps businesses rank on search engines and attract consistent organic traffic.",
      metrics: [
        { value: "50+", label: "SEO Articles Published" },
        { value: "Growing", label: "Organic Traffic" },
      ],
    },
    {
      title: "LinkedIn Thought Leadership",
      description: "Consistent LinkedIn content helps founders build credibility and industry authority.",
      metrics: [
        { value: "100+", label: "LinkedIn Posts Written" },
        { value: "Stronger", label: "Personal Brand" },
      ],
    },
    {
      title: "High-Converting Website Content",
      description: "Clear messaging and structured website content helps businesses communicate their value and convert visitors.",
      metrics: [
        { value: "Improved", label: "Website Messaging" },
        { value: "Better", label: "Clarity & Conversions" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
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
            Content That Builds <span className="text-[#6C5CE7]">Authority</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic content helps businesses grow visibility, credibility, and inbound opportunities.
          </p>
        </motion.div>

        {/* Content Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {contentImpacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className="relative bg-background border border-border rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-2xl group-hover:shadow-[#6C5CE7]/10">
                
                {/* Gradient Highlight */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {impact.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {impact.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3">
                    {impact.metrics.map((metric, metricIndex) => (
                      <div key={metric.label} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">
                          {metric.label}
                        </span>
                        <span className="text-lg md:text-xl font-bold text-[#6C5CE7]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            See Content Examples
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
