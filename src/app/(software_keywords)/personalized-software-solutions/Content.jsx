"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Code,
  Shield,
  Star,
  Users,
  Layers,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Cpu,
  BarChart,
  HelpCircle,
} from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                What Are Personalized Software Solutions?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Personalized software solutions are tailor-made software applications engineered specifically around your organization's unique operational workflows, user roles, security compliance standards, and commercial objectives. Unlike off-the-shelf software packaged with rigid features and bloated subscriptions, personalized software adapts entirely to your business processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a custom enterprise resource planning (ERP) system, a bespoke CRM platform, an automated supply-chain portal, or an intelligent operational dashboard, personalized software ensures 100% feature alignment, zero unnecessary bloat, and unrestricted scalability.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why Invest in Tailored & Personalized Software?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Maximum Operational Efficiency
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Automate manual tasks, eliminate duplicate data entry, and streamline departmental handoffs with purpose-built automation logic.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Total Data Ownership & Security
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Retain complete intellectual property ownership, enterprise-grade access control, and dedicated hosting architectures.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Seamless Ecosystem Integration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Integrate flawlessly with your existing accounting tools, payment gateways, legacy databases, hardware, and third-party APIs.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                    <BarChart size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Predictable Long-Term ROI
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Eliminate rising per-user recurring license fees and scale your user base and data volumes without financial penalties.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Key Domains for Personalized Software Applications
              </h2>
              <p className="text-gray-600">
                At Zentrix Infotech, we engineer personalized software across diverse business verticals:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom CRM & Sales Automation</h4>
                    <p className="text-sm text-gray-600">Track client pipelines, automated follow-ups, omnichannel customer communication, and sales analytics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enterprise Resource Planning (ERP)</h4>
                    <p className="text-sm text-gray-600">Integrate inventory control, multi-warehouse tracking, billing, manufacturing, and HR operations in a single platform.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Client & Vendor Portals</h4>
                    <p className="text-sm text-gray-600">Secure, branded self-service web dashboards for invoices, ticketing, order status, and real-time collaboration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operations & Workflow Management Systems</h4>
                    <p className="text-sm text-gray-600">Tailored dispatch, field-service tracking, dynamic approvals, and automated reporting systems.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Process */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Personalized Software Development Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                  <span className="text-blue-600 font-bold text-lg">01</span>
                  <h4 className="font-semibold text-gray-900 mt-1 mb-1">Requirement Discovery & Architecture</h4>
                  <p className="text-sm text-gray-600">We analyze your workflows, bottlenecks, user personas, and data schemas to blueprint the optimal technical stack.</p>
                </div>
                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                  <span className="text-blue-600 font-bold text-lg">02</span>
                  <h4 className="font-semibold text-gray-900 mt-1 mb-1">UI/UX Prototyping & Wireframing</h4>
                  <p className="text-sm text-gray-600">Interactive Figma prototypes designed for high adoption, clean ergonomics, and lightning-fast operator speed.</p>
                </div>
                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                  <span className="text-blue-600 font-bold text-lg">03</span>
                  <h4 className="font-semibold text-gray-900 mt-1 mb-1">Agile Sprint Development</h4>
                  <p className="text-sm text-gray-600">Modular front-end and back-end engineering with modern frameworks (React, Next.js, Node.js, Python, PostgreSQL).</p>
                </div>
                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                  <span className="text-blue-600 font-bold text-lg">04</span>
                  <h4 className="font-semibold text-gray-900 mt-1 mb-1">Rigorous QA, Deployment & Support</h4>
                  <p className="text-sm text-gray-600">End-to-end security audits, load testing, cloud CI/CD deployment, team training, and continuous maintenance.</p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="text-blue-600" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 mt-4">
                <FaqItem
                  question="How long does it take to develop a personalized software solution?"
                  answer="A focused MVP or specialized workflow module typically takes 4 to 8 weeks. Comprehensive enterprise solutions like full ERPs or complex multi-tier platforms usually require 3 to 6 months depending on feature scope and third-party integrations."
                />
                <FaqItem
                  question="Do we own the source code and database?"
                  answer="Yes, 100%. Upon completion and handover, full intellectual property rights, source code repositories, databases, and deployment keys are transferred entirely to your organization."
                />
                <FaqItem
                  question="Can custom software integrate with our existing accounting or ERP tools?"
                  answer="Absolutely. We build robust REST and GraphQL API connectors to integrate seamlessly with Tally, Zoho, SAP, Salesforce, payment gateways, biometric devices, and custom legacy databases."
                />
                <FaqItem
                  question="How do you ensure data security and compliance?"
                  answer="We enforce role-based access control (RBAC), end-to-end TLS/SSL encryption, automated backups, sanitization pipelines, and adhere strictly to industry data protection benchmarks."
                />
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24 space-y-6">
              <LandingEnquiry />

              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-6 rounded-2xl text-white shadow-lg space-y-4">
                <h3 className="text-xl font-bold">Have a Custom Project in Mind?</h3>
                <p className="text-blue-100 text-sm">
                  Speak directly with our senior software architects to discuss your technical specifications and get an accurate timeline and quote.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+917248800839"
                    className="w-full bg-white text-blue-900 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition"
                  >
                    +91 7248800839
                  </a>
                  <a
                    href="mailto:zentrixit@gmail.com"
                    className="w-full bg-blue-800/80 border border-blue-400/30 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition text-sm"
                  >
                    zentrixit@gmail.com
                  </a>
                </div>
              </div>

              <CityInternalLinks />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RecentBlog />
        </div>
      </div>
    </div>
  );
};

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-semibold text-gray-900 flex justify-between items-center bg-gray-50/50 hover:bg-gray-100/60 transition"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`transform transition-transform ${open ? "rotate-180 text-blue-600" : "text-gray-400"}`}
        />
      </button>
      {open && (
        <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default Content;
