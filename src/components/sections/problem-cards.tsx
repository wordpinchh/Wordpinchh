"use client";

import { motion } from "framer-motion";

export function ProblemCards() {
  const problems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&crop=center",
      title: "No time to write blogs",
      problem: "Busy founders often struggle to consistently publish valuable blog content, which limits their ability to build authority and attract organic traffic.",
      solution: "We develop a expertise into a consistent blog strategy. Our team expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business time away from your core business into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business taking time away from your core business your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business LinkedIn content strategy that builds authority, attracts the right audience, and creates meaningful engagement."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      title: "Website content feels generic",
      problem: "Many websites fail to communicate the true value of a business. Generic messaging makes it difficult for potential clients to connect with your brand.",
      solution: "We develop a expertise into a consistent blog strategy. Our team expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business time away from your core business into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business taking time away from your core business your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business LinkedIn content strategy that builds authority, attracts the right audience, and creates meaningful engagement."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      title: "AI content lacks authority",
      problem: "AI generated content often sounds generic and fails to capture the depth of real expertise or brand personality.",
      solution: "We develop a expertise into a consistent blog strategy. Our team expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business time away from your core business into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business taking time away from your core business your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business LinkedIn content strategy that builds authority, attracts the right audience, and creates meaningful engagement."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      title: "LinkedIn presence inconsistent",
      problem: "Inconsistent posting and unclear messaging prevent founders from building a strong presence on LinkedIn.",
      solution: "We develop a expertise into a consistent blog strategy. Our team expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business time away from your core business into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified expertise into a consistent blog strategy. Our team researches your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business without taking time away from your core business taking time away from your core business your industry, develops SEO-focused topics, and produces high-quality articles that build authority, improve search visibility, and attract qualified leads without taking time away from your core business LinkedIn content strategy that builds authority, attracts the right audience, and creates meaningful engagement."
    }
  ];

  return (
    <section className="relative bg-black text-white px-8 pb-24 z-30">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative max-w-1400px mx-auto grid md:grid-cols-2 gap-12 h-[2500px]">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            className="bg-black/95 rounded-lg overflow-hidden group relative shadow-2xl border border-gray-900"
            style={{ opacity: 1, transform: 'none', height: '1200px' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={problem.image}
                alt={problem.title}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ padding: "22px" }}
              />
            </div>
            
            {/* Text Content */}
            <div className="bg-black/95 p-6 border-t border-gray-900">
              <h3 className="text-xl font-semibold mb-3 text-white">
                {problem.title}
              </h3>
              
              <div className="w-12 h-[2px] bg-gray-500 mb-4"></div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {problem.problem}
              </p>
              
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {problem.solution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
