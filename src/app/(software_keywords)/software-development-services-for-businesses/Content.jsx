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
              Software Development Services for Businesses of Every Size
            </h2>

            <p>
              Technology decisions shape how fast a business can grow, how
              efficiently it runs, and how well it can compete. Yet many
              companies are still held back by software that doesn&apos;t fit
              &mdash; tools stitched together from unrelated platforms, systems
              that can&apos;t talk to each other, or applications that made sense
              three years ago but can&apos;t keep up today. Zentrix Infotech
              provides software development services for businesses that need
              more than a generic fix: solutions engineered specifically around
              how your company operates, scales, and plans to grow.
            </p>

            <p>
              We work with startups building their first product, small and
              mid-sized businesses replacing outdated tools, and enterprises
              managing complex, multi-team operations &mdash; delivering software
              that&apos;s reliable, secure, and built to last. Rather than selling
              a fixed package of features, we start by understanding the problem
              you&apos;re actually trying to solve, then build the smallest, most
              effective system that solves it &mdash; with room to expand as your
              needs grow.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What &ldquo;Software Development for Business&rdquo; Really Means
            </h2>

            <p>
              Business software development isn&apos;t just about writing code.
              It&apos;s about understanding a company&apos;s operations well
              enough to build something that actually removes friction &mdash; not
              adds a new tool to manage. That means:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mapping real workflows before writing a single line of code</li>
              <li>
                Designing systems that fit how your team already works, with room
                to evolve
              </li>
              <li>
                Building for the scale you&apos;ll need in two years, not just
                today
              </li>
              <li>
                Making sure new software plays well with what you already use
              </li>
              <li>
                Planning for long-term maintenance, not just a one-time launch
              </li>
              <li>
                Involving the people who&apos;ll actually use the software, not
                just the people who approved the budget
              </li>
            </ul>

            <p>
              This is the foundation every project at Zentrix Infotech is built
              on. It&apos;s the difference between software that gets adopted
              enthusiastically by a team and software that quietly gets abandoned
              six months after launch because it never matched how people
              actually work.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signs Your Business Needs Custom Software Development
            </h2>

            <p>
              Not every business needs a custom build right away &mdash; but
              certain signs make the case clearly:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Your team relies on spreadsheets, WhatsApp, and email to manage
                processes that should be automated
              </li>
              <li>
                You&apos;re paying for multiple software subscriptions that
                don&apos;t talk to each other
              </li>
              <li>
                Reporting takes hours or days because data lives in different,
                disconnected systems
              </li>
              <li>
                Your current software was built for a company far smaller (or far
                larger) than yours
              </li>
              <li>
                You&apos;ve outgrown a no-code or off-the-shelf tool&apos;s
                customization limits
              </li>
              <li>
                Manual errors keep creeping into processes like inventory,
                billing, or scheduling
              </li>
              <li>
                Your competitors are moving faster because their operations are
                more automated than yours
              </li>
            </ul>

            <p>
              If two or more of these sound familiar, custom software isn&apos;t a
              luxury &mdash; it&apos;s likely already costing you time and money
              every week it&apos;s delayed.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Software Development Services We Provide
            </h2>

            <div className="space-y-6">
              <ConsultationTopic
                title="Custom Application Development"
                description="Purpose-built software designed around your specific requirements — internal tools, customer portals, operational dashboards, or industry-specific platforms — instead of adapting your business to fit someone else's product. We design the data model, user roles, and workflow logic around how your team actually operates, so the software feels intuitive from day one rather than requiring months of workaround habits."
              />

              <ConsultationTopic
                title="Web-Based Business Applications"
                description="Browser-based software your team can access from anywhere, with no installation required — ideal for distributed teams, client-facing portals, and internal management systems that need to stay accessible and up to date. Because updates deploy centrally, every user is always on the latest version without needing manual installs across dozens of devices."
              />

              <ConsultationTopic
                title="Enterprise Software Solutions"
                description="Large-scale systems built for organizations managing multiple departments, complex permission levels, and high transaction volumes, with architecture designed to handle growth without performance loss. These systems typically include role-based access control, audit trails, and reporting layers that give leadership real visibility into operations across every team."
              />

              <ConsultationTopic
                title="SaaS Product Development"
                description="For businesses building a software product to sell rather than just use internally, we handle the full journey — from MVP to a scalable, multi-tenant platform ready for real customers. That includes subscription billing, tenant isolation, onboarding flows, and the infrastructure needed to support paying customers reliably as your user base grows."
              />

              <ConsultationTopic
                title="Database & Backend Development"
                description="The backbone of any serious business application. We design efficient, secure database structures and backend systems that keep your software fast and reliable as data volume grows — with attention to query performance, indexing, and data integrity from the very first schema design."
              />

              <ConsultationTopic
                title="API Development & Third-Party Integrations"
                description="We build and connect APIs so your software can communicate with payment gateways, accounting tools, CRMs, shipping providers, and any other platform your business depends on — reducing manual data entry and sync errors. Well-designed integrations mean information entered once flows automatically everywhere it's needed, instead of being re-typed across five different tools."
              />

              <ConsultationTopic
                title="Legacy Software Upgrades & Modernization"
                description="Outdated systems slow teams down and become harder to maintain every year. We rebuild or modernize legacy software into secure, current architecture — with minimal disruption to daily operations. This often includes careful data migration planning so historical records, customer data, and transaction history move over intact."
              />

              <ConsultationTopic
                title="Quality Assurance & Testing"
                description="Every application we deliver goes through structured functional, performance, and security testing, so issues are caught before they reach your team or your customers. Our QA process covers usability testing, load testing for peak-traffic scenarios, and edge-case validation to reduce post-launch surprises."
              />

              <ConsultationTopic
                title="Post-Launch Support & Maintenance"
                description="Software needs upkeep. We provide ongoing monitoring, updates, and fixes to keep your systems dependable long after launch day — including proactive performance checks, security patching, and feature refinements as your business needs shift over time."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Business Benefits of Investing in Custom Software
            </h2>

            <div className="space-y-6">
              <ConsultationTopic
                title="Operational Efficiency"
                description="Automating repetitive tasks frees your team to focus on higher-value work instead of manual data entry and duplicate processes."
              />

              <ConsultationTopic
                title="Fewer Costly Errors"
                description="Automated validation and structured workflows reduce the human error that creeps into manual processes over time."
              />

              <ConsultationTopic
                title="Better Decision-Making"
                description="Centralized, real-time data gives leadership an accurate picture of the business, instead of outdated reports pulled together manually each month."
              />

              <ConsultationTopic
                title="Improved Customer Experience"
                description="Faster response times, smoother transactions, and more reliable service directly impact customer satisfaction and retention."
              />

              <ConsultationTopic
                title="Competitive Advantage"
                description="Software built around your specific strengths lets you move faster and serve customers better than competitors relying on generic tools."
              />

              <ConsultationTopic
                title="Long-Term Cost Savings"
                description="While the upfront investment is real, custom software eliminates recurring license fees for multiple disconnected tools and reduces the time spent on manual workarounds."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              In-House Development vs. Partnering with Zentrix Infotech
            </h2>

            <p>
              Many businesses assume they need to build an internal engineering
              team to get quality software &mdash; but that route is expensive,
              slow to set up, and hard to scale up or down as project needs
              change. Hiring, onboarding, and retaining an in-house team also
              means absorbing costs that continue whether or not there&apos;s
              active development work underway. Partnering with an experienced
              development company like Zentrix Infotech gives you:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Faster time-to-market, since you&apos;re not hiring and onboarding
                from scratch
              </li>
              <li>
                Access to a full team &mdash; developers, designers, QA, and
                project managers &mdash; without the overhead of employing each
                role individually
              </li>
              <li>
                Flexible engagement, scaling the team up during active development
                and down during maintenance phases
              </li>
              <li>
                Broader technical expertise, drawn from experience across multiple
                industries and project types
              </li>
              <li>
                Lower long-term cost, avoiding the fixed overhead of a permanent
                in-house department
              </li>
              <li>
                Reduced hiring risk, since you&apos;re not gambling your project
                timeline on finding and retaining the right in-house talent
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Engagement Models
            </h2>

            <p>
              We understand that no two businesses have the same needs, so we
              offer flexible ways to work together:
            </p>

            <div className="space-y-6">
              <ConsultationTopic
                title="Fixed-Scope Projects"
                description="Ideal when requirements are well-defined upfront, with a clear budget and timeline agreed in advance. Best for well-scoped projects like a defined internal tool or a specific integration."
              />

              <ConsultationTopic
                title="Dedicated Development Team"
                description="A team of developers working exclusively on your project, best suited for ongoing or evolving product development where requirements will keep shifting as you learn."
              />

              <ConsultationTopic
                title="Time & Material Engagement"
                description="Flexible, iterative development for projects where requirements are expected to change as the product evolves, billed based on actual effort rather than a fixed upfront estimate."
              />
            </div>

            <p>
              Each model can also be combined &mdash; many clients start with a
              fixed-scope MVP, then shift to a dedicated team as the product
              matures and new features are added continuously.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Influences the Cost of Business Software Development
            </h2>

            <p>
              Every project is different, but the main cost drivers are generally
              the same:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Scope and feature complexity &mdash; a simple internal tool costs
                far less than a multi-department enterprise system
              </li>
              <li>
                Integrations required &mdash; connecting to multiple third-party
                systems adds development and testing time
              </li>
              <li>
                User roles and permission structures &mdash; more complex access
                control requires more design and testing
              </li>
              <li>
                Data migration needs &mdash; moving historical data from legacy
                systems safely takes careful planning
              </li>
              <li>
                Platform requirements &mdash; web-only builds are typically faster
                and more affordable than web-plus-mobile builds
              </li>
              <li>
                Timeline &mdash; compressed timelines may require additional
                resources to meet the same deadline
              </li>
            </ul>

            <p>
              We provide a transparent, itemized quote after the discovery phase,
              so there are no surprises once development begins.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Software Development Process
            </h2>

            <div className="space-y-6">
              <ProcessStep
                number="Step 1"
                title="Discovery Call & Requirement Gathering"
                description="Understanding your business, goals, and challenges before proposing any solution."
              />

              <ProcessStep
                number="Step 2"
                title="Technical Planning"
                description="Selecting the right architecture, tech stack, and development approach for your specific project."
              />

              <ProcessStep
                number="Step 3"
                title="UI/UX & Prototyping"
                description="Visualizing the product early, so you can give feedback before development begins in earnest."
              />

              <ProcessStep
                number="Step 4"
                title="Agile Development"
                description="Building in structured sprints with regular demos, so you always have visibility into progress."
              />

              <ProcessStep
                number="Step 5"
                title="Testing & QA"
                description="Rigorous testing across functionality, security, and performance before anything ships."
              />

              <ProcessStep
                number="Step 6"
                title="Deployment & Launch"
                description="Smooth rollout with careful attention to data migration and minimal downtime."
              />

              <ProcessStep
                number="Step 7"
                title="Ongoing Support"
                description="Continued monitoring, updates, and enhancements as your business needs evolve."
              />
            </div>

            <p>
              Throughout every stage, you get scheduled check-ins and access to a
              live project tracker, so you&apos;re never left wondering what&apos;s
              happening with your investment.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Technologies Behind Our Development
            </h2>

            <p>
              Our team builds across a modern, versatile stack &mdash; including
              React.js, Next.js, Node.js, Python, Java, Angular, TypeScript,
              PostgreSQL, MongoDB, Docker, Kubernetes, and AWS &mdash; so we can
              match the right technology to each project instead of forcing every
              client into the same toolkit. This flexibility means we choose tools
              based on your project&apos;s actual requirements &mdash; performance
              needs, integration requirements, and long-term maintainability
              &mdash; rather than defaulting to whatever stack is most convenient
              for us.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Security &amp; Data Protection
            </h2>

            <p>
              Business software often handles sensitive financial, operational,
              and customer data, so security is built in from the start rather
              than added later. Our standard practices include data encryption in
              transit and at rest, secure authentication and role-based access
              controls, regular security audits, and adherence to
              industry-standard compliance practices relevant to your sector. For
              businesses handling regulated data, we also design systems with the
              specific compliance requirements of your industry in mind from the
              earliest planning stages.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Support
            </h2>

            <p>
              We&apos;ve delivered software development services for businesses
              across retail and e-commerce, healthcare, education, hospitality,
              real estate, manufacturing, and professional services &mdash; each
              with different operational needs, but the same underlying goal:
              software that fits the business, not the other way around. Whether
              it&apos;s a patient scheduling system for a healthcare provider, an
              inventory and order management platform for a retail brand, or a
              workflow automation tool for a professional services firm, we adapt
              our approach to the realities of your specific industry.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses Choose Zentrix Infotech
            </h2>

            <div className="space-y-6">
              <ConsultationTopic
                title="Business-First Approach"
                description="We start with your operations and goals, not a template."
              />

              <ConsultationTopic
                title="Full Project Lifecycle Support"
                description="Strategy, design, development, testing, deployment, and maintenance under one roof."
              />

              <ConsultationTopic
                title="Transparent Process"
                description="Regular updates and clear communication at every stage."
              />

              <ConsultationTopic
                title="Scalable, Future-Ready Builds"
                description="Architecture designed to grow alongside your business."
              />

              <ConsultationTopic
                title="Security Built In"
                description="Data protection and compliance considered from day one."
              />

              <ConsultationTopic
                title="Competitive, Transparent Pricing"
                description="Quality development at pricing that fits growing businesses."
              />

              <ConsultationTopic
                title="Proven Delivery"
                description="A track record of successful projects across industries and business sizes."
              />

              <ConsultationTopic
                title="Long-Term Partnership Mindset"
                description="We aim to be the team you keep coming back to as your software needs grow, not a one-off vendor."
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-6 mt-6">
              <FaqItem
                question="What software development services do you offer for businesses?"
                answer="We offer custom application development, enterprise software, SaaS products, API integrations, legacy modernization, QA testing, and ongoing support — tailored to each business's needs."
              />

              <FaqItem
                question="Should my business outsource software development or hire in-house?"
                answer="Outsourcing is usually faster and more cost-effective for most businesses, giving you access to a full team without the overhead of hiring and managing developers directly."
              />

              <FaqItem
                question="How much does software development cost for a business?"
                answer="Cost depends on project scope, features, and complexity. We provide a detailed quote after understanding your requirements during the discovery call."
              />

              <FaqItem
                question="How long does a typical business software project take?"
                answer="Most projects take 6 to 16 weeks depending on complexity, though larger enterprise systems can take longer. We share a clear timeline after the planning phase."
              />

              <FaqItem
                question="Can you work with startups that don't have technical requirements defined yet?"
                answer="Yes. We help startups clarify requirements, define scope, and build a roadmap from an initial idea through to a working product."
              />

              <FaqItem
                question="Do you offer dedicated development teams for long-term projects?"
                answer="Yes. Our dedicated team model provides developers who work exclusively on your project for as long as you need them."
              />

              <FaqItem
                question="Will the software integrate with the tools we already use?"
                answer="Yes. We build custom APIs and integrations to connect your new software with your existing accounting, CRM, payment, or operational tools."
              />
            </div>

            <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Related Services
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/business-software-development-services"
                    className="text-blue-600 hover:underline"
                  >
                    Business Software Development Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/custom-software-development-company"
                    className="text-blue-600 hover:underline"
                  >
                    Custom Software Development Company
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
              </ul>
            </div>

            <CityInternalLinks
              city="ayodhya"
              currentSlug="/ayodhya/software-development-services"
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
