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
              In today&apos;s competitive digital world, having a strong online presence is no longer optional for businesses. Zentrix Infotech is a reliable digital marketing agency in Moradabad that helps businesses grow online, attract local customers, and generate consistent leads through result-oriented digital strategies.
            </p>
            <p>
              We work closely with startups, local businesses, service providers, and growing brands in Moradabad to create digital marketing solutions that are practical, affordable, and aligned with real business goals. Our focus is not just on visibility, but on meaningful growth that delivers long-term value.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Digital Marketing Is Important for Businesses in Moradabad
            </h2>
            <p>
              Moradabad is a fast-growing business hub with manufacturers, traders, exporters, retailers, and service providers competing for customer attention. Most customers now search online before making a buying decision. Without digital marketing, businesses risk losing visibility to competitors who are already active online.
            </p>
            <p className="font-semibold text-gray-900 mt-4">Digital marketing helps businesses in Moradabad:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reach customers searching on Google</li>
              <li>Build trust through online presence</li>
              <li>Generate qualified leads</li>
              <li>Promote services locally and beyond</li>
              <li>Grow brand recognition cost-effectively</li>
            </ul>
            <p className="mt-4">
              As a professional digital marketing company in Moradabad, Zentrix Infotech helps businesses leverage digital platforms to stay competitive and visible.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Digital Marketing Services in Moradabad
            </h2>
            <p>
              We offer complete digital marketing services designed to meet the needs of local businesses while maintaining high professional standards.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Search Engine Optimization (SEO)</h3>
            <p>
              Our SEO services help your business rank higher on Google when customers search for products or services related to your industry. We focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Keyword research with local intent</li>
              <li>On-page and technical SEO optimization</li>
              <li>Content optimization for long-term ranking</li>
              <li>Local SEO for Moradabad searches</li>
            </ul>
            <p className="mt-2">
              SEO is a powerful tool for attracting organic traffic and building credibility over time.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Local SEO Services for Moradabad</h3>
            <p>
              Local SEO is essential for businesses targeting nearby customers. We optimize your online presence so your business appears in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Local Google search results</li>
              <li>Google Maps listings</li>
              <li>&quot;Near me&quot; searches</li>
            </ul>
            <p className="mt-2">
              Our local SEO strategies help customers in Moradabad easily find and contact your business.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Social Media Marketing</h3>
            <p>
              Social media platforms are powerful tools for connecting with your audience. Our social media marketing services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Strategy planning</li>
              <li>Content creation</li>
              <li>Audience engagement</li>
              <li>Brand awareness campaigns</li>
            </ul>
            <p className="mt-2">
              We help businesses build a strong presence on platforms like Facebook, Instagram, and LinkedIn, tailored to their target audience.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Google Ads & Paid Marketing</h3>
            <p>
              For businesses looking for faster results, we offer Google Ads and paid marketing services. Our paid campaigns focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Targeted audience reach</li>
              <li>Cost-effective budget management</li>
              <li>Conversion-focused ads</li>
              <li>Performance tracking and optimization</li>
            </ul>
            <p className="mt-2">
              Paid advertising helps generate immediate leads while supporting long-term growth.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Content Marketing</h3>
            <p>
              Content plays a key role in digital success. We create informative and engaging content that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Builds trust with customers</li>
              <li>Supports SEO efforts</li>
              <li>Strengthens brand authority</li>
              <li>Educates your audience</li>
            </ul>
            <p className="mt-2">
              Our content strategies are aligned with your business goals and target audience.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Zentrix Infotech as Your Digital Marketing Partner
            </h2>
            <p>
              Choosing the right digital marketing agency is crucial for success. Zentrix Infotech stands out as a trusted partner for businesses in Moradabad due to our practical approach and commitment to results.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Local Market Understanding</h3>
            <p>
              We understand the business environment and customer behavior in Moradabad, allowing us to design strategies that work locally.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Result-Focused Strategies</h3>
            <p>
              Our goal is not just traffic but meaningful outcomes like leads, inquiries, and conversions.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Affordable Digital Marketing Solutions</h3>
            <p>
              We offer cost-effective solutions suitable for startups, small businesses, and growing enterprises.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Transparent Communication</h3>
            <p>
              Clear communication and regular updates ensure you always know how your campaigns are performing.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Customized Marketing Plans</h3>
            <p>
              Every business is unique. We create tailored strategies based on your industry, audience, and objectives.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Can Benefit from Our Digital Marketing Services
            </h2>
            <p>
              Our digital marketing services are suitable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Small and medium businesses</li>
              <li>Startups and entrepreneurs</li>
              <li>Service providers</li>
              <li>Retail stores and local brands</li>
              <li>Exporters and manufacturers</li>
            </ul>
            <p className="mt-4">
              No matter your business size, we design scalable solutions that support growth.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Approach to Digital Marketing
            </h2>
            <p>
              At Zentrix Infotech, we follow a structured and professional approach:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Understanding your business goals</li>
              <li>Analyzing competitors and market trends</li>
              <li>Creating a customized digital strategy</li>
              <li>Executing campaigns with precision</li>
              <li>Monitoring performance and optimizing continuously</li>
            </ul>
            <p className="mt-4">
              This approach ensures consistent improvement and measurable results.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Build a Strong Online Presence in Moradabad
            </h2>
            <p>
              Digital marketing is an investment in your business&apos;s future. With the right strategy, businesses in Moradabad can expand their reach, attract quality customers, and build long-term brand value.
            </p>
            <p className="mt-4">
              Zentrix Infotech is committed to helping businesses succeed through reliable and ethical digital marketing practices. We focus on sustainable growth rather than short-term gains.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Partner with a Trusted Digital Marketing Agency in Moradabad
            </h2>
            <p>
              If you are searching for a professional digital marketing agency in Moradabad, Zentrix Infotech is here to support your growth journey. Our team combines expertise, creativity, and technology to deliver marketing solutions that make a real impact.
            </p>
            <p className="mt-4">
              Let us help your business grow online with confidence, clarity, and consistency.
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-lg">
                Digital Marketing Agency in Moradabad | SEO | Social Media | Google Ads | Content Marketing
              </p>
              <p className="mt-2 text-gray-700">
                Zentrix Infotech helps businesses in Moradabad grow online through result-oriented digital marketing strategies that drive leads, build brand presence, and deliver long-term value.
              </p>
            </div>
          </div>

          <PostNavigation slug="digital-marketing-agency-moradabad" />
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