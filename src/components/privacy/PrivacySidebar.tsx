"use client";

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  tocTitle?: string;
}

interface PrivacySidebarProps {
  sections: PrivacySection[];
}

export function PrivacySidebar({ sections }: PrivacySidebarProps) {
  const getTocTitle = (section: PrivacySection) => {
    const tocTitles: { [key: string]: string } = {
      'intro': 'Introduction',
      'definitions': 'Definitions',
      'collection': 'Information We Collect',
      'disclosure': 'Disclosure of Information',
      'cookies': 'Cookies & Tracking',
      'retention': 'Retention of Data',
      'security': 'Security',
      'links': 'Links to Other Sites',
      'children': 'Children\'s Privacy',
      'gdpr': 'International Users',
      'changes': 'Policy Changes',
      'contact': 'Contact Us'
    };
    return tocTitles[section.id] || section.title;
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p 
          className="text-sm font-medium tracking-[0.18em] uppercase text-[#8a7a6e] mb-4 text-30px"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Table of Contents
        </p>
        
        <ol className="list-none">
          {sections.map((section) => (
            <li key={section.id} className="border-b border-[#e0d5c8]">
              <a 
                href={`#${section.id}`}
                className="flex items-center py-2.5 text-[17px] text-[#4a3f35] no-underline font-normal transition-colors duration-200 hover:text-[#c8623a]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span className="text-[#c8623a] text-base font-medium mr-2.5" style={{ minWidth: '20px', fontSize: '17px' }}>
                  {section.number}
                </span>
                <span>{getTocTitle(section)}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
