"use client";

export default function LogoMarquee() {
  const allLogos = [
    { name: "4P Solutions", alt: "4P Solutions Logo", image: "/logos/4p-solutions.png" },
    { name: "Ahmed H", alt: "Ahmed H Logo", image: "/logos/ahmedH.png" },
    { name: "Begum Chinkari", alt: "Begum Chinkari Logo", image: "/logos/begum-chinkari.jpg" },
    { name: "BharatPe", alt: "BharatPe Logo", image: "/logos/bharatpe_logo.png" },
    { name: "Critic-Care", alt: "Critic-Care Logo", image: "/logos/critic-care.svg" },
    { name: "Digital Brew", alt: "Digital Brew Logo", image: "/logos/digital-brew.png" },
    { name: "FX-Eng", alt: "FX-Eng Logo", image: "/logos/fx-eng.webp" },
    { name: "Happy Bear", alt: "Happy Bear Logo", image: "/logos/happy-bear.png" },
    { name: "HuntsJob", alt: "HuntsJob Logo", image: "/logos/HuntsJobLogo.svg" },
    { name: "ICICI Lombard", alt: "ICICI Lombard Logo", image: "/logos/icici-lombard.png" },
    { name: "Kwick", alt: "Kwick Logo", image: "/logos/kwick.png" },
    { name: "Ladcocrest", alt: "Ladcocrest Logo", image: "/logos/ladcocrest_logo.jfif" },
    { name: "Lagu Bandhu", alt: "Lagu Bandhu Logo", image: "/logos/lagu-bandhu.webp" },
    { name: "Madhav Baug", alt: "Madhav Baug Logo", image: "/logos/madhavbaug-logo.webp" },
    { name: "Mangal Vadhyam", alt: "Mangal Vadhyam Logo", image: "/logos/mangal-vadhyam.png" },
    { name: "MH Tourism", alt: "MH Tourism Logo", image: "/logos/MH-tourism.png" },
    { name: "Rank Rentals", alt: "Rank Rentals Logo", image: "/logos/RC-logo.png" },
    { name: "Revasa Farms", alt: "Revasa Farms Logo", image: "/logos/revasa-farms.png" },
    { name: "Seawest International", alt: "Seawest International Logo", image: "/logos/seawest-logo-new.png" },
    { name: "Shooting Starz New", alt: "Shooting Starz New Logo", image: "/logos/shooting-logo.png" },
    { name: "SL Agarbatti", alt: "SL Agarbatti Logo", image: "/logos/sl-agarbatti_logo.webp" },
    { name: "TCAI", alt: "TCAI Logo", image: "/logos/TCAI-logo.png" },
    { name: "MK Precision", alt: "MK Precision Logo", image: "/logos/MK-PRECISION-logo.jpg" },
    { name: "Yadnya", alt: "Yadnya Logo", image: "/logos/yadnya-logo.png" },
    { name: "Bhanushali", alt: "Bhanushali Logo", image: "/logos/BHANUSHALI-logo.png" },
    { name: "Arvee", alt: "Arvee Logo", image: "/logos/Arvee-logo.png" },
    { name: "NVS Logo", alt: "NVS Logo Logo", image: "/logos/nvs-logo.png" },
    { name: "Techsphere", alt: "Techsphere Logo", image: "/logos/techsphere.jpg" },
  ];
//marque section
  const darkBg  = ['Ahmed H','Lagu Bandhu','Seawest International','TCAI','HuntsJob','ICICI Lombard','Kwick','SL Agarbatti','4P Solutions','Shooting Starz New','Bhanushali'];
  const lightBg = ['Rank Rentals','BharatPe','Critic-Care','Mangal Vadhyam','Madhav Baug','MH Tourism','Revasa Farms','MK Precision','Yadnya','Arvee','NVS Logo','Techsphere'];

  // White background logos - first strip
  const strip1Logos = allLogos.filter(logo => lightBg.includes(logo.name));
  // Black background logos - second strip  
  const strip2Logos = allLogos.filter(logo => darkBg.includes(logo.name));

  const getImgClass = (name: string) =>
    name === 'Lagu Bandhu' ? 'w-50 h-40' :
    (name === 'Kwick' || name === 'HuntsJob' || name === 'ICICI Lombard') ? 'w-50 h-30' :
    (name === 'Yadnya' || name === 'NVS Logo' || name === 'Techsphere') ? 'w-50 h-35' :
    name === 'Bhanushali' ? 'w-60 h-45' :
    name === 'MK Precision' ? 'w-60 h-45' :
    name === 'Shooting Starz New' ? 'w-70 h-50' :
    name === 'Rank Rentals' ? 'w-60 h-45' :
    'w-50 h-40';

  const getWrapClass = (name: string) =>
    (name === 'Kwick' || name === 'HuntsJob' || name === 'ICICI Lombard') ? 'w-75 h-35' : 'w-65 h-35';

const getWrapClassBottom = (name: string) =>
    (name === 'Kwick' || name === 'HuntsJob' || name === 'ICICI Lombard') ? 'w-75 h-35' : 'w-65 h-35';

  const getBgClass = (name: string) =>
    name === 'Yadnya' ? '' :
    darkBg.includes(name)  ? 'bg-black' :
    lightBg.includes(name) ? 'bg-white' : '';

  return (
    <section 
      className="logo-marquee-mobile relative overflow-hidden bg-[#0E0D0A] py-20"
      style={{
        paddingTop: typeof window !== 'undefined' && window.innerWidth <= 640 ? '0px' : '80px'
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Strip 1 — Left to Right */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...strip1Logos, ...strip1Logos].map((logo, index) => (
            <div
              key={`marquee-1-${index}`}
              className="shrink-0 mx-8 px-6 py-3 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm marquee-card"
            >
              <div className="flex items-center justify-center">
                <div className={`${getWrapClass(logo.name)} flex items-center justify-center rounded-lg ${getBgClass(logo.name)}`} style={
                  logo.name === 'Yadnya' ? { backgroundColor: '#B8D432' } :
                  logo.name === 'NVS Logo' ? { backgroundColor: '#1A130D' } :
                  logo.name === 'Techsphere' ? { backgroundColor: '#11395D' } :
                  {}
                }>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className={`${getImgClass(logo.name)} ${logo.name === 'Techsphere' ? 'object-cover' : 'object-contain'}`}
                                      />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strip 2 — Right to Left */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-reverse" style={{ width: 'max-content' }}>
          {[...strip2Logos, ...strip2Logos].map((logo, index) => (
            <div
              key={`marquee-2-${index}`}
              className="shrink-0 mx-8 px-6 py-3 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm marquee-card"
            >
              <div className="flex items-center justify-center">
                <div className={`${getWrapClassBottom(logo.name)} flex items-center justify-center rounded-lg ${getBgClass(logo.name)}`} style={
                  logo.name === 'Yadnya' ? { backgroundColor: '#B8D432' } :
                  logo.name === 'NVS Logo' ? { backgroundColor: '#1A130D' } :
                  logo.name === 'Techsphere' ? { backgroundColor: '#11395D' } :
                  {}
                }>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className={`${getImgClass(logo.name)} ${logo.name === 'Techsphere' ? 'object-cover' : 'object-contain'}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        .marquee-card {
          margin-left: 16px;
          margin-right: 16px;
          padding: 12px 16px;
        }
        @media (max-width: 768px) {
          .marquee-card {
            margin-left: 12px !important;
            margin-right: 12px !important;
            padding: 8px 12px !important;
          }
          .animate-marquee         { animation-duration: 18s; }
          .animate-marquee-reverse { animation-duration: 16s; }
        }
        @media (max-width: 640px) {
          section.logo-marquee-mobile { padding-top: 0px !important; padding-bottom: 40px !important; }
        }
      `}</style>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}