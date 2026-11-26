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
      name: "What software development services do you offer in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom software, web applications, mobile apps, UI/UX design, cloud solutions and digital marketing support for Lucknow businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through video calls, phone and WhatsApp, with meetings planned as needed.",
      },
    },
    {
      "@type": "Question",
      name: "How much do software development services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features, users, integrations and design. We give a clear, itemised quote after a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused first release can take a few weeks, while larger systems take longer. We share a timeline after discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build software for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We often start small businesses with a focused first release and add features later as the business grows.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership should be agreed in writing before work begins. We discuss code, data and account ownership openly with every client.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build both web and mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build web applications and native or cross-platform apps for Android and iOS, along with the cloud systems behind them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide fixes, updates, performance improvements and new features as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have worked with education, healthcare, retail, e-commerce, interior design, hospitality and events, and adapt our process to each sector.",
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
              Software Development Services in Lucknow
            </h2>

            <p>
              Every growing business reaches a point where spreadsheets, paper
              registers and scattered apps stop being enough. Orders get
              missed, data sits in different places and your team spends hours
              on work a system could do in seconds. That is when software
              development services in Lucknow become a smart investment.
            </p>

            <p>
              Zentrix Infotech designs, builds and supports custom software
              for businesses across Uttar Pradesh. With 250+ projects, 270+
              clients and a 4.7/5 rating shown on our website, we focus on
              software that is simple to use, secure and ready to grow with
              you.
            </p>

            <p>
              Have a software idea? Call{" "}
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
                Get a Free Software Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Are Software Development Services?
            </h3>

            <p>
              Software development services cover the full journey of creating
              a digital product. This includes understanding the problem,
              designing the screens, writing the code, testing everything,
              launching the product and supporting it afterwards.
            </p>

            <p>
              A good service partner does more than write code. It helps you
              decide what to build first, what to leave for later and how to
              keep the system easy for your staff and customers. The result is
              software that fits your business instead of forcing your business
              to fit the software.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Software Development Services in Lucknow
            </h3>

            <p>
              Here is a clear look at what we offer, what you get and who it
              suits best.
            </p>

            <h4 className="mb-3 font-semibold text-gray-900">
              1. Custom Software Development
            </h4>

            <p>
              We build business software around your exact workflow, such as
              management systems, billing tools, dashboards, portals and
              internal apps.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> A system designed around your
                process, with user roles, reports and secure data storage.
              </li>
              <li>
                <strong>Best for:</strong> Distributors, manufacturers,
                schools, clinics and service companies that outgrow
                spreadsheets.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              2. Web Application Development
            </h4>

            <p>
              We create fast, secure web applications that work in any browser
              and on any device.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> Customer portals, booking
                systems, admin panels and online platforms.
              </li>
              <li>
                <strong>Best for:</strong> Businesses that want to take orders,
                bookings or enquiries online.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              3. Mobile App Development
            </h4>

            <p>
              We build native and cross-platform apps for Android and iOS.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> Apps that work smoothly on
                phones and connect to your web systems.
              </li>
              <li>
                <strong>Best for:</strong> Brands, service providers and
                startups that want direct access to customers.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              4. UI/UX Design
            </h4>

            <p>
              We design clean, easy interfaces before development begins, so
              you see how the product works early.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> User flows, screen designs and a
                design that helps people finish tasks quickly.
              </li>
              <li>
                <strong>Best for:</strong> Any product where ease of use
                decides success.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              5. Cloud Solutions
            </h4>

            <p>
              We set up scalable cloud infrastructure that supports
              performance, security and business continuity.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> Reliable hosting, deployment
                support and room to handle more users.
              </li>
              <li>
                <strong>Best for:</strong> Growing products that need to stay
                fast and available.
              </li>
            </ul>

            <h4 className="mb-3 font-semibold text-gray-900">
              6. Digital Marketing Support
            </h4>

            <p>
              Software is only useful when people find and use it. Our
              marketing team supports launches with SEO, social media and
              campaigns.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>What you get:</strong> Visibility for your product or
                business after it goes live.
              </li>
              <li>
                <strong>Best for:</strong> Businesses that want customers, not
                just a finished product.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which Service Fits Your Problem?
            </h3>

            <p>
              Many owners know their problem but not the solution. This guide
              can help:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Too much manual data entry:</strong> Custom software
                with dashboards and reports.
              </li>
              <li>
                <strong>Customers keep calling for updates:</strong> A web
                portal or mobile app with order and status tracking.
              </li>
              <li>
                <strong>You want to sell online:</strong> A web application or
                e-commerce platform.
              </li>
              <li>
                <strong>Staff struggle with the current tool:</strong> A
                redesign with better UI/UX.
              </li>
              <li>
                <strong>Your system slows down at busy times:</strong> Cloud
                setup and performance work.
              </li>
              <li>
                <strong>You have a product but no users:</strong> Digital
                marketing and SEO support.
              </li>
            </ul>

            <p>
              Not sure which applies? Our team will help you decide during the
              first call.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Serve
            </h3>

            <p>
              Lucknow has a varied economy, and software needs differ from one
              sector to the next.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Education:</strong> Admissions, fees, attendance,
                results and learning portals.
              </li>
              <li>
                <strong>Healthcare:</strong> Appointment booking, patient
                enquiries and clinic management.
              </li>
              <li>
                <strong>Retail and distribution:</strong> Inventory, billing,
                orders and delivery tracking.
              </li>
              <li>
                <strong>Hospitality and events:</strong> Bookings, enquiries
                and guest management.
              </li>
              <li>
                <strong>Real estate:</strong> Lead tracking, site visit
                planning and follow-ups.
              </li>
              <li>
                <strong>Handicrafts and chikankari businesses:</strong> Online
                catalogues, orders and payments.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof from Our Portfolio
            </h3>

            <p>Our work shows the range of products we build:</p>

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
              Want a similar result? Email{" "}
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
              How We Deliver Software Projects
            </h3>

            <p>A clear process protects your time and budget.</p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery:</strong> We learn about your business, users
                and goals.
              </li>
              <li>
                <strong>Planning:</strong> We list features, rank them and
                agree on a focused first release.
              </li>
              <li>
                <strong>Design:</strong> You review screens and flows before
                development starts.
              </li>
              <li>
                <strong>Development:</strong> We build in small stages and
                share progress often.
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
                <strong>Support:</strong> We fix issues and add features as
                your needs change.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ways to Work with Us
            </h3>

            <p>
              Different projects need different arrangements. We can discuss:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fixed scope projects:</strong> A defined product with
                agreed features and timeline.
              </li>
              <li>
                <strong>Phased delivery:</strong> A first release followed by
                improvements in later stages.
              </li>
              <li>
                <strong>Ongoing support:</strong> Monthly care for updates,
                fixes and new features.
              </li>
            </ul>

            <p>
              We do not publish fixed prices because cost depends on features,
              users, integrations and design. After a free consultation, you
              receive a clear, itemised quote.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Supporting Lucknow Clients Remotely
            </h3>

            <p>
              Our team works from Moradabad and Ghaziabad and supports clients
              in Lucknow and across Uttar Pradesh through video calls, phone
              and WhatsApp. Requirements, designs and progress reviews are easy
              to handle remotely, and meetings can be planned as your project
              needs. You stay in direct contact with the people building your
              software.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Any Software Service Provider
            </h3>

            <p>Before you sign, ask:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Can I see live products similar to mine?</li>
              <li>Who will be my point of contact?</li>
              <li>How often will I see progress?</li>
              <li>Who owns the source code, data and accounts?</li>
              <li>What support do I get after launch?</li>
            </ul>

            <p>
              Clear answers to these five questions say a lot about a company.
              We are happy to answer them for you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Software Project Today
            </h3>

            <p>
              If you are looking for software development services in Lucknow
              from a team that listens, plans clearly and builds with care,
              Zentrix Infotech is ready to help. Share your idea, even if it is
              only a rough list of problems, and we will suggest a practical
              way forward.
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
                  1. What software development services do you offer in
                  Lucknow?
                </h4>
                <p>
                  We offer custom software, web applications, mobile apps,
                  UI/UX design, cloud solutions and digital marketing support
                  for Lucknow businesses.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Do you have an office in Lucknow?
                </h4>
                <p>
                  Our offices are in Moradabad and Ghaziabad. We serve Lucknow
                  clients through video calls, phone and WhatsApp, with
                  meetings planned as needed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much do software development services cost?
                </h4>
                <p>
                  Cost depends on features, users, integrations and design. We
                  give a clear, itemised quote after a free consultation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does a software project take?
                </h4>
                <p>
                  It depends on scope. A focused first release can take a few
                  weeks, while larger systems take longer. We share a timeline
                  after discovery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can you build software for small businesses?
                </h4>
                <p>
                  Yes. We often start small businesses with a focused first
                  release and add features later as the business grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will I own the source code?
                </h4>
                <p>
                  Ownership should be agreed in writing before work begins. We
                  discuss code, data and account ownership openly with every
                  client.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you build both web and mobile apps?
                </h4>
                <p>
                  Yes. We build web applications and native or cross-platform
                  apps for Android and iOS, along with the cloud systems behind
                  them.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We provide fixes, updates, performance improvements and
                  new features as your business grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Which industries do you work with?
                </h4>
                <p>
                  We have worked with education, healthcare, retail,
                  e-commerce, interior design, hospitality and events, and
                  adapt our process to each sector.
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
                    href="/services/software-development"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Services
                  </Link>
                </li>
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
              currentSlug="/software-development-services-in-lucknow"
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