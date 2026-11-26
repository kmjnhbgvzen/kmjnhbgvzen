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
      name: "What does a mobile app development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It designs, builds, tests and supports apps for Android and iOS, along with the backend systems that power them.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech build Android and iOS apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build native and cross-platform apps for both Android and iOS.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through video calls, phone and WhatsApp, with meetings planned as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose native or cross-platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cross-platform suits most business apps and launches on both platforms together. Native suits apps needing top performance or advanced phone features.",
      },
    },
    {
      "@type": "Question",
      name: "How much does app development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, screens, platforms and integrations. We give a clear, itemised quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release can take a few weeks to a few months. We share a timeline after discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build an app for my startup idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We often help startups plan a focused first version, then add features as real users give feedback.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the app and source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work starts. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide fixes, updates, performance improvements and new features as your app and users grow.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. Share your idea and we will arrange a free consultation.",
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
              Mobile App Development Company in Lucknow
            </h2>

            <p>
              Your customers spend a large part of their day on their phones.
              A well-built mobile app puts your business one tap away, whether
              that means booking an appointment, placing an order, tracking a
              delivery or checking a service status.
            </p>

            <p>
              Zentrix Infotech is a mobile app development company serving
              Lucknow and the wider Uttar Pradesh region. We design, build and
              support native and cross-platform apps for Android and iOS. With
              250+ projects, 270+ clients and a 4.7/5 rating shown on our
              website, we focus on apps that are simple to use, reliable and
              ready to grow with your business.
            </p>

            <p>
              Have an app idea? Call{" "}
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
                Get a Free App Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Does Your Business Need a Mobile App?
            </h3>

            <p>
              Not every business needs an app on day one, and an honest answer
              saves money. An app makes sense when:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Customers return often, such as for orders, bookings or repeat
                services.
              </li>
              <li>
                You want to send useful reminders and updates directly to
                users.
              </li>
              <li>
                Your staff work outside the office and need access on the
                move.
              </li>
              <li>
                You want a smoother experience than a mobile website can
                offer.
              </li>
              <li>
                You plan to build a loyal customer base over time.
              </li>
            </ul>

            <p>
              If your needs are simple, a fast, mobile-friendly website may be
              enough to start. We will tell you plainly which path fits your
              goals and budget, and we can build both.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Mobile App Development Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Android app development.</strong> Apps built for the
                wide range of Android phones used across India.
              </li>
              <li>
                <strong>iOS app development.</strong> Apps designed for iPhones
                and iPads, following platform guidelines for a smooth
                experience.
              </li>
              <li>
                <strong>Cross-platform app development.</strong> One shared
                product that runs on both Android and iOS, often helping you
                reach more users with less effort.
              </li>
              <li>
                <strong>Native app development.</strong> Apps built separately
                for each platform when you need the highest performance or deep
                phone features.
              </li>
              <li>
                <strong>UI/UX design for apps.</strong> Clear screens and
                simple flows that help users finish tasks quickly, even on
                small screens. See our{" "}
                <Link
                  href="/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Backend and cloud support.</strong> Secure systems,
                databases and cloud setup behind the app so it stays fast and
                available. See our{" "}
                <Link
                  href="/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Maintenance and updates.</strong> Bug fixes, new
                features and compatibility updates after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Native or Cross-Platform: Which Is Right for You?
            </h3>

            <p>
              This is one of the first decisions in any app project.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Choose cross-platform when:
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                You want to launch on Android and iOS together.
              </li>
              <li>
                You want to keep the first release focused and manageable.
              </li>
              <li>
                Your app relies on standard features like forms, lists,
                payments and notifications.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              Choose native when:
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Your app needs heavy graphics, advanced device features or top
                performance.
              </li>
              <li>
                You are targeting only one platform at first.
              </li>
              <li>
                You want the most platform-specific look and behaviour.
              </li>
            </ul>

            <p>
              We explain the trade-offs in plain language and recommend the
              option that fits your goals, not the one that is easiest for us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Apps We Can Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Customer ordering and shopping apps for retailers, food
                businesses and online stores.
              </li>
              <li>
                Booking and appointment apps for clinics, institutes, salons
                and service providers.
              </li>
              <li>
                Education apps for classes, notes, attendance and fee updates.
              </li>
              <li>
                Delivery and tracking apps for logistics and local services.
              </li>
              <li>
                Business and staff apps for field teams, sales tracking and
                internal tasks.
              </li>
              <li>
                Startup apps for new ideas that need a focused first version.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Mobile Apps for Lucknow Businesses
            </h3>

            <p>
              Lucknow is the capital of Uttar Pradesh and a busy centre for
              education, healthcare, trade, hospitality, real estate and
              handicrafts. Apps can help each of these sectors:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Education:</strong> Parents and students check notices,
                fees and results from their phones.
              </li>
              <li>
                <strong>Healthcare:</strong> Patients book appointments and
                receive reminders.
              </li>
              <li>
                <strong>Retail and distribution:</strong> Customers order
                directly and track deliveries.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Guests make bookings
                and send enquiries.
              </li>
              <li>
                <strong>Real estate:</strong> Buyers browse listings and
                schedule site visits.
              </li>
              <li>
                <strong>Handicrafts and chikankari sellers:</strong> Customers
                browse catalogues and order from anywhere.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Features That Make an App Succeed
            </h3>

            <p>
              A good app is not about having every feature. It is about having
              the right ones.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Simple sign-up and login so users get started quickly.
              </li>
              <li>
                Clear navigation so people find what they need in a few taps.
              </li>
              <li>
                Push notifications used wisely for useful updates.
              </li>
              <li>
                Secure payments where your business needs them.
              </li>
              <li>
                Fast loading even on average phone connections.
              </li>
              <li>
                Admin panel so your team can manage content, orders and users.
              </li>
              <li>
                Analytics so you can see how people use the app and improve
                it.
              </li>
            </ul>

            <p>
              We help you rank these features, so your first release stays
              focused and useful.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Mobile App Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn about your business, users
                and goals.
              </li>
              <li>
                <strong>Planning:</strong> We list features, rank them and
                agree on a focused first release.
              </li>
              <li>
                <strong>UI/UX design:</strong> You review screens and user
                flows before development starts.
              </li>
              <li>
                <strong>Development:</strong> We build the app, along with the
                backend it needs, in small stages and share progress often.
              </li>
              <li>
                <strong>Testing:</strong> We check features, speed, security
                and behaviour on different phones and screen sizes.
              </li>
              <li>
                <strong>Launch:</strong> We prepare the app for store release
                and support you through the submission steps.
              </li>
              <li>
                <strong>Support and growth:</strong> We fix issues, update the
                app and add features as your users grow.
              </li>
            </ol>

            <p>
              Starting with a focused first release is often the smartest
              path. You get a working app sooner, learn from real users and
              then expand with confidence.
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
                <strong>One team for the whole product.</strong> Design,
                development, cloud and digital marketing work together, so your
                app is built to be used and found.
              </li>
              <li>
                <strong>Clear communication.</strong> We explain technical
                points in plain language and keep one point of contact for
                your project.
              </li>
              <li>
                <strong>Built for growth.</strong> We plan the app so new
                features and more users can be added later without starting
                again.
              </li>
              <li>
                <strong>Related platform experience.</strong> Our portfolio
                includes platforms such as The Buyzaar Mart, a retail
                franchise platform with ordering, delivery management and
                franchise operations, and KDEDU, an education platform serving
                students from kindergarten to degree level. These projects need
                the same planning discipline that a mobile app needs, and we
                can discuss relevant examples for your idea during a call.
              </li>
            </ul>

            <p>
              Want to see what is possible? Email{" "}
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
              Getting Your App Discovered
            </h3>

            <p>
              Building the app is only half of the job. People must find it
              and keep using it. Our digital marketing team can support your
              launch with SEO for your website, social media content and
              targeted campaigns. We also suggest a simple plan for app store
              descriptions, screenshots and early user feedback, so your first
              users help you improve the app.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working with Lucknow Clients
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad and supports clients
              in Lucknow and across Uttar Pradesh through video calls, phone
              and WhatsApp. Requirements, designs and progress reviews are
              easy to handle remotely, and meetings can be planned as your
              project needs. You stay in direct contact with the people
              building your app.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of a Mobile App?
            </h3>

            <p>
              We do not publish fixed prices, because every app is different.
              These factors shape the cost:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of screens and features.</li>
              <li>Android only, iOS only or both.</li>
              <li>Native or cross-platform approach.</li>
              <li>Backend, admin panel and integrations.</li>
              <li>Design depth and branding needs.</li>
              <li>Support and updates after launch.</li>
            </ul>

            <p>
              After a free consultation, you receive a clear, itemised quote
              with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Mobile App Project
            </h3>

            <p>
              If you want a mobile app development company in Lucknow that
              listens first, plans clearly and builds with care, Zentrix
              Infotech is ready to help. Share your idea, even if it is only a
              rough sketch or a list of problems, and we will suggest a
              practical way forward.
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
              to book your free consultation.
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
                  1. What does a mobile app development company do?
                </h4>
                <p>
                  It designs, builds, tests and supports apps for Android and
                  iOS, along with the backend systems that power them.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech build Android and iOS apps?
                </h4>
                <p>
                  Yes. We build native and cross-platform apps for both Android
                  and iOS.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients through video calls, phone and WhatsApp, with
                  meetings planned as needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Should I choose native or cross-platform?
                </h4>
                <p>
                  Cross-platform suits most business apps and launches on both
                  platforms together. Native suits apps needing top performance
                  or advanced phone features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does app development cost?
                </h4>
                <p>
                  Cost depends on features, screens, platforms and
                  integrations. We give a clear, itemised quote after a free
                  consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How long does it take to build an app?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  weeks to a few months. We share a timeline after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you build an app for my startup idea?
                </h4>
                <p>
                  Yes. We often help startups plan a focused first version,
                  then add features as real users give feedback.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I own the app and source code?
                </h4>
                <p>
                  Ownership should be agreed in writing before work starts. We
                  discuss code, data and account ownership openly with every
                  client.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide fixes, updates, performance improvements and
                  new features as your app and users grow.
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
                    href="/services/mobile-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Services
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
              currentSlug="/mobile-app-development-company-in-lucknow"
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