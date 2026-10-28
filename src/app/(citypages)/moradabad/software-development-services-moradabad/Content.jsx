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
              Software Development Services in Moradabad
            </h2>

            <p>
              Most business owners do not wake up wanting software. They wake
              up wanting orders to be easier to track, payments to arrive on
              time, staff to stop repeating the same work and reports to be
              ready when they need them. Software is simply the tool that
              makes those things happen.
            </p>

            <p>
              That is why this page looks at software development services
              from your point of view: what problem you want to solve, and
              which service solves it. Zentrix Infotech provides software
              development services in Moradabad with 250+ projects delivered,
              270+ clients and a 4.7/5 client rating.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start With the Problem, Not the Technology
            </h3>

            <p>
              Before choosing any service, ask what is slowing your business
              down today. Here are the most common answers we hear, and the
              software service that fits each.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                We lose track of orders and stock → Inventory and ERP software
              </li>
              <li>
                Enquiries and follow-ups get missed → CRM software
              </li>
              <li>
                Billing and accounts take too long → Billing and accounting
                software
              </li>
              <li>
                Customers cannot reach us online → Website, e-commerce or
                mobile app
              </li>
              <li>
                Staff duplicate the same data → Software integration and
                automation
              </li>
              <li>
                Owners cannot see live numbers → Dashboards and reporting
                tools
              </li>
              <li>
                Our existing software is slow or outdated → Modernisation and
                migration
              </li>
              <li>
                Software keeps breaking → Maintenance and support
              </li>
            </ul>

            <p>
              Matching the service to the problem keeps your budget focused
              and your project short.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Services by Business Function
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              For Sales and Enquiries
            </h4>

            <p>
              <strong>Services:</strong> CRM software, lead management,
              quotation tools, customer portals.
            </p>

            <p>
              <strong>What it solves:</strong> Missed follow-ups, scattered
              customer data and unclear sales performance.
            </p>

            <p>
              <strong>What you get:</strong> One place where every lead,
              call, quote and order is recorded, with reminders and sales
              reports.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              For Operations and Inventory
            </h4>

            <p>
              <strong>Services:</strong> ERP software, inventory management,
              purchase and production tools.
            </p>

            <p>
              <strong>What it solves:</strong> Stock confusion, delayed orders
              and manual registers.
            </p>

            <p>
              <strong>What you get:</strong> Live stock levels, low stock
              alerts, purchase planning and clear order status for every
              department.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              For Billing and Finance
            </h4>

            <p>
              <strong>Services:</strong> Billing software, invoicing, payment
              tracking and accounting integration.
            </p>

            <p>
              <strong>What it solves:</strong> Billing errors, delayed
              collections and slow month-end work.
            </p>

            <p>
              <strong>What you get:</strong> Automatic invoices, payment
              reminders, outstanding reports and smooth connection with your
              accounting tools.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              For Customer Experience
            </h4>

            <p>
              <strong>Services:</strong> Mobile apps, web portals, e-commerce
              stores, booking systems.
            </p>

            <p>
              <strong>What it solves:</strong> Customers who cannot order,
              book or track without calling you.
            </p>

            <p>
              <strong>What you get:</strong> A simple, attractive way for
              customers to browse, order, pay and get updates on their phones.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              For HR and Team Management
            </h4>

            <p>
              <strong>Services:</strong> Attendance, leave, payroll support
              and task management tools.
            </p>

            <p>
              <strong>What it solves:</strong> Manual attendance sheets,
              unclear responsibilities and slow approvals.
            </p>

            <p>
              <strong>What you get:</strong> Clear records, easy approvals and
              less paperwork for your team.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              For Management and Decision Making
            </h4>

            <p>
              <strong>Services:</strong> Dashboards, analytics and automated
              reports.
            </p>

            <p>
              <strong>What it solves:</strong> Guesswork about sales, stock,
              cash flow and staff performance.
            </p>

            <p>
              <strong>What you get:</strong> Live charts and reports that help
              owners act early instead of reacting late.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Core Software Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Software Development
            </h4>

            <p>
              Built from scratch around your workflow, branding and goals, so
              the software fits your business instead of forcing you to
              change.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Secure, fast web apps and portals for customers, dealers, staff
              and management, available on any device.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App Development
            </h4>

            <p>
              Android, iOS and cross-platform apps built with Kotlin, Swift,
              Flutter and React Native.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              ERP and CRM Development
            </h4>

            <p>
              Connected systems for operations, sales and customer management,
              with role-based access and live reports.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce Development
            </h4>

            <p>
              Online stores with catalogues, carts, secure payments, order
              tracking and admin controls.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Software Integration and API Development
            </h4>

            <p>
              Connections between your billing, accounting, payments,
              logistics and messaging tools, so data moves automatically.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Simple, clean screens that people understand without training.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud Solutions
            </h4>

            <p>
              Reliable hosting, backups, scaling and security.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Testing and Quality Assurance
            </h4>

            <p>
              Functional, performance and security checks before every
              release.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              Bug fixes, updates and improvements that keep your software
              dependable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Modernising Old Software
            </h3>

            <p>
              Many Moradabad businesses already own software that is slow,
              outdated or hard to use. You do not always need to start again.
            </p>

            <p>Our modernisation service can:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Review what your current software does well and where it fails
              </li>
              <li>Move your data safely into a new system</li>
              <li>Rebuild only the parts that need replacing</li>
              <li>Add mobile access, reports and integrations</li>
              <li>Improve speed and security</li>
            </ul>

            <p>
              This is often cheaper and faster than a full rebuild, and it
              protects the data you have already collected.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Service Delivery Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Free consultation:</strong> You describe your business
                and the problems you want to solve.
              </li>
              <li>
                <strong>Requirement analysis:</strong> We document users,
                features and workflows in plain language.
              </li>
              <li>
                <strong>Proposal:</strong> You receive a written scope,
                timeline and itemised price.
              </li>
              <li>
                <strong>Design:</strong> Clickable screens are shared for your
                approval before coding.
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
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Provide Services To
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Handicraft manufacturing and export</li>
              <li>Retail, wholesale and distribution</li>
              <li>Healthcare, hospitals and clinics</li>
              <li>Education and coaching institutes</li>
              <li>Real estate and construction</li>
              <li>Food, bakery and restaurant businesses</li>
              <li>Interior design and event management</li>
              <li>Startups building a first product</li>
            </ul>

            <p>
              Our portfolio spans e-commerce platforms, healthcare websites,
              education portals, interior studios, event brands and retail
              projects, giving our team practical experience across
              industries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Work With
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Frontend:</strong> React, Next.js, HTML, CSS,
                JavaScript
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

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security and Ownership
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Encrypted data transfer and secure storage</li>
              <li>Role-based access control</li>
              <li>Strong authentication and safe payment integration</li>
              <li>Regular backups and code reviews</li>
              <li>Clear documentation</li>
              <li>
                Full source code ownership for you after final payment
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Software Services
            </h3>

            <p>
              Every project is different, so we give a custom quote. The main
              factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of modules and features</li>
              <li>Web, mobile or both</li>
              <li>Complexity of workflows and reports</li>
              <li>Third-party integrations</li>
              <li>Design needs</li>
              <li>Hosting, support and maintenance</li>
            </ul>

            <p>
              As a guide, simple software can start from around Rs. 80,000,
              while ERP, CRM and larger systems cost more depending on scope.
              You always receive an itemised estimate with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience:</strong> 250+ projects across many
                industries.
              </li>
              <li>
                <strong>Local presence:</strong> Our office at 12/11, Buddhi
                Vihar Phase 2, Moradabad is open for meetings.
              </li>
              <li>
                <strong>Complete service:</strong> Software, apps, design,
                cloud and digital marketing together.
              </li>
              <li>
                <strong>Problem-first approach:</strong> We start with your
                business goals, not our favourite tools.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear quotes and
                milestone-based payments.
              </li>
              <li>
                <strong>Clear ownership:</strong> Your software and source
                code belong to you.
              </li>
              <li>
                <strong>Long-term support:</strong> We remain available well
                after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Tell Us What Slows Your Business Down
            </h3>

            <p>
              You do not need technical knowledge to begin. Just tell us what
              is hard, slow or frustrating in your business today. We will
              explain which software service fits, how long it will take and
              what it will cost.
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
                  1. What software development services do you provide in
                  Moradabad?
                </h4>
                <p>
                  Custom software, web apps, mobile apps, ERP, CRM,
                  e-commerce, integration, design, cloud and support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I know which service I need?
                </h4>
                <p>
                  Start with your biggest business problem. We will recommend
                  the right service in a free consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Can you improve my existing software?
                </h4>
                <p>
                  Yes. We can review, upgrade, migrate or rebuild parts of it.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does development take?
                </h4>
                <p>
                  Simple projects take 4 to 8 weeks. Larger systems may take 3
                  to 6 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much do your services cost?
                </h4>
                <p>
                  Simple software starts around Rs. 80,000. ERP and larger
                  systems cost more.
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
                  Yes. We provide bug fixes, updates and monthly maintenance
                  plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. How do I get started?
                </h4>
                <p>
                  Call +91 72488 00839 or email info@zentrixinfotech.com for a
                  free consultation.
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
                    href="/moradabad/moradabad-software-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Moradabad Software Development Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/software-development-firm-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Firm in Moradabad
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