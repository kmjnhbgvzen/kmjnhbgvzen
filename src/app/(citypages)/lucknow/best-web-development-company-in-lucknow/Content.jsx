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
      name: "Which is the best web development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single best company for everyone. Choose the one whose live projects, technology, communication and support fit your needs. Zentrix Infotech shares its portfolio and case studies so you can judge our work directly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose a web development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check live projects, named client feedback, mobile speed, SEO basics, written scope, ownership terms and post-launch support. Compare at least three companies on the same checklist rather than on price alone.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on website type, pages, design depth, features, integrations and maintenance. A simple business site costs less than a custom store. Share your needs and we will prepare an itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope, content readiness and feedback speed. A small business site usually takes less time than an ecommerce store or custom application. We confirm a realistic schedule after planning.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Zentrix Infotech use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our web development page lists React.js, Next.js, Node.js, Python, JavaScript, TypeScript, MongoDB, PostgreSQL, Firebase, Redux, Tailwind CSS, HTML5 and CSS3. We recommend the stack that fits your project and explain why.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly and SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build responsive layouts and a clean SEO foundation with proper headings, page titles and fast loading. Rankings depend on competition and ongoing optimisation, so we do not promise them.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop ecommerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with catalogues, cart, checkout, payment integration and order management. Our portfolio includes The Buyzaar Mart, HerbsFox and Deal360, which you can open and review.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after the website is live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance and support covering updates, backups, bug fixes and improvements. Ask us to put the support arrangement in writing before the project starts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site's speed, mobile experience, structure and conversion gaps, then redesign it while keeping the content and search value that already work.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a website development quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your goals and key features, and we will send a quotation.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development",
  serviceType: "Web Development",
  description:
    "Business websites, ecommerce stores, custom web applications, dynamic websites, website redesign, maintenance and SEO-friendly development for startups and established businesses.",
  provider: {
    "@type": "Organization",
    name: "Zentrix Infotech",
    url: "https://www.zentrixinfotech.com",
    telephone: "+91 72488 00839",
    email: "info@zentrixinfotech.com",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  url:
    "https://www.zentrixinfotech.com/lucknow/best-web-development-company-in-lucknow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.zentrixinfotech.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.zentrixinfotech.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Development",
      item: "https://www.zentrixinfotech.com/services/web-development",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Best Web Development Company in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-web-development-company-in-lucknow",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Best Web Development Company in Lucknow – How to Choose, and What
              to Check Before You Hire
            </h2>

            <p>
              Search for the best web development company in Lucknow and you
              will find dozens of companies, and almost all of them call
              themselves the best. Reading their pages will not help you decide,
              because they all say the same things: &ldquo;experienced
              team&rdquo;, &ldquo;affordable prices&rdquo;, &ldquo;100%
              satisfaction&rdquo;.
            </p>

            <p>
              So here is a more useful approach. Instead of asking us to tell
              you we are the best, this page shows you how to judge any web
              development company, including us, using things you can verify
              yourself. Then it shows what Zentrix Infotech can put in front of
              you, so you can compare us fairly.
            </p>

            <p>
              We work with businesses across India, and we support Lucknow
              businesses through calls, video meetings and WhatsApp.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Free Website Consultation
              </Link>
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              | <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              | <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does &ldquo;Best&rdquo; Really Mean for a Website Project?
            </h3>

            <p>
              There is no single best company for everyone. The right choice
              depends on what you are building.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                A small business with a simple website needs speed, clarity and
                a fair price, not a huge platform.
              </li>
              <li>
                An online store needs checkout, payments, order management and a
                developer who has built them before.
              </li>
              <li>
                A hospital or institution needs organised information, accuracy
                and careful handling of enquiries.
              </li>
              <li>
                A startup needs a sensible first version that can grow without
                being rebuilt.
              </li>
            </ul>

            <p>
              The best company for you is the one whose past work, working style
              and support match your project. Everything below helps you test
              that.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple 10-Point Scorecard for Any Web Development Company
            </h3>

            <p>
              Score each company you shortlist from 1 to 5 on these points. It
              takes about an hour and prevents expensive mistakes.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-semibold text-gray-900">#</th>
                    <th className="py-3 pr-4 font-semibold text-gray-900">
                      What to check
                    </th>
                    <th className="py-3 font-semibold text-gray-900">
                      What a good answer looks like
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">1</td>
                    <td className="py-3 pr-4">Live portfolio</td>
                    <td className="py-3">
                      Real websites you can open, not just screenshots
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">2</td>
                    <td className="py-3 pr-4">Relevant experience</td>
                    <td className="py-3">
                      Work in industries similar to yours
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">3</td>
                    <td className="py-3 pr-4">Client feedback</td>
                    <td className="py-3">Named clients and specific comments</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">4</td>
                    <td className="py-3 pr-4">Mobile experience</td>
                    <td className="py-3">
                      Their own sites and projects work well on a phone
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">5</td>
                    <td className="py-3 pr-4">Speed</td>
                    <td className="py-3">
                      Pages open quickly on a normal mobile connection
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">6</td>
                    <td className="py-3 pr-4">SEO foundation</td>
                    <td className="py-3">
                      Clean headings, page titles and structure
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">7</td>
                    <td className="py-3 pr-4">Technology</td>
                    <td className="py-3">
                      Modern, maintainable tools explained in plain words
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">8</td>
                    <td className="py-3 pr-4">Scope and pricing</td>
                    <td className="py-3">
                      Written, itemised and clear about what is excluded
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">9</td>
                    <td className="py-3 pr-4">Ownership</td>
                    <td className="py-3">
                      Clear terms on source code, content and domain
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">10</td>
                    <td className="py-3 pr-4">Support after launch</td>
                    <td className="py-3">
                      Defined help for fixes, updates and security
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Add up the scores. A company that scores well on all ten is a
              better bet than one with a low price and gaps in five of them.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Red Flags When Hiring a Web Development Company
            </h3>

            <p>Be careful if a company:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Promises guaranteed rankings or leads. Nobody controls Google or
                your customers.
              </li>
              <li>
                Cannot show live projects. A portfolio of only screenshots is
                hard to verify.
              </li>
              <li>
                Gives a price before asking questions. A fixed quote without
                understanding your needs usually hides trade-offs.
              </li>
              <li>
                Uses only templates but sells &ldquo;custom&rdquo;. Ask exactly
                what is custom.
              </li>
              <li>
                Will not discuss ownership. You should know who owns the code,
                content and domain.
              </li>
              <li>
                Goes quiet after payment. Ask how support and updates work
                before you start.
              </li>
              <li>
                Pushes you to decide today. A good company is happy to let you
                compare.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Zentrix Infotech Can Show You
            </h3>

            <p>Here are the facts you can check, and where.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Delivery record.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>Live portfolio.</strong> E-commerce platforms such as
                The Buyzaar Mart, HerbsFox and Deal360. Wedding and event
                platforms such as PS Decor. Interior websites such as Vasterior
                and Alluring Glimpses. Education sites such as KDEDU and PSSIC.
                Healthcare sites such as Jigyasa Hospital and Oracle Eye
                Hospital. A construction and property platform, MTBOSS. You can
                open all of them from our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/portfolio"
                  className="text-blue-600 hover:underline"
                >
                  portfolio
                </Link>
                .
              </li>
              <li>
                <strong>Named client feedback.</strong> Vasterior called their
                site modern and professional. PS Decor said theirs showcases
                their wedding projects beautifully and helped bring in more
                client enquiries. Dr. C.P. Singh of Jigyasa Hospital described a
                clean, professional site with easy appointment booking.
              </li>
              <li>
                <strong>A listed technology stack.</strong> Our web development
                page lists React.js, Next.js, Node.js, Python, JavaScript,
                TypeScript, MongoDB, PostgreSQL, Firebase, Redux, Tailwind CSS,
                HTML5 and CSS3.
              </li>
              <li>
                <strong>Design and development in one team.</strong>{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                and development are connected, so approved designs reach the
                live site without a vendor handoff.
              </li>
              <li>
                <strong>Marketing support when you want it.</strong> Our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/digital-marketing"
                  className="text-blue-600 hover:underline"
                >
                  digital marketing
                </Link>{" "}
                team can help people find your new site.
              </li>
            </ul>

            <p>
              We do not claim to be the cheapest, and we do not promise
              rankings, leads or sales. What we offer is work you can inspect
              and a clear way of working.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business Website Development.</strong> Credible, fast
                websites that explain what you do and make contact easy.
              </li>
              <li>
                <strong>Ecommerce Website Development.</strong> Online stores
                with catalogues, cart, checkout, payment integration and order
                management.
              </li>
              <li>
                <strong>Custom Website Development.</strong> Built around your
                requirements: booking flows, portals, dashboards or calculators.
              </li>
              <li>
                <strong>Corporate Website Development.</strong> Structured,
                professional sites for companies that need to present services,
                leadership and case studies clearly.
              </li>
              <li>
                <strong>Dynamic Website Development.</strong> Websites with an
                admin panel, so your team can update pages, products and blogs.
              </li>
              <li>
                <strong>Website Redesign.</strong> Better structure, speed and
                calls to action for outdated websites, keeping the content and
                search value that work.
              </li>
              <li>
                <strong>Web Application Development.</strong> Browser-based
                tools for operations and customer portals. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/software-development"
                  className="text-blue-600 hover:underline"
                >
                  software development
                </Link>{" "}
                service for larger systems.
              </li>
              <li>
                <strong>Website Maintenance and Support.</strong> Updates,
                backups, fixes and improvements after launch.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Website Development Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Web Development for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Startups and small businesses.</strong> A credible first
                website that can grow with you.
              </li>
              <li>
                <strong>Healthcare.</strong> Doctor and department pages,
                accurate emergency details and easy appointment paths.
              </li>
              <li>
                <strong>Education.</strong> Admissions, notices and resources
                for students and parents.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project
                galleries, location details and enquiry forms.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Fast catalogues, simple
                checkout and delivery flows.
              </li>
              <li>
                <strong>Manufacturers and exporters.</strong> Catalogues and
                quote forms for buyers who search online. See our guide on{" "}
                <Link
                  href="https://www.zentrixinfotech.com/blog/export-website-development-for-exporters"
                  className="text-blue-600 hover:underline"
                >
                  export website development
                </Link>
                .
              </li>
              <li>
                <strong>Professional services.</strong> Trust-led pages with
                credentials and an easy way to book a call.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work: Our Website Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Requirement Analysis.</strong> We learn your business,
                customers and goals.
              </li>
              <li>
                <strong>Planning.</strong> Sitemap, features, timeline and
                budget agreed in writing.
              </li>
              <li>
                <strong>UI/UX Design.</strong> Layouts you can review before
                development starts.
              </li>
              <li>
                <strong>Development.</strong> A responsive, SEO-friendly website
                built in stages.
              </li>
              <li>
                <strong>Testing.</strong> Forms, speed, devices and browsers
                checked before launch.
              </li>
              <li>
                <strong>Launch.</strong> Hosting setup and go-live support.
              </li>
              <li>
                <strong>Support.</strong> Maintenance and improvements
                afterwards.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes a Website Generate More Enquiries?
            </h3>

            <p>
              Whichever company you choose, make sure your website has:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Clear calls to action on every key page.</li>
              <li>WhatsApp and click-to-call buttons.</li>
              <li>Short, easy enquiry forms.</li>
              <li>Fast loading and a mobile-first layout.</li>
              <li>
                SEO-friendly structure with proper headings and page titles.
              </li>
              <li>
                Real testimonials and project examples near your offer.
              </li>
              <li>
                Simple navigation so key pages are two clicks away.
              </li>
            </ul>

            <p>
              No developer can guarantee leads. A good website gives your
              marketing and sales the strongest foundation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Website Development Cost in Lucknow?
            </h3>

            <p>
              There is no fixed price, because websites differ widely. Cost
              depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Website type and number of pages.</li>
              <li>Design depth and custom functionality.</li>
              <li>Ecommerce features and product volume.</li>
              <li>
                Integrations such as payments, WhatsApp and maps.
              </li>
              <li>Content, imagery and SEO needs.</li>
              <li>Ongoing support and maintenance.</li>
            </ul>

            <p>
              Be careful with prices that are far below every other quote. Ask
              what is missing. Share your requirements and we will send a clear,
              itemised quotation, with an option to start small and add pages
              later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Compare Us Fairly
            </h3>

            <p>
              We would like you to get at least two other quotes. When you do,
              ask each company, including us, to show live projects similar to
              yours, name the technology it will use and explain why, write down
              what happens after launch, and confirm who owns the code. The
              company that answers all four clearly is usually the one to trust.
            </p>

            <p>
              You can start with our{" "}
              <Link
                href="https://www.zentrixinfotech.com/portfolio"
                className="text-blue-600 hover:underline"
              >
                portfolio
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.zentrixinfotech.com/projects"
                className="text-blue-600 hover:underline"
              >
                case studies
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Web Development Company in Lucknow
            </h3>

            <p>
              Tell us about your business, what you want the website to do and
              what you have seen elsewhere. We will review it, suggest the right
              approach and give you a clear quotation, with no obligation.
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Talk to Our Development Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your Website Project
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Get a Free Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. Which is the best web development company in Lucknow?
                </h4>
                <p>
                  There is no single best company for everyone. Choose the one
                  whose live projects, technology, communication and support fit
                  your needs. Zentrix Infotech shares its portfolio and case
                  studies so you can judge our work directly.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How do I choose a web development company in Lucknow?
                </h4>
                <p>
                  Check live projects, named client feedback, mobile speed, SEO
                  basics, written scope, ownership terms and post-launch
                  support. Compare at least three companies on the same
                  checklist rather than on price alone.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does website development cost in Lucknow?
                </h4>
                <p>
                  Cost depends on website type, pages, design depth, features,
                  integrations and maintenance. A simple business site costs
                  less than a custom store. Share your needs and we will prepare
                  an itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does website development take?
                </h4>
                <p>
                  It depends on scope, content readiness and feedback speed. A
                  small business site usually takes less time than an ecommerce
                  store or custom application. We confirm a realistic schedule
                  after planning.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. What technologies does Zentrix Infotech use?
                </h4>
                <p>
                  Our web development page lists React.js, Next.js, Node.js,
                  Python, JavaScript, TypeScript, MongoDB, PostgreSQL, Firebase,
                  Redux, Tailwind CSS, HTML5 and CSS3. We recommend the stack
                  that fits your project and explain why.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website be mobile-friendly and SEO-friendly?
                </h4>
                <p>
                  Yes. We build responsive layouts and a clean SEO foundation
                  with proper headings, page titles and fast loading. Rankings
                  depend on competition and ongoing optimisation, so we do not
                  promise them.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you develop ecommerce websites?
                </h4>
                <p>
                  Yes. We build online stores with catalogues, cart, checkout,
                  payment integration and order management. Our portfolio
                  includes The Buyzaar Mart, HerbsFox and Deal360, which you can
                  open and review.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Do you provide support after the website is live?
                </h4>
                <p>
                  Yes. We offer maintenance and support covering updates,
                  backups, bug fixes and improvements. Ask us to put the support
                  arrangement in writing before the project starts.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We review your current site&apos;s speed, mobile
                  experience, structure and conversion gaps, then redesign it
                  while keeping the content and search value that already work.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get a website development quotation?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message us on WhatsApp at{" "}
                  <a
                    href="https://wa.me/916397036898"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>{" "}
                  or use the contact page. Share your goals and key features,
                  and we will send a quotation.
                </p>
              </div>
            </div>

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
                📧
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="website">
                🌐
              </span>{" "}
              <strong>Website:</strong>{" "}
              <a
                href="https://www.zentrixinfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.zentrixinfotech.com
              </a>
            </p>

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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/export-website-development-for-exporters"
                    className="text-blue-600 hover:underline"
                  >
                    Export Website Development Guide
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
              currentSlug="/best-web-development-company-in-lucknow"
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