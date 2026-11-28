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
      name: "How much does an affordable website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
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
      name: "Can I build my website in phases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Launch the essential pages first and add a store, blog or portal later as your business grows.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between cheap and affordable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cheap means the lowest price now. Affordable means good value, with clear scope, quality and support.",
      },
    },
    {
      "@type": "Question",
      name: "What should I prepare to keep costs down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your logo, photos, service details and testimonials, plus one person who gives feedback and approvals.",
      },
    },
    {
      "@type": "Question",
      name: "Will an affordable website work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is responsive and tested on different screen sizes.",
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
      name: "Can I add features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can add e-commerce, portals, integrations or apps as your business grows.",
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

const cheapVsAffordable = [
  {
    factor: "Goal",
    cheap: "Lowest price today",
    affordable: "Best result for the money",
  },
  {
    factor: "Scope",
    cheap: "Vague or very short",
    affordable: "Written and detailed",
  },
  {
    factor: "Design",
    cheap: "Often a copied template",
    affordable: "Clean, fit for your brand",
  },
  {
    factor: "Mobile",
    cheap: "Often an afterthought",
    affordable: "Built and tested for phones",
  },
  {
    factor: "SEO basics",
    cheap: "Usually missing",
    affordable: "Set up before launch",
  },
  {
    factor: "Support",
    cheap: "Rarely offered",
    affordable: "Clear terms after launch",
  },
  {
    factor: "Ownership",
    cheap: "Sometimes unclear",
    affordable: "You own your domain and files",
  },
  {
    factor: "Long-term cost",
    cheap: "Often higher, due to rework",
    affordable: "Predictable and manageable",
  },
];

const budgetQuestions = [
  "What is the main action I want visitors to take: call, book, order or enquire?",
  "How many customers or orders would make this website worthwhile?",
  "How much can I invest now, and how much can I add over the next six to twelve months?",
];

const phaseOne = [
  "A clear home page that says what you do",
  "Service or product pages",
  "An about page and testimonials",
  "Contact page with call, WhatsApp and enquiry form",
  "Mobile-friendly design and fast loading",
  "Basic SEO setup and analytics",
];

const phaseTwo = [
  "A blog or guides to answer customer questions",
  "More detailed service and location pages",
  "Online booking or appointment forms",
  "Integrations with your tools",
  "SEO and Google Business Profile improvement",
];

const phaseThree = [
  "A full online store with payments and order management",
  "Customer portals and dashboards",
  "A mobile app",
  "Advanced integrations and cloud hosting",
];

const businessPlaybook = [
  {
    business: "Clinic or hospital",
    priority:
      "Clear doctor and treatment pages, appointment enquiry, accurate contact and map details.",
  },
  {
    business: "Coaching institute or college",
    priority:
      "Course pages, admission information, faculty details and enquiry form.",
  },
  {
    business: "Chikankari or handicraft seller",
    priority:
      "Clean product pages with good photos, a simple catalogue and WhatsApp ordering. Add full checkout in phase 2 or 3.",
  },
  {
    business: "Restaurant or bakery",
    priority:
      "Menu, photos, location, hours and a click-to-call or WhatsApp order button.",
  },
  {
    business: "Builder or real estate dealer",
    priority:
      "Project pages, galleries, location details and lead forms.",
  },
  {
    business: "Interior designer or event planner",
    priority:
      "A strong portfolio, project stories and a clear enquiry form.",
  },
  {
    business: "Exporter or B2B company",
    priority:
      "Product catalogue, company credentials and an enquiry or quotation form.",
  },
];

const costReductionItems = [
  "Gather your logo, brand colours and photos",
  "Write a short list of services or products with descriptions",
  "Collect testimonials from happy customers",
  "Choose three websites you like and note why",
  "Nominate one person to give feedback and approvals",
  "Give feedback in one organized list per round",
];

const quoteChecks = [
  {
    title: "Pages and features",
    description: "Are they the same in both?",
  },
  {
    title: "Design",
    description: "Custom or template? How many revisions?",
  },
  {
    title: "Mobile and speed",
    description: "Are both stated clearly?",
  },
  {
    title: "SEO setup",
    description:
      "Titles, descriptions, headings, sitemaps and analytics.",
  },
  {
    title: "Content",
    description: "Who writes and who provides images?",
  },
  {
    title: "Domain and hosting",
    description: "Who pays, and who owns the accounts?",
  },
  {
    title: "Support",
    description:
      "What happens after launch, and for how long?",
  },
  {
    title: "Extras",
    description: "How are additional requests handled?",
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
    title: "Mobile apps and software",
    description:
      "When your business is ready to grow beyond the website.",
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

const projectProcess = [
  {
    title: "Discovery call",
    description:
      "We understand your business, customers and goals.",
  },
  {
    title: "Written scope",
    description:
      "Pages, features, content, revisions and support are listed before work starts.",
  },
  {
    title: "Design approval",
    description:
      "You approve the design before development begins.",
  },
  {
    title: "Development and testing",
    description:
      "We build clean, responsive pages and test phones, browsers, forms and speed.",
  },
  {
    title: "Launch",
    description:
      "SEO basics and analytics are set up before going live.",
  },
  {
    title: "Support",
    description:
      "We stay available for updates and future phases.",
  },
];

const faqs = [
  {
    question: "How much does an affordable website cost?",
    answer:
      "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "Can I build my website in phases?",
    answer:
      "Yes. Launch the essential pages first and add a store, blog or portal later as your business grows.",
  },
  {
    question: "What is the difference between cheap and affordable?",
    answer:
      "Cheap means the lowest price now. Affordable means good value, with clear scope, quality and support.",
  },
  {
    question: "What should I prepare to keep costs down?",
    answer:
      "Your logo, photos, service details and testimonials, plus one person who gives feedback and approvals.",
  },
  {
    question: "Will an affordable website work on mobile?",
    answer:
      "Yes. Every website we build is responsive and tested on different screen sizes.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Can I add features later?",
    answer:
      "Yes. We can add e-commerce, portals, integrations or apps as your business grows.",
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
              Affordable Website Development Company in Lucknow: A Smart Budget
              Playbook for Your Business
            </h2>

            <p>
              Ask ten business owners in Lucknow what they want from a website
              and most will say the same thing: a professional website that
              brings customers, without spending more than the business can
              afford. The good news is that this is achievable. The less good
              news is that the cheapest quote is rarely the way to get it.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. This page is a practical playbook for planning an
              affordable website: how to set your budget, what to build first,
              what can wait, how to compare quotes and how we work with
              budget-conscious clients.
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
              Cheap vs Affordable: Know the Difference
            </h3>

            <p>
              Many website problems start with confusing these two words.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Cheap
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Affordable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cheapVsAffordable.map((row) => (
                    <tr key={row.factor} className="border-b border-gray-100">
                      <td className="px-3 py-3 font-medium text-gray-900">
                        {row.factor}
                      </td>
                      <td className="px-3 py-3">{row.cheap}</td>
                      <td className="px-3 py-3">{row.affordable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              A website that has to be rebuilt after a year was not a bargain.
              The aim is a website you will still be happy with, at a price you
              can manage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 1: Set Your Budget Around Your Goal
            </h3>

            <p>
              Before you ask for quotes, decide what the website must do for
              your business. Then set a budget range you are comfortable with.
            </p>

            <p>Ask yourself:</p>

            <ul className="ml-4 list-disc space-y-2">
              {budgetQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              A simple way to think about return on investment is this:
            </p>

            <p className="rounded-lg bg-gray-50 p-4 font-medium text-gray-900">
              Extra customers per month × average value of a customer × 12
              months = yearly value of the website
            </p>

            <p>
              Fill in your own numbers. If even a modest number of new customers
              pays for the website, you are in good shape. If the numbers do not
              work, simplify the project instead of cutting quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 2: Separate Must-Haves From Later
            </h3>

            <p>
              The best way to keep a website affordable is to build in phases.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Phase 1: The Essentials
            </h4>

            <p>These are what most businesses need to launch:</p>

            <ul className="ml-4 list-disc space-y-2">
              {phaseOne.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Phase 2: Growth Features
            </h4>

            <p>Add these when the first version is working:</p>

            <ul className="ml-4 list-disc space-y-2">
              {phaseTwo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Phase 3: Scale
            </h4>

            <p>Add these when the business has grown:</p>

            <ul className="ml-4 list-disc space-y-2">
              {phaseThree.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Starting with Phase 1 means you spend less now, learn what your
              customers actually use and invest further only where it pays off.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Budget Playbook by Business Type
            </h3>

            <p>
              Here is what we usually suggest putting first for different
              Lucknow businesses. These are starting ideas, not fixed packages.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {businessPlaybook.map((item) => (
                <li key={item.business}>
                  <strong>{item.business}:</strong> {item.priority}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Where to Spend and Where to Save
            </h3>

            <p>
              <strong>Spend on:</strong> clear messaging, mobile design, speed,
              search basics, good photos and a reliable team. These affect
              whether visitors turn into customers.
            </p>

            <p>
              <strong>Save on:</strong> unnecessary animations, features nobody
              asked for, huge page counts at launch and complex custom elements
              that a clean layout can replace.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Can Do Yourself to Reduce Cost
            </h3>

            <p>
              You do not have to hand everything over. Preparing these items
              saves time and keeps your costs down:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {costReductionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              If you need help with content, we can guide you, but the more you
              prepare, the smoother and more affordable the project becomes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Compare Two Quotes Fairly
            </h3>

            <p>Put the quotes side by side and check:</p>

            <ul className="ml-4 list-disc space-y-2">
              {quoteChecks.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              If one quote is much lower, find out which of these items it
              leaves out. The more detailed quote is usually the more honest
              one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Development Services
            </h3>

            <p>You can choose what you need now and add more later:</p>

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
              Other clients, including Southern Palate and Morning Bites, have
              shared that their websites look good and are easy for customers to
              use. Every project has its own scope and budget, so we give a
              written quote after understanding your needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Keep Your Project Clear and On Track
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              {projectProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through calls, video
              meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team for design, development and growth. Because web
              development, UI/UX design, mobile apps, software, cloud solutions
              and digital marketing sit under one roof, you can start small and
              grow without switching vendors. We explain things in simple
              language, agree scope and terms in writing and keep you informed
              at every step. You should own your domain, hosting accounts and
              website files, and we confirm this in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get a Clear Quote
            </h3>

            <p>
              Tell us your business, your goal and the budget range you have in
              mind, and we will suggest the right first phase. Call{" "}
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
                Get a Clear Quote
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
              currentSlug="/affordable-website-development-company-in-lucknow"
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