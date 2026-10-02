import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
  {
    question: "What is custom ERP development?",
    answer:
      "It is building ERP software tailored to your business processes instead of buying a ready-made package.",
  },
  {
    question: "How long does custom ERP development take?",
    answer:
      "Small systems typically take two to four months. Larger, multi-module ERPs take six months or more, usually delivered in phases.",
  },
  {
    question: "Is custom ERP better than off-the-shelf ERP?",
    answer:
      "It is better when your workflows are unique or you need specific integrations. Packaged ERP suits standard processes.",
  },
  {
    question: "How much does custom ERP cost in India?",
    answer:
      "Cost depends on modules, integrations and complexity. We share a detailed quote after understanding your requirements.",
  },
  {
    question: "Can the ERP be GST and e-invoice ready?",
    answer:
      "Yes. We build GST invoicing, e-invoice and e-way bill support into the system.",
  },
  {
    question: "Can you integrate the ERP with Tally or my website?",
    answer:
      "Yes. We integrate ERP with Tally, e-commerce sites, payment gateways, couriers and WhatsApp.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "Ownership terms are agreed in the contract. Custom projects commonly include full ownership for the client.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, updates, security patches and new feature development.",
  },
  {
    question: "Can a small business afford custom ERP?",
    answer:
      "Yes. Starting with essential modules and expanding in phases keeps the investment manageable.",
  },
  {
    question: "Can you build a mobile app for my ERP?",
    answer:
      "Yes. We develop Android and iOS apps so your team can work from anywhere.",
  },
];

const Content = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ProfessionalService",
        name: "Zentrix Infotech",
        description:
          "Custom ERP development services in India delivering tailored software solutions, web development, mobile apps, UI/UX design, cloud solutions, and digital marketing.",
        areaServed: ["India", "Worldwide"],
        url: "https://www.zentrixinfotech.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          bestRating: "5",
          ratingCount: "270",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Custom ERP Development Services in India
            </h1>

            <p>
              Most growing Indian businesses run on a patchwork: Tally for accounts, Excel for inventory, WhatsApp for orders, and a separate tool for HR. Information gets copied by hand, reports arrive late, and nobody has one reliable view of the business. A custom ERP fixes this by bringing your operations into one system built around how you actually work.
            </p>

            <p>
              At Zentrix Infotech, we design and develop custom ERP software for businesses across India. This page explains what custom ERP development involves, which modules and industries it suits, how the process runs, and what to look for in a development partner.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Is Custom ERP Development?
            </h2>

            <p>
              ERP (Enterprise Resource Planning) software connects the core functions of a business, such as sales, purchase, inventory, accounts, HR and production, on a single database. Custom ERP development means building that system to fit your workflows instead of reshaping your workflows to fit a packaged product.
            </p>

            <p>
              You decide which modules exist, how approvals flow, what each role can see, and which reports management gets. Nothing is included just because a vendor bundled it, and nothing you need is missing.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Indian Businesses Are Choosing Custom ERP
            </h2>

            <p>
              Packaged ERP products work well for standard processes. Many Indian businesses are not standard, and the gaps show up quickly:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unique workflows. Job-work billing, dealer-wise pricing, batch and expiry tracking, and multi-branch stock transfers rarely fit a generic template.</li>
              <li>Licence costs that grow with you. Per-user pricing becomes expensive as teams expand. With custom software you own the system.</li>
              <li>Compliance needs. GST, e-invoicing, e-way bills and TDS must work properly for Indian businesses, not as afterthoughts.</li>
              <li>Integration needs. Your ERP must work with your website, payment gateways, courier partners, WhatsApp, Tally and biometric devices.</li>
              <li>Scalability. A custom system can add modules, branches and users without a platform migration.</li>
            </ul>

            <p>
              For many companies, a custom ERP costs more upfront than a subscription but less over several years, and it fits far better.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Custom ERP Development Services
            </h2>

            <p>
              Our software development team covers the full ERP lifecycle.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ERP consulting and requirement analysis. We study your departments, documents, approvals and reports before writing any code, then deliver a clear scope, module list and roadmap.</li>
              <li>Custom ERP software development. We build web-based ERP systems from scratch, with role-based access, dashboards, audit trails and reporting.</li>
              <li>ERP customization. If you already use an ERP and it falls short, we extend it with new modules, custom reports and workflow changes.</li>
              <li>ERP integration. We connect your ERP with accounting tools, e-commerce stores, CRM, payment gateways, logistics providers, SMS and WhatsApp services, and hardware such as barcode scanners.</li>
              <li>Mobile ERP apps. Field teams, sales executives and managers can approve requests, check stock and punch orders from their phones through our mobile app development service.</li>
              <li>Cloud ERP and migration. We deploy your ERP on secure, scalable infrastructure and move data from old systems. See our cloud solutions.</li>
              <li>ERP modernization. Old desktop or legacy systems can be rebuilt on a modern web stack without losing years of business data.</li>
              <li>Support and maintenance. After launch we handle updates, bug fixes, backups, security patches and feature additions.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              ERP Modules We Develop
            </h2>

            <p>
              We build only the modules your business needs, and you can add more later.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inventory and warehouse management: stock levels, multiple warehouses, batch and serial tracking, reorder alerts</li>
              <li>Sales and CRM: quotations, orders, invoices, dealer and customer management, lead tracking</li>
              <li>Purchase and vendor management: purchase orders, GRN, vendor ratings, payment tracking</li>
              <li>Accounts and finance: ledgers, GST invoicing, payables and receivables, expense tracking, financial reports</li>
              <li>HR and payroll: attendance, leave, salary processing, PF and ESI calculations</li>
              <li>Production and manufacturing: BOM, work orders, job cards, production planning, wastage tracking</li>
              <li>Project management: tasks, timelines, resource allocation, billing milestones</li>
              <li>Reports and analytics: live dashboards for owners and department heads</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Build ERP For
            </h2>

            <p>
              Every sector has its own processes, so we design ERP around industry-specific needs.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manufacturing: production planning, raw material tracking, quality checks, dispatch</li>
              <li>Retail and distribution: multi-store inventory, dealer management, scheme and discount handling</li>
              <li>Healthcare: patient records, billing, pharmacy stock, appointment management</li>
              <li>Education: admissions, fees, attendance, timetables, staff management</li>
              <li>Construction and real estate: project costing, vendor payments, site-wise inventory</li>
              <li>Trading and e-commerce: order processing, courier integration, returns, multi-channel stock sync</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Built for Indian Compliance and Business Practices
            </h2>

            <p>
              Many ERP products treat India as an afterthought. We build for Indian realities from day one:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>GST-compliant invoicing, credit notes and return-ready reports</li>
              <li>E-invoice and e-way bill support</li>
              <li>TDS and TCS handling</li>
              <li>Tally data import and export</li>
              <li>Rupee-first formatting and multi-branch operations across states</li>
              <li>Optional Hindi and regional-language interfaces for shop-floor staff</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our ERP Development Process
            </h2>

            <p>
              A clear process keeps timelines and budgets predictable.
            </p>

            <div className="space-y-6">
              <ProcessStep
                number={1}
                title="Discovery and requirement gathering"
                description="We interview stakeholders, map current workflows and identify bottlenecks. The output is a requirement document you approve."
              />

              <ProcessStep
                number={2}
                title="Planning and architecture"
                description="We define modules, database structure, integrations, user roles and technology, then split the build into phases so you get a working system early."
              />

              <ProcessStep
                number={3}
                title="UI/UX design"
                description="ERP screens are used all day, so they must be fast and easy. Our UI/UX designers create clean interfaces that reduce training time."
              />

              <ProcessStep
                number={4}
                title="Development in sprints"
                description="We build module by module and demo each sprint, so you give feedback while changes are still cheap."
              />

              <ProcessStep
                number={5}
                title="Testing"
                description="We test functionality, calculations, permissions, performance and security before anything goes live."
              />

              <ProcessStep
                number={6}
                title="Data migration and deployment"
                description="We import your existing data, run the new system in parallel where needed, and go live in a planned window."
              />

              <ProcessStep
                number={7}
                title="Training and support"
                description="We train your team and stay available for fixes and enhancements."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Technology and Security
            </h2>

            <p>
              We choose technology based on your needs, not trends. Typical builds use modern web frameworks, robust databases and API-first architecture, which keeps the ERP fast and easy to extend. Security is part of the design:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Role-based access so employees see only what they should</li>
              <li>Encrypted data in transit and at rest</li>
              <li>Audit logs recording who changed what and when</li>
              <li>Regular automated backups and a recovery plan</li>
              <li>Secure cloud hosting with monitoring</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Affects the Cost of Custom ERP in India?
            </h2>

            <p>
              There is no fixed price, because every ERP is different. The main factors are:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Number and complexity of modules</li>
              <li>Number of integrations (accounting, payments, logistics, hardware)</li>
              <li>Mobile app requirements</li>
              <li>Data migration volume</li>
              <li>Customization depth and reporting needs</li>
              <li>Hosting, support and maintenance plan</li>
            </ul>

            <p>
              A focused ERP for a small business with a few modules costs far less than a multi-branch manufacturing system. The best way to control cost is a phased rollout: launch the most critical modules first and add the rest as the business grows. We provide a detailed estimate after the requirement discussion, with no hidden charges.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Zentrix Infotech for ERP Development?
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Experience across industries. With 250+ projects delivered for 270+ clients, we understand varied business workflows.</li>
              <li>Transparent communication. You get regular demos, clear timelines and a single point of contact.</li>
              <li>Business-first approach. We start with your processes and goals, not with a technology pitch.</li>
              <li>End-to-end capability. Software, web, mobile, cloud and UI/UX all sit under one roof, so your ERP, website and apps work together.</li>
              <li>Local presence. Our teams in Moradabad and Ghaziabad make meetings and support easy for businesses across Uttar Pradesh and Delhi NCR, while we serve clients across India.</li>
              <li>Long-term support. We stay with you after launch.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Build Your Custom ERP?
            </h2>

            <p>
              If your teams are tired of duplicate entries, delayed reports and disconnected tools, a custom ERP can give you control and clarity. Contact Zentrix Infotech for a free consultation and a clear roadmap for your ERP project.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>

              <ul className="list-disc list-inside space-y-2">
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
                    href="/services/mobile-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Cloud Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Designing
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/custom-erp-development-services-india"
            />
          </div>
        </div>

        <div className="w-full lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

function ProcessStep({ number, title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {number}. {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default Content;
