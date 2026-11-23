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
        text: "No single company is best for everyone. Choose one whose live work, technology, communication and support fit your project. Zentrix Infotech shares its portfolio and case studies so you can judge our work directly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose a software development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask to see live work, meet the people who will build it, review a written scope, confirm ownership and security terms, and check post-launch support. Compare at least three proposals on the same questions.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, user roles, platforms, integrations, design and security needs. A simple internal tool costs far less than a multi-role platform. Share requirements and we will prepare an itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does software development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release usually takes less time than a large multi-module system. We confirm a realistic, phased timeline after requirement analysis, before development begins.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Zentrix Infotech use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our web development page lists React.js, Next.js, Node.js, Python, JavaScript, TypeScript, MongoDB, PostgreSQL, Firebase and Redux. We recommend a stack that suits your project and explain our reasoning.",
      },
    },
    {
      "@type": "Question",
      name: "Can a small business or startup work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with startups and established businesses. For early ideas, we often suggest a focused first phase, so you can test the idea and learn before investing in a full system.",
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
      name: "Can you connect software to my existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect websites, payments, messaging and other systems so data flows automatically. We review your current tools first and tell you what can be integrated and what may need replacing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance and support covering bug fixes, updates, performance improvements and new features. We can suggest a support arrangement that suits your software and budget.",
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
    "Custom business software, web applications, mobile apps, workflow automation, integrations, dashboards, cloud-ready systems and post-launch support.",
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
  url:
    "https://www.zentrixinfotech.com/lucknow/best-software-development-company-in-lucknow",
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
      name: "Best Software Development Company in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-software-development-company-in-lucknow",
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
              Best Software Development Company in Lucknow – What to Check
              Before You Hire One
            </h2>

            <p>
              A software project is one of the bigger decisions a business
              makes. It takes months, costs real money, and when it goes wrong,
              it goes wrong slowly: deadlines slip, features multiply, the
              budget grows and the people who were supposed to use the software
              quietly go back to spreadsheets.
            </p>

            <p>
              Most of those failures are visible before the first line of code
              is written, if you know what to look for. This page is a practical
              guide to choosing the best software development company in Lucknow
              for your business. It shows what to ask, what to check and what to
              avoid, and it shows plainly what Zentrix Infotech can put in front
              of you, so you can compare us fairly.
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
              There Is No Single &ldquo;Best&rdquo; Software Company
            </h3>

            <p>
              Any company that claims to be the best for everyone is selling,
              not advising. The right fit depends on your project.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A small internal tool needs a developer who is practical and
                quick, not a large team.
              </li>
              <li>
                A customer-facing platform needs strong design, security and the
                ability to scale.
              </li>
              <li>
                A system that connects to existing tools needs a team
                experienced in integration.
              </li>
              <li>
                A first product for a startup needs someone who will help you
                cut features, not add them.
              </li>
            </ul>

            <p>
              So the useful question is not &ldquo;who is the best?&rdquo; but
              &ldquo;who is the best fit for what I need, and how can I
              check?&rdquo;
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              10 Questions to Ask Any Software Development Company
            </h3>

            <p>
              Ask these of every company you shortlist, including us.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Can you show live work similar to mine?</strong> A
                portfolio you can open and use is stronger than a presentation.
              </li>
              <li>
                <strong>Who will actually build it, and who will I talk to?</strong>{" "}
                Ask for the person you will deal with day to day.
              </li>
              <li>
                <strong>How do you gather requirements?</strong> Good teams ask
                many questions and write the answers down before building.
              </li>
              <li>
                <strong>How will you break the project into phases?</strong>{" "}
                Phased delivery lets you see progress and change direction
                early.
              </li>
              <li>
                <strong>What technology will you use, and why?</strong> The
                answer should be reasoned and in plain language.
              </li>
              <li>
                <strong>How do you handle security and data?</strong> Ask about
                access control, backups and handling of sensitive information.
              </li>
              <li>
                <strong>Who owns the source code, design and data?</strong> The
                answer should be written down.
              </li>
              <li>
                <strong>How do you manage changes in scope?</strong> Unclear
                change handling is the most common source of cost surprises.
              </li>
              <li>
                <strong>What happens after launch?</strong> Ask about bug fixes,
                updates and support in writing.
              </li>
              <li>
                <strong>Can I speak to a past client?</strong> Confidence here
                is a good sign.
              </li>
            </ol>

            <p>
              A company that answers all ten clearly and without defensiveness
              deserves a place on your shortlist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Read a Software Development Proposal
            </h3>

            <p>
              A good proposal protects both sides. Look for:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A clear scope.</strong> What is included, and what is
                explicitly not included.
              </li>
              <li>
                <strong>Phases and milestones.</strong> Dates and deliverables,
                not just a final deadline.
              </li>
              <li>
                <strong>Itemised cost.</strong> Where the money goes, not a
                single number.
              </li>
              <li>
                <strong>Assumptions.</strong> What the price depends on, such as
                content, third-party services or timely feedback.
              </li>
              <li>
                <strong>Testing and acceptance.</strong> How you will confirm
                the work is done.
              </li>
              <li>
                <strong>Support terms.</strong> What help you get after launch,
                and for how long.
              </li>
              <li>
                <strong>Ownership terms.</strong> Who owns what at the end.
              </li>
            </ul>

            <p>
              Be careful with proposals that are vague, very short or far
              cheaper than the rest. The missing detail usually turns up later
              as extra cost.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Small: Why a Pilot Beats a Big Bang
            </h3>

            <p>
              One of the safest ways to work with a new software company is to
              start with a small, well-defined first phase. A pilot lets you see
              how the team communicates, how they handle feedback and what the
              code and design quality is like, before you commit to the whole
              system.
            </p>

            <p>
              Most clients find that a focused first release also reveals
              features they did not need and gaps they had not noticed. That is
              cheaper to learn from a small version than a finished one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Zentrix Infotech Can Show You
            </h3>

            <p>These are facts you can check.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Delivery record.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Live portfolio.</strong> Retail and franchise operations
                in The Buyzaar Mart. Healthcare websites for Jigyasa Hospital
                and Oracle Eye Hospital. Education platforms such as KDEDU and
                PSSIC. A construction and property platform, MTBOSS. E-commerce
                platforms such as HerbsFox and Deal360. Explore them in our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/portfolio"
                  className="text-blue-600 hover:underline"
                >
                  portfolio
                </Link>
                .
              </li>
              <li>
                <strong>A listed technology stack.</strong> Our web development
                page lists React.js, Next.js, Node.js, Python, JavaScript,
                TypeScript, MongoDB, PostgreSQL, Firebase and Redux, which suit
                modern, scalable web applications and APIs.
              </li>
              <li>
                <strong>Design and engineering together.</strong>{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                is part of the build, so software is easy to use, not just
                correct.
              </li>
              <li>
                <strong>Client feedback.</strong> Dr. C.P. Singh of Jigyasa
                Hospital described a clean, professional site with easy
                appointment booking. Kdedu said their platform makes essential
                resources easy for students and faculty to reach.
              </li>
              <li>
                <strong>Plain communication.</strong> Scope, timelines and cost
                agreed in writing, with regular updates.
              </li>
            </ul>

            <p>
              Our portfolio is mostly websites and web platforms. If you need a
              deeply specialised system, ask us to explain how we would approach
              it and what we have done that is closest. We will tell you
              honestly if another approach or partner suits you better.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom Business Software.</strong> Applications built
                around your workflows: orders, bookings, approvals, inventory,
                billing or customer management.
              </li>
              <li>
                <strong>Web Application Development.</strong> Browser-based
                systems that run on any device, from customer portals to
                internal dashboards. See our{" "}
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
                cross-platform apps for Android and iOS. See our{" "}
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
                repeated manual steps, reducing errors and saving staff time.
              </li>
              <li>
                <strong>Software Integration.</strong> Connecting your website,
                payments, messaging and other tools so data flows automatically.
              </li>
              <li>
                <strong>Dashboards and Reporting.</strong> Clear views of
                operations and customer activity, so decisions rest on current
                numbers.
              </li>
              <li>
                <strong>Cloud-Ready Software.</strong> Applications built to run
                on scalable cloud infrastructure. See our{" "}
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
                <strong>Retail and franchise.</strong> Ordering, delivery
                management and franchise operations.
              </li>
              <li>
                <strong>Healthcare.</strong> Appointment booking, enquiry
                handling and doctor or department information, with careful data
                handling.
              </li>
              <li>
                <strong>Education.</strong> Admissions, notices, resources and
                parent communication.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project
                listings, enquiry tracking and project coordination.
              </li>
              <li>
                <strong>Manufacturing and trading.</strong> Order tracking,
                quotation tools and catalogue management.
              </li>
              <li>
                <strong>Service businesses.</strong> Booking, dispatch and
                customer updates.
              </li>
              <li>
                <strong>Startups.</strong> A focused first product that tests
                demand before you build everything.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We study your processes, users and
                the problem.
              </li>
              <li>
                <strong>Requirements and Planning.</strong> Features,
                priorities, timeline and budget agreed in writing.
              </li>
              <li>
                <strong>Design.</strong> Wireframes and screens you can review.
              </li>
              <li>
                <strong>Development.</strong> Built in stages with demos along
                the way.
              </li>
              <li>
                <strong>Testing.</strong> Functionality, performance, devices
                and security.
              </li>
              <li>
                <strong>Deployment.</strong> Hosting setup, data migration and
                go-live.
              </li>
              <li>
                <strong>Support and Improvement.</strong> Maintenance and new
                features as you grow.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Software Development Cost in Lucknow?
            </h3>

            <p>
              There is no fixed price, because software varies widely. Cost
              depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The number and complexity of features.</li>
              <li>
                User roles and platforms (web, Android, iOS).
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
              will send a clear, itemised quotation, with an option to begin
              with a smaller first phase.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Compare Us Fairly
            </h3>

            <p>
              Please get at least two other proposals. Put the same ten
              questions to each company, and compare the answers on scope,
              phases, ownership and support rather than on price alone. If we
              are the right fit, the comparison will show it. If we are not, you
              will have made a better decision.
            </p>

            <p>
              You can begin with our{" "}
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
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Software Development Company in Lucknow
            </h3>

            <p>
              You do not need a perfect specification to begin. Tell us what
              slows your team down, what you want the software to do and what
              you have already tried. We will review it, suggest a sensible
              first phase and give you a clear quotation, with no obligation.
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
                  1. Which is the best software development company in Lucknow?
                </h4>
                <p>
                  No single company is best for everyone. Choose one whose live
                  work, technology, communication and support fit your project.
                  Zentrix Infotech shares its portfolio and case studies so you
                  can judge our work directly.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I choose a software development company?
                </h4>
                <p>
                  Ask to see live work, meet the people who will build it,
                  review a written scope, confirm ownership and security terms,
                  and check post-launch support. Compare at least three
                  proposals on the same questions.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does custom software cost in Lucknow?
                </h4>
                <p>
                  Cost depends on features, user roles, platforms, integrations,
                  design and security needs. A simple internal tool costs far
                  less than a multi-role platform. Share requirements and we
                  will prepare an itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does software development take?
                </h4>
                <p>
                  It depends on scope. A focused first release usually takes
                  less time than a large multi-module system. We confirm a
                  realistic, phased timeline after requirement analysis, before
                  development begins.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. What technologies does Zentrix Infotech use?
                </h4>
                <p>
                  Our web development page lists React.js, Next.js, Node.js,
                  Python, JavaScript, TypeScript, MongoDB, PostgreSQL, Firebase
                  and Redux. We recommend a stack that suits your project and
                  explain our reasoning.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can a small business or startup work with you?
                </h4>
                <p>
                  Yes. We work with startups and established businesses. For
                  early ideas, we often suggest a focused first phase, so you
                  can test the idea and learn before investing in a full system.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Who owns the software and data after development?
                </h4>
                <p>
                  Ownership should be clear from the start. We agree in writing
                  who owns the source code, designs and data before work begins,
                  so there are no surprises when the project ends.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you connect software to my existing tools?
                </h4>
                <p>
                  Yes. We connect websites, payments, messaging and other
                  systems so data flows automatically. We review your current
                  tools first and tell you what can be integrated and what may
                  need replacing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We provide maintenance and support covering bug fixes,
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
              currentSlug="/best-software-development-company-in-lucknow"
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