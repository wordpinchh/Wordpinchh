"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LinkedInThoughtLeadership() {
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
                  LinkedIn Thought Leadership
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Why Most Business Blogs Fail
              </h1>
              <p className="text-lg text-muted-foreground">
                A LinkedIn post designed to teach founders how content strategy impacts authority and growth.
              </p>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Common Pitfalls</h2>
                <p className="text-muted-foreground mb-6">
                  Many businesses invest heavily in content marketing only to see minimal results. 
                  The issue isn't lack of effort—it's lack of strategy. Most business blogs fail 
                  because they're created without understanding the audience, distribution channels, or business objectives.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Top Reasons for Failure:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Writing for everyone instead of a specific target audience</li>
                  <li>Inconsistent publishing schedule</li>
                  <li>Focusing on quantity over quality</li>
                  <li>No clear call-to-action or business objective</li>
                  <li>Promoting content without building relationships first</li>
                  <li>Ignoring platform-specific best practices</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Strategic Approach</h2>
                <p className="text-muted-foreground mb-4">
                  Successful thought leadership content requires a different mindset. Instead of broadcasting to everyone, 
                  focus on providing genuine value to your specific audience. This LinkedIn post demonstrates how 
                  to share insights that build credibility and trust.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Key Elements:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Hook that grabs attention in the first 2 lines</li>
                  <li>Personal experience and authentic insights</li>
                  <li>Actionable advice readers can implement immediately</li>
                  <li>Questions that encourage engagement</li>
                  <li>Strategic use of hashtags and mentions</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Building Authority Through Content</h2>
                <p className="text-muted-foreground mb-4">
                  Consistent, valuable content positions you as an expert in your field. This leads to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Increased profile views and connection requests</li>
                  <li>More inbound inquiries from qualified prospects</li>
                  <li>Speaking opportunities and media mentions</li>
                  <li>Stronger personal brand recognition</li>
                  <li>Trust that converts to business opportunities</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-linear-to-br from-[#6C5CE7]/10 to-[#A29BFE]/10 border border-[#6C5CE7]/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Build Your LinkedIn Authority?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us help you create thought leadership content that builds credibility and attracts opportunities.
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
