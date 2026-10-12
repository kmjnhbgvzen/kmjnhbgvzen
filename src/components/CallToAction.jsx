import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:px-14 lg:py-12 overflow-hidden shadow-2xl shadow-blue-600/20 border border-white/20 bg-gradient-to-r from-[#175cd3] via-[#0284c7] to-[#0ea5e9]">
          
          {/* Ambient Lighting & Glow Effects (Blue & White only) */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl pointer-events-none" />

          {/* Subtle Glowing Stars / Dots (matching screenshot) */}
          <div className="absolute top-6 left-12 w-2 h-2 rounded-full bg-white/50 blur-[0.5px] shadow-[0_0_8px_rgba(255,255,255,0.9)] pointer-events-none" />
          <div className="absolute bottom-6 left-1/3 w-2.5 h-2.5 rounded-full bg-white/40 blur-[0.5px] shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
          <div className="absolute top-8 right-1/3 w-1.5 h-1.5 rounded-full bg-white/35 blur-[0.5px] shadow-[0_0_6px_rgba(255,255,255,0.7)] pointer-events-none" />

          {/* Content Layout */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-sky-100 uppercase">
                  WE CARRY MORE THAN JUST GOOD CODING SKILLS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                Let&apos;s Build Your Website
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-sky-100/90 font-light leading-relaxed max-w-xl">
                Partner with us to transform your vision into a modern, high-converting digital presence built for sustainable growth.
              </p>
            </div>

            {/* Right Button (matching screenshot) */}
            <div className="flex-shrink-0 self-start md:self-center">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-slate-900 hover:text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
