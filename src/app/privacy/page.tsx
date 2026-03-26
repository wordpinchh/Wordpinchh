"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PrivacyHeader } from '@/components/privacy/PrivacyHeader';
import { PrivacyHero } from '@/components/privacy/PrivacyHero';
import { PrivacySidebar } from '@/components/privacy/PrivacySidebar';
import { CalloutBox } from '@/components/privacy/CalloutBox';
import { CookieGrid } from '@/components/privacy/CookieGrid';
import { ContactBlock } from '@/components/privacy/ContactBlock';

const privacySections = [
  {
    id: 'intro',
    number: '01',
    title: 'Who We Are & Why This Matters',
    content: (
      <>
        <p>Wordpinchh ("us", "we", or "our") operates the website at <a href="https://www.wordpinchh.com">www.wordpinchh.com</a> (hereinafter referred to as the "Service").</p>
        <p>This Privacy Policy informs you of our practices regarding the collection, use, and disclosure of Personal Information when you use our Service, and the choices available to you in connection with that data.</p>
        <p>We use your data solely to provide and improve the Service. By using Wordpinchh, you agree to the collection and use of information in accordance with this policy. Terms not defined here carry the same meaning as in our <a href="#">Terms of Use</a>.</p>
        <CalloutBox>
          We believe privacy is a right, not a feature. We collect only what we need, keep it only as long as necessary, and never sell your personal information.
        </CalloutBox>
      </>
    )
  },
  {
    id: 'definitions',
    number: '02',
    title: 'Key Terms',
    content: (
      <>
        <h3>Service</h3>
        <p>The website accessible at <a href="https://www.wordpinchh.com">www.wordpinchh.com</a>, operated by Wordpinchh.</p>

        <h3>Personal Information</h3>
        <p>Any information that identifies, relates to, describes, or could reasonably be linked — directly or indirectly — to a particular individual or their household. This includes, but is not limited to, names, email addresses, IP addresses, and usage data when maintained in a way that can be linked to a specific person.</p>

        <h3>Cookies</h3>
        <p>Small data files stored on your device by a website, including traditional browser cookies, pixels, web beacons, scripts, and other tracking technologies that allow us or third parties to read or place data on your device.</p>

        <h3>Data Controller</h3>
        <p>The entity that determines purposes and means of processing Personal Information. Wordpinchh acts as Data Controller for information you provide through our Service.</p>

        <h3>Data Processor (Service Provider)</h3>
        <p>A third party that processes Personal Information on behalf of Data Controller under contractual obligations, limited to tasks we instruct.</p>

        <h3>Data Subject (User)</h3>
        <p>Any living individual who uses our Service and whose Personal Information is processed by us.</p>
      </>
    )
  },
  {
    id: 'collection',
    number: '03',
    title: 'What We Collect & How We Use It',
    content: (
      <>
        <h3>Identifiers</h3>
        <p>When you register or interact with our Service, we may collect:</p>
        <ul>
          <li>Email address or username</li>
          <li>First name and last name</li>
          <li>Internet Protocol (IP) address and Cookie IDs</li>
          <li>Unique device identifiers</li>
        </ul>
        <p>We may use this information to send newsletters, marketing communications, or promotional materials. You may opt out at any time via the unsubscribe link in any email we send.</p>

        <h3>Usage Data</h3>
        <p>We automatically collect information about how you access and use Service, which may include your browser type and version, operating system, pages visited, time and date of visits, time spent on pages, and diagnostic data.</p>

        <h3>Financial Information</h3>
        <p>If you make a purchase through Wordpinchh, we may collect payment card information, processed securely through our payment partners.</p>

        <h3>Commercial Information</h3>
        <p>We may collect records of products or services you have purchased, obtained, or shown interest in through our Service.</p>

        <h3>How We Use Your Information</h3>
        <ul>
          <li>To provide, operate, and maintain our Service</li>
          <li>To notify you about changes to Service</li>
          <li>To enable interactive features when you choose to use them</li>
          <li>To provide customer support and respond to enquiries</li>
          <li>To analyze usage and improve Service</li>
          <li>To detect, prevent, and address technical issues or unauthorized access</li>
          <li>To send relevant news, offers, or information you have not opted out of</li>
        </ul>
      </>
    )
  },
  {
    id: 'disclosure',
    number: '04',
    title: 'When We Share Your Data',
    content: (
      <>
        <h3>Service Providers</h3>
        <p>We may share your data with trusted third-party service providers who assist in operating our Service — such as payment processors, cloud storage providers, or email delivery services. These providers are contractually limited to using your data only for tasks we assign and may not use it for independent purposes.</p>

        <h3>Analytics, Social Media & Advertising Partners</h3>
        <p>We may share data with analytics providers, advertising networks, or social media platforms to measure performance, offer social features, or deliver relevant advertising. This may involve third-party cookies placed through our Service.</p>

        <h3>Business Transactions</h3>
        <p>In the event of a merger, acquisition, or sale of assets, your Personal Information may be transferred. We will notify you before any such transfer and before your data becomes subject to a different privacy policy.</p>

        <h3>Legal Requirements</h3>
        <p>Wordpinchh may disclose your Personal Information if required by law or in good faith belief that such action is necessary to:</p>
        <ul>
          <li>Comply with a legal obligation or court order</li>
          <li>Protect and defend our rights or property</li>
          <li>Prevent or investigate potential wrongdoing on Service</li>
          <li>Protect the personal safety of users or public</li>
          <li>Guard against legal liability</li>
        </ul>
      </>
    )
  },
  {
    id: 'cookies',
    number: '05',
    title: 'How We Use Cookies',
    content: (
      <>
        <h3>What Are Cookies?</h3>
        <p>A cookie is a small data file stored in your browser when you visit a website. Cookies help the site function correctly, remember your preferences, and personalize your experience. Some cookies expire when you close your browser ("Session Cookies"); others persist across sessions ("Persistent Cookies").</p>
        <p>Cookies set by the domain you visit are "First Party Cookies." Those set by other domains — such as analytics or advertising platforms — are "Third Party Cookies."</p>

        <h3>Types of Cookies We Use</h3>
        <CookieGrid />

        <h3>Third-Party Cookie Providers</h3>
        <p>Some cookies are set by our third-party partners, which may include:</p>
        <ul>
          <li>Google — <a href="https://policies.google.com/privacy/partners" target="_blank" rel="noopener">policies.google.com/privacy/partners</a></li>
          <li>Meta (Facebook) — <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener">facebook.com/policy.php</a></li>
          <li>LinkedIn — <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener">linkedin.com/legal/privacy-policy</a></li>
          <li>Twitter / X — <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener">twitter.com/en/privacy</a></li>
        </ul>

        <h3>Managing Cookies</h3>
        <p>You can block, disable, or delete cookies at any time through your browser settings. Note that doing so may limit access to some pages or features of our Service.</p>
        <ul>
          <li><a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener">Chrome — Google Support</a></li>
          <li><a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener">Internet Explorer — Microsoft Support</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener">Firefox — Mozilla Support</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener">Safari — Apple Support</a></li>
        </ul>

        <h3>Do Not Track</h3>
        <p>Your browser may offer a Do Not Track (DNT) signal. We currently do not respond to DNT signals, as there is no industry-wide standard for interpreting or honoring them. We will update this policy if that changes.</p>
      </>
    )
  },
  {
    id: 'retention',
    number: '06',
    title: 'How Long We Keep Your Data',
    content: (
      <>
        <p>We retain your Personal Information only for as long as necessary for purposes outlined in this policy. Retention periods are determined by legal obligations, dispute resolution requirements, and the enforcement of our agreements.</p>
        <p>Usage Data is generally held for shorter periods, except where it is needed to strengthen security, improve functionality, or where legal obligations require longer retention.</p>
      </>
    )
  },
  {
    id: 'security',
    number: '07',
    title: 'Protecting Your Information',
    content: (
      <>
        <p>The security of your data matters to us. We implement commercially reasonable technical and organizational measures to protect your Personal Information from unauthorized access, alteration, disclosure, or destruction.</p>
        <CalloutBox>
          No method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
        </CalloutBox>
      </>
    )
  },
  {
    id: 'links',
    number: '08',
    title: 'Third-Party Links',
    content: (
      <>
        <p>Our Service may contain links to external websites not operated by Wordpinchh. If you click a third-party link, you will be directed to that site's own environment and privacy policy.</p>
        <p>We have no control over and assume no responsibility for the content, privacy practices, or policies of any third-party sites or services. We strongly encourage you to review the privacy policy of every website you visit.</p>
      </>
    )
  },
  {
    id: 'children',
    number: '09',
    title: 'Protecting Younger Users',
    content: (
      <>
        <p>Wordpinchh is not directed to individuals under the age of 18. We do not knowingly collect Personal Information from minors.</p>
        <p>If you are a parent or guardian and believe your child has provided us with Personal Information, please contact us immediately. Upon becoming aware of such collection without verified parental consent, we will take prompt steps to remove the information from our systems.</p>
      </>
    )
  },
  {
    id: 'gdpr',
    number: '10',
    title: 'Data Subjects Outside India',
    content: (
      <>
        <p>Wordpinchh is operated from India. If you are accessing our Service from the European Economic Area (EEA), United Kingdom, Switzerland, or any other jurisdiction with data protection laws different from India's, please be aware that your information will be transferred to and processed in India.</p>
        <p>Our Service is not specifically targeted at residents of the EEA or other international territories, and we do not have an establishment in those regions. If you visit or contact us, your Personal Information will be handled in accordance with this policy and applicable Indian law, unless we have separately agreed otherwise in writing.</p>
        <p>If you have questions about cross-border data transfers, please <a href="#contact">contact us</a>.</p>
      </>
    )
  },
  {
    id: 'changes',
    number: '11',
    title: 'Keeping This Policy Current',
    content: (
      <>
        <p>We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or Service features. We will notify you of material changes by posting the updated policy on this page and updating the "Last Updated" date.</p>
        <p>For significant changes, we may also provide notice via email or a prominent banner on our Service prior to the change taking effect.</p>
        <p>We encourage you to review this policy periodically. Continued use of Wordpinchh following any posted changes constitutes your acceptance of those changes.</p>
      </>
    )
  },
  {
    id: 'contact',
    number: '12',
    title: 'Get in Touch',
    content: (
      <>
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your Personal Information, please reach out — we're happy to help.</p>
        <ContactBlock />
      </>
    )
  }
];

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen" style={{ background: '#faf8f4', color: '#1a1410' }}>
      <PrivacyHeader />
      <PrivacyHero />
      
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] max-w-[1400px] mx-auto px-12 lg:px-48 py-16 lg:py-20 gap-8 lg:gap-12">
        <PrivacySidebar sections={privacySections} />
        
        <main className="content">
          {privacySections.map((section, index) => (
            <section 
              key={section.id}
              id={section.id}
              className={`${index > 0 ? 'pt-14 border-t border-[#e0d5c8] mt-14' : ''}`}
            >
              <div 
                className="text-sm font-medium tracking-[0.18em] uppercase text-[#c8623a] mb-2.5 text-20px"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {section.number} — {section.title.split(' &')[0]}
              </div>
              <h2 
                className="text-[40px] font-normal text-[#1a1410] leading-tight mb-5"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {section.title}
              </h2>
              <div className="space-y-3.5 text-[19px] leading-[1.75] text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {section.content}
              </div>
            </section>
          ))}
        </main>
      </div>
      
      {/* Footer */}
      <footer 
        className="border-t border-[#e0d5c8] px-12 lg:px-48 py-8 flex items-center justify-between"
        style={{ background: '#f3ede3' }}
      >
        <div className="flex-1"></div>
        
        <p 
          className="text-[15.5px] text-[#8a7a6e] text-center"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          © 2026 Wordpinchh. All rights reserved.
        </p>
        
        <div className="flex-1 flex justify-end pr-8">
          <span 
            onClick={() => window.location.href = '/privacy-policy'}
            className="text-[15.5px] text-[#8a7a6e] no-underline transition-all duration-300 ease-in-out hover:text-[#faf8f4] hover:underline hover:underline-offset-2 cursor-pointer"
            style={{ 
              fontFamily: "var(--font-dm-sans)",
              letterSpacing: '0.02em'
            }}
          >
            PRIVACY POLICY
          </span>
        </div>
      </footer>
    </div>
  );
}
