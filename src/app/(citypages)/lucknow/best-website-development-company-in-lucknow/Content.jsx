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
      name: "Which is the best website development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best company is the one that fits your goals and proves its work. Compare live examples, process and support before choosing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "What types of websites do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business sites, e-commerce stores, portfolios, education and healthcare sites, real estate sites and custom web applications.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages, features and design. Share your requirements and we will send a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long will my website take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly and SEO-ready?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every site is responsive and launched with search basics in place, such as titles, headings and sitemaps.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You should own your domain, hosting accounts and website files, and we confirm this in writing.",
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
    {
      "@type": "Question",
      name: "Can you redesign my old website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site and improve design, speed, structure and search readiness.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
  serviceType: "Website Development",
  description:
    "Custom business websites, e-commerce stores, portfolio websites, education and healthcare websites, real estate websites and custom web applications for businesses in Lucknow and Uttar Pradesh.",
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
    "https://www.zentrixinfotech.com/lucknow/best-website-development-company-in-lucknow",
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
      name:
        "Best Website Development Company in Lucknow: How to Choose the Right One for Your Business",
      item:
        "https://www.zentrixinfotech.com/lucknow/best-website-development-company-in-lucknow",
    },
  ],
};

const businessNeeds = [
  {
    situation: "You are starting a new business",
    requirement:
      "Look for a company that can guide you on pages, content and branding, not just code.",
  },
  {
    situation: "Your current website is old or slow",
    requirement:
      "Look for strong redesign experience, speed improvements and a clear plan to keep your existing search visibility.",
  },
  {
    situation: "You want to sell online",
    requirement:
      "Look for e-commerce experience, secure payments, order management and a smooth mobile checkout.",
  },
  {
    situation: "You run a school, college or institute",
    requirement:
      "Look for experience with large, information-heavy sites that students and parents can navigate easily.",
  },
  {
    situation: "You run a clinic or hospital",
    requirement:
      "Look for clean design, accurate information, doctor and treatment pages and easy appointment enquiry.",
  },
  {
    situation: "You are a builder, designer or event company",
    requirement:
      "Look for visual strength, a strong portfolio presentation and lead capture.",
  },
  {
    situation: "You are an exporter or B2B company",
    requirement:
      "Look for detailed catalogues, trust pages and enquiry forms made for international buyers.",
  },
];

const proofTests = [
  {
    title: "Show live websites.",
    description:
      "Ask for working links, not just screenshots. Open them on your phone, check how fast they load and see whether they are easy to use.",
  },
  {
    title: "Show relevant work.",
    description:
      "A company that has built sites for businesses like yours will understand your needs faster.",
  },
  {
    title: "Show real client feedback.",
    description:
      "Look for specific comments about the website, the process and the results, and ask if you can speak to a client.",
  },
  {
    title: "Explain the process.",
    description:
      "A good company can describe discovery, design, development, testing, launch and support in plain words.",
  },
  {
    title: "Put the scope in writing.",
    description:
      "Pages, features, revisions, timeline and support terms should be clear before work begins.",
  },
  {
    title: "Confirm ownership.",
    description:
      "You should own your domain, hosting accounts and website files.",
  },
  {
    title: "Check support after launch.",
    description:
      "Ask what happens if something breaks or you want changes in three months.",
  },
];

const qualityChecklist = [
  "Loads quickly on mobile",
  "Explains what you do within the first few seconds",
  "Has simple navigation and readable text",
  "Shows clear call, WhatsApp and enquiry buttons",
  "Uses real photos and genuine testimonials",
  "Has proper page titles, headings and descriptions for search engines",
  "Uses HTTPS and follows basic security practices",
  "Includes analytics, so you can see what visitors do",
];

const zentrixServices = [
  {
    title: "Web development",
    description:
      "Custom websites and web applications built for performance and ease of use.",
  },
  {
    title: "UI/UX design",
    description:
      "Interfaces designed to engage visitors and encourage action.",
  },
  {
    title: "E-commerce development",
    description:
      "Online stores with product catalogues, checkout and order management.",
  },
  {
    title: "Mobile apps",
    description: "Native and cross-platform apps for iOS and Android.",
  },
  {
    title: "Software development",
    description: "Business software that improves daily operations.",
  },
  {
    title: "Cloud solutions",
    description: "Scalable and secure infrastructure.",
  },
  {
    title: "Digital marketing",
    description:
      "SEO, social media and paid campaigns to bring visitors to your site.",
  },
];

const portfolioItems = [
  {
    title: "The Buyzaar Mart",
    description:
      "A retail franchise platform with a multi-category marketplace, ordering, delivery management and franchise operations.",
  },
  {
    title: "PS Decor",
    description:
      "A luxury wedding and event design website. The client said it showcases their work beautifully and helped bring more client inquiries.",
  },
  {
    title: "Vasterior",
    description: "An interior design and Vastu consulting website.",
  },
  {
    title: "Alluring Glimpses",
    description:
      "A spatial and interior design website built around visual storytelling.",
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

const buildProcess = [
  {
    title: "Discovery",
    description: "We understand your business, customers and goals.",
  },
  {
    title: "Planning",
    description: "We agree on pages, features, content and scope.",
  },
  {
    title: "Design",
    description:
      "You review and approve the look and feel before development.",
  },
  {
    title: "Development",
    description:
      "We build the approved design with clean, maintainable code.",
  },
  {
    title: "Testing",
    description:
      "We check devices, browsers, forms, speed and security basics.",
  },
  {
    title: "Launch",
    description:
      "SEO basics, analytics and final checks are completed before going live.",
  },
  {
    title: "Support",
    description:
      "We stay available for updates, fixes and improvements.",
  },
];

const redFlags = [
  "Guarantees top Google rankings",
  "Refuses to show live examples",
  "Gives a vague scope or avoids written terms",
  "Does not let you own your domain or files",
  "Uses the same template for every client",
  "Promises an unusually quick delivery with no plan",
  "Disappears when you ask about support",
];

const faqs = [
  {
    question: "Which is the best website development company in Lucknow?",
    answer:
      "The best company is the one that fits your goals and proves its work. Compare live examples, process and support before choosing.",
  },
  {
    question: "Does Zentrix have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "What types of websites do you build?",
    answer:
      "Business sites, e-commerce stores, portfolios, education and healthcare sites, real estate sites and custom web applications.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on pages, features and design. Share your requirements and we will send a clear written quote.",
  },
  {
    question: "How long will my website take?",
    answer:
      "It depends on the size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-ready?",
    answer:
      "Yes. Every site is responsive and launched with search basics in place, such as titles, headings and sitemaps.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files, and we confirm this in writing.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We provide maintenance, updates and improvements after your website goes live.",
  },
  {
    question: "Can you redesign my old website?",
    answer:
      "Yes. We review your current site and improve design, speed, structure and search readiness.",
  },
];

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
              Best Website Development Company in Lucknow: How to Choose the
              Right One for Your Business
            </h2>

            <p>
              Every company says it is the best. When you search for the best
              website development company in Lucknow, you will find dozens of
              confident claims and very little proof. The truth is that the best
              company is the one that fits your business, understands your
              customers, shows real work and communicates honestly.
            </p>

            <p>
              This guide helps you judge that for yourself. It also shows what
              Zentrix Infotech offers, so you can compare us fairly with anyone
              else. We are a web development, software and digital marketing
              company with 250+ projects, 270+ clients and a 4.7/5 client
              rating, and we are happy to be judged on evidence.
            </p>

            <p>
              Ready to talk? Call{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              for a consultation.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get a Website Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Does &ldquo;Best&rdquo; Really Mean?
            </h3>

            <p>
              There is no official ranking of website companies, so
              &ldquo;best&rdquo; always depends on what you need. A startup that
              needs a simple, professional site quickly has different needs from
              a college that needs a large information portal, or a seller who
              needs a full online store.
            </p>

            <p>For most Lucknow businesses, the best company is one that:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Understands your goals before it talks about technology</li>
              <li>Designs for mobile customers first</li>
              <li>Builds fast, secure and search-friendly websites</li>
              <li>Shows real, relevant examples</li>
              <li>Explains the scope and process in writing</li>
              <li>Stays available after launch</li>
            </ul>

            <p>
              If a company cannot meet these basics, its ranking on any list
              does not matter.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Best Choice Depends on Your Situation
            </h3>

            <p>Match your situation to what you should look for:</p>

            <ul className="ml-4 list-disc space-y-2">
              {businessNeeds.map((item) => (
                <li key={item.situation}>
                  <strong>{item.situation}:</strong> {item.requirement}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Seven Proof Tests for Any Website Company
            </h3>

            <p>
              Do not rely on promises. Ask each company you shortlist to pass
              these tests.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              {proofTests.map((test) => (
                <li key={test.title}>
                  <strong>{test.title}</strong> {test.description}
                </li>
              ))}
            </ol>

            <p>
              A company that passes all seven is likely to be a good partner,
              whatever its size.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a High-Quality Website Looks Like
            </h3>

            <p>
              Before you compare companies, know what good looks like. A
              well-built business website:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {qualityChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Test these yourself on any company&rsquo;s own website and its
              portfolio. A company that builds slow or confusing sites for
              others is unlikely to build better ones for you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Zentrix Infotech Offers
            </h3>

            <p>
              Zentrix is a full-service company, so your website can be planned
              together with design, software and marketing.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {zentrixServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work, So You Can Judge for Yourself
            </h3>

            <p>Here are some projects from our portfolio:</p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Clients such as Jigyasa Hospital, Southern Palate and Morning
              Bites have also shared that their websites are clean, easy to use
              and helpful for customers. We encourage you to visit these sites
              and judge the quality yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Build Your Website
            </h3>

            <p>Our process is simple and transparent:</p>

            <ol className="ml-4 list-decimal space-y-2">
              {buildProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Red Flags When Choosing a Website Company
            </h3>

            <p>Be careful if a company:</p>

            <ul className="ml-4 list-disc space-y-2">
              {redFlags.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Compare Two Proposals
            </h3>

            <p>
              When you have two proposals, put them side by side. Compare the
              pages and features included, the number of design revisions, the
              timeline, the post-launch support, ownership terms and what is not
              included. The more detailed proposal is usually the more honest
              one. If you are still unsure, start with a smaller first phase,
              such as the core pages, and expand once you are comfortable with
              the team and the quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Is Zentrix the Right Fit for You?
            </h3>

            <p>
              We are a good fit if you want a professional, mobile-friendly,
              search-ready website, a team that explains things clearly, and one
              company that can also support your design, software or marketing
              needs later. We work with Lucknow businesses remotely, as our
              offices are in Moradabad and Ghaziabad. If you specifically need a
              team with an office in Lucknow for in-person meetings, we will
              tell you this honestly upfront.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Us Before You Decide
            </h3>

            <p>
              Compare us with anyone you like, and ask us the hard questions.
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
              , or write to{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              . Share your idea and we will suggest the right website, with
              clear scope and next steps.
            </p>

            <p>
              <Link
                href="https://www.zentrixinfotech.com/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request a Website Quote
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
              currentSlug="/best-website-development-company-in-lucknow"
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