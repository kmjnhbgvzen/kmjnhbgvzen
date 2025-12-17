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
              Looking for professional web designing in Moradabad that helps your business attract customers and build trust online? Zentrix Infotech designs modern, user-friendly websites that represent your brand professionally and convert visitors into real enquiries. We focus on clean design, smooth user experience, and layouts that work perfectly for local businesses.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Our Web Designing Services in Moradabad
            </h2>
            <p>
              Local businesses need websites that connect with Moradabad customers, not generic designs. We create websites that match local preferences while maintaining a professional look.
            </p>
            <p className="font-semibold text-gray-900 mt-4">Key Benefits:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Custom Website Design</strong> - Every design is unique and aligned with your brand</li>
              <li><strong>Mobile-Friendly Layouts</strong> - Perfect viewing on mobiles, tablets, and desktops</li>
              <li><strong>Local Business Focus</strong> - Designed for Moradabad markets like brassware, clinics, retail & services</li>
              <li><strong>Easy Navigation</strong> - Visitors find information quickly and take action</li>
              <li><strong>Fast Turnaround</strong> - Professional designs delivered within committed timelines</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Web Designing Services in Moradabad
            </h2>

            <h3 className="font-semibold text-gray-900 mb-2">Business Website Designing</h3>
            <p>
              Professional websites for startups, service providers, consultants, and local businesses that build trust and generate enquiries.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">E-Commerce Website Designing</h3>
            <p>
              Attractive online store designs for retailers and wholesalers with easy product browsing and smooth checkout experience.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Portfolio Website Designing</h3>
            <p>
              Creative websites for photographers, designers, architects, and agencies to showcase their work effectively.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Corporate Website Designing</h3>
            <p>
              Clean and professional designs for hospitals, schools, IT firms, and corporate organizations.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Landing Page Designing</h3>
            <p>
              High-conversion landing pages for promotions, ads, events, and lead generation campaigns.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Website Redesign Services</h3>
            <p>
              Modern redesign of old websites to improve appearance, user experience, and customer engagement.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Design That Delivers Real Business Results
            </h2>
            <p>
              Our web designs are created to support business growth, not just look good.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Healthcare Websites:</strong> Improved patient trust and appointment enquiries</li>
              <li><strong>Retail & Brassware Businesses:</strong> Better product visibility and customer engagement</li>
              <li><strong>Restaurants & Cafés:</strong> Increased online orders and table reservations</li>
              <li><strong>Education & Coaching Institutes:</strong> Higher enquiry and student conversion rates</li>
              <li><strong>Real Estate Websites:</strong> Better property showcase and lead generation</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Design Websites For
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Restaurants & food businesses</li>
              <li>Hospitals & clinics</li>
              <li>Brassware manufacturers & exporters</li>
              <li>Retail & apparel stores</li>
              <li>Schools & coaching institutes</li>
              <li>Real estate agencies</li>
              <li>Consultants & service providers</li>
              <li>Creative professionals</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Latest Web Design Trends We Use (Business-Friendly)
            </h2>
            <p>
              We apply trends only when they help customers, not confuse them.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Clean & modern layouts</li>
              <li>Easy-to-read Hindi & English content</li>
              <li>Quick contact buttons (Call & WhatsApp)</li>
              <li>Smooth animations for better engagement</li>
              <li>Image-focused product & service sections</li>
              <li>Voice-search friendly structure</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Simple Web Designing Process
            </h2>
            <p>
              <strong>Requirement Discussion</strong> – Understand your business & goals
            </p>
            <p>
              <strong>Design Planning</strong> – Layout structure & visual direction
            </p>
            <p>
              <strong>Design Creation</strong> – Professional mockups with revisions
            </p>
            <p>
              <strong>Final Approval</strong> – Client feedback & refinements
            </p>
            <p>
              <strong>Delivery</strong> – Ready-to-use design assets
            </p>
            <p>
              <strong>Support</strong> – Assistance during development & launch
            </p>
            <p className="mt-4">
              <strong>⏱️ Timeline:</strong> 7–21 days depending on project scope
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Zentrix Infotech for Web Designing in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Strong experience with local businesses</li>
              <li>Focus on design + customer conversion</li>
              <li>Clear communication & transparent process</li>
              <li>SEO-friendly design structure</li>
              <li>Fast support & long-term partnership approach</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get Professional Web Designing in Moradabad
            </h2>
            <p>
              Take your business online with confidence and style.
            </p>
            <p className="mt-4">
              <strong>📞 Call:</strong> +91-7248800839<br />
              <strong>📧 Email:</strong> info@zentrixinfotech.com
            </p>
            <p className="mt-4">
              <strong>🌐 Book a Free Design Consultation</strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Related Services
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>E-Commerce Website Design</li>
              <li>UI/UX Design Services</li>
              <li>Logo & Branding</li>
              <li>Website Development</li>
              <li>Portfolio Showcase</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Web Designing FAQs – Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How long does a website design take?</h3>
                <p>Most business websites are completed within 7–14 days.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Will my website work on mobile phones?</h3>
                <p>Yes, all designs are fully mobile-responsive.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can you redesign my existing website?</h3>
                <p>Yes, we modernize old websites without losing brand identity.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you design Hindi or bilingual websites?</h3>
                <p>Yes, Hindi and English bilingual websites are supported.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Will my website help generate leads?</h3>
                <p>Yes, designs are structured to encourage calls, messages, and enquiries.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Professional Web Designing in Moradabad | Custom Website Design | Mobile-Responsive | SEO-Friendly
              </p>
              <p className="mt-2 text-gray-700">
                Helping Moradabad businesses establish a strong online presence with modern, conversion-focused website designs that attract customers and drive growth.
              </p>
            </div>
          </div>

          <PostNavigation slug="web-designing-moradabad" />
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