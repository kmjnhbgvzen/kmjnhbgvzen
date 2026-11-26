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
      name: "What does a web and software development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It builds websites, web applications, custom software and mobile apps, and often supports design, hosting and marketing as well.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire one company for both web and software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One team keeps your website and back-office systems connected, consistent and easier to update, with a single point of contact.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech serve Lucknow businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support Lucknow clients through video calls, phone and WhatsApp, with meetings planned as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients remotely and stay in close contact throughout the project.",
      },
    },
    {
      "@type": "Question",
      name: "How much does web and software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, users, integrations and design. We give a clear, itemised quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release can take a few weeks, while larger systems take longer. We share a timeline after discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add software to my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can build custom software or portals and connect them to your current website after reviewing how it is built.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my source code and data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work starts. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide fixes, updates, performance improvements and new features as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. Share your idea and we will arrange a free consultation.",
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
              Web and Software Development Company in Lucknow
            </h2>

            <p>
              A modern business needs two things working together: a website
              that attracts customers and software that runs the work behind
              the scenes. When these are built by different vendors, they
              often do not connect. Data gets copied by hand, customers see
              one thing while your team sees another, and every change takes
              longer than it should.
            </p>

            <p>
              Zentrix Infotech is a web and software development company
              serving Lucknow and the wider Uttar Pradesh region. With 250+
              projects, 270+ clients and a 4.7/5 rating shown on our website,
              we design, build and support websites, custom software and
              mobile apps as one connected system.
            </p>

            <p>
              Have a project in mind? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a free consultation.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Project Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Web and Software Work Best Together
            </h3>

            <p>
              Think of your business as a shop. The website is the front door
              and the shop window. The software is the stockroom, the billing
              counter and the staff schedule. A beautiful front door means
              little if orders get lost in the back, and a perfect back office
              means little if customers cannot find you.
            </p>

            <p>When one team builds both, you get clear benefits:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Connected data:</strong> An order placed on the
                website reaches your system without manual entry.
              </li>
              <li>
                <strong>One design language:</strong> Customers and staff see
                a consistent, professional experience.
              </li>
              <li>
                <strong>Faster changes:</strong> One team understands the
                whole product and can update it quickly.
              </li>
              <li>
                <strong>Clear responsibility:</strong> You talk to one partner
                instead of managing several vendors.
              </li>
              <li>
                <strong>Lower risk:</strong> Fewer handovers mean fewer
                misunderstandings and fewer gaps.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Web and Software Services
            </h3>

            <p>
              Zentrix Infotech offers six core services under one roof.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Web Development:</strong> Fast, secure websites and
                web applications that work on any device. See our{" "}
                <Link
                  href="/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Custom Software Development:</strong> Business
                software, management systems, portals and internal tools built
                around your workflow. See our{" "}
                <Link
                  href="/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  software development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Mobile App Development:</strong> Native and
                cross-platform apps for Android and iOS. See our{" "}
                <Link
                  href="/services/mobile-development"
                  className="text-blue-600 hover:underline"
                >
                  mobile app development
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>UI/UX Design:</strong> Clean, easy interfaces that help
                users finish tasks without confusion. See our{" "}
                <Link
                  href="/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Cloud Solutions:</strong> Scalable infrastructure for
                performance, security and business continuity. See our{" "}
                <Link
                  href="/services/cloud-solutions"
                  className="text-blue-600 hover:underline"
                >
                  cloud solutions
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, social media and
                campaigns that bring visitors and customers to your product.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Three Layers of a Connected Digital Business
            </h3>

            <p>
              We plan projects in three layers, so every part has a clear job.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Layer 1: The Front Door (Website and App)
            </h4>

            <p>
              This is what customers see. It includes your website, landing
              pages, online store, booking pages and mobile app. The goal is
              to be easy to find, easy to understand and easy to act on,
              whether the visitor wants to call, order, book or enquire.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Layer 2: The Back Office (Software)
            </h4>

            <p>
              This is what your team uses every day. It includes dashboards,
              order management, billing, inventory, customer records, reports
              and user roles. The goal is to save time, reduce mistakes and
              give you clear numbers about your business.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              Layer 3: The Growth Engine (Marketing and Support)
            </h4>

            <p>
              This is how your product keeps getting better and reaches more
              people. It includes SEO, social media, campaigns, performance
              updates and ongoing support. The goal is steady, measurable
              growth after launch.
            </p>

            <p>
              Not every business needs all three layers on day one. We help
              you start with the layer that matters most and add the others in
              stages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which Combination Fits Your Business?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You have no website yet:</strong> Start with a
                professional website, then add software features as your needs
                grow.
              </li>
              <li>
                <strong>You have a website but manual work in the
                background:</strong> Add custom software and connect it to
                your site.
              </li>
              <li>
                <strong>You sell products online:</strong> Build an e-commerce
                platform linked to inventory, orders and delivery.
              </li>
              <li>
                <strong>You run bookings or appointments:</strong> Combine an
                online booking page with a back-office scheduling system.
              </li>
              <li>
                <strong>You want direct access to customers:</strong> Add a
                mobile app connected to your existing systems.
              </li>
              <li>
                <strong>You have a product but few visitors:</strong> Add SEO
                and digital marketing support.
              </li>
            </ul>

            <p>
              Not sure where you fit? Our team will help you decide during the
              first call.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve in Lucknow
            </h3>

            <p>
              Lucknow is the capital of Uttar Pradesh and a busy centre for
              education, healthcare, trade, hospitality, real estate and
              handicrafts.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Education:</strong> Admissions, fees, attendance,
                results and learning portals.
              </li>
              <li>
                <strong>Healthcare:</strong> Appointment booking, patient
                enquiries and clinic workflows.
              </li>
              <li>
                <strong>Retail and distribution:</strong> Inventory, billing,
                orders and delivery tracking.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Bookings, guest
                enquiries and event management.
              </li>
              <li>
                <strong>Real estate:</strong> Lead tracking, site visits and
                follow-ups.
              </li>
              <li>
                <strong>Handicrafts and chikankari businesses:</strong> Online
                catalogues, orders and payments.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work Across Web and Software
            </h3>

            <p>Our portfolio shows how websites and software come together:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>The Buyzaar Mart:</strong> A retail franchise platform
                with a multi-category marketplace, ordering, delivery
                management and franchise operations.
              </li>
              <li>
                <strong>KDEDU (Kamla Devi Group of Institutions):</strong> An
                education platform for students from kindergarten to degree
                level.
              </li>
              <li>
                <strong>HerbsFox:</strong> An e-commerce marketplace for herbs,
                spices, seeds and wellness products.
              </li>
              <li>
                <strong>PS Decor:</strong> A wedding and event management
                platform.
              </li>
              <li>
                <strong>Vasterior and Alluring Glimpses:</strong> Interior
                design platforms that present spaces and projects beautifully.
              </li>
            </ul>

            <p>
              Jigyasa Hospital shared that its website makes appointment
              booking easy and that patient enquiries through Google and social
              media have risen steadily. Kairvi Fort Resort reported a
              noticeable boost in bookings during peak seasons after digital
              campaigns.
            </p>

            <p>
              Want similar results? Email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              with your requirement.
            </p>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                Explore our portfolio
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We study your business, customers
                and goals.
              </li>
              <li>
                <strong>Planning:</strong> We decide which features go in the
                first release and which come later.
              </li>
              <li>
                <strong>UI/UX design:</strong> You review screens and user
                flows before any code is written.
              </li>
              <li>
                <strong>Development:</strong> We build the website, software
                and app in small stages and share progress often.
              </li>
              <li>
                <strong>Testing:</strong> We check features, speed, security
                and device compatibility.
              </li>
              <li>
                <strong>Launch and training:</strong> We go live carefully and
                train your team.
              </li>
              <li>
                <strong>Growth and support:</strong> We fix issues, add
                features and support marketing as your business grows.
              </li>
            </ol>

            <p>
              Starting with a focused first release is often the smartest
              path. You get a working product sooner, learn from real users
              and then expand with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Speed, Security and Search Visibility
            </h3>

            <p>
              Three things decide whether a web and software product succeeds
              in practice.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Speed.</strong> Visitors leave slow websites quickly.
                We build pages and systems with performance in mind so users
                are not kept waiting.
              </li>
              <li>
                <strong>Security.</strong> Your system holds customer and
                business data. We plan secure logins, user roles and data
                protection from the start.
              </li>
              <li>
                <strong>Search visibility.</strong> A website that Google
                cannot understand will not bring visitors. We build with clean
                structure and SEO basics included, and our marketing team can
                support you further.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Working with Lucknow Clients
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad and supports clients
              in Lucknow and across Uttar Pradesh through video calls, phone
              and WhatsApp. Requirements, designs and progress reviews are
              easy to handle remotely, and meetings can be planned as your
              project needs. You stay in direct contact with the people
              building your product.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost?
            </h3>

            <p>
              We do not publish fixed prices, because every project is
              different. These factors shape the cost:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of pages, features and user roles.</li>
              <li>Complexity of software logic and reports.</li>
              <li>Integrations with payment, delivery or other tools.</li>
              <li>Web only, mobile only or both.</li>
              <li>Design depth and branding needs.</li>
              <li>Support and marketing after launch.</li>
            </ul>

            <p>
              After a free consultation, you receive a clear, itemised quote
              with no hidden charges.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Web and Software Project
            </h3>

            <p>
              If you want a web and software development company in Lucknow
              that listens first, plans clearly and builds with care, Zentrix
              Infotech is ready to help. Share your idea, even if it is only a
              rough list of problems, and we will suggest a practical way
              forward.
            </p>

            <p>
              Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>{" "}
              to book your free consultation.
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
                  1. What does a web and software development company do?
                </h4>
                <p>
                  It builds websites, web applications, custom software and
                  mobile apps, and often supports design, hosting and marketing
                  as well.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Why hire one company for both web and software?
                </h4>
                <p>
                  One team keeps your website and back-office systems
                  connected, consistent and easier to update, with a single
                  point of contact.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Does Zentrix Infotech serve Lucknow businesses?
                </h4>
                <p>
                  Yes. We support Lucknow clients through video calls, phone
                  and WhatsApp, with meetings planned as needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients remotely and stay in close contact throughout the
                  project.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does web and software development cost?
                </h4>
                <p>
                  Cost depends on features, users, integrations and design. We
                  give a clear, itemised quote after a free consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How long does a project take?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  weeks, while larger systems take longer. We share a timeline
                  after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you add software to my existing website?
                </h4>
                <p>
                  Yes. We can build custom software or portals and connect them
                  to your current website after reviewing how it is built.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I own my source code and data?
                </h4>
                <p>
                  Ownership should be agreed in writing before work starts. We
                  discuss code, data and account ownership openly with every
                  client.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We provide fixes, updates, performance improvements and
                  new features as your business grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I get started?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  . Share your idea and we will arrange a free consultation.
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
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Cloud Solutions Services
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
              currentSlug="/web-and-software-development-company-in-lucknow"
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