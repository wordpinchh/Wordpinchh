"use client";

export default function AboutValuesGrid() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* STRATEGY */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="8" y="8" width="48" height="48" rx="8" stroke="#6C5CE7"/>
                <path d="M16 24 L48 24" stroke="#6C5CE7" strokeLinecap="round"/>
                <circle cx="32" cy="40" r="4" fill="#6C5CE7"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-white">
              STRATEGY
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              We start with clear thinking and purposeful planning to build strong foundations for every brand.
            </p>
          </div>

          {/* CREATIVITY */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <polygon points="32,8 48,32 32,56" stroke="#A29BFE" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="32" cy="24" r="8" fill="none" stroke="#A29BFE" strokeWidth="2"/>
                <circle cx="32" cy="48" r="4" fill="#A29BFE"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-white">
              CREATIVITY
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Bold ideas and compelling storytelling that make brands stand out in a crowded digital world.
            </p>
          </div>

          {/* CLARITY */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="32" cy="32" r="20" stroke="#74b9ff" strokeWidth="2"/>
                <path d="M32 12 L32 20 M32 44 L32 52" stroke="#74b9ff" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="6" fill="#74b9ff"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-white">
              CLARITY
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Simple, focused messaging that helps brands communicate with confidence and impact.
            </p>
          </div>

          {/* IMPACT */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="16" y="16" width="32" height="32" rx="4" stroke="#6C5CE7" strokeWidth="2"/>
                <path d="M24 28 L40 28 M24 36 L40 36" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="32" cy="44" r="3" fill="#6C5CE7"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-white">
              IMPACT
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Work designed not just to look good, but to drive measurable growth and real results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
