import React from "react";
import Link from "next/link";
import LandingServices from "@/components/LandingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { mbddata } from "@/data/mbddata";

export const metadata = {
  title: "Noida | Business Digital & Technology Support",
  description:
    "Digital and technology support for businesses in Noida to improve online presence, performance, and long-term growth.",
  keywords: [
    "Noida business services",
    "digital support Noida",
    "IT services Noida"
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/noida",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Noida | Business Digital & Technology Support",

    description:
      "Digital and technology support for businesses in Noida to improve online presence, performance, and long-term growth.",

    url: "https://www.zentrixinfotech.com/cities/noida",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Noida | Business Digital & Technology Support",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Noida | Business Digital & Technology Support",

    description:
      "Digital and technology support for businesses in Noida to improve online presence, performance, and long-term growth.",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4 mt-30">
            <svg 
              className="w-8 h-8 text-blue-600 mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-blue-600 font-semibold text-lg">Noida</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Noida – Smart Digital & Technology Support for Modern Businesses
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Noida is known for its planned infrastructure, IT parks, corporate offices, and rapidly expanding business zones. As competition increases across sectors, businesses in Noida are focusing on digital adoption and technology-driven processes to stay efficient and visible. We assist businesses in Noida by providing structured digital and IT support that helps them adapt to changing market demands and build a stronger online foundation.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Helping Noida Businesses Move Forward Digitally
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every business in Noida has different goals—some want better visibility, others need stable technology systems or stronger brand communication. Our role is to understand these needs and offer solutions that are practical, scalable, and future-ready. We focus on business-first planning rather than generic execution, ensuring technology is aligned with real business objectives through continuous improvement and optimization with clear timelines and transparent delivery.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Our Focus Areas in Noida
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rather than offering one-size-fits-all services, we focus on areas that matter most to growing businesses. Our approach is centered on understanding your unique challenges and delivering solutions that drive measurable results. We work closely with IT-driven companies, service providers, and modern enterprises across Noida's thriving business ecosystem.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Digital Strategy & Online Presence
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Guiding businesses to establish a structured and professional presence across digital platforms is our priority. We help you build a cohesive online strategy that connects with your target audience in Noida and beyond. From search engine optimization to social media positioning, we ensure your brand is discoverable and engaging across all relevant channels.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Website & System Development
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Creating reliable websites and digital systems that support daily business operations is essential in today's fast-paced environment. Our development team builds platforms that are not only visually appealing but also functionally robust, secure, and scalable. Whether you need a corporate website, e-commerce platform, or custom business application, we deliver solutions that work seamlessly.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Brand Identity & Communication
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Helping brands present themselves clearly and consistently to their audience is crucial for long-term success. We develop comprehensive brand identities that reflect your values and resonate with your market. From logo design to complete brand guidelines and marketing collateral, we ensure your business communicates professionally across all touchpoints.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Data Monitoring & Process Improvement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Using insights and analytics to refine strategies and improve performance helps businesses stay competitive. We implement tracking systems that provide clear visibility into your digital performance, allowing for data-driven decision making. Our continuous optimization approach ensures your strategies evolve with market changes and deliver consistent improvements.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-0">
        <LandingServices />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-8 mb-10">
          <WhyChooseUs />
        </div>
      </div>

      {/* Additional Why Choose Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Why Noida Businesses Prefer Working With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">IT-Driven Expertise</h3>
                  <p className="text-gray-600 text-sm">Experience with IT-driven and service-based businesses</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Structured Workflows</h3>
                  <p className="text-gray-600 text-sm">Clear communication and organized processes</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600 text-sm">Flexible solutions designed for growth</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Long-term Partnership</h3>
                  <p className="text-gray-600 text-sm">Ongoing support, not just short-term delivery</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality-Focused</h3>
                  <p className="text-gray-600 text-sm">Excellence in execution and delivery</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Team Extension</h3>
                  <p className="text-gray-600 text-sm">We work as part of your team</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-700 text-lg font-medium">
            We work as an extension of your team, not just a service provider.
          </p>
        </div>
      </div>

      

      {/* Related Pages Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Explore Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover detailed information about each service we offer in Other cities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbddata.map((city, index) => (
              <Link
                key={index}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="flex items-start gap-3">
                  {/* 📍 Location Icon */}
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21c4.418-4.418 7-7.582 7-11a7 7 0 10-14 0c0 3.418 2.582 6.582 7 11z"
                    />
                  </svg>

                  <div>
                    <h3 className="text-lg font-serif font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {city.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}