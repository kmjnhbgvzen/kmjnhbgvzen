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
              Attract high-paying clients with a portfolio website designer in Moradabad who creates clean, professional portfolios that showcase your best work. Zentrix Infotech designs stunning portfolio websites for photographers, designers, freelancers, and agencies—mobile-optimized and built to generate serious inquiries.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Portfolio Websites Convert Clients in Moradabad
            </h2>
            <p>
              Clients check portfolios online before hiring. A professional portfolio website positions you as the expert they need, making it easy for them to see your skills and contact you immediately.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Clean project galleries that load fast on mobile phones.</li>
              <li>Professional &quot;About&quot; sections that build instant trust.</li>
              <li>Prominent contact buttons (Call, WhatsApp, Email) on every page.</li>
              <li>Mobile-optimized for Moradabad&apos;s 92% smartphone users.</li>
            </ul>
            <p>
              Your portfolio becomes your 24/7 salesperson—working even when you&apos;re sleeping, showcasing your best projects to potential clients searching late at night.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Perfect For These Professionals
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Photographers & Videographers</h3>
                <p>Hero image sliders, categorized galleries (weddings, events, products), client testimonials, video reel sections.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Web Designers & Developers</h3>
                <p>Live project demos, case studies with before/after screenshots, tech stack showcases, client results metrics.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interior Designers & Architects</h3>
                <p>Before/after sliders, 3D walkthrough embeds, project timelines, material galleries, floor plan viewers.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Makeup Artists & Fashion Stylists</h3>
                <p>Lookbook grids, video transformation reels, before/after comparisons, booking calendars, bridal portfolios.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Freelance Consultants & Coaches</h3>
                <p>Service packages with pricing tiers, success stories with metrics, free consultation CTAs, client transformation stories.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Graphic Designers & Illustrators</h3>
                <p>Process breakdowns, mockup presentations, brand identity showcases, animation portfolios.</p>
              </div>
            </div>

            <p className="mt-4">Each portfolio is customized for your specific industry and target clients.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Our Portfolios Different
            </h2>
            <p>Focus on client conversion, not just pretty designs.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Project-Focused Homepages:</strong> Best work above the fold, no fluff—clients see results in 3 seconds.</li>
              <li><strong>One-Click Contact:</strong> WhatsApp, phone, email—made for instant action on mobile.</li>
              <li><strong>Mobile-First Galleries:</strong> Swipeable images perfect for phones, zoomable on desktop.</li>
              <li><strong>Fast Loading:</strong> Optimized images, under 2-second loads even on 3G networks.</li>
              <li><strong>Easy Updates:</strong> Simple dashboard to add new projects yourself—no coding needed.</li>
              <li><strong>Trust Signals:</strong> Client logos, star ratings, &quot;As seen on&quot; sections.</li>
            </ul>
            <p className="mt-4">Every element guides visitors toward contacting you, not just admiring your work.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio Success Stories
            </h2>
            <div className="space-y-4">
              <div>
                <p><strong>Wedding Photographer Portfolio:</strong> Wedding inquiries up 380% after mobile-optimized redesign—now books 85% of work from website.</p>
              </div>
              <div>
                <p><strong>Web Designer Site:</strong> Secured high-value freelance projects from portfolio traffic, including 3 enterprise clients in first 3 months.</p>
              </div>
              <div>
                <p><strong>Interior Designer:</strong> 3D project gallery booked 65% more consultations, converted local leads into ₹8L+ projects.</p>
              </div>
              <div>
                <p><strong>Makeup Artist:</strong> Instagram-style reels section filled bridal appointments for entire wedding season.</p>
              </div>
              <div>
                <p><strong>Freelance Developer:</strong> Live demo section converted 42% of visitors to clients, doubled monthly revenue.</p>
              </div>
              <div>
                <p><strong>Graphic Design Studio:</strong> Brand case studies positioned them as premium agency, landed corporate contracts.</p>
              </div>
            </div>
            <p className="mt-4">Real portfolios generating real business growth.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Portfolio Trends
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>92% view portfolios on mobile first—thumb-friendly navigation essential.</li>
              <li>Clients want to see local work (Moradabad weddings, brassware shoots, regional businesses).</li>
              <li>WhatsApp integration = 3x higher response rates vs email forms.</li>
              <li>Video reels outperform static images by 280% in engagement.</li>
              <li>Clean, minimalist designs convert 2.5x better than flashy animations.</li>
              <li>Local testimonials mentioning Moradabad projects build 4x more trust.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Detailed Portfolio Website Structure
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Homepage (First Impression)</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Hero section: Your photo + tagline + &quot;Hire Me&quot; button</li>
                  <li>Featured projects carousel (3-5 best works)</li>
                  <li>Quick stats: &quot;150+ happy clients&quot; &quot;5+ years experience&quot;</li>
                  <li>Trust section: Client logos + 5-star ratings</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Work/Projects Page</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Filterable gallery (weddings, products, commercial)</li>
                  <li>Individual project pages with process, challenges, results</li>
                  <li>Downloadable case study PDFs for serious prospects</li>
                  <li>Embedded videos and 360° views where needed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About Page</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Professional headshot + short bio</li>
                  <li>Experience timeline</li>
                  <li>Skills breakdown (simple icons)</li>
                  <li>&quot;Why choose me&quot; section with differentiators</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Page</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Embedded Google Maps location</li>
                  <li>WhatsApp one-click chat</li>
                  <li>Simple form (name, phone, message)</li>
                  <li>Social proof testimonials</li>
                  <li>FAQ section for common questions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our 5-Step Portfolio Process
            </h2>
            <div className="space-y-3">
              <p><strong>1. Strategy Call (30 mins)</strong> – Understand your niche, best projects, target clients, style preferences.</p>
              <p><strong>2. Homepage + Gallery Mockup</strong> – Visual approval before any coding starts.</p>
              <p><strong>3. Content Organization</strong> – Projects curated, testimonials collected, services structured.</p>
              <p><strong>4. Mobile/Desktop Build</strong> – Full responsiveness across 50+ devices.</p>
              <p><strong>5. Launch + Training</strong> – Live site + 30-min video walkthrough for updates.</p>
            </div>
            <p className="mt-4"><strong>Timeline:</strong> 7-14 days for professional portfolios. Rush delivery available.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Creatives Choose Zentrix
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Understanding:</strong> Moradabad weddings, brassware shoots, regional business styles.</li>
              <li><strong>Client-Focused Design:</strong> Built to generate calls and WhatsApp messages, not just views.</li>
              <li><strong>90 Days Free Support:</strong> Add projects anytime with priority help.</li>
              <li><strong>Real Device Testing:</strong> Samsung Galaxy, Vivo, iPhone, budget Androids used in Moradabad.</li>
              <li><strong>SEO for Local Discovery:</strong> Rank for &quot;wedding photographer Moradabad,&quot; &quot;graphic designer near me.&quot;</li>
              <li><strong>Content Strategy Included:</strong> Help writing project descriptions that attract your ideal clients.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get Your Portfolio Website Today!
            </h2>
            <p>Zentrix Infotech—Moradabad&apos;s top portfolio website designer.</p>
            <p className="mt-2">📞 7248800839</p>
            <p>📧 info@zentrixinfotech.com</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Portfolio Website FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How long to build my portfolio?</h3>
                <p>A: 7-10 days for standard portfolios, 12-14 days for video-heavy or complex galleries.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do portfolios need to be mobile friendly?</h3>
                <p>A: Essential—92% Moradabad traffic is mobile first, clients browse on phones while traveling.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can I add new work myself after launch?</h3>
                <p>A: Yes—simple drag-and-drop dashboard, or we handle updates for you.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Will my portfolio rank in local Google searches?</h3>
                <p>A: Yes—optimized for &quot;photographer Moradabad,&quot; &quot;web designer near me&quot; type searches.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. What if I need video galleries or 3D walkthroughs?</h3>
                <p>A: Full support—YouTube/Vimeo embeds, optimized video players, 3D model viewers.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q6. Do you design portfolios for specific niches?</h3>
                <p>A: Yes—wedding photography, product shoots, fashion lookbooks, architecture, web design, branding.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q7. How many projects should my portfolio show?</h3>
                <p>A: 8-12 best projects maximum. Quality beats quantity—show your BEST work only.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q8. Can you help write project descriptions?</h3>
                <p>A: Yes—professional copy that highlights challenges, solutions, and results to attract clients.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Portfolio Website Designer in Moradabad | Professional Portfolio Design | Zentrix Infotech
              </p>
              <p className="mt-2 text-gray-700">
                Helping Moradabad&apos;s photographers, designers, freelancers, and agencies showcase their best work with stunning portfolio websites that convert visitors into high-paying clients.
              </p>
            </div>
          </div>

          <PostNavigation slug="portfolio-website-designer-moradabad" />
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