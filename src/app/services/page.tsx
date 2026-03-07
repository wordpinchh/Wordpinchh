"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals",
    },
    {
      title: "Brand Development",
      description: "Build a powerful brand identity that resonates with your target audience",
    },
    {
      title: "Content Marketing",
      description: "Engaging content that drives traffic and converts visitors into customers",
    },
    {
      title: "SEO & Analytics",
      description: "Data-driven SEO strategies that improve your search rankings and ROI",
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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-muted p-8 rounded-lg border border-border hover:border-accent/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
