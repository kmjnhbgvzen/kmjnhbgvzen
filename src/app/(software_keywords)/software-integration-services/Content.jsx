import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqs = [
  {
    question: "1. What are software integration services?",
    answer: "They connect separate software systems so data moves between them automatically, without manual entry.",
  },
  {
    question: "2. Why does my business need software integration?",
    answer: "Integration removes duplicate work, reduces errors and gives you accurate, real-time information across departments.",
  },
  {
    question: "3. What is the difference between API integration and system integration?",
    answer: "API integration links specific applications or services. System integration connects larger sets of systems into one environment.",
  },
  {
    question: "4. Can you integrate my CRM with my website and WhatsApp?",
    answer: "Yes. We connect CRMs with website forms, WhatsApp Business, email, payments and accounting tools.",
  },
  {
    question: "5. Can legacy software be integrated with modern tools?",
    answer: "Often yes. We use connectors, middleware or gradual modernisation to link older systems with new ones.",
  },
  {
    question: "6. How long does a software integration project take?",
    answer: "Simple integrations take days to weeks. Larger projects with several systems may take a few months.",
  },
  {
    question: "7. How much do software integration services cost?",
    answer: "Cost depends on the number of systems, data volume and complexity. We provide a scope-based quotation with milestones.",
  },
  {
    question: "8. Is my data secure during integration?",
    answer: "Yes. We use secure authentication, encryption and role-based access to protect data in transit and at rest.",
  },
  {
    question: "9. Will integrations keep working after launch?",
    answer: "Yes, with monitoring and maintenance. We update connections when third-party services change.",
  },
  {
    question: "10. Do you offer support after integration is complete?",
    answer: "Yes. We provide monitoring, bug fixes, updates and new integrations as your business grows.",
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
          "Expert software integration services in India. We connect CRMs, ERPs, websites, mobile apps, and payment gateways with secure APIs and automated workflows.",
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
              Software Integration Services: Make Every Business Tool Work Together
            </h1>

            <p>
              Most businesses do not suffer from a lack of software. They suffer from software that does not cooperate. The website collects inquiries, but someone copies them into a spreadsheet. The billing tool knows what was sold, but the inventory tool does not. The sales team uses a CRM, while accounts uses something else entirely. Every handoff between tools is a chance for delay, duplication and error.
            </p>

            <p>
              Software integration services remove those handoffs. They connect your applications so information moves automatically, stays consistent and reaches the right person at the right time.
            </p>

            <p>
              This page explains what software integration services include, the main types of integration, the benefits you can expect, how a typical project runs and how Zentrix Infotech delivers integration for businesses across India.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Are Software Integration Services?
            </h2>

            <p>
              Software integration services cover the planning, development, testing and maintenance of connections between different software systems. These connections can link applications to each other, to databases, to cloud platforms and to external services such as payment gateways, messaging platforms and logistics providers.
            </p>

            <p>
              The goal is simple: one business process should not require five manual steps across five screens. With integration in place, an event in one system, such as a new order, a booked appointment or a received payment, triggers the right updates everywhere else without human effort.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Software Integration Services
            </h2>

            <p>
              Different problems call for different integration approaches. Here are the main types.
            </p>

            <div className="space-y-6">
              <ConsultationTopic
                title="API Integration"
                description="APIs let one application request data or actions from another in a standard, secure way. API integration is the most common modern approach. It covers connecting third-party services such as payment gateways, SMS, email and WhatsApp platforms, shipping partners, mapping services and social platforms to your own software. It also includes building custom APIs so your systems can share data with partners or mobile apps."
              />

              <ConsultationTopic
                title="CRM Integration"
                description="A CRM holds your customer relationships, so it should receive leads from your website, landing pages and campaigns, and it should share customer data with billing, support and marketing tools. Integration ensures every inquiry is captured, assigned and followed up."
              />

              <ConsultationTopic
                title="ERP and Back-Office Integration"
                description="ERP systems manage finance, inventory, purchasing, HR and operations. Integrating them with your sales, e-commerce and reporting tools gives managers accurate numbers without waiting for manual consolidation."
              />

              <ConsultationTopic
                title="Website and E-Commerce Integration"
                description="Online stores and business websites become far more useful when they connect to inventory, payments, shipping, accounting and CRM. Customers get accurate stock and delivery information, and your team avoids duplicate entry."
              />

              <ConsultationTopic
                title="Mobile App Integration"
                description="Mobile apps depend on backend systems. Integration services ensure apps read and write data securely, sync with admin panels and connect to notifications, payments and location services."
              />

              <ConsultationTopic
                title="Cloud Integration"
                description="Many businesses run a mix of cloud tools and on-premise software. Cloud integration connects them securely and sets up reliable, scalable hosting so connected systems stay available."
              />

              <ConsultationTopic
                title="Data Integration and Migration"
                description="Data integration brings information from multiple sources into one consistent view. Migration moves data from old systems into new ones. Both require careful cleaning, mapping and validation."
              />

              <ConsultationTopic
                title="Legacy System Integration"
                description="Older software often lacks modern interfaces, yet it still holds valuable data and logic. Integration services use connectors, middleware or gradual modernisation to bring legacy systems into a connected environment."
              />

              <ConsultationTopic
                title="Workflow Automation"
                description="Once systems are connected, repetitive tasks such as approvals, reminders, invoice creation and report delivery can run automatically."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Professional Software Integration Services
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Time savings.</strong> Staff stop retyping information and spend their time on customers, sales and decisions.</li>
              <li><strong>Higher accuracy.</strong> Automatic data transfer sharply reduces typing errors and conflicting versions of the truth.</li>
              <li><strong>Faster response.</strong> Leads, orders and support requests reach the right team immediately, which improves customer experience.</li>
              <li><strong>Clear visibility.</strong> Dashboards built on connected data show real, current numbers across departments.</li>
              <li><strong>Scalability.</strong> A planned integration architecture handles growth in users, orders and tools without constant rework.</li>
              <li><strong>Better security.</strong> Proper authentication, encryption and access control replace risky shortcuts like shared spreadsheets and exported files.</li>
              <li><strong>Cost control.</strong> Reduced manual labour, fewer mistakes and better use of existing software lower total operating costs over time.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              When Should You Invest in Software Integration?
            </h2>

            <p>
              Consider integration services if you notice any of these:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your team enters the same data in more than one system</li>
              <li>Reports from different tools never agree</li>
              <li>Leads or orders slip through gaps between systems</li>
              <li>Management depends on spreadsheets to combine data</li>
              <li>You are adding a new tool and worry it will create more silos</li>
              <li>Customers face delays because internal systems are not connected</li>
              <li>You plan to scale and know manual processes will not keep up</li>
            </ul>

            <p>
              The earlier you integrate, the less messy the data you have to clean later.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Integration Projects Succeed or Fail
            </h2>

            <p>
              Understanding common pitfalls helps you evaluate any provider.
            </p>

            <div className="space-y-6">
              <ConsultationTopic
                title="Starting without a plan"
                description="Integration without clear data flows and ownership produces fragile connections. Successful projects begin with mapping what data moves where, when and why."
              />

              <ConsultationTopic
                title="Ignoring data quality"
                description="Duplicate and inconsistent records will spread through connected systems. Cleaning comes first."
              />

              <ConsultationTopic
                title="Underestimating security"
                description="Every connection is a potential entry point. Secure authentication, encrypted transfers and role-based access should be designed from the beginning."
              />

              <ConsultationTopic
                title="Skipping testing"
                description="Real scenarios, including failures and unusual cases, must be tested before launch."
              />

              <ConsultationTopic
                title="Forgetting maintenance"
                description="Third-party APIs change, and credentials expire. Without monitoring, integrations quietly break."
              />

              <ConsultationTopic
                title="Overcomplicating the first release"
                description="Connecting the highest-impact systems first and expanding in phases delivers value sooner and lowers risk."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Software Integration Services at Zentrix Infotech
            </h2>

            <p>
              Zentrix Infotech is an IT solutions company based in Moradabad, Uttar Pradesh, with an office in Ghaziabad. We provide software development, web development, mobile app development, UI/UX design, cloud solutions and digital marketing to businesses across India.
            </p>

            <p>
              Our experience includes 250+ delivered projects, 270+ clients and a 4.7 out of 5 client rating. Our portfolio covers healthcare, education, retail and franchise networks, e-commerce marketplaces, hospitality, interior design and event management. Each of these sectors connects different tools, from booking systems and payment gateways to inventory, marketing and customer records.
            </p>

            <p>
              Because we build websites, applications, mobile apps and cloud infrastructure ourselves, we understand both sides of every connection. That reduces the common problem where several vendors each handle one piece and nobody owns the whole.
            </p>

            <p>
              Client feedback on our website reflects what well-connected systems deliver. Jigyasa Hospital describes easier appointment booking and a steady rise in patient inquiries. The Buyzaar Mart reports quality franchise inquiries and stronger visibility across Delhi NCR. Kairvi Fort Resort highlights a noticeable boost in bookings during peak season. These results come from our web and marketing work, and they show the kind of smooth lead-to-customer flow that integration is meant to protect.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Integration Services We Offer
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>API development and third-party integration for payments, messaging, shipping, maps and more</li>
              <li>CRM integration with websites, campaigns, email, WhatsApp and billing</li>
              <li>ERP and accounting integration for unified finance, inventory and reporting</li>
              <li>E-commerce integration with payment gateways, logistics, inventory and invoicing</li>
              <li>Mobile app backend integration with secure data sync and notifications</li>
              <li>Cloud integration and hosting for reliable, scalable connected systems</li>
              <li>Data migration and synchronisation from old tools and spreadsheets</li>
              <li>Legacy system integration and gradual modernisation</li>
              <li>Workflow automation for approvals, alerts and recurring reports</li>
              <li>Monitoring and support to keep integrations healthy</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Integration Projects Work
            </h2>

            <div className="space-y-6">
              <ProcessStep
                number="Step 1"
                title="Audit your current setup"
                description="We list the tools you use, how data moves between them and where delays and errors occur."
              />

              <ProcessStep
                number="Step 2"
                title="Define the integration plan"
                description="We agree on priorities, data flows, security rules, timeline and scope in writing."
              />

              <ProcessStep
                number="Step 3"
                title="Design the architecture"
                description="We choose the right approach, whether direct APIs, middleware or a custom integration layer, with future growth in mind."
              />

              <ProcessStep
                number="Step 4"
                title="Build in milestones"
                description="Connectors and automations are developed in stages, with demos so you see real progress."
              />

              <ProcessStep
                number="Step 5"
                title="Clean and migrate data"
                description="We validate and map records so connected systems begin with accurate information."
              />

              <ProcessStep
                number="Step 6"
                title="Test thoroughly"
                description="We run real-world scenarios, edge cases and failure tests before launch."
              />

              <ProcessStep
                number="Step 7"
                title="Launch and train"
                description="We deploy carefully, often in phases, and train your team on the new connected workflow."
              />

              <ProcessStep
                number="Step 8"
                title="Monitor and support"
                description="We track performance, respond to issues and update integrations when external services change."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Choosing a Software Integration Services Provider
            </h2>

            <p>
              When comparing providers, ask:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Can you show projects where several systems were connected?</li>
              <li>Who will work on my project, and who is my point of contact?</li>
              <li>How will you secure data in transit and at rest?</li>
              <li>How do you test integrations before launch?</li>
              <li>What happens when a third-party API changes?</li>
              <li>Will I receive documentation, and do I own custom code and data?</li>
              <li>Is pricing scope-based, with clear milestones?</li>
            </ul>

            <p>
              Clear, confident answers are a good sign. Vague answers or pressure to sign quickly are not.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Thoughts
            </h2>

            <p>
              Software integration services are not about adding more technology. They are about making the technology you already have work as one system. The payoff shows up everywhere: fewer errors, faster response, clearer reports and a team that spends its time on work that matters.
            </p>

            <p>
              If your tools are scattered and your team is tired of copying data between screens, Zentrix Infotech can help. Share your current setup, and we will recommend the most practical integration plan for your business.
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
                    href="/software-integration-company"
                    className="text-blue-600 hover:underline"
                  >
                    Software Integration Company
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
