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
      name: "Is a nearby company better for website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Clear communication, real examples and good support matter more than office distance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check a website company before hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open their live websites on your phone, read client feedback, and ask for written scope, ownership terms and support details.",
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
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website help local customers find me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build it mobile-friendly and search-ready. Ongoing local SEO is available separately.",
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

const nearbyRequirements = [
  {
    title: "Easy to reach",
    description:
      "Do they answer calls and WhatsApp messages quickly and clearly?",
  },
  {
    title: "Local understanding",
    description:
      "Do they ask about your customers, your areas and how people in Lucknow search and buy?",
  },
  {
    title: "Real work to show",
    description:
      "Can they share live websites you can open on your phone?",
  },
  {
    title: "Clear terms",
    description:
      "Is the scope, timeline and support written down before work begins?",
  },
  {
    title: "Support after launch",
    description:
      "Will they still be there for updates and fixes next month and next year?",
  },
];

const companyChecks = [
  {
    title: "Open their own website on your phone.",
    description:
      "Is it fast, clear and easy to use? A company that builds slow sites for itself will build slow sites for you.",
  },
  {
    title: "Look at their portfolio.",
    description:
      "Visit the live sites. Check speed, mobile layout and whether the sites match their industries.",
  },
  {
    title: "Read client feedback.",
    description:
      "Look for specific comments about the process and the website, not only general praise.",
  },
  {
    title: "Ask about the process.",
    description:
      "You should hear about discovery, design approval, development, testing, launch and support.",
  },
  {
    title: "Ask who does the work.",
    description:
      "You should know who designs, who develops and who is your contact.",
  },
  {
    title: "Ask about ownership.",
    description:
      "You should own your domain, hosting accounts and website files.",
  },
  {
    title: "Ask what is not included.",
    description:
      "Hidden extras are a common cause of disputes.",
  },
  {
    title: "Run a small test.",
    description:
      "A short call, a sample proposal or a small first phase tells you a lot about how a team works.",
  },
];

const zentrixServices = [
  {
    title: "Website development",
    description:
      "Business sites, custom websites and web applications.",
  },
  {
    title: "E-commerce development",
    description:
      "Online stores with product catalogues, secure checkout and order management.",
  },
  {
    title: "UI/UX design",
    description:
      "Layouts and interfaces designed for easy use and conversion.",
  },
  {
    title: "Mobile app development",
    description:
      "Native and cross-platform apps for iOS and Android.",
  },
  {
    title: "Software development",
    description:
      "Business software that streamlines operations.",
  },
  {
    title: "Cloud solutions",
    description:
      "Scalable and secure infrastructure.",
  },
  {
    title: "Digital marketing",
    description:
      "SEO, social media and paid campaigns that bring visitors to your site.",
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
      "A luxury wedding and event design website. The client shared that it showcases their projects beautifully and helped bring more client inquiries.",
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

const remoteWorkflow = [
  {
    title: "Kick-off call",
    description:
      "We start with a detailed conversation about your business, customers and goals.",
  },
  {
    title: "Shared plan",
    description:
      "Pages, features, content and scope are agreed in writing.",
  },
  {
    title: "Design previews",
    description:
      "You see and approve designs on screen before development begins.",
  },
  {
    title: "Regular updates",
    description:
      "We share progress through calls, messages and review links, so you always know where things stand.",
  },
  {
    title: "Quick responses",
    description:
      "WhatsApp makes it easy to ask a question and get an answer without waiting for email.",
  },
  {
    title: "Launch walkthrough",
    description:
      "We show you how the website works and hand over access.",
  },
  {
    title: "Ongoing support",
    description:
      "We stay available for changes and improvements after launch.",
  },
];

const localWebsiteTips = [
  {
    title: "Make your location and services clear.",
    description:
      "State your business name, services, address or service areas and phone number on your website, and keep them identical everywhere online.",
  },
  {
    title: "Build useful service pages.",
    description:
      "One page per main service, with clear descriptions, works better than one crowded page trying to cover everything.",
  },
  {
    title: "Create area information where it is genuine.",
    description:
      "If you serve several parts of Lucknow, a page for each area you really serve can help customers and search engines. Avoid copying the same text with only the area name changed.",
  },
  {
    title: "Show real proof.",
    description:
      "Photos, testimonials and project examples build trust quickly.",
  },
  {
    title: "Make contact effortless.",
    description:
      "Call and WhatsApp buttons, a short enquiry form and an embedded map reduce the steps between interest and action.",
  },
  {
    title: "Be fast on mobile.",
    description:
      "Most local searches happen on phones. A slow site loses the customer before the page loads.",
  },
  {
    title: "Connect with your Google Business Profile.",
    description:
      "Your website and your Google profile should match and support each other. If you also need local SEO support, our digital marketing team can help after your website is ready.",
  },
];

const hiringMistakes = [
  {
    title: "Choosing only because it is close",
    description: "Proximity does not guarantee quality.",
  },
  {
    title: "Choosing only because it is cheap",
    description:
      "Very low quotes often leave out design, testing, SEO setup or support.",
  },
  {
    title: "Not asking for live examples",
    description:
      "Screenshots can hide slow or broken sites.",
  },
  {
    title: "Not agreeing on scope",
    description:
      "Unclear scope leads to delays and extra charges.",
  },
  {
    title: "Not owning the assets",
    description:
      "You should own your domain, hosting and files.",
  },
  {
    title: "Ignoring mobile",
    description:
      "Check every site on your own phone.",
  },
  {
    title: "Forgetting about support",
    description:
      "Websites need updates, backups and fixes.",
  },
];

const preparationItems = [
  "A short description of your business and your main customers",
  "Your goals for the website, such as calls, orders or bookings",
  "A list of the main services or products you want to show",
  "Examples of websites you like and dislike",
  "Your logo and brand colours, if you have them",
  "Any deadline linked to a launch or season",
];

const faqs = [
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "Is a nearby company better for website development?",
    answer:
      "Not necessarily. Clear communication, real examples and good support matter more than office distance.",
  },
  {
    question: "How do I check a website company before hiring?",
    answer:
      "Open their live websites on your phone, read client feedback, and ask for written scope, ownership terms and support details.",
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
    question: "How long does it take to build a website?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will my website help local customers find me?",
    answer:
      "Yes. We build it mobile-friendly and search-ready. Ongoing local SEO is available separately.",
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

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Website Development Company Near Me in Lucknow: Find the Right
              Team and Get Found by Your Own Customers
            </h2>

            <p>
              When you search for a &ldquo;website development company near
              me&rdquo; in Lucknow, you probably want a team that is easy to
              reach, understands your market and does not disappear after the
              website goes live. At the same time, if you run a local business,
              your own customers are searching &ldquo;near me&rdquo; too, and
              your website needs to answer them.
            </p>

            <p>
              This page covers both sides. First, how to judge any website
              development company near you, and then how to build a website that
              shows up when Lucknow customers search for what you offer. Zentrix
              Infotech is a web development, software and digital marketing
              company with 250+ projects, 270+ clients and a 4.7/5 client
              rating, and we are happy to be compared on the same checklist.
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
              What &ldquo;Near Me&rdquo; Really Means for a Website Company
            </h3>

            <p>
              People add &ldquo;near me&rdquo; because they want three things:
              easy contact, local understanding and accountability. A company
              across the city can fail on all three, and a company in another
              city can succeed on all three. Website development is delivered
              through screens, calls and shared files, so reliable communication
              and good work matter far more than the distance between offices.
            </p>

            <p>
              We want to be clear about our setup. Our offices are in Moradabad
              and Ghaziabad, and we support Lucknow businesses remotely through
              phone calls, video meetings and WhatsApp. If you specifically want
              regular face-to-face meetings at a Lucknow office, we are not that
              option, and we would rather tell you this at the start. If you
              want a responsive, transparent team and clear work, we are glad to
              talk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What You Actually Need From a Nearby Website Company
            </h3>

            <p>Rather than judging by the address, judge by these five things:</p>

            <ul className="ml-4 list-disc space-y-2">
              {nearbyRequirements.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              A company that scores well on these five is nearby in every way
              that matters.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Check a Website Company Before You Hire
            </h3>

            <p>
              Use this short checklist for any company on your shortlist:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {companyChecks.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Services
            </h3>

            <p>
              Zentrix offers everything a growing Lucknow business typically
              needs:
            </p>

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

            <p>Our portfolio shows the range of projects we handle:</p>

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
              to use and helpful for customers. Results vary by business, so we
              recommend visiting the sites and judging the quality yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work With Lucknow Clients Remotely
            </h3>

            <p>Working remotely does not mean working at a distance. Here is how we keep things close:</p>

            <ul className="ml-4 list-disc space-y-2">
              {remoteWorkflow.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Other Side of &ldquo;Near Me&rdquo;: Getting Your Website
              Found Locally
            </h3>

            <p>
              Your future customers also search with &ldquo;near me&rdquo;, and
              your website helps decide whether they find you. Whether you run a
              clinic, a coaching institute, a restaurant, a shop or a service
              business, a few website basics make a big difference.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {localWebsiteTips.map((tip) => (
                <li key={tip.title}>
                  <strong>{tip.title}</strong> {tip.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes When Hiring a Website Company
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {hiringMistakes.map((mistake) => (
                <li key={mistake.title}>
                  <strong>{mistake.title}:</strong> {mistake.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What to Prepare Before Your First Call
            </h3>

            <p>
              Having a few things ready saves time and gives you better advice:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {preparationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              If you do not have all of this, no problem. We can help you shape
              it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team for design, development and growth. Web
              development, UI/UX design, mobile apps, software, cloud solutions
              and digital marketing sit under one roof, so your website, your
              marketing and any future systems can be planned together. We
              explain things in simple language, agree on scope and terms in
              writing and keep you informed at every step.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Us
            </h3>

            <p>
              Compare us with anyone on your shortlist and ask us the hard
              questions. Call{" "}
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
              right website and next steps.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Talk to Us
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
              currentSlug="/website-development-company-near-me-in-lucknow"
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