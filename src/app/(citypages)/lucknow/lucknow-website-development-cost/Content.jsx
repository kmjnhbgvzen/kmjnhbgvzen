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
      name: "How much does website development cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages, features and design. Share your requirements and we will send a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "Why do website quotes differ so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scope differs. Pages, features, design, mobile testing, SEO setup and support can all be included or left out.",
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
      name: "Are there ongoing costs after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually yes: domain renewal, hosting, updates and backups. We explain these before you start.",
      },
    },
    {
      "@type": "Question",
      name: "Does the quote include SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We set up SEO basics such as titles, headings and sitemaps at launch. Ongoing SEO is a separate service.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reduce the cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Start with essential pages, prepare content early and add features in phases.",
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
      name: "How long does a website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide maintenance, updates and improvements after your website goes live.",
      },
    },
  ],
};

const quoteFactors = [
  "The number of pages and the amount of content",
  "Whether the design is custom or based on a template",
  "The features included, such as payments, bookings or logins",
  "Whether mobile design, speed and security testing are included",
  "Whether SEO setup is included",
  "The experience and process of the team",
  "The support offered after launch",
];

const featureExamples = [
  "Online payments and secure checkout",
  "Booking and appointment systems",
  "Customer accounts and logins",
  "Product search and filters",
  "Admin dashboards",
  "Integrations with business software, CRM or inventory",
  "Multi-language content",
];

const websiteTypes = [
  {
    type: "Business website",
    description:
      "Services, about, portfolio, testimonials and contact.",
  },
  {
    type: "E-commerce website",
    description:
      "Catalogue, cart, checkout, order management and delivery details.",
  },
  {
    type: "Custom web application",
    description:
      "Workflows and tools built around your business.",
  },
  {
    type: "Redesign",
    description:
      "Depends on how much of the existing site is kept or rebuilt.",
  },
];

const oneTimeCosts = [
  "Planning and design",
  "Development and testing",
  "Initial SEO setup",
  "Content help, if needed",
  "Launch and handover",
];

const ongoingCosts = [
  "Domain name renewal",
  "Hosting",
  "Security and software updates",
  "Backups",
  "Content updates and small changes",
  "SEO, social media or ad campaigns, if you choose them",
];

const missedCosts = [
  "Domain and hosting, and who owns the accounts",
  "Mobile design and testing",
  "SEO setup",
  "Content writing and photos",
  "Number of design revisions",
  "Payment gateway setup, for stores",
  "Training on how to update your site",
  "Support after launch",
  "Charges for extra changes outside the agreed scope",
];

const scopeExamples = [
  {
    title: "Smaller scope",
    description:
      "A local service business needs a home page, a few service pages, about, testimonials and a contact page with call and WhatsApp buttons. Content and photos are ready. This is typically the most compact kind of project.",
  },
  {
    title: "Medium scope",
    description:
      "A clinic or institute needs many service or course pages, doctor or faculty profiles, an enquiry form, a blog and stronger search setup. More pages and content planning are involved.",
  },
  {
    title: "Larger scope",
    description:
      "A retailer needs an online store with a product catalogue, secure checkout, order management and delivery details. Or an organization needs a portal with logins and dashboards. This involves deeper development, testing and integration work.",
  },
];

const quoteBrief = [
  {
    title: "Business and goal",
    description:
      "What you do, and what the website should achieve.",
  },
  {
    title: "Website type",
    description: "Business site, store, portal or redesign.",
  },
  {
    title: "Pages",
    description: "A list of the pages you expect.",
  },
  {
    title: "Features",
    description:
      "Payments, bookings, logins, integrations or anything special.",
  },
  {
    title: "Content",
    description:
      "What you already have, such as text, photos, logo and testimonials.",
  },
  {
    title: "Examples",
    description: "Two or three websites you like.",
  },
  {
    title: "Timeline",
    description:
      "Any deadline or season you are working toward.",
  },
  {
    title: "Support",
    description: "Whether you want help after launch.",
  },
];

const budgetTips = [
  {
    title: "Start with the essentials",
    description:
      "Launch the core pages first and add features in phases.",
  },
  {
    title: "Prepare content early",
    description:
      "Ready text and photos reduce time and cost.",
  },
  {
    title: "Keep the design clean",
    description:
      "Simple, fast and clear is professional and efficient.",
  },
  {
    title: "Choose features that match your goal",
    description:
      "Avoid features you will not use.",
  },
  {
    title: "Give feedback in one list per round",
    description:
      "This avoids repeated changes.",
  },
  {
    title: "Plan for upkeep",
    description:
      "Small regular maintenance costs less than a big repair.",
  },
];

const zentrixServices = [
  {
    title: "Business websites",
    description:
      "Professional company sites that build trust and enquiries.",
  },
  {
    title: "E-commerce websites",
    description:
      "Online stores with catalogues, secure checkout and order management.",
  },
  {
    title: "Custom web applications",
    description:
      "Portals, dashboards and booking tools.",
  },
  {
    title: "Website redesign",
    description:
      "A faster, clearer version of your existing site.",
  },
  {
    title: "UI/UX design",
    description:
      "Layouts built for easy use and conversion.",
  },
  {
    title: "Mobile apps, software and cloud",
    description:
      "For when your business grows beyond the website.",
  },
  {
    title: "Digital marketing and SEO",
    description:
      "To bring visitors and enquiries to your site.",
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
      "Interior design websites built around strong visuals.",
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

const quoteProcess = [
  {
    title: "Discovery call",
    description:
      "We understand your business, goals and requirements.",
  },
  {
    title: "Written quote",
    description:
      "Pages, features, content, revisions, timeline and support are listed clearly.",
  },
  {
    title: "Design approval",
    description:
      "You approve the design before development begins.",
  },
  {
    title: "Development and testing",
    description:
      "We build and test on phones, browsers, forms and speed.",
  },
  {
    title: "Launch and support",
    description:
      "SEO basics and analytics are set up, and we stay available afterwards.",
  },
];

const faqs = [
  {
    question: "How much does website development cost in Lucknow?",
    answer:
      "It depends on pages, features and design. Share your requirements and we will send a clear written quote.",
  },
  {
    question: "Why do website quotes differ so much?",
    answer:
      "Scope differs. Pages, features, design, mobile testing, SEO setup and support can all be included or left out.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "Are there ongoing costs after launch?",
    answer:
      "Usually yes: domain renewal, hosting, updates and backups. We explain these before you start.",
  },
  {
    question: "Does the quote include SEO?",
    answer:
      "We set up SEO basics such as titles, headings and sitemaps at launch. Ongoing SEO is a separate service.",
  },
  {
    question: "Can I reduce the cost?",
    answer:
      "Yes. Start with essential pages, prepare content early and add features in phases.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We provide maintenance, updates and improvements after your website goes live.",
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
              Lucknow Website Development Cost: What You Pay For and How to Get
              an Accurate Quote
            </h2>

            <p>
              &ldquo;How much does a website cost?&rdquo; is the first question
              almost every business owner asks, and the honest answer is: it
              depends. A simple five-page business website and a large online
              store with payments, logins and order tracking are very different
              projects, and their costs reflect that.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. We do not publish a one-size-fits-all price list,
              because it would not be fair to you. Instead, this page explains
              what drives website development cost in Lucknow, what is usually
              included, what is often left out, and how to get a quote you can
              trust.
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
              Why There Is No Single Price
            </h3>

            <p>
              You will see very different quotes for what sounds like the same
              website. This happens because the word &ldquo;website&rdquo;
              covers a huge range of work. Two quotes can differ because of:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {quoteFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>

            <p>
              If you compare quotes without comparing these points, you are
              comparing different things.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Drives the Cost of a Website
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              1. Size and Content
            </h4>

            <p>
              More pages mean more design, development and testing. Content also
              matters. If you have text, photos and product details ready, the
              project moves faster. If the team must write copy, source images
              or organize large catalogues, the work increases.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              2. Design Approach
            </h4>

            <p>
              A clean, simple, well-organized design costs less to build than a
              heavily customized one with complex layouts and animations. Both
              can look professional. The choice depends on your brand and your
              goals.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              3. Features and Functionality
            </h4>

            <p>
              Features are often the biggest factor. Examples that add
              development work include:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {featureExamples.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <p>
              A brochure-style site with a contact form is the simplest. A store
              or portal is more involved.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              4. Website Type
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              {websiteTypes.map((item) => (
                <li key={item.type}>
                  <strong>{item.type}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              5. Mobile, Speed and Security
            </h4>

            <p>
              A good website is built for phones, loads quickly and follows
              basic security practices. These should be part of any quote. If a
              very low quote does not mention them, ask.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              6. SEO Setup
            </h4>

            <p>
              Titles, meta descriptions, headings, sitemaps, clean structure and
              analytics help your site start well in search. Ongoing SEO work is
              a separate service.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              7. Support and Maintenance
            </h4>

            <p>
              Websites need updates, backups, security checks and sometimes
              content changes. Ask what is included after launch and what is
              charged separately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              One-Time Costs vs Ongoing Costs
            </h3>

            <p>
              Many owners budget only for the build and are surprised later.
              Plan for both.
            </p>

            <p>
              <strong>One-time costs (usually):</strong>
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {oneTimeCosts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>Ongoing or yearly costs (usually):</strong>
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {ongoingCosts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              We always explain which items are one-time and which recur, so you
              can plan with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Costs That Are Often Missed
            </h3>

            <p>When comparing quotes, ask whether these are included:</p>

            <ul className="ml-4 list-disc space-y-2">
              {missedCosts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              A low quote that leaves out several of these is not really low. It
              simply moves the cost to later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Three Examples of Scope (Hypothetical)
            </h3>

            <p>
              To show how scope shapes cost, here are three illustrative
              projects. They are not fixed packages.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {scopeExamples.map((example) => (
                <li key={example.title}>
                  <strong>{example.title}:</strong> {example.description}
                </li>
              ))}
            </ul>

            <p>
              Your project may sit between these. A short conversation is
              usually enough to place it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Get an Accurate Quote
            </h3>

            <p>
              The more clearly you describe your project, the more accurate the
              quote. Use this short brief when you contact any website company,
              including us:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {quoteBrief.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Send the same brief to every company so the quotes are
              comparable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ways to Manage Your Website Budget
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {budgetTips.map((tip) => (
                <li key={tip.title}>
                  <strong>{tip.title}:</strong> {tip.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Cost vs Value
            </h3>

            <p>
              A website is not just an expense. If it brings you even a few
              extra customers each month, it can pay for itself. A simple way to
              think about it:
            </p>

            <p className="rounded-lg bg-gray-50 p-4 font-medium text-gray-900">
              Extra customers per month × average value of a customer × 12
              months = yearly value of the website
            </p>

            <p>
              Use your own numbers. If the website cannot realistically reach
              that value, simplify the project first. If it can, invest in
              quality, because a slow, outdated or hard-to-use website quietly
              loses customers every day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {zentrixServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Every project has its own scope, so we give a written quote after
              understanding your needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Quote and Work
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              {quoteProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through calls, video
              meetings and WhatsApp. You should own your domain, hosting
              accounts and website files, and we confirm this in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Your Website Quote
            </h3>

            <p>
              Share your brief and we will respond with a clear written quote
              and suggest the right first phase. Call{" "}
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
                Get Your Website Quote
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
              currentSlug="/lucknow-website-development-cost"
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