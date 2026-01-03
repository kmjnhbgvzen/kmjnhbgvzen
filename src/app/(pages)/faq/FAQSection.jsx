"use client";

import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6 mt-14 md:mt-24">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
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
                <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">
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
