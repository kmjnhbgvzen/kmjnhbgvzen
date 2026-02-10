import React from "react";
import Link from "next/link";
import {
  Code,
  Palette,
  Users,
  TrendingUp,
  Smartphone,
  Layers,
  Figma,
  Cloud,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    { icon: Code, title: "Web Development", link: "/services/web-development" },
    { icon: Palette, title: "Design & Branding", link: "/services/ui-ux-designing" },
    { icon: Users, title: "Social Media Optimization", link: "/services/digital-marketing/social-media-optimization" },
    { icon: TrendingUp, title: "Digital Marketing", link: "/services/digital-marketing" },
    { icon: Smartphone, title: "Mobile Development", link: "/services/mobile-development" },
    { icon: Layers, title: "Software Development", link: "/services/software-development" },
    { icon: Figma, title: "UI & UX Designing", link: "/services/ui-ux-designing" },
    { icon: Cloud, title: "Cloud Solutions", link: "/services/cloud-solutions" },
  ];

  return (
    <section className="bg-white text-black py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-3xl font-serif text-center mb-0 md:mb-5 tracking-wide">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20">

          {/* Vertical Divider */}
          <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="className={`
  group flex items-center gap-4 py-4
  border-b border-gray-200
  md:border-b-0
  last:border-none
`}
"
              >
                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={18} />
                </div>

                {/* Title */}
                <span className="text-base font-medium tracking-wide transition-colors group-hover:text-emerald-600">
                  {service.title}
                </span>
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
