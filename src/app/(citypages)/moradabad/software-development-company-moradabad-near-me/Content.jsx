import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";


const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Software Development Company in Moradabad Near You
            </h2>


            <p>
              When you type &ldquo;software development company Moradabad near
              me&rdquo; into a search box, you are usually after something
              specific: a real team in your city that you can meet, talk to and
              trust. You probably want to sit across a table, explain your
              problem in your own words and see the people who will build your
              solution.
            </p>


            <p>
              Zentrix Infotech is exactly that kind of company. Our office is
              in Buddhi Vihar, Moradabad, and we have helped businesses across
              the city and region with custom software, web and mobile apps,
              ERP and CRM systems and cloud solutions. With 250+ projects
              delivered, 270+ clients served and a 4.7/5 rating, we combine
              local accessibility with professional delivery.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Where to Find Us
            </h3>


            <p>
              <strong>Zentrix Infotech, Moradabad</strong>
              <br />
              12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001
            </p>


            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Phone:</strong>{" "}
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
              <br />
              <span role="img" aria-label="whatsapp">
                💬
              </span>{" "}
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 63970 36898
              </a>
              <br />
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>


            <p>
              We recommend calling or messaging before you visit so we can set
              aside time and have the right people available. If you cannot
              travel, we are equally happy to meet on a video call.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why a Local Software Company Makes Sense in Moradabad
            </h3>


            <p>
              Moradabad has its own way of doing business. Exporters, traders,
              manufacturers, hospitals, schools and retailers each have
              particular practices, seasons and customer habits. A local team
              has the advantage of understanding this context from day one.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You can meet in person:</strong> Face-to-face
                conversations remove misunderstandings quickly.
              </li>
              <li>
                <strong>Developers can see your operations:</strong> A short
                visit to your shop floor, warehouse or clinic often reveals
                more than pages of requirements.
              </li>
              <li>
                <strong>Communication is easy:</strong> We speak your language,
                whether that is English, Hindi or a mix of both, and work in
                your time zone.
              </li>
              <li>
                <strong>Support is close by:</strong> Training your staff and
                fixing issues is simpler when the team is in the same city.
              </li>
              <li>
                <strong>Accountability is real:</strong> A physical office and
                known people make the relationship more trustworthy.
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Happens When You Meet Us
            </h3>


            <p>
              Many business owners have never worked with a software company
              and are unsure what to expect. Here is how a first meeting
              typically goes.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Step 1: You Tell Us Your Story
            </h4>


            <p>
              We start by listening. What does your business do, what slows you
              down and what would you like to change? You do not need technical
              language or a finished specification.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Step 2: We Ask Questions
            </h4>


            <p>
              We ask who will use the software, how work currently flows, which
              tools you use and what success would look like. These questions
              help us recommend the right solution, not just the most expensive
              one.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Step 3: We Suggest Options
            </h4>


            <p>
              We outline possible approaches, such as a small automation tool, a
              custom web application, a mobile app or an integration with
              software you already use. If a simpler solution is enough, we say
              so.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Step 4: We Explain Cost and Timeline
            </h4>


            <p>
              We give you an honest idea of effort, budget and delivery time,
              and explain what a written proposal will contain.
            </p>


            <h4 className="text-lg font-semibold text-gray-900">
              Step 5: You Decide With No Pressure
            </h4>


            <p>
              You receive a written proposal after the meeting and take the
              time you need. There is no obligation to proceed.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local Business Scenarios We Can Help With
            </h3>


            <p>
              These are examples of the problems local businesses bring to us.
              They are illustrative, not specific client stories.
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                An exporter whose buyers cannot see products online needs a
                catalogue website with inquiry forms.
              </li>
              <li>
                A trader managing orders on WhatsApp and paper needs a simple
                order and payment tracking app.
              </li>
              <li>
                A clinic or hospital with crowded phone lines needs online
                appointment booking and reminders.
              </li>
              <li>
                A school or college handling admissions manually needs a web
                portal for applications and records.
              </li>
              <li>
                A retailer with several outlets needs central inventory and
                billing.
              </li>
              <li>
                A growing startup needs a mobile app and a reliable team to
                build it.
              </li>
            </ul>


            <p>
              Whatever the situation, we begin by understanding the real
              problem before proposing technology.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Software Development Services in Moradabad
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Custom software development:</strong> Applications
                tailored to your processes
              </li>
              <li>
                <strong>Business application development:</strong> Inventory,
                billing, order management, HR and reporting tools
              </li>
              <li>
                <strong>ERP and CRM development:</strong> Connected systems for
                sales, stock, accounts and customers
              </li>
              <li>
                <strong>Web application development:</strong> Portals,
                dashboards and booking platforms
              </li>
              <li>
                <strong>Mobile app development:</strong> Android, iOS and
                cross-platform apps
              </li>
              <li>
                <strong>E-commerce development:</strong> Online stores,
                catalogues and payment integration
              </li>
              <li>
                <strong>Software integration and APIs:</strong> Connecting your
                existing tools
              </li>
              <li>
                <strong>Cloud solutions:</strong> Hosting, deployment,
                migration and backups
              </li>
              <li>
                <strong>UI/UX design:</strong> Intuitive, attractive interfaces
              </li>
              <li>
                <strong>Maintenance and support:</strong> Updates, fixes and
                improvements after launch
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Areas Around Moradabad We Serve
            </h3>


            <p>
              We work with businesses in Moradabad city and in nearby towns,
              including Rampur, Sambhal, Amroha, Bijnor and Bareilly. We also
              have an office in Ghaziabad, which helps us serve Delhi NCR,
              Noida and Meerut. If you are further away, we use video calls and
              messaging tools to keep the same pace and quality.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Projects Run After the Meeting
            </h3>


            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Proposal:</strong> Scope, timeline, technology and cost
                in writing.
              </li>
              <li>
                <strong>Design:</strong> Wireframes and prototypes for your
                approval.
              </li>
              <li>
                <strong>Development:</strong> Short build cycles with regular
                progress demos.
              </li>
              <li>
                <strong>Testing:</strong> Checks for function, speed, security
                and device compatibility.
              </li>
              <li>
                <strong>Launch and training:</strong> Deployment, data
                migration and staff training.
              </li>
              <li>
                <strong>Support:</strong> Continued maintenance and
                improvement.
              </li>
            </ol>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Use
            </h3>


            <p>
              We pick tools that suit your project and budget. Our developers
              work with React, Next.js, Node.js, Laravel and Python for web
              development, Flutter and React Native for mobile apps, MySQL,
              PostgreSQL and MongoDB for databases and trusted cloud platforms
              for hosting. If you already have software, we can often extend it
              instead of replacing it.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Moradabad Businesses Choose Zentrix Infotech
            </h3>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Proven experience:</strong> 250+ projects across
                e-commerce, education, healthcare, hospitality, retail and
                more.
              </li>
              <li>
                <strong>Complete team:</strong> Developers, designers, cloud
                engineers and digital marketers under one roof.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Written proposals and
                clear milestones, with no hidden charges.
              </li>
              <li>
                <strong>Direct access:</strong> One point of contact and
                regular updates.
              </li>
              <li>
                <strong>Built to grow:</strong> Software that scales with your
                business.
              </li>
              <li>
                <strong>After-launch support:</strong> We stay with you once
                the software is live.
              </li>
            </ul>


            <p>
              Clients often describe our websites and platforms as
              professional, easy to use and effective at bringing in inquiries
              and orders. We aim to earn that response with every project.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What to Bring to Your First Meeting
            </h3>


            <p>
              You do not need to prepare much, but these items help us give
              sharper advice:
            </p>


            <ul className="ml-4 list-disc space-y-2">
              <li>
                A short description of your business and the problem you want
                to solve
              </li>
              <li>
                Examples of current tools, such as spreadsheets, registers or
                existing software
              </li>
              <li>Names of any websites or apps you like</li>
              <li>Your rough budget and ideal timeline</li>
              <li>
                Anyone from your team who will use the system daily
              </li>
            </ul>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Visit or Call Zentrix Infotech Today
            </h3>


            <p>
              If you are looking for a software development company near you in
              Moradabad, we would be glad to meet you. Come by the office, call
              us or start with a WhatsApp message, and tell us what you need.
            </p>


            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <span role="img" aria-label="whatsapp">
                💬
              </span>{" "}
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 63970 36898
              </a>
              <br />
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Moradabad office:</strong> 12/11, Buddhi Vihar Phase 2,
              Moradabad, Uttar Pradesh 244001
            </p>


            <p>
              Book a free consultation today and take the first step toward
              software that works for your business.
            </p>


            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>


            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Is there a software development company near me in
                  Moradabad?
                </h4>
                <p>
                  Yes. Zentrix Infotech is based at 12/11, Buddhi Vihar Phase
                  2, Moradabad, and serves businesses across the city and
                  region.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Can I visit your office?
                </h4>
                <p>
                  Yes. Please call or message first so we can arrange a
                  convenient time and the right team members.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Is the first consultation free?
                </h4>
                <p>
                  Yes. We discuss your needs, suggest options and explain cost
                  and timeline at no charge.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you serve areas outside Moradabad?
                </h4>
                <p>
                  Yes. We serve Rampur, Sambhal, Amroha, Bijnor, Bareilly,
                  Delhi NCR and other cities, in person or online.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. What software can you build?
                </h4>
                <p>
                  We build custom software, ERP, CRM, web apps, mobile apps,
                  e-commerce platforms and integrations.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do I need technical knowledge to talk to you?
                </h4>
                <p>
                  No. Explain your problem in simple words, and we will handle
                  the technical side.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How long does a project take?
                </h4>
                <p>
                  Small tools take a few weeks, and larger systems a few
                  months. Your proposal includes a clear timeline.
                </p>
              </div>


              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We provide maintenance, updates, bug fixes and new
                  features after your software goes live.
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
                    href="/moradabad/software-development-company-near-me"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company Near Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    App Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/digital-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>


            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/software-development-company-in-moradabad-near-you"
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