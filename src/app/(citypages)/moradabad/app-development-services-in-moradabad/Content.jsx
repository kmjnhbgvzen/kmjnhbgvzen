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
              Choosing app development services is not like buying a ready-made
              product. You are choosing a process, a team and a result. The
              right service gives you an app that fits your business, runs
              smoothly and earns its cost back. The wrong one leaves you with
              delays, bugs and a bill that keeps growing.
            </p>

            <p>
              Zentrix Infotech provides end-to-end app development services in
              Moradabad. With 250+ projects delivered, 270+ clients and a
              4.7/5 client rating, our team handles everything from first idea
              to live app and long-term support. This page explains each
              service in detail: what it includes, who it suits and what you
              receive at the end.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Service Snapshot: What You Get at a Glance
            </h3>

            <p>Every Zentrix app development engagement can include:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Business and requirement analysis</li>
              <li>UI/UX design with clickable prototypes</li>
              <li>Android, iOS or cross-platform development</li>
              <li>Backend, admin panel and API development</li>
              <li>Quality testing on real devices</li>
              <li>Google Play and App Store publishing support</li>
              <li>Maintenance, updates and growth support</li>
            </ul>

            <p>
              You can take the full package or pick only the services you need.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              1. Android App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> Native Android apps built in
              Kotlin, optimised for different screen sizes, Android versions
              and budget devices.
            </p>

            <p>
              <strong>Best for:</strong> Businesses whose customers mainly use
              Android phones, which covers a large share of the Indian market.
            </p>

            <p>
              <strong>You receive:</strong> A tested app file, Play Store
              listing support, source code and documentation.
            </p>

            <p>
              Typical examples include retail ordering apps, delivery apps,
              school apps and service booking apps.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              2. iOS App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> Native iPhone apps built in
              Swift that follow Apple design guidelines and security rules.
            </p>

            <p>
              <strong>Best for:</strong> Premium brands, corporate users and
              services where customers prefer iPhones.
            </p>

            <p>
              <strong>You receive:</strong> A store-ready build, App Store
              submission help, source code and documentation.
            </p>

            <p>
              Our team prepares the app carefully for Apple review, which helps
              avoid rejection and repeated delays.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              3. Cross-Platform App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> One shared codebase built with
              Flutter or React Native that runs on both Android and iOS.
            </p>

            <p>
              <strong>Best for:</strong> Startups and small businesses that
              want wide reach on a controlled budget.
            </p>

            <p>
              <strong>You receive:</strong> Two store-ready apps from a single
              development effort, plus code and documentation.
            </p>

            <p>
              This is often the best value option because it reduces both cost
              and launch time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              4. Custom App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> Apps designed from scratch
              around your exact process, branding and goals.
            </p>

            <p>
              <strong>Best for:</strong> Businesses with unique workflows that
              ready-made apps cannot handle.
            </p>

            <p>
              <strong>You receive:</strong> A tailor-made solution with
              features you actually use, not a crowded template full of options
              you never touch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              5. E-commerce App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> Product catalogue, search and
              filters, cart, secure checkout, order tracking, coupons, customer
              accounts and admin controls.
            </p>

            <p>
              <strong>Best for:</strong> Retailers, wholesalers, D2C brands and
              manufacturers selling directly to customers.
            </p>

            <p>
              <strong>You receive:</strong> A shopping app connected with your
              website, payment gateways and inventory.
            </p>

            <p>
              Our portfolio includes e-commerce platforms, so we understand
              what makes shoppers complete a purchase.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              6. Enterprise and Business App Development Services
            </h3>

            <p>
              <strong>What it includes:</strong> Internal tools for attendance,
              billing, inventory, CRM, field-staff tracking, approvals and
              reports.
            </p>

            <p>
              <strong>Best for:</strong> Growing companies tired of spreadsheets
              and manual follow-ups.
            </p>

            <p>
              <strong>You receive:</strong> A secure app with role-based access
              and a live dashboard of your operations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              7. UI/UX Design Services for Apps
            </h3>

            <p>
              <strong>What it includes:</strong> User research, wireframes,
              visual design and clickable prototypes.
            </p>

            <p>
              <strong>Best for:</strong> Anyone who wants an app that looks
              professional and feels effortless to use.
            </p>

            <p>
              <strong>You receive:</strong> Approved screens and a design
              system your developers follow exactly.
            </p>

            <p>
              Good design lifts downloads, reduces drop-offs and builds trust
              from the first tap.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              8. Backend, API and Cloud Services
            </h3>

            <p>
              <strong>What it includes:</strong> Secure servers, databases,
              APIs, admin panels and cloud hosting using Node.js, PHP and
              Laravel.
            </p>

            <p>
              <strong>Best for:</strong> Apps that handle user accounts,
              orders, payments or large amounts of data.
            </p>

            <p>
              <strong>You receive:</strong> A stable, scalable backend and an
              admin dashboard to manage your app without technical help.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              9. App Testing and Quality Assurance
            </h3>

            <p>
              <strong>What it includes:</strong> Functional, performance,
              security and compatibility testing on real devices.
            </p>

            <p>
              <strong>Best for:</strong> Every app, before every release.
            </p>

            <p>
              <strong>You receive:</strong> A bug-checked app and a clear
              testing summary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              10. App Maintenance and Support Services
            </h3>

            <p>
              <strong>What it includes:</strong> Bug fixes, security patches,
              OS compatibility updates, performance tuning and feature
              additions.
            </p>

            <p>
              <strong>Best for:</strong> Live apps that need to stay fast, safe
              and up to date.
            </p>

            <p>
              <strong>You receive:</strong> Monthly support with quick response
              whenever something needs attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Provide App Services To
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Retail, wholesale and e-commerce</li>
              <li>Handicraft manufacturers and exporters</li>
              <li>Healthcare, hospitals and clinics</li>
              <li>Schools, colleges and coaching institutes</li>
              <li>Real estate and construction</li>
              <li>Food, bakery and restaurant brands</li>
              <li>Interior design and event management</li>
              <li>Startups and new product ideas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Service Delivery Works
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Discovery call:</strong> We understand your business,
                audience and goals.
              </li>
              <li>
                <strong>Scope and quote:</strong> You get a written feature
                list, timeline and price.
              </li>
              <li>
                <strong>Design approval:</strong> You review and approve
                screens before coding.
              </li>
              <li>
                <strong>Agile development:</strong> Short build stages with
                regular demos.
              </li>
              <li>
                <strong>Testing:</strong> Bugs are fixed before anything goes
                live.
              </li>
              <li>
                <strong>Launch:</strong> We help publish your app on Google
                Play and the App Store.
              </li>
              <li>
                <strong>Support:</strong> Ongoing updates, monitoring and
                improvements.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Indicative Timelines and Pricing
            </h3>

            <p>
              Every project is unique, so exact numbers come after a short
              discussion. As a general guide:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Simple apps:</strong> around 4 to 8 weeks, starting
                from roughly Rs. 80,000
              </li>
              <li>
                <strong>Medium apps with payments and admin panel:</strong>{" "}
                around 2 to 4 months
              </li>
              <li>
                <strong>Advanced apps with custom integrations:</strong> 4 to 6
                months or more
              </li>
            </ul>

            <p>
              Price depends on features, platforms, integrations, design detail
              and support needs. You always receive an itemised quote with no
              hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech for App Development Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local team:</strong> Our office at 12/11, Buddhi Vihar
                Phase 2, Moradabad is open for meetings.
              </li>
              <li>
                <strong>Broad experience:</strong> Projects across e-commerce,
                healthcare, education, real estate and more.
              </li>
              <li>
                <strong>Everything in one place:</strong> Design, development,
                cloud and digital marketing together.
              </li>
              <li>
                <strong>Clear communication:</strong> Regular updates in simple
                language.
              </li>
              <li>
                <strong>Code ownership:</strong> Your app and source code
                belong to you after final payment.
              </li>
              <li>
                <strong>Growth support:</strong> SEO and marketing help to
                promote your app once it is live.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Request a Free Consultation
            </h3>

            <p>
              Tell us what you want to build and we will recommend the right
              services, platform and budget. There is no obligation, just clear
              advice.
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
                  1. What app development services do you provide in
                  Moradabad?
                </h4>
                <p>
                  Android, iOS, cross-platform, custom, e-commerce and
                  enterprise apps, plus design, backend, testing and support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Can I choose only the services I need?
                </h4>
                <p>
                  Yes. You can take the full package or individual services
                  like design or maintenance.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does app development take?
                </h4>
                <p>
                  Simple apps take 4 to 8 weeks. Larger apps may take 3 to 6
                  months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much do your services cost?
                </h4>
                <p>
                  Simple apps start around Rs. 80,000. We give an itemised
                  quote after understanding your needs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you build for both Android and iOS?
                </h4>
                <p>
                  Yes. We build native apps or one cross-platform app for both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own the source code?
                </h4>
                <p>
                  Yes. Full ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide bug fixes, updates and monthly maintenance.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. How do I get started?
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
                  </a>{" "}
                  for a free consultation.
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