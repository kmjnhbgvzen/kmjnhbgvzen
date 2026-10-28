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
              Moradabad Software Development Services
            </h2>

            <p>
              Software should make your business easier to run, not harder.
              When it is built well, it saves hours of manual work, reduces
              mistakes and gives you clear numbers to make decisions. When it
              is built badly, it becomes one more problem to manage. The
              difference lies in choosing the right software development
              services and the right team behind them.
            </p>

            <p>
              Zentrix Infotech offers complete software development services in
              Moradabad. With 250+ projects delivered, 270+ clients and a
              4.7/5 client rating, we help businesses plan, build, launch and
              maintain software that fits the way they work. This page walks
              through each service, who it suits and what you receive.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Services at a Glance
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>ERP software development</li>
              <li>CRM software development</li>
              <li>Mobile app development</li>
              <li>E-commerce development</li>
              <li>Software integration and API development</li>
              <li>UI/UX design</li>
              <li>Cloud solutions</li>
              <li>Testing and quality assurance</li>
              <li>Maintenance and support</li>
            </ul>

            <p>
              You can choose a single service or combine several into one
              complete solution.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              1. Custom Software Development
            </h3>

            <p>
              <strong>What it is:</strong> Software built from scratch around
              your workflow, branding and goals.
            </p>

            <p>
              <strong>Who it suits:</strong> Businesses with processes that
              ready-made tools cannot handle, such as manufacturers with
              special production steps or service firms with unique billing.
            </p>

            <p>
              <strong>What you receive:</strong> A tailor-made system, complete
              source code, documentation and training for your team.
            </p>

            <p>
              <strong>Typical results:</strong> Fewer manual tasks, faster work
              and no payment for features you never use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              2. Web Application Development
            </h3>

            <p>
              <strong>What it is:</strong> Secure, responsive web apps and
              portals that work on any browser and device.
            </p>

            <p>
              <strong>Who it suits:</strong> Companies that need customer
              portals, dealer logins, booking systems, dashboards or internal
              tools.
            </p>

            <p>
              <strong>What you receive:</strong> A fast, scalable web app with
              an admin panel, user roles and reports.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              3. ERP Software Development
            </h3>

            <p>
              <strong>What it is:</strong> One connected system for inventory,
              purchase, sales, accounts, HR and production.
            </p>

            <p>
              <strong>Who it suits:</strong> Manufacturers, wholesalers, traders
              and growing companies tired of managing data in separate files.
            </p>

            <p>
              <strong>What you receive:</strong> A central platform with live
              reports, alerts and role-based access, so every department sees
              the same up-to-date data.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              4. CRM Software Development
            </h3>

            <p>
              <strong>What it is:</strong> A system to track leads, follow-ups,
              customer history and sales performance.
            </p>

            <p>
              <strong>Who it suits:</strong> Sales teams, real estate firms,
              schools, clinics and service businesses that depend on enquiries.
            </p>

            <p>
              <strong>What you receive:</strong> Lead tracking, reminders,
              pipeline views and reports that show what is working.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              5. Mobile App Development
            </h3>

            <p>
              <strong>What it is:</strong> Android, iOS and cross-platform apps
              built with Kotlin, Swift, Flutter and React Native.
            </p>

            <p>
              <strong>Who it suits:</strong> Businesses that want to serve
              customers or staff directly on their phones.
            </p>

            <p>
              <strong>What you receive:</strong> A tested app, store publishing
              support, backend and admin panel.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              6. E-commerce Development
            </h3>

            <p>
              <strong>What it is:</strong> Online stores and marketplaces with
              catalogues, carts, secure payments and order tracking.
            </p>

            <p>
              <strong>Who it suits:</strong> Retailers, manufacturers,
              exporters and D2C brands selling online.
            </p>

            <p>
              <strong>What you receive:</strong> A conversion-focused store
              with admin controls, payment gateway setup and inventory sync.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              7. Software Integration and API Development
            </h3>

            <p>
              <strong>What it is:</strong> Connecting your existing tools so
              data moves automatically.
            </p>

            <p>
              <strong>Who it suits:</strong> Businesses using separate systems
              for billing, accounting, logistics, payments and messaging.
            </p>

            <p>
              <strong>What you receive:</strong> Secure APIs and connections
              that remove duplicate data entry and cut errors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              8. UI/UX Design
            </h3>

            <p>
              <strong>What it is:</strong> Research, wireframes, visual design
              and clickable prototypes.
            </p>

            <p>
              <strong>Who it suits:</strong> Any project where ease of use
              matters, which is nearly every project.
            </p>

            <p>
              <strong>What you receive:</strong> Approved screens and a design
              system that developers follow exactly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              9. Cloud Solutions
            </h3>

            <p>
              <strong>What it is:</strong> Reliable hosting, backups, scaling
              and security setup.
            </p>

            <p>
              <strong>Who it suits:</strong> Businesses that cannot afford
              downtime or data loss.
            </p>

            <p>
              <strong>What you receive:</strong> A stable, secure environment
              that grows as your user base grows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              10. Testing and Quality Assurance
            </h3>

            <p>
              <strong>What it is:</strong> Functional, performance, security
              and compatibility testing.
            </p>

            <p>
              <strong>Who it suits:</strong> Every software project, before
              every release.
            </p>

            <p>
              <strong>What you receive:</strong> A bug-checked product and a
              clear summary of what was tested.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              11. Maintenance and Support
            </h3>

            <p>
              <strong>What it is:</strong> Bug fixes, security patches,
              performance tuning and new features after launch.
            </p>

            <p>
              <strong>Who it suits:</strong> Any live software that your
              business depends on.
            </p>

            <p>
              <strong>What you receive:</strong> Monthly support with quick
              response whenever something needs attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Software Development Services Work
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Free consultation:</strong> You explain your business,
                problems and goals.
              </li>
              <li>
                <strong>Requirement analysis:</strong> We document features,
                users and workflows.
              </li>
              <li>
                <strong>Proposal:</strong> You receive a written scope,
                timeline and itemised price.
              </li>
              <li>
                <strong>Design:</strong> Screens are shared for approval before
                coding.
              </li>
              <li>
                <strong>Development:</strong> We build in short stages with
                regular demos.
              </li>
              <li>
                <strong>Testing:</strong> Bugs are fixed before anything goes
                live.
              </li>
              <li>
                <strong>Deployment and training:</strong> We launch the
                software and train your staff.
              </li>
              <li>
                <strong>Support:</strong> Continuous updates and help as you
                grow.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Flexible Engagement Models
            </h3>

            <p>Different projects need different arrangements.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fixed-price project:</strong> Best when scope is clear
                and well defined.
              </li>
              <li>
                <strong>Dedicated team:</strong> Best for long-term products
                and ongoing development.
              </li>
              <li>
                <strong>Time and material:</strong> Best when requirements may
                change as you learn.
              </li>
              <li>
                <strong>Maintenance plan:</strong> Best for live software that
                needs regular care.
              </li>
            </ul>

            <p>
              We explain the pros and cons honestly and recommend the one that
              suits you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Solutions for Moradabad Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Handicraft and export:</strong> Product catalogues,
                enquiry management, order tracking and buyer portals.
              </li>
              <li>
                <strong>Retail and wholesale:</strong> Billing, inventory,
                dealer portals and online ordering.
              </li>
              <li>
                <strong>Healthcare:</strong> Appointment booking, patient
                records and reporting tools.
              </li>
              <li>
                <strong>Education:</strong> Admission, fee, attendance and
                result management.
              </li>
              <li>
                <strong>Real estate:</strong> Lead tracking, property listings
                and site visit scheduling.
              </li>
              <li>
                <strong>Food businesses:</strong> Online ordering, table
                booking and delivery coordination.
              </li>
              <li>
                <strong>Startups:</strong> Fast MVPs that test your idea before
                you invest heavily.
              </li>
            </ul>

            <p>
              Our portfolio covers e-commerce platforms, healthcare websites,
              education portals, interior studios and event brands, which gives
              us practical insight into each of these areas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Frontend:</strong> React, Next.js, HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Backend:</strong> Node.js, PHP, Laravel
              </li>
              <li>
                <strong>Mobile:</strong> Kotlin, Swift, Flutter, React Native
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB, Firebase
              </li>
              <li>
                <strong>Integrations:</strong> Payment gateways, maps, SMS,
                email, WhatsApp and third-party APIs
              </li>
              <li>
                <strong>Hosting:</strong> Reliable cloud infrastructure
              </li>
            </ul>

            <p>
              We pick tools that match your needs and budget, not just what is
              popular.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security You Can Rely On
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Encrypted data transfer and secure storage</li>
              <li>Role-based access control</li>
              <li>Strong authentication and safe payment integration</li>
              <li>Regular backups and code reviews</li>
              <li>
                Full source code ownership for you after final payment
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Software Development Services
            </h3>

            <p>Every project is different, so we give a custom quote. The main factors are:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of modules and features</li>
              <li>Web, mobile or both</li>
              <li>Reports and workflow complexity</li>
              <li>Third-party integrations</li>
              <li>Design needs</li>
              <li>Hosting and support requirements</li>
            </ul>

            <p>
              As a guide, simple software can start from around Rs. 80,000,
              while ERP, CRM and larger systems cost more depending on scope.
              You always receive an itemised quote with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech for Software Development Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven experience:</strong> 250+ projects across many
                industries.
              </li>
              <li>
                <strong>Local presence:</strong> Our office at 12/11, Buddhi
                Vihar Phase 2, Moradabad is open for meetings.
              </li>
              <li>
                <strong>Complete service:</strong> Software, apps, design,
                cloud and digital marketing under one roof.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear quotes and
                milestone-based payments.
              </li>
              <li>
                <strong>Plain communication:</strong> Updates in simple
                language, not jargon.
              </li>
              <li>
                <strong>Clear ownership:</strong> Your software and source code
                belong to you.
              </li>
              <li>
                <strong>Long-term support:</strong> We stay available well
                after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Request a Free Consultation
            </h3>

            <p>
              Tell us about your business and what you want to improve. We will
              recommend the right services, a realistic timeline and a clear
              budget, with no obligation.
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
                  1. What software development services do you offer in
                  Moradabad?
                </h4>
                <p>
                  Custom software, web apps, ERP, CRM, mobile apps, e-commerce,
                  integration, design, cloud and support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Can I choose only one service?
                </h4>
                <p>
                  Yes. You can take a single service or combine several into a
                  full solution.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does software development take?
                </h4>
                <p>
                  Simple projects take 4 to 8 weeks. Larger systems may take 3
                  to 6 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much do your services cost?
                </h4>
                <p>
                  Simple software starts around Rs. 80,000. ERP and larger
                  systems cost more.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will I own the source code?
                </h4>
                <p>
                  Yes. Full ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you connect software with my existing tools?
                </h4>
                <p>
                  Yes. We integrate payments, accounting, WhatsApp, SMS and
                  other systems.
                </p>
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
                    href="/moradabad/moradabad-software-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Moradabad Software Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
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
              currentSlug="/moradabad/moradabad-software-development-services"
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