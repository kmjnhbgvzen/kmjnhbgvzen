import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
  {
    question: "1. What does a software integration company do?",
    answer: "It connects separate software systems so data flows automatically between them, removing manual entry and errors.",
  },
  {
    question: "2. How do I know if my business needs software integration?",
    answer: "If staff re-enter data, reports do not match or leads get lost between tools, you likely need integration.",
  },
  {
    question: "3. What is API integration?",
    answer: "It uses an application programming interface to let two software systems exchange data securely and automatically.",
  },
  {
    question: "4. Can you integrate my CRM with my website and WhatsApp?",
    answer: "Yes. We connect CRMs with website forms, WhatsApp Business, email, payments and accounting tools.",
  },
  {
    question: "5. Can old or legacy software be integrated?",
    answer: "Often yes. We use connectors, middleware or modernisation to link older systems with new tools.",
  },
  {
    question: "6. How long does a software integration project take?",
    answer: "Simple integrations take days to weeks. Complex multi-system projects may take a few months.",
  },
  {
    question: "7. How much does software integration cost in India?",
    answer: "Cost depends on the number of systems, data volume and complexity. We provide a scope-based quotation with milestones.",
  },
  {
    question: "8. Is my data safe during integration?",
    answer: "Yes. We use secure authentication, encryption and role-based access to protect data in transit and at rest.",
  },
  {
    question: "9. Will integrations keep working if a third-party tool changes?",
    answer: "With monitoring and maintenance, yes. We update connections when external APIs change.",
  },
  {
    question: "10. Where is Zentrix Infotech based?",
    answer: "We are based in Moradabad, Uttar Pradesh, with an office in Ghaziabad, and we serve clients across India.",
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
          "Professional software integration company in India connecting CRMs, ERPs, websites, mobile apps, payment gateways, and cloud systems into a unified architecture.",
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
              Software Integration Company: Connect Your Business Tools Into One Working System
            </h1>

            <p>
              Walk into almost any growing business and you will find the same story. Sales uses one tool, accounts uses another, the website sits somewhere else, inventory lives in a spreadsheet and customer messages arrive on WhatsApp. Each tool works on its own. None of them talk to each other.
            </p>

            <p>
              The result is double data entry, mismatched numbers, delayed reports and staff who spend hours copying information from one screen to another. A software integration company solves this by connecting your applications so data flows automatically, accurately and in real time.
            </p>

            <p>
              This guide explains what software integration is, why it matters, what services a good integration company provides, how to choose a partner, and how Zentrix Infotech approaches integration projects for businesses across India.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Is Software Integration?
            </h2>

            <p>
              Software integration is the process of connecting separate software systems, applications and data sources so they work together as a single, coordinated environment. Instead of people moving data by hand, the systems exchange information themselves through APIs, middleware, databases or automated workflows.
            </p>

            <p>
              A few simple examples show the idea:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A customer fills a website form, and the lead appears in your CRM instantly with a follow-up task assigned.</li>
              <li>An online order is placed, and inventory, billing and delivery systems update automatically.</li>
              <li>A payment is received through a gateway, and your accounting software records it without manual entry.</li>
              <li>A hospital appointment is booked online, and the schedule, reminders and patient record update together.</li>
            </ul>

            <p>
              When integration is done well, people stop noticing it. Things simply work.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signs Your Business Needs a Software Integration Company
            </h2>

            <p>
              Not every business needs a large integration project, but certain symptoms are clear signals:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Staff copy and paste the same data into multiple tools</li>
              <li>Reports from different systems never match</li>
              <li>Leads or orders get lost between website, CRM and billing</li>
              <li>Management waits days for consolidated reports</li>
              <li>You use several software tools but still depend on spreadsheets</li>
              <li>Errors keep appearing because of manual data entry</li>
              <li>Adding a new tool creates more confusion instead of less</li>
              <li>Customers complain about delays caused by internal handoffs</li>
            </ul>

            <p>
              If three or more of these sound familiar, integration will likely save time, reduce errors and improve customer experience.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services a Software Integration Company Should Offer
            </h2>

            <p>
              A capable integration partner covers more than just connecting two apps. Look for these core services.
            </p>

            <div className="space-y-6">
              <ConsultationTopic
                title="API development and integration"
                description="APIs are the standard way modern software talks to other software. A good team can build custom APIs and connect third-party ones such as payment gateways, SMS and email platforms, shipping providers, maps and social platforms."
              />

              <ConsultationTopic
                title="CRM and ERP integration"
                description="Connecting your customer system with accounting, inventory, HR and operations tools gives you a single view of the business."
              />

              <ConsultationTopic
                title="Website and e-commerce integration"
                description="Linking your website or online store with payment gateways, inventory, logistics, CRM and marketing tools turns it into a working sales engine."
              />

              <ConsultationTopic
                title="Mobile app integration"
                description="Mobile apps need to share data securely with your backend systems, databases and third-party services."
              />

              <ConsultationTopic
                title="Cloud integration"
                description="Connecting cloud applications with each other and with on-premise systems, along with secure hosting and scalable infrastructure."
              />

              <ConsultationTopic
                title="Data migration and synchronisation"
                description="Moving data from old systems into new ones, and keeping multiple databases consistent afterwards."
              />

              <ConsultationTopic
                title="Workflow automation"
                description="Automating repetitive tasks such as approvals, notifications, invoicing and report generation across connected systems."
              />

              <ConsultationTopic
                title="Legacy system modernisation"
                description="Making older software work with modern tools, without forcing you to replace everything at once."
              />

              <ConsultationTopic
                title="Testing, monitoring and support"
                description="Integration is not complete at launch. Ongoing monitoring catches failures early, and support keeps connections working when third-party systems change."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Working With a Professional Software Integration Company
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Less manual work.</strong> Automation frees staff to focus on customers and growth instead of data entry.</li>
              <li><strong>Fewer errors.</strong> When data moves automatically, typing mistakes and version mismatches drop sharply.</li>
              <li><strong>Real-time visibility.</strong> Owners and managers see accurate, current numbers on one dashboard.</li>
              <li><strong>Faster customer response.</strong> Leads, orders and requests reach the right person immediately.</li>
              <li><strong>Better scalability.</strong> A well-integrated architecture can grow with your business instead of breaking under volume.</li>
              <li><strong>Lower long-term cost.</strong> Reduced rework, fewer mistakes and better use of existing software protect your investment.</li>
              <li><strong>Stronger security.</strong> Professional integration uses authentication, encryption and access control rather than informal workarounds.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Integration Challenges and How a Good Partner Handles Them
            </h2>

            <p>
              Integration projects can go wrong for predictable reasons. Understanding them helps you choose a company that plans for them.
            </p>

            <div className="space-y-6">
              <ConsultationTopic
                title="Incompatible systems"
                description="Older software may lack APIs. An experienced team builds connectors or middleware to bridge the gap."
              />

              <ConsultationTopic
                title="Poor data quality"
                description="Duplicate, incomplete or inconsistent records can corrupt a new system. Good partners clean and map data before moving it."
              />

              <ConsultationTopic
                title="Security risks"
                description="Connecting systems opens new pathways for attackers. Secure authentication, encryption and permission controls must be designed in from the start."
              />

              <ConsultationTopic
                title="Changing third-party APIs"
                description="External services update or retire features. Monitoring and maintenance keep your integrations from silently breaking."
              />

              <ConsultationTopic
                title="Unclear requirements"
                description="Without a documented plan, projects drift. Strong partners map workflows and data flows before writing code."
              />

              <ConsultationTopic
                title="Lack of testing"
                description="An untested integration can fail on the first real order. Thorough testing with real scenarios is essential."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How to Choose the Right Software Integration Company
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Check relevant experience.</strong> Ask for examples of projects that connected multiple systems, not just standalone websites or apps.</li>
              <li><strong>Evaluate technical breadth.</strong> Integration touches web, mobile, cloud and databases. A team that works across these areas will spot problems earlier.</li>
              <li><strong>Ask about security.</strong> How will data be protected in transit and at rest? Who can access what?</li>
              <li><strong>Review the process.</strong> A good company documents requirements, defines data flows, tests in stages and shares progress regularly.</li>
              <li><strong>Clarify ownership and documentation.</strong> You should receive documentation of every integration, and you should own custom code and data.</li>
              <li><strong>Understand support terms.</strong> Ask about monitoring, response times and the cost of updates when third-party tools change.</li>
              <li><strong>Look for transparent pricing.</strong> Scope-based quotations with milestones are safer than open-ended hourly estimates.</li>
              <li><strong>Talk to past clients.</strong> References and verified reviews reveal how the company behaves when projects get complicated.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses Choose Zentrix Infotech as Their Software Integration Company
            </h2>

            <p>
              Zentrix Infotech is an IT solutions company based in Moradabad, Uttar Pradesh, with an office in Ghaziabad. We deliver custom software development, web development, mobile apps, UI/UX design, cloud solutions and digital marketing for startups, growing businesses and established brands across India.
            </p>

            <p>
              Our track record includes 250+ projects delivered, 270+ clients served and a 4.7 out of 5 client rating. We have built digital platforms for healthcare providers, educational institutions, retail and franchise networks, e-commerce marketplaces, hospitality brands, interior design studios and event companies.
            </p>

            <p>
              That breadth is exactly what integration work demands. A single project may involve a website, a mobile app, a payment gateway, a CRM, a cloud server and a marketing platform. Because we build and manage all of these layers ourselves, we understand how they connect and where they tend to fail. You get one accountable team instead of several vendors blaming each other.
            </p>

            <p>
              Our clients describe the practical results of connected systems. Jigyasa Hospital highlights easier appointment booking and a steady rise in patient inquiries. The Buyzaar Mart points to quality franchise inquiries and stronger brand visibility across Delhi NCR. Kairvi Fort Resort credits its digital work with more bookings in peak season. Those results come from our web and marketing projects, but they illustrate the outcome good integration aims for: inquiries, bookings and orders moving smoothly from the first click to the final record.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Integrations We Commonly Build
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Website and landing page forms connected to CRM and email</li>
              <li>WhatsApp Business and SMS connected to customer management tools</li>
              <li>Payment gateways connected to billing and accounting</li>
              <li>E-commerce stores connected to inventory, shipping and invoicing</li>
              <li>Mobile apps connected to backend databases and admin panels</li>
              <li>CRM, ERP and HR systems connected for unified reporting</li>
              <li>Appointment and booking systems connected to reminders and records</li>
              <li>Cloud applications connected to on-premise databases</li>
              <li>Dashboards pulling live data from multiple sources</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Software Integration Process
            </h2>

            <div className="space-y-6">
              <ProcessStep
                number="1"
                title="Discovery and audit"
                description="We list your current tools, map how data moves between them and identify the biggest gaps and delays."
              />

              <ProcessStep
                number="2"
                title="Integration planning"
                description="We define data flows, choose APIs or middleware, decide security controls and agree on a clear scope and timeline."
              />

              <ProcessStep
                number="3"
                title="Design and architecture"
                description="We design a structure that works today and can scale as you add tools or users."
              />

              <ProcessStep
                number="4"
                title="Development"
                description="We build connectors, APIs and automations in milestones, sharing demos as we go."
              />

              <ProcessStep
                number="5"
                title="Data cleaning and migration"
                description="We clean, map and move existing data so the connected systems start accurate."
              />

              <ProcessStep
                number="6"
                title="Testing"
                description="We test real scenarios, including edge cases and failure conditions, before anything goes live."
              />

              <ProcessStep
                number="7"
                title="Deployment and training"
                description="We launch carefully, often in phases, and train your team to use the connected workflow."
              />

              <ProcessStep
                number="8"
                title="Monitoring and support"
                description="We watch for failures, handle third-party updates and extend integrations as your business evolves."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Thoughts
            </h2>

            <p>
              Disconnected software quietly drains time, money and customer goodwill. A software integration company turns that scattered toolset into a system where information moves on its own, reports are trustworthy and your team can focus on work that matters.
            </p>

            <p>
              If your tools are not working together the way they should, Zentrix Infotech can audit your setup, recommend the right integrations and build them securely. Tell us what you use today, and we will show you what a connected version of your business could look like.
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
                    href="/integrate-new-module-in-existing-software"
                    className="text-blue-600 hover:underline"
                  >
                    Integrate New Module in Existing Software
                  </Link>
                </li>

                <li>
                  <Link
                    href="/software-customization-services"
                    className="text-blue-600 hover:underline"
                  >
                    Software Customization Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/business-software-customization-services"
                    className="text-blue-600 hover:underline"
                  >
                    Business Software Customization Services
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/ayodhya/integrate-new-module-in-existing-software"
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
