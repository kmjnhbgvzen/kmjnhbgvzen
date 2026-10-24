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
              Mobile App Development Company Near Me: Local Experts You Can Meet
              and Trust
            </h2>

            <p>
              When you search for a mobile app development company near you, you
              are looking for more than a vendor. You want a team you can meet
              face to face, explain your idea to in person and call when you
              need an answer. Building an app is a big investment, and working
              with a local partner makes the whole journey easier.
            </p>

            <p>
              Zentrix Infotech is a mobile app development company with offices
              in Moradabad and Ghaziabad, serving businesses across Uttar
              Pradesh, Delhi NCR and the rest of India. With 250+ projects
              delivered, 270+ clients served and a 4.7/5 rating, we combine
              local accessibility with professional design and engineering.
            </p>

            <p>
              This page explains why choosing a nearby company helps, what we
              offer and how we turn your idea into a working app.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose a Mobile App Development Company Near You?
            </h3>

            <p>
              Remote work is common today, and we serve clients online too. But
              a local team offers advantages that are hard to match.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Face-to-face meetings.</strong> Explaining your vision
                across a table is faster and clearer than a long email chain.
                You can sketch ideas, review screens together and settle
                questions on the spot.
              </li>
              <li>
                <strong>Quicker communication.</strong> Same time zone, same
                language and easy phone access mean fewer delays and
                misunderstandings.
              </li>
              <li>
                <strong>Better understanding of your market.</strong> A local
                team knows your customers&rsquo; habits, such as UPI payments,
                Hindi and regional language preferences, mid-range smartphones
                and uneven network speeds.
              </li>
              <li>
                <strong>Greater trust and accountability.</strong> You can visit
                the office, meet the people working on your project and build a
                real relationship.
              </li>
              <li>
                <strong>Easier support after launch.</strong> When something
                needs attention, a local team can respond quickly.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Locations
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Moradabad Office:</strong> 12/11, Buddhi Vihar Phase 2,
                Moradabad, Uttar Pradesh 244001
              </li>
              <li>
                <strong>Ghaziabad Office:</strong> A-20 Sunshine Apartment,
                Ghaziabad, UP 201013
              </li>
            </ul>

            <p>
              If you are in Moradabad, Ghaziabad or nearby cities and areas, you
              can meet our team in person. If you are elsewhere, we work
              smoothly through video calls, shared project boards and regular
              progress reviews.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Mobile App Development Services We Offer
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Android App Development
            </h4>

            <p>
              Android is the most widely used platform in India, running on
              everything from budget phones to flagship devices. We build apps
              that stay fast and stable across screen sizes, OS versions and
              network conditions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              iOS App Development
            </h4>

            <p>
              We create polished iPhone and iPad apps that follow Apple
              guidelines and are prepared carefully for App Store review.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cross Platform App Development
            </h4>

            <p>
              Using Flutter and React Native, we build one app that works on
              both Android and iOS. This shortens delivery time and reduces cost
              while keeping the experience consistent.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Mobile App Development
            </h4>

            <p>
              Every business works differently. We build apps around your
              workflow, brand and customers rather than using a generic template.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App UI/UX Design
            </h4>

            <p>
              Our designers create simple, attractive interfaces and share
              wireframes and prototypes, so you can approve the experience
              before development begins.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce and Marketplace Apps
            </h4>

            <p>
              We build shopping apps with product catalogues, secure payments,
              order tracking, offers and admin dashboards. They suit local
              retailers, franchises and multi-vendor platforms.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Enterprise Mobile Apps
            </h4>

            <p>
              We develop internal tools for sales teams, field staff and delivery
              partners, covering attendance, inventory, approvals and reporting.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              API and Third-Party Integration
            </h4>

            <p>
              We connect your app with payment gateways, maps, SMS and WhatsApp
              messaging, CRM, ERP and analytics tools.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud and Backend Development
            </h4>

            <p>
              We build secure servers and deploy them on scalable cloud
              infrastructure that grows with your user base.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              We fix bugs, update features and keep your app compatible with new
              Android and iOS releases.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local Businesses That Benefit From a Mobile App
            </h3>

            <p>
              Many local businesses are discovering how much an app can do.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Retail shops and showrooms:</strong> Online catalogues,
                offers and ordering
              </li>
              <li>
                <strong>Handicraft and brass exporters:</strong> Product
                showcases and enquiry apps
              </li>
              <li>
                <strong>Hospitals and clinics:</strong> Appointment booking and
                report access
              </li>
              <li>
                <strong>Schools, colleges and coaching institutes:</strong>{" "}
                Student portals, tests and notices
              </li>
              <li>
                <strong>Real estate and interior studios:</strong> Property
                listings and lead capture
              </li>
              <li>
                <strong>Restaurants, bakeries and grocery stores:</strong>{" "}
                Ordering, delivery and loyalty rewards
              </li>
              <li>
                <strong>Resorts and event planners:</strong> Bookings and
                enquiries
              </li>
              <li>
                <strong>Startups:</strong> Quick, affordable first versions to
                test ideas
              </li>
            </ul>

            <p>
              Wherever you operate, an app gives customers a direct and
              convenient way to reach you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Experience Across Industries
            </h4>

            <p>
              Our portfolio includes e-commerce platforms, interior design
              studios, education institutions, healthcare providers, wedding and
              event brands and more. This experience helps us understand your
              users and avoid common mistakes.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Complete Digital Partner
            </h4>

            <p>
              Design, development, cloud and digital marketing sit under one
              roof. After your app is ready, we can help you promote it through
              search, social media and ads, so local customers find and install
              it.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Transparent Pricing and Timelines
            </h4>

            <p>
              You receive a detailed scope, timeline and itemized estimate
              before work begins. There are no hidden charges.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Quality and Security
            </h4>

            <p>
              We test on real devices and in different network conditions. We
              follow secure coding practices, with proper authentication and
              data protection, to keep user information safe.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Honest Advice
            </h4>

            <p>
              If a phased launch or a simpler first version suits your budget
              better, we will tell you. A smart start often saves both time and
              money.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Long-Term Support
            </h4>

            <p>
              We stay with you after launch, with updates, improvements and new
              feature ideas as your business grows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Mobile App Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free Consultation:</strong> We meet you in person or
                online to discuss your idea, audience, competitors and goals.
              </li>
              <li>
                <strong>Planning and Estimation:</strong> We define the
                features, technology, timeline and budget in clear terms.
              </li>
              <li>
                <strong>UI/UX Design:</strong> You see wireframes and a
                clickable prototype and approve the design before coding starts.
              </li>
              <li>
                <strong>Development:</strong> We build in short sprints and
                share regular progress updates. You can test features and give
                feedback early.
              </li>
              <li>
                <strong>Testing and Quality Assurance:</strong> We check
                functionality, speed, security and compatibility across devices.
              </li>
              <li>
                <strong>Launch:</strong> We prepare store listings and handle
                submission to Google Play and the Apple App Store.
              </li>
              <li>
                <strong>Support and Growth:</strong> We monitor performance,
                collect feedback and release updates over time.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Features Built for Local Users
            </h3>

            <p>
              Apps for Indian customers need a few extras to perform well:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Simple login with OTP</li>
              <li>UPI, wallet and card payments</li>
              <li>Support for Hindi and other regional languages</li>
              <li>Lightweight design that works on budget phones</li>
              <li>Offline access or smart loading for weak networks</li>
              <li>WhatsApp and SMS integration for updates and support</li>
              <li>Cash-on-delivery or pay-later options for e-commerce</li>
            </ul>

            <p>
              We plan these details from the start so your app feels natural to
              the people who will use it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Native:</strong> Kotlin and Java for Android, Swift for
                iOS
              </li>
              <li>
                <strong>Cross platform:</strong> Flutter and React Native
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Laravel and REST APIs
              </li>
              <li>
                <strong>Database and cloud:</strong> Firebase, MySQL, MongoDB
                and leading cloud platforms
              </li>
              <li>
                <strong>Features:</strong> Push notifications, payments, maps,
                chat and analytics
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Mobile App Development Company Near You
            </h3>

            <p>Use this checklist before you decide:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Visit the office or schedule a meeting.</li>
              <li>Review their portfolio and live projects.</li>
              <li>Read client reviews and check ratings.</li>
              <li>Ask which technologies they use and why.</li>
              <li>Confirm they offer design, testing and post-launch support.</li>
              <li>Request an itemized quote with a timeline.</li>
              <li>Clarify who owns the source code and data.</li>
            </ul>

            <p>
              Distance matters less than reliability, but a nearby team that is
              also dependable is the best of both worlds.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Visit or Call Us Today
            </h3>

            <p>
              If you want to build a mobile app, Zentrix Infotech is close by
              and ready to help. Tell us about your idea, and our team will
              suggest the right approach, timeline and budget, with honest
              guidance and no pressure.
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
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <strong>Moradabad:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
              <br />
              <strong>Ghaziabad:</strong> A-20 Sunshine Apartment, Ghaziabad, UP
              201013
            </p>

            <p>
              Let&rsquo;s build an app your customers will love to use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Where is Zentrix Infotech located?
                </h4>
                <p>
                  We have offices in Moradabad and Ghaziabad, Uttar Pradesh.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Can I meet your team in person?
                </h4>
                <p>
                  Yes. You can visit either office or schedule a meeting with our
                  team.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Do you work with clients outside your city?
                </h4>
                <p>
                  Yes. We work with clients across India through video calls and
                  regular progress reviews.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does it cost to build a mobile app?
                </h4>
                <p>
                  Cost depends on features, design, platforms and integrations.
                  We give a clear estimate after understanding your needs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does it take to build an app?
                </h4>
                <p>
                  A simple app takes about 6 to 10 weeks. Larger apps take
                  longer.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you build for both Android and iOS?
                </h4>
                <p>
                  Yes. We build native apps for each platform, or one cross
                  platform app for both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will I own the source code?
                </h4>
                <p>
                  Yes. You get full ownership of the app and its source code.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates, bug fixes and new feature
                  development.
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
                    href="/mobile-app-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Best Mobile App Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-app-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Top Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/custom-mobile-app-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Custom Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cross-platform-app-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Cross Platform App Development Company
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
                    href="/mobile-app-development-company-in-india"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Company in India
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/mobile-app-development-company-near-me"
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