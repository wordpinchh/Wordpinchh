"use client";

import { motion } from "framer-motion";

export default function Tagline() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 md:py-20 bg-white relative z-20 min-h-[400px]">
      <div className="max-w-[1300px] mx-auto text-center">
        {/* HEADING */}
        <h2 className="
          text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px]
          xl:text-[56px]
          font-heading
          tracking-[-0.02em]
          text-black
          whitespace-normal
          lg:whitespace-nowrap
        ">
          Your Competitors Are Already Publishing. <span className="font-semibold">Are You?</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="
          mt-6 md:mt-8
          max-w-[750px]
          mx-auto
          text-sm sm:text-base md:text-lg
          font-sans
          leading-relaxed
          text-neutral-600
        ">
          Wordpinchh writes SEO blogs, LinkedIn thought leadership, and website copy for founders, SaaS startups, and consulting firms — so you show up where your buyers are already looking. In Google search, in AI-generated answers, and in the minds of every decision-maker in your space.
        </p>

        {/* STATS BOXES */}
        <div className="
          mt-10 md:mt-12
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-4 sm:gap-6
          max-w-[900px]
          mx-auto
        ">
          {/* BOX 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              px-5 py-6
              rounded-xl
              border border-black/10
              flex flex-col items-center justify-center
              text-center
              min-h-[120px]
            "
          >
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-heading leading-tight text-black">
              5000+
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-sans text-neutral-500">
              Articles Written
            </p>
          </motion.div>

          {/* BOX 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              px-5 py-6
              rounded-xl
              border border-black/10
              flex flex-col items-center justify-center
              text-center
              min-h-[120px]
            "
          >
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-heading leading-tight text-black">
              50+
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-sans text-neutral-500">
              Brands Supported
            </p>
          </motion.div>

          {/* BOX 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              px-5 py-6
              rounded-xl
              border border-black/10
              flex flex-col items-center justify-center
              text-center
              min-h-[120px]
            "
          >
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-heading leading-tight text-black">
              7+
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-sans text-neutral-500">
              Years Experience
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
