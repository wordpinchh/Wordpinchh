"use client";

export default function TrustedByBrands() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        <h2 className="text-4xl font-light mb-12 text-black" style={{ fontSize: "72px", fontFamily: "Fahkwang, sans-serif" }}>
          TRUSTED BY BRANDS
        </h2>

        <p className="text-neutral-600 mb-16 max-w-[600px] mx-auto">
          We've collaborated with businesses and creators across industries to build meaningful digital experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/tech-startup.svg" 
              alt="Tech Startup"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/ecommerce-brand.svg" 
              alt="E-commerce Brand"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/creative-agency.svg" 
              alt="Creative Agency"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/saas-company.svg" 
              alt="SaaS Company"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/fashion-brand.svg" 
              alt="Fashion Brand"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <img 
              src="/logos/consulting-firm.svg" 
              alt="Consulting Firm"
              className="w-full h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>

        </div>

      </div>

    </section>
  );
}
