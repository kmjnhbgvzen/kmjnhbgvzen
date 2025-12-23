import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";

const PostNavigation = ({ slug }) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <div className="flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          ← Previous Article
        </button>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Next Article →
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            
            <p>
              Revive your outdated website with professional website redesign in Moradabad. Zentrix Infotech transforms slow, non-mobile sites into modern, fast-loading websites that attract more customers and rank higher in local searches—perfect for businesses struggling with old designs.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Your Website Needs Redesign in Moradabad
            </h2>
            <p>
              Old websites lose customers daily. 76% of users leave sites that aren&apos;t mobile-friendly, and Google penalizes slow pages. A fresh redesign fixes these issues and positions your business for growth.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Converts desktop-only sites to fully mobile responsive.</li>
              <li>Speeds up loading from 8+ seconds to under 3 seconds.</li>
              <li>Updates outdated designs to modern, trustworthy layouts.</li>
              <li>Fixes broken links, forms, and navigation issues.</li>
              <li>Improves Google rankings with fresh content structure.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Website Problems We Fix
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Slow Loading Issues</h3>
                <p>Heavy images, unoptimized code, too many plugins—your site takes forever to load.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Display Problems</h3>
                <p>Looks perfect on laptop, broken on phones (92% of Moradabad traffic).</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Outdated Design</h3>
                <p>10-year-old layouts that scream &quot;unprofessional&quot; to new visitors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Poor User Experience</h3>
                <p>Confusing navigation, no clear contact info, visitors can&apos;t find what they need.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Low Google Rankings</h3>
                <p>No mobile optimization, missing SEO basics, buried in search results.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Broken Functionality</h3>
                <p>Forms don&apos;t work, buttons fail, pages don&apos;t load properly.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Complete Website Redesign Services
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visual Refresh & Modernization</h3>
                <p>Complete design overhaul while keeping your branding and content.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Responsiveness Upgrade</h3>
                <p>Transform desktop sites into mobile masterpieces for smartphone users.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Speed Optimization Overhaul</h3>
                <p>Reduce load times from 8-10 seconds to under 3 seconds guaranteed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Navigation & UX Improvement</h3>
                <p>Clear menus, logical structure, easy paths to contact/services.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Restructuring</h3>
                <p>Organize information so visitors find what they need in 3 clicks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SEO Technical Audit & Fix</h3>
                <p>On-page SEO, schema markup, local optimization improvements.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Website Redesign Success Stories
            </h2>
            <div className="space-y-4">
              <div>
                <p><strong>Restaurant Website:</strong> Loading time dropped from 9s to 2.1s, online orders up 420%.</p>
              </div>
              <div>
                <p><strong>Hospital Site:</strong> Mobile redesign generated 380+ patient appointments in first month.</p>
              </div>
              <div>
                <p><strong>Brassware Retailer:</strong> Redesign ranked #2 for &quot;brassware Moradabad,&quot; sales up 290%.</p>
              </div>
              <div>
                <p><strong>Coaching Center:</strong> Navigation fix increased course enrollments by 340%.</p>
              </div>
              <div>
                <p><strong>Local Shop:</strong> Form optimization boosted inquiries 450% via mobile WhatsApp.</p>
              </div>
            </div>
            <p className="mt-4">Real businesses revived through strategic redesigns.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Website Reality Check
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>92% customers use smartphones to find local businesses.</li>
              <li>76% leave sites that take longer than 3 seconds to load.</li>
              <li>Google prioritizes mobile-friendly sites in local search.</li>
              <li>Old designs lose trust—modern layouts convert 3.2x better.</li>
              <li>WhatsApp integration on redesigned sites gets 4x responses.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our 6-Step Website Redesign Process
            </h2>
            <div className="space-y-3">
              <p><strong>1. Website Audit</strong> – Full analysis of speed, mobile issues, SEO problems.</p>
              <p><strong>2. Competitor Research</strong> – Study top-ranking local competitors.</p>
              <p><strong>3. Design Direction</strong> – Modern mockups keeping your brand identity.</p>
              <p><strong>4. Content Migration</strong> – Restructure without losing important information.</p>
              <p><strong>5. Technical Development</strong> – Speed optimization, mobile responsiveness, fixes.</p>
              <p><strong>6. Testing & Launch</strong> – Cross-device testing + 301 redirects for SEO.</p>
            </div>
            <p className="mt-4"><strong>Timeline:</strong> 10-25 days depending on current site condition.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Happens During Redesign
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 1: Diagnosis</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Speed test (Google PageSpeed, GTmetrix)</li>
                  <li>Mobile responsiveness audit</li>
                  <li>SEO technical audit</li>
                  <li>User experience heatmap analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 2: Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wireframes for improved navigation</li>
                  <li>Modern design mockups</li>
                  <li>Content reorganization plan</li>
                  <li>Feature prioritization</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 3: Development</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Responsive design implementation</li>
                  <li>Speed optimization (images, code, database)</li>
                  <li>Form/functionality fixes</li>
                  <li>Mobile testing across devices</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Week 4: Launch</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>301 redirects for SEO</li>
                  <li>Final testing</li>
                  <li>Client training</li>
                  <li>Go-live + monitoring</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses Choose Zentrix for Redesign
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>No Downtime Guarantee:</strong> Your site stays live during redesign.</li>
              <li><strong>SEO Safe Migration:</strong> Rankings preserved with proper redirects.</li>
              <li><strong>Real Device Testing:</strong> 50+ Moradabad smartphones tested.</li>
              <li><strong>Content Preservation:</strong> All important pages and info kept.</li>
              <li><strong>90 Days Free Support:</strong> Post-launch tweaks included.</li>
              <li><strong>Performance Promise:</strong> Under 3-second loads or we optimize free.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transform Your Website Today!
            </h2>
            <p>Zentrix Infotech specializes in website redesign in Moradabad.</p>
            <p className="mt-2">📞 7248800839</p>
            <p>📧 info@zentrixinfotech.com</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Website Redesign FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Will redesign hurt my Google rankings?</h3>
                <p>A: No—proper 301 redirects and SEO migration preserve rankings.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How long does website redesign take?</h3>
                <p>A: 10-15 days for simple sites, 20-25 days for complex functionality.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you keep my existing content?</h3>
                <p>A: Yes—all important content is restructured and preserved.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Is my site offline during redesign?</h3>
                <p>A: Never—live parallel site with seamless switch at launch.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. What if I&apos;m not technical?</h3>
                <p>A: Complete training + ongoing support provided.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q6. Do you fix slow loading problems?</h3>
                <p>A: Primary focus—3-second loads guaranteed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q7. Can you make it mobile friendly?</h3>
                <p>A: 100% responsive across all devices.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Website Redesign in Moradabad | Professional Website Modernization | Zentrix Infotech
              </p>
              <p className="mt-2 text-gray-700">
                Transforming outdated websites into modern, fast-loading, mobile-friendly platforms that attract more customers and rank higher in local searches across Moradabad.
              </p>
            </div>
          </div>

          <PostNavigation slug="website-redesign-moradabad" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;