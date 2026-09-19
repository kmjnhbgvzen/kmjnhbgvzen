import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Custom Business Software Development Services | Zentrix Infotech
            </h2>

            <p>
              In today&apos;s fast-paced digital economy, off-the-shelf software often falls short of meeting the unique challenges, workflows, and growth ambitions of expanding enterprises. Zentrix Infotech delivers custom business software development services designed specifically around your operational processes. Whether you need an integrated ERP platform, a centralized customer relationship management (CRM) tool, automated inventory tracking, or custom billing software, we build secure, scalable, and high-performance solutions tailored to your organization.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Invest in Custom Business Software?
            </h2>

            <p>
              Pre-packaged applications often require your business to conform to rigid, predefined structures. Custom business software, on the other hand, is built from the ground up to support your distinct competitive advantages. Key benefits include:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Elimination of unnecessary subscription fees and per-user licensing costs</li>
              <li>Seamless integration with your existing databases, legacy tools, and APIs</li>
              <li>Automated multi-step workflows that minimize manual human errors</li>
              <li>Complete ownership and control over your proprietary data and intellectual property</li>
              <li>Scalable architecture engineered to expand effortlessly as your transaction volume grows</li>
              <li>Enhanced enterprise-grade security protocols matching your compliance standards</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Core Business Software Solutions
            </h2>

            <div className="space-y-6">
              <ConsultationTopic
                title="Enterprise Resource Planning (ERP)"
                description="Unify departments—finance, human resources, procurement, manufacturing, and supply chain—into a unified, real-time command center for data-driven decisions."
              />

              <ConsultationTopic
                title="Customer Relationship Management (CRM)"
                description="Track leads, oversee sales pipelines, manage omnichannel customer interactions, and automate follow-ups to maximize conversion rates and retention."
              />

              <ConsultationTopic
                title="Billing & Invoicing Software"
                description="Custom automated billing engines featuring recurring subscriptions, GST/tax calculation, automated payment gateway integration, and real-time financial reporting."
              />

              <ConsultationTopic
                title="Inventory & Warehouse Management"
                description="Monitor stock levels across multiple locations, generate automated reorder notifications, track batches/barcodes, and optimize logistics."
              />

              <ConsultationTopic
                title="HRMS & Payroll Systems"
                description="Centralize employee onboarding, biometric attendance logging, leave approvals, salary calculations, and tax deductions in compliance with regulations."
              />

              <ConsultationTopic
                title="Custom Workflow Automation & Portals"
                description="Bespoke client/vendor portals, project management dashboards, and document management systems designed for secure collaboration."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our End-to-End Development Process
            </h2>

            <div className="space-y-6">
              <ProcessStep
                number="01"
                title="Discovery & Requirement Analysis"
                description="We thoroughly analyze your current workflows, technical stack, operational bottlenecks, and business objectives to define clear project specifications."
              />

              <ProcessStep
                number="02"
                title="Architecture & UI/UX Design"
                description="Our team designs intuitive user interfaces and maps out robust, secure system architectures ensuring effortless adoption across your teams."
              />

              <ProcessStep
                number="03"
                title="Agile Development & Integrations"
                description="Using modern web frameworks, clean code practices, and automated testing, we develop modules iteratively with regular stakeholder demos."
              />

              <ProcessStep
                number="04"
                title="Quality Assurance & Security Testing"
                description="Rigorous functional, stress, and vulnerability testing guarantees optimal performance, high data integrity, and strict confidentiality."
              />

              <ProcessStep
                number="05"
                title="Deployment, Training & Support"
                description="We handle smooth production deployment, team onboarding, comprehensive documentation, and ongoing maintenance to ensure long-term success."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Custom Software vs. Off-The-Shelf Software
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Custom Business Software</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Off-The-Shelf SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    factor="Workflow Alignment"
                    customization="100% built around your processes"
                    newSoftware="Requires changing your process"
                  />
                  <TableRow
                    factor="Ownership & IP"
                    customization="Full ownership with zero recurring user licenses"
                    newSoftware="Perpetual subscription & license costs"
                  />
                  <TableRow
                    factor="Integration Flexibility"
                    customization="Direct API integrations with any platform"
                    newSoftware="Restricted to available marketplace plugins"
                  />
                  <TableRow
                    factor="Scalability"
                    customization="Infinitely scalable to meet enterprise volume"
                    newSoftware="High tier upgrades required for scale"
                  />
                  <TableRow
                    factor="Data Security"
                    customization="Self-hosted or private cloud data control"
                    newSoftware="Shared multi-tenant external clouds"
                  />
                </tbody>
              </table>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <FaqItem
                question="What is custom business software development?"
                answer="Custom business software development is the process of designing, building, deploying, and maintaining software applications crafted specifically to meet the distinctive operational requirements of a particular business or organization."
              />

              <FaqItem
                question="How much does custom business software development cost?"
                answer="The cost depends on scope, complexity, required integrations, and scale. We provide an initial free consultation and transparent project estimates based on your business requirements."
              />

              <FaqItem
                question="How long does it take to develop custom business software?"
                answer="Timelines vary from 4–6 weeks for targeted modular solutions to 3–6 months for comprehensive enterprise ERP/CRM systems, delivered iteratively via Agile sprints."
              />

              <FaqItem
                question="Can our existing data be migrated to the new software?"
                answer="Yes. Our engineering team specializes in safe, structured data extraction, sanitization, and migration from legacy systems, spreadsheets, and older databases."
              />

              <FaqItem
                question="Do you provide ongoing support and maintenance?"
                answer="Absolutely. We offer comprehensive post-launch support, performance monitoring, feature enhancements, and system security updates."
              />
            </div>

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/business-software-customization-services"
                    className="text-blue-600 hover:underline"
                  >
                    Business Software Customization Services
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
                    href="/custom-software-customization-company"
                    className="text-blue-600 hover:underline"
                  >
                    Custom Software Customization Company
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/business-software-development-services"
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

function TableRow({ factor, customization, newSoftware }) {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{factor}</td>
      <td className="border border-gray-300 px-4 py-2">{customization}</td>
      <td className="border border-gray-300 px-4 py-2">{newSoftware}</td>
    </tr>
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
