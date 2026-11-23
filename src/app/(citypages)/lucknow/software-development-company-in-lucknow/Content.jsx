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
      name: "Which is the best software development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that shows real projects, gives a clear scope and supports you after launch. Compare portfolios and reviews before you decide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on features, users, integrations and timeline. Zentrix Infotech gives a clear quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small tools take a few weeks. ERP, CRM or multi-user platforms usually take a few months.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech build mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build Android, iOS and cross-platform apps.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build ERP and CRM software for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build ERP and CRM systems around your sales, stock, accounts and customer follow-up process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses and startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can start with a small, focused version of your software and add features as you grow.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership terms are agreed in writing before the project starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance, bug fixes and updates.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with Lucknow clients remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work through calls, screen sharing and regular progress reports.",
      },
    },
    {
      "@type": "Question",
      name: "Can you improve my existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can fix, redesign or extend existing systems.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp, or email info@zentrixinfotech.com for a free consultation.",
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
              Software Development Company in Lucknow – Custom Software That
              Brings You Customers
            </h2>

            <p>
              Need software built for your Lucknow business? Zentrix Infotech
              designs and builds custom software, web applications and mobile
              apps that save time, reduce manual work and help you grow. 250+
              projects delivered for 270+ clients, with a 4.7/5 client rating.
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
              What Does a Software Development Company in Lucknow Do?
            </h3>

            <p>
              A software development company designs, builds, tests and
              maintains software for your business. That can be a billing
              system, a customer app, an ERP, a CRM, a booking portal or a full
              web platform. The goal is simple: replace manual, scattered work
              with one system your team can actually use.
            </p>

            <p>
              Zentrix Infotech works with businesses in Hazratganj, Gomti Nagar,
              Aliganj, Indira Nagar and across Lucknow, as well as the rest of
              Uttar Pradesh. We start with your business problem, not with a
              technology.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Signs Your Business Needs Custom Software
            </h3>

            <p>
              Many Lucknow business owners wait too long. If you recognise two
              or more of these, it is time to talk to us:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>You track orders, stock or leads in Excel or WhatsApp</li>
              <li>Your staff repeat the same data entry in several places</li>
              <li>
                Customers ask for online booking, ordering or payment, and you
                cannot offer it
              </li>
              <li>Ready-made software forces you to change how you work</li>
              <li>
                You cannot see sales, enquiries or performance in one dashboard
              </li>
              <li>
                Your business is growing and your current process is breaking
              </li>
            </ul>

            <p>
              Not sure what you need? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free 15-minute consultation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services
            </h3>

            <p>Each service below links to a full page with more detail.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <Link
                  href="https://www.zentrixinfotech.com/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  Custom Software Development
                </Link>
                : tailor-made systems for billing, inventory, scheduling and
                reporting.
              </li>
              <li>
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  Web Application Development
                </Link>
                : fast, secure portals, dashboards and web platforms.
              </li>
              <li>
                <Link
                  href="https://www.zentrixinfotech.com/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  Mobile App Development
                </Link>
                : Android, iOS and cross-platform apps for customers and staff.
              </li>
              <li>
                <strong>ERP and CRM Development:</strong> one connected system
                for sales, accounts, stock, HR and follow-ups.
              </li>
              <li>
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX Design
                </Link>
                : simple screens that your team learns in minutes.
              </li>
              <li>
                <Link
                  href="https://www.zentrixinfotech.com/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  Cloud Solutions
                </Link>
                : hosting, backups, security and scaling.
              </li>
              <li>
                <strong>Software Integration:</strong> payment gateways, SMS,
                WhatsApp tools and accounting software connected to your system.
              </li>
              <li>
                <strong>Maintenance and Support:</strong> updates, fixes and
                improvements after launch.
              </li>
            </ul>

            <p>
              Have an idea or an old system that needs fixing?{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Share your requirement
              </Link>{" "}
              and get a clear plan within one working day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software We Build for Lucknow Industries
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Industry
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      What we build
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Result you can expect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Hospitals and clinics</td>
                    <td className="px-3 py-3">
                      Appointment booking, patient records, billing
                    </td>
                    <td className="px-3 py-3">
                      Easier booking and more patient enquiries
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Schools and colleges</td>
                    <td className="px-3 py-3">
                      Admission portals, student dashboards, fee tracking
                    </td>
                    <td className="px-3 py-3">
                      Less paperwork, faster access to information
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Retail and distribution</td>
                    <td className="px-3 py-3">
                      Billing, stock, order and delivery management
                    </td>
                    <td className="px-3 py-3">
                      Fewer errors and better stock control
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Real estate and builders</td>
                    <td className="px-3 py-3">
                      Lead management, project dashboards
                    </td>
                    <td className="px-3 py-3">
                      No lost enquiries, faster follow-up
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Hotels, resorts and events</td>
                    <td className="px-3 py-3">
                      Booking systems and enquiry management
                    </td>
                    <td className="px-3 py-3">More direct bookings</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Handicraft and chikankari exporters
                    </td>
                    <td className="px-3 py-3">
                      Product catalogues, RFQ forms, order tracking
                    </td>
                    <td className="px-3 py-3">
                      Easier for overseas buyers to find and trust you
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Service and government-linked firms
                    </td>
                    <td className="px-3 py-3">
                      Workflow, document and reporting tools
                    </td>
                    <td className="px-3 py-3">
                      Clear tracking and faster approvals
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work
            </h3>

            <p>
              We do not just talk about results. Here is what our clients have
              built with us:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Jigyasa Hospital:</strong> the hospital says its website
                makes appointment booking easy, and it has seen a steady rise in
                patient enquiries through Google and social media.
              </li>
              <li>
                <strong>PS Decor:</strong> a wedding and event design company
                that reports more client enquiries after its new website.
              </li>
              <li>
                <strong>The Buyzaar Mart:</strong> a retail franchise platform
                with multi-category ordering, delivery management and franchise
                operations.
              </li>
              <li>
                <strong>KDEDU:</strong> an education platform that makes
                resources easy for students and faculty to reach.
              </li>
              <li>
                <strong>HerbsFox:</strong> an online marketplace for herbs,
                spices and wellness products.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                See our full portfolio
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.zentrixinfotech.com/projects"
                className="text-blue-600 hover:underline"
              >
                case studies
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Process Works
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free discovery call:</strong> you tell us your goals and
                problems.
              </li>
              <li>
                <strong>Requirement analysis:</strong> we define features, users
                and priorities.
              </li>
              <li>
                <strong>Quotation and timeline:</strong> you get a clear scope
                and proposal before work starts.
              </li>
              <li>
                <strong>UI/UX design:</strong> you approve the design first.
              </li>
              <li>
                <strong>Development in stages:</strong> you review working
                features along the way.
              </li>
              <li>
                <strong>Testing:</strong> speed, security and device
                compatibility checks.
              </li>
              <li>
                <strong>Launch and training:</strong> we deploy and train your
                team.
              </li>
              <li>
                <strong>Support and growth:</strong> we keep improving as you
                grow.
              </li>
            </ol>

            <p>
              Our offices are in Moradabad and Ghaziabad. We work with Lucknow
              clients through calls, screen sharing and regular progress
              updates, so distance never slows a project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Custom Software vs Ready-Made Software
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Custom software
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Ready-made software
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Fit with your process
                    </td>
                    <td className="px-3 py-3">Built around it</td>
                    <td className="px-3 py-3">You adapt to it</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Features
                    </td>
                    <td className="px-3 py-3">Only what you need</td>
                    <td className="px-3 py-3">Many you never use</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Integrations
                    </td>
                    <td className="px-3 py-3">Connects with your tools</td>
                    <td className="px-3 py-3">Often limited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Ownership and control
                    </td>
                    <td className="px-3 py-3">Terms agreed upfront</td>
                    <td className="px-3 py-3">Vendor controls roadmap</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Growth
                    </td>
                    <td className="px-3 py-3">Scales with you</td>
                    <td className="px-3 py-3">Limited by plan</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      Starting cost
                    </td>
                    <td className="px-3 py-3">Higher</td>
                    <td className="px-3 py-3">Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Ready-made tools work for simple, common needs. Custom software is
              the better long-term choice when your process is unique or your
              business is growing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Software Development Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Check real projects:</strong> ask for live links, not
                screenshots.
              </li>
              <li>
                <strong>Read client feedback:</strong> and talk to past clients
                if you can.
              </li>
              <li>
                <strong>Get a written scope:</strong> vague quotes cause surprise
                costs.
              </li>
              <li>
                <strong>Confirm ownership:</strong> source code and data access
                should be clear.
              </li>
              <li>
                <strong>Ask about security:</strong> how logins, data and
                payments are protected.
              </li>
              <li>
                <strong>Ask about support:</strong> who fixes problems after
                launch.
              </li>
              <li>
                <strong>Be careful with very low quotes:</strong> they often mean
                missing features.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>250+ projects and 270+ clients delivered</li>
              <li>4.7/5 client rating</li>
              <li>
                <strong>Business-first approach:</strong> we focus on enquiries,
                orders and efficiency, not just code
              </li>
              <li>
                <strong>One team for everything:</strong> software, design,
                cloud and{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/digital-marketing"
                  className="text-blue-600 hover:underline"
                >
                  digital marketing
                </Link>
                , so your software is built and promoted together
              </li>
              <li>
                <strong>Transparent communication:</strong> clear scope, regular
                updates, honest advice
              </li>
              <li>
                <strong>Support after launch:</strong> we stay with you as you
                grow
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Your Free Software Consultation
            </h3>

            <p>
              Tell us what you want to build or fix. We will suggest the
              simplest, most practical way to do it, with a clear scope and
              timeline, and no pressure.
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Message us
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Request a free quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is the best software development company in Lucknow?
                </h4>
                <p>
                  The best company is the one that shows real projects, gives a
                  clear scope and supports you after launch. Compare portfolios
                  and reviews before you decide.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much does custom software development cost in Lucknow?
                </h4>
                <p>
                  It depends on features, users, integrations and timeline.
                  Zentrix Infotech gives a clear quote after a free
                  consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to build custom software?
                </h4>
                <p>
                  Small tools take a few weeks. ERP, CRM or multi-user platforms
                  usually take a few months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Does Zentrix Infotech build mobile apps?
                </h4>
                <p>Yes. We build Android, iOS and cross-platform apps.</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you build ERP and CRM software for my business?
                </h4>
                <p>
                  Yes. We build ERP and CRM systems around your sales, stock,
                  accounts and customer follow-up process.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you work with small businesses and startups?
                </h4>
                <p>
                  Yes. We can start with a small, focused version of your
                  software and add features as you grow.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own the source code?
                </h4>
                <p>
                  Ownership terms are agreed in writing before the project
                  starts.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>Yes. We provide maintenance, bug fixes and updates.</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can you work with Lucknow clients remotely?
                </h4>
                <p>
                  Yes. We work through calls, screen sharing and regular progress
                  reports.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. Can you improve my existing software?
                </h4>
                <p>Yes. We can fix, redesign or extend existing systems.</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  11. How do I get started?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message us on WhatsApp, or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>{" "}
                  for a free consultation.
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
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/web-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Web Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/mobile-app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/digital-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/seo-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="lucknow"
              currentSlug="/software-development-company-in-lucknow"
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