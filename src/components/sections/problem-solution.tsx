"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useState } from "react";

export function ProblemSolution() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const problemSolutions = [
    {
      id: 1,
      problem: "No time to write blogs",
      problemDetail: "Business owners are busy running operations, managing teams, and serving clients. Writing quality blog content consistently requires dedicated time and expertise that most founders simply don't have.",
      solution: "Strategic blog writing",
      solutionDetail: "We create comprehensive, authority-building blog content that positions you as an industry expert while driving organic traffic and generating qualified leads.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      problem: "Website content feels generic",
      problemDetail: "Most websites use templated, uninspired content that fails to connect with visitors or communicate unique value propositions effectively.",
      solution: "Clear website messaging",
      solutionDetail: "We craft compelling website copy that clearly communicates your unique value, builds trust, and converts visitors into customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-green-500/20 to-blue-600/20"
    },
    {
      id: 3,
      problem: "AI content lacks authority",
      problemDetail: "AI-generated content often lacks authentic insights, industry expertise, and the strategic thinking that builds genuine authority.",
      solution: "Authority-focused content",
      solutionDetail: "Our content combines strategic thinking with real expertise to establish you as a credible authority in your field.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 4,
      problem: "LinkedIn presence inconsistent",
      problemDetail: "Inconsistent posting and generic content fail to build the professional network and thought leadership that LinkedIn offers.",
      solution: "LinkedIn thought leadership",
      solutionDetail: "We develop strategic LinkedIn content that builds your professional brand, attracts opportunities, and establishes industry authority.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      bgColor: "from-orange-500/20 to-red-600/20"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Content Challenges & <span className="text-[#6C5CE7]">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-16 text-center">
            Every business faces content challenges. We transform these obstacles into opportunities for growth and authority building.
          </p>

          {/* Interactive Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative h-96 perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15, 
                  ease: "easeOut" 
                }}
              >
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onMouseEnter={() => setFlippedCard(item.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  {/* Flip Card Container */}
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ 
                      rotateY: flippedCard === item.id ? 180 : 0,
                      scale: flippedCard === item.id ? 1.02 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side - Problem */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl border border-border overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Background with blur effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-60`} />
                      <img 
                        src={item.image}
                        alt={item.problem}
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                        <div>
                          <div className="inline-flex items-center gap-2 bg-red-500/80 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <span className="text-xs">PROBLEM</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                            {item.problem}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span>Hover to see solution →</span>
                        </div>
                      </div>
                    </div>

                    {/* Back Side - Solution */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl border border-[#6C5CE7]/50 bg-gradient-to-br from-[#6C5CE7]/10 to-[#A29BFE]/10 overflow-hidden"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      {/* Background with subtle pattern */}
                      <div className="absolute inset-0 bg-linear-to-br from-[#6C5CE7]/5 via-transparent to-[#A29BFE]/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <div className="text-4xl">✨</div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div>
                          <div className="inline-flex items-center gap-2 bg-green-500/80 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <span className="text-xs">SOLUTION</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                            {item.solution}
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {item.solutionDetail}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>← Hover back to problem</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instructions */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground text-sm">
              💡 <strong>Interactive Cards:</strong> Hover over any problem card to reveal the solution with smooth flip animation
            </p>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
