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
      name: "What is ERP software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP is a single system that connects functions like sales, stock, billing, accounts and staff records so data is shared and updated automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech develop custom ERP software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom ERP systems with the modules and workflows your business needs, including web access and integrations.",
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
      name: "Is ERP suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We start small businesses with one or two core modules and add more as the business grows.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ERP development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on modules, users, integrations and data migration. We give a clear, itemised quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does ERP development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release can take a few months, while larger systems take longer. We share a timeline after discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you move my existing data into the new ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help migrate data from spreadsheets or older systems and suggest cleaning errors before the move.",
      },
    },
    {
      "@type": "Question",
      name: "Can the ERP connect with my website or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can connect the ERP with your website, mobile app, payment tools and other systems where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the source code and data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work starts. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. Share your current process and we will arrange a free consultation.",
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
              ERP Software Development Company in Lucknow
            </h2>

            <p>
              As a business grows, information spreads across too many places.
              Sales sit in one sheet, stock in another, accounts in a third
              and staff records in a register. Nobody sees the full picture,
              and small mistakes become costly.
            </p>

            <p>
              An ERP system, short for Enterprise Resource Planning, brings
              these parts into one connected platform. Zentrix Infotech is an
              ERP software development company serving Lucknow and the wider
              Uttar Pradesh region. We design and build custom ERP systems
              around the way your business actually runs. With 250+ projects,
              270+ clients and a 4.7/5 rating shown on our website, we focus
              on software that your team will really use.
            </p>

            <p>
              Want to organise your business in one system? Call{" "}
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
                Get a Free ERP Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is ERP Software?
            </h3>

            <p>
              ERP software is a single system that manages the main functions
              of a business and shares data between them. When a customer
              places an order, the system can update stock, create the
              invoice, record the payment and show the result in your
              reports, without anyone entering the same data twice.
            </p>

            <p>A good ERP gives you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                One source of truth for your business data.
              </li>
              <li>
                Less manual work and fewer errors.
              </li>
              <li>
                Clear, up-to-date reports for better decisions.
              </li>
              <li>
                Defined access for each user, so people see only what they
                need.
              </li>
              <li>
                A base that can grow as your business grows.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Custom ERP vs Ready-Made ERP
            </h3>

            <p>Both options can work. The right choice depends on your process.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fit:</strong> Ready-made ERP follows a standard
                process, while custom ERP follows yours.
              </li>
              <li>
                <strong>Complexity:</strong> Ready-made ERP can include many
                modules you never use, while custom ERP includes what you
                need.
              </li>
              <li>
                <strong>Change:</strong> Adjusting a ready-made system can be
                slow, while custom ERP can evolve with your business.
              </li>
              <li>
                <strong>Integration:</strong> Custom ERP can connect with your
                website, app, payment tools and other systems.
              </li>
              <li>
                <strong>Start-up effort:</strong> Ready-made ERP can start
                fast, while custom ERP needs planning and development time.
              </li>
            </ul>

            <p>
              If a standard system fits your process, it may be enough. If
              your workflow is unique, or you keep working around the
              software, a custom ERP often delivers more value over time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              ERP Modules We Can Build
            </h3>

            <p>
              We build only the modules that your business needs, and add more
              later.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Sales and orders:</strong> Quotes, orders, customers
                and follow-ups.
              </li>
              <li>
                <strong>Inventory and stock:</strong> Items, stock levels,
                warehouses and alerts.
              </li>
              <li>
                <strong>Purchase and vendors:</strong> Purchase orders,
                supplier records and approvals.
              </li>
              <li>
                <strong>Billing and accounts:</strong> Invoices, payments,
                expenses and basic reports.
              </li>
              <li>
                <strong>Human resources:</strong> Staff records, attendance,
                leave and payroll inputs.
              </li>
              <li>
                <strong>Production and operations:</strong> Work orders, job
                tracking and delivery status.
              </li>
              <li>
                <strong>CRM:</strong> Leads, enquiries, customer history and
                reminders.
              </li>
              <li>
                <strong>Reports and dashboards:</strong> Live numbers for
                owners and managers.
              </li>
              <li>
                <strong>User roles and permissions:</strong> Controlled access
                for each team member.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              ERP for Different Industries in Lucknow
            </h3>

            <p>
              Lucknow is the capital of Uttar Pradesh and a busy centre for
              education, healthcare, trade, hospitality, real estate and
              handicrafts. ERP needs differ by sector.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Education (school and college ERP):</strong> Admissions,
                fees, attendance, timetables, results and parent updates.
              </li>
              <li>
                <strong>Trading and distribution:</strong> Stock, billing,
                purchase, party accounts and delivery tracking.
              </li>
              <li>
                <strong>Manufacturing and handicrafts:</strong> Raw material,
                production stages, orders and dispatch.
              </li>
              <li>
                <strong>Healthcare:</strong> Appointments, patient records,
                billing and inventory.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Bookings, billing,
                staff and vendor coordination.
              </li>
              <li>
                <strong>Real estate:</strong> Leads, bookings, payment
                schedules and follow-ups.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Signs You Are Ready for an ERP
            </h3>

            <p>Consider an ERP if:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Your team enters the same data in more than one place.
              </li>
              <li>
                Stock numbers rarely match what is actually on the shelf.
              </li>
              <li>
                Month-end reports take days to prepare.
              </li>
              <li>
                Owners cannot see sales, stock and payments in one view.
              </li>
              <li>
                Different branches or teams use different formats.
              </li>
              <li>
                Mistakes in billing or records keep repeating.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our ERP Development Process
            </h3>

            <p>
              ERP projects touch many people, so a careful process matters.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We study how your business runs
                today, department by department.
              </li>
              <li>
                <strong>Process mapping:</strong> We write down each workflow,
                such as order to delivery, and find gaps and repeated work.
              </li>
              <li>
                <strong>Planning:</strong> We choose the modules for the first
                release and agree on priorities.
              </li>
              <li>
                <strong>UI/UX design:</strong> You review screens and user
                flows before development starts.
              </li>
              <li>
                <strong>Development:</strong> We build in small stages so you
                can test each module early.
              </li>
              <li>
                <strong>Data migration:</strong> We help move your existing
                data from spreadsheets or old systems into the new one.
              </li>
              <li>
                <strong>Testing and training:</strong> We check accuracy,
                speed and security, then train your team.
              </li>
              <li>
                <strong>Launch and support:</strong> We go live carefully and
                provide fixes and improvements afterwards.
              </li>
            </ol>

            <p>
              Starting with one or two core modules is often the smartest
              path. Your team learns the system gradually, you see real value
              sooner and you add more modules with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why ERP Projects Succeed or Fail
            </h3>

            <p>
              The software is only part of the story. These points often
              decide the result.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Involve the people who use it.</strong> Staff who help
                shape the system are more likely to adopt it.
              </li>
              <li>
                <strong>Keep the first release focused.</strong> Trying to
                digitise everything at once can overwhelm a team.
              </li>
              <li>
                <strong>Clean your data.</strong> Old records with errors
                should be fixed before migration, not copied across.
              </li>
              <li>
                <strong>Train and support.</strong> A short training plan and
                quick help in the first weeks make a big difference.
              </li>
              <li>
                <strong>Plan for change.</strong> Your business will evolve,
                so the ERP should be easy to extend.
              </li>
            </ul>

            <p>
              We guide you on each of these points throughout the project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven experience.</strong> We have delivered 250+
                projects for 270+ clients, and our homepage shows a 4.7/5
                rating.
              </li>
              <li>
                <strong>Business-first approach.</strong> We start with your
                process and goals, not with technology.
              </li>
              <li>
                <strong>One team for the full system.</strong> Design,
                development, cloud and digital marketing support come from one
                team, so web, mobile and ERP parts fit together.
              </li>
              <li>
                <strong>Related platform experience.</strong> Our portfolio
                includes platforms such as The Buyzaar Mart, a retail
                franchise platform with ordering, delivery management and
                franchise operations, and KDEDU, an education platform serving
                students from kindergarten to degree level. We can discuss
                which of this experience is relevant to your ERP needs during
                a call.
              </li>
              <li>
                <strong>Clear communication.</strong> We explain technical
                points in plain language and keep one point of contact for
                your project.
              </li>
            </ul>

            <p>
              Clients also share their experience. Jigyasa Hospital reported
              that its website makes appointment booking easy and that patient
              enquiries through Google and social media have risen steadily.
            </p>

            <p>
              Want to talk about your process? Email{" "}
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
              Security and Data Ownership
            </h3>

            <p>
              An ERP holds your most important business data, so we plan
              secure logins, user roles and data protection from the start.
              Before work begins, agree in writing who owns the source code,
              data and accounts. We discuss this openly with every client. Our
              cloud solutions can also support reliable hosting and business
              continuity.
            </p>

            <p>
              See our{" "}
              <Link
                href="/services/cloud-solutions"
                className="text-blue-600 hover:underline"
              >
                cloud solutions
              </Link>{" "}
              service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working with Lucknow Clients
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad and supports clients
              in Lucknow and across Uttar Pradesh through video calls, phone
              and WhatsApp. Process discussions, designs and progress reviews
              are easy to handle remotely, and meetings can be planned as your
              project needs. You stay in direct contact with the people
              building your system.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of an ERP?
            </h3>

            <p>
              We do not publish fixed prices, because every ERP is different.
              These factors shape the cost:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of modules and workflows.</li>
              <li>Number of users and roles.</li>
              <li>Integrations with other tools.</li>
              <li>Amount of data to migrate.</li>
              <li>Web only or web with mobile access.</li>
              <li>Support and updates after launch.</li>
            </ul>

            <p>
              After a free consultation, you receive a clear, itemised quote
              with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your ERP Project
            </h3>

            <p>
              If you want an ERP software development company in Lucknow that
              listens first, maps your process carefully and builds with
              care, Zentrix Infotech is ready to help. Share your current way
              of working, even if it is only spreadsheets and notes, and we
              will suggest a practical way forward.
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
                  1. What is ERP software?
                </h4>
                <p>
                  ERP is a single system that connects functions like sales,
                  stock, billing, accounts and staff records so data is shared
                  and updated automatically.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech develop custom ERP software?
                </h4>
                <p>
                  Yes. We build custom ERP systems with the modules and
                  workflows your business needs, including web access and
                  integrations.
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
                  4. Is ERP suitable for small businesses?
                </h4>
                <p>
                  Yes. We start small businesses with one or two core modules
                  and add more as the business grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does ERP development cost?
                </h4>
                <p>
                  Cost depends on modules, users, integrations and data
                  migration. We give a clear, itemised quote after a free
                  consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How long does ERP development take?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  months, while larger systems take longer. We share a
                  timeline after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you move my existing data into the new ERP?
                </h4>
                <p>
                  Yes. We help migrate data from spreadsheets or older systems
                  and suggest cleaning errors before the move.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can the ERP connect with my website or app?
                </h4>
                <p>
                  Yes. We can connect the ERP with your website, mobile app,
                  payment tools and other systems where needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Will I own the source code and data?
                </h4>
                <p>
                  Ownership should be agreed in writing before work starts. We
                  discuss code, data and account ownership openly with every
                  client.
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
                  . Share your current process and we will arrange a free
                  consultation.
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
              currentSlug="/erp-software-development-company-in-lucknow"
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