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
      name: "Which is the best software company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your needs, budget and communication style. Review live projects, client feedback and support terms before deciding. Zentrix Infotech shares its portfolio and case studies openly so you can judge our work.",
      },
    },
    {
      "@type": "Question",
      name: "What does a software company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A software company designs, builds, tests and maintains software such as business applications, web platforms and mobile apps. Zentrix Infotech also handles UI/UX design, integrations, cloud deployment and post-launch support.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, user roles, platforms, integrations, design and security needs. A simple internal tool costs far less than a multi-role platform. Share your requirements and we will prepare an itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does software development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release usually takes less time than a large multi-module system. We confirm a realistic timeline after requirement analysis, before development begins.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose custom or ready-made software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ready-made suits standard processes and tight timelines. Custom suits unique workflows, multiple systems to connect or tools you outgrow. We help you decide honestly, and often suggest a mix of both.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build software for a small business or startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with startups and established businesses. For early ideas, we suggest a focused first version so you can test demand and improve before investing in a full system.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate software with my existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect websites, payments, messaging, CRM and other systems so data flows automatically. We review your current tools first and tell you what can be integrated and what may need replacing.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the software and data after development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be clear from the start. We agree in writing who owns the source code, designs and data before work begins, so there are no surprises when the project ends.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after the software is launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance and support including bug fixes, updates, performance improvements and new features. We can suggest a support arrangement that suits your software and budget.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a software development quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your requirements, and we will send a customised quotation.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development",
  serviceType: "Custom Software Development",
  description:
    "Custom software, web applications, workflow automation, integrations, dashboards and cloud-ready systems for startups and established businesses.",
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
  url: "https://www.zentrixinfotech.com/lucknow/software-company-in-lucknow",
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
      name: "Software Development",
      item: "https://www.zentrixinfotech.com/services/software-development",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Software Company in Lucknow",
      item: "https://www.zentrixinfotech.com/lucknow/software-company-in-lucknow",
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
              Software Company in Lucknow – Custom Software That Fits the Way
              Your Business Really Works
            </h2>

            <p>
              Ask a business owner what slows their team down and the answers
              sound familiar. The same data is typed into three places. Reports
              take a day to compile. Customer details live in a notebook, a
              spreadsheet and someone&apos;s phone. The tools they pay for
              almost do the job, but never quite.
            </p>

            <p>
              That gap between how your business works and how your software
              behaves is where growth quietly leaks away. Zentrix Infotech is a
              software company that closes that gap. We build custom software,
              web applications and mobile apps around your real processes, so
              your team spends less time fighting tools and more time serving
              customers.
            </p>

            <p>
              We work with businesses across India, and we support Lucknow
              businesses through calls, video meetings and WhatsApp.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Software Consultation
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
              Do You Need Custom Software, or Is Ready-Made Enough?
            </h3>

            <p>
              A good software company will tell you this honestly, because the
              wrong choice wastes money either way.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Ready-made software is usually enough when…
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Custom software is worth considering when…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Your process is standard and common to your industry
                    </td>
                    <td className="px-3 py-3">
                      Your process is a real competitive advantage
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      You need something running this week
                    </td>
                    <td className="px-3 py-3">
                      Off-the-shelf tools force awkward workarounds
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Your team is small and needs are simple
                    </td>
                    <td className="px-3 py-3">
                      You pay for many features you never use
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Budget is very tight</td>
                    <td className="px-3 py-3">
                      You need several systems to work together
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">
                      Nothing unique needs to be tracked
                    </td>
                    <td className="px-3 py-3">
                      Your data, security or integrations are specific
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Many businesses end up with a mix: ready-made tools for common
              tasks and custom software where it counts. We help you work out
              which parts belong where, before any development begins.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your Software Company in Lucknow?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven delivery.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Process first, code second.</strong> We map how work
                actually flows before we design a single screen.
              </li>
              <li>
                <strong>A modern, verifiable stack.</strong> Our development
                stack includes React.js, Next.js, Node.js, Python, TypeScript,
                JavaScript, PostgreSQL, MongoDB and Firebase.
              </li>
              <li>
                <strong>Design and engineering together.</strong>{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                is part of the build, so software is not just correct but easy
                to use.
              </li>
              <li>
                <strong>Real projects across industries.</strong> Our portfolio
                covers retail and franchise operations, healthcare, education,
                hospitality, interiors and construction.
              </li>
              <li>
                <strong>Honest communication.</strong> Scope, timelines and
                costs are agreed in writing, with regular progress updates.
              </li>
              <li>
                <strong>Support after launch.</strong> We stay available for
                fixes, updates and improvements.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom Business Software.</strong> Applications designed
                around your workflows: orders, inventory, billing, approvals,
                scheduling or customer management.
              </li>
              <li>
                <strong>Web Application Development.</strong> Browser-based
                systems that work on any device without installation, from
                customer portals to internal dashboards. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Mobile App Development.</strong> Native and
                cross-platform apps for Android and iOS that put your service in
                your customer&apos;s or staff member&apos;s pocket. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  mobile app development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Workflow Automation.</strong> Software that replaces
                repeated manual steps such as copying data, sending reminders
                and preparing reports, reducing errors and saving staff time.
              </li>
              <li>
                <strong>Software Integration.</strong> Connecting your website,
                payment tools, messaging, CRM and other systems so data moves
                automatically instead of being typed twice.
              </li>
              <li>
                <strong>Dashboards and Reporting.</strong> Clear views of sales,
                operations and customer activity, so decisions rest on current
                numbers rather than guesses.
              </li>
              <li>
                <strong>Cloud-Ready Software.</strong> Applications built to run
                on scalable cloud infrastructure, supporting performance,
                security and business continuity. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>
                .
              </li>
              <li>
                <strong>Software Maintenance and Support.</strong> Bug fixes,
                updates, performance tuning and new features as your business
                changes.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Software Development Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Retail and franchise businesses.</strong> Ordering,
                delivery management and franchise operations, the kind of flows
                behind our work for The Buyzaar Mart.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Appointment booking,
                patient enquiry handling and doctor and department information,
                with careful treatment of patient data.
              </li>
              <li>
                <strong>Education and institutions.</strong> Admissions,
                notices, resources and parent or student communication, as in
                our KDEDU and PSSIC projects.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project listings,
                enquiry tracking and material or project management, in the
                spirit of our MTBOSS platform.
              </li>
              <li>
                <strong>Manufacturing and trading.</strong> Order tracking,
                quotation tools and catalogue management.
              </li>
              <li>
                <strong>Service businesses.</strong> Booking, dispatch, staff
                tasks and customer updates.
              </li>
              <li>
                <strong>Startups.</strong> A focused first product to test your
                idea before building everything.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We study your processes, users and
                the problem you want to solve.
              </li>
              <li>
                <strong>Requirements and Planning.</strong> Features,
                priorities, timeline and budget are agreed in writing.
              </li>
              <li>
                <strong>Design.</strong> Wireframes and screens you can review
                before development starts.
              </li>
              <li>
                <strong>Development.</strong> We build in stages, with demos so
                you can steer as we go.
              </li>
              <li>
                <strong>Testing.</strong> Functionality, performance, devices
                and security are checked.
              </li>
              <li>
                <strong>Deployment.</strong> Hosting setup, data migration and
                go-live support.
              </li>
              <li>
                <strong>Support and Improvement.</strong> Maintenance, training
                help and new features as you grow.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your Software, Your Data: Ownership and Security
            </h3>

            <p>
              These are the questions businesses should ask any software
              company, so here are our answers in plain terms:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Access control.</strong> Software should show each
                person only what they need, with sensible roles and permissions.
              </li>
              <li>
                <strong>Data protection.</strong> Sensitive data needs careful
                storage and secure handling, especially in healthcare and
                finance.
              </li>
              <li>
                <strong>Backups.</strong> Systems need regular backups and a
                clear recovery plan.
              </li>
              <li>
                <strong>Ownership.</strong> You should know who owns the source
                code, designs and data. We agree this in writing at the start.
              </li>
              <li>
                <strong>Documentation.</strong> Your software should not depend
                on one person&apos;s memory.
              </li>
            </ul>

            <p>
              Specific security measures depend on the project, and we will
              explain them clearly in your proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Software Projects Usually Go Wrong, and How We Avoid It
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Building everything at once.</strong> We favour a
                focused first release you can use and learn from.
              </li>
              <li>
                <strong>Unclear requirements.</strong> We write them down and
                confirm them with you before development.
              </li>
              <li>
                <strong>No time for testing.</strong> Testing is planned from
                day one.
              </li>
              <li>
                <strong>Software nobody adopts.</strong> We design with the
                people who will use it and keep screens simple.
              </li>
              <li>
                <strong>No plan after launch.</strong> Support and improvements
                are part of the conversation from the start.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Custom Software Cost in Lucknow?
            </h3>

            <p>
              There is no fixed price, because software varies widely. Cost
              depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The number and complexity of features.</li>
              <li>
                Number of user roles and platforms (web, Android, iOS).
              </li>
              <li>
                Integrations with payments, messaging, accounting or other
                tools.
              </li>
              <li>Design depth and admin panel needs.</li>
              <li>Data migration and security requirements.</li>
              <li>Ongoing maintenance and support.</li>
            </ul>

            <p>
              A simple internal tool costs far less than a multi-role platform
              with payments and live tracking. Share your requirements and we
              will send a clear, itemised quotation, and suggest a phased plan
              if you prefer to start small.
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
              before contacting us. Clients describe the experience in practical
              terms. Jigyasa Hospital&apos;s Dr. C.P. Singh called the website
              clean, professional and easy for appointment booking, and Kdedu
              said their platform makes essential resources easy for students
              and faculty to reach. These are client statements, and results
              vary by business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Software Company in Lucknow
            </h3>

            <p>
              You do not need a perfect specification to begin. Tell us what
              slows your team down, what you wish your software did and what you
              have already tried. We will review it, suggest the right approach
              and give you a clear quotation, with no obligation.
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
                Talk to Our Software Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your Software Idea
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
                  1. Which is the best software company in Lucknow?
                </h4>
                <p>
                  The best company is the one that fits your needs, budget and
                  communication style. Review live projects, client feedback and
                  support terms before deciding. Zentrix Infotech shares its
                  portfolio and case studies openly so you can judge our work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What does a software company do?
                </h4>
                <p>
                  A software company designs, builds, tests and maintains
                  software such as business applications, web platforms and
                  mobile apps. Zentrix Infotech also handles UI/UX design,
                  integrations, cloud deployment and post-launch support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does custom software cost in Lucknow?
                </h4>
                <p>
                  Cost depends on features, user roles, platforms, integrations,
                  design and security needs. A simple internal tool costs far
                  less than a multi-role platform. Share your requirements and
                  we will prepare an itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does software development take?
                </h4>
                <p>
                  It depends on scope. A focused first release usually takes
                  less time than a large multi-module system. We confirm a
                  realistic timeline after requirement analysis, before
                  development begins.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Should I choose custom or ready-made software?
                </h4>
                <p>
                  Ready-made suits standard processes and tight timelines.
                  Custom suits unique workflows, multiple systems to connect or
                  tools you outgrow. We help you decide honestly, and often
                  suggest a mix of both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you build software for a small business or startup?
                </h4>
                <p>
                  Yes. We work with startups and established businesses. For
                  early ideas, we suggest a focused first version so you can
                  test demand and improve before investing in a full system.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you integrate software with my existing tools?
                </h4>
                <p>
                  Yes. We connect websites, payments, messaging, CRM and other
                  systems so data flows automatically. We review your current
                  tools first and tell you what can be integrated and what may
                  need replacing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Who owns the software and data after development?
                </h4>
                <p>
                  Ownership should be clear from the start. We agree in writing
                  who owns the source code, designs and data before work begins,
                  so there are no surprises when the project ends.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after the software is launched?
                </h4>
                <p>
                  Yes. We offer maintenance and support including bug fixes,
                  updates, performance improvements and new features. We can
                  suggest a support arrangement that suits your software and
                  budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get a software development quotation?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message us on WhatsApp at{" "}
                  <a
                    href="https://wa.me/916397036898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 63970 36898
                  </a>
                  , email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>{" "}
                  or use the contact page. Share your requirements, and we will
                  send a customised quotation.
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
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
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
                    Cloud Solutions
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
              currentSlug="/software-company-in-lucknow"
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