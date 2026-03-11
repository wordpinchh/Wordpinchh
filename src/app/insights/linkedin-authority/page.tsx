"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function LinkedInAuthority() {
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
                  LinkedIn Marketing
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                How Founders Can Build Authority on LinkedIn
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>7 min read</span>
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Authority Gap</h2>
                <p className="text-muted-foreground mb-6">
                  Most founders have valuable expertise but struggle to translate it into online authority. 
                  They post occasionally on LinkedIn, get minimal engagement, and wonder why thought leadership 
                  feels so elusive. The gap isn't lack of knowledge—it's lack of strategy.
                </p>

                <p className="text-muted-foreground mb-6">
                  LinkedIn rewards consistency and value, not frequency and promotion. The platform's algorithm 
                  prioritizes content that sparks meaningful conversations and demonstrates genuine expertise. 
                  Understanding this dynamic changes everything about how you approach LinkedIn content.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Foundation: Know Your Audience</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Define Your Ideal Follower</h3>
                <p className="text-muted-foreground mb-4">
                  Before writing anything, identify exactly who you're trying to reach. Not "business professionals" 
                  or "entrepreneurs"—specific people with specific roles, industries, and challenges. 
                  The more precise your audience definition, the more your content will resonate.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Map Their Pain Points</h3>
                <p className="text-muted-foreground mb-4">
                  Authority comes from solving problems, not sharing opinions. List the top 10 challenges your 
                  ideal audience faces. Each pain point becomes a content opportunity. When you consistently 
                  address real issues, you become the go-to resource in your field.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Content Strategy Framework</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">The 80/20 Rule: Value First</h3>
                <p className="text-muted-foreground mb-4">
                  Follow the 80/20 rule: 80% of your content should provide genuine value, 20% can be 
                  promotional. Most founders reverse this ratio, constantly selling without establishing credibility first. 
                  Give freely, and the business will follow.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Storytelling Over Statistics</h3>
                <p className="text-muted-foreground mb-4">
                  Data informs, but stories persuade. The most engaging LinkedIn content combines personal experience 
                  with practical insights. Share your failures, lessons learned, and breakthrough moments. 
                  Authenticity builds trust faster than perfect statistics.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Consistency Over Intensity</h3>
                <p className="text-muted-foreground mb-6">
                  LinkedIn's algorithm rewards consistency. Posting three times per week for six months beats 
                  posting daily for one month. Build a sustainable rhythm you can maintain long-term. 
                  Authority compounds through reliability, not intensity.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Content Types That Build Authority</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Framework Posts</h3>
                <p className="text-muted-foreground mb-4">
                  Share your unique approach to solving common problems. Framework posts perform exceptionally well 
                  because they're both educational and proprietary. Examples: "My 5-Step Process for..." 
                  or "How I Evaluate..."
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">2. Behind-the-Scenes Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Show your thinking process. Document how you solve problems, make decisions, or evaluate opportunities. 
                  Transparency builds trust and positions you as an expert who's willing to share knowledge.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3. Prediction Posts</h3>
                <p className="text-muted-foreground mb-6">
                  Share your perspective on industry trends and future developments. Even if you're wrong sometimes, 
                  taking a stance demonstrates confidence and expertise. Back predictions with reasoning and invite discussion.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Engagement Strategy</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">First Hour Critical</h3>
                <p className="text-muted-foreground mb-4">
                  LinkedIn's algorithm determines post performance in the first hour. Be present to respond to every 
                  comment immediately. Ask questions to encourage discussion. The more engagement early on, the 
                  more LinkedIn will show your content to others.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Commenting</h3>
                <p className="text-muted-foreground mb-4">
                  Don't just post—engage. Comment thoughtfully on others' content in your niche. Add value 
                  to discussions, share relevant experiences, and build relationships. Authority comes from both 
                  creating and participating in valuable conversations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Message Requests</h3>
                <p className="text-muted-foreground mb-6">
                  When people engage with your content, connect and send personalized messages. Reference specific 
                  posts they found valuable. This converts passive followers into active business relationships. 
                  Quality over quantity—10 meaningful conversations beat 100 shallow connections.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4">Measuring Authority Growth</h2>
                <p className="text-muted-foreground mb-4">
                  Track metrics that indicate growing authority:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Leading Indicators:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Profile views from target industries</li>
                  <li>Inbound connection requests from decision-makers</li>
                  <li>Messages referencing your content</li>
                  <li>Speaking and media opportunities</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Business Results:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Consultation inquiries from LinkedIn</li>
                  <li>Client referrals from your network</li>
                  <li>Partnership opportunities</li>
                  <li>Increased credibility in sales conversations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4">The Long Game</h2>
                <p className="text-muted-foreground mb-4">
                  LinkedIn authority compounds over time. Every valuable post, every thoughtful comment, every 
                  meaningful connection builds your reputation. The founders who succeed aren't necessarily the 
                  smartest—they're the most consistent and strategic.
                </p>

                <p className="text-muted-foreground">
                  Start today with one piece of content that solves one real problem for one specific person. 
                  Then do it again next week. Authority isn't built in a day, but it is built daily.
                </p>
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
