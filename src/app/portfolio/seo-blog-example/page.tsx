"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SEOBlogExample() {
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
                  SEO Blog Example
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                How Consulting Firms Generate Leads Through Content Marketing
              </h1>
              <p className="text-lg text-muted-foreground">
                A long-form SEO article designed to rank on search engines and position consulting firms as industry experts.
              </p>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground mb-6">
                  Consulting firms face a unique challenge in lead generation. Unlike product-based businesses, 
                  consulting services are intangible and require building trust before prospects convert. Traditional 
                  marketing methods often fail to establish the credibility needed to attract high-value clients.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Content Strategy</h2>
                <p className="text-muted-foreground mb-4">
                  Strategic content marketing addresses this challenge by demonstrating expertise before the first 
                  sales conversation. This SEO-optimized article targets specific pain points and search queries 
                  that potential clients are actively researching.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Key Elements:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Keyword-optimized headlines and subheadings</li>
                  <li>Industry-specific statistics and data points</li>
                  <li>Practical frameworks and methodologies</li>
                  <li>Clear calls-to-action for consultation</li>
                  <li>Internal linking to service pages</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Results & Impact</h2>
                <p className="text-muted-foreground mb-4">
                  This type of content establishes authority and generates qualified leads through:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Improved search engine rankings for target keywords</li>
                  <li>Increased organic traffic from decision-makers</li>
                  <li>Social proof through valuable insights</li>
                  <li>Content that can be repurposed across channels</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-linear-to-br from-[#6C5CE7]/10 to-[#A29BFE]/10 border border-[#6C5CE7]/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Create Similar Content?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us help you develop strategic content that attracts your ideal clients and builds authority in your industry.
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
