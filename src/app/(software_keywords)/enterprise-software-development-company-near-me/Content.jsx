import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Enterprise Software Development Company Near Me: How to Find the
              Right Partner
            </h2>

            <p>
              Searching for an &quot;enterprise software development company
              near me&quot; is rarely a casual task. It usually means your
              business has outgrown spreadsheets, disconnected tools, or
              off-the-shelf software, and you need a system built around how
              your teams actually work. The company you pick will shape your
              operations, data security, and growth for years.
            </p>

            <p>
              This guide explains what enterprise software development
              involves, why a nearby partner has real advantages, what to check
              before you sign, and how Zentrix Infotech builds enterprise-grade
              software for businesses across Uttar Pradesh and Delhi NCR.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is Enterprise Software Development?
            </h2>

            <p>
              Enterprise software is built to run the core operations of a
              large or fast-growing organisation. It handles high user
              volumes, complex workflows, sensitive data, and integration with
              other systems. Common examples include:
            </p>

            <ul className="ml-4 list-disc list-inside space-y-2">
              <li>
                ERP systems that connect finance, inventory, HR, and
                procurement.
              </li>
              <li>
                CRM platforms that manage leads, customers, and sales
                pipelines.
              </li>
              <li>
                Custom portals for dealers, franchises, students, patients, or
                employees.
              </li>
              <li>
                Workflow automation tools that replace manual approvals and
                paperwork.
              </li>
              <li>
                Reporting dashboards that pull data from many sources into one
                view.
              </li>
            </ul>

            <p>
              Enterprise development differs from building a simple website or
              app in three ways. The software must scale as users and data
              grow. It must be secure and reliable enough for daily business
              use. It must also fit your processes instead of forcing your
              teams to adapt to someone else&apos;s product.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose a Software Development Company Near You?
            </h2>

            <p>
              Software can be built remotely, and many projects are. However,
              working with a nearby company still gives you advantages that
              matter on larger projects.
            </p>

            <div className="space-y-6">
              <ContentCard
                title="Face-to-Face Collaboration"
                description="Enterprise projects start with detailed discovery: understanding departments, approval chains, legacy tools, and pain points. Workshops in person can be faster and clearer than a long series of video calls."
              />

              <ContentCard
                title="Faster Decisions"
                description="When your stakeholders and the development team can meet the same day, questions get answered quickly and small misunderstandings are less likely to grow into expensive rework."
              />

              <ContentCard
                title="Local Market Understanding"
                description="A regional partner understands the way businesses operate in the area, including GST-compliant billing, multi-branch and franchise structures, dealer networks, and the mix of Hindi and English users you may need to support."
              />

              <ContentCard
                title="Accountability"
                description="A company with a real office and a known team is easier to hold to commitments. You can visit, meet the people writing your code, and build a long-term relationship."
              />

              <ContentCard
                title="Easier Support After Launch"
                description="Enterprise software needs updates, monitoring, and improvements. Having a partner close by makes training, on-site troubleshooting, and ongoing maintenance simpler."
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Enterprise Software Solutions We Build
            </h2>

            <p>
              Zentrix Infotech offers software development alongside web
              development, mobile apps, UI/UX design, cloud solutions, and
              digital marketing. That breadth means your software, interface,
              hosting, and growth strategy can be handled by one accountable
              team.
            </p>

            <div className="space-y-6">
              <ContentCard
                title="Custom Business Software"
                description="Applications designed around your workflows, from order management and billing to inventory, attendance, and reporting."
              />

              <ContentCard
                title="ERP and CRM Development"
                description="Systems that bring your departments onto one platform, remove duplicate data entry, and give leadership real-time visibility."
              />

              <ContentCard
                title="Enterprise Web Applications"
                description="Secure, fast browser-based platforms such as customer portals, admin panels, marketplaces, and management systems."
              />

              <ContentCard
                title="Enterprise Mobile Apps"
                description="Android and iOS apps that put your operations in your team&apos;s pocket, for field staff, delivery teams, sales representatives, or customers."
              />

              <ContentCard
                title="Cloud Solutions and Migration"
                description="Scalable infrastructure that improves performance, security, and business continuity, including moving legacy systems to the cloud."
              />

              <ContentCard
                title="Integrations and Automation"
                description="Connecting payment gateways, accounting tools, logistics services, and third-party APIs so your data flows without manual effort."
              />

              <ContentCard
                title="UI/UX for Complex Systems"
                description="Enterprise software can fail when people find it confusing. Clear and intuitive interfaces improve adoption and reduce training time."
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Evaluate an Enterprise Software Development Company
            </h2>

            <p>
              Before you shortlist any vendor, check the following points.
            </p>

            <div className="space-y-6">
              <EvaluationPoint
                number="1"
                title="Relevant Portfolio"
                description="Look at what the company has built, not just what it claims. Check whether it has delivered platforms with multiple user roles, payments, dashboards, and integrations. Zentrix&apos;s portfolio includes e-commerce and franchise platforms such as The Buyzaar Mart, an education platform for Kamla Devi Group of Institutions (KDEDU), and business platforms across retail, healthcare, hospitality, and services."
              />

              <EvaluationPoint
                number="2"
                title="Technical Depth"
                description="Ask which technologies the company uses and why. A capable team should be able to explain its choices in plain language and match them to your scale, budget, and security needs."
              />

              <EvaluationPoint
                number="3"
                title="Clear Process"
                description="You should know how discovery, design, development, testing, and launch will work, who your point of contact is, and how progress will be reported."
              />

              <EvaluationPoint
                number="4"
                title="Security Practices"
                description="Ask about access control, data encryption, backups, secure hosting, and how the team handles sensitive information."
              />

              <EvaluationPoint
                number="5"
                title="Transparent Pricing"
                description="Fixed-scope, milestone-based, or dedicated-team models can all work in the right situation. Be cautious of quotes that are vague or far below everyone else&apos;s."
              />

              <EvaluationPoint
                number="6"
                title="Post-Launch Support"
                description="Find out what happens after go-live, including bug fixes, updates, hosting, monitoring, and future feature additions."
              />

              <EvaluationPoint
                number="7"
                title="Client Feedback"
                description="Speak to real clients if you can. Zentrix holds a 4.7/5 rating across 270+ clients and can connect prospective clients with relevant references."
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Enterprise Software Development Process
            </h2>

            <p>
              A clear process keeps enterprise projects predictable. Our
              process has six stages.
            </p>

            <div className="space-y-6">
              <ProcessStep
                number="1"
                title="Discovery and Requirement Analysis"
                description="We meet your stakeholders, map current workflows, and identify what is slowing you down. The output is a written scope that everyone agrees on."
              />

              <ProcessStep
                number="2"
                title="Planning and Architecture"
                description="We choose the technology stack, design the system structure, and plan integrations, security, and future scalability."
              />

              <ProcessStep
                number="3"
                title="UI/UX Design"
                description="Wireframes and prototypes let you see and test the software before development begins, helping avoid costly changes later."
              />

              <ProcessStep
                number="4"
                title="Agile Development"
                description="We build in short cycles and share working versions regularly, so you can give feedback early and see steady progress."
              />

              <ProcessStep
                number="5"
                title="Testing and Quality Assurance"
                description="Functional, performance, security, and user-acceptance testing help catch problems before your team or customers do."
              />

              <ProcessStep
                number="6"
                title="Deployment, Training, and Support"
                description="We launch on reliable infrastructure, train your staff, and stay available for monitoring, maintenance, and improvements."
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h2>

            <p>
              Zentrix Infotech is a team of technologists focused on bridging
              the gap between technology and real business challenges. Our work
              is guided by trust, transparency, and long-term value.
            </p>

            <ul className="ml-4 list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Proven track record:</span>{" "}
                250+ projects delivered for 270+ clients, rated 4.7/5.
              </li>
              <li>
                <span className="font-semibold">
                  One partner, full capability:
                </span>{" "}
                Software, web, mobile, UI/UX, cloud, and digital marketing
                under one roof.
              </li>
              <li>
                <span className="font-semibold">Local presence:</span> Offices
                in Moradabad and Ghaziabad, with access for clients across
                western Uttar Pradesh and Delhi NCR.
              </li>
              <li>
                <span className="font-semibold">Business-first thinking:</span>{" "}
                We start with your goals and revenue, not just technical
                specifications.
              </li>
              <li>
                <span className="font-semibold">Growth support:</span> Because
                we also provide digital marketing, we can help you launch and
                promote the platforms we build.
              </li>
              <li>
                <span className="font-semibold">Direct communication:</span>{" "}
                You work with the people building your product, with a clear
                point of contact throughout.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h2>

            <p>
              Our portfolio spans many sectors, and we adapt each solution to
              industry needs.
            </p>

            <ul className="ml-4 list-disc list-inside space-y-2">
              <li>Retail, e-commerce, and franchise businesses.</li>
              <li>Education and training institutions.</li>
              <li>Healthcare and hospitals.</li>
              <li>Hospitality, resorts, and events.</li>
              <li>Real estate, interiors, and construction.</li>
              <li>Manufacturing, distribution, and dealer networks.</li>
              <li>Startups and growing service companies.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Enterprise Software?
            </h2>

            <p>
              Pricing depends on scope rather than a fixed rate. The main
              factors are the number of features and user roles, workflow
              complexity, integrations with existing tools, design
              requirements, security and compliance needs, hosting, and the
              level of support required after launch.
            </p>

            <p>
              The best way to control cost is to start with a well-defined
              scope and build in phases. This allows you to launch the most
              valuable features first and expand as you see results.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Find an Enterprise Software Partner Close to Home
            </h2>

            <p>
              The right enterprise software partner understands your business,
              communicates openly, and stays with you after launch. If you are
              searching for an enterprise software development company near
              you, Zentrix Infotech offers the experience, range of services,
              and local presence to deliver software that works for your teams
              and grows with your business.
            </p>

            <p>
              Ready to talk? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              , email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              , or visit our{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Contact Us
              </Link>{" "}
              page for a free consultation and project estimate.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <FaqItem
                question="What does an enterprise software development company do?"
                answer="It designs, builds, tests, and maintains large-scale custom software, such as ERP systems, CRM platforms, portals, and automation tools, that run a company's core operations."
              />

              <FaqItem
                question="Why should I choose a local software company?"
                answer="Local teams offer in-person workshops, faster decisions, easier training, and simpler support after launch."
              />

              <FaqItem
                question="How long does enterprise software development take?"
                answer="Most projects take 3 to 9 months depending on scope. Phased releases can help you start using core features sooner."
              />

              <FaqItem
                question="Can you integrate the software with our existing systems?"
                answer="Yes. We can connect new software with accounting tools, payment gateways, APIs, and legacy systems."
              />

              <FaqItem
                question="Do you provide support after launch?"
                answer="Yes. We offer maintenance, monitoring, updates, and feature additions after go-live."
              />

              <FaqItem
                question="Will my data be secure?"
                answer="We use access controls, encryption, secure hosting, and regular backups to help protect your data."
              />

              <FaqItem
                question="How do I get a quote?"
                answer="Share your requirements through our Contact Us page or call us. We will review them and send a scoped estimate."
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Explore Our Services and Work
            </h2>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <ul className="ml-4 list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cloud-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-app-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-blue-600 hover:underline"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/ayodhya/enterprise-software-development-company-near-me"
            />
          </div>
        </div>

        <div className="order-2 w-full p-4 sm:p-8 lg:order-2 lg:w-[500px]">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

function ContentCard({ title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function EvaluationPoint({ number, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        {number}. {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        {number}. {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-gray-900">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default Content;
