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
      name: "What kinds of websites do you build?",
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
      name: "How long does website development take?",
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
      name: "Can you add features or an app later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can add e-commerce, portals, integrations or mobile apps as your business grows.",
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

const launchChecklist = [
  "A clear home page that explains what you do",
  "Service or product pages",
  "An about page with your story and credibility",
  "Testimonials and portfolio examples",
  "A contact page with call, WhatsApp and enquiry options",
  "Mobile-friendly design and fast loading",
  "Basic search engine setup and analytics",
];

const growthChecklist = [
  "Search engine optimization, with keyword-based service and location pages",
  "Google Business Profile improvement for local visibility",
  "Blog and guide content that answers customer questions",
  "Better enquiry forms, call tracking and WhatsApp integration",
  "Social media and paid campaigns that send traffic to the right pages",
  "Speed and conversion improvements based on visitor data",
];

const scaleChecklist = [
  "Full e-commerce with product catalogues, payments and order management",
  "Customer portals, booking systems and dashboards",
  "Integration with your business software, CRM or inventory",
  "Mobile apps for iOS and Android",
  "Cloud hosting that handles higher traffic securely",
  "Multi-language or multi-location structure",
];

const websiteTypes = [
  {
    title: "Business websites",
    description:
      "Professional company sites that build trust and generate enquiries.",
  },
  {
    title: "E-commerce websites",
    description:
      "Online stores for sellers of handicrafts, fashion, food, wellness products and more.",
  },
  {
    title: "Custom web applications",
    description:
      "Portals, dashboards and tools built around how your business actually works.",
  },
  {
    title: "Education websites",
    description:
      "Information-rich sites for colleges, schools and coaching institutes.",
  },
  {
    title: "Healthcare websites",
    description:
      "Clean, careful sites for clinics and hospitals, with doctor profiles and appointment enquiry.",
  },
  {
    title: "Portfolio and showcase websites",
    description:
      "Visual sites for interior designers, event planners and creative studios.",
  },
  {
    title: "Real estate websites",
    description:
      "Project pages, galleries and lead forms for builders and dealers.",
  },
  {
    title: "B2B and export websites",
    description:
      "Catalogue-led sites with trust pages and enquiry forms for international buyers.",
  },
];

const portfolioItems = [
  {
    title: "The Buyzaar Mart",
    description:
      "An e-commerce and retail platform for a franchise brand, with a multi-category marketplace, delivery management and franchise operations. This is a good example of a Stage 3 project.",
  },
  {
    title: "PS Decor",
    description:
      "A luxury wedding and event design website. The client said it showcases their projects beautifully and helped them get more client inquiries.",
  },
  {
    title: "Vasterior and Alluring Glimpses",
    description:
      "Interior design websites built around strong visuals and storytelling.",
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
      "We build clean, secure, responsive pages and features.",
  },
  {
    title: "Testing",
    description:
      "We check phones, browsers, forms, speed and security basics.",
  },
  {
    title: "Launch",
    description:
      "Titles, descriptions, sitemaps and analytics are set up before the site goes live.",
  },
  {
    title: "Support and growth",
    description:
      "We stay available for fixes, updates and the next stage of work.",
  },
];

const healthCheckQuestions = [
  "Does it load quickly on your phone?",
  "Can a new visitor tell what you do within five seconds?",
  "Is your phone number or WhatsApp button visible without scrolling?",
  "Does each service have its own page with useful detail?",
  "Do you show real photos, projects and testimonials?",
  "Does the site use HTTPS?",
  "Do your page titles and descriptions mention what you offer and where?",
  "Can you see how many visitors and enquiries you get each month?",
];

const commonMistakes = [
  {
    title: "Choosing only on price",
    description:
      "A very cheap website that is slow, copied from a template or impossible to update often costs more later.",
  },
  {
    title: "Skipping content planning",
    description:
      "Beautiful design cannot fix unclear or missing content.",
  },
  {
    title: "Ignoring mobile users",
    description: "Most Lucknow visitors arrive on phones.",
  },
  {
    title: "Forgetting search engines",
    description:
      "A website nobody finds cannot bring enquiries.",
  },
  {
    title: "Having no tracking",
    description:
      "Without analytics, you cannot tell what works.",
  },
  {
    title: "Not owning your assets",
    description:
      "You should own your domain, hosting accounts and files.",
  },
  {
    title: "Treating launch as the finish line",
    description:
      "Websites need updates, fresh content and improvements.",
  },
];

const companyQuestions = [
  "What is included in the scope, and what costs extra?",
  "Who will actually design and build my website?",
  "Will I own my domain, hosting and website files?",
  "How many design revisions are included?",
  "Will the site be mobile-friendly, secure and ready for search engines?",
  "What support do I get after launch?",
  "Can I see live examples and client feedback?",
];

const faqs = [
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "What kinds of websites do you build?",
    answer:
      "Business sites, e-commerce stores, portfolios, education and healthcare sites, real estate sites and custom web applications.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "How long does website development take?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
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
    question: "Can you add features or an app later?",
    answer:
      "Yes. We can add e-commerce, portals, integrations or mobile apps as your business grows.",
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

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Lucknow Website Development Company: Websites That Grow With Your
              Business
            </h2>

            <p>
              A website is not a one-time purchase. It is a business asset that
              has to launch well, attract visitors, turn them into customers and
              keep up as your business grows. Many Lucknow businesses buy a
              website, forget about it and wonder a year later why it brings
              nothing. The problem is rarely the idea of having a website. It is
              that the website was never planned as part of a growth journey.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. We help Lucknow businesses build websites for today
              and prepare them for tomorrow, from a first professional launch to
              online stores, web applications and full digital growth.
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
              Why Lucknow Businesses Need More Than &ldquo;Just a Website&rdquo;
            </h3>

            <p>
              Lucknow has a lively, competitive market. Clinics, coaching
              institutes, restaurants, chikankari and handicraft sellers,
              builders, event planners and retailers all want the attention of
              the same local customers, in areas such as Hazratganj, Gomti
              Nagar, Aliganj and Indira Nagar.
            </p>

            <p>
              Those customers behave in predictable ways. They search on their
              phones, compare two or three options, check reviews and decide
              quickly. A website that loads slowly, looks outdated or hides the
              phone number loses them in seconds. A website that is fast, clear
              and trustworthy wins the call.
            </p>

            <p>
              A good website development company therefore does three things: it
              builds the site well, it makes the site easy to find, and it helps
              the site keep improving. That is the approach we follow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Three Stages of a Website&rsquo;s Life
            </h3>

            <p>
              We think about every website project in three stages. Knowing
              where you are helps you decide what to invest in now and what can
              wait.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 1: Launch
            </h4>

            <p>
              The goal at this stage is a professional, working website that
              makes a strong first impression and gives customers a way to
              contact you. A launch-stage website typically includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {launchChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              This stage suits new businesses and businesses replacing a very
              old website.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 2: Growth
            </h4>

            <p>
              Once the foundation is working, the goal is to bring in more of
              the right visitors and convert more of them. Growth-stage work
              includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {growthChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              This stage suits businesses that already have a decent website but
              want more enquiries.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Stage 3: Scale
            </h4>

            <p>
              When the business expands, the website often needs to do more.
              Scale-stage work includes:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {scaleChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              This stage suits growing businesses, institutions and brands that
              want their digital systems to support operations, not just
              marketing.
            </p>

            <p>
              Because Zentrix offers web development, UI/UX design, mobile apps,
              software development, cloud solutions and digital marketing
              together, you can move through these stages with one team that
              already knows your business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {websiteTypes.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Work
            </h3>

            <p>Our portfolio shows how we apply this thinking:</p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Other clients, including Southern Palate, Morning Bites and
              Jigyasa Hospital, have shared that their websites are easy to use
              and make it simpler for customers to order or book. Every business
              is different, so results depend on your market, your competition
              and how consistently you keep improving.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work With You
            </h3>

            <p>
              Our process is the same whether the project is small or large:
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              {buildProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we keep in touch through phone calls,
              video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Quick Website Health Check
            </h3>

            <p>
              Not sure whether your current website is holding you back? Check
              these points:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {healthCheckQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              If you answered no to several, a redesign or improvement plan will
              likely pay off.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes We Help You Avoid
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {commonMistakes.map((mistake) => (
                <li key={mistake.title}>
                  <strong>{mistake.title}:</strong> {mistake.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Any Website Development Company
            </h3>

            <p>
              Whether you choose us or someone else, ask these before you sign:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {companyQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>Clear written answers protect both sides.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team for the whole journey. Our designers, developers
              and marketers work together, so speed fixes, design improvements
              and SEO do not fall between different vendors. We explain things
              in simple language, put scope and terms in writing, and keep you
              informed at each step. We also share guides on our blog, including
              voice search SEO and export website development, so you can see
              how we think.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Website Project
            </h3>

            <p>
              Whether you need a first website, a redesign or an online store,
              we are ready to help. Call{" "}
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
              . Tell us where your business is today and where you want it to
              go, and we will suggest the right next step.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Start Your Website Project
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
              currentSlug="/lucknow-website-development-company"
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