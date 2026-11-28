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
      name: "What website development services do you offer in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business websites, custom websites, e-commerce stores, web applications, redesigns, UI/UX design, SEO-friendly development and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, features and design. Share your needs and we will send a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build an online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build e-commerce websites with product catalogues, secure checkout and order management.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is responsive and tested on different screen sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the website SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We set up titles, headings, sitemaps and speed basics before launch. Ongoing SEO is available separately.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer maintenance after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide updates, fixes and improvements after your website goes live.",
      },
    },
  ],
};

const services = [
  {
    title: "Business Website Development",
    description:
      "A professional company website that builds trust and brings enquiries.",
    deliverables:
      "Home, about, services, portfolio, testimonials and contact pages, with call and WhatsApp buttons and an enquiry form.",
    bestFor:
      "Clinics, consultants, builders, schools, manufacturers, service providers and local shops that need a credible online presence.",
  },
  {
    title: "Custom Website Development",
    description:
      "A website designed and built around your specific needs instead of a ready-made template.",
    deliverables:
      "Unique design, custom layouts, tailored features and clean code that is easy to maintain.",
    bestFor:
      "Businesses with special requirements, a strong brand identity or plans to add features later.",
  },
  {
    title: "E-Commerce Website Development",
    description:
      "An online store where customers can browse, order and pay.",
    deliverables:
      "Product catalogues, search and filters, carts, secure checkout, order management and delivery tracking.",
    bestFor:
      "Sellers of chikankari, handicrafts, food, fashion, wellness products and retail goods who want to sell beyond their local area.",
  },
  {
    title: "Web Application Development",
    description:
      "Browser-based tools and systems built around how your business works.",
    deliverables:
      "Customer portals, booking systems, dashboards, admin panels and workflow tools.",
    bestFor:
      "Institutions, service companies and growing businesses that need more than a brochure website.",
  },
  {
    title: "Website Redesign and Revamp",
    description:
      "A fresh, faster and clearer version of your existing website.",
    deliverables:
      "A review of your current site, a new design, improved speed and structure, and care to protect your existing search visibility.",
    bestFor:
      "Businesses whose website looks outdated, loads slowly or does not work well on phones.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design that makes your website easy and pleasant to use.",
    deliverables:
      "Page layouts, navigation planning, visual design and mobile-first screens that guide visitors toward action.",
    bestFor:
      "Any business that wants a website that looks professional and converts visitors into customers.",
  },
  {
    title: "SEO-Friendly Development",
    description:
      "Websites built so search engines can understand them.",
    deliverables:
      "Clean page structure, titles, meta descriptions, headings, sitemaps, fast loading and analytics setup at launch.",
    bestFor:
      "Businesses that want to be found on Google by Lucknow customers.",
  },
  {
    title: "Website Maintenance and Support",
    description:
      "Ongoing care so your site stays secure, updated and useful.",
    deliverables:
      "Updates, fixes, content changes, security checks and small improvements after launch.",
    bestFor:
      "Every business, because a website that is never updated slowly loses its value.",
  },
  {
    title: "Integrations and Add-Ons",
    description:
      "Features that connect your website with the tools you use.",
    deliverables:
      "Payment gateways, WhatsApp and call buttons, forms, maps, analytics and connections with your business software where needed.",
    bestFor:
      "Businesses that want their website to work with their daily operations.",
  },
];

const goalMatches = [
  {
    goal: "I want to look professional online",
    service: "Business website development.",
  },
  {
    goal: "I want to sell products online",
    service: "E-commerce website development.",
  },
  {
    goal: "I want customers to book or log in online",
    service: "Web application development.",
  },
  {
    goal: "My current website looks old or is slow",
    service: "Website redesign.",
  },
  {
    goal: "I want more calls from Google",
    service: "SEO-friendly development, then SEO services.",
  },
  {
    goal: "I want a unique look that matches my brand",
    service: "Custom website development with UI/UX design.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We learn about your business, customers, services and goals.",
  },
  {
    title: "Planning",
    description:
      "We agree on pages, features, content and scope in writing.",
  },
  {
    title: "Design",
    description:
      "You review and approve the design before development begins.",
  },
  {
    title: "Development",
    description:
      "We build clean, secure and responsive pages and features.",
  },
  {
    title: "Testing",
    description:
      "We check phones, browsers, forms, speed and security basics.",
  },
  {
    title: "Launch",
    description:
      "SEO setup, analytics and final checks are done before the site goes live.",
  },
  {
    title: "Support",
    description:
      "We stay available for updates, fixes and future improvements.",
  },
];

const qualityStandards = [
  {
    title: "Mobile first",
    description:
      "Most Lucknow visitors browse on phones, so every page is designed and tested for small screens first.",
  },
  {
    title: "Speed",
    description: "Fast loading keeps visitors from leaving.",
  },
  {
    title: "Clear messaging",
    description:
      "Visitors should understand what you do within seconds.",
  },
  {
    title: "Easy contact",
    description:
      "Call, WhatsApp and enquiry options are placed where people look for them.",
  },
  {
    title: "Security basics",
    description: "HTTPS and safe handling of forms and data.",
  },
  {
    title: "Search readiness",
    description:
      "Titles, headings, descriptions and structure support Google visibility.",
  },
  {
    title: "Maintainable code",
    description:
      "Your site can be updated and extended without starting over.",
  },
];

const portfolioItems = [
  {
    title: "The Buyzaar Mart",
    description:
      "An e-commerce and retail platform for a franchise brand, with a multi-category marketplace, ordering, delivery management and franchise operations.",
  },
  {
    title: "PS Decor",
    description:
      "A luxury wedding and event design website. The client said it showcases their projects beautifully and helped bring more client inquiries.",
  },
  {
    title: "Vasterior and Alluring Glimpses",
    description:
      "Interior design websites that put strong visuals first.",
  },
  {
    title: "KDEDU",
    description:
      "An education platform for school to degree-level programmes.",
  },
  {
    title: "HerbsFox",
    description:
      "An online marketplace for organic herbs, spices and wellness products.",
  },
];

const costFactors = [
  "The number of pages and the amount of content",
  "Design complexity and custom elements",
  "Features such as online payments, bookings, portals or integrations",
  "The number of products if you are building a store",
  "Whether you need content writing, photography or branding help",
  "Ongoing maintenance and support after launch",
];

const clientRequirements = [
  "Your logo, brand colours and any existing brand material",
  "A clear list of services or products",
  "Photos, videos and testimonials you want to show",
  "Examples of websites you like",
  "A single point of contact who can give feedback and approvals",
];

const faqs = [
  {
    question: "What website development services do you offer in Lucknow?",
    answer:
      "Business websites, custom websites, e-commerce stores, web applications, redesigns, UI/UX design, SEO-friendly development and maintenance.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Cost depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "It depends on the size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Can you build an online store?",
    answer:
      "Yes. We build e-commerce websites with product catalogues, secure checkout and order management.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website we build is responsive and tested on different screen sizes.",
  },
  {
    question: "Is the website SEO-friendly?",
    answer:
      "Yes. We set up titles, headings, sitemaps and speed basics before launch. Ongoing SEO is available separately.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. We provide updates, fixes and improvements after your website goes live.",
  },
];

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
              Website Development Services in Lucknow: Everything You Need to
              Get Online and Grow
            </h2>

            <p>
              Most business owners do not wake up wanting &ldquo;a
              website&rdquo;. They want more customers, more calls, more orders
              or a more professional image, and a website is how they get there.
              That is why the right website development service is not just
              about code. It is about choosing the right services for the goal
              you have today and being able to add more as your business grows.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. This page explains the website development services
              we offer Lucknow businesses, who each service suits and what you
              can expect from us.
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
              Website Development Services at a Glance
            </h3>

            <p>
              Here are the services we offer, each described with what you get
              and who it suits.
            </p>

            <ol className="ml-4 list-decimal space-y-4">
              {services.map((service, index) => (
                <li key={service.title}>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {index + 1}. {service.title}
                  </h4>
                  <p>{service.description}</p>
                  <p>
                    <strong>What you get:</strong> {service.deliverables}
                  </p>
                  <p>
                    <strong>Best for:</strong> {service.bestFor}
                  </p>
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing the Right Service for Your Goal
            </h3>

            <p>
              If you are unsure where to start, match your goal to the service:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {goalMatches.map((item) => (
                <li key={item.goal}>
                  <strong>{item.goal}:</strong> {item.service}
                </li>
              ))}
            </ul>

            <p>
              You do not need to decide everything at once. Many businesses
              begin with a strong core website and add features in phases as
              they see results.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How a Typical Project Works
            </h3>

            <p>Every project follows the same clear path:</p>

            <ol className="ml-4 list-decimal space-y-2">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through phone calls,
              video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Quality Standards We Follow
            </h3>

            <p>Whatever the service, we aim for the same standards:</p>

            <ul className="ml-4 list-disc space-y-2">
              {qualityStandards.map((standard) => (
                <li key={standard.title}>
                  <strong>{standard.title}:</strong> {standard.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work
            </h3>

            <p>Our portfolio shows how these services come together:</p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Other clients, including Southern Palate, Morning Bites and
              Jigyasa Hospital, have shared that their websites are clean, easy
              to use and helpful for customers. Results vary by business, but
              our focus stays on clarity, usability and real customer needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects the Cost of Website Development
            </h3>

            <p>
              Every project is different, so we give a written quote after
              understanding your needs. These are the main factors that shape
              it:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {costFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>

            <p>
              Be careful with quotes that look far lower than others. They often
              leave out important items such as mobile design, testing, SEO
              setup or support. Ask for a written list of what is included.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Need From You
            </h3>

            <p>
              A smooth project is a team effort. To help us move quickly, it
              helps if you can share:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {clientRequirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>

            <p>
              If you do not have all of this ready, we can help you plan the
              content.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              After Launch: Keep Growing
            </h3>

            <p>
              A website works best when it keeps improving. After launch, we can
              help you with maintenance, new pages, performance improvements and
              connecting your site with SEO, social media and paid campaigns. If
              your business later needs a mobile app, custom software or cloud
              hosting, our team can plan these alongside your website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team for design, development and growth. Our
              designers, developers and marketers work together, so speed,
              design and search visibility are planned together rather than
              fixed separately. We explain things in simple language, agree
              scope and terms in writing and keep you informed at each stage.
              You should also own your domain, hosting accounts and website
              files, and we confirm this in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Started With Your Website Project
            </h3>

            <p>
              Tell us what your business needs, and we will suggest the right
              services and next steps. Call{" "}
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
              , or write to{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              .
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get Started With Your Website Project
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <h4 className="mb-3 font-semibold text-gray-900">
                    {index + 1}. {faq.question}
                  </h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
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
              currentSlug="/website-development-services-in-lucknow"
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