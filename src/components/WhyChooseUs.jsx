"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Proven Expertise",
    desc: "We bring hands-on experience in digital marketing, software, websites, apps, UI/UX, and cloud systems.",
  },
  {
    title: "Affordable Pricing",
    desc: "High-quality digital and IT services at transparent and budget-friendly rates.",
  },
  {
    title: "Result-Focused Work",
    desc: "Every strategy is designed to produce real results more leads, growth, performance, and visibility.",
  },
  {
    title: "Clear Communication",
    desc: "We keep you updated, respond quickly, and ensure smooth collaboration throughout the project.",
  },
  {
    title: "Custom Solutions",
    desc: "Every business is unique our services are tailored to your goals, industry, and target audience.",
  },
  {
    title: "Trusted by Businesses",
    desc: "Startups, brands, and enterprises rely on Zentrix Infotech for consistency, quality, and reliability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-8 bg-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
          Why Choose Zentrix Infotech?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We combine expertise, trust, and performance to deliver digital and IT
          solutions that truly support your business growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {points.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle className="text-green-600" size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
