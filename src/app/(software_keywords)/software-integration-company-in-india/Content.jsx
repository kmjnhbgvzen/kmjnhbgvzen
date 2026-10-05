import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
  {
    question: "1. What does a software integration company in India do?",
    answer: "It connects your business applications so data flows automatically between them, removing manual entry and errors.",
  },
  {
    question: "2. How do I know if I need software integration?",
    answer: "If staff re-enter data, reports do not match or leads get lost between tools, you likely need integration.",
  },
  {
    question: "3. Can you integrate payment gateways with my billing and accounting?",
    answer: "Yes. We connect payment gateways so payments update invoices, orders and accounting records automatically.",
  },
  {
    question: "4. Can you connect WhatsApp Business with my CRM?",
    answer: "Yes. We integrate WhatsApp Business so messages and follow-ups are linked to customer records.",
  },
  {
    question: "5. Can legacy software be integrated?",
    answer: "Often yes. We use connectors, middleware or gradual modernisation to link older systems with new tools.",
  },
  {
    question: "6. How long does a software integration project take?",
    answer: "Simple integrations take days to weeks. Larger multi-system projects can take a few months, delivered in phases.",
  },
  {
    question: "7. How much do integration services cost in India?",
    answer: "Cost depends on the number of systems, data volume and complexity. We provide a scope-based quotation with milestones.",
  },
  {
    question: "8. Is my business data secure during integration?",
    answer: "Yes. We use secure authentication, encryption and role-based access to protect data across systems.",
  },
  {
    question: "9. Do you support clients outside Moradabad and Ghaziabad?",
    answer: "Yes. We work with businesses across India through remote collaboration and regular demos.",
  },
  {
    question: "10. Do you provide support after the integration goes live?",
    answer: "Yes. We offer monitoring, bug fixes, updates and new integrations as your business grows.",
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
          name: faq.question.replace(/^\d+\.\s*/, ""),
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
          "Software integration company in India connecting CRM, ERP, GST billing, payments, WhatsApp, and web apps into one secure, automated system.",
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
              Software Integration Company in India: Connect Your Business Software Into One Smooth System
            </h1>

            <p>
              Indian businesses run on a mix of tools unlike anywhere else. A typical company might take orders through a website, receive inquiries on WhatsApp, collect payments by UPI and cards, raise GST invoices from accounting software, track stock in a spreadsheet and manage customers in a CRM. Every one of those tools is useful. The trouble starts when none of them talk to each other.
            </p>

            <p>
              Staff retype the same details again and again. Invoices do not match orders. Leads vanish between a phone call and a follow-up. Owners wait for month-end to learn what actually happened.
            </p>

            <p>
              A software integration company in India solves this by connecting your applications so data moves automatically and accurately. This guide explains what to expect from an integration partner, which integrations matter most for Indian businesses, how to choose a provider and how Zentrix Infotech helps businesses across the country build connected systems.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Does a Software Integration Company Do?
            </h2>

            <p>
              A software integration company designs, builds and maintains the connections between your software systems. Its work usually includes:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Connecting applications such as CRM, ERP, accounting, HR, e-commerce and websites</li>
              <li>Building and consuming APIs so systems and third-party services can exchange data securely</li>
              <li>Migrating and synchronising data between old and new systems</li>
              <li>Automating workflows such as lead assignment, invoicing, reminders and reports</li>
              <li>Modernising legacy software so it works with current tools</li>
              <li>Monitoring and supporting integrations so they keep working as tools change</li>
            </ul>

            <p>
              The aim is straightforward: one event, such as an order or a booking, should update every system that needs to know, without a human copying information.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Integration Matters So Much for Indian Businesses
            </h2>

            <p>
              Several features of the Indian business environment make integration especially valuable.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Many channels, one customer.</strong> Customers reach businesses through websites, phone calls, social media, marketplaces and WhatsApp. Without integration, these inquiries land in different places and get handled inconsistently.</li>
              <li><strong>Digital payments everywhere.</strong> Customers expect to pay by UPI, cards, net banking and wallets. Connecting payment gateways to billing and accounting avoids manual reconciliation.</li>
              <li><strong>GST and compliance needs.</strong> Invoicing, tax reporting and records must stay accurate. When sales, billing and accounting systems are connected, errors and rework drop.</li>
              <li><strong>Fast-growing small and mid-sized businesses.</strong> Many Indian MSMEs and startups grow quickly. Tools that were fine for ten orders a day struggle at a hundred.</li>
              <li><strong>Multi-location and franchise models.</strong> Retail, healthcare, education and hospitality businesses often operate from several locations and need consolidated visibility.</li>
              <li><strong>Mixed technology.</strong> Many companies run modern cloud tools alongside older desktop software, which makes careful integration planning essential.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Integrations Indian Businesses Ask For Most
            </h2>

            <p>
              These are some of the most common integration needs we see across industries.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Website and CRM.</strong> Every enquiry form, landing page and campaign lead flows straight into the CRM, is assigned to a team member and triggers a follow-up reminder.</li>
              <li><strong>WhatsApp Business and messaging.</strong> Order updates, appointment reminders and follow-ups are sent automatically from your business systems, and customer conversations are recorded against the right profile.</li>
              <li><strong>Payment gateways and billing.</strong> Online payments update invoices, order status and accounting entries automatically.</li>
              <li><strong>E-commerce and inventory.</strong> Orders from your store or marketplaces update stock levels, shipping and invoices without manual effort.</li>
              <li><strong>Accounting and ERP.</strong> Sales, purchases, inventory and finance data stay aligned, giving owners reliable reports.</li>
              <li><strong>Appointment and booking systems.</strong> Bookings connect with schedules, reminders, payments and customer records, which is especially valuable for clinics, resorts and service businesses.</li>
              <li><strong>Mobile apps and backend systems.</strong> Apps share data securely with admin panels, databases and notification services.</li>
              <li><strong>Dashboards and reporting.</strong> Live data from several tools appears on one screen for owners and managers.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What to Look for in a Software Integration Company in India
            </h2>

            <p>
              Choosing the right partner matters more than choosing the right technology. Look for these qualities.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Experience across the stack.</strong> Integration touches websites, apps, databases, cloud hosting and third-party services. A company that works across all of them spots problems earlier.</li>
              <li><strong>A planning-first approach.</strong> The best companies start by mapping your systems and data flows before writing code.</li>
              <li><strong>Strong security practices.</strong> Connections between systems create new risks. Ask about authentication, encryption, access control and backups.</li>
              <li><strong>Clear communication.</strong> You should know who your project contact is, how progress will be shared and how changes are handled.</li>
              <li><strong>Transparent pricing.</strong> Scope-based quotations with milestones protect you from surprise costs.</li>
              <li><strong>Documentation and ownership.</strong> You should receive documentation for every integration and own custom code and data.</li>
              <li><strong>Reliable support.</strong> Third-party tools change their APIs. Make sure someone will keep your integrations working after launch.</li>
              <li><strong>Verifiable track record.</strong> Ask for real client examples, reviews and references.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses Choose Zentrix Infotech
            </h2>

            <p>
              Zentrix Infotech is an IT solutions company based in Moradabad, Uttar Pradesh, with an office in Ghaziabad. We serve startups, growing businesses and established brands across India with custom software development, web development, mobile app development, UI/UX design, cloud solutions and digital marketing.
            </p>

            <p>
              Our public numbers are clear: 250+ projects delivered, 270+ clients served and a 4.7 out of 5 client rating. Our portfolio covers retail and franchise platforms, hospitals, educational institutions, e-commerce marketplaces, wedding and event businesses, interior design studios, resorts and more.
            </p>

            <p>
              Working across so many sectors has taught us how different Indian businesses handle customers, orders and payments. It has also given us experience building the layers that integration depends on, from websites and apps to cloud hosting. That means a single accountable team can design, connect and maintain your systems, instead of several vendors passing responsibility between them.
            </p>

            <p>
              Client feedback on our website shows the outcomes that connected systems support. Jigyasa Hospital describes easy appointment booking and a steady rise in patient inquiries. The Buyzaar Mart reports quality franchise inquiries and stronger brand visibility across Delhi NCR. Kairvi Fort Resort credits its digital work with a noticeable boost in bookings during peak seasons. These testimonials come from our web and marketing work, and they reflect the kind of smooth journey from inquiry to customer that integration is meant to protect.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Software Integration Services
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>API development and third-party API integration</li>
              <li>CRM integration with websites, campaigns, email and WhatsApp</li>
              <li>Payment gateway integration linked to billing and accounting</li>
              <li>E-commerce integration with inventory, shipping and invoicing</li>
              <li>ERP and accounting software integration</li>
              <li>Mobile app backend integration</li>
              <li>Cloud integration and secure hosting</li>
              <li>Data migration and synchronisation</li>
              <li>Legacy system integration and modernisation</li>
              <li>Workflow automation and custom dashboards</li>
              <li>Monitoring, maintenance and support</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Integration Process
            </h2>

            <div className="space-y-6">
              <ProcessStep
                number="Step 1"
                title="Audit"
                description="We list your current tools, study how data moves between them and find where delays and errors occur."
              />

              <ProcessStep
                number="Step 2"
                title="Plan"
                description="We define priorities, data flows, security rules, scope and timeline in writing."
              />

              <ProcessStep
                number="Step 3"
                title="Architect"
                description="We choose the right approach, whether direct APIs, middleware or a custom integration layer, with growth in mind."
              />

              <ProcessStep
                number="Step 4"
                title="Build"
                description="Connectors and automations are developed in milestones, and we share demos so you can see progress."
              />

              <ProcessStep
                number="Step 5"
                title="Migrate"
                description="We clean, map and move existing data so connected systems begin accurate."
              />

              <ProcessStep
                number="Step 6"
                title="Test"
                description="We run real scenarios, edge cases and failure tests before launch."
              />

              <ProcessStep
                number="Step 7"
                title="Launch and train"
                description="We deploy carefully, often in phases, and train your team on the new workflow."
              />

              <ProcessStep
                number="Step 8"
                title="Support"
                description="We monitor integrations, respond to issues and update connections when third-party services change."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Mistakes to Avoid
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Connecting everything at once.</strong> Start with the integrations that save the most time or prevent the most errors, then expand.</li>
              <li><strong>Ignoring data cleaning.</strong> Duplicate and inconsistent records spread quickly once systems are connected.</li>
              <li><strong>Choosing on price alone.</strong> A cheap integration that breaks after a month is expensive.</li>
              <li><strong>Forgetting security.</strong> Every connection needs proper authentication and access control.</li>
              <li><strong>Skipping maintenance.</strong> Without monitoring, integrations quietly fail when external services change.</li>
              <li><strong>Not involving your team.</strong> Staff who will use the connected workflow should see it early and give feedback.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Thoughts
            </h2>

            <p>
              For Indian businesses juggling websites, WhatsApp, digital payments, accounting and customer records, integration is no longer optional. It is how you keep growing without drowning in manual work and mismatched data.
            </p>

            <p>
              If your tools are not working together, Zentrix Infotech can help you plan and build a connected system that fits your business, your budget and your plans for growth. Share what you use today, and we will suggest a practical, phased approach.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Contact Zentrix Infotech today for a free software integration consultation &rarr;
              </Link>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
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
                    href="/software-module-integration"
                    className="text-blue-600 hover:underline"
                  >
                    Software Module Integration
                  </Link>
                </li>

                <li>
                  <Link
                    href="/integrate-new-module-in-existing-software"
                    className="text-blue-600 hover:underline"
                  >
                    Integrate New Module in Existing Software
                  </Link>
                </li>

                <li>
                  <Link
                    href="/software-upgrade-services"
                    className="text-blue-600 hover:underline"
                  >
                    Software Upgrade Services
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/software-customization-services"
            />
          </div>
        </div>

        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

function ConsultationTopic({ title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {number}: {title}
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
