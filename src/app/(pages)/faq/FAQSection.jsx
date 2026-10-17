"use client";

import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-slate-50 pt-8 pb-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight tracking-tight text-center mt-0 sm:mt-8 md:mt-12">
          Frequently Asked Questions
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-12">
          Clear answers to help you understand our services, process, and expertise.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-5 py-4 font-semibold text-left"
                aria-expanded={open === index}
              >
                {item.q}
                <span>{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="px-5 pb-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
