"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function WhyBusinessBlogsFail() {
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
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
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
                  Content Strategy
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Why Most Business Blogs Fail
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated recently</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Content Marketing Paradox</h2>
                <p className="text-muted-foreground mb-6">
                  Every business owner knows they should blog. Experts preach content marketing's benefits, 
                  and the statistics are compelling—companies that blog consistently get 67% more leads than those that don't. 
                  Yet despite this knowledge, most business blogs fail to generate meaningful results.
                </p>

                <p className="text-muted-foreground mb-6">
                  The failure isn't from lack of effort. Businesses invest thousands in content creation, 
                  hire talented writers, and publish consistently. The problem lies in fundamental misunderstandings 
                  about what makes business content effective.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The 5 Critical Mistakes</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Writing for Everyone Instead of Someone</h3>
                <p className="text-muted-foreground mb-4">
                  The most common mistake is trying to appeal to everyone. Effective content speaks directly 
                  to a specific person with specific problems. When you write for "business owners in general," 
                  you connect with no one in particular.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">2. Teaching Instead of Solving</h3>
                <p className="text-muted-foreground mb-4">
                  Many blogs explain concepts without providing actionable solutions. Readers don't need to understand 
                  marketing theory—they need to know how to solve their immediate problems. The best content 
                  answers questions before they're asked.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3. Ignoring the Business Objective</h3>
                <p className="text-muted-foreground mb-4">
                  Content exists to drive business results, not just to inform. Every piece should have a clear 
                  purpose: generate leads, establish authority, or nurture prospects. Without this focus, 
                  content becomes expensive entertainment.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4. Inconsistent Publishing Schedule</h3>
                <p className="text-muted-foreground mb-4">
                  Sporadic publishing destroys momentum. Search engines reward consistency, and audiences 
                  expect regular value. Publishing once then disappearing for months signals unreliability to both 
                  algorithms and humans.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5. No Distribution Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Publishing is only half the battle. Most businesses hit "publish" and hope people find it. 
                  Successful content has a distribution plan—email lists, social media, internal linking, 
                  and promotion channels.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Strategic Alternative</h2>
                <p className="text-muted-foreground mb-4">
                  Successful business content follows a simple framework: identify your ideal customer's most pressing 
                  problems, create comprehensive solutions, and distribute consistently through the right channels.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Start with Problems, Not Topics</h3>
                <p className="text-muted-foreground mb-4">
                  Instead of brainstorming blog topics, list your customers' top 10 problems. Each problem becomes 
                  a content opportunity. This approach ensures every piece addresses real pain points your audience 
                  actively wants solved.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Create Pillar Content</h3>
                <p className="text-muted-foreground mb-4">
                  Develop comprehensive guides that serve as definitive resources on key topics. These pillar pieces 
                  become the foundation for smaller content pieces and establish your authority as the go-to expert 
                  in your field.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Measure What Matters</h3>
                <p className="text-muted-foreground mb-6">
                  Track business metrics, not vanity metrics. Page views are nice, but lead quality, 
                  conversion rates, and revenue impact determine content success. Focus on metrics that connect 
                  directly to business growth.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Bottom Line</h2>
                <p className="text-muted-foreground mb-4">
                  Most business blogs fail because they're created as content marketing exercises rather than 
                  business development tools. When you shift your mindset from "publishing content" to 
                  "solving customer problems through content," everything changes.
                </p>

                <p className="text-muted-foreground">
                  Your blog becomes a lead generation machine, not a content graveyard. The difference 
                  isn't more effort—it's better strategy focused on business results.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-linear-to-br from-[#6C5CE7]/10 to-[#A29BFE]/10 border border-[#6C5CE7]/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Transform Your Content Strategy?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stop wasting resources on ineffective content. Let us help you create a strategy that 
                  actually generates leads and builds authority.
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
