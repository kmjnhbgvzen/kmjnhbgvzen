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
              Experience flawless responsive web design in Moradabad that works perfectly across all devices. Zentrix Infotech creates mobile-first websites using Tailwind CSS, React, and advanced responsive techniques—ensuring 90%+ local mobile users enjoy seamless browsing.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Responsive Web Design Matters in Moradabad
            </h2>
            <p>
              91% of Moradabad users browse on smartphones. Non-responsive sites lose mobile traffic, rankings, and sales. Our designs adapt perfectly from 320px mobiles to 4K desktops.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Mobile-First Indexing:</strong> Responsive = higher search rankings.</li>
              <li><strong>Unified User Experience:</strong> One site, all devices—no separate mobile version.</li>
              <li><strong>Faster Load Times:</strong> Optimized for mobile networks in Moradabad.</li>
              <li><strong>Local Search Advantage:</strong> Mobile-optimized sites dominate &quot;near me&quot; results.</li>
              <li><strong>Reduced Bounce Rates:</strong> 70% drop in exits on responsive designs.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Complete Responsive Design Services
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Mobile-First Business Websites</h3>
            <p>
              Perfect display on Android/iOS with touch-friendly navigation and fast interactions.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Responsive E-Commerce Stores</h3>
            <p>
              Product grids, zoom galleries, and checkout flows optimized for every screen size.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Adaptive Corporate Portals</h3>
            <p>
              Executive dashboards that scale from phones to conference room displays.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Flexible Landing Pages</h3>
            <p>
              High-conversion pages maintaining impact across tablets, mobiles, desktops.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Responsive Web Applications</h3>
            <p>
              Interactive apps with gesture support and orientation handling.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Legacy Site Mobile Conversion</h3>
            <p>
              Transform desktop-only sites into fully responsive platforms.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Advanced Responsive Technology Stack
            </h2>
            
            <p className="font-semibold text-gray-900">CSS Frameworks:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tailwind CSS:</strong> Mobile-first utility classes</li>
              <li><strong>CSS Grid & Flexbox:</strong> Perfect layouts every breakpoint</li>
              <li><strong>Container queries:</strong> Component-level responsiveness</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Modern Techniques:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fluid typography & spacing</li>
              <li>Clamp() functions for dynamic sizing</li>
              <li>Viewport units with fallbacks</li>
              <li>Logical properties for RTL support</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">JavaScript Enhancement:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Intersection Observer for lazy loading</li>
              <li>ResizeObserver for dynamic adjustments</li>
              <li>MatchMedia API for feature detection</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Responsive Design Success Stories
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Hospital Mobile Portal:</strong> Patient bookings increased 420% after responsive redesign.
              </p>
              <p>
                <strong>Brassware Catalog:</strong> Mobile product views boosted export inquiries 360% on phones.
              </p>
              <p>
                <strong>Restaurant Menu Site:</strong> Mobile reservations surged 65% with touch-optimized design.
              </p>
              <p>
                <strong>Coaching Platform:</strong> Tablet/mobile course access improved completion rates 310%.
              </p>
              <p>
                <strong>Real Estate Listings:</strong> Swipeable property galleries dominated mobile image search.
              </p>
              <p className="italic mt-4">
                Real mobile performance driving local business growth.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries Needing Responsive Design
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurants & food delivery</li>
              <li>Healthcare & appointment booking</li>
              <li>Brassware export catalogs</li>
              <li>Retail & online shopping</li>
              <li>Real estate property search</li>
              <li>Education & e-learning</li>
              <li>Professional services</li>
              <li>Local directories & listings</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Mobile Web Statistics
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mobile traffic: 91% of local internet usage</li>
              <li>Average 3G/4G speeds require &lt;3s loads</li>
              <li>68% abandon sites taking &gt;3s to load</li>
              <li>Voice search growing 42% yearly</li>
              <li>&quot;Near me&quot; searches convert 3x higher on mobile</li>
            </ul>
            <p className="mt-4">
              Responsive design captures this massive mobile opportunity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our 6-Phase Responsive Design Process
            </h2>
            <p>
              <strong>1. Device Audit</strong> – Competitor analysis across all screen sizes
            </p>
            <p>
              <strong>2. Mobile-First Wireframes</strong> – Touch-optimized layouts first
            </p>
            <p>
              <strong>3. Breakpoint Strategy</strong> – Custom media queries for local devices
            </p>
            <p>
              <strong>4. Progressive Enhancement</strong> – Desktop features build on mobile base
            </p>
            <p>
              <strong>5. Cross-Device Testing</strong> – Real devices (Samsung, iPhone, tablets)
            </p>
            <p>
              <strong>6. Performance Optimization</strong> – Mobile network simulation testing
            </p>
            <p className="mt-4">
              <strong>Timeline:</strong> 10-25 days based on complexity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Zentrix Responsive Designs Excel
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Real Device Testing:</strong> 50+ Android/iOS devices in Moradabad</li>
              <li><strong>91%+ Mobile Lighthouse Scores</strong> guaranteed</li>
              <li><strong>Local Network Optimized:</strong> Jio/Airtel 4G performance tuned</li>
              <li><strong>Hindi Font Responsiveness:</strong> Perfect scaling across devices</li>
              <li><strong>Orientation Handling:</strong> Portrait/landscape perfection</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Perfect Your Mobile Presence Today!
            </h2>
            <p>
              Zentrix Infotech delivers premier responsive web design in Moradabad.
            </p>
            <p className="mt-4">
              <strong>📞</strong> 7248800839<br />
              <strong>📧</strong> info@zentrixinfotech.com
            </p>
            <p className="mt-4">
              <strong>🌐 Free Mobile Audit →</strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Strategic Internal Links
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mobile Website Development</li>
              <li>E-Commerce Responsive Design</li>
              <li>Cross-Device Testing</li>
              <li>Mobile SEO Optimization</li>
              <li>PWA Development</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Responsive Web Design FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Why is responsive design better than mobile versions?</h3>
                <p>Single codebase, easier maintenance, perfect Google indexing.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What devices do you test on?</h3>
                <p>Samsung Galaxy, iPhone, OnePlus, tablets—Moradabad&apos;s popular devices.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How do you handle slow mobile networks?</h3>
                <p>Critical CSS, lazy loading, image optimization for 3G/4G.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Does responsive affect SEO?</h3>
                <p>Improves rankings via mobile-first indexing and better UX signals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What support after launch?</h3>
                <p>90 days free + device monitoring included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can you convert existing sites?</h3>
                <p>Yes—responsive retrofit without losing content or rankings.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you optimize Hindi content?</h3>
                <p>Perfect Devanagari scaling across all breakpoints.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Responsive Web Design in Moradabad | Mobile-First | Tailwind CSS | React | Cross-Device Compatible
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech creates responsive websites that deliver flawless experiences across all devices, optimized for Moradabad&apos;s mobile-first audience with advanced responsive techniques.
              </p>
            </div>
          </div>

          <PostNavigation slug="responsive-web-design-moradabad" />
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