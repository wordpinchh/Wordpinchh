"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of digital trends to deliver cutting-edge solutions",
    },
    {
      title: "Transparency",
      description: "Open communication and honest partnerships with our clients",
    },
    {
      title: "Results-Driven",
      description: "Every strategy is measured by its impact on your business goals",
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
              About <span className="text-accent">WordPinch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate digital marketers dedicated to transforming your online presence
            </p>
          </motion.div>

          <motion.div
            className="bg-muted p-12 rounded-lg border border-border mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Founded in 2020, WordPinch emerged from a simple observation: businesses needed more than just digital marketing—they needed partners who understood their vision and could translate it into measurable results. Our team of experts brings together diverse backgrounds in technology, design, and marketing to create holistic digital strategies that drive growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="bg-accent w-8 h-8 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
