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
      name: "What does your website development service include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planning, design, development, testing, launch and support, with clear scope and deliverables at each stage.",
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
      name: "How much does the service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your logo, photos, service details, testimonials, and one person to give feedback and approvals.",
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
      name: "Can I update the website myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where it fits your project. We can set up easy editing and show you how to use it.",
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
      name: "Can you add features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can add e-commerce, booking, portals, integrations or apps as your business grows.",
      },
    },
  ],
};

const serviceStages = [
  {
    title: "Consultation and planning",
    description:
      "Understanding your business and agreeing on the project.",
  },
  {
    title: "Design",
    description:
      "Creating the look, layout and user experience.",
  },
  {
    title: "Development",
    description:
      "Building and connecting everything that makes the site work.",
  },
  {
    title: "Launch",
    description:
      "Testing, setting up search basics and going live.",
  },
  {
    title: "Care and growth",
    description:
      "Support, updates and improvements afterwards.",
  },
];

const planningOutputs = [
  "A clear understanding of your goals and priorities",
  "A list of recommended pages and features",
  "A written scope covering pages, features, content needs, number of design revisions and support terms",
  "A timeline agreed with you",
  "A written quote",
];

const designOutputs = [
  "Page layouts for the key pages, usually starting with the home page",
  "Colours, fonts and style that match your brand",
  "Mobile-friendly designs",
  "A review round where you give feedback, and revisions as agreed in the scope",
];

const developmentOutputs = [
  "Responsive pages that work on phones, tablets and computers",
  "Working forms, buttons, menus and features from the agreed scope",
  "Integrations such as payment gateways, WhatsApp and call buttons, maps and analytics, where included",
  "An easy way to update content, where it fits your project",
  "Clean, organized code that can be maintained and extended",
];

const launchTests = [
  "Appearance and layout on different phones and screen sizes",
  "Behaviour in different browsers",
  "Every form, button and link",
  "Page speed",
  "Security basics, including HTTPS",
];

const launchSetup = [
  "Page titles, meta descriptions and headings",
  "Sitemap and basic search settings",
  "Analytics so you can see visitors and enquiries",
  "Domain and hosting connections",
];

const careServices = [
  "Fixes and updates",
  "Content changes and new pages",
  "Security checks and backups",
  "Speed and performance improvements",
  "New features such as a store, booking system or portal",
  "SEO, social media and paid campaigns to bring visitors to your site",
];

const handoverChecklist = [
  "Access to your website and admin area",
  "Your domain and hosting account details",
  "Ownership of your domain, hosting accounts and website files",
  "A walkthrough of how to update key content",
  "Analytics access",
  "A list of what was delivered, matched to the written scope",
  "Clear information about support and who to contact",
];

const communicationSteps = [
  {
    title: "Kick-off call",
    description: "To align on goals and scope.",
  },
  {
    title: "Regular updates",
    description:
      "Progress shared through calls, messages and review links.",
  },
  {
    title: "Quick answers",
    description:
      "WhatsApp makes it easy to ask a question and get a reply without waiting for email.",
  },
  {
    title: "Clear approvals",
    description:
      "You review and approve designs and key stages before we move on.",
  },
  {
    title: "Honest timelines",
    description:
      "If something affects the schedule, we tell you early.",
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
    type: "Custom web applications",
    description:
      "Portals, dashboards and booking tools.",
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
    type: "Portfolio websites",
    description:
      "Visual sites for designers, planners and creative studios.",
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
];

const addOnServices = [
  {
    title: "UI/UX design",
    description:
      "For a clearer, more engaging experience.",
  },
  {
    title: "Mobile apps",
    description: "For iOS and Android.",
  },
  {
    title: "Software development",
    description: "For business operations.",
  },
  {
    title: "Cloud solutions",
    description: "For scalable and secure hosting.",
  },
  {
    title: "Digital marketing and SEO",
    description:
      "To bring visitors and enquiries.",
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

const serviceQuestions = [
  "What exactly is included at each stage?",
  "Who will design and build my site, and who is my contact?",
  "How often will I get updates, and through which channel?",
  "How many design revisions are included?",
  "Will I own my domain, hosting accounts and website files?",
  "What support do I get after launch?",
  "How are extra requests handled and charged?",
];

const faqs = [
  {
    question: "What does your website development service include?",
    answer:
      "Planning, design, development, testing, launch and support, with clear scope and deliverables at each stage.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "How much does the service cost?",
    answer:
      "It depends on pages, features and design. Share your needs and we will send a clear written quote.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Your logo, photos, service details, testimonials, and one person to give feedback and approvals.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes, where it fits your project. We can set up easy editing and show you how to use it.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We provide maintenance, updates and improvements after your website goes live.",
  },
  {
    question: "Can you add features later?",
    answer:
      "Yes. We can add e-commerce, booking, portals, integrations or apps as your business grows.",
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
              Lucknow Website Development Service: From First Call to Long-Term
              Support
            </h2>

            <p>
              A website development service is more than a finished website. It
              is the whole experience of getting from &ldquo;I need a
              website&rdquo; to a site that is live, working and supporting your
              business. The quality of that experience, how clearly the team
              communicates, how well the work is organized and how much help you
              get afterwards, matters as much as the design itself.
            </p>

            <p>
              Zentrix Infotech is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. This page walks through our website development
              service from start to finish, so you know exactly what you
              receive, what we need from you and how we stay in touch along the
              way.
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
              What Our Website Development Service Includes
            </h3>

            <p>Our service covers five connected stages.</p>

            <ul className="ml-4 list-disc space-y-2">
              {serviceStages.map((stage) => (
                <li key={stage.title}>
                  <strong>{stage.title}:</strong> {stage.description}
                </li>
              ))}
            </ul>

            <p>
              Each stage has clear outputs, so you always know what has been
              delivered and what comes next.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 1: Consultation and Planning
            </h3>

            <p>
              Every good project begins with a conversation. We ask about your
              business, your customers, your services and what you want the
              website to achieve. We also look at your current website, if you
              have one, and at competitors your customers may compare you with.
            </p>

            <p>What you receive:</p>

            <ul className="ml-4 list-disc space-y-2">
              {planningOutputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>What we need from you:</strong> A short description of
              your business, examples of websites you like, and a point person
              who can answer questions and approve work.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 2: Design
            </h3>

            <p>
              Here your website begins to take shape. Our designers create the
              layout, visual style and navigation, keeping your brand, your
              audience and mobile use in mind.
            </p>

            <p>What you receive:</p>

            <ul className="ml-4 list-disc space-y-2">
              {designOutputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>What we need from you:</strong> Your logo, brand colours,
              photos and any content you already have, plus your feedback in one
              organized list per round.
            </p>

            <p>
              Because you approve the design before development begins, changes
              are made early, when they are quick and easy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 3: Development
            </h3>

            <p>
              Our developers turn the approved design into a working website.
              This includes the pages visitors see, the features behind them and
              the connections to other tools.
            </p>

            <p>What you receive:</p>

            <ul className="ml-4 list-disc space-y-2">
              {developmentOutputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>What we need from you:</strong> Final text, images and
              product or service details, and quick answers to questions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 4: Testing and Launch
            </h3>

            <p>Before your site goes live, we check it carefully.</p>

            <p>What we test:</p>

            <ul className="ml-4 list-disc space-y-2">
              {launchTests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>What we set up for launch:</p>

            <ul className="ml-4 list-disc space-y-2">
              {launchSetup.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              <strong>What you receive:</strong> A live website, a walkthrough
              of how it works and access to everything you need.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Stage 5: Care and Growth
            </h3>

            <p>
              A website is never really finished. Content changes, offers
              appear, software needs updates and your business grows. After
              launch, we remain available for:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {careServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              You can ask for help as needed, and we will explain what is
              included in your agreement and what would be an extra.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your Handover Checklist
            </h3>

            <p>
              At the end of the project, you should receive or have confirmed:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {handoverChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              We confirm ownership in writing, so there is no confusion later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Communicate With You
            </h3>

            <p>
              Good communication is a big part of a good service. Here is how we
              keep you informed:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {communicationSteps.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through phone calls,
              video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Websites We Develop
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {websiteTypes.map((item) => (
                <li key={item.type}>
                  <strong>{item.type}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Services You Can Add
            </h3>

            <p>
              Many clients combine web development with other services from
              Zentrix:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {addOnServices.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Because these sit under one roof, planning is easier and there is
              less back-and-forth between vendors.
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
              Jigyasa Hospital, have shared that their websites are clean, easy
              to use and helpful for customers. Results vary by business, so we
              invite you to visit the live sites and judge the quality yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask About Any Website Development Service
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {serviceQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Clear written answers are a good sign of a reliable service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <p>
              You get a complete service from one team. Design, development and
              digital marketing work together, so your website is planned for
              both use and growth. We explain things in simple language, put
              scope and terms in writing and keep you informed from the first
              call to long after launch. If your needs grow, we can help with
              software, mobile apps and cloud solutions too.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Website Project
            </h3>

            <p>
              Tell us about your business and what you want your website to do,
              and we will suggest the right plan and next steps. Call{" "}
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
              currentSlug="/lucknow-website-development-service"
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