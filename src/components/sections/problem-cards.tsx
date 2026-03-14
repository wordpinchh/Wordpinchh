"use client";

import { motion } from "framer-motion";

const gradientAnimation = `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes mintFlow {
    0% {
      background: #a9cfc9;
    }
    20% {
      background: #BFDEF3;
    }
    40% {
      background: #B9E9E9;
    }
    60% {
      background: #FFC9B4;
    }
    80% {
      background: #d7efe8;
    }
    100% {
      background: #f4fbf8;
    }
  }

  .mint-bg-animate {
    animation: mintFlow 8s ease-in-out infinite alternate;
  }
`;

export function ProblemCards() {
  const problems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&crop=center",
      title: "No time to write blogs",
      problem:
        "Busy founders often struggle to consistently publish valuable blog content, which limits their ability to build authority and attract organic traffic.",
      solution:
        "We create SEO-focused blog strategies and produce high-quality articles that build authority and attract qualified leads without taking time away from your core business.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      title: "Website content feels generic",
      problem:
        "Many websites fail to communicate the true value of a business. Generic messaging makes it difficult for potential clients to connect with your brand.",
      solution:
        "We develop compelling website content that clearly communicates your unique value proposition and helps potential clients understand exactly what makes your business special.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      title: "AI content lacks authority",
      problem:
        "AI generated content often sounds generic and fails to capture the depth of real expertise or brand personality.",
      solution:
        "Our team combines strategic insights with authentic storytelling to create content that builds genuine authority and reflects your unique expertise.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      title: "LinkedIn presence inconsistent",
      problem:
        "Inconsistent posting and unclear messaging prevent founders from building a strong presence on LinkedIn.",
      solution:
        "We develop a strategic LinkedIn content plan that builds authority, attracts the right audience, and creates meaningful engagement with your target prospects.",
    },
  ];

  return (
    <>
      <style>{gradientAnimation}</style>
      <section className="relative py-20 md:py-28 lg:py-32 z-50 mint-bg-animate">
      <div className="max-w-[1600px] mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[8vw] px-[5vw]">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            className="bg-black rounded-sm overflow-hidden shadow-xl md:hover:-translate-y-2 transition-all duration-500 h-auto"
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
                className="w-full h-[260px] md:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm"
              />
            </div>

            {/* Text Content */}
            <div className="bg-black p-6 md:p-10 lg:p-12">
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold mb-3 text-white">
                {problem.title}
              </h3>

              <div className="w-12 h-[2px] bg-gray-500 mb-4"></div>

              <p className="text-gray-300 text-[14px] md:text-[16px] leading-relaxed">
                {problem.problem}
              </p>

              <p className="text-gray-400 text-[14px] md:text-[16px] mt-4 leading-relaxed">
                {problem.solution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}
