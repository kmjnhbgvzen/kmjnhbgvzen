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
              Get Your Software Customized
            </h2>

            <p>
              If your software is missing a feature you need, doesn&apos;t match how your team actually works, or can&apos;t connect with the other tools your business runs on, replacing it isn&apos;t the only way forward. Zentrix Infotech can get your software customized around your actual requirements — new features, workflow changes, integrations, and other enhancements built directly into the system you already use. Zentrix Infotech is currently offering software customization free of cost, so there&apos;s nothing stopping you from finding out what&apos;s possible. Tell us what your software should be doing and isn&apos;t, and let&apos;s talk about how to fix it.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get Your Software Customized for the Way Your Business Works
            </h2>

            <p>
              Software is supposed to make work easier, but it often ends up doing the opposite once a business grows or changes direction. A tool that made sense a year ago starts feeling like it&apos;s fighting your team instead of supporting them.
            </p>

            <p>Typical signs this is happening:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Important features are missing</li>
              <li>Features nobody uses are cluttering the interface</li>
              <li>Staff handle tasks manually that the software should manage</li>
              <li>Processes take more steps than they should</li>
              <li>The interface is frustrating to work in</li>
              <li>Reporting is limited or doesn&apos;t show what matters</li>
              <li>The software can&apos;t talk to other systems you use</li>
              <li>Functionality feels outdated compared to how the business runs now</li>
              <li>Specific requirements unique to your business simply aren&apos;t supported</li>
            </ul>

            <p>
              None of this means the software has to go. In most cases, it can be customized around your requirements instead — keeping what already works and fixing what doesn&apos;t. That&apos;s exactly what Zentrix Infotech does: get your software customized to match your business, rather than asking your business to adjust to the software.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Is Your Software Not Working the Way You Need?
            </h2>

            <p>A few situations we hear regularly:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your software lacks a feature your business now depends on</li>
              <li>Employees repeat the same manual task every single day</li>
              <li>Your CRM doesn&apos;t reflect how your sales team actually sells</li>
              <li>Your ERP doesn&apos;t support a specific part of your operations</li>
              <li>Your software won&apos;t connect to a platform you rely on</li>
              <li>Reports take real effort to put together instead of a few clicks</li>
              <li>Your dashboard shows the wrong information, or none at all</li>
              <li>Your application needs a module it was never built with</li>
              <li>Users find the interface genuinely difficult to work in</li>
              <li>Your business has changed, but the software hasn&apos;t kept up</li>
            </ul>

            <p>
              Whether any of these can be fixed through customization depends on the technical capabilities of your existing system — but far more often than people expect, the answer is yes.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Does It Mean to Get Your Software Customized?
            </h2>

            <p>
              Getting your software customized means modifying the system you already have so it matches your actual requirements, instead of replacing it outright. Depending on your software, that can involve:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adding features you need</li>
              <li>Removing functionality you don&apos;t</li>
              <li>Changing how a workflow moves through the system</li>
              <li>Adjusting user roles and permissions</li>
              <li>Improving the interface and overall experience</li>
              <li>Adding reports that reflect real business metrics</li>
              <li>Building custom dashboards</li>
              <li>Connecting APIs to other platforms</li>
              <li>Integrating third-party tools</li>
              <li>Automating repetitive processes</li>
              <li>Modifying how the database handles your data</li>
              <li>Adding modules specific to your business</li>
            </ul>

            <p>
              Exactly what&apos;s possible depends on your software&apos;s technology, how it was built, and what level of access is available — which is part of what gets figured out once we look at your specific system.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Can Zentrix Infotech Customize?
            </h2>

            <div className="space-y-6">
              <ServiceBlock
                title="Existing Software Features"
                whatItIs="A feature you need simply isn&apos;t there."
                problemItSolves="A feature you need simply isn&apos;t there."
                howWeHelp="It can often be added directly into your current software."
                businessBenefit="You get the functionality you need without switching systems."
              />

              <ServiceBlock
                title="Business Workflows"
                whatItIs="The software follows a generic process that doesn&apos;t match how your team works."
                problemItSolves="The software follows a generic process that doesn&apos;t match how your team works."
                howWeHelp="Workflows can be adjusted to reflect your actual process."
                businessBenefit="Fewer manual workarounds and less friction day to day."
              />

              <ServiceBlock
                title="CRM Software"
                whatItIs="Your CRM doesn&apos;t reflect your sales stages, lead sources, or follow-up process."
                problemItSolves="Your CRM doesn&apos;t reflect your sales stages, lead sources, or follow-up process."
                howWeHelp="Pipelines, fields, and automations can be adjusted to match your process."
                businessBenefit="A CRM your sales team actually finds useful."
              />

              <ServiceBlock
                title="ERP Software"
                whatItIs="Standard ERP modules don&apos;t fit your specific operations."
                problemItSolves="Standard ERP modules don&apos;t fit your specific operations."
                howWeHelp="Inventory, finance, procurement, or HR modules can be adapted."
                businessBenefit="An ERP that runs the way your business actually runs."
              />

              <ServiceBlock
                title="Web Applications"
                whatItIs="An existing web app or portal is missing functionality or feels outdated."
                problemItSolves="An existing web app or portal is missing functionality or feels outdated."
                howWeHelp="New features, redesigned screens, or performance improvements can be added."
                businessBenefit="A tool your users and team actually enjoy using."
              />

              <ServiceBlock
                title="Mobile Applications"
                whatItIs="Your app lacks a feature or integration your users need."
                problemItSolves="Your app lacks a feature or integration your users need."
                howWeHelp="Existing apps can be extended with new functionality."
                businessBenefit="A better experience without building a new app from zero."
              />

              <ServiceBlock
                title="User Interface & User Experience"
                whatItIs="Navigation is confusing, and new staff take too long to learn the system."
                problemItSolves="Navigation is confusing, and new staff take too long to learn the system."
                howWeHelp="Screens and flows can be redesigned around how people actually use the software."
                businessBenefit="Faster onboarding and fewer daily errors."
              />

              <ServiceBlock
                title="APIs & Third-Party Integrations"
                whatItIs="Your software operates in isolation from other tools you use."
                problemItSolves="Your software operates in isolation from other tools you use."
                howWeHelp="Integrations can connect it to payment gateways, accounting platforms, and other APIs."
                businessBenefit="Data flows automatically instead of being re-entered by hand."
              />

              <ServiceBlock
                title="Database & Data Management"
                whatItIs="Your data structure doesn&apos;t support new requirements."
                problemItSolves="Your data structure doesn&apos;t support new requirements."
                howWeHelp="Database fields and relationships can be adjusted."
                businessBenefit="Your system can handle the data your business actually generates."
              />

              <ServiceBlock
                title="Dashboards & Reports"
                whatItIs="You can&apos;t see the metrics that actually matter to you."
                problemItSolves="You can&apos;t see the metrics that actually matter to you."
                howWeHelp="Custom dashboards and reports can be built around your real KPIs."
                businessBenefit="Faster, clearer decision-making."
              />

              <ServiceBlock
                title="Workflow Automation"
                whatItIs="Repetitive tasks eat into staff time every day."
                problemItSolves="Repetitive tasks eat into staff time every day."
                howWeHelp="These processes can be automated within your existing software."
                businessBenefit="More time spent on work that actually needs a person."
              />

              <ServiceBlock
                title="Software Enhancements"
                whatItIs="Older software feels limited compared to what your business now needs."
                problemItSolves="Older software feels limited compared to what your business now needs."
                howWeHelp="It can potentially be upgraded or extended rather than replaced."
                businessBenefit="More value from a system you&apos;ve already invested in."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Customize Existing Software Instead of Replacing It?
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your employees already know how to use the current system</li>
              <li>Existing business data holds real value and is worth keeping</li>
              <li>Often, only specific functionality is actually missing</li>
              <li>The software mostly works — it just needs targeted improvements</li>
              <li>Your business workflow has evolved past what the software was built for</li>
              <li>You need integration with another platform, not a whole new system</li>
              <li>You need new reports, not a new tool</li>
              <li>You need automation for a specific process</li>
              <li>Replacing an entire system can cause disruption that customization avoids in many cases</li>
            </ul>

            <p>
              Customization isn&apos;t automatically cheaper or better than starting fresh — it depends entirely on the condition of your existing software and what your business actually needs.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get Your Software Customized Free of Cost With Zentrix Infotech
            </h2>

            <p>
              Zentrix Infotech is currently offering software customization free of cost. In practical terms, that means you can:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Share your software details with us</li>
              <li>Explain exactly what you want to change</li>
              <li>Discuss your current business workflow</li>
              <li>Identify the features you actually need</li>
              <li>Talk through what customization is realistically possible</li>
              <li>Understand the next steps, with no pressure to commit</li>
            </ul>

            <p>
              There&apos;s no cost to having this conversation, and no obligation attached to it. If your software isn&apos;t doing what your business needs, this is a straightforward way to find out what could change that.
            </p>

            <p>
              Get Your Software Customized — reach out and start the conversation today.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Getting Your Software Customized
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Software that fits your actual workflow, not a generic one</li>
              <li>Less manual work for your team</li>
              <li>Improved day-to-day productivity</li>
              <li>A better user experience overall</li>
              <li>Features that were missing, now available</li>
              <li>Reporting that reflects what actually matters</li>
              <li>Easier integrations with the tools you use</li>
              <li>Better automation of repetitive tasks</li>
              <li>More efficient business processes</li>
              <li>Better use of the software you&apos;ve already invested in</li>
              <li>Often less disruption than replacing the entire system, in the right situations</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Can Get Their Software Customized?
            </h2>

            <p>
              Startups often need quick feature additions as their product or process evolves. Small businesses frequently deal with software that includes unused features while missing needed ones. Medium businesses often outgrow the workflows their software was originally configured for. Enterprises typically need multiple systems to integrate with each other.
            </p>

            <p>
              Hospitals may need scheduling or patient management systems adjusted to specific departmental needs. Schools often need admissions or attendance systems adapted to their structure. Retail companies commonly need POS or inventory systems connected to e-commerce platforms. E-commerce businesses frequently need checkout logic or shipping integrations customized.
            </p>

            <p>
              Manufacturing companies often need production tracking adjusted to specific lines. Logistics companies typically need tracking software integrated with carrier systems. Service companies often need scheduling or billing tools matched to their packages. Financial businesses frequently need reporting or compliance features built into existing accounting systems. Professional service providers commonly need client portals or internal tools adjusted to their specific processes.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Software We Can Discuss for Customization
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>CRM software</li>
              <li>ERP software</li>
              <li>Billing software</li>
              <li>Inventory management software</li>
              <li>Accounting software</li>
              <li>Hospital management software</li>
              <li>School management software</li>
              <li>E-commerce software</li>
              <li>HR management software</li>
              <li>Business dashboards</li>
              <li>Web applications</li>
              <li>Mobile applications</li>
              <li>Internal business tools</li>
              <li>Customer portals</li>
              <li>Admin panels</li>
            </ul>

            <p>
              Not every software can automatically be customized in every way — what&apos;s possible depends on technical access, architecture, source code, and other factors specific to your system. This is something Zentrix Infotech discusses directly with you before any work begins.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Is Your Software Customizable?
            </h2>

            <p>
              Whether — and how much — your software can be customized depends on several factors:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Whether source code is available</li>
              <li>The technology or platform it&apos;s built on</li>
              <li>The overall software architecture</li>
              <li>Whether database access is available</li>
              <li>Whether APIs exist for the system</li>
              <li>Any restrictions from third-party vendors</li>
              <li>Licensing terms attached to the software</li>
              <li>The hosting environment it runs in</li>
              <li>Existing integrations already in place</li>
              <li>Security requirements that apply to your industry</li>
            </ul>

            <p>
              Zentrix Infotech can walk through these factors with you directly, so you have a realistic picture of what&apos;s achievable before any work starts.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Zentrix Infotech?
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A requirement-focused approach built around your actual problem</li>
              <li>Genuine analysis of your existing software before suggesting changes</li>
              <li>An understanding of your business workflow, not just the technology</li>
              <li>Practical feature customization</li>
              <li>Support for integrations with the systems you already use</li>
              <li>Software enhancement focused on real usability, not just new features</li>
              <li>User-focused solutions your team will actually adopt</li>
              <li>A current free customization offer</li>
              <li>A practical, honest consultation before anything is built</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <FaqItem
                question="1. How can I get my software customized?"
                answer="Share details about your existing software and the changes you need with Zentrix Infotech. From there, we discuss your requirements and what customization is realistically possible."
              />
              <FaqItem
                question="2. Can Zentrix Infotech customize my existing software?"
                answer="In most cases, yes. We review your current system and requirements to determine what modifications are feasible."
              />
              <FaqItem
                question="3. What type of software can be customized?"
                answer="CRM, ERP, web applications, mobile applications, dashboards, internal tools, and many other systems can typically be customized, depending on technical access and architecture."
              />
              <FaqItem
                question="4. Can you add new features to existing software?"
                answer="Yes. Missing functionality can often be added directly into your current software without a full rebuild."
              />
              <FaqItem
                question="5. Can you customize CRM software?"
                answer="Yes, including sales pipelines, custom fields, automated follow-ups, and integrations with other tools you use."
              />
              <FaqItem
                question="6. Can you customize ERP software?"
                answer="Yes. ERP modules for inventory, finance, procurement, or HR can be adjusted to match your specific operations."
              />
              <FaqItem
                question="7. Can you customize a web application?"
                answer="Yes. Existing web applications can be modified with new features, redesigned interfaces, or performance improvements."
              />
              <FaqItem
                question="8. Can you customize a mobile application?"
                answer="Yes. Existing mobile apps can be updated with new features, improved navigation, or added integrations."
              />
              <FaqItem
                question="9. Can you integrate APIs into existing software?"
                answer="Yes. We can build integrations connecting your software to payment gateways, accounting tools, CRMs, and other platforms."
              />
              <FaqItem
                question="10. Is software customization free at Zentrix Infotech?"
                answer="Yes, Zentrix Infotech is currently offering software customization free of cost. Reach out with your software details to get started."
              />
              <FaqItem
                question="11. Do I need the source code to customize my software?"
                answer="Not always, but source code access does affect what&apos;s technically possible. This is assessed as part of the discussion about your specific system."
              />
              <FaqItem
                question="12. How do I start the software customization process?"
                answer="Share your software details and the changes you need with Zentrix Infotech. We&apos;ll take it from there and walk you through what&apos;s possible."
              />
            </div>

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/software-customization-services"
                    className="text-blue-600 hover:underline"
                  >
                    Software Customization Services
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/ayodhya/software-customization-services"
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

// Reusable service block
function ServiceBlock({
  title,
  whatItIs,
  problemItSolves,
  howWeHelp,
  businessBenefit,
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>What it is:</strong> {whatItIs}
        </p>
        <p>
          <strong>Problem it solves:</strong> {problemItSolves}
        </p>
        <p>
          <strong>How we help:</strong> {howWeHelp}
        </p>
        <p>
          <strong>Business benefit:</strong> {businessBenefit}
        </p>
      </div>
    </div>
  );
}

// Reusable FAQ item
function FaqItem({ question, answer }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default Content;