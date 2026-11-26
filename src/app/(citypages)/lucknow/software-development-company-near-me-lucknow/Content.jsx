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
      name: "Is Zentrix Infotech a software development company near me in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Lucknow clients from our Moradabad and Ghaziabad offices through video calls, phone and WhatsApp, with meetings planned as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our offices are in Moradabad and Ghaziabad. We support Lucknow businesses remotely and stay in close contact throughout the project.",
      },
    },
    {
      "@type": "Question",
      name: "What software development services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom software, web applications, mobile apps, UI/UX design, cloud solutions and digital marketing support.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, users, integrations and design. We give a clear, itemised quote after a free consultation.",
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
      name: "Can small businesses in Lucknow hire you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We often begin with a focused first release for small businesses and add features later as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work starts. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build mobile apps too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build native and cross-platform apps for Android and iOS, along with the web and cloud systems behind them.",
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
              Software Development Company Near Me in Lucknow
            </h2>

            <p>
              When business owners type software development company near me
              into Google, they usually want more than a nearby address. They
              want a team that answers quickly, understands local business
              needs, explains plans in simple language and stays available
              after the software goes live.
            </p>

            <p>
              Zentrix Infotech is a software development company serving
              Lucknow and the wider Uttar Pradesh region. With 250+ projects,
              270+ clients and a 4.7/5 rating shown on our website, we build
              custom software, web applications and mobile apps that help
              businesses work faster and grow with confidence.
            </p>

            <p>
              Looking for a software partner? Call{" "}
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
                Get a Free Software Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does Near Me Really Mean for Software?
            </h3>

            <p>
              For a shop or a clinic, near me means a short drive. For
              software, the meaning is different. Your software is built by a
              team that writes code, designs screens and tests features, and
              most of that work does not need you in the same room. What
              matters is access.
            </p>

            <p>
              When you search for a software development company near you,
              these are the points that really count:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Easy contact:</strong> Can you reach a real person by
                phone, WhatsApp or email?
              </li>
              <li>
                <strong>Fast responses:</strong> Are your questions answered in
                hours, not days?
              </li>
              <li>
                <strong>Regional understanding:</strong> Does the team know how
                businesses in Uttar Pradesh actually work?
              </li>
              <li>
                <strong>Flexible meetings:</strong> Can you talk by video call
                and meet in person when it is useful?
              </li>
              <li>
                <strong>Long-term support:</strong> Will the same team help you
                after launch?
              </li>
            </ul>

            <p>
              A company that scores well on these points will serve you better
              than one that is simply close on the map.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Serves Lucknow Businesses
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad in Uttar Pradesh,
              and we support clients in Lucknow through video calls, phone and
              WhatsApp. Requirements, designs and progress reviews are easy to
              handle remotely, and meetings can be planned as your project
              needs.
            </p>

            <p>This approach has clear benefits:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                You talk directly to the people building your software.
              </li>
              <li>
                Projects move without travel delays.
              </li>
              <li>
                You can share screens and review designs together in real
                time.
              </li>
              <li>
                Updates reach you quickly, wherever you are in Lucknow.
              </li>
            </ul>

            <p>
              We do not claim an office in Lucknow. We offer what matters
              most: clear communication, regular progress and dependable
              support.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Services We Offer
            </h3>

            <p>
              Zentrix Infotech provides six core services under one roof.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom Software Development:</strong> Business
                software, management systems, portals and internal tools built
                around your workflow.
              </li>
              <li>
                <strong>Web Application Development:</strong> Fast, secure
                websites and web apps for orders, bookings and enquiries. See
                our{" "}
                <Link
                  href="/services/web-development"
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
                  href="/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  mobile app development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>UI/UX Design:</strong> Clean, easy interfaces that help
                users finish tasks without confusion. See our{" "}
                <Link
                  href="/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Cloud Solutions:</strong> Scalable infrastructure for
                performance, security and business continuity. See our{" "}
                <Link
                  href="/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, social media and
                campaigns that bring users to your product.
              </li>
            </ul>

            <p>
              Having all these services in one team means fewer handovers,
              fewer misunderstandings and a product designed to be used and
              found.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Who Needs a Software Development Company in Lucknow?
            </h3>

            <p>
              Lucknow is the capital of Uttar Pradesh and a busy centre for
              education, healthcare, trade, hospitality, real estate and
              handicrafts. Software helps in many ways:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Schools and institutes:</strong> Manage admissions,
                fees, attendance and results online.
              </li>
              <li>
                <strong>Clinics and hospitals:</strong> Simplify appointment
                booking and patient enquiries.
              </li>
              <li>
                <strong>Distributors and retailers:</strong> Track stock,
                billing, orders and deliveries.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Manage bookings and
                guest enquiries.
              </li>
              <li>
                <strong>Real estate firms:</strong> Keep leads, follow-ups and
                site visits in one place.
              </li>
              <li>
                <strong>Handicraft and chikankari sellers:</strong> Show
                catalogues and take orders online.
              </li>
            </ul>

            <p>
              If your team still depends on spreadsheets, paper registers and
              chat groups, custom software can save hours every week and
              reduce costly mistakes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work and Client Feedback
            </h3>

            <p>Our portfolio shows the range of software we build:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise platform
                with a multi-category marketplace, ordering, delivery
                management and franchise operations.
              </li>
              <li>
                <strong>KDEDU (Kamla Devi Group of Institutions):</strong> An
                education platform for students from kindergarten to degree
                level.
              </li>
              <li>
                <strong>HerbsFox:</strong> An e-commerce marketplace for herbs,
                spices, seeds and wellness products.
              </li>
              <li>
                <strong>PS Decor:</strong> A wedding and event management
                platform.
              </li>
              <li>
                <strong>Vasterior and Alluring Glimpses:</strong> Interior
                design platforms that present spaces and projects beautifully.
              </li>
            </ul>

            <p>
              Jigyasa Hospital shared that its website makes appointment
              booking easy and that patient enquiries through Google and social
              media have risen steadily. Kairvi Fort Resort reported a
              noticeable boost in bookings during peak seasons after digital
              campaigns.
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
              How to Check Any Software Company Before You Hire
            </h3>

            <p>
              Whether you choose us or someone else, run these simple checks:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Look at live work.</strong> Ask to open real products,
                not only screenshots.
              </li>
              <li>
                <strong>Read client feedback.</strong> Look for specific
                comments about communication and results.
              </li>
              <li>
                <strong>Ask about the process.</strong> A good company can
                explain each stage in plain words.
              </li>
              <li>
                <strong>Confirm ownership.</strong> Make sure you will own your
                source code, data and accounts.
              </li>
              <li>
                <strong>Test responsiveness.</strong> Notice how quickly and
                clearly the company answers your first message.
              </li>
              <li>
                <strong>Ask about support.</strong> Find out who handles fixes
                and updates after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Process
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
                <strong>Design:</strong> You review screens and flows before
                development starts.
              </li>
              <li>
                <strong>Development:</strong> We build in small stages and
                share progress often.
              </li>
              <li>
                <strong>Testing:</strong> We check features, speed, security
                and device compatibility.
              </li>
              <li>
                <strong>Launch and training:</strong> We go live carefully and
                train your team.
              </li>
              <li>
                <strong>Support:</strong> We fix issues and add features as
                your needs change.
              </li>
            </ol>

            <p>
              Starting with a focused first release is often the smartest
              path. You get a working product sooner, learn from real users
              and then grow with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What to Prepare for Your First Call
            </h3>

            <p>
              You do not need technical knowledge. Before we talk, it helps to
              think about:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The problem you want to solve</li>
              <li>
                The people who will use the software, such as staff, customers
                or both
              </li>
              <li>Any tools you use today, even spreadsheets</li>
              <li>Your preferred timeline</li>
              <li>Examples of products you like</li>
            </ul>

            <p>
              Even a rough list is enough. We will ask the right questions and
              suggest a practical plan.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Contact Zentrix Infotech Today
            </h3>

            <p>
              If you want a software development company that is easy to
              reach, clear in its planning and careful in its work, Zentrix
              Infotech is ready to help. Share your idea and we will suggest a
              practical way forward. We do not publish fixed prices, because
              cost depends on features, users, integrations and design. After
              a free consultation, you receive a clear, itemised quote.
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
                  1. Is Zentrix Infotech a software development company near
                  me in Lucknow?
                </h4>
                <p>
                  We serve Lucknow clients from our Moradabad and Ghaziabad
                  offices through video calls, phone and WhatsApp, with
                  meetings planned as needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Do you have an office in Lucknow?
                </h4>
                <p>
                  No. Our offices are in Moradabad and Ghaziabad. We support
                  Lucknow businesses remotely and stay in close contact
                  throughout the project.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What software development services do you offer?
                </h4>
                <p>
                  We offer custom software, web applications, mobile apps,
                  UI/UX design, cloud solutions and digital marketing support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does custom software cost?
                </h4>
                <p>
                  Cost depends on features, users, integrations and design. We
                  give a clear, itemised quote after a free consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does software development take?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  weeks, while larger systems take longer. We share a timeline
                  after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can small businesses in Lucknow hire you?
                </h4>
                <p>
                  Yes. We often begin with a focused first release for small
                  businesses and add features later as they grow.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own the source code?
                </h4>
                <p>
                  Ownership should be agreed in writing before work starts. We
                  discuss code, data and account ownership openly with every
                  client.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you build mobile apps too?
                </h4>
                <p>
                  Yes. We build native and cross-platform apps for Android and
                  iOS, along with the web and cloud systems behind them.
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
              currentSlug="/software-development-company-near-me-in-lucknow"
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