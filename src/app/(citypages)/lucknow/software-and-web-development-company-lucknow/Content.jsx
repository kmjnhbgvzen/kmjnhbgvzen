import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a software and web development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It builds websites, web applications and custom software that help businesses sell, manage work and serve customers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Lucknow clients through calls, video meetings and visits when needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between web and software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web development builds websites and online apps. Software development builds tools such as billing, ERP or CRM systems. Many businesses need both.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a website and software together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect them so data flows automatically, such as website orders feeding your stock system.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple website takes a few weeks. Software and larger projects take longer, depending on features and scope.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with secure checkout and payment options.",
      },
    },
    {
      "@type": "Question",
      name: "Will my software be secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow secure practices, including SSL, protected forms and careful data handling.",
      },
    },
    {
      "@type": "Question",
      name: "How much does development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, integrations and timeline. Share your needs and we will send a clear proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help with updates, fixes, security checks and new features.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Zentrix Infotech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message +91 63970 36898 on WhatsApp or email info@zentrixinfotech.com.",
      },
    },
  ],
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Software and Web Development Company in Lucknow Built Around Your Business
            </h2>

            <p>
              Zentrix Infotech is a software and web development company that helps businesses in Lucknow build the digital tools they actually need: websites that bring customers, and software that keeps the business running smoothly. We design, develop, test and support both under one team, so your website, your systems and your marketing work together instead of living in separate boxes.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call:{" "}
              <a
                href="tel:+917248800839"
                className="font-semibold text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <span role="img" aria-label="WhatsApp">
                💬
              </span>{" "}
              WhatsApp:{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              |{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Combine Software and Web Development?
            </h3>

            <p>
              Many businesses hire one vendor for the website, another for software and a third for marketing. The result is often a website that cannot talk to the billing system, a customer form that never reaches the right person and a team that spends hours copying data by hand.
            </p>

            <p>When one company handles both sides, you get:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>One plan instead of three disconnected projects</li>
              <li>
                Systems that connect, such as a website form feeding your CRM or an online store linked to your stock records
              </li>
              <li>
                Clear responsibility, so you know whom to call when something needs fixing
              </li>
              <li>
                Better value over time, because the same team understands your business and grows with it
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Do You Need a Website, Software or Both?
            </h3>

            <p>This is the first question we help you answer.</p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Your situation
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What you probably need
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      New business with no online presence
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Business website
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Selling products online
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      E-commerce website or store
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Doing billing, stock or attendance on paper or Excel
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Custom business software
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Customers need to log in, book or track orders
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Web application or portal
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Many tools that do not talk to each other
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Software integration
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Want to reach customers on their phones
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Mobile app, often after the website
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Everything above, in stages
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Software and web development together
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If you are not sure, a short discovery call is enough. We would rather recommend a smaller, correct solution than sell you something you do not need.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital solutions company offering web development, software development, UI/UX design, mobile apps, cloud solutions and digital marketing. Our offices are in Moradabad and Ghaziabad, and we work with clients across Uttar Pradesh and India, including Lucknow, through calls, video meetings and in-person visits when needed.
            </p>

            <p>
              We have completed 250+ projects for 270+ clients and hold a 4.7 out of 5 client rating. Our approach is simple: understand the business problem first, choose the right technology second and measure results after launch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Web Development Services in Lucknow
            </h3>

            <h4 className="font-semibold text-gray-900">
              Business and Corporate Websites
            </h4>

            <p>
              Professional sites with clear service pages, testimonials and contact options, built to load fast and work smoothly on mobile.
            </p>

            <h4 className="font-semibold text-gray-900">
              E-commerce Website Development
            </h4>

            <p>
              Online stores with product catalogues, cart, secure checkout and payment options. These suit chikankari and handicraft sellers, food brands, wellness businesses and retailers.
            </p>

            <h4 className="font-semibold text-gray-900">
              Web Application Development
            </h4>

            <p>
              Browser-based tools such as customer portals, booking systems, dashboards and admin panels.
            </p>

            <h4 className="font-semibold text-gray-900">Landing Pages</h4>

            <p>
              Focused pages for ad campaigns, admissions and product launches.
            </p>

            <h4 className="font-semibold text-gray-900">Website Redesign</h4>

            <p>
              A fresh look, better navigation and faster loading, while protecting content and search visibility you already have.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services in Lucknow
            </h3>

            <h4 className="font-semibold text-gray-900">
              Custom Business Software
            </h4>

            <p>
              Tools built around your own workflow, whether that is billing, inventory, order tracking, attendance, project management or reporting.
            </p>

            <h4 className="font-semibold text-gray-900">
              ERP and CRM Solutions
            </h4>

            <p>
              Systems that bring sales, stock, accounts and customer records into one place, so your team works from the same information.
            </p>

            <h4 className="font-semibold text-gray-900">
              Software Integration
            </h4>

            <p>
              We connect your website, payment gateway, accounting tools and other systems so data moves automatically instead of by hand.
            </p>

            <h4 className="font-semibold text-gray-900">
              Software Modernisation
            </h4>

            <p>
              Old or slow systems can be improved, moved to the web or rebuilt in stages, without stopping day-to-day work.
            </p>

            <h4 className="font-semibold text-gray-900">Cloud Solutions</h4>

            <p>
              Reliable hosting, deployment and scaling so your website and software stay available, secure and fast.
            </p>

            <h4 className="font-semibold text-gray-900">
              Mobile App Development
            </h4>

            <p>
              Native and cross-platform apps for iOS and Android, ideal when your customers or staff need to work from their phones.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Web and Software Work Together: Simple Examples
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A distributor gets a website with a catalogue and a login for dealers. Orders flow into a software system that tracks stock and invoices.
              </li>
              <li>
                A coaching institute gets a website with course pages and admission forms. Enquiries land in a CRM, and a portal shows students their schedules and results.
              </li>
              <li>
                A clinic gets a website with doctor profiles and online appointment booking. Bookings feed a simple management system for the front desk.
              </li>
              <li>
                A boutique gets an online store that updates stock in real time, so customers never order something that is already sold out.
              </li>
            </ul>

            <p>
              These are the kinds of connections that save hours of manual work every week.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> we understand your business, users, challenges and goals.
              </li>
              <li>
                <strong>Requirements and scope:</strong> we write down what will be built, in plain language, so everyone agrees.
              </li>
              <li>
                <strong>Design:</strong> we create wireframes and visual designs for your approval.
              </li>
              <li>
                <strong>Development:</strong> we build in stages so you see progress, not just a final reveal.
              </li>
              <li>
                <strong>Testing:</strong> we check functionality, devices, browsers, speed and security.
              </li>
              <li>
                <strong>Launch:</strong> we deploy the project, train your team where needed and connect analytics.
              </li>
              <li>
                <strong>Support and growth:</strong> we remain available for fixes, updates and new features.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Technology Chosen for Your Project, Not Ours
            </h3>

            <p>
              We do not push a single tool for every job. The right technology depends on your budget, expected users, security needs and plans for growth. We explain our recommendation in simple terms and design projects so they can grow without being rebuilt from scratch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve Around Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Retail and e-commerce:</strong> online stores, catalogues and inventory tools
              </li>
              <li>
                <strong>Healthcare:</strong> doctor and hospital websites, appointment booking and patient management
              </li>
              <li>
                <strong>Education:</strong> institute websites, admission forms and student portals
              </li>
              <li>
                <strong>Real estate:</strong> project websites, lead capture and property listings
              </li>
              <li>
                <strong>Hospitality and events:</strong> booking enquiries, galleries and package pages
              </li>
              <li>
                <strong>Manufacturing and trade:</strong> catalogues, quote requests and order tracking
              </li>
              <li>
                <strong>Startups:</strong> simple first versions that can grow with the business
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof You Can Check: Our Portfolio
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart:</strong> a retail and franchise platform with multi-category shopping and franchise operations
              </li>
              <li>
                <strong>HerbsFox:</strong> an online marketplace for herbs, spices and wellness products
              </li>
              <li>
                <strong>Kamla Devi Group of Institutions (KDEDU):</strong> an education website for students and faculty
              </li>
              <li>
                <strong>Vasterior:</strong> a luxury interior and Vastu design studio website
              </li>
              <li>
                <strong>PS Decor:</strong> a wedding and event design website. The client shared that it helped bring more enquiries
              </li>
              <li>
                <strong>Alluring Glimpses:</strong> a visual, atmosphere-led website for an interior design brand
              </li>
            </ul>

            <p>
              <Link href="/portfolio" className="text-blue-600 hover:underline">
                Visit our portfolio page
              </Link>{" "}
              to explore more projects.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Security, Speed and Reliability
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Security:</strong> we use secure practices, SSL, protected forms and careful handling of customer data.
              </li>
              <li>
                <strong>Speed:</strong> clean code and optimised images keep pages quick, even on mobile networks.
              </li>
              <li>
                <strong>Reliability:</strong> proper testing and reliable hosting reduce downtime.
              </li>
              <li>
                <strong>Ownership:</strong> project ownership terms are agreed in writing before work starts, so you know what you receive.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work With Lucknow Clients
            </h3>

            <p>
              Our offices are in Moradabad and Ghaziabad, and we serve Lucknow businesses mainly through calls, video meetings and shared project updates. For key milestones, we are open to meeting in person where it helps. You get regular updates, a single point of contact and clear next steps at every stage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Engagement Models and Pricing
            </h3>

            <p>
              There is no fixed price for every project, because needs differ. Your proposal depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of pages, screens and features</li>
              <li>Website, software, app or a combination</li>
              <li>Integrations such as payments, CRM or accounting tools</li>
              <li>Design effort and content support</li>
              <li>Timeline and expected users</li>
              <li>Support and maintenance after launch</li>
            </ul>

            <p>
              We can work on a fixed scope for clearly defined projects, or in monthly stages for ongoing development. After a short discussion, we share a written proposal so you know what is included before you decide. Starting with a focused first version and adding features later is often the smartest way to begin.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Software and Web Development Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Open their live websites on your phone and judge speed and design.</li>
              <li>Ask for examples similar to your project.</li>
              <li>Check that they explain choices in simple language.</li>
              <li>Confirm ownership, support and timeline in writing.</li>
              <li>Ask how they handle security and data.</li>
              <li>
                Prefer a team that can handle both software and web, so your systems connect.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Project With Zentrix Infotech
            </h3>

            <p>
              If you want a dependable software and web development company in Lucknow, share your business and goals with Zentrix Infotech. We will suggest the right solution, explain it clearly and give you a plan to get it live.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <span role="img" aria-label="WhatsApp">
                💬
              </span>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              |{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What does a software and web development company do?
                </h4>
                <p>
                  It builds websites, web applications and custom software that help businesses sell, manage work and serve customers.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Do you work with businesses in Lucknow?
                </h4>
                <p>
                  Yes. We serve Lucknow clients through calls, video meetings and visits when needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. What is the difference between web and software development?
                </h4>
                <p>
                  Web development builds websites and online apps. Software development builds tools such as billing, ERP or CRM systems. Many businesses need both.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you build a website and software together?
                </h4>
                <p>
                  Yes. We connect them so data flows automatically, such as website orders feeding your stock system.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long does a project take?
                </h4>
                <p>
                  A simple website takes a few weeks. Software and larger projects take longer, depending on features and scope.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Do you build e-commerce websites?
                </h4>
                <p>
                  Yes. We build online stores with secure checkout and payment options.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Will my software be secure?
                </h4>
                <p>
                  We follow secure practices, including SSL, protected forms and careful data handling.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. How much does development cost?
                </h4>
                <p>
                  Cost depends on features, integrations and timeline. Share your needs and we will send a clear proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We help with updates, fixes, security checks and new features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I contact Zentrix Infotech?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message{" "}
                  <a
                    href="https://wa.me/916397036898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 63970 36898
                  </a>{" "}
                  on WhatsApp or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  .
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
                    href="/services/web-development"
                    className="text-blue-600 hover:underline"
                  >
                    Web Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-development"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-blue-600 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-blue-600 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="lucknow"
              currentSlug="/software-and-web-development-company-in-lucknow"
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