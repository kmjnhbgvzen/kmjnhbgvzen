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
              App Development Services in Moradabad
            </h2>

            <p>
              Customers today search, compare and buy from their phones. If
              your business does not have a smooth mobile experience, you are
              quietly losing orders to competitors who do. A well-built app
              turns your phone-first customers into loyal, repeat buyers.
            </p>

            <p>
              Zentrix Infotech provides complete app development services in
              Moradabad, from the first idea to launch and long-term support.
              With 250+ projects delivered, 270+ clients and a 4.7/5 client
              rating, our team knows how to build apps that are fast, secure
              and easy to use. This page explains every service we offer, how
              we work and what you can expect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Your Business Needs a Mobile App
            </h3>

            <p>
              A mobile app is more than a smaller version of your website. It
              is a direct channel to your customers.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Always visible:</strong> Your icon stays on the home
                screen, one tap away.
              </li>
              <li>
                <strong>Better engagement:</strong> Push notifications bring
                users back without paid ads.
              </li>
              <li>
                <strong>Faster sales:</strong> Fewer steps from browsing to
                ordering or booking.
              </li>
              <li>
                <strong>Smarter operations:</strong> Orders, appointments and
                reports are organised in one place.
              </li>
              <li>
                <strong>Stronger trust:</strong> A professional app makes your
                brand look established and reliable.
              </li>
            </ul>

            <p>
              From Moradabad retailers and exporters to clinics, schools and
              startups, businesses of every size are moving to mobile. The
              right service partner makes that move simple.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our App Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              1. Android App Development
            </h4>

            <p>
              Android is the most widely used platform in India. We build
              Android apps that run smoothly on many devices, load quickly and
              use modern, secure architecture. This is often the best starting
              point for businesses that want maximum reach.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              2. iOS App Development
            </h4>

            <p>
              For customers who prefer iPhones, we create refined iOS apps that
              follow Apple design standards and pass App Store review without
              delays. Ideal for premium brands, corporate users and service
              businesses.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              3. Cross-Platform App Development
            </h4>

            <p>
              With Flutter and React Native, one codebase powers both Android
              and iOS. You save cost and launch time while keeping a
              consistent, high-quality experience. Startups and small
              businesses love this option.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              4. Custom App Development
            </h4>

            <p>
              No two businesses work the same way. Our custom apps are designed
              around your exact process, features and branding, so you get a
              tool that fits like a glove instead of forcing your team to adapt
              to generic software.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              5. E-commerce App Development
            </h4>

            <p>
              Product catalogues, search, cart, secure payments, order
              tracking, coupons and customer accounts, all in one app. We
              connect your app with your website and inventory so everything
              stays in sync.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              6. Business and Enterprise Apps
            </h4>

            <p>
              Attendance, inventory, billing, CRM, field-staff tracking,
              approvals and reports. These apps remove manual paperwork and
              give owners a live view of the business.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              7. UI/UX Design for Mobile Apps
            </h4>

            <p>
              Good design decides whether users stay or leave. Our designers
              create clean screens, simple navigation and attractive layouts,
              and you approve clickable prototypes before development begins.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              8. Backend, API and Cloud Services
            </h4>

            <p>
              Every app needs a reliable engine behind it. We build secure
              APIs, admin dashboards and databases, and host them on scalable
              cloud infrastructure that grows with your user base.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              9. App Testing and Quality Assurance
            </h4>

            <p>
              We test on real devices for speed, security, usability and
              compatibility, so bugs are fixed before your customers ever see
              them.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 sm:text-xl">
              10. App Maintenance and Support
            </h4>

            <p>
              Operating systems and devices change regularly. We offer bug
              fixes, security updates, performance tuning and new features
              after launch, so your app stays fresh and dependable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve in Moradabad
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Retail, wholesale and e-commerce</li>
              <li>Handicraft manufacturers and exporters</li>
              <li>Hospitals, clinics and diagnostic centres</li>
              <li>Schools, colleges and coaching institutes</li>
              <li>Real estate and construction</li>
              <li>Restaurants, bakeries and food businesses</li>
              <li>Service providers needing booking and payments</li>
              <li>Startups validating a new product idea</li>
            </ul>

            <p>
              Our portfolio spans e-commerce, healthcare, education, interiors,
              events and retail. That cross-industry experience helps us
              suggest features that really work for your type of business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our App Development Process
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Discovery call:</strong> We learn about your business,
                customers and goals.
              </li>
              <li>
                <strong>Planning and scope:</strong> Features are listed,
                prioritised and priced in writing.
              </li>
              <li>
                <strong>Design and prototype:</strong> You see and approve the
                screens before coding.
              </li>
              <li>
                <strong>Development:</strong> We build in short stages with
                regular demos.
              </li>
              <li>
                <strong>Testing:</strong> Thorough checks for bugs, speed and
                security.
              </li>
              <li>
                <strong>Launch:</strong> We guide publishing on Google Play and
                the App Store.
              </li>
              <li>
                <strong>Support and growth:</strong> Ongoing updates,
                monitoring and marketing help.
              </li>
            </ul>

            <p>
              You stay informed at every stage, and nothing is built without
              your approval.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Work With
            </h3>

            <p>We pick tools that match your goals and budget.</p>

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
                <strong>Integrations:</strong> Payment gateways, maps, SMS and
                email, WhatsApp and third-party APIs
              </li>
              <li>
                <strong>Hosting:</strong> Reliable cloud infrastructure for
                speed and uptime
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of App Development
            </h3>

            <p>
              Every app is different, so we give a custom quote after
              understanding your needs. The main factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of screens and features</li>
              <li>Android only, iOS only or both</li>
              <li>Admin panel and backend complexity</li>
              <li>Third-party integrations</li>
              <li>Design detail and animations</li>
              <li>Support and maintenance needs</li>
            </ul>

            <p>
              Indicatively, a simple app can start from around Rs. 80,000,
              while medium and advanced apps cost more depending on features.
              We always share an itemised estimate, so there are no hidden
              charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech for App Development
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local team in Moradabad:</strong> Easy meetings, quick
                support and an understanding of the local market.
              </li>
              <li>
                <strong>Experience you can check:</strong> 250+ projects and
                real client feedback across industries.
              </li>
              <li>
                <strong>Everything under one roof:</strong> Design,
                development, cloud hosting and digital marketing.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear scope, clear
                payment milestones and no surprises.
              </li>
              <li>
                <strong>Source code ownership:</strong> The app and its code
                belong to you after final payment.
              </li>
              <li>
                <strong>Growth focus:</strong> We can promote your app through
                SEO and digital marketing after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Tips Before You Start Your App Project
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Define one main problem your app should solve</li>
              <li>Start with essential features and add more later</li>
              <li>
                Study competitor apps to learn what users like and dislike
              </li>
              <li>
                Decide your platform based on where your customers are
              </li>
              <li>Keep some budget for marketing and updates</li>
              <li>
                Pick a partner who explains things in simple language
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Our App Development Team
            </h3>

            <p>
              Ready to turn your idea into a working app? Book a free
              consultation with our team. We will suggest the right platform,
              features and budget, and share a clear plan for launch.
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
                  1. What app development services do you offer in Moradabad?
                </h4>
                <p>
                  Android, iOS, cross-platform, custom, e-commerce and business
                  apps, plus design, backend and maintenance.
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
                  features, platforms and integrations.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Should I build for Android or iOS?
                </h4>
                <p>
                  Choose based on your customers. Cross-platform covers both at
                  a lower cost.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you help publish apps on Google Play and the App Store?
                </h4>
                <p>
                  Yes. We guide setup, listing, screenshots and submission.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own the source code?
                </h4>
                <p>
                  Yes. Complete ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you provide maintenance after launch?
                </h4>
                <p>
                  Yes. We offer bug fixes, updates and monthly support plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you also promote my app?
                </h4>
                <p>
                  Yes. Our SEO and digital marketing team can help you reach
                  more users.
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
                    href="/moradabad/app-development-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    App Development Services in Moradabad
                  </Link>
                </li>
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
                    href="/moradabad/android-app-development-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Android App Development Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/ios-app-development-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    iOS App Development Moradabad
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
              currentSlug="/moradabad/app-development-services-in-moradabad"
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