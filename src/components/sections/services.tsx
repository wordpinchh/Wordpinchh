"use client";

import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="relative bg-white py-32 z-40">
      {/* ================= SINGLE GRID WRAPPER ================= */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[120px_1fr] gap-[6vw] px-[6vw]">

        {/* LEFT STICKY */}
        <div className="hidden md:flex justify-center">
          <div className="sticky top-[120px] h-fit">
            <h2 className="
              font-heading
              text-black
              text-[32px] lg:text-[40px]
              font-medium
              tracking-[0.22em]
              leading-[1.4]
              uppercase
              -rotate-180
              [writing-mode:vertical-rl]
            " style={{
              fontFamily: "var(--font-fahkwang)"
            }}>
              SERVICES OVERVIEW
            </h2>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-28"
          >

          {/* INTRO */}
          <div className="max-w-[750px]">

            {/* MOBILE VERSION */}
            <div className="md:hidden mb-6">
              <h2 className="font-heading text-[32px] tracking-tight text-black" style={{
                fontFamily: "var(--font-fahkwang)"
              }}>
                SERVICES OVERVIEW
              </h2>
            </div>

            {/* INTRO TEXT */}
            <p className="
              text-[16px] sm:text-[18px]
              text-neutral-600
              leading-relaxed
            " style={{
              fontFamily: "Inter, sans-serif"
            }}>
              We offer two tiers of services — core content that has always worked, and AI visibility services built for the search landscape of right now.
            </p>

            {/* SECTION HEADING */}
            <h3 className="
              mt-10
              font-heading
              text-[22px] sm:text-[26px] md:text-[30px]
              text-black
            " style={{
              fontFamily: "var(--font-fahkwang)",
              fontWeight: 500,
              letterSpacing: "-0.01em"
            }}>
              CORE CONTENT SERVICES
            </h3>

          </div>

          {/* SERVICE 1 */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=420&fit=crop&crop=center"
              alt="SEO Blog Writing"
              className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
            />

            <div>
              <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                SEO Blog Writing
              </h3>

              <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                Long-form blog content designed to rank on search engines while
                positioning founders and businesses as industry authorities.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Strategic keyword research</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Authority-building content</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
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
              <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                LinkedIn Ghostwriting
              </h3>

              <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                Founder-focused LinkedIn content that builds credibility,
                attracts the right audience and drives meaningful engagement.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Thought leadership posts</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Founder-focused content</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Engagement optimization</span>
                </li>
              </ul>
            </div>

            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=420&fit=crop&crop=center"
              alt="LinkedIn Ghostwriting"
              className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
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
              className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
            />

            <div>
              <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                Landing Page Copywriting
              </h3>

              <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                Conversion-focused copy that turns visitors into customers with
                clear value propositions and compelling messaging.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Conversion-focused copy</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Clear value propositions</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
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
              <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                Website Content
              </h3>

              <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                Clear website messaging that builds trust and effectively
                communicates your value to potential clients.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Clear website messaging</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Service descriptions</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                  <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                  <span>Trust-building content</span>
                </li>
              </ul>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=420&fit=crop&crop=center"
              alt="Website Content"
              className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
            />
          </motion.div>

          <div className="my-28 flex justify-center">
            <div className="w-full max-w-[900px] h-px bg-linear-to-r from-transparent via-black/20 to-transparent" />
          </div>

          <div className="max-w-[750px]">
            <h3 className="
              font-heading
              text-[26px] sm:text-[30px] md:text-[34px]
              text-black
            ">
              AI VISIBILITY SERVICES
            </h3>

            <p className="
              mt-3
              text-sm sm:text-base md:text-lg
              
              text-neutral-600
              leading-relaxed
            ">
              Built for the way people search today — across Google, AI tools, and answer engines.
            </p>
          </div>

          {/* AI SERVICES SECTIONS */}
          <motion.div
            className="grid md:grid-cols-2 gap-[6vw] items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=420&fit=crop&crop=center"
                alt="GEO"
                className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
              />

              <div>
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                  GEO
                </h3>

                <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                  Get cited by ChatGPT, Perplexity, and Google AI — where your buyers are actively searching for answers.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>ChatGPT visibility</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Perplexity citations</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Google AI inclusion</span>
                  </li>
                </ul>
              </div>
          </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-[6vw] items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                  AEO
                </h3>

                <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                  Win zero-click answer boxes, featured snippets, and voice search results before users even click.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Featured snippets</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Voice search optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Answer-first content</span>
                  </li>
                </ul>
              </div>

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=420&fit=crop&crop=center"
                alt="AEO"
                className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
              />
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-[6vw] items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=420&fit=crop&crop=center"
                alt="AI Strategy"
                className="w-full h-[420px] object-cover rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-[1.04]"
              />

              <div>
                <h3 className="text-[42px] font-medium tracking-tight mb-4 text-black" style={{
                fontFamily: "var(--font-fahkwang)",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                  AI Content Strategy
                </h3>

                <p className="text-neutral-600 leading-relaxed text-[17px]" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                  Scale content production without losing your brand voice, quality, or strategic direction.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>AI-assisted workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Brand voice consistency</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-600" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                    <span className="mt-[6px] w-[6px] h-[6px] bg-purple-500 rounded-full" />
                    <span>Scalable content systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CTA BUTTON */}
            <div className="flex justify-center mt-16">
              <button className="
                px-8 py-4
                bg-black text-white
                font-medium text-[16px]
                tracking-wide
                rounded-lg
                hover:bg-gray-800
                transition-colors duration-300
                shadow-lg hover:shadow-xl
              ">
                See All Services →
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AIVisibility() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-black z-50">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      >
        <source src="/ai-bg.mp4" type="video/mp4" />
      </video>

      {/* 🖤 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* ✨ GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black z-20" />

      {/* CONTENT */}
      <div className="relative z-30 max-w-[1100px] mx-auto px-6 h-full flex items-center">

        <div className="max-w-[800px]">

          {/* LABEL */}
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">
            AI VISIBILITY
          </p>

          {/* HEADING */}
          <h2 className="font-heading text-[36px] sm:text-[48px] md:text-[60px] text-white leading-[1.1] tracking-tight mb-8">
            Search Changed.
            <br />
            Your Content Strategy Should Too.
          </h2>

          {/* TEXT */}
          <p className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed mb-6">
            Google, ChatGPT, and Perplexity are no longer just search engines.
            They’re <span className="text-white font-medium">recommendation engines</span>.
          </p>

          <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed mb-6">
            Your buyers are asking AI tools which agencies to consider, which tools to use,
            which consultants to hire. These platforms answer with citations — and the brands they cite
            show up in every conversation, every evaluation, every shortlist.
          </p>

          <p className="text-[16px] sm:text-[18px] text-white/70 leading-relaxed mb-10">
            At <span className="text-white font-medium">Wordpinchh</span>, we write content that works for both worlds:
            content that ranks in traditional search and earns citations in AI-generated answers.
            Because in 2025, visibility means both.
          </p>

          {/* CTA */}
          <button className="group inline-flex items-center text-white text-[15px] font-medium border-b border-white/40 pb-1 hover:border-white transition">
            See Our AI Visibility Services
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </div>
      </div>
    </section>
  );
}