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
              Custom Mobile App Development Company in Moradabad
            </h2>

            <p>
              Moradabad is known around the world for its brass and handicraft
              exports, and it is also home to a growing community of retailers,
              hospitals, schools, real estate firms, restaurants, startups and
              service businesses. Many of them have the same realization:
              customers now expect to find, order, book and pay through their
              phones, and a ready-made app rarely matches how a local business
              actually works.
            </p>

            <p>
              Zentrix Infotech is a custom mobile app development company based
              in Moradabad. We design and build tailor-made Android and iOS apps
              that fit your workflow, your brand and your customers. With 250+
              projects delivered, 270+ clients served and a 4.7/5 rating, we
              bring real experience in design, development, cloud and digital
              marketing, right here in your city.
            </p>

            <p>
              This page explains why custom apps are worth it, what we build and
              how you can work with a local team that understands your market.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose a Custom Mobile App?
            </h3>

            <p>
              Ready-made apps and templates can look attractive because they
              promise a quick start. But they come with limits that often show
              up after you have already invested time and money.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Built around your process.</strong> A custom app follows
                your way of working. You do not have to change your business to
                fit the software.
              </li>
              <li>
                <strong>Your brand, your experience.</strong> Colors, tone,
                screens and user journey all reflect your identity, which builds
                trust and recognition.
              </li>
              <li>
                <strong>Only the features you need.</strong> You avoid paying
                for tools you will never use, and nothing important is missing.
              </li>
              <li>
                <strong>Better security and control.</strong> You decide how
                data is stored, who can access it and how it is protected.
              </li>
              <li>
                <strong>Smooth integration.</strong> A custom app can connect
                with your website, CRM, ERP, accounting software and payment
                systems.
              </li>
              <li>
                <strong>Room to grow.</strong> As your business expands, you can
                add features, users and new services without starting from
                scratch.
              </li>
              <li>
                <strong>A competitive edge.</strong> When competitors use the
                same generic tools, a unique app helps you stand out.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Work With a Moradabad-Based App Development Company?
            </h3>

            <p>
              You can hire an app company anywhere, but a local partner offers
              clear advantages.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Face-to-face meetings.</strong> You can sit down with
                our team, sketch ideas on paper and review designs together.
                This is faster and clearer than long email chains.
              </li>
              <li>
                <strong>Understanding of the local market.</strong> We know how
                customers in Moradabad and nearby cities behave: their
                preference for UPI payments, comfort with Hindi, use of
                mid-range smartphones and the realities of uneven network
                speeds.
              </li>
              <li>
                <strong>Quick response.</strong> Same city, same time zone, easy
                phone access. Questions get answered quickly.
              </li>
              <li>
                <strong>Trust and accountability.</strong> You can visit the
                office and meet the people building your app.
              </li>
              <li>
                <strong>Support after launch.</strong> When something needs
                attention, a nearby team can step in without delay.
              </li>
              <li>
                <strong>Support for local industries.</strong> From handicraft
                exporters to retailers and clinics, we understand the way
                businesses here operate.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Office in Moradabad
            </h3>

            <p>
              <strong>Zentrix Infotech</strong>
              <br />
              12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
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
              We also have an office in Ghaziabad and work with clients across
              India through video calls and regular progress reviews.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Custom Mobile App Development Services in Moradabad
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Android App Development
            </h4>

            <p>
              Android is the most widely used platform in India, running on
              everything from budget phones to premium devices. We build apps
              that stay fast and stable across screen sizes, OS versions and
              network conditions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom iOS App Development
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
              both Android and iOS. This shortens delivery time and lowers cost
              while keeping the experience consistent.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App UI/UX Design
            </h4>

            <p>
              Our designers create simple, attractive interfaces and share
              wireframes and clickable prototypes, so you can approve the
              experience before development begins.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce and Marketplace Apps
            </h4>

            <p>
              We build shopping apps with product catalogues, secure payments,
              order tracking, offers and admin dashboards. They suit local
              retailers, exporters, franchises and multi-vendor platforms.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Enterprise and Business Apps
            </h4>

            <p>
              We develop internal tools for sales teams, field staff and
              delivery partners, covering attendance, inventory, approvals,
              reports and customer management.
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
              We build secure servers on scalable cloud infrastructure that
              grows with your user base.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              We fix bugs, release updates and keep your app compatible with new
              Android and iOS versions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Custom Apps for Moradabad Businesses
            </h3>

            <p>
              Here are examples of how local businesses can use a custom app.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Handicraft and brass exporters.</strong> A catalogue app
                with product galleries, enquiry forms and quick sharing with
                buyers.
              </li>
              <li>
                <strong>Retailers and showrooms.</strong> Online ordering,
                offers, loyalty rewards and delivery tracking.
              </li>
              <li>
                <strong>Hospitals and clinics.</strong> Appointment booking,
                doctor profiles and report access.
              </li>
              <li>
                <strong>Schools, colleges and coaching institutes.</strong>{" "}
                Student portals, notices, attendance, fee payment and mock
                tests.
              </li>
              <li>
                <strong>Restaurants, bakeries and grocery stores.</strong>{" "}
                Menus, ordering, delivery and customer rewards.
              </li>
              <li>
                <strong>Real estate and interior studios.</strong> Property
                listings, project showcases and lead capture.
              </li>
              <li>
                <strong>Service businesses.</strong> Booking apps for repairs,
                salons, cleaning and consultations.
              </li>
              <li>
                <strong>Startups.</strong> A focused first version, or MVP, that
                tests your idea quickly and affordably.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Features That Work Well for Local Users
            </h3>

            <p>
              Apps built for this region should include a few practical touches:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Simple login with OTP</li>
              <li>UPI, wallet and card payments</li>
              <li>Hindi and other regional language support</li>
              <li>Lightweight design that runs well on budget phones</li>
              <li>Offline access or smart loading for weak networks</li>
              <li>WhatsApp and SMS integration for updates and support</li>
              <li>Cash-on-delivery or pay-later options for e-commerce</li>
            </ul>

            <p>
              We plan these details from the start, so your app feels natural to
              the people who will use it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Custom App Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free Consultation:</strong> We meet you in person or
                online to understand your idea, audience, competitors and goals.
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
                share regular updates. You can test features and give feedback
                early.
              </li>
              <li>
                <strong>Testing and Quality Assurance:</strong> We check
                functionality, speed, security and compatibility across real
                devices.
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
              Technologies We Use
            </h3>

            <p>
              We choose tools that fit your project rather than forcing one
              stack on every client.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Cross platform:</strong> Flutter and React Native
              </li>
              <li>
                <strong>Native:</strong> Kotlin and Java for Android, Swift for
                iOS
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
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience across industries.</strong> Our portfolio
                includes e-commerce platforms, interior design studios,
                education institutions, healthcare providers, wedding and event
                brands and more.
              </li>
              <li>
                <strong>Complete digital partner.</strong> Design, development,
                cloud and digital marketing are all under one roof. After your
                app is built, we can help you promote it through search, social
                media and ads, so local customers find and install it.
              </li>
              <li>
                <strong>Transparent pricing and timelines.</strong> You receive
                a detailed scope, timeline and itemized estimate before work
                begins. There are no hidden charges.
              </li>
              <li>
                <strong>Quality and security.</strong> We test on real devices
                and in different network conditions. We follow secure coding
                practices, with proper authentication and data protection, to
                keep user information safe.
              </li>
              <li>
                <strong>Honest advice.</strong> If a phased launch or simpler
                first version suits your budget better, we will tell you.
              </li>
              <li>
                <strong>Long-term support.</strong> We stay with you after
                launch, with updates and new feature ideas as your business
                grows.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Custom App Development Company in Moradabad
            </h3>

            <p>Use this checklist before you decide:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Visit the office and meet the team.</li>
              <li>Review their portfolio and live projects.</li>
              <li>Read client reviews and check ratings.</li>
              <li>Ask which technologies they use and why.</li>
              <li>Confirm they provide design, testing and post-launch support.</li>
              <li>Request an itemized quote with a timeline.</li>
              <li>Clarify who owns the source code and data.</li>
            </ul>

            <p>
              A company that listens carefully before proposing a solution is
              usually the one that delivers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Let&rsquo;s Build Your Custom App in Moradabad
            </h3>

            <p>
              If you are planning a mobile app, Zentrix Infotech is close by and
              ready to help. Tell us about your idea, and our team will suggest
              the right approach, timeline and budget, with honest guidance and
              no pressure.
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
              <strong>Moradabad Office:</strong> 12/11, Buddhi Vihar Phase 2,
              Moradabad, Uttar Pradesh 244001
              <br />
              <strong>Ghaziabad Office:</strong> A-20 Sunshine Apartment,
              Ghaziabad, UP 201013
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
                  1. Where is your Moradabad office?
                </h4>
                <p>
                  We are at 12/11, Buddhi Vihar Phase 2, Moradabad, Uttar
                  Pradesh 244001.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What is a custom mobile app?
                </h4>
                <p>
                  It is an app built from scratch around your exact business
                  needs, instead of a ready-made template.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does a custom app cost in Moradabad?
                </h4>
                <p>
                  Cost depends on features, design, platforms and integrations.
                  We give a clear itemized estimate after reviewing your needs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does it take to build a custom app?
                </h4>
                <p>
                  A simple app takes about 6 to 10 weeks. Larger apps take
                  longer.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you build for both Android and iOS?
                </h4>
                <p>
                  Yes. We build native apps for each platform, or one cross
                  platform app for both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can I meet your team in person?
                </h4>
                <p>
                  Yes. You can visit our Moradabad office or schedule a meeting.
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
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/custom-mobile-app-development-company-in-moradabad"
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