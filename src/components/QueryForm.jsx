
"use client";

import { useState } from "react";

export default function QueryForm() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Send Us Your Query
            </h2>

            <p className="mt-3 text-gray-600">
              Fill out the form below and our team will contact you soon.
            </p>
          </div>

          <form
            action="https://formsubmit.co/kajalkumai9898@gmail.com"
            method="POST"
            onSubmit={() => setLoading(true)}
            className="space-y-5"
          >
            {/* FormSubmit Settings */}
            <input
              type="hidden"
              name="_subject"
              value="New Query from Website"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            {/* Query */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Query
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your query here..."
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Query"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

