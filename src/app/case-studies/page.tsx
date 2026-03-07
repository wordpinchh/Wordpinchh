"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Tech Startup Launch",
      category: "Brand Development",
      description: "Complete brand identity and launch strategy for a B2B SaaS startup",
      result: "300% increase in brand awareness",
    },
    {
      title: "E-commerce Growth",
      category: "Digital Marketing",
      description: "Multi-channel marketing campaign for online retail business",
      result: "150% increase in conversion rate",
    },
    {
      title: "Content Strategy",
      category: "Content Marketing",
      description: "Content marketing strategy for financial services company",
      result: "200% increase in organic traffic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real clients who trusted us with their digital presence
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="bg-muted p-8 rounded-lg border border-border hover:border-accent/50 transition-colors duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <span className="text-accent text-sm font-medium">{study.category}</span>
                    <h3 className="text-2xl font-semibold text-foreground mt-1">{study.title}</h3>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-accent font-bold text-lg">{study.result}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
