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
      name: "Which is the best IT company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best IT company is the one that fits your needs, budget and communication style. Check live projects, client feedback and support terms before choosing. Zentrix Infotech shares its portfolio and case studies openly so you can judge our work.",
      },
    },
    {
      "@type": "Question",
      name: "What services does an IT company provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically web development, software development, mobile apps, UI/UX design, cloud solutions and digital marketing. Zentrix Infotech offers all six, so your technology and marketing can be planned together by one team.",
      },
    },
    {
      "@type": "Question",
      name: "How much do IT services cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the type of solution, features, integrations, design depth, hosting and support. Share your requirements and we will prepare a clear, itemised quotation, with an option to start in phases.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build custom software for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom software around your workflows, including internal tools, portals, dashboards and automation. We start by understanding your process so the software fixes real problems, not imagined ones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop websites and mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build business websites, ecommerce stores, web applications and native or cross-platform mobile apps. We will also tell you honestly whether a website, an app or both makes sense first.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide cloud services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer cloud solutions covering scalable infrastructure, deployment and migration, aimed at improving performance, security and business continuity. Share your current setup and we will recommend a suitable approach.",
      },
    },
    {
      "@type": "Question",
      name: "Can a startup work with Zentrix Infotech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with startups and established businesses. For early-stage ideas we often suggest a focused first version, so you can test demand before investing in every feature.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance and support covering updates, bug fixes, performance improvements and security checks. We can suggest a support arrangement that fits your project and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside your office location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with clients through calls, video meetings and WhatsApp, supporting businesses across India, including Lucknow. Please tell us your preferred way of working when you get in touch.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get an IT services quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your goals and requirements, and we will send a quotation.",
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
              IT Company in Lucknow – One Technology Partner for Your Website,
              Software, Apps and Growth
            </h2>

            <p>
              Many growing businesses end up with a patchwork of technology. One
              vendor built the website. Another made an app. A freelancer set up
              the hosting. Someone else runs the ads. When something breaks or
              needs to connect to something else, nobody owns the problem.
            </p>

            <p>
              Zentrix Infotech is an IT company built to remove that friction.
              We design, build and support websites, software, mobile apps,
              cloud systems and digital marketing under one team, so your
              technology works together and you have one partner to call. We
              work with businesses across India, and we support Lucknow
              businesses through calls, video meetings and WhatsApp.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free IT Consultation
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
              What Does an IT Company Actually Do for a Business?
            </h3>

            <p>
              An IT company turns a business need into working technology. In
              practice that means:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Building the tools your customers and staff use, such as
                websites, apps and internal software.
              </li>
              <li>
                Connecting those tools so data moves between them instead of
                being typed twice.
              </li>
              <li>
                Hosting and securing them so they stay fast, available and
                safe.
              </li>
              <li>
                Improving them over time as your business, customers and market
                change.
              </li>
              <li>
                Helping people find them, because a system nobody visits does
                not help the business.
              </li>
            </ul>

            <p>
              A good IT partner also tells you what you do not need. Not every
              business requires custom software or an app on day one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your IT Company in Lucknow?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Six services under one roof.</strong> Web development,
                UI/UX design, mobile apps, software development, cloud
                solutions and digital marketing.
              </li>
              <li>
                <strong>Proven delivery.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Business-first approach.</strong> We start with your
                goal and customers, then choose the technology.
              </li>
              <li>
                <strong>Modern technology.</strong> Our web development stack
                includes React.js, Next.js, Node.js, Python, TypeScript,
                MongoDB, PostgreSQL and Firebase.
              </li>
              <li>
                <strong>Real, checkable work.</strong> Our portfolio spans
                e-commerce, healthcare, education, hospitality, interiors and
                construction, and you can open the live projects.
              </li>
              <li>
                <strong>Clear communication.</strong> Scope, timelines and
                costs are agreed in writing, and you get regular updates.
              </li>
              <li>
                <strong>Support after launch.</strong> We stay available for
                fixes, updates and improvements.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our IT Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Web Development.</strong> Fast, responsive, SEO-friendly
                websites and web applications, from business sites to ecommerce
                stores. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Software Development.</strong> Custom software to
                improve efficiency: internal tools, portals, dashboards and
                workflow systems built around how your team really works. See
                our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  software development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Mobile App Development.</strong> Native and
                cross-platform apps for Android and iOS that give customers a
                direct, convenient way to use your business. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  mobile app development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>UI/UX Design.</strong> Interfaces that are clear,
                attractive and built to convert, so users can reach their goal
                without confusion. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Cloud Solutions.</strong> Scalable cloud infrastructure
                and services that support performance, security and business
                continuity, including deployment and migration. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Digital Marketing.</strong> Strategic campaigns that
                help customers find the technology you build: SEO, social media
                and targeted ads. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/digital-marketing"
                  className="text-blue-600 hover:underline"
                >
                  digital marketing
                </Link>{" "}
                service.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an IT Services Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              IT Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Startups.</strong> A lean website or MVP, a clean brand
                and a path to scale without rebuilding everything.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Websites with
                appointment booking, doctor and department pages, and accurate
                emergency information. Jigyasa Hospital and Oracle Eye Hospital
                are among our healthcare projects in Moradabad.
              </li>
              <li>
                <strong>Education and institutions.</strong> Admissions,
                notices, resources and parent communication in one place, as in
                our KDEDU and PSSIC projects.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Catalogues, checkout,
                order management and delivery flows, as in The Buyzaar Mart,
                HerbsFox and Deal360.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project pages,
                enquiry capture and marketing, as in our MTBOSS platform.
              </li>
              <li>
                <strong>Hospitality and events.</strong> Elegant booking-focused
                websites such as Kairvi Fort Resort and PS Decor.
              </li>
              <li>
                <strong>Manufacturers and exporters.</strong> Product
                catalogues and quote forms for buyers who search online. Read
                our guide on{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/export-website-development-for-exporters"
                  className="text-blue-600 hover:underline"
                >
                  export website development
                </Link>
                .
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why One IT Partner Beats Several Vendors
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-semibold text-gray-900">
                      With separate vendors
                    </th>
                    <th className="py-3 font-semibold text-gray-900">
                      With one IT company
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      Each vendor blames the other when something breaks
                    </td>
                    <td className="py-3">One team owns the whole result</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      Design, code and marketing rarely match
                    </td>
                    <td className="py-3">One plan covers all three</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      You repeat your business story every time
                    </td>
                    <td className="py-3">
                      The team already knows your goals
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      Hosting, updates and security are unclear
                    </td>
                    <td className="py-3">
                      Support is defined from the start
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Costs are hard to compare</td>
                    <td className="py-3">
                      One scope and one itemised quotation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              That does not mean you must buy everything from us. Many clients
              start with one service and add others later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Process: How We Work With You
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We understand your business,
                customers, systems and goals.
              </li>
              <li>
                <strong>Planning.</strong> Scope, features, timeline and budget
                are agreed in writing.
              </li>
              <li>
                <strong>Design.</strong> Wireframes and screens you can review
                before development.
              </li>
              <li>
                <strong>Development.</strong> We build in stages, with demos
                along the way.
              </li>
              <li>
                <strong>Testing.</strong> Functionality, speed, devices and
                security are checked.
              </li>
              <li>
                <strong>Launch.</strong> Deployment, hosting setup and go-live
                support.
              </li>
              <li>
                <strong>Support and Growth.</strong> Maintenance, improvements
                and, if needed, marketing.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an IT Company in Lucknow
            </h3>

            <p>Whoever you hire, ask these questions:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Can I see live work?</strong> A portfolio you can open
                matters more than a promise.
              </li>
              <li>
                <strong>Who will do the work, and who will I talk to?</strong>{" "}
                Ask who the contact person is.
              </li>
              <li>
                <strong>How do you handle scope changes?</strong> Surprises in
                cost usually start here.
              </li>
              <li>
                <strong>What happens after launch?</strong> Ask about support,
                updates and bug fixes in writing.
              </li>
              <li>
                <strong>Do I own the code and content?</strong> You should.
              </li>
              <li>
                <strong>How will we communicate?</strong> Look for regular
                updates, not silence between milestones.
              </li>
            </ul>

            <p>
              We are glad to answer every one of these before you commit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Do IT Services Cost in Lucknow?
            </h3>

            <p>
              There is no single price, because projects vary. Cost depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                The type of solution: website, app, software, cloud setup or a
                combination.
              </li>
              <li>Features, integrations and design depth.</li>
              <li>Number of users, platforms and devices.</li>
              <li>Hosting, security and compliance needs.</li>
              <li>Ongoing support and maintenance.</li>
            </ul>

            <p>
              A five-page business website and a custom operations platform are
              very different projects. Share your needs and we will send a
              clear, itemised quotation, and suggest a phased plan if you would
              rather start small.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Experience and Trust Signals
            </h3>

            <p>
              You can review our{" "}
              <Link
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                portfolio
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.zentrixinfotech.com/projects"
                className="text-blue-600 hover:underline"
              >
                case studies
              </Link>{" "}
              before getting in touch. Clients describe the work in simple
              terms. Vasterior called their site modern and professional,
              Alluring Glimpses said it was easy for clients to navigate, and
              Kdedu said their college website makes resources easy for
              students and faculty to reach. These are client statements, and
              results vary by business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with an IT Company in Lucknow
            </h3>

            <p>
              Good technology should feel simple: it works, it is easy to use
              and someone answers when you call. Tell us about your business,
              what is not working and what you would like to build. We will
              review it, suggest the right next step and give you a clear
              quotation, with no obligation.
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
                Talk to Our IT Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your Project
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
              Frequently Asked Questions About IT Services in Lucknow
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is the best IT company in Lucknow?
                </h4>
                <p>
                  The best IT company is the one that fits your needs, budget
                  and communication style. Check live projects, client feedback
                  and support terms before choosing. Zentrix Infotech shares its
                  portfolio and case studies openly so you can judge our work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What services does an IT company provide?
                </h4>
                <p>
                  Typically web development, software development, mobile apps,
                  UI/UX design, cloud solutions and digital marketing. Zentrix
                  Infotech offers all six, so your technology and marketing can
                  be planned together by one team.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much do IT services cost in Lucknow?
                </h4>
                <p>
                  Cost depends on the type of solution, features, integrations,
                  design depth, hosting and support. Share your requirements and
                  we will prepare a clear, itemised quotation, with an option to
                  start in phases.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you build custom software for my business?
                </h4>
                <p>
                  Yes. We build custom software around your workflows, including
                  internal tools, portals, dashboards and automation. We start
                  by understanding your process so the software fixes real
                  problems, not imagined ones.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you develop websites and mobile apps?
                </h4>
                <p>
                  Yes. We build business websites, ecommerce stores, web
                  applications and native or cross-platform mobile apps. We will
                  also tell you honestly whether a website, an app or both makes
                  sense first.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you provide cloud services?
                </h4>
                <p>
                  Yes. We offer cloud solutions covering scalable
                  infrastructure, deployment and migration, aimed at improving
                  performance, security and business continuity. Share your
                  current setup and we will recommend a suitable approach.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can a startup work with Zentrix Infotech?
                </h4>
                <p>
                  Yes. We work with startups and established businesses. For
                  early-stage ideas we often suggest a focused first version, so
                  you can test demand before investing in every feature.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide maintenance and support covering updates, bug
                  fixes, performance improvements and security checks. We can
                  suggest a support arrangement that fits your project and
                  budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you work with businesses outside your office location?
                </h4>
                <p>
                  Yes. We work with clients through calls, video meetings and
                  WhatsApp, supporting businesses across India, including
                  Lucknow. Please tell us your preferred way of working when you
                  get in touch.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get an IT services quotation?
                </h4>
                <p>
                  Call +91 72488 00839, message us on WhatsApp at
                  +91 63970 36898, email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>{" "}
                  or use the contact page. Share your goals and requirements,
                  and we will send a quotation.
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
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
              currentSlug="/it-company-in-lucknow"
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