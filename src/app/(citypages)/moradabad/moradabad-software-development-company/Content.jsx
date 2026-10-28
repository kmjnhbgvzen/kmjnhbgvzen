import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Moradabad Software Development Company
            </h2>

            <p>
              Moradabad is a city that runs on enterprise. Brass and
              handicraft exporters ship across the world, wholesalers and
              retailers serve busy markets, hospitals and schools serve
              thousands of families, and a new generation of startups is
              building fast. All of these businesses share one need: software
              that keeps up with them.
            </p>

            <p>
              Zentrix Infotech is a Moradabad software development company
              with 250+ projects delivered, 270+ clients and a 4.7/5 client
              rating. We are based here, work with businesses like yours and
              build software that fits the way Moradabad actually does
              business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why a Moradabad-Based Software Company Matters
            </h3>

            <p>
              Software is not only about technology. It is about understanding
              how your business really runs: how orders come in, how payments
              are collected, how staff share information and how customers
              prefer to be reached.
            </p>

            <p>A software company rooted in Moradabad brings real advantages.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local business understanding:</strong> We know how
                export enquiries, wholesale billing, dealer networks and
                festival-season rushes shape daily work.
              </li>
              <li>
                <strong>Face-to-face meetings:</strong> Walk into our office,
                explain your process and watch the plan take shape.
              </li>
              <li>
                <strong>Faster support:</strong> Same-city teams solve
                problems quickly, without time gaps or long email chains.
              </li>
              <li>
                <strong>Practical solutions:</strong> We build what you will
                actually use, not what looks impressive in a presentation.
              </li>
              <li>
                <strong>Accountability:</strong> You know our address, our
                team and our work.
              </li>
            </ul>

            <p>
              When your software becomes part of daily operations, this
              closeness becomes very valuable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Challenges Moradabad Businesses Face
            </h3>

            <p>
              Many local businesses run on a mix of paper registers,
              spreadsheets and messaging apps. This works at first, but slows
              growth over time.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Manual billing and inventory leads to mistakes and stock
                confusion.
              </li>
              <li>
                Scattered customer data means follow-ups are missed and repeat
                sales are lost.
              </li>
              <li>
                Slow reporting leaves owners guessing about sales, stock and
                cash flow.
              </li>
              <li>
                Limited online presence costs businesses export and retail
                enquiries.
              </li>
              <li>
                Disconnected tools force staff to enter the same data again
                and again.
              </li>
              <li>
                Weak data protection puts business and customer records at
                risk.
              </li>
            </ul>

            <p>The right software removes these problems one by one.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Software Development
            </h4>

            <p>
              Software designed from scratch around your workflow, branding
              and goals, so your team does not have to bend to a generic tool.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              ERP Software Development
            </h4>

            <p>
              One connected system for inventory, purchase, sales, accounts,
              HR and production. Ideal for manufacturers, traders and
              distributors who want one source of truth.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              CRM Software Development
            </h4>

            <p>
              Track leads, follow-ups and customer history in one place, so no
              enquiry goes cold. Useful for exporters, real estate firms,
              schools and service businesses.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Secure portals and dashboards for customers, dealers, staff and
              management, accessible from any browser.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App Development
            </h4>

            <p>
              Android, iOS and cross-platform apps using Kotlin, Swift,
              Flutter and React Native that put your business in your
              customers hands.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce Development
            </h4>

            <p>
              Online stores and marketplaces with catalogues, carts, secure
              payments and order tracking, helpful for both local retail and
              export-focused catalogues.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Software Integration and API Development
            </h4>

            <p>
              Connect your billing, accounting, payment gateway, logistics and
              WhatsApp or SMS tools, so data flows automatically.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Clean, simple interfaces that your staff and customers can use
              without long training.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud Solutions
            </h4>

            <p>
              Reliable hosting, backups and scaling so your software stays
              fast and available.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              Bug fixes, updates and new features after launch, so your
              software keeps growing with you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Examples of Software We Can Build for Moradabad Businesses
            </h3>

            <p>These are typical solutions that suit local business types.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>For a handicraft exporter:</strong> A catalogue and
                enquiry portal where overseas buyers browse products, send
                requests and track orders, connected with a simple CRM for
                follow-ups.
              </li>
              <li>
                <strong>For a wholesaler or distributor:</strong> A billing
                and inventory system with dealer logins, stock alerts and
                outstanding payment reports.
              </li>
              <li>
                <strong>For a clinic or hospital:</strong> An appointment
                booking and patient record system with reminders and basic
                reporting.
              </li>
              <li>
                <strong>For a school or coaching institute:</strong>
                Admissions, fee collection, attendance and result management
                in one portal, with a parent app.
              </li>
              <li>
                <strong>For a real estate firm:</strong> Lead tracking,
                property listings and site visit scheduling with sales
                reports.
              </li>
              <li>
                <strong>For a restaurant or bakery:</strong> Online ordering,
                table booking and delivery coordination.
              </li>
              <li>
                <strong>For a startup:</strong> A lean first version of your
                product, built fast so you can test your idea before investing
                heavily.
              </li>
            </ul>

            <p>
              Our portfolio already includes e-commerce platforms, healthcare
              websites, education portals, interior studios, event brands and
              retail projects, which gives us practical experience across
              several of these areas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free consultation:</strong> We learn about your
                business, problems and goals.
              </li>
              <li>
                <strong>Requirement analysis:</strong> Features, users and
                workflows are documented clearly.
              </li>
              <li>
                <strong>Proposal:</strong> You receive a written scope,
                timeline and itemised price.
              </li>
              <li>
                <strong>Design:</strong> Clickable screens are shared for your
                approval before coding begins.
              </li>
              <li>
                <strong>Development:</strong> We build in short stages with
                regular demos and feedback.
              </li>
              <li>
                <strong>Testing:</strong> Functional, performance and security
                checks on realistic data.
              </li>
              <li>
                <strong>Deployment and training:</strong> We launch your
                software and train your team.
              </li>
              <li>
                <strong>Support:</strong> Ongoing updates and improvements as
                you grow.
              </li>
            </ol>

            <p>
              You see progress at every stage, and nothing is built without
              your approval.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Frontend:</strong> React, Next.js, HTML, CSS,
                JavaScript
              </li>
              <li>
                <strong>Backend:</strong> Node.js, PHP, Laravel
              </li>
              <li>
                <strong>Mobile:</strong> Kotlin, Swift, Flutter, React Native
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB, Firebase
              </li>
              <li>
                <strong>Integrations:</strong> Payment gateways, maps, SMS,
                email, WhatsApp and third-party APIs
              </li>
              <li>
                <strong>Hosting:</strong> Reliable cloud infrastructure for
                speed and uptime
              </li>
            </ul>

            <p>
              We choose tools that match your needs and budget rather than
              chasing trends.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security and Data Protection
            </h3>

            <p>
              Your software will hold customer details, sales figures and
              financial information, so security is part of every project.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Encrypted data transfer and secure storage</li>
              <li>
                Role-based access, so each person sees only what they need
              </li>
              <li>Strong authentication and safe payment integration</li>
              <li>Regular backups and code reviews</li>
              <li>Clean documentation and version control</li>
              <li>
                Full source code ownership for you after final payment
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Software Development
            </h3>

            <p>
              Every business is different, so we provide a custom quote. The
              main factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of modules and features</li>
              <li>Web, mobile or both</li>
              <li>Complexity of workflows and reports</li>
              <li>Third-party integrations</li>
              <li>Design requirements</li>
              <li>Hosting, support and maintenance needs</li>
            </ul>

            <p>
              As a guide, simple software can start from around Rs. 80,000,
              while ERP, CRM and larger systems cost more depending on scope.
              You always receive an itemised estimate with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Moradabad Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience:</strong> 250+ projects across many
                industries.
              </li>
              <li>
                <strong>Local office:</strong> 12/11, Buddhi Vihar Phase 2,
                Moradabad, open for meetings.
              </li>
              <li>
                <strong>Complete service:</strong> Software, apps, design,
                cloud and digital marketing under one roof.
              </li>
              <li>
                <strong>Honest advice:</strong> We tell you what to build
                first and what can wait.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear quotes and
                milestone-based payments.
              </li>
              <li>
                <strong>Plain communication:</strong> Updates in simple
                language, not technical jargon.
              </li>
              <li>
                <strong>Clear ownership:</strong> Your software and source
                code belong to you.
              </li>
              <li>
                <strong>Long-term support:</strong> We remain available long
                after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Tips Before You Start a Software Project
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Write down the three biggest problems you want the software to
                solve
              </li>
              <li>
                Involve the people who will use it daily, not only management
              </li>
              <li>
                Start with essential features and add more after real use
              </li>
              <li>
                Keep your data organised, since clean data makes migration
                easier
              </li>
              <li>
                Decide who in your team will be the main contact for the
                project
              </li>
              <li>
                Plan a small budget for training and future updates
              </li>
            </ul>

            <p>These simple steps make any software project smoother.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Work With a Software Company You Can Visit
            </h3>

            <p>
              Software is a long-term partnership, and the best partnerships
              begin with a conversation. Visit our Moradabad office or call
              us, share what you want to improve and let us show you how it
              can be done. You will get honest advice, a clear plan and a
              written quote with no obligation.
            </p>

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
                ✉️
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Visit:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does a Moradabad software development company do?
                </h4>
                <p>
                  It designs, builds, tests and supports custom software for
                  local businesses.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What software can Zentrix Infotech build?
                </h4>
                <p>
                  Custom software, web apps, ERP, CRM, mobile apps,
                  e-commerce and integrations.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does software development take?
                </h4>
                <p>
                  Simple projects take 4 to 8 weeks. Larger systems may take 3
                  to 6 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does software development cost?
                </h4>
                <p>
                  Simple software starts around Rs. 80,000. ERP and larger
                  systems cost more.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will I own the source code?
                </h4>
                <p>
                  Yes. Full ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you connect software with my current tools?
                </h4>
                <p>
                  Yes. We integrate payments, accounting, WhatsApp, SMS and
                  other systems.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer bug fixes, updates and monthly maintenance
                  plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I meet your team in person?
                </h4>
                <p>
                  Yes. Visit our Moradabad office or call to book a free
                  consultation.
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
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/best-software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Best Software Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/software-development-firm-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Firm in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/moradabad-software-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Moradabad Software Development Services
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
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/moradabad-software-development-company"
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