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
      name: "Which is an affordable software development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zentrix Infotech serves Lucknow businesses with budget aware custom software, web and mobile apps, using written scope and milestone payments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the software development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on features, users, integrations and timeline. We share a written estimate after a discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple tools cost less than multi-module systems. A free discovery call gives you a clear, itemised proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer low cost software development in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We reduce cost by launching a focused first version, reusing proven components and avoiding unneeded features.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build affordable custom software for small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build for startups and small firms, and we can start with one core module and expand later.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build ERP software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build ERP systems in phases, starting with the modules you need most, such as sales, stock or accounts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients remotely with calls, demos and regular updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build mobile apps too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build native and cross-platform iOS and Android apps that connect with your software.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the software, and do you provide support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership terms are agreed in writing before work begins. We also offer maintenance, updates and backups after launch.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will schedule a free discovery call.",
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
              Affordable Software Development Company in Lucknow
            </h2>

            <p>
              Every growing business in Lucknow reaches a point where
              spreadsheets, paper registers and scattered WhatsApp groups stop
              working. Orders get missed, data sits in five places, and
              customers expect faster service. Software solves this, but many
              owners delay because they fear a heavy bill.
            </p>

            <p>
              Zentrix Infotech is an affordable software development company in
              Lucknow for businesses that want to start small, pay for what
              they need, and grow step by step. We deliver custom software
              development, web applications, mobile apps and integrations with
              a clear scope, written milestones and a budget you can plan
              around.
            </p>

            <p>
              Have a project in mind? Call{" "}
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
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Project Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affordable Software Development Really Means
            </h3>

            <p>
              Affordable does not mean the lowest quote. A very low quote often
              hides missing features, weak security, no documentation and no
              support after launch. You then pay again to fix what was skipped.
            </p>

            <p>
              For us, an affordable software company in Lucknow should offer
              four things:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                You pay for features that solve a real business problem, not a
                long wish list.
              </li>
              <li>
                You know the scope, timeline and payment milestones before work
                starts.
              </li>
              <li>
                The software is built cleanly, so later changes cost less.
              </li>
              <li>
                You own what we build and can grow it when your business grows.
              </li>
            </ul>

            <p>
              This is how we approach low cost software development in Lucknow:
              less waste, not lower quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need Custom Software
            </h3>

            <p>
              Lucknow has a varied economy. Retailers and distributors manage
              stock and credit. Schools and coaching centres manage admissions,
              fees and results. Clinics and hospitals manage appointments and
              records. Hotels and event companies manage bookings. Handicraft
              and chikankari sellers want buyers beyond the city. Builders and
              real estate firms track leads and site visits.
            </p>

            <p>
              Ready-made tools cover only part of these needs. You pay monthly
              for features you never use and still miss the one workflow that
              matters. Business software development in Lucknow, built around
              how you already work, saves staff time and reduces errors every
              day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Services in Lucknow We Offer
            </h3>

            <p>
              Our software development services in Lucknow cover the full range
              of business needs:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business management software:</strong> Orders, billing,
                inventory, staff tasks and reports in one place.
              </li>
              <li>
                <strong>Custom web applications:</strong> Customer portals,
                dashboards, booking systems and admin panels that run in any
                browser.
              </li>
              <li>
                <strong>E-commerce platforms:</strong> Online stores with
                catalogues, payments, delivery tracking and order management,
                similar in spirit to our work on The Buyzaar Mart and HerbsFox.
              </li>
              <li>
                <strong>Education platforms:</strong> Admissions, student
                access and resource sharing, as in our work for KDEDU.
              </li>
              <li>
                <strong>
                  Affordable ERP software development in Lucknow:
                </strong>{" "}
                Connected modules for sales, stock, accounts and staff, built
                in phases so you do not pay for everything at once.
              </li>
              <li>
                <strong>
                  Affordable web and mobile app development in Lucknow:
                </strong>{" "}
                Native and cross-platform iOS and Android apps that connect to
                your software.
              </li>
              <li>
                <strong>Software integration:</strong> Your website, payment
                tools and accounting systems connected, so nobody retypes data.
              </li>
              <li>
                <strong>Cloud setup:</strong> Scalable hosting, backups and
                deployment that keep your system fast and available.
              </li>
            </ul>

            <p>
              If you are unsure what you need, we help you decide before you
              spend anything on development.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Affordable Custom Software for Small Business and Startups in
              Lucknow
            </h3>

            <p>
              Small businesses and startups rarely need a huge system on day
              one. They need one or two modules that remove the biggest daily
              pain, such as billing, bookings, lead tracking or order
              management.
            </p>

            <p>
              As a software company for startups in Lucknow, we suggest a
              focused first version, often called a minimum viable product. You
              launch sooner, learn from real users, and spend the next part of
              your budget on features that prove useful. This keeps affordable
              custom software for small business in Lucknow practical rather
              than risky.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Six Ways We Keep Software Development Cost in Lucknow Predictable
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Scope in writing.</strong> Before development begins,
                we list features, screens and outcomes. Changes are discussed
                and priced before they are added, so there are no surprise
                bills.
              </li>
              <li>
                <strong>A first release that matters.</strong> We identify the
                few features with the highest value and launch those first.
                Real users give feedback, and the next phase is based on facts
                rather than guesses.
              </li>
              <li>
                <strong>Milestone payments.</strong> Work is divided into
                design, core build, testing and launch. You see progress at
                every stage.
              </li>
              <li>
                <strong>Proven building blocks.</strong> Login, user roles,
                notifications and reporting follow tested patterns, so your
                budget goes toward what makes your business different.
              </li>
              <li>
                <strong>Technology that fits.</strong> We choose tools based on
                your needs, your team and your future plans. Simpler choices
                cost less to build and maintain.
              </li>
              <li>
                <strong>Support planned early.</strong> Good software needs
                updates, backups and security checks. We discuss these costs
                upfront so ownership stays affordable after launch.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Custom Software Cost in Lucknow?
            </h3>

            <p>
              This is the most common question we hear, and an honest answer is
              that it depends. Cost is shaped by the number of features, the
              number of user roles, integrations with other tools, design
              complexity, the timeline, and the support you want after launch.
              A simple booking tool and a multi-branch ERP are very different
              projects.
            </p>

            <p>
              We do not publish fixed prices on this page. After a short
              discovery call, you receive a written proposal with a clear
              breakdown and milestone based payments, so you can compare it
              fairly and decide with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Budget Software Development Company vs Cheap Vendor
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Area
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Cheap software deal
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Budget friendly work with Zentrix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Scope
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Vague, changes often
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Written and agreed
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Pricing
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Low quote, extra charges later
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Milestone based and transparent
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Quality
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Rushed, little testing
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Tested before every release
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Security
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Often ignored
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Planned from the start
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Ownership
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Unclear
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      You own your software
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      After launch
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      No support
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Support and update options
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Seven Step Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> We listen to your business,
                team and goals.
              </li>
              <li>
                <strong>Requirement planning:</strong> We write down features,
                users and priorities.
              </li>
              <li>
                <strong>Proposal:</strong> You receive scope, timeline and
                milestone terms.
              </li>
              <li>
                <strong>Design:</strong> We prepare simple screens so you can
                see the software before it is built.
              </li>
              <li>
                <strong>Development:</strong> Our team builds in stages with
                regular demos.
              </li>
              <li>
                <strong>Testing:</strong> We check features, devices, speed and
                security.
              </li>
              <li>
                <strong>Launch and support:</strong> We deploy, train your team
                and stay available for improvements.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof From Our Work
            </h3>

            <p>
              Our homepage shows a 4.7 out of 5 rating, more than 250 projects
              and more than 270 clients. Our portfolio includes The Buyzaar
              Mart, a retail franchise platform with ordering, delivery
              management and franchise operations. It also includes PS Decor in
              event and wedding design, Vasterior and Alluring Glimpses in
              interior design, KDEDU in education and HerbsFox in online
              wellness retail.
            </p>

            <p>
              Clients speak about their experience in their own words. Dr. C.P.
              Singh of Jigyasa Hospital described a clean, professional website
              with easy appointment booking and a steady rise in patient
              inquiries through Google and social media. That was web and
              marketing work, but it shows how we treat usability and results
              across projects.
            </p>

            <p>
              Want similar results? Email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              with your requirement.
            </p>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                Explore our portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Outsourcing in Lucknow, Delivered Remotely
            </h3>

            <p>
              If you search for a software development company near me in
              Lucknow, here is how we work. Our offices are in Moradabad and
              Ghaziabad, and we serve Lucknow clients through video calls,
              shared project boards, written updates and regular demos.
              Software development outsourcing in Lucknow works well because
              most software work does not need daily in-person meetings, and
              remote collaboration keeps overhead and your cost down. If a
              face-to-face workshop helps at a key stage, we can discuss it
              during planning.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Find the Best Affordable Software Developers in Lucknow
            </h3>

            <p>Judge any vendor, including us, on evidence:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask for live projects and talk to past clients.</li>
              <li>Ask who exactly will work on your project.</li>
              <li>Insist on a written scope and milestone payments.</li>
              <li>Ask how security, backups and data ownership are handled.</li>
              <li>Ask what support costs after launch.</li>
              <li>Start with a small phase before committing to a large build.</li>
            </ul>

            <p>
              A vendor who answers these clearly is usually a safer choice than
              one who only offers a low number.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What to Prepare Before Our First Call
            </h3>

            <p>
              Write down the three biggest problems you want software to solve,
              who will use it, the tools you use today and any deadline. Rough
              notes are enough. We turn them into a clear plan.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Software Project With Zentrix Infotech
            </h3>

            <p>
              Whether you need business software, a web application, an ERP, an
              online store or a mobile app, Zentrix Infotech gives your Lucknow
              business a practical, budget aware route to software that works.
              Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or write to{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              to book a discovery call.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is an affordable software development company in
                  Lucknow?
                </h4>
                <p>
                  Zentrix Infotech serves Lucknow businesses with budget aware
                  custom software, web and mobile apps, using written scope and
                  milestone payments.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What is the software development cost in Lucknow?
                </h4>
                <p>
                  It depends on features, users, integrations and timeline. We
                  share a written estimate after a discovery call.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does custom software cost in Lucknow?
                </h4>
                <p>
                  Simple tools cost less than multi-module systems. A free
                  discovery call gives you a clear, itemised proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you offer low cost software development in Lucknow?
                </h4>
                <p>
                  Yes. We reduce cost by launching a focused first version,
                  reusing proven components and avoiding unneeded features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you build affordable custom software for small
                  business?
                </h4>
                <p>
                  Yes. We build for startups and small firms, and we can start
                  with one core module and expand later.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you build ERP software?
                </h4>
                <p>
                  Yes. We build ERP systems in phases, starting with the
                  modules you need most, such as sales, stock or accounts.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients remotely with calls, demos and regular updates.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you build mobile apps too?
                </h4>
                <p>
                  Yes. We build native and cross-platform iOS and Android apps
                  that connect with your software.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Will I own the software, and do you provide support?
                </h4>
                <p>
                  Ownership terms are agreed in writing before work begins. We
                  also offer maintenance, updates and backups after launch.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I start?
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
                  . We will schedule a free discovery call.
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
              currentSlug="/affordable-software-development-company-in-lucknow"
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