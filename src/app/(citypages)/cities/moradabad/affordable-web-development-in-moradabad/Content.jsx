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
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Affordable Web Development in Moradabad That Delivers Real Value
            </h2>
            <p>
              Discover affordable web development in Moradabad that delivers real value without compromising on quality. Zentrix Infotech helps local businesses build fast, secure, and scalable websites designed to attract customers, generate leads, and support long-term growth—without stretching your budget.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Local Businesses Choose Cost-Effective Web Development
            </h2>
            <p>
              Small businesses and startups need smart digital solutions that fit their budgets. Our local team focuses on delivering high-impact websites with essential features that drive results.
            </p>
            <p>
              What makes our approach valuable:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Budget-Friendly Solutions:</strong> Professional websites designed for small and growing businesses</li>
              <li><strong>Local Advantage:</strong> No international pricing or unnecessary agency overheads</li>
              <li><strong>Mobile-Optimized Development:</strong> Smooth performance across smartphones and tablets</li>
              <li><strong>ROI-Focused Design:</strong> Built to generate enquiries and conversions quickly</li>
              <li><strong>Scalable Options:</strong> Start with essentials and upgrade as your business grows</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Cost-Effective Website Development Services
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Essential Business Websites</h3>
            <p>
              Clean, professional websites for startups, cafés, clinics, and consultants with contact forms, galleries, and basic SEO setup.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Budget E-Commerce Solutions</h3>
            <p>
              Simple and secure online stores with product listings, payment gateways, and order management for local retailers.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Dynamic Service Portals</h3>
            <p>
              Booking systems, enquiry forms, and service listings for healthcare providers, educational institutes, and service professionals.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">High-Converting Landing Pages</h3>
            <p>
              Single-page websites for promotions, campaigns, events, and new product launches.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Website Speed Improvement</h3>
            <p>
              Optimization of slow websites to improve loading speed, usability, and user experience.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Maintenance & Support Plans</h3>
            <p>
              Affordable ongoing support to keep your website secure, updated, and running smoothly.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Technology That Delivers Maximum Value
            </h2>
            <p>
              We use modern tools only where they add real benefits—no unnecessary complexity.
            </p>
            <p>
              <strong>Frontend Performance:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Clean, responsive interfaces for smooth user experience</li>
              <li>SEO-friendly structure for better visibility</li>
            </ul>
            <p>
              <strong>Backend Efficiency:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Lightweight and scalable systems</li>
              <li>Pay-as-you-grow infrastructure to control costs</li>
            </ul>
            <p>
              <strong>Included Performance Enhancements:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Image and asset optimization</li>
              <li>Core Web Vitals improvements</li>
              <li>Fast-loading pages across devices</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Real Success Stories from Budget-Friendly Projects
            </h2>
            <p>
              Our focus is always on outcomes, not just features.
            </p>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Local Hospital Website: Appointment bookings increased significantly within a limited budget&quot;
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Brassware Retail Business: Online store generated strong sales in the first quarter&quot;
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Café Chain Website: Online ordering and visibility boosted revenue&quot;
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Coaching Institute Platform: Improved student enrolments and lead conversion&quot;
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                &quot;Real Estate Listings Website: Better local search visibility and property enquiries&quot;
              </blockquote>
            </div>
            <p>
              Affordable solutions can still deliver powerful results.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Commonly Work With
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurants & food businesses</li>
              <li>Clinics & hospitals</li>
              <li>Brassware manufacturers & exporters</li>
              <li>Retail shops & boutiques</li>
              <li>Schools & coaching institutes</li>
              <li>Professional service providers</li>
              <li>Real estate agencies</li>
              <li>Local startups & entrepreneurs</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Smart Digital Investment for Moradabad Businesses
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Most customers search online before contacting a business</li>
              <li>Mobile users dominate local website traffic</li>
              <li>&quot;Near me&quot; searches drive quick decisions</li>
              <li>Well-planned websites recover investment within months</li>
            </ul>
            <p>
              Choosing a cost-effective website is smarter than relying on DIY or outdated platforms.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Simple 6-Step Development Process
            </h2>
            <p>
              <strong>1. Free Strategy Discussion</strong> – Understand your goals and requirements
            </p>
            <p>
              <strong>2. Feature Prioritization</strong> – Focus on what delivers maximum impact
            </p>
            <p>
              <strong>3. Quick Prototyping</strong> – Visual layout approval before development
            </p>
            <p>
              <strong>4. Efficient Development</strong> – Clean, maintainable code
            </p>
            <p>
              <strong>5. Testing & Review</strong> – Performance and usability checks
            </p>
            <p>
              <strong>6. Launch & Training</strong> – Website goes live with guidance
            </p>
            <p>
               <strong>Project Timeline:</strong> 10–30 days depending on scope
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Zentrix Infotech Delivers Better Value
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Local development team with no middlemen</li>
              <li>Modern tools without premium pricing</li>
              <li>90 days of free post-launch support</li>
              <li>Direct communication via call or WhatsApp</li>
              <li>Easy upgrades without rebuilding the website</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Start Your Website Project Today
            </h2>
            <p>
              Get a professional website that fits your budget and supports your business goals.
            </p>
            <p>
              📞 <strong>Call:</strong> 7248800839<br />
              📧 <strong>Email:</strong> info@zentrixinfotech.com
            </p>
            <p>
              🌐 <strong>Get a Free Quote Today</strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Related Services
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>E-Commerce Development</li>
              <li>Business Website Packages</li>
              <li>Website Speed Optimization</li>
              <li>Local SEO Services</li>
              <li>Maintenance Plans</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Budget-Friendly Web Development
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Is affordable web development reliable?</h3>
                <p>Yes. Professional tools, secure hosting, and structured development ensure long-term reliability.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How fast can my website be launched?</h3>
                <p>Business websites usually take 10–15 days. E-commerce projects may take 3–4 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Will a low-cost website rank on Google?</h3>
                <p>Yes. SEO-friendly structure and local optimization are included.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What support is available after launch?</h3>
                <p>90 days of free support with optional affordable maintenance plans.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can I upgrade features later?</h3>
                <p>Yes. Modular development allows easy expansion.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Is the website mobile-friendly?</h3>
                <p>Yes. All websites are built using a mobile-first approach.</p>
              </div>
            </div>

            
          </div>

          <PostNavigation slug="affordable-web-development-moradabad" />
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