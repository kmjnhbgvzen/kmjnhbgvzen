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
      name: "Which is the top website development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no official ranking. The top company for you is the one with proven work, clear terms and good support.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose between website companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review live portfolios, compare written proposals side by side, ask the same questions to each and check client feedback.",
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
      name: "How long does a website project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. We agree on a timeline with you after understanding your project.",
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
      name: "Can I start with a small project first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients launch core pages first and add features in later phases.",
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

const topQualities = [
  {
    title: "Quality of finished work",
    description:
      "Live websites that load fast, look professional and work well on mobile.",
  },
  {
    title: "Relevant experience",
    description:
      "Projects similar to yours in size and industry.",
  },
  {
    title: "Clear process",
    description:
      "A described path from discovery to launch and support.",
  },
  {
    title: "Honest communication",
    description:
      "Straight answers, written scope and no unrealistic promises.",
  },
  {
    title: "Ownership and transparency",
    description:
      "You own your domain, hosting accounts and files.",
  },
  {
    title: "Ongoing support",
    description:
      "Someone to call when you need changes or something breaks.",
  },
  {
    title: "Wider skills",
    description:
      "Design, development, SEO and marketing under one roof if you need them.",
  },
];

const providerTypes = [
  {
    type: "Freelancer",
    strengths: "Low overhead, direct contact",
    checks:
      "Availability, backup if they are busy, long-term support",
  },
  {
    type: "Small local studio",
    strengths: "Personal service, quick replies",
    checks: "Range of skills, capacity for larger projects",
  },
  {
    type: "Full-service agency",
    strengths:
      "Design, development, SEO and support in one place",
    checks:
      "Clear scope, who does the work, communication",
  },
  {
    type: "Template or DIY platform",
    strengths: "Fast and low effort",
    checks:
      "Limited customization, search and growth limits",
  },
  {
    type: "Large national firm",
    strengths: "Process and scale",
    checks:
      "Attention to small clients, cost, flexibility",
  },
];

const shortlistPlan = [
  {
    day: "Day 1",
    title: "Define what you need.",
    description:
      "Write down your business, your goal, the pages and features you expect and the budget range you are comfortable with.",
  },
  {
    day: "Day 2",
    title: "Collect five to eight names.",
    description:
      "Use Google searches, recommendations from other business owners and portfolio sites. Include different provider types.",
  },
  {
    day: "Day 3",
    title: "Screen their own websites.",
    description:
      "Open each on your phone. Is it fast and clear? Does it explain services and show real work? Remove any that disappoint.",
  },
  {
    day: "Day 4",
    title: "Review portfolios.",
    description:
      "Visit the live sites in their portfolios. Check speed, mobile layout, design quality and whether any are similar to your needs. Narrow down to three or four.",
  },
  {
    day: "Day 5",
    title: "Contact them.",
    description:
      "Send each the same short brief and notice who responds quickly, asks good questions and explains things clearly.",
  },
  {
    day: "Day 6",
    title: "Compare proposals.",
    description: "Use the side-by-side sheet below.",
  },
  {
    day: "Day 7",
    title: "Decide or run a small test.",
    description:
      "If you are torn between two, consider starting with a small first phase to see how they work.",
  },
];

const comparisonSheet = [
  "Pages and features included",
  "Design approach: custom or template, and number of revisions",
  "Mobile design, speed and testing",
  "SEO basics at launch",
  "Who writes the content and who provides images",
  "Domain and hosting: who pays and who owns the accounts",
  "Timeline",
  "Support after launch",
  "Total written quote and what is excluded",
  "Your gut feeling about communication",
];

const companyQuestions = [
  "Can you show live websites similar to mine?",
  "Who will actually design and build my site, and who will be my point of contact?",
  "What is included in the quote, and what costs extra?",
  "Will I own my domain, hosting accounts and website files?",
  "How do you test for mobile, speed and security?",
  "Can I update the content myself?",
  "What support do you provide after launch, and for how long?",
  "Can I speak to a past client?",
];

const redFlags = [
  "Guaranteed Google rankings or unrealistic promises",
  "Reluctance to show live work",
  "Vague scope or pressure to sign quickly",
  "A quote that is far lower than others, with no explanation",
  "Unclear ownership of your domain or files",
  "Slow or unclear communication before you have even hired them",
  "No plan for support after launch",
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
      "Interfaces designed to engage visitors and encourage action.",
  },
  {
    title: "Mobile apps and software",
    description:
      "For when your business grows beyond the website.",
  },
  {
    title: "Cloud solutions",
    description:
      "Scalable and secure infrastructure.",
  },
  {
    title: "Digital marketing and SEO",
    description:
      "To bring visitors and enquiries to your site.",
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
      "Interior design websites focused on strong visuals.",
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
    title: "Discovery",
    description:
      "We learn about your business, customers and goals.",
  },
  {
    title: "Written scope",
    description:
      "Pages, features, content, revisions and support are agreed before work starts.",
  },
  {
    title: "Design approval",
    description:
      "You approve the design before development begins.",
  },
  {
    title: "Development",
    description:
      "We build clean, responsive, secure pages and features.",
  },
  {
    title: "Testing",
    description:
      "We check phones, browsers, forms, speed and security basics.",
  },
  {
    title: "Launch",
    description:
      "SEO basics and analytics are set up before going live.",
  },
  {
    title: "Support",
    description:
      "We stay available for updates and future improvements.",
  },
];

const faqs = [
  {
    question: "Which is the top website development company in Lucknow?",
    answer:
      "There is no official ranking. The top company for you is the one with proven work, clear terms and good support.",
  },
  {
    question: "How do I choose between website companies?",
    answer:
      "Review live portfolios, compare written proposals side by side, ask the same questions to each and check client feedback.",
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
    question: "How long does a website project take?",
    answer:
      "It depends on size and features. We agree on a timeline with you after understanding your project.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files. We confirm this in writing.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Yes. Many clients launch core pages first and add features in later phases.",
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
              Top Website Development Company in Lucknow: How to Build Your Own
              Shortlist and Choose With Confidence
            </h2>

            <p>
              Search for the top website development company in Lucknow and you
              will see a long list of companies, each describing itself as
              leading, trusted or number one. There is no official ranking, and
              any list you read online is someone&rsquo;s opinion. That is why
              the smartest approach is to build your own shortlist and test each
              company against the same questions.
            </p>

            <p>
              This guide shows you how to do that in about a week. It also
              explains what Zentrix Infotech offers, so you can compare us
              fairly. Zentrix is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating. We do not ask you to take our word for it. We ask
              you to check.
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
              What Makes a Website Company &ldquo;Top&rdquo;?
            </h3>

            <p>
              A top company for your business is one that delivers good
              websites, communicates clearly and supports you after launch.
              Specifically, look for:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {topQualities.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              A company that scores well across these is &ldquo;top&rdquo; in
              the way that matters to you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Main Types of Website Providers in Lucknow
            </h3>

            <p>
              Different providers suit different needs. Knowing the types helps
              you decide who belongs on your shortlist.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Type
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Strengths
                    </th>
                    <th className="px-3 py-3 font-semibold text-gray-900">
                      Things to check
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {providerTypes.map((provider) => (
                    <tr
                      key={provider.type}
                      className="border-b border-gray-100"
                    >
                      <td className="px-3 py-3 font-medium text-gray-900">
                        {provider.type}
                      </td>
                      <td className="px-3 py-3">{provider.strengths}</td>
                      <td className="px-3 py-3">{provider.checks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Zentrix is a full-service company. We work with Lucknow
              businesses remotely from our offices in Moradabad and Ghaziabad,
              using calls, video meetings and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Build Your Shortlist in Seven Days
            </h3>

            <p>You do not need weeks of research. Follow this simple plan.</p>

            <ol className="ml-4 list-decimal space-y-2">
              {shortlistPlan.map((step) => (
                <li key={step.day}>
                  <strong>{step.day}: {step.title}</strong> {step.description}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple Side-by-Side Comparison Sheet
            </h3>

            <p>For each company, note:</p>

            <ul className="ml-4 list-disc space-y-2">
              {comparisonSheet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              The best option is rarely the lowest price. It is the one that is
              clear on every line and makes you feel confident.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Questions to Ask Every Company on Your List
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {companyQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              Pay attention not just to the answers but to how the company
              answers. Clear, calm and specific is a good sign.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Red Flags to Avoid
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {redFlags.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Zentrix Infotech Offers
            </h3>

            <p>If we are on your shortlist, here is what you can expect:</p>

            <ul className="ml-4 list-disc space-y-2">
              {zentrixServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Work You Can Check Yourself
            </h3>

            <p>
              We encourage you to visit our portfolio and judge the quality
              directly:
            </p>

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
              to use and helpful for customers. Results vary by business, so use
              this as a starting point for your own checks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              {projectProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Is Zentrix the Right Fit?
            </h3>

            <p>
              We are a good fit if you want a professional, mobile-friendly,
              search-ready website, a team that explains things clearly and one
              company that can also support your design, software or marketing
              needs later. We work with Lucknow businesses remotely. If you
              specifically want regular face-to-face meetings at a Lucknow
              office, we are not the right fit, and we would rather say so up
              front. If you value clear communication and solid work, we would
              be glad to be on your shortlist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Add Us to Your Shortlist
            </h3>

            <p>
              Ask us the same questions you ask everyone else. Call{" "}
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
              . Share your idea and we will suggest the right website, with a
              clear written quote.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Add Us to Your Shortlist
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
              currentSlug="/top-website-development-company-in-lucknow"
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