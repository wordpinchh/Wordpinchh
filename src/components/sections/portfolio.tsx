"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Portfolio() {
  const portfolioItems = [
    {
      title: "SEO Blog Example",
      topic: "How Consulting Firms Generate Leads Through Content Marketing",
      description: "A long-form SEO article designed to rank on search engines and position consulting firms as industry experts.",
    },
    {
      title: "LinkedIn Thought Leadership",
      topic: "Why Most Business Blogs Fail",
      description: "A LinkedIn post designed to teach founders how content strategy impacts authority and growth.",
    },
    {
      title: "Landing Page Copy",
      topic: "Website Copy for a Consulting Firm",
      description: "Messaging designed to clearly communicate services and convert visitors into leads.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
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
            Sample Content From <span className="text-[#6C5CE7]">Wordpinchh</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Examples of strategic content created to build authority and visibility.
          </p>
        </motion.div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>

                  {/* Topic */}
                  <h4 className="text-base font-medium text-[#6C5CE7] mb-3">
                    {item.topic}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
