"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function WhyWordpinchh() {
  const features = [
    {
      title: "Strategic Thinking",
      description: "We approach content with a business-first mindset, focusing on growth and authority rather than just publishing.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop&crop=center"
    },
    {
      title: "Authority Building",
      description: "Our content is designed to establish you as the go-to expert in your industry through thoughtful, valuable insights.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop&crop=center"
    },
    {
      title: "Founder Friendly",
      description: "We understand founders' needs and create content that speaks to your unique challenges and opportunities.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Why <span className="text-[#6C5CE7]">Wordpinchh</span>
          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                <div className="relative bg-background border border-border rounded-xl p-8 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Image */}
                    <div className="w-full h-32 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
