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
      name: "Does my small business really need a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Customers search online first, and a website builds trust, answers questions and collects enquiries all day.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a small business website cost?",
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
      name: "Can I start small and add features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Launch the essential pages first, then add a store, blog or booking later.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your logo, photos, service details, testimonials and one person to give feedback and approvals.",
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
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
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

const websiteBenefits = [
  "People check you online first. Before calling or visiting, many customers search your name or service on their phones.",
  "It builds trust. A clear, professional website shows you are a real, established business.",
  "It works all day. Your website answers questions and collects enquiries even when your shop or office is closed.",
  "It helps you be found. A well-built site can appear when people search for what you offer.",
  "It supports everything else. Your Google profile, social media and ads all work better when they point to a good website.",
];

const websiteNeeds = [
  "A clear home page that says what you do, who you serve and where",
  "Service or product pages with useful detail",
  "An about section that tells your story and builds trust",
  "Real photos of your work, shop, team or products",
  "Testimonials from happy customers",
  "Easy contact options: call, WhatsApp and a short enquiry form",
  "A map and address, if customers visit you",
  "Mobile-friendly design and fast loading",
  "Basic search setup, so Google can understand your pages",
];

const canWait = [
  "A blog or guides",
  "An online store with full checkout",
  "Customer logins and dashboards",
  "Complex animations and special effects",
  "Multiple languages",
  "Advanced integrations with business software",
];

const businessIdeas = [
  {
    business: "Clinics and doctors",
    idea:
      "Doctor profile, treatments, timings, location and appointment enquiry.",
  },
  {
    business: "Coaching and tuition centres",
    idea:
      "Courses, faculty, batch details and enquiry form.",
  },
  {
    business: "Restaurants, bakeries and sweet shops",
    idea:
      "Menu, photos, location, hours and an order button.",
  },
  {
    business: "Chikankari and handicraft sellers",
    idea:
      "Clear product photos, a simple catalogue and WhatsApp ordering, with a full store later.",
  },
  {
    business: "Salons, studios and service providers",
    idea:
      "Services, photos of work, booking enquiry and reviews.",
  },
  {
    business: "Builders, dealers and real estate agents",
    idea:
      "Project pages, galleries and lead forms.",
  },
  {
    business: "Shops and distributors",
    idea:
      "Product categories, contact details and dealer enquiry options.",
  },
  {
    business: "Consultants and professionals",
    idea:
      "Services, credentials, testimonials and contact.",
  },
];

const processSteps = [
  {
    title: "A short discovery call",
    description:
      "We ask about your business, customers and goals, and suggest the pages and features that make sense.",
  },
  {
    title: "A written plan",
    description:
      "Pages, features, content needs, revisions and support are listed before work begins, so there are no surprises.",
  },
  {
    title: "Design for your approval",
    description:
      "You see the design before development starts, and give feedback in one organized round.",
  },
  {
    title: "Build and testing",
    description:
      "We build the site and test it on phones, browsers, forms and speed.",
  },
  {
    title: "Launch and handover",
    description:
      "We set up search basics and analytics, and walk you through the site.",
  },
  {
    title: "Support afterwards",
    description:
      "We stay available for updates and improvements.",
  },
];

const projectRhythm = [
  {
    title: "Early on",
    description: "Discovery call and scope agreed.",
  },
  {
    title: "Next",
    description: "Design shared and feedback given.",
  },
  {
    title: "Then",
    description: "Development and testing.",
  },
  {
    title: "Finally",
    description: "Launch, walkthrough and support.",
  },
];

const clientInputs = [
  "Your logo and brand colours, if you have them",
  "A short list of your services or products",
  "A few good photos",
  "Testimonials from customers",
  "Examples of websites you like",
  "One person who can give feedback and approvals",
];

const smallBusinessServices = [
  {
    title: "Business websites",
    description:
      "Professional company sites that build trust and bring enquiries.",
  },
  {
    title: "Small online stores",
    description:
      "Product catalogues, secure checkout and order management that can grow with you.",
  },
  {
    title: "Website redesign",
    description:
      "A fresh, faster and mobile-friendly version of an old site.",
  },
  {
    title: "UI/UX design",
    description:
      "Layouts that are clear and easy to use.",
  },
  {
    title: "Digital marketing and SEO",
    description:
      "To bring more visitors and enquiries when you are ready.",
  },
  {
    title: "Maintenance and support",
    description:
      "Updates, fixes and improvements after launch.",
  },
];

const portfolioItems = [
  {
    title: "The Buyzaar Mart",
    description:
      "An e-commerce and retail platform for a franchise brand, with a multi-category marketplace, ordering and delivery management.",
  },
  {
    title: "PS Decor",
    description:
      "A wedding and event design website. The client said it showcases their projects beautifully and helped bring more client inquiries.",
  },
  {
    title: "Morning Bites",
    description:
      "A bakery website. The owner said it is inviting and makes it simple for customers to order online.",
  },
  {
    title: "Southern Palate",
    description:
      "A spice e-commerce site. The client said it is easy for customers to browse and order.",
  },
  {
    title: "HerbsFox",
    description:
      "An online marketplace for organic herbs, spices and wellness products.",
  },
  {
    title: "KDEDU",
    description:
      "An education platform for school to degree-level programmes.",
  },
];

const commonMistakes = [
  {
    mistake: "Choosing only the cheapest option",
    reason:
      "Very low quotes often leave out mobile design, testing, search setup or support.",
  },
  {
    mistake: "Building too much too soon",
    reason:
      "A simple, strong site beats a large unfinished one.",
  },
  {
    mistake: "Skipping content",
    reason:
      "Clear text and real photos matter more than fancy effects.",
  },
  {
    mistake: "Ignoring mobile",
    reason:
      "Most customers will see your site on a phone.",
  },
  {
    mistake: "Not owning the website",
    reason:
      "You should own your domain, hosting accounts and files.",
  },
  {
    mistake: "Having no contact buttons",
    reason:
      "If it is hard to call or message you, you lose enquiries.",
  },
  {
    mistake: "Forgetting to update",
    reason:
      "Old prices, timings and photos hurt trust.",
  },
];

const questionsToAsk = [
  "What exactly is included in the quote, and what costs extra?",
  "Can I see live websites for similar small businesses?",
  "Who will build my site, and who will I talk to?",
  "Will I own my domain, hosting accounts and website files?",
  "What support do I get after launch?",
  "Can I start with a small first phase and add features later?",
];

const faqs = [
  {
    question: "Does my small business really need a website?",
    answer:
      "Yes. Customers search online first, and a website builds trust, answers questions and collects enquiries all day.",
  },
  {
    question: "How much does a small business website cost?",
    answer:
      "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "Can I start small and add features later?",
    answer:
      "Yes. Launch the essential pages first, then add a store, blog or booking later.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo, photos, service details, testimonials and one person to give feedback and approvals.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website we build is responsive and tested on different screen sizes.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
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
              Lucknow Website Development Company for Small Business: A Website
              That Fits Your Business, Your Budget and Your Time
            </h2>

            <p>
              If you run a small business in Lucknow, you wear many hats. You
              manage customers, suppliers, staff and money, and you probably do
              not have hours to spend learning about websites. At the same time,
              you know customers search online before they visit, call or buy.
              You need a website that works, without a huge budget and without a
              confusing process.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. This page is written for small business owners. It
              explains what your website really needs, what can wait, how the
              process works and how to avoid the mistakes that waste time and
              money.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why a Small Business Needs a Website
            </h3>

            <p>
              Even if most of your customers come by word of mouth, a website
              helps in several ways:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {websiteBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              A website does not have to be big to be effective. It has to be
              clear, fast and easy to contact you from.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a Small Business Website Really Needs
            </h3>

            <p>
              Many small business owners worry about doing too little or too
              much. Here is a practical middle path. A strong small business
              website usually includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {websiteNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              This is a complete, professional foundation. You can add more
              later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Can Wait
            </h3>

            <p>
              You do not need everything on day one. These can usually be added
              in later phases once you see results:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {canWait.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Starting simple saves money and lets you learn what your customers
              really use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Ideas for Different Small Businesses in Lucknow
            </h3>

            <p>
              Here is what we usually suggest putting first for common types of
              small businesses. These are starting ideas, not fixed packages.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {businessIdeas.map((item) => (
                <li key={item.business}>
                  <strong>{item.business}:</strong> {item.idea}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Make It Easy for Busy Owners
            </h3>

            <p>
              We know your time is limited, so we keep the process simple.
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              Here is a typical rhythm, shown only as an illustration, because
              every project is different:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {projectRhythm.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              We agree on a real timeline with you after understanding your
              project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Need From You
            </h3>

            <p>You do not need technical knowledge. It helps if you can share:</p>

            <ul className="ml-4 list-disc space-y-2">
              {clientInputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              If you are missing some of this, we can help you plan what is
              needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Services for Small Businesses
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {smallBusinessServices.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
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
              Results vary by business, so we recommend visiting the live sites
              and judging for yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes Small Businesses Make
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {commonMistakes.map((item) => (
                <li key={item.mistake}>
                  <strong>{item.mistake}:</strong> {item.reason}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Before You Hire Anyone
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {questionsToAsk.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Clear written answers are the best sign of a reliable company.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              We work with businesses of many sizes, and we know small
              businesses need clarity more than complexity. You get one team for
              design, development and growth. We explain things in simple
              language, put scope and terms in writing and keep you informed at
              every step. As your business grows, we can add an online store, a
              mobile app, software or marketing without you having to start
              again with a new company.
            </p>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through phone calls,
              video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Small Business Website
            </h3>

            <p>
              Tell us about your business and what you want your website to do,
              and we will suggest a simple starting plan. Call{" "}
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
                Start Your Small Business Website
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
              currentSlug="/lucknow-website-development-company-for-small-business"
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