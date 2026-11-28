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
      name: "How do I choose a website development company in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write a brief, shortlist three to five companies, check live portfolios, compare written proposals and ask the same questions to each.",
      },
    },
    {
      "@type": "Question",
      name: "What should I ask a website company before hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for live examples, who does the work, what is included, ownership terms, mobile testing and post-launch support.",
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
      name: "Is the cheapest quote the best choice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. Low quotes often leave out testing, SEO setup or support. Compare what is included.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check a company's work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open their live portfolio sites on your phone and check speed, layout, clarity and contact options.",
      },
    },
    {
      "@type": "Question",
      name: "Should I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You should own your domain, hosting accounts and website files, and have this confirmed in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a small project first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A smaller first phase is a good way to test a team before a bigger commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on size and features. Ask for a timeline in writing after sharing your brief.",
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
    "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-website-development-company-in-lucknow",
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
        "How to Choose a Website Development Company in Lucknow: A Step-by-Step Decision Guide",
      item:
        "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-website-development-company-in-lucknow",
    },
  ],
};

const briefItems = [
  "What your business does and who your customers are",
  "The main goal of the website: calls, enquiries, bookings, orders or credibility",
  "Website type: business site, online store, portal or redesign",
  "Pages you expect and any special features such as payments, bookings or logins",
  "What you already have: logo, photos, text and testimonials",
  "Websites you like and why",
  "Your timeline and your comfortable budget range",
];

const providerTypes = [
  {
    type: "Freelancer",
    description:
      "Good for small, simple projects. Check availability and what happens if they are unavailable later.",
  },
  {
    type: "Small studio",
    description:
      "Often friendly and responsive. Check the range of skills and capacity.",
  },
  {
    type: "Full-service company",
    description:
      "Design, development, SEO and support in one place. Useful if you want your website and growth planned together.",
  },
  {
    type: "Template platforms",
    description:
      "Fast and low effort, but limited in customization and growth.",
  },
];

const shortlistChecks = [
  "Open their own website on your phone. Is it fast, clear and easy to use?",
  "Do they show real, live work, not only screenshots?",
  "Is it easy to see what services they offer and how to contact them?",
];

const portfolioChecks = [
  {
    title: "Speed",
    description: "Does the site load quickly on your phone?",
  },
  {
    title: "Mobile layout",
    description:
      "Is the text readable and are buttons easy to tap?",
  },
  {
    title: "Clarity",
    description:
      "Can you tell what the business does within a few seconds?",
  },
  {
    title: "Design quality",
    description:
      "Does it look professional and consistent?",
  },
  {
    title: "Relevance",
    description:
      "Are any of the sites similar to what you need?",
  },
  {
    title: "Contact options",
    description:
      "Are call, WhatsApp or enquiry options easy to find?",
  },
];

const enquiryChecks = [
  "Do they reply promptly?",
  "Do they ask good questions about your customers and goals?",
  "Do they explain things in simple language?",
  "Do they give realistic answers, or only say what you want to hear?",
];

const questionsToAsk = [
  "Can you show live websites similar to mine?",
  "Who will design and build my site, and who will be my contact?",
  "What is included in the quote, and what costs extra?",
  "How many design revisions are included?",
  "How do you test mobile, speed and security?",
  "Will I own my domain, hosting accounts and website files?",
  "Can I update the content myself?",
  "What support do you provide after launch?",
  "Can I speak to a past client?",
];

const proposalItems = [
  "Pages and features included",
  "Design: custom or template, revisions",
  "Mobile design and testing",
  "SEO basics at launch",
  "Content and images: who provides",
  "Domain and hosting: who owns",
  "Timeline",
  "Support after launch",
  "Total written quote and exclusions",
  "Communication quality (your rating)",
];

const redFlags = [
  "Guarantees top Google rankings",
  "Will not show live examples",
  "Gives a vague scope or pushes you to sign quickly",
  "Offers a quote far below the others without explaining why",
  "Does not give you ownership of your domain and files",
  "Is slow to respond before you have even hired them",
  "Has no clear plan for support after launch",
];

const writtenAgreementItems = [
  "The pages and features included",
  "The design process and number of revisions",
  "The timeline and key milestones",
  "The payment schedule",
  "Ownership of your domain, hosting accounts and website files",
  "What support is included after launch",
  "How extra requests are handled",
];

const businessTypes = [
  {
    type: "Clinics and hospitals",
    advice:
      "Prioritize clean design, accurate information, doctor and treatment pages and easy appointment enquiry.",
  },
  {
    type: "Coaching institutes and colleges",
    advice:
      "Look for experience with information-rich sites and clear admission details.",
  },
  {
    type: "Online sellers",
    advice:
      "Look for e-commerce experience, secure checkout, order management and strong mobile shopping.",
  },
  {
    type: "Interior designers, event planners and creative studios",
    advice:
      "Look for strong visual work and portfolio presentation.",
  },
  {
    type: "Builders and real estate",
    advice:
      "Look for project pages, galleries and lead forms.",
  },
  {
    type: "Exporters and B2B companies",
    advice:
      "Look for catalogue structure, trust pages and enquiry forms.",
  },
];

const commonMistakes = [
  {
    mistake: "Choosing on price alone",
    reason:
      "Low quotes often leave out testing, SEO setup or support.",
  },
  {
    mistake: "Choosing on distance alone",
    reason:
      "Communication and quality matter more than office location.",
  },
  {
    mistake: "Skipping the portfolio check",
    reason:
      "Always open live sites on your phone.",
  },
  {
    mistake: "Not asking about ownership",
    reason:
      "You should own your domain, hosting and files.",
  },
  {
    mistake: "Ignoring after-launch support",
    reason:
      "Websites need updates and fixes.",
  },
  {
    mistake: "Not writing a brief",
    reason:
      "Vague requests lead to vague quotes.",
  },
];

const zentrixChecks = [
  {
    title: "Services",
    description:
      "Web development, UI/UX design, e-commerce, mobile apps, software development, cloud solutions and digital marketing.",
  },
  {
    title: "Portfolio",
    description:
      "The Buyzaar Mart, PS Decor, Vasterior, Alluring Glimpses, KDEDU and HerbsFox are live examples you can open yourself.",
  },
  {
    title: "Client feedback",
    description:
      "PS Decor said the site showcases their projects beautifully and helped bring more client inquiries. Others, including Southern Palate, Morning Bites and Jigyasa Hospital, have shared that their websites are clean and easy to use.",
  },
  {
    title: "Process",
    description:
      "Discovery, written scope, design approval, development, testing, launch and support.",
  },
  {
    title: "Ownership",
    description:
      "You should own your domain, hosting accounts and website files, and we confirm this in writing.",
  },
];

const faqs = [
  {
    question: "How do I choose a website development company in Lucknow?",
    answer:
      "Write a brief, shortlist three to five companies, check live portfolios, compare written proposals and ask the same questions to each.",
  },
  {
    question: "What should I ask a website company before hiring?",
    answer:
      "Ask for live examples, who does the work, what is included, ownership terms, mobile testing and post-launch support.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We serve Lucknow clients through calls, video meetings and WhatsApp.",
  },
  {
    question: "Is the cheapest quote the best choice?",
    answer:
      "Usually not. Low quotes often leave out testing, SEO setup or support. Compare what is included.",
  },
  {
    question: "How can I check a company's work?",
    answer:
      "Open their live portfolio sites on your phone and check speed, layout, clarity and contact options.",
  },
  {
    question: "Should I own my website?",
    answer:
      "Yes. You should own your domain, hosting accounts and website files, and have this confirmed in writing.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Yes. A smaller first phase is a good way to test a team before a bigger commitment.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "It depends on size and features. Ask for a timeline in writing after sharing your brief.",
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
              How to Choose a Website Development Company in Lucknow: A
              Step-by-Step Decision Guide
            </h2>

            <p>
              Choosing a website development company can feel risky. You are
              paying for something you cannot fully see until it is built, and
              the quotes you receive often look nothing alike. Many business
              owners end up choosing on price or on a good first conversation,
              then discover the problems later: missed deadlines, a site that is
              slow on mobile, or no help once the project is over.
            </p>

            <p>
              This guide gives you a clear, practical process to avoid that.
              Follow the steps, use the checklists and you will be able to
              choose with confidence, whether you pick Zentrix Infotech or
              someone else. Zentrix is a web development, software and digital
              marketing company with 250+ projects, 270+ clients and a 4.7/5
              client rating.
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
              Step 1: Define What You Need
            </h3>

            <p>
              Before you talk to any company, get clear on your own goals. A
              short written brief makes every conversation better.
            </p>

            <p>Write down:</p>

            <ul className="ml-4 list-disc space-y-2">
              {briefItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              This one page protects you from vague quotes and helps companies
              understand your needs quickly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 2: Decide What Type of Provider Suits You
            </h3>

            <p>Different providers fit different projects:</p>

            <ul className="ml-4 list-disc space-y-2">
              {providerTypes.map((item) => (
                <li key={item.type}>
                  <strong>{item.type}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              If you expect your needs to grow, such as adding an online store,
              an app or marketing later, a company that offers several services
              can save you from changing vendors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 3: Build a Shortlist of Three to Five
            </h3>

            <p>
              Collect names from Google searches, recommendations from other
              business owners and portfolio sites. Then do a quick screen:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {shortlistChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              A company that builds a weak website for itself is unlikely to
              build a strong one for you. Aim for three to five companies that
              pass this first test.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 4: Evaluate Their Work
            </h3>

            <p>
              This is the most important step. Visit the live websites in each
              company&rsquo;s portfolio and check:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioChecks.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              Also read client feedback. Specific comments about the process and
              the website are more useful than general praise.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 5: Talk to Each Company
            </h3>

            <p>
              Send every company the same brief and notice how they respond:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {enquiryChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              The way a company handles your first enquiry is often how it will
              handle your project.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Questions to Ask
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              {questionsToAsk.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 6: Compare Proposals Side by Side
            </h3>

            <p>Use a simple comparison sheet. For each company, record:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-semibold text-gray-900">
                      Item
                    </th>
                    <th className="py-3 font-semibold text-gray-900">
                      Company A
                    </th>
                    <th className="py-3 font-semibold text-gray-900">
                      Company B
                    </th>
                    <th className="py-3 font-semibold text-gray-900">
                      Company C
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {proposalItems.map((item) => (
                    <tr key={item} className="border-b border-gray-100">
                      <td className="py-3 pr-4">{item}</td>
                      <td className="py-3">&nbsp;</td>
                      <td className="py-3">&nbsp;</td>
                      <td className="py-3">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The best proposal is rarely the cheapest. It is the clearest one,
              with every item stated and nothing hidden.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 7: Check the Red Flags
            </h3>

            <p>Be cautious if a company:</p>

            <ul className="ml-4 list-disc space-y-2">
              {redFlags.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 8: Get It in Writing
            </h3>

            <p>Before work starts, make sure the agreement covers:</p>

            <ul className="ml-4 list-disc space-y-2">
              {writtenAgreementItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Clear written terms protect both sides and prevent most
              disagreements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 9: Consider a Small First Phase
            </h3>

            <p>
              If you are unsure between two companies, or if the project is
              large, start with a smaller first phase, such as your core pages.
              You will quickly see how the team communicates, how they handle
              feedback and how good the finished work is. You can then expand
              with confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing by Business Type
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {businessTypes.map((item) => (
                <li key={item.type}>
                  <strong>{item.type}:</strong> {item.advice}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes When Choosing
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {commonMistakes.map((item) => (
                <li key={item.mistake}>
                  <strong>{item.mistake}:</strong> {item.reason}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Fits Into This Process
            </h3>

            <p>
              We would like to be on your shortlist, and we are happy to be
              tested. Here is what you can check:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {zentrixChecks.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <p>
              We work with Lucknow businesses remotely. Our offices are in
              Moradabad and Ghaziabad, and we stay in touch through calls, video
              meetings and WhatsApp. If you specifically need regular meetings
              at a Lucknow office, we are not the right fit, and we would rather
              tell you now.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Us
            </h3>

            <p>
              Send us your brief and ask us the same questions you ask everyone
              else. Call{" "}
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
              . We will suggest the right website and next steps, with a clear
              written quote.
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
              currentSlug="/how-to-choose-a-website-development-company-in-lucknow"
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