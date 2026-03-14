"use client";

import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="relative bg-white py-32 z-40">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[120px_1fr] gap-[6vw] px-[6vw]">
        
        {/* Mobile heading */}
        <h2 className="block md:hidden text-6xl font-semibold text-black mb-10 text-center">
          Our Services
        </h2>

        {/* LEFT STICKY TEXT */}
        <div className="hidden md:flex justify-center">
          <div className="sticky top-[120px] h-fit">
            <h2 className="vertical-services text-black">
              OUR SERVICES
            </h2>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-32">

          {/* SERVICE 1 */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=420&fit=crop&crop=center"
              alt="SEO Blog Writing"
              className="w-full h-[420px] object-cover rounded-lg shadow-lg"
            />

            <div>
              <h3 className="text-5xl font-semibold mb-4 text-black">
                SEO Blog Writing
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Long-form blog content designed to rank on search engines while
                positioning founders and businesses as industry authorities.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Strategic keyword research</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Authority-building content</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Long-form articles that rank</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-5xl font-semibold mb-4 text-black">
                LinkedIn Ghostwriting
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Founder-focused LinkedIn content that builds credibility,
                attracts the right audience and drives meaningful engagement.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Thought leadership posts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Founder-focused content</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Engagement optimization</span>
                </li>
              </ul>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=420&fit=crop&crop=center"
              alt="LinkedIn Ghostwriting"
              className="w-full h-[420px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=420&fit=crop&crop=center"
              alt="Landing Page Copywriting"
              className="w-full h-[420px] object-cover rounded-lg shadow-lg"
            />

            <div>
              <h3 className="text-5xl font-semibold mb-4 text-black">
                Landing Page Copywriting
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Conversion-focused copy that turns visitors into customers with
                clear value propositions and compelling messaging.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Conversion-focused copy</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Clear value propositions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Compelling messaging</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SERVICE 4 */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="text-5xl font-semibold mb-4 text-black">
                Website Content
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Clear website messaging that builds trust and effectively
                communicates your value to potential clients.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Clear website messaging</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Service descriptions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Trust-building content</span>
                </li>
              </ul>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=420&fit=crop&crop=center"
              alt="Website Content"
              className="w-full h-[420px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
