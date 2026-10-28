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
              App Development Company in Moradabad
            </h2>

            <p>
              Your customers are already on their phones. They search for
              products, compare prices, book services and place orders without
              ever opening a laptop. If your business is not there with a
              smooth, reliable app, someone else will be. That is where a good
              app development company in Moradabad makes the difference.
            </p>

            <p>
              Zentrix Infotech is a Moradabad-based IT company that designs and
              builds mobile apps for businesses of every size. With 250+
              projects delivered, 270+ clients and a 4.7/5 client rating, we
              have the experience to take your idea from a rough sketch to a
              live app that customers enjoy using.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech was built to bridge the gap between technology
              and real business problems. We are a team of developers,
              designers and marketers who believe software should be simple,
              useful and profitable for the people who use it.
            </p>

            <p>
              Our work covers web development, mobile apps, software
              development, UI/UX design, cloud solutions and digital marketing.
              Because all of these skills sit under one roof, your app is
              designed, built, hosted and promoted by a team that works
              together, not by five different vendors who never talk.
            </p>

            <p>
              We serve clients in Moradabad, Ghaziabad and across India, with
              offices in both cities.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose an App Development Company Over a Freelancer
            </h3>

            <p>
              Freelancers can suit tiny, one-time tasks. For a real business
              app, a company offers more safety and more skill.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A full team:</strong> Designer, developers, tester and
                project manager work on your app together.
              </li>
              <li>
                <strong>Backup and continuity:</strong> If one person is
                unavailable, work does not stop.
              </li>
              <li>
                <strong>Defined process:</strong> Planning, testing and quality
                checks are built in.
              </li>
              <li>
                <strong>Accountability:</strong> A registered business with a
                real office and written agreements.
              </li>
              <li>
                <strong>Long-term support:</strong> Someone is always available
                when your app needs updates.
              </li>
              <li>
                <strong>Wider skills:</strong> Backend, cloud, security and
                marketing are handled in-house.
              </li>
            </ul>

            <p>
              A company approach reduces risk, and risk is the most expensive
              part of any software project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our App Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Android App Development
            </h4>

            <p>
              Android is the most widely used mobile platform in India. We
              build fast, secure and reliable Android apps that perform well on
              both premium and budget phones.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              iOS App Development
            </h4>

            <p>
              We create refined iPhone apps that follow Apple design standards
              and pass App Store review smoothly.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cross-Platform App Development
            </h4>

            <p>
              With Flutter and React Native, one codebase works on both Android
              and iOS. You save time and cost without losing quality.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom App Development
            </h4>

            <p>
              Every business works differently. We build apps around your
              processes, branding and goals instead of forcing you into a
              generic template.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce App Development
            </h4>

            <p>
              Product catalogues, search, cart, secure payments, order tracking
              and offers, all connected with your website and inventory.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Business and Enterprise Apps
            </h4>

            <p>
              Attendance, billing, inventory, CRM, field-staff tracking and
              reports that replace paperwork and give owners live visibility.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Clean layouts and simple navigation help users complete actions
              in a few taps. You approve clickable prototypes before
              development begins.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Backend, API and Cloud
            </h4>

            <p>
              Secure servers, admin dashboards and scalable cloud hosting that
              grow as your user base grows.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              Bug fixes, security updates, performance improvements and new
              features after launch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Retail, wholesale and e-commerce</li>
              <li>Handicraft manufacturers and exporters</li>
              <li>Hospitals, clinics and diagnostic labs</li>
              <li>Schools, colleges and coaching institutes</li>
              <li>Real estate and construction</li>
              <li>Restaurants, bakeries and food brands</li>
              <li>Interior design and event management</li>
              <li>Startups testing a new idea</li>
            </ul>

            <p>
              Our portfolio covers online stores, healthcare websites,
              education platforms, interior studios and event brands. That
              variety gives us practical insight into what customers in each
              industry expect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Discovery:</strong> We study your business, audience
                and goals.
              </li>
              <li>
                <strong>Scope and quote:</strong> A written feature list with
                timeline and pricing.
              </li>
              <li>
                <strong>UI/UX design:</strong> Screens are shared for your
                approval.
              </li>
              <li>
                <strong>Development:</strong> Work happens in stages with
                regular demos.
              </li>
              <li>
                <strong>Testing:</strong> We check speed, security and
                usability on real devices.
              </li>
              <li>
                <strong>Launch:</strong> We guide you through Google Play and
                App Store publishing.
              </li>
              <li>
                <strong>Support and growth:</strong> Monitoring, updates and
                marketing help.
              </li>
            </ul>

            <p>
              At every stage, you see progress and approve decisions. Nothing
              is hidden.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use
            </h3>

            <p>We choose technology based on your goals and budget.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Mobile:</strong> Kotlin, Swift, Flutter, React Native
              </li>
              <li>
                <strong>Backend:</strong> Node.js, PHP, Laravel
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB, Firebase
              </li>
              <li>
                <strong>Integrations:</strong> Payment gateways, maps, SMS,
                email, WhatsApp and other APIs
              </li>
              <li>
                <strong>Hosting:</strong> Reliable cloud infrastructure for
                uptime and speed
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security and Quality You Can Trust
            </h3>

            <p>
              Customers trust apps with personal and payment information, so
              security is part of every project.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Encrypted data transfer and secure storage</li>
              <li>Strong login and role-based access control</li>
              <li>Trusted payment gateway integration</li>
              <li>Regular code reviews and clean documentation</li>
              <li>Testing across devices and screen sizes</li>
              <li>Full source code ownership for you after final payment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects App Development Cost
            </h3>

            <p>Each app is different, so we give a custom quote. The main factors are:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of screens and features</li>
              <li>Android, iOS or both</li>
              <li>Backend and admin panel needs</li>
              <li>Third-party integrations</li>
              <li>Design complexity</li>
              <li>Support and maintenance period</li>
            </ul>

            <p>
              Indicatively, simple apps can start from around Rs. 80,000, while
              larger apps cost more depending on features. We always provide an
              itemised estimate, so there are no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience:</strong> 250+ projects across many
                industries.
              </li>
              <li>
                <strong>Local presence:</strong> Our Moradabad office is at
                12/11, Buddhi Vihar Phase 2, easy to visit anytime.
              </li>
              <li>
                <strong>One-stop solution:</strong> Design, development, cloud
                and digital marketing in one place.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear quotes and
                milestone-based payments.
              </li>
              <li>
                <strong>Honest advice:</strong> We tell you what to build first
                and what can wait.
              </li>
              <li>
                <strong>Growth support:</strong> SEO and marketing help to
                promote your app after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose the Right App Development Company
            </h3>

            <p>Use this checklist before you decide.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask to see live apps and speak to past clients</li>
              <li>Get the scope, timeline and price in writing</li>
              <li>Confirm who owns the source code and store accounts</li>
              <li>Understand how security and testing are handled</li>
              <li>Check what post-launch support includes</li>
              <li>
                Choose a team that asks about your business before talking
                about technology
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Let Us Build Your App
            </h3>

            <p>
              Whether you are a startup with a first idea or an established
              business ready to go mobile, our team is ready to help. Book a
              free consultation and we will recommend the right platform,
              features and budget.
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
                  1. What does an app development company do?
                </h4>
                <p>
                  It plans, designs, builds, tests, launches and supports
                  mobile apps for your business.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does it take to build an app?
                </h4>
                <p>
                  Simple apps take 4 to 8 weeks. Larger apps may take 3 to 6
                  months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does app development cost?
                </h4>
                <p>
                  Simple apps start around Rs. 80,000. Final cost depends on
                  features and platforms.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you build both Android and iOS apps?
                </h4>
                <p>
                  Yes. We build native apps for each platform or one
                  cross-platform app for both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will I own the source code?
                </h4>
                <p>
                  Yes. Complete ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you help publish the app on Google Play and the App
                  Store?
                </h4>
                <p>Yes. We guide setup, listing and submission.</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide bug fixes, updates and monthly maintenance
                  plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I meet your team in person?
                </h4>
                <p>
                  Yes. Visit our Moradabad office or call to schedule a
                  meeting.
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
                    href="/moradabad/app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    App Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/app-development-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    App Development Services in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/best-app-developers-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Best App Developers in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/hire-professional-app-developers-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Hire Professional App Developers in Moradabad
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
              currentSlug="/moradabad/app-development-company-in-moradabad"
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