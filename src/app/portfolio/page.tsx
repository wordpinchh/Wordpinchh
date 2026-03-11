"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "SEO Blog Example",
      topic: "How Consulting Firms Generate Leads Through Content Marketing",
      href: "/portfolio/seo-blog-example",
      preview: "A long-form SEO article designed to rank on search engines and position consulting firms as industry experts. This comprehensive piece addresses the unique challenges consulting firms face in lead generation and demonstrates how strategic content marketing can establish authority while attracting qualified prospects. The article follows a proven framework that combines SEO best practices with authentic thought leadership to create content that both ranks and converts."
    },
    {
      title: "LinkedIn Thought Leadership",
      topic: "Why Most Business Blogs Fail",
      href: "/portfolio/linkedin-thought-leadership",
      preview: "A LinkedIn post designed to teach founders how content strategy impacts authority and growth. This piece tackles the common pitfalls that cause most business blogs to fail, providing actionable insights on creating content that builds genuine authority. The post demonstrates how to move beyond generic advice to share authentic experiences and frameworks that resonate with target audiences, ultimately positioning the author as a credible voice in their industry."
    },
    {
      title: "Landing Page Copy",
      topic: "Website Copy for a Consulting Firm",
      href: "/portfolio/landing-page-copy",
      preview: "Messaging designed to clearly communicate services and convert visitors into leads. This landing page copy addresses the fundamental challenge consulting firms face: translating complex services into compelling value propositions that resonate with potential clients. The copy follows a strategic structure that builds trust, demonstrates expertise, and guides visitors toward taking action, all while maintaining the professional tone expected in the consulting industry."
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
              Sample Work From <span className="text-[#6C5CE7]">Wordpinchh</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Examples of strategic content created to build authority, visibility, and inbound opportunities.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Portfolio Items */}
      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="pb-16 border-b border-border last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
              >
                {/* Item Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {item.title}
                  </h2>
                  <h3 className="text-lg md:text-xl font-medium text-[#6C5CE7] mb-6">
                    {item.topic}
                  </h3>
                </div>

                {/* Preview Content */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.preview}
                  </p>
                </div>

                {/* Read More Link */}
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-lg font-medium text-[#6C5CE7] hover:text-[#A29BFE] transition-colors duration-300 group"
                >
                  Read Full Example
                  <svg 
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
