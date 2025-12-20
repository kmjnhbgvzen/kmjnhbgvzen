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
            
            <h2 className="text-3xl font-semibold text-gray-800">
              Build a Website That Works for Your Business
            </h2>
            <p>
              At Zentrix Infotech, we provide custom website development in Moradabad for businesses that want real results—not generic template websites. Your website should attract the right audience, represent your brand professionally, and support growth. That&apos;s exactly what we build.
            </p>
            <p>
              Whether you&apos;re a local business, startup, service provider, or growing brand in Moradabad, our custom-built websites are designed to convert visitors into enquiries, leads, and customers.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses in Moradabad Choose Zentrix Infotech
            </h2>
            <p>
              Your website is your digital foundation. We ensure it&apos;s strong, scalable, and future-ready.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">What Sets Zentrix Infotech Apart</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>✔ Fully custom-built websites (no copy-paste templates)</li>
              <li>✔ SEO-friendly structure from the start</li>
              <li>✔ Mobile-first & performance-optimized</li>
              <li>✔ Business-focused layouts that drive enquiries</li>
              <li>✔ Clear communication & dedicated support</li>
              <li>✔ Local understanding with professional execution</li>
            </ul>
            <p className="mt-4">
              We don&apos;t just develop websites — we create digital assets that support your business goals.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Custom Website Development Services
            </h2>
            <p>
              Designed for businesses that want clarity, credibility, and conversions.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">🔹 Business & Corporate Websites</h3>
            <p>
              Professional websites that build trust, showcase services, and establish authority in your industry.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">🔹 Service-Based Websites</h3>
            <p>
              Perfect for consultants, agencies, institutes, and local service providers focused on lead generation.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">🔹 E-Commerce Website Development</h3>
            <p>
              Custom online stores with smooth navigation, user-friendly product flows, and scalable architecture.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">🔹 Website Redesign & Revamp</h3>
            <p>
              Upgrade outdated websites with modern design, better performance, and improved search visibility.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">🔹 Custom Features & Integrations</h3>
            <p>
              Forms, dashboards, CRM integrations, payment gateways, automation, and more—built as per your workflow.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How We Build High-Performing Websites
            </h2>
            <h3 className="font-semibold text-gray-900 mb-2">Our Proven Development Approach</h3>
            <p>
              <strong>Business Understanding</strong> – We learn your goals, audience, and competition
            </p>
            <p>
              <strong>Planning & Structure</strong> – SEO-friendly layout and content flow
            </p>
            <p>
              <strong>Custom Design (UI/UX)</strong> – Clean, professional, user-focused design
            </p>
            <p>
              <strong>Development</strong> – Secure, fast, and scalable code
            </p>
            <p>
              <strong>Testing & Optimization</strong> – Speed, responsiveness, and functionality checks
            </p>
            <p>
              <strong>Launch & Support</strong> – Smooth deployment with ongoing assistance
            </p>
            <p className="mt-4">
              Every step is transparent, structured, and result-driven.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Choosing Custom Website Development
            </h2>
            <p>
              When you choose custom website development in Moradabad with Zentrix Infotech, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>1. A website aligned with your business objectives</li>
              <li>2. Better Google visibility with clean SEO structure</li>
              <li>3. Faster loading speed and smooth user experience</li>
              <li>4. Mobile-friendly design for all devices</li>
              <li>5. Easy scalability for future growth</li>
              <li>6. Strong brand identity and credibility</li>
            </ul>
            <p className="mt-4">
              Your website becomes a growth tool, not just an online presence.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Local Advantage: Moradabad-Focused Web Solutions
            </h2>
            <p>
              We understand how local businesses operate, compete, and grow. That&apos;s why our websites are built with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Local audience behavior in mind</li>
              <li>City-specific SEO optimization</li>
              <li>Clear service messaging for faster conversions</li>
              <li>Long-term support you can rely on</li>
            </ul>
            <p className="mt-4">
              Local knowledge + modern technology = better results.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who We Work With
            </h2>
            <p>
              Our custom website development services are ideal for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Local businesses & MSMEs</li>
              <li>Startups & entrepreneurs</li>
              <li>Manufacturers & exporters</li>
              <li>Educational institutes</li>
              <li>Consultants & service providers</li>
            </ul>
            <p className="mt-4">
              No matter the industry, we tailor the website to your exact needs.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Mistakes We Help You Avoid
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>1. Generic templates that don&apos;t convert</li>
              <li>2. Poor mobile experience</li>
              <li>3. Weak SEO structure</li>
              <li>4. Slow-loading pages</li>
              <li>5. Confusing navigation</li>
            </ul>
            <p className="mt-4">
              We build websites the right way, from day one.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Related Services
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Website Design Services</li>
              <li>SEO & Digital Marketing</li>
              <li>E-Commerce Development</li>
              <li>Website Maintenance & Support</li>
              <li>UI/UX Design Services</li>
            </ul>
            <p className="mt-4">
              These services help maximize the performance of your website.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Custom Website Development in Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why should I choose Zentrix Infotech for website development?</h3>
                <p>A: We focus on business goals, SEO structure, and long-term scalability—not just design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Will my website be mobile-friendly?</h3>
                <p>A: Yes. Every website we build is mobile-first and fully responsive.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can my website grow as my business grows?</h3>
                <p>A: Absolutely. Our custom websites are designed to scale easily with new features and pages.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide support after the website is live?</h3>
                <p>A: Yes. We offer ongoing support, updates, and performance assistance.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Is custom website development suitable for small businesses?</h3>
                <p>A: Yes. Custom websites help small businesses compete professionally and generate better leads.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Build a Website That Delivers Results?
            </h2>
            <p>
              🚀 Partner with Zentrix Infotech for custom website development in Moradabad
            </p>
            <p className="mt-2">
              Let&apos;s build a website that reflects your brand, attracts the right audience, and supports long-term business growth.
            </p>
            <p className="mt-4">
              <strong>👉 Contact us today to discuss your project.</strong>
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Custom Website Development in Moradabad | SEO-Friendly | Mobile-Optimized | Scalable Solutions
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech creates custom websites that drive business growth, convert visitors into customers, and establish strong digital foundations for Moradabad businesses.
              </p>
            </div>
          </div>

          <PostNavigation slug="custom-website-development-moradabad" />
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