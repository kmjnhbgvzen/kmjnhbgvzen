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
        text: "The best company is the one that fits your project. Compare portfolios, reviews, process and support. Zentrix Infotech offers 250+ projects and a 4.7/5 rating.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech provide custom software development in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom business software, web applications, mobile apps and portals for Lucknow businesses, delivered with video calls, phone and WhatsApp support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients remotely, and meetings can be planned as needed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does software development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release can take a few weeks, while larger systems take longer. We share a timeline after discovery.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, users, integrations and design. We give a clear, itemised quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you build software for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have worked with education, healthcare, retail, e-commerce, interior design, hospitality and events, and we adapt our process to each industry.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my source code and data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work starts. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build both web and mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build web applications and native or cross-platform apps for Android and iOS, along with the cloud systems that support them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide fixes, updates, performance improvements and new features as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start my software project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. Share your idea and we will arrange a free consultation.",
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
    "Custom business software, web applications, mobile apps, UI/UX design, cloud solutions and digital marketing for businesses in Lucknow and Uttar Pradesh.",
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
      name: "Best Software Company in Lucknow for Custom Business Software",
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
              Best Software Company in Lucknow for Custom Business Software
            </h2>

            <p>
              Finding the best software company in Lucknow is easier when you
              know what to look for. A good software development company in
              Lucknow should understand your business, show real work, explain
              its process in plain language and support you after launch.
            </p>

            <p>
              Zentrix Infotech builds custom software, web applications and
              mobile apps for businesses across Uttar Pradesh. With 250+
              projects, 270+ clients and a 4.7/5 rating, we focus on software
              that is easy to use and built to grow with you.
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
                Get a Free Software Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes the Best Software Company in Lucknow?
            </h3>

            <p>
              The best software company for your business is the one that fits
              your problem, not just the one with the biggest claims. Judge
              every software company in Lucknow on these five points:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business understanding:</strong> Does the team ask
                about your customers, staff and daily workflow before talking
                about features?
              </li>
              <li>
                <strong>Proof of work:</strong> Can it show live products and
                real client feedback?
              </li>
              <li>
                <strong>Clear process:</strong> Does it explain what happens in
                each stage and who is responsible?
              </li>
              <li>
                <strong>Honest communication:</strong> Do you get regular
                updates and straight answers on time and risk?
              </li>
              <li>
                <strong>After-launch support:</strong> Who fixes issues and
                adds features once the software is live?
              </li>
            </ul>

            <p>
              Use this checklist with every company on your shortlist,
              including us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need Custom Software Development
            </h3>

            <p>
              Lucknow is the capital of Uttar Pradesh and a strong centre for
              education, healthcare, trade, hospitality, real estate and
              handicrafts. Many businesses here still depend on spreadsheets,
              paper registers and messaging groups. This works at a small
              scale, but it slows down as you grow.
            </p>

            <p>
              Custom software development in Lucknow solves real daily
              problems:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Distributors and traders:</strong> Track stock, orders,
                invoices and payments in one dashboard.
              </li>
              <li>
                <strong>Schools and coaching institutes:</strong> Manage
                admissions, fees, attendance and results online.
              </li>
              <li>
                <strong>Clinics and hospitals:</strong> Handle appointments and
                patient enquiries without long phone queues.
              </li>
              <li>
                <strong>Retailers and chikankari sellers:</strong> Take online
                orders and manage delivery.
              </li>
              <li>
                <strong>Real estate firms:</strong> Organise leads, follow-ups
                and site visits in one place.
              </li>
            </ul>

            <p>
              Ready-made tools cover basic needs, but they rarely match your
              exact workflow. Custom business software is built around the way
              you work, so your team saves time and makes fewer mistakes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Services from Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech offers six core services in one team, so you do
              not need to coordinate with several vendors.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom Software Development:</strong> Business
                software, management systems, portals and internal tools.
              </li>
              <li>
                <strong>Web Application Development:</strong> Fast, secure
                websites and web apps that convert visitors into customers. See
                our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Mobile App Development:</strong> Native and
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
                <strong>UI/UX Design:</strong> Clean interfaces that help users
                finish tasks without confusion. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Cloud Solutions:</strong> Scalable infrastructure for
                better performance, security and business continuity. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, social media and ad
                campaigns that bring users to your product.
              </li>
            </ul>

            <p>
              When design, development, cloud and marketing work together, your
              product is built to be used and found, not just launched.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven experience.</strong> We have delivered 250+
                projects for 270+ clients, and our homepage shows a 4.7/5
                rating.
              </li>
              <li>
                <strong>One team for build and growth.</strong> Software,
                website, app and marketing support come from the same team,
                which saves time and avoids confusion.
              </li>
              <li>
                <strong>Clear, step-by-step delivery.</strong> You see designs
                before development starts and review progress in small stages.
              </li>
              <li>
                <strong>Simple communication.</strong> We explain technical
                points in plain language and keep one point of contact for your
                project.
              </li>
              <li>
                <strong>Built for growth.</strong> We plan software so that new
                features, users and locations can be added later without
                starting again.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work Across Industries
            </h3>

            <p>Our portfolio shows the range of software and platforms we build:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise platform
                with a multi-category marketplace, ordering, delivery
                management and franchise operations.
              </li>
              <li>
                <strong>KDEDU (Kamla Devi Group of Institutions):</strong> An
                education platform serving students from kindergarten to degree
                level.
              </li>
              <li>
                <strong>HerbsFox:</strong> An e-commerce marketplace for herbs,
                spices, seeds and wellness products.
              </li>
              <li>
                <strong>PS Decor:</strong> A wedding and event management
                platform for luxury celebrations.
              </li>
              <li>
                <strong>Vasterior and Alluring Glimpses:</strong> Interior
                design platforms built to present spaces and projects
                beautifully.
              </li>
            </ul>

            <p>
              Clients share their experience too. Jigyasa Hospital reported
              that its website makes appointment booking easy and that patient
              enquiries through Google and social media have risen steadily.
              Kairvi Fort Resort reported a noticeable boost in bookings during
              peak seasons after digital campaigns.
            </p>

            <p>
              Want similar results for your business? Email{" "}
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
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                Explore our portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Custom Software Development Process
            </h3>

            <p>
              A clear process is what turns an idea into working software.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We study your business, users,
                goals and current problems.
              </li>
              <li>
                <strong>Requirement planning:</strong> We list features, rank
                them by importance and agree on the first release.
              </li>
              <li>
                <strong>UI/UX design:</strong> You see screens and user flows
                before any code is written.
              </li>
              <li>
                <strong>Development:</strong> We build in small stages so you
                can review progress often.
              </li>
              <li>
                <strong>Testing:</strong> We check features, speed, security
                and behaviour on different devices.
              </li>
              <li>
                <strong>Launch and training:</strong> We deploy carefully and
                train your team to use the system.
              </li>
              <li>
                <strong>Support and growth:</strong> We fix issues, add
                features and improve performance over time.
              </li>
            </ol>

            <p>
              Starting with a focused first release is often the smartest
              path. You get a working product sooner, learn from real users
              and then expand with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Support for Lucknow and Uttar Pradesh
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad and supports clients
              in Lucknow and across Uttar Pradesh through video calls, phone
              and WhatsApp. Requirements, designs and progress reviews can all
              be handled remotely, and meetings can be planned as your project
              needs. This keeps work moving and gives you direct access to the
              people building your product.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Warning Signs When Hiring a Software Company
            </h3>

            <p>Be careful if a company:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Promises a final price or deadline without understanding your
                requirements.
              </li>
              <li>
                Cannot show live work or real client references.
              </li>
              <li>
                Avoids questions about who owns the source code and data.
              </li>
              <li>
                Has no plan for testing, security or support.
              </li>
              <li>
                Recommends one fixed solution for every problem.
              </li>
            </ul>

            <p>
              Always confirm in writing that you own your code, data and
              accounts once the project is paid for.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Trusted Software Partner
            </h3>

            <p>
              If you want a software development company in Lucknow that
              listens first, plans clearly and builds with care, Zentrix
              Infotech is ready to help. Share your idea, even if it is only a
              rough list of problems, and we will suggest a practical way
              forward.
            </p>

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
              </a>{" "}
              to book your free consultation today.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Software Development Quote
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
                  The best company is the one that fits your project. Compare
                  portfolios, reviews, process and support. Zentrix Infotech
                  offers 250+ projects and a 4.7/5 rating.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech provide custom software development
                  in Lucknow?
                </h4>
                <p>
                  Yes. We build custom business software, web applications,
                  mobile apps and portals for Lucknow businesses, delivered
                  with video calls, phone and WhatsApp support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients remotely, and meetings can be planned as needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does software development take?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  weeks, while larger systems take longer. We share a timeline
                  after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does custom software cost in Lucknow?
                </h4>
                <p>
                  Cost depends on features, users, integrations and design. We
                  give a clear, itemised quote after a free consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Which industries do you build software for?
                </h4>
                <p>
                  We have worked with education, healthcare, retail,
                  e-commerce, interior design, hospitality and events, and we
                  adapt our process to each industry.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own my source code and data?
                </h4>
                <p>
                  Ownership should be agreed in writing before work starts. We
                  discuss code, data and account ownership openly with every
                  client.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you build both web and mobile apps?
                </h4>
                <p>
                  Yes. We build web applications and native or cross-platform
                  apps for Android and iOS, along with the cloud systems that
                  support them.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide fixes, updates, performance improvements and
                  new features as your business grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I start my software project?
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
                  . Share your idea and we will arrange a free consultation.
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