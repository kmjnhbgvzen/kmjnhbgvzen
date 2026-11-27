import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best SEO services in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best services include an audit, local SEO, technical fixes, helpful content, honest reporting and a plan built around your goals.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if an SEO service is good?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check for a business-specific audit, clear deliverables, real examples, plain reports and no guaranteed rankings.",
      },
    },
    {
      "@type": "Question",
      name: "How long do SEO services take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months. Stronger results usually build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest provider can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Is local SEO important in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many customers search for nearby businesses, so local visibility often brings the fastest, most relevant enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer SEO for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We plan around your size, goals and budget, starting with the highest-impact work.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new website for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. We audit first and recommend changes only where they are truly needed.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get regular reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You receive clear updates on enquiries, visibility and work completed.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech have a Lucknow office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings, WhatsApp and online reports.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will review your website and suggest a plan.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  description:
    "Local SEO, technical SEO, on-page SEO, keyword research, content, authority building, conversion improvement and reporting for businesses in Lucknow and Uttar Pradesh.",
  provider: {
    "@type": "Organization",
    name: "Zentrix Infotech",
    url: "https://www.zentrixinfotech.com",
    telephone: "+91 72488 00839",
    email: "info@zentrixinfotech.com",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  url: "https://www.zentrixinfotech.com/lucknow/best-seo-services-in-lucknow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.zentrixinfotech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.zentrixinfotech.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Digital Marketing",
      item: "https://www.zentrixinfotech.com/services/digital-marketing",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Best SEO Services in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-seo-services-in-lucknow",
    },
  ],
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Best SEO Services in Lucknow: What Great SEO Really Looks Like
            </h2>

            <p>
              Search for &quot;best SEO services in Lucknow&quot; and you will
              see dozens of companies all making similar claims. Every one says
              it is the best. For a business owner, the real question is
              different: what should good SEO services actually include, and
              how can you tell the difference between solid work and empty
              promises?
            </p>

            <p>
              At Zentrix Infotech, we believe the best SEO service is the one
              that fits your business, follows a clear process and produces
              real enquiries. We do not ask you to take our word for it. This
              page explains the standards worth looking for, so you can judge
              any provider, including us.
            </p>

            <p>
              Ready to talk? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free consultation.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free SEO Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What &quot;Best&quot; Should Mean for Your Business
            </h3>

            <p>
              There is no single &quot;best&quot; SEO service for everyone. A
              clinic, a clothing store, a coaching institute and a builder all
              have different customers and different search habits. The best
              service for you is one that:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Understands your customers and how they search</li>
              <li>Fixes the real problems on your website and profile</li>
              <li>Plans work in a sensible order</li>
              <li>Reports progress honestly</li>
              <li>Aims at calls, visits and enquiries, not just rankings</li>
            </ul>

            <p>
              With that in mind, here are ten standards you can use to measure
              any SEO service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ten Standards of Good SEO Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              1. It Starts With an Audit
            </h4>
            <p>
              Good SEO begins with understanding where you are today. That
              means reviewing your website, Google Business Profile, content,
              competitors and current visibility. Without an audit, any plan is
              a guess.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              2. It Is Built Around Your Goals
            </h4>
            <p>
              Whether you want phone calls, store visits, appointments or
              online orders, your SEO plan should be shaped around that
              outcome. Generic packages rarely deliver specific results.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              3. It Includes Strong Local SEO
            </h4>
            <p>
              For most Lucknow businesses, local visibility matters most. That
              includes an optimized Google Business Profile, consistent
              business details across listings, local service pages and a
              steady approach to genuine customer reviews.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              4. It Fixes Technical Problems
            </h4>
            <p>
              Slow pages, poor mobile layouts, broken links and crawling issues
              quietly hold websites back. A quality service identifies and
              fixes these, not just recommends them.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              5. It Uses Customer-Focused Keywords
            </h4>
            <p>
              The right keywords reflect what real customers type, including
              Hindi and Hinglish searches. Quality services group them by
              intent and match each one to the right page.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              6. It Produces Helpful Content
            </h4>
            <p>
              Content should answer genuine questions in clear language. Thin,
              copied or keyword-stuffed pages do not help visitors or search
              engines.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              7. It Builds Authority Honestly
            </h4>
            <p>
              Credibility grows through relevant listings, mentions and
              reviews. Cheap link schemes may look fast but can lead to
              penalties later.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              8. It Improves Conversion
            </h4>
            <p>
              Rankings only matter if visitors act. Good SEO services review
              calls to action, forms, WhatsApp and call buttons, and page
              clarity so more visitors become enquiries.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              9. It Tracks What Matters
            </h4>
            <p>
              You should be able to see calls, form fills and other real
              actions, not only keyword positions. Tracking turns SEO from a
              mystery into something measurable.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              10. It Communicates Clearly
            </h4>
            <p>
              You should know what is being done, why and what comes next.
              Reports should be in plain language, and your questions should
              get straight answers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Average SEO Service vs Strong SEO Service
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Area
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Average service
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Strong service
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Starting point
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Standard package
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Audit and goal-based plan
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Keywords
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Broad, high-competition terms
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Local, intent-based phrases
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Website
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Recommendations only
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Fixes and improvements
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Content
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Thin or repeated pages
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Helpful, original answers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Links
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Bulk or low-quality
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Relevant, earned mentions
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Reporting
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Ranking screenshots
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Calls, enquiries and clear actions
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Promises
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Guaranteed positions
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Honest, realistic timelines
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Ownership
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Provider holds accounts
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      You own your accounts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>If a provider falls on the left side of most rows, keep looking.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Services at Zentrix Infotech
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">Local SEO</h4>
            <p>
              We optimize your Google Business Profile, align your listings,
              build local pages and guide you on collecting and answering
              reviews.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              On-Page SEO
            </h4>
            <p>
              We improve titles, descriptions, headings, text, images and
              internal links so each page speaks clearly to one customer need.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Technical SEO
            </h4>
            <p>
              We review speed, mobile performance, structure, security and
              indexing, then fix what is holding your site back.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Keyword Research and Strategy
            </h4>
            <p>
              We study your market and plan keywords, pages and priorities in a
              realistic order.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Content for SEO
            </h4>
            <p>
              We create service pages, guides, FAQs and blogs that answer
              customer questions and build trust.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Authority Building
            </h4>
            <p>
              We help strengthen your credibility with quality listings and
              relevant mentions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Conversion Improvement
            </h4>
            <p>
              We improve how your pages guide visitors toward calls, forms and
              WhatsApp messages.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Tracking and Reporting
            </h4>
            <p>
              We track key actions and send simple reports that show what is
              working.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which SEO Services Match Which Goal?
            </h3>

            <p>Choosing the right services depends on what you want:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>More local calls and visits:</strong> local SEO, Google
                Business Profile, reviews and local pages.
              </li>
              <li>
                <strong>More online orders or enquiries:</strong> on-page SEO,
                product or service pages, speed and conversion improvements.
              </li>
              <li>
                <strong>A new or weak website:</strong> technical SEO,
                structure and content planning, ideally alongside a redesign.
              </li>
              <li>
                <strong>Competing in a crowded market:</strong> deeper content,
                stronger authority and long-term planning.
              </li>
              <li>
                <strong>A limited budget:</strong> a focused starting plan that
                covers the highest-impact tasks first.
              </li>
            </ul>

            <p>
              We will help you choose, and we will tell you honestly if a
              service is not the right fit for your situation.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Our Website Background Helps
            </h3>

            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. Many SEO problems begin
              with the website itself. Because we design, build and optimize
              websites, we can fix the cause of a problem as well as its
              symptoms, without handing your project between several companies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Experience and Client Feedback
            </h3>

            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. Our clients come from
              interiors, events, education, healthcare, retail, e-commerce,
              real estate and hospitality. A few experiences, paraphrased from
              their feedback:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Jigyasa Hospital reported a consistent rise in patient
                enquiries through Google and social media.
              </li>
              <li>
                Jai Balaji Bath and Tiles said their local visibility improved
                and enquiries now arrive steadily through search and social
                media.
              </li>
              <li>
                Ahlawat Pharmacy said people now discover them through search
                and social ads, with orders and footfall growing steadily.
              </li>
              <li>
                PS Decor said their website showcases their wedding work well
                and helped bring more client enquiries.
              </li>
            </ul>

            <p>
              Results differ for every business and depend on competition,
              timing and effort. These examples show the kind of partnership we
              aim to build.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Results to Expect
            </h3>

            <p>
              SEO is steady work, not an overnight switch. The first weeks
              usually involve audits, fixes and setup. Visibility often
              improves over the following months, and stronger, more stable
              results come with consistent effort. Timelines depend on your
              industry, competition, budget and the starting condition of your
              website. We set milestones so you can see progress, and we do not
              promise fixed rankings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Test Any SEO Provider Yourself
            </h3>

            <p>You do not need technical knowledge to check quality. Try these simple tests:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Ask for a first-look review of your website. Notice whether it
                is specific to your business.
              </li>
              <li>
                Ask what they will do in the first 90 days. Look for concrete
                tasks.
              </li>
              <li>
                Ask how they will report. Look for calls and enquiries, not
                only rankings.
              </li>
              <li>Ask who owns the accounts. The answer should be you.</li>
              <li>
                Ask for real examples. Check that they match your type of
                business.
              </li>
              <li>
                Notice any guaranteed promises. An honest provider will not
                offer them.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Work With Us From Lucknow
            </h3>

            <p>
              SEO is delivered online, so distance is rarely a problem. Our
              offices are in Moradabad and Ghaziabad, and we serve Lucknow
              clients through calls, video meetings, WhatsApp and shared
              reports.
            </p>

            <p>
              If you would like a clear, honest view of your website and Google
              presence, we are happy to review it and suggest a practical plan.
              Call +91 72488 00839, message us on WhatsApp, or email
              info@zentrixinfotech.com.
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our SEO Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your SEO Plan
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Get a Free Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What are the best SEO services in Lucknow?
                </h4>
                <p>
                  The best services include an audit, local SEO, technical
                  fixes, helpful content, honest reporting and a plan built
                  around your goals.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I know if an SEO service is good?
                </h4>
                <p>
                  Check for a business-specific audit, clear deliverables, real
                  examples, plain reports and no guaranteed rankings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long do SEO services take to work?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest provider can
                  guarantee a position.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Is local SEO important in Lucknow?
                </h4>
                <p>
                  Yes. Many customers search for nearby businesses, so local
                  visibility often brings the fastest, most relevant enquiries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you offer SEO for small businesses?
                </h4>
                <p>
                  Yes. We plan around your size, goals and budget, starting
                  with the highest-impact work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do I need a new website for SEO?
                </h4>
                <p>
                  Not always. We audit first and recommend changes only where
                  they are truly needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I get regular reports?
                </h4>
                <p>
                  Yes. You receive clear updates on enquiries, visibility and
                  work completed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Does Zentrix Infotech have a Lucknow office?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients through calls, video meetings, WhatsApp and online
                  reports.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I get started?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  . We will review your website and suggest a plan.
                </p>
              </div>
            </div>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="website">
                🌐
              </span>{" "}
              <strong>Website:</strong>{" "}
              <a
                href="https://www.zentrixinfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.zentrixinfotech.com
              </a>
            </p>

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Related Services
              </h3>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-blue-600 hover:underline"
                  >
                    Web Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Cloud Solutions Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-blue-600 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="lucknow"
              currentSlug="/best-seo-services-in-lucknow"
            />
          </div>
        </div>

        <div className="order-2 w-full p-4 sm:p-8 lg:order-2 lg:w-[480px] xl:w-[500px] lg:sticky lg:top-32 lg:self-start">
          <div className="lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto">
            <LandingEnquiry />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <RecentBlog />
      </div>
    </div>
  );
};

export default Content;