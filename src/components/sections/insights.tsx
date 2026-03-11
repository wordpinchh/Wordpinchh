"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Insights() {
  const articles = [
    {
      title: "Why Most Business Blogs Fail",
      description: "A breakdown of the most common mistakes companies make when publishing blog content.",
      href: "/insights/why-business-blogs-fail"
    },
    {
      title: "How Founders Can Build Authority on LinkedIn",
      description: "Practical strategies for turning insights into consistent thought leadership posts.",
      href: "/insights/linkedin-authority"
    },
    {
      title: "The Role of SEO Blogs in Long-Term Growth",
      description: "Why strategic blog content is one of the most powerful long-term growth assets.",
      href: "/insights/seo-blog-growth"
    },
  ];

  return (
    <section className="py-24 bg-background">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Insights on Content, <span className="text-[#6C5CE7]">Authority & Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ideas and strategies for founders and businesses looking to grow through strategic content.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
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
              <Link href={article.href}>
                {/* Card */}
                <div className="relative bg-muted border border-border rounded-xl p-6 h-full transition-all duration-300 group-hover:border-[#6C5CE7]/50 group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/10 cursor-pointer">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.description}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-sm font-medium text-[#6C5CE7] group-hover:text-[#A29BFE] transition-colors duration-300">
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
