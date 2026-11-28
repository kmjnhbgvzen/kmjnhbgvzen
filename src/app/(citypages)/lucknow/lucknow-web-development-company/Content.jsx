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
      name: "What does a web development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It designs, builds, tests and maintains websites and web applications, including the front end, back end and integrations.",
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
      name: "What can you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business websites, e-commerce stores, portals, dashboards, booking tools and other custom web applications.",
      },
    },
    {
      "@type": "Question",
      name: "How much does web development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages, features and complexity. Share your needs and we will send a clear written quote.",
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
      name: "Will my website be mobile-friendly and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build responsive pages, use HTTPS and follow basic security practices.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the website myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where it fits your project. We can set up easy content editing and show you how to use it.",
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

const webLayers = [
  {
    title: "Front end",
    description:
      "This is everything your visitors see and touch: layouts, menus, buttons, forms, images and animations. Good front-end work makes the site clear, quick and easy to use on any screen, especially phones.",
  },
  {
    title: "Back end",
    description:
      "This is the part that works behind the scenes: storing information, processing forms and orders, managing users, handling logins and connecting to other systems. A solid back end keeps the site reliable and secure.",
  },
  {
    title: "Content management",
    description:
      "If you want to update text, photos, products or blog posts yourself, the website needs a sensible way to do that without calling a developer each time.",
  },
  {
    title: "Integrations",
    description:
      "Payment gateways, WhatsApp and call buttons, maps, email, analytics and business software can all connect to your website, so information flows without manual effort.",
  },
  {
    title: "Hosting and deployment",
    description:
      "Your site needs a secure, stable home that handles traffic properly and recovers if something goes wrong.",
  },
  {
    title: "Performance and security",
    description:
      "Fast loading, protection of forms and data, HTTPS and regular updates are part of the job, not extras.",
  },
];

const webServices = [
  {
    title: "Business website development",
    description:
      "Professional company websites with services, about, portfolio, testimonials and contact pages.",
  },
  {
    title: "Custom web development",
    description:
      "Websites and features built around your needs instead of a generic template.",
  },
  {
    title: "E-commerce development",
    description:
      "Online stores with product catalogues, carts, secure checkout, order management and delivery tracking.",
  },
  {
    title: "Web application development",
    description:
      "Portals, dashboards, booking and management tools that fit how your business works.",
  },
  {
    title: "Website redesign",
    description:
      "A faster, clearer and more modern version of your existing site, with care to protect your current search visibility.",
  },
  {
    title: "UI/UX design",
    description:
      "Interfaces designed to be clear and easy, so visitors take action.",
  },
  {
    title: "Integrations and APIs",
    description:
      "Connecting your website with payments, communication tools and business systems.",
  },
  {
    title: "Maintenance and support",
    description:
      "Updates, fixes, security checks and improvements after launch.",
  },
];

const webApplications = [
  {
    business: "Clinics and hospitals",
    example:
      "Online appointment requests, doctor schedules and patient information pages.",
  },
  {
    business: "Schools, colleges and institutes",
    example:
      "Admission forms, student and faculty resource pages and notice sections.",
  },
  {
    business: "Retail and distribution businesses",
    example:
      "Product catalogues, dealer portals and order tracking.",
  },
  {
    business: "Builders and real estate firms",
    example:
      "Project listings, enquiry management and availability pages.",
  },
  {
    business: "Service businesses",
    example:
      "Booking forms, quotation requests and customer dashboards.",
  },
  {
    business: "Exporters and manufacturers",
    example:
      "Product catalogues with enquiry and quotation forms.",
  },
];

const qualityStandards = [
  {
    title: "Mobile first",
    description:
      "Most visitors use phones, so pages are designed and tested for small screens first.",
  },
  {
    title: "Speed",
    description:
      "We keep pages light, optimize images and avoid unnecessary features that slow the site down.",
  },
  {
    title: "Security basics",
    description:
      "HTTPS, safe handling of forms and sensible access controls protect your business and your customers.",
  },
  {
    title: "Clean, maintainable code",
    description:
      "Well-organized code lets your site be updated, fixed and extended without starting again.",
  },
  {
    title: "Search readiness",
    description:
      "Clear page structure, titles, headings, descriptions, sitemaps and analytics help search engines understand your site from day one.",
  },
  {
    title: "Accessibility and clarity",
    description:
      "Readable text, good contrast and simple navigation make the site easier for everyone to use.",
  },
  {
    title: "Testing",
    description:
      "We check devices, browsers, forms and key actions before launch.",
  },
];

const projectProcess = [
  {
    title: "Discovery",
    description:
      "We learn about your business, customers, goals and any systems the website needs to connect with.",
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
      "Our team builds the front end, back end and integrations.",
  },
  {
    title: "Testing",
    description:
      "We check functionality, speed, security basics and how the site looks on different devices.",
  },
  {
    title: "Launch",
    description:
      "SEO basics and analytics are set up, and the site goes live.",
  },
  {
    title: "Support and improvement",
    description:
      "We stay available for updates, fixes and new features.",
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

const companyQuestions = [
  "What exactly is included in the scope, and what costs extra?",
  "Who will design and develop my website, and who will I talk to?",
  "Will I own my domain, hosting accounts and website files?",
  "How do you handle speed, security and mobile testing?",
  "Can I update content myself after launch?",
  "What support is included after launch?",
  "Can I see live websites and client feedback?",
];

const commonMistakes = [
  {
    title: "Choosing on price alone",
    description:
      "Very low quotes often leave out testing, security, SEO setup or support.",
  },
  {
    title: "Ignoring mobile",
    description: "Check every site on your own phone.",
  },
  {
    title: "Skipping the content plan",
    description:
      "Even the best build cannot fix missing or unclear content.",
  },
  {
    title: "Not asking about ownership",
    description:
      "You should own your domain, hosting and files.",
  },
  {
    title: "Forgetting maintenance",
    description:
      "Websites need updates and backups to stay secure.",
  },
  {
    title: "Building everything at once",
    description:
      "Start with what matters most and grow in phases.",
  },
];

const faqs = [
  {
    question: "What does a web development company do?",
    answer:
      "It designs, builds, tests and maintains websites and web applications, including the front end, back end and integrations.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "What can you build?",
    answer:
      "Business websites, e-commerce stores, portals, dashboards, booking tools and other custom web applications.",
  },
  {
    question: "How much does web development cost?",
    answer:
      "It depends on pages, features and complexity. Share your needs and we will send a clear written quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will my website be mobile-friendly and secure?",
    answer:
      "Yes. We build responsive pages, use HTTPS and follow basic security practices.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes, where it fits your project. We can set up easy content editing and show you how to use it.",
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
              Lucknow Web Development Company: Websites and Web Applications
              Built to Work Properly
            </h2>

            <p>
              Most people judge a website by how it looks. Business owners soon
              learn that what matters just as much is what happens underneath:
              how fast pages load, how safely forms and data are handled, how
              easily the site can be updated and whether it can grow with the
              business. That is the difference between a website that looks good
              on launch day and one that keeps working for years.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. This page explains what web development really
              covers, what our team builds for Lucknow businesses and the
              quality standards we follow, so you know what to expect from any
              web development company you consider.
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
              What Web Development Really Covers
            </h3>

            <p>
              &ldquo;Web development&rdquo; is more than putting pages online. A
              well-built website or web application has several layers working
              together.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {webLayers.map((layer) => (
                <li key={layer.title}>
                  <strong>{layer.title}.</strong> {layer.description}
                </li>
              ))}
            </ul>

            <p>
              A web development company that treats all of these layers
              seriously delivers a website that is easier to trust and easier to
              grow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Need Well-Built Websites
            </h3>

            <p>
              Lucknow is a large and active market. Hospitals and clinics,
              schools and coaching institutes, restaurants and sweet shops,
              chikankari and handicraft sellers, builders, event companies and
              retailers all compete for attention, from Hazratganj and Gomti
              Nagar to Aliganj, Indira Nagar and Alambagh.
            </p>

            <p>
              Customers research on their phones, compare a few options and
              decide quickly. If your website is slow, confusing or hard to use,
              they move on. If it loads fast, explains your services clearly and
              makes contact simple, you win the enquiry.
            </p>

            <p>
              For some businesses, a good website is enough. Others need web
              applications, such as booking systems, customer portals or
              dashboards, to run parts of the business online. A capable web
              development company can support both.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Web Development Services We Offer
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {webServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>

            <p>
              Because Zentrix also offers mobile apps, software development,
              cloud solutions and digital marketing, you can connect your
              website with other parts of your business whenever you are ready.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Web Applications for Lucknow Businesses
            </h3>

            <p>
              Many Lucknow organizations can save time and serve customers
              better with a web application. Some examples of what these can
              look like:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {webApplications.map((item) => (
                <li key={item.business}>
                  <strong>{item.business}:</strong> {item.example}
                </li>
              ))}
            </ul>

            <p>
              These are the kinds of tools we can discuss and plan. Your own
              needs decide the final scope.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Standards We Build To
            </h3>

            <p>Whatever the project, we aim for the same quality standards.</p>

            <ul className="ml-4 list-disc space-y-2">
              {qualityStandards.map((standard) => (
                <li key={standard.title}>
                  <strong>{standard.title}.</strong> {standard.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How a Web Development Project Works
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
              Moradabad and Ghaziabad, and we stay in touch through phone calls,
              video meetings and WhatsApp.
            </p>

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
              Other clients, including Southern Palate, Morning Bites and
              Jigyasa Hospital, have shared that their websites are easy to use
              and helpful for customers. Results vary by business, so we
              recommend visiting the live sites and judging the quality
              yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Any Web Development Company
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {companyQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              Clear, written answers are the best sign of a dependable partner.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes to Avoid
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {commonMistakes.map((mistake) => (
                <li key={mistake.title}>
                  <strong>{mistake.title}:</strong> {mistake.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get one team for design, development and growth. Our
              developers, designers and marketers work together, so speed,
              usability and search visibility are planned together. We explain
              things in simple language, agree on scope and terms in writing and
              keep you informed at every step. And because we also build
              software, mobile apps and cloud solutions, your website can grow
              into a bigger digital system when you need it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Our Web Development Team
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
                Talk to Our Web Development Team
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
              currentSlug="/lucknow-web-development-company"
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