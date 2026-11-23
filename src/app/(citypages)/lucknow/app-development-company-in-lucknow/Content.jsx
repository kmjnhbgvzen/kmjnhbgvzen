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
      name: "Which is the best app development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your idea, budget and communication needs. Review portfolios, ask about the process and check support after launch. Zentrix Infotech shares its work openly so you can judge for yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How much does app development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on platforms, features, design, backend, integrations and maintenance. A simple app costs far less than a marketplace with payments and tracking. Share your idea and we will provide a clear, itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused MVP usually takes less time than a feature-rich app with payments and admin tools. We confirm a realistic timeline after planning, before development begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build both Android and iOS apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop apps for Android and iOS, and can recommend native or cross-platform development depending on your goals, budget and the features you need.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose a native or cross-platform app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cross-platform suits faster launch and controlled budgets. Native suits maximum performance and deep device features. We recommend one after understanding your users, features and long-term plans.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build an MVP for my startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help you identify the core features, build a focused first version and test it with real users before you invest in a full product, which reduces risk and wasted budget.",
      },
    },
    {
      "@type": "Question",
      name: "Will you design the app UI and UX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our UI/UX team creates wireframes and screen designs you can review before development begins, focusing on simple navigation and a smooth first-time experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after the app is launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance and support, including bug fixes, updates, performance improvements and compatibility with new Android and iOS versions. We can suggest a support plan that suits your app.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help publish my app on the Play Store and App Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help prepare and submit your app for release. Store approval depends on each platform’s review, so we plan time for it and fix any issues raised.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get an app development quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your idea and key features, and we will send a quotation.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  serviceType: "Mobile App Development",
  description:
    "Android, iOS and cross-platform app development for startups and established businesses, including UI/UX design, backend development, launch support and maintenance.",
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
  url: "https://www.zentrixinfotech.com/app-development-company-in-lucknow",
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
      name: "Mobile App Development",
      item: "https://www.zentrixinfotech.com/services/mobile-development",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "App Development Company in Lucknow",
      item: "https://www.zentrixinfotech.com/app-development-company-in-lucknow",
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
              App Development Company in Lucknow – Turn Your App Idea Into a
              Product Customers Actually Use
            </h2>

            <p>
              Every year, thousands of apps are built and almost as many are
              forgotten. They launch with excitement, collect a handful of
              downloads and quietly disappear. The reason is rarely the code. It
              is usually a weak idea of who the app is for, a confusing first
              screen, or a product that was never planned beyond launch day.
            </p>

            <p>
              Zentrix Infotech is an app development company that starts with the
              business problem, not the feature list. We build Android, iOS and
              cross-platform apps for startups and established businesses, and we
              support Lucknow businesses through calls, video meetings and
              WhatsApp.
            </p>

            <p>
              You can see the full scope of our{" "}
              <Link
                href="https://www.zentrixinfotech.com/services/mobile-development"
                className="text-blue-600 hover:underline"
              >
                mobile app development
              </Link>{" "}
              services before you get in touch.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free App Consultation
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
              Why Does Your Business Need a Mobile App?
            </h3>

            <p>
              An app is not right for every business, but for many it is the
              strongest way to stay close to customers.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Direct access.</strong> An app icon sits on your
                customer’s phone every day, unlike a website they must remember
                to visit.
              </li>
              <li>
                <strong>Better repeat business.</strong> Saved details, order
                history and notifications make buying again easy.
              </li>
              <li>
                <strong>Smoother operations.</strong> Bookings, orders,
                deliveries and staff tasks can run through one system.
              </li>
              <li>
                <strong>A stronger brand.</strong> A well-made app signals that
                your business is modern and serious.
              </li>
              <li>
                <strong>Useful data.</strong> You learn what customers actually
                do, not what you assume they do.
              </li>
            </ul>

            <p>
              If you are unsure whether you need an app, a website or both, we
              will say so honestly. Sometimes a good website is the better first
              step.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your App Development Company in
              Lucknow?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Real delivery experience.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Business-first thinking.</strong> We ask who will use the
                app, what action matters most and how you will measure success
                before we design a screen.
              </li>
              <li>
                <strong>Design and engineering together.</strong>{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>
                , development and testing sit in one team, so what is designed is
                what gets built.
              </li>
              <li>
                <strong>Modern technology.</strong> Our development stack
                includes React.js, Node.js, TypeScript, JavaScript, Python,
                MongoDB, PostgreSQL and Firebase, which suit fast, scalable app
                backends and interfaces.
              </li>
              <li>
                <strong>Experience with real workflows.</strong> Our portfolio
                includes ordering and delivery management, appointment booking,
                e-commerce and franchise operations, the same flows most apps
                depend on.
              </li>
              <li>
                <strong>Honest communication.</strong> Clear scope, realistic
                timelines and regular updates, with no jargon.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our App Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Android App Development.</strong> Apps for the largest
                smartphone audience in India, built for performance across a wide
                range of devices.
              </li>
              <li>
                <strong>iOS App Development.</strong> Polished apps for iPhone
                and iPad users, designed to follow Apple’s interface standards.
              </li>
              <li>
                <strong>Cross-Platform App Development.</strong> One codebase
                serving both Android and iOS, which often reduces cost and launch
                time for startups and growing businesses.
              </li>
              <li>
                <strong>Custom Mobile App Development.</strong> When off-the-shelf
                tools cannot match your process, we build around your
                requirements: booking, ordering, memberships, field-staff tools or
                customer portals.
              </li>
              <li>
                <strong>Ecommerce App Development.</strong> Shopping apps with
                catalogues, search, cart, payment integration, order tracking and
                notifications. Our work on The Buyzaar Mart and HerbsFox reflects
                the commerce flows involved.
              </li>
              <li>
                <strong>Startup MVP Development.</strong> A focused first version
                that tests your idea with real users before you invest in every
                feature.
              </li>
              <li>
                <strong>App UI/UX Design.</strong> Clear navigation, readable
                screens and a smooth first-time experience, because users leave
                apps they cannot understand in seconds.
              </li>
              <li>
                <strong>Backend and API Development.</strong> The server, database
                and integrations behind your app, including payments, maps,
                messaging and third-party services.
              </li>
              <li>
                <strong>App Maintenance and Support.</strong> Updates, bug fixes,
                performance improvements and compatibility with new Android and
                iOS versions after launch.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request an App Development Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              App Development Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Startups and entrepreneurs.</strong> A lean MVP to
                validate demand and show to investors or early customers.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Faster repeat purchases,
                offers and order tracking in one app.
              </li>
              <li>
                <strong>Food and restaurants.</strong> Menu browsing, online
                ordering and delivery tracking.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Appointment booking,
                doctor profiles, reports access and reminders, with careful
                handling of patient data.
              </li>
              <li>
                <strong>Education and institutions.</strong> Notices, attendance,
                study material and parent communication.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project listings,
                enquiry forms and site-visit booking.
              </li>
              <li>
                <strong>Service and delivery businesses.</strong> Booking,
                dispatch, staff tracking and customer updates.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our App Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We study your idea, users, competitors
                and goals.
              </li>
              <li>
                <strong>Planning.</strong> Features, platforms, timeline and
                budget are agreed in writing.
              </li>
              <li>
                <strong>UI/UX Design.</strong> Wireframes and screens you can
                review before development starts.
              </li>
              <li>
                <strong>Development.</strong> We build the app and its backend in
                stages, with demos along the way.
              </li>
              <li>
                <strong>Testing.</strong> Functionality, devices, speed and
                security are checked before release.
              </li>
              <li>
                <strong>Launch.</strong> We help with store submission and
                release.
              </li>
              <li>
                <strong>Support and Growth.</strong> After launch we fix issues,
                update the app and plan improvements.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Should You Build a Native or Cross-Platform App?
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      If your priority is…
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Consider
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Fastest launch on both platforms with a controlled budget
                    </td>
                    <td className="px-3 py-3">Cross-platform</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">
                      Maximum performance and deep device features
                    </td>
                    <td className="px-3 py-3">Native Android or iOS</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Testing an idea quickly</td>
                    <td className="px-3 py-3">MVP, often cross-platform</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-3">Reaching one audience first</td>
                    <td className="px-3 py-3">One platform, then expand</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              We recommend an approach after understanding your users, features
              and budget, rather than defaulting to one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes an App Succeed After Launch?
            </h3>

            <p>
              A launched app is the starting line. Strong apps usually share these
              qualities:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A clear purpose.</strong> The main action takes a few
                taps.
              </li>
              <li>
                <strong>Fast performance.</strong> Slow apps are deleted quickly.
              </li>
              <li>
                <strong>Simple onboarding.</strong> New users understand the value
                in seconds.
              </li>
              <li>
                <strong>Useful notifications.</strong> Helpful reminders, not
                constant noise.
              </li>
              <li>
                <strong>Regular updates.</strong> Fixes and improvements keep
                users engaged.
              </li>
              <li>
                <strong>A marketing plan.</strong> Downloads rarely come on their
                own. Our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/digital-marketing"
                  className="text-blue-600 hover:underline"
                >
                  digital marketing
                </Link>{" "}
                team can support app promotion.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does App Development Cost in Lucknow?
            </h3>

            <p>There is no fixed price, because apps differ widely. Cost depends on:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of platforms (Android, iOS or both).</li>
              <li>Number and complexity of features.</li>
              <li>UI/UX design depth.</li>
              <li>Backend, database and admin panel needs.</li>
              <li>
                Third-party integrations, such as payments, maps and messaging.
              </li>
              <li>Testing, store launch and ongoing maintenance.</li>
            </ul>

            <p>
              A simple app with a few screens is very different from a marketplace
              with payments and live tracking. Share your idea and we will send a
              clear, itemised quotation, and suggest a phased plan if you want to
              start small.
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
              before contacting us. Projects such as The Buyzaar Mart, with
              multi-category ordering and delivery management, and Jigyasa
              Hospital, with easy appointment booking, show the kind of business
              workflows we design around. Jigyasa Hospital’s Dr. C.P. Singh
              described the website as clean and professional, with easy
              appointment booking.
            </p>

            <p>
              We also build{" "}
              <Link
                href="https://www.zentrixinfotech.com/services/web-development"
                className="text-blue-600 hover:underline"
              >
                web applications and websites
              </Link>
              , so if your idea works better as a web app first, we will tell you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with an App Development Company in Lucknow
            </h3>

            <p>
              Every good app begins with a conversation. Tell us what problem you
              want to solve, who will use the app and what you have already
              planned. We will review your idea, suggest the right approach and
              give you a clear quotation, with no obligation.
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
                Talk to Our App Development Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your App Idea
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
                  1. Which is the best app development company in Lucknow?
                </h4>
                <p>
                  The best company is the one that fits your idea, budget and
                  communication needs. Review portfolios, ask about the process
                  and check support after launch. Zentrix Infotech shares its work
                  openly so you can judge for yourself.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much does app development cost in Lucknow?
                </h4>
                <p>
                  Cost depends on platforms, features, design, backend,
                  integrations and maintenance. A simple app costs far less than a
                  marketplace with payments and tracking. Share your idea and we
                  will provide a clear, itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to build a mobile app?
                </h4>
                <p>
                  It depends on scope. A focused MVP usually takes less time than
                  a feature-rich app with payments and admin tools. We confirm a
                  realistic timeline after planning, before development begins.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you build both Android and iOS apps?
                </h4>
                <p>
                  Yes. We develop apps for Android and iOS, and can recommend
                  native or cross-platform development depending on your goals,
                  budget and the features you need.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Should I choose a native or cross-platform app?
                </h4>
                <p>
                  Cross-platform suits faster launch and controlled budgets.
                  Native suits maximum performance and deep device features. We
                  recommend one after understanding your users, features and
                  long-term plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you build an MVP for my startup?
                </h4>
                <p>
                  Yes. We help you identify the core features, build a focused
                  first version and test it with real users before you invest in a
                  full product, which reduces risk and wasted budget.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will you design the app UI and UX?
                </h4>
                <p>
                  Yes. Our UI/UX team creates wireframes and screen designs you
                  can review before development begins, focusing on simple
                  navigation and a smooth first-time experience.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after the app is launched?
                </h4>
                <p>
                  Yes. We offer maintenance and support, including bug fixes,
                  updates, performance improvements and compatibility with new
                  Android and iOS versions. We can suggest a support plan that
                  suits your app.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can you help publish my app on the Play Store and App Store?
                </h4>
                <p>
                  Yes. We help prepare and submit your app for release. Store
                  approval depends on each platform’s review, so we plan time for
                  it and fix any issues raised.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get an app development quotation?
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
                  or use the contact page. Share your idea and key features, and
                  we will send a quotation.
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
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
                    href="/blog/ai-ecommerce-india-next-billion-users"
                    className="text-blue-600 hover:underline"
                  >
                    AI E-commerce Guide
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
              currentSlug="/app-development-company-in-lucknow"
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