'use client';

import React from 'react';
import { Code, Palette, Smartphone, Cpu, TrendingUp, Cloud, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      link: "/services/web-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions with attention to detail.",
      link: "/services/ui-ux-designing"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      link: "/services/mobile-development"
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Comprehensive software solutions to improve efficiency and drive innovation in your business operations.",
      link: "/services/software-development"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence and drive measurable business growth.",
      link: "/services/digital-marketing"
    },
    {
      icon: Cloud,
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure and services to enhance performance, security, and business continuity.",
      link: "/services/cloud-solutions"
    }
  ];

  return (
    <div className="bg-white -mt-4 sm:-mt-8 pt-4 sm:pt-10 px-4 sm:px-8 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-left md:text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">Services We Offer</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed text-left sm:text-center">Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="block group h-full"
              >
                <div className="relative h-full flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-400/90 shadow-[0_4px_20px_-4px_rgba(23,92,211,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(23,92,211,0.16)] transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden">
                  {/* Subtle ambient gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-sky-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl" />

                  {/* Top subtle blue accent indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content wrapper */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Icon Container */}
                    <div className="mb-5 sm:mb-6">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100/70 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-xs group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-sky-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal flex-grow">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer with arrow & explore link */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-600 group-hover:text-blue-700 transition-colors uppercase">
                      Explore Service
                    </span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;