"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Consulting Firms",
      description: "Consulting companies build credibility through insights, blog content, and thought leadership. Strategic content helps demonstrate expertise and attract high-value clients who value specialized knowledge.",
      icon: "🎯",
      benefits: [
        "Establish thought leadership",
        "Attract qualified leads",
        "Build trust with prospects",
        "Demonstrate expertise"
      ]
    },
    {
      title: "SaaS Startups",
      description: "SaaS companies use educational blog content and SEO strategies to attract users, explain products, and build long-term organic growth that compounds over time.",
      icon: "🚀",
      benefits: [
        "Drive organic traffic",
        "Educate potential users",
        "Reduce acquisition costs",
        "Build brand authority"
      ]
    },
    {
      title: "Founders & Personal Brands",
      description: "Founders transform insights into LinkedIn thought leadership and blog content that builds authority, attracts opportunities, and positions them as industry leaders.",
      icon: "💡",
      benefits: [
        "Build personal brand",
        "Attract speaking opportunities",
        "Generate inbound leads",
        "Create industry influence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <section className="py-8 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </Container>
      </section>
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Industries We <span className="text-[#6C5CE7]">Work With</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Wordpinchh focuses on industries where expertise and authority matter. Strategic content helps these businesses build trust, visibility, and inbound opportunities.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Industries Cards */}
      <section className="py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
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
                <div className="relative bg-muted border border-border rounded-xl p-8 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-[#6C5CE7] transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-[#6C5CE7] mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              How We Help Your Industry
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our content strategy process is tailored to your specific industry needs and goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-[#6C5CE7] mb-2">01</div>
                <h3 className="font-semibold text-foreground mb-2">Industry Research</h3>
                <p className="text-sm text-muted-foreground">We analyze your market, competitors, and audience to identify content opportunities.</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-[#6C5CE7] mb-2">02</div>
                <h3 className="font-semibold text-foreground mb-2">Strategy Development</h3>
                <p className="text-sm text-muted-foreground">We create a content roadmap aligned with your business objectives and audience needs.</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-2xl font-bold text-[#6C5CE7] mb-2">03</div>
                <h3 className="font-semibold text-foreground mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">We produce high-quality content that builds authority and drives measurable results.</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to Build Your Authority?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a consulting firm, SaaS startup, or founder building your personal brand, we can help you create strategic content that establishes expertise and attracts your ideal audience.
            </p>
            <a 
              href="/#cta"
              className="inline-block bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Get Your Free Content Report
            </a>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
