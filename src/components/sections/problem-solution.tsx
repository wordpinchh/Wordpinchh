"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="
  w-full 
  px-4 sm:px-6 md:px-10 
  py-20 
  relative z-20
" style={{ background: 'gainsboro' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* HEADING */}
        <div className="text-center max-w-[800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-[36px] md:text-[44px] font-heading tracking-[-0.02em] text-black" style={{
              fontFamily: "var(--font-fahkwang)",
              fontWeight: 300,
              letterSpacing: "-0.02em"
            }}
          >
            Content challenges & solutions
          </motion.h2>
          
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl mx-auto" style={{
            fontFamily: "Inter, sans-serif"
          }}>
            Every business faces content challenges. We transform these obstacles into opportunities for growth and authority building.
          </p>
          
          {/* CONNECTOR LINE */}
        </div>

        {/* CARDS WRAPPER */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* PROBLEM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              p-6 sm:p-8
              rounded-2xl
              bg-white
              flex flex-col
              min-h-[460px]
              hover:shadow-xl hover:-translate-y-1 transition duration-300
            "
          >
            {/* LABEL */}
            <span className="text-xs uppercase tracking-widest text-red-500 mb-3" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              Problem
            </span>

            {/* IMAGE */}
            <img 
              src="/problem.png" 
              alt="problem" 
              className="w-full object-cover rounded-lg mb-4"
              style={{ height: '344px' }}
            />

            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-heading mb-4 text-black" style={{
              fontFamily: "var(--font-fahkwang)",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}>
              You're great at what you do. But nobody can find you.
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 mb-4" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              You've built something worth talking about. The problem? Content keeps falling to the bottom of the list.
            </p>
            
            <ul className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 space-y-2 mb-4" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              <li>– Your blog has three posts — all from 18 months ago</li>
              <li>– Your LinkedIn is quiet while competitors build audiences daily</li>
              <li>– Your website copy reads like every other agency</li>
              <li>– AI content ranked for nothing</li>
              <li>– Freelancers slow down execution</li>
            </ul>
            
            <p className="text-sm sm:text-base md:text-lg font-sans leading-relaxed text-neutral-600">
              Your buyers now search via Google, ChatGPT, and AI tools. If you're not visible, you're invisible twice.
            </p>
          </motion.div>

          {/* SOLUTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              p-6 sm:p-8
              rounded-2xl
              bg-black text-white
              flex flex-col
              min-h-[460px]
              hover:shadow-xl hover:-translate-y-1 transition duration-300
            "
          >
            {/* LABEL */}
            <span className="text-xs uppercase tracking-widest text-green-400 mb-3" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              Solution
            </span>

            {/* IMAGE */}
            <img 
              src="/solution.png" 
              alt="solution" 
              className="w-full object-cover rounded-lg mb-4 opacity-90"
              style={{ height: '344px' }}
            />

            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-heading mb-4" style={{
              fontFamily: "var(--font-fahkwang)",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}>
              We don't just write. We build your content engine.
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mb-4" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              Wordpinchh is a content partner for founders and B2B teams who want their expertise to work harder — in Google search, AI answers, LinkedIn, and their website.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              Every piece we write is built to bring the right person closer to working with you.
            </p>
            
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/60" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              No fluff. No filler. No keyword-stuffed nonsense.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
