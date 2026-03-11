"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InsightsPage() {
  const insights = [
    {
      title: "Why Most Business Blogs Fail",
      description: "A breakdown of the most common mistakes companies make when publishing blog content.",
      href: "/insights/why-business-blogs-fail",
      category: "Content Strategy",
      featured: true,
      preview: "Every business owner knows they should blog, yet most business blogs fail to generate meaningful results. The failure isn't from lack of effort—it's from fundamental misunderstandings about what makes business content effective. Discover the 5 critical mistakes that sabotage content marketing and learn the strategic framework that transforms blogs from expensive entertainment into powerful lead generation machines."
    },
    {
      title: "How Founders Can Build Authority on LinkedIn",
      description: "Practical strategies for turning insights into consistent thought leadership posts.",
      href: "/insights/linkedin-authority",
      category: "LinkedIn Marketing",
      featured: false,
      preview: "Most founders have valuable expertise but struggle to translate it into online authority. Learn how to create content that builds credibility, attracts opportunities, and positions you as the go-to expert in your field."
    },
    {
      title: "The Role of SEO Blogs in Long-Term Growth",
      description: "Why strategic blog content is one of the most powerful long-term growth assets.",
      href: "/insights/seo-blog-growth",
      category: "SEO Strategy",
      featured: false,
      preview: "Unlike paid advertising that stops when you stop paying, strategic SEO content continues working months and years after publication. Discover how to build content assets that compound over time."
    }
  ];

  const featuredArticle = insights.find(article => article.featured);
  const otherArticles = insights.filter(article => !article.featured);

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
              Insights on Content, <span className="text-[#6C5CE7]">Authority & Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ideas and strategies for founders and businesses looking to grow through strategic content.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <Container>
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href={featuredArticle?.href || "#"} className="block group">
              <div className="bg-muted border border-border rounded-2xl p-8 md:p-12 transition-all duration-300 group-hover:border-[#6C5CE7]/30 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-medium rounded-full">
                    {featuredArticle?.category || "Featured"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 group-hover:text-[#6C5CE7] transition-colors duration-300">
                  {featuredArticle?.title || "Featured Article"}
                </h2>

                {/* Preview */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {featuredArticle?.preview || "Discover insights and strategies for content marketing and authority building."}
                </p>

                {/* Read More */}
                <div className="flex items-center text-lg font-medium text-[#6C5CE7] group-hover:text-[#A29BFE] transition-colors duration-300">
                  Read Article
                  <svg 
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Other Articles Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
              >
                <Link href={article.href} className="block group h-full">
                  <div className="bg-muted border border-border rounded-xl p-6 md:p-8 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/30 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#6C5CE7] transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Preview */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                      {article.preview}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-base font-medium text-[#6C5CE7] group-hover:text-[#A29BFE] transition-colors duration-300">
                      Read Article
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
