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
      name: "What does an SEO consultant do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SEO consultant studies your website and market, then gives a clear plan showing what to fix, what to create and what to do first.",
      },
    },
    {
      "@type": "Question",
      name: "How is SEO consulting different from an SEO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A consultant gives strategy and direction. An agency carries out the ongoing work. Many businesses use both.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SEO consulting cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on website size and scope. We share a written quote after a free review, with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Will SEO consulting guarantee rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nobody can honestly guarantee rankings. You receive an honest diagnosis and a practical plan.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an SEO audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most audits take one to two weeks, depending on the size and complexity of your website.",
      },
    },
    {
      "@type": "Question",
      name: "Can my own team follow your roadmap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The plan is written in simple language so your team or another provider can carry it out.",
      },
    },
    {
      "@type": "Question",
      name: "Can you review my current SEO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can check their work, reports and results and give you an independent opinion.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your Google Business Profile, listings, reviews and area-based opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside your office city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Lucknow clients through calls, video meetings and WhatsApp, and we do not claim a Lucknow office.",
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
              SEO Consulting in Lucknow: A Clear Plan Before You Spend on SEO
            </h2>

            <p>
              Many Lucknow businesses start SEO by hiring someone to start work
              at once. A few months later they are unsure what was done, what
              changed and whether the money was well spent. The problem is
              rarely effort. It is usually the lack of a clear plan.
            </p>

            <p>
              SEO consulting solves that problem. A consultant studies your
              website, your market and your goals, then gives you a practical
              roadmap that you or your team can follow. This page explains what
              SEO consulting is, who needs it, what you receive and how Zentrix
              Infotech approaches it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is SEO Consulting?
            </h3>

            <p>
              SEO consulting is expert guidance on how to improve your
              visibility in search. Instead of only doing the tasks, a
              consultant diagnoses the situation, sets priorities and explains
              what to do, in what order and why.
            </p>

            <p>A good consulting engagement answers questions such as:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Why is my website not getting enquiries from Google?
              </li>
              <li>
                Which keywords are worth targeting for my business?
              </li>
              <li>
                What should I fix first with a limited budget?
              </li>
              <li>
                Is my current SEO provider doing the right work?
              </li>
              <li>
                How do I measure whether SEO is working?
              </li>
            </ul>

            <p>
              The result is clarity. You leave with a plan you understand and
              can act on.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Who Needs SEO Consulting in Lucknow?
            </h3>

            <p>SEO consulting suits many situations.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>New websites:</strong> You are about to launch and want
                the structure, content and keywords right from the start.
              </li>
              <li>
                <strong>Websites with flat traffic:</strong> Traffic has stopped
                growing and you do not know why.
              </li>
              <li>
                <strong>Business owners comparing agencies:</strong> You want an
                independent view before you sign a contract.
              </li>
              <li>
                <strong>In-house marketing teams:</strong> You have people to do
                the work but need strategy and direction.
              </li>
              <li>
                <strong>Businesses planning a redesign:</strong> You want to
                avoid losing existing rankings during the move.
              </li>
              <li>
                <strong>Local businesses:</strong> Shops, clinics, coaching
                centres and service providers that depend on nearby customers.
              </li>
              <li>
                <strong>Online stores:</strong> Sellers who need better category
                pages, product pages and search visibility.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              SEO Consulting vs SEO Agency vs Freelancer
            </h3>

            <p>These options solve different problems.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Consultant:</strong> Gives strategy, diagnosis and
                direction. Best when you need a plan or a second opinion.
              </li>
              <li>
                <strong>Agency:</strong> Carries out the ongoing work such as
                technical fixes, content, links and reporting. Best when you
                need a team to execute.
              </li>
              <li>
                <strong>Freelancer:</strong> Can handle specific tasks at lower
                cost but may have limited capacity.
              </li>
            </ul>

            <p>
              Many businesses start with consulting to build the plan, then
              choose whether to execute in house, with a freelancer or with an
              agency. Because we also offer SEO, web development, design and
              digital marketing, we can help with both the plan and the
              execution, but you are free to take the roadmap anywhere.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Receive from Our SEO Consulting
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Website SEO Audit</strong>
                <br />
                We review your website for technical health, page speed, mobile
                experience, crawl errors, indexing, site structure, structured
                data and security basics. You get a clear list of problems
                ranked by importance.
              </li>

              <li>
                <strong>Keyword and Search Intent Research</strong>
                <br />
                We find the searches that real Lucknow customers use, in
                English, Hindi and Hinglish, and group them by buying intent.
                This shows you which keywords are worth your effort.
              </li>

              <li>
                <strong>Competitor Analysis</strong>
                <br />
                We look at who appears for your most important searches and why.
                You see gaps you can fill and strengths you should protect.
              </li>

              <li>
                <strong>Content Gap Review</strong>
                <br />
                We compare your pages with what customers are searching for and
                identify pages to improve, merge or create.
              </li>

              <li>
                <strong>Local SEO Review</strong>
                <br />
                We check your Google Business Profile, listings, reviews, map
                presence and area-based opportunities across places such as
                Hazratganj, Gomti Nagar, Aliganj and Indira Nagar.
              </li>

              <li>
                <strong>Priority Roadmap</strong>
                <br />
                You receive a step-by-step plan for the first 30, 60 and 90
                days, with tasks ranked by effect and effort, so you know what
                to do first.
              </li>

              <li>
                <strong>Tracking and Measurement Plan</strong>
                <br />
                We help you set up the right reports so you can see calls,
                enquiries, map actions and traffic, instead of only keyword
                positions.
              </li>

              <li>
                <strong>Walkthrough Session</strong>
                <br />
                We explain the findings in simple language through a call or
                video meeting, so you and your team understand each
                recommendation.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Optional Add-Ons
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Team training:</strong> Short sessions that teach your
                staff on-page SEO, content basics and review handling.
              </li>
              <li>
                <strong>Provider review:</strong> An independent check of what
                your current agency or freelancer is delivering.
              </li>
              <li>
                <strong>Redesign guidance:</strong> A migration checklist to
                protect your rankings during a new website launch.
              </li>
              <li>
                <strong>Monthly advisory:</strong> A regular call to review
                progress and adjust the plan.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our SEO Consulting Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> We learn your business,
                customers, goals and past SEO work.
              </li>
              <li>
                <strong>Access and data review:</strong> With your permission we
                study your Search Console, Analytics and Business Profile.
              </li>
              <li>
                <strong>Audit and research:</strong> We examine the website,
                keywords, competitors and local presence.
              </li>
              <li>
                <strong>Findings and strategy:</strong> We prepare a clear
                report with priorities and reasons.
              </li>
              <li>
                <strong>Walkthrough:</strong> We present the plan and answer
                your questions.
              </li>
              <li>
                <strong>Support:</strong> If you choose, we help you carry out
                the roadmap or review progress each month.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Problems We Find
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Important pages that Google cannot index
              </li>
              <li>
                Several pages competing for the same keyword
              </li>
              <li>
                Slow mobile pages that lose visitors
              </li>
              <li>
                Titles and descriptions that do not match search intent
              </li>
              <li>
                Thin pages with little useful information
              </li>
              <li>
                Incomplete or inconsistent Google Business Profile details
              </li>
              <li>
                No tracking for calls and form submissions
              </li>
              <li>
                Backlinks from low-quality sources
              </li>
            </ul>

            <p>
              Many of these are fixable without a large budget once they are
              identified.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Signs You Should Talk to an SEO Consultant
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Traffic is not growing despite months of effort
              </li>
              <li>
                You cannot understand your SEO reports
              </li>
              <li>
                Rankings dropped suddenly after a redesign or update
              </li>
              <li>
                You are about to hire an agency and want a fair comparison
              </li>
              <li>
                Your competitors appear on the map and you do not
              </li>
              <li>
                You have a team but no clear SEO direction
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an SEO Consultant in Lucknow
            </h3>

            <p>Ask these questions before you hire anyone:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Will I own the audit, reports and all accounts?
              </li>
              <li>
                Can you explain recommendations in plain language?
              </li>
              <li>
                Do you show real examples of work and client feedback?
              </li>
              <li>
                Do you avoid guaranteed rankings?
              </li>
              <li>
                Do you tell me what to fix first and why?
              </li>
              <li>
                Is the scope and delivery time written down?
              </li>
            </ul>

            <p>
              Be careful with anyone who promises first-page results or hides
              how the work is done.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Trust Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital marketing company with a
              4.7 out of 5 rating, more than 250 projects and more than 270
              clients. We work across websites, software, mobile apps, UI/UX,
              cloud and digital marketing, so our recommendations account for
              how the site is built and designed, not only how it is written.
            </p>

            <p>
              Clients describe their experience in their own words. Jigyasa
              Hospital reports a consistent rise in patient enquiries from
              Google and social media. Jai Balaji Bath and Tiles says its local
              visibility improved and enquiries now come steadily through search
              and social media. Ahlawat Pharmacy says people now discover it
              through search and social ads, with orders and footfall growing
              steadily.
            </p>

            <p>
              Our offices are in Moradabad and Ghaziabad, and we support
              Lucknow clients through calls, video meetings and WhatsApp. We do
              not claim a Lucknow office, and results differ for every business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Book Your SEO Consultation
            </h3>

            <p>
              Share your website address and your main goal, and we will tell
              you honestly where you stand and what to do next.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Call:{" "}
                <a
                  href="tel:+917248800839"
                  className="text-blue-600 hover:underline"
                >
                  +91 72488 00839
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/916397036898"
                  className="text-blue-600 hover:underline"
                >
                  +91 63970 36898
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@zentrixinfotech.com"
                  className="text-blue-600 hover:underline"
                >
                  info@zentrixinfotech.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://www.zentrixinfotech.com/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.zentrixinfotech.com/
                </a>
              </li>
            </ul>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free SEO Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does an SEO consultant do?
                </h4>
                <p>
                  An SEO consultant studies your website and market, then gives
                  a clear plan showing what to fix, what to create and what to
                  do first.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How is SEO consulting different from an SEO agency?
                </h4>
                <p>
                  A consultant gives strategy and direction. An agency carries
                  out the ongoing work. Many businesses use both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does SEO consulting cost in Lucknow?
                </h4>
                <p>
                  Cost depends on website size and scope. We share a written
                  quote after a free review, with no hidden charges.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Will SEO consulting guarantee rankings?
                </h4>
                <p>
                  No. Nobody can honestly guarantee rankings. You receive an
                  honest diagnosis and a practical plan.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does an SEO audit take?
                </h4>
                <p>
                  Most audits take one to two weeks, depending on the size and
                  complexity of your website.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can my own team follow your roadmap?
                </h4>
                <p>
                  Yes. The plan is written in simple language so your team or
                  another provider can carry it out.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you review my current SEO agency?
                </h4>
                <p>
                  Yes. We can check their work, reports and results and give you
                  an independent opinion.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you help with local SEO?
                </h4>
                <p>
                  Yes. We review your Google Business Profile, listings, reviews
                  and area-based opportunities.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you work with businesses outside your office city?
                </h4>
                <p>
                  Yes. We serve Lucknow clients through calls, video meetings
                  and WhatsApp, and we do not claim a Lucknow office.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Related Services
              </h3>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <Link
                    href="/services/seo"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Services
                  </Link>
                </li>
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
              currentSlug="/local-seo-lucknow"
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