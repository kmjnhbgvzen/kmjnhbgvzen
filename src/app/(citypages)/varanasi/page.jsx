import React from "react";
import Link from "next/link";
import LandingServices from "@/components/LandingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { mbddata } from "@/data/mbddata";

export const metadata = {
  title: "Varanasi | Online & IT Services for Businesses",
  description:
    "Online and IT services in Varanasi for businesses looking to build a strong digital presence and improve efficiency.",
  keywords: [
    "Varanasi online services",
    "IT services Varanasi",
    "business support Varanasi",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi",
  },
  openGraph: {
    title: "Varanasi | Online & IT Services for Businesses",
    description:
      "Online and IT services in Varanasi for businesses looking to build a strong digital presence and improve efficiency.",
    url: "https://www.zentrixinfotech.com/varanasi",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi | Online & IT Services for Businesses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanasi | Online & IT Services for Businesses",
    description:
      "Online and IT services in Varanasi for businesses looking to build a strong digital presence and improve efficiency.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
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
            <span className="text-blue-600 font-semibold text-lg">Varanasi</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Varanasi – Digital & IT Solutions for Growing Businesses
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Varanasi is one of Uttar Pradesh's growing business hubs, home to a thriving ecosystem of startups, SMEs, and established enterprises across trading, hospitality, education, retail, healthcare, and technology sectors. With businesses rapidly shifting to digital-first operations, having the right digital and technology support is essential for staying competitive. We work with businesses across Varanasi, helping them strengthen their online presence, improve brand visibility, and adopt modern digital solutions that align with today's market needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Supporting Businesses Across Varanasi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Varanasi's fast-paced and diverse business landscape demands flexible, results-driven solutions. We collaborate with businesses from different sectors — from retail and hospitality to education, technology, and professional services — understanding their unique challenges and offering practical digital support. Our approach is built on strategic planning tailored to local and national business needs, scalable digital and IT solutions, long-term growth and performance improvement, and clear communication with transparent execution.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            What We Offer in Varanasi
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our services are designed to support businesses at every stage of growth. We focus on digital growth and online presence, helping businesses establish and expand their digital footprint across relevant online platforms and markets. Our website and technical solutions include developing and maintaining fast, secure, and user-friendly websites that reflect your brand identity and serve your customers around the clock.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Branding & Creative Support
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Creating a consistent and compelling brand identity is crucial in a market as competitive as Varanasi. We help businesses develop cohesive branding strategies that resonate with both local and wider audiences. From logo design to complete brand guidelines, we ensure your business stands out and communicates its value effectively in Varanasi's diverse marketplace.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Performance Tracking & Optimization
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Analyzing data and refining strategies to achieve better results over time is critical for sustainable business success in Varanasi. We provide comprehensive analytics and performance monitoring to help you understand what's working and where improvements can be made. Our optimization services ensure your digital investments continue to deliver measurable value and a strong return.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Serving All Areas of Varanasi
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We support businesses located across Sigra, Lanka, Cantt, Godowlia, Assi, Bhelupur, Maduadih, and other key business districts. No matter where your business is based in Varanasi, our team is ready to assist you. We understand the unique characteristics and demands of each area and tailor our approach accordingly.
          </p>
        </div>
      </div>

      <div className="py-0">
        <LandingServices />
      </div>

      <div className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-8 mb-10">
          <WhyChooseUs />
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Why Businesses in Varanasi Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience with multiple industries
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We've worked across diverse sectors in Varanasi
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Customized solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Not generic templates, tailored to your needs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality & Reliability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Focus on performance that delivers results
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Dedicated support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ongoing guidance throughout your journey
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Growth-oriented approach
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Strategies focused on long-term success
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Long-term partnership
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We aim to be your digital partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-0 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Explore Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover detailed information about the services we offer in other cities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbddata.map((city, index) => (
              <Link key={index} href={`/cities/${city.slug}`} className="group">
                <div className="flex items-start gap-3">
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