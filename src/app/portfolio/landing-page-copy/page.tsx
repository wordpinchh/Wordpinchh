"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LandingPageCopy() {
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
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-medium rounded-full">
                  Landing Page Copy
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Website Copy for a Consulting Firm
              </h1>
              <p className="text-lg text-muted-foreground">
                Messaging designed to clearly communicate services and convert visitors into leads.
              </p>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground mb-6">
                  Consulting firms often struggle with website messaging that resonates with their target audience. 
                  Complex services, industry jargon, and unclear value propositions create friction that prevents 
                  visitors from taking action. The website becomes a barrier rather than a bridge to new business.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Strategic Approach</h2>
                <p className="text-muted-foreground mb-4">
                  Effective landing page copy for consulting firms focuses on clarity, credibility, and conversion. 
                  This example demonstrates how to communicate complex services in a way that builds trust and 
                  motivates prospects to take the next step.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Key Copy Elements:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Clear, benefit-focused headlines</li>
                  <li>Client results and social proof</li>
                  <li>Service explanations without jargon</li>
                  <li>Strategic use of testimonials</li>
                  <li>Compelling calls-to-action</li>
                  <li>Risk-reversal guarantees</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Page Structure & Flow</h2>
                <p className="text-muted-foreground mb-4">
                  The landing page follows a proven structure that guides visitors from awareness to action:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Hero Section:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Attention-grabbing headline focused on primary pain point</li>
                  <li>Subheadline that expands on the value proposition</li>
                  <li>Clear primary call-to-action above the fold</li>
                  <li>Trust indicators (years in business, client count)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Services Section:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Service descriptions focused on outcomes, not processes</li>
                  <li>Clear differentiation from competitors</li>
                  <li>Pricing transparency or consultation offer</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Social Proof:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Client testimonials with specific results</li>
                  <li>Case studies with measurable outcomes</li>
                  <li>Industry recognition or certifications</li>
                  <li>Client logos and partnerships</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Conversion Optimization</h2>
                <p className="text-muted-foreground mb-4">
                  The copy is designed to maximize conversions through:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Clear value propositions that address specific pain points</li>
                  <li>Multiple conversion points throughout the page</li>
                  <li>Frictionless contact and consultation forms</li>
                  <li>Urgency and scarcity elements where appropriate</li>
                  <li>Mobile-optimized messaging and layout</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-linear-to-br from-[#6C5CE7]/10 to-[#A29BFE]/10 border border-[#6C5CE7]/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Transform Your Website Messaging?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us create compelling website copy that clearly communicates your value and converts visitors into clients.
                </p>
                <Link 
                  href="/#cta"
                  className="inline-block bg-linear-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-semibold"
                >
                  Get Your Free Content Report
                </Link>
              </div>
            </article>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
