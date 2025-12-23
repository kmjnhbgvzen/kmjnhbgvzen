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
              Grow your small business with a professional small business website in Moradabad. Zentrix Infotech creates affordable, high-performance websites using React, Next.js, and Tailwind CSS—perfect for local shops, cafés, clinics, and service providers ready to compete online.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Small Businesses Need Websites in Moradabad
            </h2>
            <p>
              92% of customers search online before buying locally. A professional website levels the playing field against big brands and captures &quot;near me&quot; searches dominating Moradabad Google results.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Search Visibility:</strong> Rank for &quot;café Moradabad,&quot; &quot;doctor near me.&quot;</li>
              <li><strong>24/7 Lead Generation:</strong> Work inquiries even when you&apos;re closed.</li>
              <li><strong>Mobile Optimized:</strong> Perfect display on 92% smartphone traffic.</li>
              <li><strong>Credibility Boost:</strong> Professional site = trusted business.</li>
              <li><strong>Social Proof:</strong> Reviews, photos, testimonials build instant trust.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Essential Small Business Website Services
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Local Business Websites</h3>
            <p>
              5-7 page sites with services, gallery, contact, and Google Maps integration.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Service Provider Portals</h3>
            <p>
              Booking forms, service areas, pricing tables, and WhatsApp integration.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Restaurant & Café Sites</h3>
            <p>
              Mobile menus, online ordering, location finder, and reservation systems.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Retail Product Pages</h3>
            <p>
              Simple e-commerce with local pickup, product showcases, and inventory.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Professional Portfolios</h3>
            <p>
              Work galleries, client testimonials, and contact forms for freelancers.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Clinic & Doctor Websites</h3>
            <p>
              Appointment booking, doctor profiles, and patient information portals.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Small Business Technology Stack
            </h2>
            
            <p className="font-semibold text-gray-900">Fast & Reliable:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Next.js:</strong> Lightning-fast page loads</li>
              <li><strong>Tailwind CSS:</strong> Professional responsive design</li>
              <li><strong>React:</strong> Interactive features without complexity</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Essential Features:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact forms with WhatsApp integration</li>
              <li>Google Maps location</li>
              <li>Social media feeds</li>
              <li>SEO-optimized content</li>
              <li>Mobile-first design</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Performance Guaranteed:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>90+ Lighthouse mobile scores</li>
              <li>Under 3-second load times</li>
              <li>Image optimization included</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Small Business Success Stories
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Local Café Website:</strong> Online orders increased 380% within first month.
              </p>
              <p>
                <strong>Clinic Booking Site:</strong> Appointments grew 420% via mobile bookings.
              </p>
              <p>
                <strong>Brassware Retailer:</strong> Product showcase generated ₹4.8L local sales.
              </p>
              <p>
                <strong>Beauty Salon Portal:</strong> Booking system filled 85% of appointments online.
              </p>
              <p>
                <strong>Coaching Center Site:</strong> Course inquiries surged 310% from local searches.
              </p>
              <p className="italic mt-4">
                Real results for Moradabad small businesses.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Serve
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurants & cafés</li>
              <li>Clinics & doctors</li>
              <li>Beauty salons & spas</li>
              <li>Coaching centers</li>
              <li>Local retail shops</li>
              <li>Service providers (electrician, plumber)</li>
              <li>Brassware & handicraft stores</li>
              <li>Fitness centers & gyms</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Moradabad Small Business Digital Reality
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>78% customers check websites before visiting</li>
              <li>Mobile dominates 92% of local searches</li>
              <li>Google My Business + website = top local rankings</li>
              <li>WhatsApp integration drives 65% of inquiries</li>
              <li>Voice search (&quot;near me&quot;) growing rapidly</li>
            </ul>
            <p className="mt-4">
              Professional websites capture this local opportunity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Simple 5-Step Website Process
            </h2>
            <p>
              <strong>1. Free Consultation</strong> – Understand your business and goals
            </p>
            <p>
              <strong>2. Custom Design</strong> – Mobile-first mockups (2 revisions)
            </p>
            <p>
              <strong>3. Fast Development</strong> – Live preview within 7 days
            </p>
            <p>
              <strong>4. Testing & Optimization</strong> – Mobile speed and SEO checks
            </p>
            <p>
              <strong>5. Launch & Training</strong> – Go-live with easy update guide
            </p>
            <p className="mt-4">
              <strong>Timeline:</strong> 10-20 days for small business sites.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Small Businesses Choose Zentrix
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Moradabad Team:</strong> Face-to-face meetings available</li>
              <li><strong>WhatsApp Developer Access:</strong> Direct support anytime</li>
              <li><strong>90 Days Free Maintenance:</strong> No surprise costs</li>
              <li><strong>SEO Ready:</strong> Local search optimization included</li>
              <li><strong>Scalable Solutions:</strong> Add e-commerce later easily</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Launch Your Small Business Website Today!
            </h2>
            <p>
              Zentrix Infotech specializes in small business websites in Moradabad.
            </p>
            <p className="mt-4">
              <strong>📞</strong> 7248800839<br />
              <strong>📧</strong> info@zentrixinfotech.com
            </p>
            <p className="mt-4">
              <strong>🌐 Free Website Consultation →</strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Offerings
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurant Websites</li>
              <li>Clinic Websites</li>
              <li>Local SEO Services</li>
              <li>Website Maintenance</li>
              <li>E-Commerce Upgrade</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Small Business Website FAQs
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do small businesses need websites?</h3>
                <p>Yes—92% customers search online first locally.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How quickly can I get a website?</h3>
                <p>10-15 days for professional small business sites.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Is my site mobile friendly?</h3>
                <p>100% optimized for Moradabad&apos;s 92% smartphone traffic.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you help with Google rankings?</h3>
                <p>Local SEO, Google My Business, and schema markup included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What happens after launch?</h3>
                <p>90 days free support + easy content update training.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can I add online ordering later?</h3>
                <p>Yes—modular design allows seamless e-commerce upgrade.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you integrate WhatsApp?</h3>
                <p>One-tap WhatsApp chat standard on all sites.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Small Business Website in Moradabad | Affordable | Mobile-Optimized | SEO Ready
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech creates professional small business websites that help Moradabad entrepreneurs compete online, capture local searches, and grow their customer base affordably.
              </p>
            </div>
          </div>

          <PostNavigation slug="small-business-website-moradabad" />
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