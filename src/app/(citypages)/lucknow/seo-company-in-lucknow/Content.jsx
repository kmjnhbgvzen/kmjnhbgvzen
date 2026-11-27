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
      name: "What does an SEO company in Lucknow do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It improves your website and online profile so you appear in search results. This includes local SEO, technical fixes, content and tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early improvements often appear within a few months, with stronger results over time. Timelines vary by competition and website condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. No honest company can. We focus on proven work and clear reporting.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO helps your business appear in nearby searches, including map results and \u2018near me\u2019 queries.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my website need fixing before SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A slow or confusing site loses visitors even if it ranks. Fixing it first helps SEO turn into real enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We plan around your size, goals and budget, starting with the highest-impact work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build and optimize my website together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design, develop and optimize websites, so SEO is planned from the start.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get reports?",
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

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              SEO Company in Lucknow: Get Your Website Working Harder for Your
              Business
            </h2>

            <p>
              Every business in Lucknow wants the same thing from Google: to be
              found by the right customers at the right moment. But ranking
              alone does not grow a business. A visitor has to find you, trust
              your website, understand your offer and then pick up the phone or
              fill in a form.
            </p>

            <p>
              That is how we think about SEO at Zentrix Infotech. We are an IT
              and digital company that builds websites, software and apps and
              runs digital marketing. Our SEO work covers the full path from
              search result to enquiry, not just a ranking report. This page
              explains what we do, how we work, and how to decide whether an
              SEO company is right for you.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free SEO Consultation
              </Link>
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              | <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              | <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does an SEO Company Do?
            </h3>

            <p>
              SEO stands for search engine optimization. An SEO company helps
              your website and business profile appear higher when people
              search for what you offer. A complete service usually includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Local SEO for map results and &quot;near me&quot; searches</li>
              <li>On-page SEO so each page is clear and well-structured</li>
              <li>
                Technical SEO so your site is fast, secure and easy for Google
                to read
              </li>
              <li>Content that answers real customer questions</li>
              <li>Authority building through quality listings and mentions</li>
              <li>Tracking and reporting so you can see what is working</li>
            </ul>

            <p>
              The important part is how these pieces connect. Good SEO is a
              system, not a checklist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why We Start With Your Website
            </h3>

            <p>
              Many businesses spend on SEO while their website quietly works
              against them. Slow pages, hard-to-use mobile layouts, unclear
              service pages and missing contact buttons all lose visitors, even
              when rankings improve.
            </p>

            <p>
              Because Zentrix Infotech designs and develops websites as well as
              optimizes them, we can fix these problems at the source. You do
              not need one company to find the issue and another to repair it.
              This saves time, avoids confusion and keeps SEO and design
              working toward the same goal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Local SEO
            </h4>
            <p>
              For most Lucknow businesses, local visibility drives the first
              results. We optimize your Google Business Profile, keep your
              business details consistent across listings, build local pages
              for your services and areas, and guide you on collecting genuine
              reviews and replying to them.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Technical SEO
            </h4>
            <p>
              We check how your site loads, how it behaves on phones, how it is
              structured and whether search engines can crawl and index it
              properly. We then fix the issues that hold you back, such as
              speed problems, broken links, missing tags and security gaps.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              On-Page SEO
            </h4>
            <p>
              We improve page titles, descriptions, headings, text, images and
              internal links so each page targets one clear customer need.
              Pages are written for people first and search engines second.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Keyword Research
            </h4>
            <p>
              We study how your customers actually search, including English,
              Hindi and Hinglish phrases. Keywords are grouped by intent: ready
              to buy, comparing options or just learning. This keeps your
              content focused on searches that lead to enquiries.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Content for SEO
            </h4>
            <p>
              We plan and create service pages, guides, FAQs and blog articles
              that answer questions your customers ask. Helpful content builds
              trust and gives your site more ways to be found.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Link and Authority Building
            </h4>
            <p>
              We help build your credibility through relevant, quality listings
              and mentions. We avoid cheap link schemes that can cause
              penalties.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Conversion Improvement
            </h4>
            <p>
              Traffic only matters if it turns into action. We review calls to
              action, contact forms, WhatsApp and call buttons, page layout and
              messaging, then suggest or build improvements that help visitors
              take the next step.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">Reporting</h4>
            <p>
              We track calls, form submissions and other key actions, and we
              explain the results in plain language. You see enquiries and
              business outcomes, not just a list of ranking positions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              SEO by Business Stage
            </h3>

            <p>
              Different businesses need different starting points. Here is how
              we usually think about it:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>New business with no website or profile:</strong> We
                focus on building a solid foundation: a clear website, a
                complete Google Business Profile and pages for your main
                services.
              </li>
              <li>
                <strong>Small business with a basic website:</strong> We fix
                technical and on-page issues, strengthen local signals and
                build a steady content plan.
              </li>
              <li>
                <strong>Growing business in a competitive field:</strong> We
                deepen content, improve authority, expand to more services or
                areas and refine conversion.
              </li>
              <li>
                <strong>Established business with an older website:</strong> We
                audit what exists, keep what works, repair what does not and
                plan a careful improvement path, including redesign where truly
                needed.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Support
            </h3>

            <p>Our SEO work suits many types of Lucknow businesses:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Healthcare: clinics, hospitals and wellness brands</li>
              <li>Education: schools, colleges and coaching institutes</li>
              <li>
                Real estate and construction: builders, dealers, interiors and
                home services
              </li>
              <li>Retail and e-commerce: local stores and online shops</li>
              <li>
                Hospitality and food: hotels, resorts, restaurants and
                bakeries
              </li>
              <li>
                Handicrafts, fashion and exports: chikankari sellers, artisans
                and exporters
              </li>
              <li>
                Professional services: consultants, lawyers, accountants and
                agencies
              </li>
            </ul>

            <p>
              Each industry searches differently, so we shape keywords, pages
              and content around how your customers behave.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Process
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Step 1: Discovery.</strong> We learn about your
                business, services, customers and goals.
              </li>
              <li>
                <strong>Step 2: Audit.</strong> We review your website, Google
                profile, content, competitors and current visibility.
              </li>
              <li>
                <strong>Step 3: Strategy.</strong> We prepare a plan with
                priorities, pages, keywords and a realistic timeline.
              </li>
              <li>
                <strong>Step 4: Fix and build.</strong> We handle technical
                fixes, page improvements, local setup and new content.
              </li>
              <li>
                <strong>Step 5: Promote.</strong> We strengthen your authority
                through quality local listings, mentions and reviews.
              </li>
              <li>
                <strong>Step 6: Track and improve.</strong> We monitor results,
                report clearly and adjust the plan month by month.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Results to Expect
            </h3>

            <p>
              SEO is steady work, not a quick switch. Early weeks involve
              audits, fixes and setup. Visibility often improves over the
              following months, and stronger, more stable results come with
              consistent effort. Timelines depend on your industry,
              competition, budget and how much work your website needs. We give
              you honest expectations at the start and set milestones so you
              can see progress.
            </p>

            <p>
              We do not promise fixed rankings or overnight results. Search
              engines change, and no company controls them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Engagement Models
            </h3>

            <p>
              We keep arrangements simple and flexible. Depending on your
              needs, we can work in one of these ways:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One-time audit and action plan:</strong> a clear review
                with priorities you or your team can follow.
              </li>
              <li>
                <strong>Monthly SEO support:</strong> ongoing optimization,
                content, local work and reporting.
              </li>
              <li>
                <strong>Website plus SEO:</strong> a new or improved website
                built with SEO from day one.
              </li>
              <li>
                <strong>Combined digital marketing:</strong> SEO alongside
                social media and other campaigns.
              </li>
            </ul>

            <p>
              We explain the scope and deliverables in writing before we begin.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an SEO Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One team for website and SEO:</strong> design,
                development and marketing under one roof.
              </li>
              <li>
                <strong>Experience:</strong> more than 250 projects for over
                270 clients, with a 4.7 out of 5 rating shown on our website.
              </li>
              <li>
                <strong>Range of industries:</strong> interiors, events,
                education, healthcare, retail, e-commerce, real estate and
                hospitality.
              </li>
              <li>
                <strong>Clear communication:</strong> calls, WhatsApp and
                plain-language reports.
              </li>
              <li>
                <strong>Honest planning:</strong> no guaranteed-ranking claims.
              </li>
              <li>
                <strong>Business focus:</strong> the goal is more calls,
                enquiries and customers.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our Clients Say
            </h3>

            <p>
              A few client experiences, paraphrased from their feedback:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Jigyasa Hospital shared that their website and marketing work
                led to a consistent rise in patient enquiries through Google
                and social media.
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
              Every business is different, and results depend on competition,
              effort and timing. These examples show the partnership we aim to
              build.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working With Us From Lucknow
            </h3>

            <p>
              SEO is delivered online, so distance is rarely a problem. Our
              offices are in Moradabad and Ghaziabad, and we work with clients
              through calls, video meetings, WhatsApp and shared reports. You
              will always know who is handling your project and where it
              stands.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ready to Talk to an SEO Company in Lucknow?
            </h3>

            <p>
              If you want a clear, honest view of how your website and Google
              presence can improve, we are happy to review it and suggest a
              practical plan. Call +91 72488 00839, message us on WhatsApp, or
              email info@zentrixinfotech.com.
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
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our SEO Team
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your SEO Plan
              </Link>{" "}
              ·{" "}
              <Link
                href="/contact-us"
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
                  1. What does an SEO company in Lucknow do?
                </h4>
                <p>
                  It improves your website and online profile so you appear in
                  search results. This includes local SEO, technical fixes,
                  content and tracking.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does SEO take to show results?
                </h4>
                <p>
                  Early improvements often appear within a few months, with
                  stronger results over time. Timelines vary by competition and
                  website condition.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Can you guarantee first-page rankings?
                </h4>
                <p>
                  No. No honest company can. We focus on proven work and clear
                  reporting.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. What is local SEO?
                </h4>
                <p>
                  Local SEO helps your business appear in nearby searches,
                  including map results and &quot;near me&quot; queries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Why does my website need fixing before SEO?
                </h4>
                <p>
                  A slow or confusing site loses visitors even if it ranks.
                  Fixing it first helps SEO turn into real enquiries.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you work with small businesses?
                </h4>
                <p>
                  Yes. We plan around your size, goals and budget, starting
                  with the highest-impact work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you build and optimize my website together?
                </h4>
                <p>
                  Yes. We design, develop and optimize websites, so SEO is
                  planned from the start.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I get reports?
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
              currentSlug="/seo-company-in-lucknow"
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