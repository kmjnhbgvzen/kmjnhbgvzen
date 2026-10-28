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
              Software Development Company in Moradabad
            </h2>

            <p>
              Every growing business reaches a point where spreadsheets, paper
              registers and generic tools stop being enough. Orders get missed,
              reports take days, and staff waste hours on work a system could
              do in seconds. That is the moment to work with a software
              development company that understands your business, not just your
              code.
            </p>

            <p>
              Zentrix Infotech is a Moradabad-based software development
              company with 250+ projects delivered, 270+ clients and a 4.7/5
              client rating. We build custom software, web applications, mobile
              apps, ERP and CRM systems for businesses that want to work
              faster, serve customers better and grow with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does a Software Development Company Do?
            </h3>

            <p>
              A software development company designs, builds, tests and
              maintains software that solves a specific business problem. Good
              companies do far more than write code.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Analyse your needs:</strong> Understand how your
                business works and where time or money is lost.
              </li>
              <li>
                <strong>Design the solution:</strong> Plan features, screens
                and data flow before building.
              </li>
              <li>
                <strong>Develop the software:</strong> Write secure, reliable
                code for web, mobile or desktop.
              </li>
              <li>
                <strong>Integrate systems:</strong> Connect new software with
                payments, accounting, WhatsApp, SMS and other tools.
              </li>
              <li>
                <strong>Test thoroughly:</strong> Fix bugs, speed issues and
                security gaps before launch.
              </li>
              <li>
                <strong>Deploy and support:</strong> Launch the software, train
                your team and keep it updated.
              </li>
            </ul>

            <p>
              The result is software that fits your business like a glove
              instead of forcing you to change how you work.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Moradabad Businesses Need Custom Software
            </h3>

            <p>
              Moradabad has a rich mix of businesses: handicraft manufacturers
              and exporters, retailers, wholesalers, hospitals, schools, real
              estate firms, restaurants and startups. Each of them has unique
              processes that off-the-shelf software rarely handles well.
            </p>

            <p>Custom software helps you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Automate billing, inventory, orders and reports</li>
              <li>Reduce manual errors and duplicate data entry</li>
              <li>Give owners a live view of sales, stock and staff</li>
              <li>Serve customers faster through apps and portals</li>
              <li>Scale operations without hiring more admin staff</li>
              <li>Protect business data with proper security</li>
            </ul>

            <p>
              Readymade software often comes with monthly fees, limited
              features and no flexibility. Custom software is built around you
              and you own it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Custom Software Development
            </h4>

            <p>
              Software designed from scratch around your workflow, branding and
              goals. Ideal when no ready-made product matches the way you
              operate.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Secure, fast web apps and portals for customers, dealers, staff
              and management, built with modern technologies and ready for
              growth.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Mobile App Development
            </h4>

            <p>
              Android, iOS and cross-platform apps using Kotlin, Swift, Flutter
              and React Native that put your business in your customers&rsquo;
              pockets.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              ERP Software Development
            </h4>

            <p>
              One connected system for inventory, purchase, sales, accounts, HR
              and production, with reports that help you decide faster.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              CRM Software Development
            </h4>

            <p>
              Track leads, follow-ups, customer history and sales performance
              in one place, so no enquiry goes cold.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              E-commerce Development
            </h4>

            <p>
              Online stores and marketplaces with catalogues, carts, secure
              payments, order tracking and admin controls.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Software Integration and API Development
            </h4>

            <p>
              We connect your existing tools so data flows automatically
              between billing, accounting, logistics, payment gateways and
              messaging platforms.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Simple, attractive interfaces that your team and customers can
              use without training.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Cloud Solutions
            </h4>

            <p>
              Reliable hosting, backups, scaling and security so your software
              stays fast and available.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Maintenance and Support
            </h4>

            <p>
              Bug fixes, updates, performance tuning and new features after
              launch, so your software keeps pace with your business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Build Software For
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Retail, wholesale and distribution</li>
              <li>Handicraft manufacturing and export</li>
              <li>Healthcare, hospitals and clinics</li>
              <li>Education, schools and coaching institutes</li>
              <li>Real estate and construction</li>
              <li>Food, bakery and restaurant businesses</li>
              <li>Interior design and event management</li>
              <li>Startups building a new product</li>
            </ul>

            <p>
              Our portfolio includes e-commerce platforms, healthcare websites,
              education portals, interior studios, event brands and retail
              projects. This experience helps us suggest features that work in
              real life, not just on paper.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We study your business, users and
                goals in detail.
              </li>
              <li>
                <strong>Requirement document:</strong> Features, scope,
                timeline and price are agreed in writing.
              </li>
              <li>
                <strong>UI/UX design:</strong> You review and approve screens
                before development starts.
              </li>
              <li>
                <strong>Agile development:</strong> We build in short stages
                with regular demos and feedback.
              </li>
              <li>
                <strong>Testing:</strong> Functional, performance and security
                testing on real data.
              </li>
              <li>
                <strong>Deployment and training:</strong> We launch the
                software and train your team.
              </li>
              <li>
                <strong>Support and growth:</strong> Ongoing maintenance and
                new features as you grow.
              </li>
            </ol>

            <p>
              At every step you see progress and approve decisions. Nothing is
              hidden.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technologies We Work With
            </h3>

            <p>We choose technology that fits your needs and budget.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Frontend:</strong> React, Next.js, HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Backend:</strong> Node.js, PHP, Laravel
              </li>
              <li>
                <strong>Mobile:</strong> Kotlin, Swift, Flutter, React Native
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB, Firebase
              </li>
              <li>
                <strong>Integrations:</strong> Payment gateways, maps, SMS,
                email, WhatsApp and third-party APIs
              </li>
              <li>
                <strong>Hosting:</strong> Reliable cloud infrastructure for
                speed and uptime
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local Company or Outsourcing: What Is Better?
            </h3>

            <p>
              Many businesses consider outsourcing to distant agencies for
              lower rates. It can work, but it also brings risks.
            </p>

            <p>Outsourced remote agencies:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Time and communication gaps</li>
              <li>Less understanding of local business habits</li>
              <li>Harder to hold accountable</li>
              <li>Support can be slow</li>
            </ul>

            <p>A local company like Zentrix Infotech:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Face-to-face meetings at our Moradabad office</li>
              <li>Quick calls and same-city support</li>
              <li>Understanding of Moradabad business culture</li>
              <li>A real team and address you can trust</li>
            </ul>

            <p>
              For business-critical software, closeness and accountability are
              worth a lot.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security and Quality Standards
            </h3>

            <p>
              Your software will hold customer, sales and financial data, so
              security comes first.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Encrypted data transfer and secure storage</li>
              <li>Role-based access, so staff see only what they need</li>
              <li>Strong authentication and safe payment integration</li>
              <li>Regular backups and code reviews</li>
              <li>Clean documentation and version control</li>
              <li>
                Complete source code ownership for you after final payment
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects Software Development Cost
            </h3>

            <p>
              Every project is different, so we give a custom quote after
              understanding your needs. The main cost factors are:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of modules and features</li>
              <li>Web, mobile or both</li>
              <li>Complexity of reports and workflows</li>
              <li>Third-party integrations</li>
              <li>Design and user experience needs</li>
              <li>Hosting, support and maintenance</li>
            </ul>

            <p>
              As a guide, simple business software and apps can start from
              around Rs. 80,000, while ERP, CRM and enterprise systems cost
              more depending on size and features. You always receive an
              itemised estimate with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience:</strong> 250+ projects across many
                industries.
              </li>
              <li>
                <strong>Local presence:</strong> Our office at 12/11, Buddhi
                Vihar Phase 2, Moradabad is open for meetings.
              </li>
              <li>
                <strong>One team, complete service:</strong> Software, mobile
                apps, design, cloud and digital marketing.
              </li>
              <li>
                <strong>Honest advice:</strong> We recommend what you truly
                need first and what can wait.
              </li>
              <li>
                <strong>Transparent pricing:</strong> Clear quotes and
                milestone-based payments.
              </li>
              <li>
                <strong>Clear ownership:</strong> Your software and source code
                belong to you.
              </li>
              <li>
                <strong>Long-term partnership:</strong> We stay with you for
                support and growth after launch.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Software Development Company
            </h3>

            <p>Before signing with anyone, check these points:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Ask to see live projects and speak with past clients</li>
              <li>Get scope, timeline and price in writing</li>
              <li>Confirm who owns the source code</li>
              <li>Ask how security, backups and testing are handled</li>
              <li>Understand the support terms after launch</li>
              <li>
                Choose a team that asks about your business before talking
                about technology
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Software Project With Us
            </h3>

            <p>
              Whether you need a simple business tool or a complete ERP system,
              our team is ready to help. Book a free consultation and we will
              suggest the right solution, timeline and budget.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
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
              <strong>Visit:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does a software development company in Moradabad do?
                </h4>
                <p>
                  It plans, designs, builds, tests and supports custom software
                  for your business.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much does custom software cost?
                </h4>
                <p>
                  Simple software starts around Rs. 80,000. ERP and enterprise
                  systems cost more based on features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does software development take?
                </h4>
                <p>
                  Simple projects take 4 to 8 weeks. Larger systems may take 3
                  to 6 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you build both web and mobile software?
                </h4>
                <p>
                  Yes. We build web apps, Android, iOS and cross-platform apps.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Will I own the source code?
                </h4>
                <p>
                  Yes. Full ownership transfers to you after final payment.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you connect software with my existing tools?
                </h4>
                <p>
                  Yes. We integrate payments, accounting, WhatsApp, SMS and
                  other systems through APIs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer bug fixes, updates and monthly maintenance
                  plans.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can I meet your team in person?
                </h4>
                <p>
                  Yes. Visit our Moradabad office or call to book a free
                  consultation.
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
                    href="/moradabad/ecommerce-website-development-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Ecommerce Website Development in Moradabad
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
              currentSlug="/moradabad/software-development-company-in-moradabad"
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