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
      name: "How do I choose the right SEO services in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your goal, then choose services that match it. Compare providers on audit, deliverables, reporting and honesty.",
      },
    },
    {
      "@type": "Question",
      name: "Which SEO service should I start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most local businesses, start with Google Business Profile work and website basics. These often give the fastest improvements.",
      },
    },
    {
      "@type": "Question",
      name: "Are SEO packages better than custom plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither is always better. Packages suit clear, common needs, and custom plans suit special or complex situations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need monthly SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes, after the foundation work. Monthly work keeps content, local signals and results improving.",
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
      name: "Can any provider guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search results change often, so no honest provider can guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "What if my budget is small?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the highest-impact tasks, such as your Google profile and key service pages, then expand gradually.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new website before SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. An audit shows whether fixes are enough or a redesign is truly needed.",
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
              How to Choose SEO Services in Lucknow: Pick What Your Business
              Actually Needs
            </h2>

            <p>
              Open any SEO company&apos;s website and you will see a long menu:
              local SEO, technical SEO, on-page SEO, link building, content,
              audits, reporting. For a business owner, the list can feel
              confusing. Which of these do you really need? Which can wait? And
              how do you avoid paying for work that will not help you?
            </p>

            <p>
              This guide helps you choose SEO services in Lucknow in a
              practical way. It focuses on matching services to your goals,
              your budget and your stage of growth. It is written by the team
              at Zentrix Infotech, so you will also see how we plan SEO for
              clients, which you can compare against any other provider.
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
              Step 1: Start With Your Goal, Not the Service List
            </h3>

            <p>
              The most common mistake is choosing services first and goals
              later. Reverse that. Decide what you want SEO to do for you:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                More phone calls and walk-ins (clinics, shops, salons, coaching
                centres)
              </li>
              <li>
                More enquiries or leads (builders, interiors, consultants, B2B
                services)
              </li>
              <li>More online orders (e-commerce, food, handicrafts)</li>
              <li>
                More bookings or appointments (hotels, doctors, event services)
              </li>
              <li>
                Better brand visibility (new businesses entering a competitive
                market)
              </li>
            </ul>

            <p>
              Once the goal is clear, the right services become much easier to
              identify.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 2: Understand the Main SEO Services
            </h3>

            <p>
              Here is what each core service does, in plain language.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local SEO</strong> helps you appear in map results and
                &quot;near me&quot; searches. It covers your Google Business
                Profile, local listings, reviews and local pages.
              </li>
              <li>
                <strong>On-page SEO</strong> improves the content and structure
                of your pages so each one clearly answers a customer need.
              </li>
              <li>
                <strong>Technical SEO</strong> makes your website fast,
                mobile-friendly, secure and easy for Google to read.
              </li>
              <li>
                <strong>Keyword research</strong> finds the phrases your
                customers really use, including Hindi and Hinglish searches.
              </li>
              <li>
                <strong>Content for SEO</strong> creates service pages, guides,
                FAQs and blogs that build trust and bring new visitors.
              </li>
              <li>
                <strong>Authority building</strong> earns credibility through
                quality listings and relevant mentions.
              </li>
              <li>
                <strong>Conversion improvement</strong> helps more visitors
                call, message or fill in a form once they arrive.
              </li>
              <li>
                <strong>Tracking and reporting</strong> measures calls,
                enquiries and key actions so you can see what works.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 3: Match Services to Your Goal
            </h3>

            <p>Use this table as a starting point.</p>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Your goal
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Services to prioritise
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Services that can come later
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Local calls and visits
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Local SEO, Google profile, reviews, local pages
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Advanced content, link building
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Lead enquiries
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      On-page SEO, service pages, conversion improvement
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large blog programmes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Online orders
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Technical SEO, product pages, speed, content
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Broader brand campaigns
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      New website launch
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Technical SEO, structure, keyword plan, content
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Authority building
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Crowded market
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Content depth, authority, ongoing optimization
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      None, plan for the long term
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Remember, this is a guide, not a rule. A good provider will
              adjust it after reviewing your business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 4: Choose Based on Your Business Stage
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You have no website or Google profile.</strong> Start
                with a solid foundation: a clear website with service pages, a
                complete Google Business Profile and basic tracking.
              </li>
              <li>
                <strong>You have a basic website that gets little traffic.</strong>{" "}
                Begin with an audit, then fix technical and on-page issues and
                strengthen local signals.
              </li>
              <li>
                <strong>You have steady traffic but few enquiries.</strong>{" "}
                Focus on conversion improvements, page clarity and the quality
                of your keywords, so more visitors turn into customers.
              </li>
              <li>
                <strong>You are growing and want to beat competitors.</strong>{" "}
                Invest in deeper content, stronger authority and a longer plan,
                with regular reviews of results.
              </li>
              <li>
                <strong>You have an old website.</strong> Audit first.
                Sometimes a redesign is needed, but often targeted fixes bring
                good improvements at lower cost.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 5: Decide Between a Package and a Custom Plan
            </h3>

            <p>
              Many companies sell fixed packages, and others build a custom
              plan. Both can work, if you know what to look for.
            </p>

            <p>Packages can suit you when:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Your needs are common and clear.</li>
              <li>You want a predictable scope and simple comparison.</li>
              <li>The package lists exact deliverables, not vague phrases.</li>
            </ul>

            <p>A custom plan can suit you when:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Your business has special needs, several locations or unusual
                products.
              </li>
              <li>
                Your website needs repair work before normal SEO can help.
              </li>
              <li>You want to start small and expand step by step.</li>
            </ul>

            <p>
              Be careful with any package that does not explain what is
              included. &quot;Premium SEO&quot; or &quot;full
              optimization&quot; means nothing without details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 6: Choose Between One-Time and Monthly Services
            </h3>

            <p>SEO has two kinds of work:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One-time work</strong> includes an audit, technical
                fixes, a Google profile setup, new service pages and a keyword
                plan. These create the foundation.
              </li>
              <li>
                <strong>Monthly work</strong> includes content, local updates,
                review management, link building, tracking and ongoing
                improvement. These keep your visibility growing.
              </li>
            </ul>

            <p>
              Many businesses do best by starting with one-time foundation
              work, then moving to a lighter monthly plan. Ask any provider to
              separate these clearly in the proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 7: Compare Providers Fairly
            </h3>

            <p>
              When you gather quotes from two or three companies, compare these
              points side by side:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Starting point:</strong> Did they review your website
                first?
              </li>
              <li>
                <strong>Deliverables:</strong> Are the tasks listed clearly?
              </li>
              <li>
                <strong>Timeline:</strong> Is there a realistic schedule with
                milestones?
              </li>
              <li>
                <strong>Reporting:</strong> Will you see calls and enquiries,
                or only rankings?
              </li>
              <li>
                <strong>Ownership:</strong> Will your Google and analytics
                accounts stay in your name?
              </li>
              <li>
                <strong>Team:</strong> Do you know who will handle your
                project?
              </li>
              <li>
                <strong>Terms:</strong> Is the contract length clear, and can
                you end it fairly?
              </li>
            </ul>

            <p>
              A lower price with unclear work is often more expensive in the
              long run.
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
              Step 8: Know What to Avoid
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Guaranteed rankings.</strong> Search results change
                often, and no honest provider can promise a position.
              </li>
              <li>
                <strong>Bulk links.</strong> Cheap link schemes can lead to
                penalties.
              </li>
              <li>
                <strong>Copied or thin content.</strong> It does not help
                visitors or search engines.
              </li>
              <li>
                <strong>Services you do not need.</strong> Do not pay for work
                that does not match your goal.
              </li>
              <li>
                <strong>Hidden accounts.</strong> If you cannot access your own
                data, walk away.
              </li>
              <li>
                <strong>Pressure to sign quickly.</strong> A professional lets
                you decide calmly.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple Decision Worksheet
            </h3>

            <p>
              Answer these questions before you speak to any provider:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>What is my main goal for the next six months?</li>
              <li>Which two or three services bring me the most income?</li>
              <li>Which areas of Lucknow do I want to reach?</li>
              <li>Is my website ready, or does it need fixes first?</li>
              <li>How much can I invest monthly, and for how long?</li>
              <li>Who on my team can answer questions and approve content?</li>
            </ul>

            <p>
              Even short answers will help a provider recommend the right
              services and give you a more honest proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Helps You Choose
            </h3>

            <p>
              Zentrix Infotech is an IT and digital company offering web
              development, software development, mobile apps, UI/UX design,
              cloud solutions and digital marketing. We do not push a standard
              package. Our approach looks like this:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>We listen first.</strong> We learn about your business,
                customers and goals.
              </li>
              <li>
                <strong>We audit.</strong> We review your website, Google
                profile and current visibility.
              </li>
              <li>
                <strong>We recommend only what fits.</strong> You get a clear
                plan with priorities, not a long list of extras.
              </li>
              <li>
                <strong>We separate foundation work from ongoing work.</strong>{" "}
                You can see what is a one-time need and what is ongoing.
              </li>
              <li>
                <strong>We report in plain language.</strong> You see enquiries
                and progress, not jargon.
              </li>
              <li>
                <strong>We make no guaranteed-ranking promises.</strong> We
                promise honest planning and clear communication.
              </li>
            </ul>

            <p>
              Because we also design and build websites, we can fix website
              problems directly, which often makes SEO more effective and
              simpler to manage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              We have completed more than 250 projects for over 270 clients and
              show a 4.7 out of 5 rating on our website. A few client
              experiences, paraphrased from their feedback:
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
              Every business is different, and results depend on competition,
              timing and effort. These examples show the partnership we aim to
              build.
            </p>

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
              If you would like help choosing the right SEO services for your
              business, we are happy to review your website and suggest a
              practical first step. Call +91 72488 00839, message us on
              WhatsApp, or email info@zentrixinfotech.com.
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
                  1. How do I choose the right SEO services in Lucknow?
                </h4>
                <p>
                  Start with your goal, then choose services that match it.
                  Compare providers on audit, deliverables, reporting and
                  honesty.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which SEO service should I start with?
                </h4>
                <p>
                  For most local businesses, start with Google Business Profile
                  work and website basics. These often give the fastest
                  improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Are SEO packages better than custom plans?
                </h4>
                <p>
                  Neither is always better. Packages suit clear, common needs,
                  and custom plans suit special or complex situations.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do I need monthly SEO services?
                </h4>
                <p>
                  Often yes, after the foundation work. Monthly work keeps
                  content, local signals and results improving.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long do SEO services take to work?
                </h4>
                <p>
                  Early improvements often appear within a few months. Stronger
                  results usually build over a longer period.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can any provider guarantee first-page rankings?
                </h4>
                <p>
                  No. Search results change often, so no honest provider can
                  guarantee a position.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. What if my budget is small?
                </h4>
                <p>
                  Start with the highest-impact tasks, such as your Google
                  profile and key service pages, then expand gradually.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do I need a new website before SEO?
                </h4>
                <p>
                  Not always. An audit shows whether fixes are enough or a
                  redesign is truly needed.
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
              currentSlug="/how-to-choose-seo-services-in-lucknow"
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