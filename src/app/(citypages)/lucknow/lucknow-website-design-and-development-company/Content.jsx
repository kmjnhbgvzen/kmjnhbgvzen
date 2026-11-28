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
      name: "Why choose one company for design and development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It avoids miscommunication, speeds up the project and keeps the finished site true to the approved design.",
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
        text: "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work well on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is responsive and tested on different screen sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I approve the design before development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You review and approve the design first, so changes happen early.",
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
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, updates and improvements after your website goes live.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design and Development Services",
  serviceType: "Website Design and Development",
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
    "https://www.zentrixinfotech.com/lucknow/lucknow-website-design-and-development-company",
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
        "Lucknow Website Design and Development Company: One Team for a Website That Looks Right and Works Right",
      item:
        "https://www.zentrixinfotech.com/lucknow/lucknow-website-design-and-development-company",
    },
  ],
};

const benefits = [
  "Designers know what is possible to build, so the layouts they create are practical and fast.",
  "Developers understand the design intent, so the finished site matches what you approved.",
  "Both think about mobile, speed and search from the start, instead of fixing them at the end.",
  "Changes are made once, not passed between separate companies.",
];

const separateProblems = [
  "A designer delivers beautiful images that a developer finds hard or slow to build",
  "The final site looks different from the approved design",
  "Mobile versions are handled poorly because they were not planned",
  "Each side blames the other when something breaks",
  "You are asked to coordinate two vendors and carry messages between them",
  "Fixing a small issue takes weeks of back-and-forth",
];

const designBenefits = [
  {
    title: "Clear messaging",
    description:
      "Visitors should understand what you do, who it is for and what to do next within a few seconds.",
  },
  {
    title: "Simple navigation",
    description:
      "Menus and page structure should help people find what they need in a few taps.",
  },
  {
    title: "Mobile first",
    description:
      "Most Lucknow visitors browse on phones, so we design for small screens first and then scale up.",
  },
  {
    title: "Brand consistency",
    description:
      "Colours, fonts, images and tone reflect your business and make it memorable.",
  },
  {
    title: "Conversion focus",
    description:
      "Call, WhatsApp and enquiry buttons are placed where visitors naturally look for them.",
  },
  {
    title: "Trust signals",
    description:
      "Testimonials, portfolio examples and clear contact details build confidence.",
  },
];

const developmentBenefits = [
  {
    title: "Responsive build",
    description:
      "Pages adjust smoothly to phones, tablets and computers.",
  },
  {
    title: "Speed",
    description:
      "We keep pages light, optimize images and avoid unnecessary features that slow the site.",
  },
  {
    title: "Reliable functionality",
    description:
      "Forms, menus, carts, bookings and other features work as agreed.",
  },
  {
    title: "Security basics",
    description:
      "HTTPS and safe handling of forms and data protect you and your customers.",
  },
  {
    title: "Clean, maintainable code",
    description:
      "The site can be updated and extended without starting again.",
  },
  {
    title: "Search readiness",
    description:
      "Titles, headings, descriptions, sitemaps and clean structure help search engines understand your pages.",
  },
  {
    title: "Integrations",
    description:
      "Payments, WhatsApp, maps, analytics and business tools connect where needed.",
  },
];

const projectProcess = [
  {
    title: "Discovery",
    description:
      "We learn about your business, customers, goals and competitors.",
  },
  {
    title: "Planning",
    description:
      "We agree on pages, features, content and scope in writing.",
  },
  {
    title: "Wireframes and structure",
    description:
      "We map the layout and navigation before choosing colours and styles.",
  },
  {
    title: "UI/UX design",
    description:
      "Our designers create the visual look and user experience. You review and approve it before development begins.",
  },
  {
    title: "Design-to-development handoff",
    description:
      "Designers and developers review the approved designs together, so questions are answered early.",
  },
  {
    title: "Development",
    description:
      "The developers build the pages and features, checking back against the design as they go.",
  },
  {
    title: "Testing",
    description:
      "We check devices, browsers, forms, speed and security basics.",
  },
  {
    title: "Launch",
    description:
      "SEO basics and analytics are set up and the site goes live.",
  },
  {
    title: "Support",
    description:
      "We stay available for updates, fixes and improvements.",
  },
];

const websiteTypes = [
  {
    type: "Business websites",
    description:
      "Professional company sites with services, about, portfolio, testimonials and contact pages.",
  },
  {
    type: "E-commerce websites",
    description:
      "Online stores with product catalogues, secure checkout and order management.",
  },
  {
    type: "Portfolio and showcase websites",
    description:
      "Visual sites for interior designers, wedding planners and creative studios.",
  },
  {
    type: "Education websites",
    description:
      "Course details, admissions information and student resources.",
  },
  {
    type: "Healthcare websites",
    description:
      "Doctor profiles, treatment pages and appointment enquiry.",
  },
  {
    type: "Real estate websites",
    description:
      "Project pages, galleries and lead forms.",
  },
  {
    type: "B2B and export websites",
    description:
      "Catalogues, trust pages and enquiry forms.",
  },
  {
    type: "Custom web applications",
    description:
      "Portals, dashboards and booking tools.",
  },
  {
    type: "Redesigns",
    description:
      "A fresh, faster and clearer version of your existing website.",
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
    title: "Vasterior",
    description:
      "An interior design and Vastu consulting website. The client said it looks modern and professional.",
  },
  {
    title: "Alluring Glimpses",
    description:
      "A spatial and interior design website. The client said the design reflects their style and is easy for visitors to navigate.",
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

const deliverables = [
  "A finished, tested and live website",
  "Mobile-friendly pages",
  "Basic search setup and analytics",
  "A walkthrough of how the site works",
  "Ownership of your domain, hosting accounts and website files, confirmed in writing",
  "Clear information about support after launch",
];

const questionsToAsk = [
  "Do the same people handle design and development, or are they outsourced?",
  "How do you move from approved design to finished build?",
  "How do you test mobile, speed and security?",
  "How many design revisions are included?",
  "Will I own my domain, hosting accounts and website files?",
  "What support do you offer after launch?",
  "Can I see live websites and client feedback?",
];

const faqs = [
  {
    question: "Why choose one company for design and development?",
    answer:
      "It avoids miscommunication, speeds up the project and keeps the finished site true to the approved design.",
  },
  {
    question: "Do you have an office in Lucknow?",
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
      "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will my website work well on mobile?",
    answer:
      "Yes. Every website we build is responsive and tested on different screen sizes.",
  },
  {
    question: "Do I approve the design before development?",
    answer:
      "Yes. You review and approve the design first, so changes happen early.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, updates and improvements after your website goes live.",
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
              Lucknow Website Design and Development Company: One Team for a
              Website That Looks Right and Works Right
            </h2>

            <p>
              A good website needs two kinds of skill. Design decides how the
              site looks and feels, and whether visitors understand it at a
              glance. Development decides how it works, how fast it loads and
              how safely it handles forms, orders and data. When these two are
              handled by different people who never talk to each other, problems
              appear: designs that are hard to build, pages that look good but
              load slowly, or features that get in the customer&rsquo;s way.
            </p>

            <p>
              Zentrix Infotech brings design and development together. We are a
              web development, software and digital marketing company with 250+
              projects, 270+ clients and a 4.7/5 client rating. This page
              explains how our design and development work fits together, what
              you receive and why it matters for Lucknow businesses.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Design and Development Belong Together
            </h3>

            <p>
              Think of a shop. Design is the layout, the lighting and the way
              products are displayed. Development is the building, the wiring,
              the doors and the till. A beautiful shop with a broken door does
              not sell, and a solid building with a confusing layout does not
              either.
            </p>

            <p>The same is true for websites. The best results come when:</p>

            <ul className="ml-4 list-disc space-y-2">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              When one team owns both, there are fewer delays, fewer
              misunderstandings and a better finished site.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Goes Wrong When Design and Development Are Separate
            </h3>

            <p>
              Many Lucknow businesses have experienced these problems:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {separateProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              None of this is inevitable. It is the result of weak coordination,
              and it is much easier to avoid with one team.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Design Work Helps Your Business
            </h3>

            <p>
              Our design work focuses on clarity and results, not decoration.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {designBenefits.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}.</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Our Development Work Supports the Design
            </h3>

            <p>
              Our development work makes sure the design performs in the real
              world.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {developmentBenefits.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}.</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Design and Development Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              {projectProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              Step 5 matters most, and it is the step that often goes missing
              when design and development sit with different companies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Design and Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {websiteTypes.map((item) => (
                <li key={item.type}>
                  <strong>{item.type}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work
            </h3>

            <p>Our portfolio shows design and development working together:</p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Other clients, including Southern Palate, Morning Bites and
              Jigyasa Hospital, have shared that their websites are clean and
              easy for customers to use. Results vary by business, so we
              recommend visiting the live sites and judging for yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Built for Lucknow Customers
            </h3>

            <p>
              Lucknow customers search on mobile, often compare a few options
              and decide quickly. Many read in both Hindi and English. We plan
              layouts and content with this in mind: fast loading, readable
              text, large tap targets, visible call and WhatsApp buttons, and
              clear service descriptions. If you want help with search
              visibility after launch, our digital marketing team can continue
              from there.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Receive
            </h3>

            <p>At the end of a project, you should have:</p>

            <ul className="ml-4 list-disc space-y-2">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Any Design and Development Company
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {questionsToAsk.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team from idea to launch and beyond. Our designers,
              developers and marketers work together, so appearance, performance
              and search visibility are planned as one. We explain things in
              simple language, put scope and terms in writing and keep you
              informed at every step. As your business grows, we can also
              support software, mobile apps and cloud solutions.
            </p>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through phone calls,
              video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Project
            </h3>

            <p>
              Tell us about your business and what you want your website to do,
              and we will suggest the right approach. Call{" "}
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
                Start Your Project
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
              currentSlug="/lucknow-website-design-and-development-company"
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