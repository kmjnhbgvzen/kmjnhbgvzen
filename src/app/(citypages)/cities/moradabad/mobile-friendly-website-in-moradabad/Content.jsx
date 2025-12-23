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
              Get a mobile friendly website in Moradabad that captures 92% smartphone traffic. Zentrix Infotech builds lightning-fast, touch-optimized sites using React, Next.js, and Tailwind CSS—ensuring perfect performance on Jio/Airtel networks and all local devices.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Mobile Friendly Websites Dominate Moradabad
            </h2>
            <p>
              92% of Moradabad users access internet via smartphones. Google penalizes non-mobile sites. Our mobile friendly designs deliver superior user experience and search rankings.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Instant Mobile Loading:</strong> Under 3 seconds on 4G/3G networks.</li>
              <li><strong>Touch-Optimized Navigation:</strong> Thumb-friendly menus and buttons.</li>
              <li><strong>Google Mobile-First Indexing:</strong> Higher rankings for mobile users.</li>
              <li><strong>Local &quot;Near Me&quot; Searches:</strong> Dominate restaurant/hospital queries.</li>
              <li><strong>Reduced Bounce Rates:</strong> 75% lower exits on mobile optimized sites.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Mobile Friendly Website Services
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Mobile Business Websites</h3>
            <p>
              Fast-loading sites for cafés, clinics, and service providers with one-tap contact.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Mobile E-Commerce Stores</h3>
            <p>
              Touch-optimized product browsing, swipe galleries, and frictionless checkout.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Mobile Booking Systems</h3>
            <p>
              Appointment schedulers with calendar integration and instant confirmations.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Progressive Web Apps (PWAs)</h3>
            <p>
              App-like experience with offline access and push notifications.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Mobile Landing Pages</h3>
            <p>
              High-conversion pages for promotions optimized for smartphone screens.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Existing Site Mobile Conversion</h3>
            <p>
              Transform desktop sites into mobile masterpieces without redesign.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Mobile-First Technology Stack
            </h2>
            
            <p className="font-semibold text-gray-900">Responsive Frameworks:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tailwind CSS:</strong> Mobile-first utilities</li>
              <li><strong>CSS Grid/Flexbox:</strong> Fluid layouts</li>
              <li><strong>Viewport units:</strong> Perfect scaling</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Performance Optimization:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Next.js SSR:</strong> Instant first paint</li>
              <li><strong>Image optimization:</strong> WebP + lazy loading</li>
              <li><strong>Critical CSS:</strong> Above-fold rendering</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Mobile Enhancements:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Touch gestures support</li>
              <li>Hardware acceleration</li>
              <li>PWA manifest & service workers</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Mobile Success Stories from Moradabad
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Clinic Mobile Site:</strong> Patient bookings jumped 450% via smartphone access.
              </p>
              <p>
                <strong>Brassware Mobile Catalog:</strong> Export inquiries surged 390% from mobile browsers.
              </p>
              <p>
                <strong>Restaurant Mobile Menu:</strong> Online orders increased 68% with one-tap ordering.
              </p>
              <p>
                <strong>Coaching Mobile Portal:</strong> Course enrollments grew 330% on mobile devices.
              </p>
              <p>
                <strong>Real Estate Mobile Search:</strong> Property views dominated 85% from smartphones.
              </p>
              <p className="italic mt-4">
                Proven mobile performance driving local conversions.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries Needing Mobile Friendly Websites
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurants & food delivery</li>
              <li>Hospitals & clinics</li>
              <li>Brass handicraft exporters</li>
              <li>Retail & local stores</li>
              <li>Real estate agents</li>
              <li>Coaching centers</li>
              <li>Service providers</li>
              <li>Local directories</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Mobile Internet Reality
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Smartphone penetration: 92% of web traffic</li>
              <li>Average connection: 4G/3G mixed networks</li>
              <li>72% abandon sites &gt;3s load time</li>
              <li>Voice search: 45% growth in Hindi</li>
              <li>AMP pages essential for news/content</li>
            </ul>
            <p className="mt-4">
              Mobile friendly design = business survival in Moradabad.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              6-Phase Mobile Friendly Development
            </h2>
            <p>
              <strong>1. Mobile User Research</strong> – Device/preference analysis
            </p>
            <p>
              <strong>2. Touch-First Wireframes</strong> – Thumb zone optimized layouts
            </p>
            <p>
              <strong>3. Mobile Performance Planning</strong> – Network simulation strategy
            </p>
            <p>
              <strong>4. Responsive Development</strong> – Progressive enhancement approach
            </p>
            <p>
              <strong>5. Real Device Testing</strong> – Samsung, iPhone, budget Androids
            </p>
            <p>
              <strong>6. Mobile Launch Optimization</strong> – Core Web Vitals compliance
            </p>
            <p className="mt-4">
              <strong>Timeline:</strong> 7-21 days based on scope.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Zentrix Mobile Sites Excel
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>50+ Local Devices Tested:</strong> Real Moradabad smartphones</li>
              <li><strong>92+ Mobile Lighthouse Scores</strong> guaranteed</li>
              <li><strong>Jio/Airtel Network Optimized</strong> for local speeds</li>
              <li><strong>Hindi Font Perfection:</strong> Devanagari scales flawlessly</li>
              <li><strong>Offline Functionality:</strong> PWA capabilities included</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Make Your Business Mobile Ready Today!
            </h2>
            <p>
              Zentrix Infotech creates premier mobile friendly websites in Moradabad.
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
              <li>Mobile E-Commerce</li>
              <li>PWA Development</li>
              <li>Mobile SEO Services</li>
              <li>Touch UI Design</li>
              <li>App-Like Websites</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Mobile Friendly Website FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Why mobile friendly over separate apps?</h3>
                <p>Lower cost, instant access, better SEO, works on all devices.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What devices do you optimize for?</h3>
                <p>Samsung Galaxy, Vivo, iPhone, OnePlus—Moradabad&apos;s top phones.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How fast should mobile sites load?</h3>
                <p>Under 3 seconds on 4G, 5 seconds on 3G guaranteed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Does mobile affect Google rankings?</h3>
                <p>Major ranking factor—mobile-first indexing essential.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What support after mobile launch?</h3>
                <p>90 days free + device monitoring included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can existing sites become mobile friendly?</h3>
                <p>Yes—responsive conversion without content loss.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you optimize for Hindi mobile users?</h3>
                <p>Perfect Devanagari rendering across all devices.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Mobile Friendly Website in Moradabad | Touch-Optimized | Lightning Fast | PWA Ready
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech builds mobile friendly websites optimized for Moradabad&apos;s smartphone users, delivering fast-loading, touch-optimized experiences that convert visitors into customers.
              </p>
            </div>
          </div>

          <PostNavigation slug="mobile-friendly-website-moradabad" />
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