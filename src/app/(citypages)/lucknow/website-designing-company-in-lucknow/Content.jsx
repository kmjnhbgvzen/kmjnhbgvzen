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
      name: "Which is the best website designing company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one whose work and communication fit your needs. Review live projects, ask about the design process and check support after launch. Zentrix Infotech shares its portfolio openly so you can judge for yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website designing cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, design depth, ecommerce features, interactive elements, content and integrations. A simple business site costs less than a custom store. Share your requirements and we will send an itemised quotation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to design a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and complexity. A small business website usually takes less time than an ecommerce store. Content readiness and feedback speed also matter. We confirm a realistic timeline after planning.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website design be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design responsive layouts that adapt to phones, tablets and desktops, and test across screen sizes before launch. Most local visitors browse on mobile, so we design for small screens first.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design custom websites or use templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We create custom designs around your brand, customers and goals. Where a simpler approach suits your budget, we will say so. Either way, the design is tailored so your site does not look like everyone else's.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site's design, speed, structure and conversion gaps, then redesign it while keeping the content and search value that already work, so you do not start from zero.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design ecommerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design online stores with clear categories, product pages, search, cart and checkout. Our portfolio includes e-commerce projects such as HerbsFox and The Buyzaar Mart that you can open and review.",
      },
    },
    {
      "@type": "Question",
      name: "Will you also develop the website after designing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our design and development teams work together, so approved designs become a fast, working website without a handoff to another vendor, and fewer details are lost along the way.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the website myself after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can build the website with an admin panel so your team can update text, images, products and blogs without a developer. We will show you how it works at handover.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a website designing quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message us on WhatsApp at +91 63970 36898, email info@zentrixinfotech.com or use the contact page. Share your goals and examples you like, and we will send a quotation.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design",
  serviceType: "Website Design",
  description:
    "Custom website design, UI/UX design, responsive design, ecommerce design, landing pages and website redesign for startups and established businesses.",
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
  url: "https://www.zentrixinfotech.com/lucknow/website-designing-company-in-lucknow",
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
      name: "UI/UX Designing",
      item: "https://www.zentrixinfotech.com/services/ui-ux-designing",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Website Designing Company in Lucknow",
      item:
        "https://www.zentrixinfotech.com/lucknow/website-designing-company-in-lucknow",
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
              Website Designing Company in Lucknow – Designs That Look
              Professional and Turn Visitors Into Enquiries
            </h2>

            <p>
              A visitor decides whether to trust your business within a few
              seconds of landing on your website. They do not read your
              &ldquo;About&rdquo; page first. They notice the layout, the speed,
              whether the text is readable on their phone and whether they can
              see how to contact you.
            </p>

            <p>
              If the design feels dated, crowded or confusing, they leave, and
              they rarely tell you why. Good website design prevents that silent
              loss. Zentrix Infotech is a website designing company that treats
              design as a business tool: every layout, colour and button is
              chosen to make your business look credible and to make the next
              step obvious.
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
                Get a Free Design Consultation
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
              Why Does Website Design Matter for Your Business?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>First impressions.</strong> Design signals whether you
                are a serious, reliable business.
              </li>
              <li>
                <strong>Trust.</strong> Clean, consistent design makes visitors
                comfortable sharing their details.
              </li>
              <li>
                <strong>Clarity.</strong> Good layout helps people find what
                they need in seconds.
              </li>
              <li>
                <strong>Conversions.</strong> The position of a button or form
                can decide whether a visitor enquires.
              </li>
              <li>
                <strong>Brand positioning.</strong> Your website tells customers
                whether you are a budget choice or a premium one.
              </li>
              <li>
                <strong>Mobile experience.</strong> Most local visitors browse
                on phones, so design must work on small screens first.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech as Your Website Designing Company in
              Lucknow?
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Design and development together.</strong> The people who
                design your website sit alongside the people who build it, so
                what you approve is what goes live.
              </li>
              <li>
                <strong>Proven delivery.</strong> Our website lists 250+
                projects for 270+ clients, with a 4.7/5 client rating.
              </li>
              <li>
                <strong>A varied portfolio.</strong> Interior studios, wedding
                décor, healthcare, education, e-commerce and construction, each
                with a different visual identity.
              </li>
              <li>
                <strong>UI/UX thinking.</strong> We design for how people
                actually use a site, not only for how it looks. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/ui-ux-designing"
                  className="text-blue-600 hover:underline"
                >
                  UI/UX design
                </Link>{" "}
                service.
              </li>
              <li>
                <strong>Performance-minded.</strong> Beautiful design that loads
                slowly is bad design, so speed is part of our brief.
              </li>
              <li>
                <strong>Clear communication.</strong> You see layouts and give
                feedback before development begins.
              </li>
            </ul>

            <p>
              Clients speak about design in plain terms. Vasterior called their
              site modern and professional, exactly what they needed to show
              interiors beautifully. Alluring Glimpses said the design reflects
              their style and is easy for clients to navigate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Designing Services in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Business Website Design.</strong> Clean, credible
                websites that explain what you do, show proof and make contact
                easy. Ideal for service businesses, clinics and consultants.
              </li>
              <li>
                <strong>Ecommerce Website Design.</strong> Shopping experiences
                with clear categories, product pages and simple checkout,
                designed so buyers can find and purchase without friction.
              </li>
              <li>
                <strong>Custom Website Design.</strong> Unique layouts built
                around your brand and customers instead of a template many other
                businesses also use.
              </li>
              <li>
                <strong>Corporate Website Design.</strong> Structured,
                professional designs for companies that need to present
                services, leadership, case studies and credentials clearly.
              </li>
              <li>
                <strong>Landing Page Design.</strong> Focused single pages for
                campaigns and ads, built around one goal: a call, a form or a
                message.
              </li>
              <li>
                <strong>Website Redesign.</strong> A fresh look and better
                structure for outdated sites, keeping the content and search
                value that already work.
              </li>
              <li>
                <strong>UI/UX Design.</strong> Wireframes, prototypes and
                interface design that make websites and apps simple to use.
              </li>
              <li>
                <strong>Responsive Design and Development.</strong> Layouts that
                adapt to phones, tablets and desktops, backed by modern
                front-end technology such as HTML5, CSS3, Tailwind CSS, React.js
                and Next.js. See our{" "}
                <Link
                  href="https://www.zentrixinfotech.com/services/web-development"
                  className="text-blue-600 hover:underline"
                >
                  web development
                </Link>{" "}
                service.
              </li>
            </ul>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Website Design Quote
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Design Solutions for Different Industries
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Interior and design studios.</strong> Visual-first
                layouts that let your work do the selling, as in our work for
                Vasterior and Alluring Glimpses.
              </li>
              <li>
                <strong>Wedding, events and hospitality.</strong> Elegant,
                image-rich designs with clear enquiry paths, as in PS Decor and
                Kairvi Fort Resort.
              </li>
              <li>
                <strong>Healthcare and hospitals.</strong> Calm, clear design
                with doctor and department pages and easy appointment options.
              </li>
              <li>
                <strong>Education and institutions.</strong> Organised layouts
                for admissions, notices and resources, as in KDEDU and PSSIC.
              </li>
              <li>
                <strong>Retail and ecommerce.</strong> Product-focused layouts
                for stores such as HerbsFox and The Buyzaar Mart.
              </li>
              <li>
                <strong>Real estate and construction.</strong> Project
                galleries, location details and enquiry forms.
              </li>
              <li>
                <strong>Startups and small businesses.</strong> A credible first
                website that can grow as you do.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Makes a Website Design Convert Visitors Into Customers?
            </h3>

            <p>
              Beautiful is not enough. These are the design choices that support
              enquiries:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A clear message at the top.</strong> Visitors should
                know what you do and who it is for in five seconds.
              </li>
              <li>
                <strong>Obvious calls to action.</strong> &ldquo;Call
                Now&rdquo;, &ldquo;Get a Quote&rdquo; and &ldquo;WhatsApp
                Us&rdquo; placed where people look.
              </li>
              <li>
                <strong>Simple navigation.</strong> Any key page within two
                clicks.
              </li>
              <li>
                <strong>Readable typography.</strong> Comfortable sizes and
                contrast, especially on phones.
              </li>
              <li>
                <strong>Proof near the offer.</strong> Testimonials, project
                examples and client logos where decisions are made.
              </li>
              <li>
                <strong>Short, friendly forms.</strong> Fewer fields, more
                submissions.
              </li>
              <li>
                <strong>Fast loading.</strong> Optimised images and clean code.
              </li>
              <li>
                <strong>Consistent branding.</strong> The same colours, fonts
                and tone on every page.
              </li>
            </ul>

            <p>
              No designer can honestly guarantee sales or rankings. We design so
              your website gives your marketing and your sales team the strongest
              possible foundation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Is It Time to Redesign Your Website?
            </h3>

            <p>Consider a redesign if:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The site looks dated next to your competitors.</li>
              <li>It is hard to use on a mobile phone.</li>
              <li>Pages load slowly.</li>
              <li>
                Visitors arrive but rarely call or fill in the form.
              </li>
              <li>
                You cannot update content without a developer.
              </li>
              <li>
                It no longer matches your brand or your services.
              </li>
            </ul>

            <p>
              A redesign does not always mean starting from zero. We review what
              works, keep it and improve the rest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Design Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We learn your business, customers,
                competitors and goals.
              </li>
              <li>
                <strong>Planning.</strong> Sitemap, page structure and content
                plan.
              </li>
              <li>
                <strong>Wireframes.</strong> Simple layouts that show structure
                before colour and imagery.
              </li>
              <li>
                <strong>Visual Design.</strong> Colours, typography, imagery and
                components, matched to your brand.
              </li>
              <li>
                <strong>Review and Feedback.</strong> You approve designs before
                development starts.
              </li>
              <li>
                <strong>Development.</strong> Designs become a fast, responsive,
                working website.
              </li>
              <li>
                <strong>Testing and Launch.</strong> Mobile, browser, speed and
                form checks, then go-live.
              </li>
              <li>
                <strong>Support.</strong> Updates, fixes and improvements after
                launch.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Much Does Website Designing Cost in Lucknow?
            </h3>

            <p>
              There is no single price, because websites differ widely. Cost
              depends on:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>The number of pages and templates.</li>
              <li>Custom design depth versus a simpler layout.</li>
              <li>Ecommerce features and product volume.</li>
              <li>
                Animations, interactive elements and special functionality.
              </li>
              <li>Content, copywriting and imagery needs.</li>
              <li>
                Integrations such as WhatsApp, payments and maps.
              </li>
              <li>Support and maintenance.</li>
            </ul>

            <p>
              Share your requirements and we will send a clear, itemised
              quotation, with an option to start small and add pages later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Experience and Trust Signals
            </h3>

            <p>
              You can browse our{" "}
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
              </Link>{" "}
              before contacting us. Rounak Shukla of PS Decor said the website
              showcases their wedding projects beautifully and helped bring in
              more client enquiries, and Morning Bites described their bakery
              site as inviting and easy to order from. These are client
              statements, and results vary by business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started with a Website Designing Company in Lucknow
            </h3>

            <p>
              Your website is often the first and only look a customer gets at
              your business. Tell us what you do, who you want to reach and what
              you dislike about your current site. We will review it, suggest a
              design direction and give you a clear quotation, with no
              obligation.
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
                Talk to Our Design Team
              </Link>{" "}
              ·{" "}
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="text-blue-600 hover:underline"
              >
                Discuss Your Website Design
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
                  1. Which is the best website designing company in Lucknow?
                </h4>
                <p>
                  The best company is the one whose work and communication fit
                  your needs. Review live projects, ask about the design process
                  and check support after launch. Zentrix Infotech shares its
                  portfolio openly so you can judge for yourself.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How much does website designing cost in Lucknow?
                </h4>
                <p>
                  Cost depends on pages, design depth, ecommerce features,
                  interactive elements, content and integrations. A simple
                  business site costs less than a custom store. Share your
                  requirements and we will send an itemised quotation.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How long does it take to design a website?
                </h4>
                <p>
                  It depends on size and complexity. A small business website
                  usually takes less time than an ecommerce store. Content
                  readiness and feedback speed also matter. We confirm a
                  realistic timeline after planning.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Will my website design be mobile-friendly?
                </h4>
                <p>
                  Yes. We design responsive layouts that adapt to phones,
                  tablets and desktops, and test across screen sizes before
                  launch. Most local visitors browse on mobile, so we design for
                  small screens first.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you design custom websites or use templates?
                </h4>
                <p>
                  We create custom designs around your brand, customers and
                  goals. Where a simpler approach suits your budget, we will say
                  so. Either way, the design is tailored so your site does not
                  look like everyone else&apos;s.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We review your current site&apos;s design, speed,
                  structure and conversion gaps, then redesign it while keeping
                  the content and search value that already work, so you do not
                  start from zero.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you design ecommerce websites?
                </h4>
                <p>
                  Yes. We design online stores with clear categories, product
                  pages, search, cart and checkout. Our portfolio includes
                  e-commerce projects such as HerbsFox and The Buyzaar Mart that
                  you can open and review.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will you also develop the website after designing it?
                </h4>
                <p>
                  Yes. Our design and development teams work together, so
                  approved designs become a fast, working website without a
                  handoff to another vendor, and fewer details are lost along
                  the way.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can I update the website myself after launch?
                </h4>
                <p>
                  Yes. We can build the website with an admin panel so your team
                  can update text, images, products and blogs without a
                  developer. We will show you how it works at handover.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get a website designing quotation?
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
                  or use the contact page. Share your goals and examples you
                  like, and we will send a quotation.
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
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
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
                    href="/blog/export-website-development-for-exporters"
                    className="text-blue-600 hover:underline"
                  >
                    Export Website Development Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/voice-search-seo-guide"
                    className="text-blue-600 hover:underline"
                  >
                    Voice Search SEO Guide
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
              currentSlug="/website-designing-company-in-lucknow"
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