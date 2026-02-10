import React from 'react';
import Link from 'next/link';
import { Code, Palette, Users, TrendingUp, Smartphone, Layers, Figma, Cloud } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Build fast, responsive, and scalable websites tailored to your business needs and goals.",
      link: "/services/web-development"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Design & Branding",
      description: "Build a memorable brand identity with compelling designs that resonate with your target audience.",
      link: "/services/ui-ux-designing"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Social Media Optimization",
      description: "Engage and grow your community with strategic social media management and compelling content.",
      link: "/services/digital-marketing/social-media-optimization"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Boost your online presence with comprehensive digital strategies that deliver real results.",
      link: "/services/digital-marketing"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description: "Create powerful mobile applications for iOS and Android that engage users on the go.",
      link: "/services/mobile-development"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Software Development",
      description: "Custom software solutions built to streamline your operations and scale with your business.",
      link: "/services/software-development"
    },
    {
      icon: <Figma className="w-10 h-10" />,
      title: "UI & UX Designing",
      description: "Design intuitive and beautiful user experiences that keep your customers coming back.",
      link: "/services/ui-ux-designing"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions",
      description: "Leverage cloud technology for secure, scalable, and cost-effective infrastructure solutions.",
      link: "/services/cloud-solutions"
    }
  ];

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-medium font-serif text-center mb-16 tracking-wide">
          OUR SERVICES
        </h2>

        {/* Vertical 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="flex items-start gap-5 group transition-all duration-300 hover:translate-x-2"
            >
              {/* Icon */}
              <div className="text-emerald-500 group-hover:text-emerald-400 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
