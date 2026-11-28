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
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "What types of websites can you build?",
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
        text: "It depends on pages, features and design needs. Share your requirements and we will give a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the size and features. We agree on a timeline with you after understanding your project.",
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
      name: "Will my website be SEO-friendly?",
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
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, updates and improvements after the website goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review your current site and rebuild what needs improving, from design to speed and structure.",
      },
    },
  ],
};

const websiteTypes = [
  {
    title: "Business and company websites",
    description:
      "A professional online presence with services, about, portfolio, testimonials and contact pages.",
  },
  {
    title: "E-commerce websites",
    description:
      "Online stores with product catalogues, carts, secure checkout, order management and delivery tracking. These suit chikankari, handicraft, food and retail sellers.",
  },
  {
    title: "Portfolio and showcase websites",
    description:
      "Visual websites for interior designers, wedding planners, photographers and creative studios.",
  },
  {
    title: "Education websites",
    description:
      "Sites for colleges, coaching institutes and training centres with course details, admissions information and student resources.",
  },
  {
    title: "Healthcare websites",
    description:
      "Clean, trustworthy sites for clinics and hospitals with doctor profiles, treatment pages and easy appointment enquiry.",
  },
  {
    title: "Real estate and construction websites",
    description:
      "Project pages, location details, galleries and lead forms for builders and dealers.",
  },
  {
    title: "Restaurant and bakery websites",
    description: "Menus, photos, location details and online ordering.",
  },
  {
    title: "B2B and export websites",
    description:
      "Detailed product catalogues, trust pages and enquiry forms for international buyers.",
  },
  {
    title: "Custom web applications",
    description:
      "Dashboards, portals and booking systems built around your own workflow.",
  },
];

const processSteps = [
  {
    title: "Discovery and goals",
    description:
      "We start by asking questions. What does your business sell, who are your customers, what should visitors do on the site, and who are your main competitors? The answers shape everything after.",
  },
  {
    title: "Structure and content plan",
    description:
      "We map out pages and navigation so visitors find what they need in a few taps. We also agree on what content is needed, such as text, photos, product details and testimonials, and who will provide what.",
  },
  {
    title: "UI/UX design",
    description:
      "Our designers create the look and feel with your brand, colours and logo in mind. You review the design and give feedback before development begins, so changes happen early, not late.",
  },
  {
    title: "Development",
    description:
      "Our developers build the approved design into a working website. We choose the technology that fits your project, whether that is a simple business site, a store or a custom application, and we write clean code that is easy to maintain.",
  },
  {
    title: "Testing",
    description:
      "We check the site on different phones, screen sizes and browsers, test every form and button, and review speed and security basics.",
  },
  {
    title: "SEO setup and launch",
    description:
      "Page titles, meta descriptions, headings, image names, sitemaps and analytics are set up before the site goes live, so your website starts with a solid search foundation.",
  },
  {
    title: "Handover and support",
    description:
      "We walk you through the site, share access and stay available for questions and improvements after launch.",
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
      "A wedding and event management website for luxury celebrations, destination weddings and corporate events. The client shared that the site showcases their projects beautifully and helped bring more client inquiries.",
  },
  {
    title: "Vasterior",
    description:
      "An interior design and Vastu consulting website for residential and commercial work.",
  },
  {
    title: "Alluring Glimpses",
    description:
      "A spatial and interior design website focused on visual storytelling.",
  },
  {
    title: "Kamla Devi Group of Institutions (KDEDU)",
    description:
      "An education platform covering school to degree-level programmes.",
  },
  {
    title: "HerbsFox",
    description:
      "An online marketplace for organic herbs, spices and wellness products.",
  },
];

const websiteChecklist = [
  "A clear headline that says what you do and who you do it for",
  "Simple navigation and a layout that works well on mobile",
  "Fast loading pages",
  "Service or product pages with useful detail",
  "Real photos, testimonials and portfolio examples",
  "Visible call, WhatsApp and enquiry options",
  "A contact page with your address, phone number and map",
  "Basic security, including HTTPS",
  "Search-friendly titles, headings and descriptions",
  "Analytics, so you can see what visitors do",
];

const agencyQuestions = [
  "What exactly is included in the scope, and what costs extra?",
  "Who will design and develop my website, and who will be my point of contact?",
  "Will I own the domain, hosting accounts and website files?",
  "How many rounds of design feedback are included?",
  "What happens after launch, and what does support cover?",
  "Can you show similar projects and client feedback?",
  "Will the site be mobile-friendly, secure and ready for search engines?",
];

const faqs = [
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "What types of websites can you build?",
    answer:
      "Business sites, e-commerce stores, portfolios, education and healthcare sites, real estate sites and custom web applications.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on pages, features and design needs. Share your requirements and we will give a clear written quote.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will my website work well on mobile?",
    answer:
      "Yes. Every website we build is responsive and tested on different screen sizes.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. We set up titles, headings, sitemaps and speed basics before launch. Ongoing SEO is available separately.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, updates and improvements after the website goes live.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We review your current site and rebuild what needs improving, from design to speed and structure.",
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
              Website Development Agency in Lucknow: Websites Built to Bring You
              Customers
            </h2>

            <p>
              Your website is often the first place a customer meets your
              business. In Lucknow, that first meeting usually happens on a
              phone, in a few seconds, while the customer compares you with two
              or three other businesses. A slow, confusing or outdated website
              loses that customer. A fast, clear and trustworthy one wins the
              call, the booking or the order.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. As a website development agency serving Lucknow
              businesses, we plan, design, build and launch websites that look
              professional and are made to generate enquiries.
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
              What You Should Expect From a Website Development Agency
            </h3>

            <p>
              A good agency does more than &ldquo;make a website&rdquo;. It
              understands your business, your customers and your goals, and then
              turns them into pages that guide visitors toward action. That
              means clear planning, good design, clean code, fast loading,
              search engine readiness and honest communication from the first
              call to launch day.
            </p>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through calls, video
              meetings and WhatsApp. You get regular updates, simple explanations
              and a team that responds quickly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Websites We Build for Lucknow Businesses
            </h3>

            <p>Different businesses need different websites. We build:</p>

            <ul className="ml-4 list-disc space-y-2">
              {websiteTypes.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              From Idea to Launch: How We Build Your Website
            </h3>

            <p>
              Knowing what happens at each stage removes most of the worry about
              hiring an agency. Here is how our projects run.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.description}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Websites We Have Built
            </h3>

            <p>Our portfolio shows the range of work we do:</p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Other clients have told us their websites are easy to use, and
              some, such as Jigyasa Hospital, mention that appointment booking
              became easier. Results vary by business, but the aim stays the
              same: a website that is clear, professional and useful to real
              customers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Built for How Lucknow Customers Browse
            </h3>

            <p>
              Most of your visitors will arrive on mobile, often on average
              connections. We design for that first, with fast loading, readable
              text, large buttons and simple navigation.
            </p>

            <p>
              Language matters too. Many Lucknow customers search and read in
              both Hindi and English, so we plan content that feels natural to
              them and is easy to understand. Call and WhatsApp buttons are
              placed where visitors need them, because many local customers
              prefer to talk before they buy or book.
            </p>

            <p>
              We also build with search in mind. Pages are structured so that
              Google can understand your services, areas and products, which
              supports local visibility from day one. If you want deeper SEO work
              after launch, our digital marketing team can continue from there.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a Good Business Website Should Include
            </h3>

            <p>Whatever your industry, check that your website has:</p>

            <ul className="ml-4 list-disc space-y-2">
              {websiteChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              If your current website misses several of these, a redesign may
              bring a noticeable improvement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Before You Sign With Any Agency
            </h3>

            <p>Whether you choose us or someone else, ask:</p>

            <ul className="ml-4 list-disc space-y-2">
              {agencyQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              Clear answers in writing protect both sides. We are happy to share
              ours before you commit to anything.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              After Launch: Keeping Your Website Working for You
            </h3>

            <p>
              A website is not finished the day it goes live. Plugins and
              software need updates, content needs refreshing, and new pages or
              offers appear as your business grows. We can support you with
              maintenance, improvements and new features, and connect your
              website with SEO, social media and paid campaigns when you are
              ready to bring in more traffic.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              Many businesses end up juggling a designer, a developer and a
              marketing agency. At Zentrix, web development, UI/UX design, mobile
              apps, software development, cloud solutions and digital marketing
              sit under one roof. That means your website, your growth plans and
              any future software or app can be planned together, with fewer
              delays and less confusion.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Website Project
            </h3>

            <p>
              Ready to build a website that works as hard as you do? Call{" "}
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
              . Tell us about your business and goals, and we will suggest the
              right website for you.
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
                    href="/moradabad/software-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Software Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/web-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Web Development Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/mobile-app-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Mobile App Development Company in Moradabad
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
                <li>
                  <Link
                    href="/moradabad/seo-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Company in Moradabad
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
              </ul>
            </div>

            <CityInternalLinks
              city="lucknow"
              currentSlug="/website-development-company-in-lucknow"
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