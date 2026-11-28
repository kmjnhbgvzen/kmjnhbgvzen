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
      name: "Where can I read Zentrix Infotech client feedback?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Client testimonials are on our homepage. You can also visit our portfolio sites and ask us for more details.",
      },
    },
    {
      "@type": "Question",
      name: "Are these Lucknow clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not specifically. Our clients are from different businesses. We serve Lucknow businesses remotely from our Moradabad and Ghaziabad offices.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have an office in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our offices are in Moradabad and Ghaziabad. We work through calls, video meetings and WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "How can I tell if a review is genuine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for specific details, a real reviewer with a working business, and consistency with the company's live work.",
      },
    },
    {
      "@type": "Question",
      name: "Should I rely only on reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Also check live portfolios, written scope, ownership terms, communication and support.",
      },
    },
    {
      "@type": "Question",
      name: "Can I speak to a past client?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask us. We can discuss project details with you before you decide.",
      },
    },
    {
      "@type": "Question",
      name: "What rating does Zentrix have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our homepage shows a 4.7/5 client rating across 250+ projects and 270+ clients.",
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

const honestyPoints = [
  "The feedback below comes from our clients and is paraphrased from the testimonials on our website.",
  "These clients are from different businesses and places. We are not presenting them as Lucknow clients.",
  "We work with Lucknow businesses remotely. Our offices are in Moradabad and Ghaziabad.",
  "Every project is different, and results depend on your business, market and goals.",
  "We would rather earn your trust slowly than win it with exaggeration.",
];

const websiteFeedback = [
  {
    client: "Vasterior Pvt. Ltd.",
    industry: "Interior design",
    feedback:
      "The team said their website looks modern and professional and showcases their interiors beautifully.",
  },
  {
    client: "Alluring Glimpses",
    industry: "Interior design",
    feedback:
      "The client said the design reflects their style and the site is easy for their own clients to navigate.",
  },
  {
    client: "PS Decor",
    industry: "Wedding and event design",
    feedback:
      "The client shared that the website shows their wedding projects well and helped bring more client inquiries.",
  },
  {
    client: "Morning Bites",
    industry: "Bakery",
    feedback:
      "The owner said the website is inviting and easy to use, making it simple for customers to order online.",
  },
  {
    client: "HerbsFox",
    industry: "Natural products",
    feedback:
      "The client described the site as clean, well organized and well suited to their business.",
  },
  {
    client: "Southern Palate",
    industry: "Spice e-commerce",
    feedback:
      "The client said the online store looks great and is easy for customers to browse and order from.",
  },
  {
    client: "KDEDU",
    industry: "Education",
    feedback:
      "The client said the college website is informative and makes it easy for students and faculty to reach essential resources.",
  },
  {
    client: "Jigyasa Hospital",
    industry: "Healthcare",
    feedback:
      "Dr. C.P. Singh said the website is clean and professional and makes appointment booking easy, and that the marketing work brought a steady rise in patient inquiries through Google and social media.",
  },
  {
    client: "Kairvi Fort Resort",
    industry: "Hospitality",
    feedback:
      "The client said the site turned out elegant and functional, and that the digital campaigns led to a noticeable boost in bookings during peak seasons.",
  },
  {
    client: "Intirio World",
    industry: "Brand and digital marketing",
    feedback:
      "The client said the website represents their brand well and is stylish and user-friendly, and that the digital marketing helped generate qualified leads.",
  },
];

const marketingFeedback = [
  {
    client: "Jai Balaji Bath and Tiles",
    feedback:
      "Said campaigns helped them reach new builders and dealers and improved their local visibility.",
  },
  {
    client: "Park Square",
    feedback:
      "Said the campaigns attracted property buyers and increased footfall at their site.",
  },
  {
    client: "Ahlawat Pharmacy",
    feedback:
      "Said people now discover them through search and social ads, with orders and footfall growing steadily.",
  },
  {
    client: "Hawk Eye Shooting Institute",
    feedback:
      "Said targeted ads helped their grand opening and brought consistent student inquiries through Instagram and Google.",
  },
  {
    client: "The Buyzaar Mart",
    feedback:
      "Said the marketing strategy helped launch their retail franchise network and brought quality franchise inquiries.",
  },
];

const feedbackThemes = [
  "Clear, professional design that suits the business",
  "Ease of use for customers, whether browsing, ordering or booking",
  "Websites that support real business goals, such as inquiries, bookings and orders",
  "Good coordination during projects",
];

const reviewTips = [
  {
    title: "Look for Specific Details",
    description:
      "A useful review mentions what was built, how the process went and what changed afterwards. &ldquo;Great company, highly recommended&rdquo; tells you very little. &ldquo;The site is easy for customers to order from and the team replied quickly&rdquo; tells you more.",
  },
  {
    title: "Check Where the Review Appears",
    description:
      "Reviews on independent platforms, a company&rsquo;s Google Business Profile or a client&rsquo;s own page can be easier to verify than quotes on the company&rsquo;s own site. Also check whether the reviewer&rsquo;s business is real and has a working website.",
  },
  {
    title: "Watch for Warning Signs",
    description:
      "Many reviews with similar wording, only five-star ratings with no detail, reviewers with no profile or history, a sudden burst of reviews in a short time, and no negative or mixed feedback at all are unusual for any real business.",
  },
  {
    title: "Read the Mixed Reviews",
    description:
      "Mixed or critical reviews show how a company handles problems. A calm, professional reply to criticism is a good sign.",
  },
  {
    title: "Look at the Work, Not Just the Words",
    description:
      "The best proof is the website itself. Open the live sites in a company&rsquo;s portfolio on your phone and check speed, layout and clarity. Reviews should match what you see.",
  },
  {
    title: "Ask to Speak to a Client",
    description:
      "A confident company will usually be willing to connect you with a past client. A short conversation can tell you more than ten written reviews.",
  },
];

const otherChecks = [
  {
    title: "Portfolio",
    description:
      "Live sites that are fast, clear and relevant to your needs.",
  },
  {
    title: "Process",
    description:
      "A described path from discovery to launch and support.",
  },
  {
    title: "Written scope",
    description:
      "Pages, features, revisions, timeline and support clearly listed.",
  },
  {
    title: "Ownership",
    description:
      "You own your domain, hosting accounts and files.",
  },
  {
    title: "Communication",
    description:
      "Prompt, clear and honest replies before you hire.",
  },
  {
    title: "Support after launch",
    description:
      "Someone to help when you need changes.",
  },
];

const zentrixServices = [
  {
    title: "Business websites",
    description:
      "Professional company sites with services, about, portfolio, testimonials and contact pages.",
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
      "Layouts and interfaces made for easy use and conversion.",
  },
  {
    title: "Mobile apps, software and cloud",
    description:
      "For when your business grows beyond the website.",
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
      "A luxury wedding and event design website.",
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

const workProcess = [
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
      "We stay available for updates and improvements.",
  },
];

const faqs = [
  {
    question: "Where can I read Zentrix Infotech client feedback?",
    answer:
      "Client testimonials are on our homepage. You can also visit our portfolio sites and ask us for more details.",
  },
  {
    question: "Are these Lucknow clients?",
    answer:
      "Not specifically. Our clients are from different businesses. We serve Lucknow businesses remotely from our Moradabad and Ghaziabad offices.",
  },
  {
    question: "Do you have an office in Lucknow?",
    answer:
      "No. Our offices are in Moradabad and Ghaziabad. We work through calls, video meetings and WhatsApp.",
  },
  {
    question: "How can I tell if a review is genuine?",
    answer:
      "Look for specific details, a real reviewer with a working business, and consistency with the company's live work.",
  },
  {
    question: "Should I rely only on reviews?",
    answer:
      "No. Also check live portfolios, written scope, ownership terms, communication and support.",
  },
  {
    question: "Can I speak to a past client?",
    answer:
      "Ask us. We can discuss project details with you before you decide.",
  },
  {
    question: "What rating does Zentrix have?",
    answer:
      "Our homepage shows a 4.7/5 client rating across 250+ projects and 270+ clients.",
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
              Lucknow Website Development Company Reviews: What Clients Say and
              How to Read Reviews Before You Hire
            </h2>

            <p>
              Before hiring a website company, most people search for reviews.
              It is a smart habit, because a website is a real investment and
              you want to hear from people who have already worked with the
              company. But reviews can also mislead. Some are genuine and
              detailed, some are vague, and some are not real at all.
            </p>

            <p>
              This page does two things. First, it shares what clients have said
              about their experience with Zentrix Infotech. Second, it shows you
              how to read reviews for any website development company, so you
              can make a decision based on evidence. Zentrix is a web
              development, software and digital marketing company with 250+
              projects, 270+ clients and a 4.7/5 client rating shown on our
              homepage.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Note on Honesty First
            </h3>

            <p>
              We want you to trust what you read, so here is what this page is
              and is not.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {honestyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Our Clients Say About Their Websites
            </h3>

            <p>
              Here is a summary of what clients have shared about the websites
              we built for them.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {websiteFeedback.map((item) => (
                <li key={item.client}>
                  <strong>{item.client}</strong> ({item.industry}).{" "}
                  {item.feedback}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Feedback on Our Marketing Work
            </h3>

            <p>
              Some clients have also shared feedback on our digital marketing:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {marketingFeedback.map((item) => (
                <li key={item.client}>
                  <strong>{item.client}</strong> {item.feedback}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What the Feedback Has in Common
            </h3>

            <p>Reading through client comments, a few themes repeat:</p>

            <ul className="ml-4 list-disc space-y-2">
              {feedbackThemes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              These are the qualities we aim for in every project. We still
              recommend that you do not rely on our words alone. Visit the live
              sites and judge for yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Read Website Company Reviews Properly
            </h3>

            <p>
              Whichever company you consider, use these tips to separate useful
              reviews from noise.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              {reviewTips.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Beyond Reviews: Other Ways to Judge a Website Company
            </h3>

            <p>Reviews are only one piece of evidence. Also check:</p>

            <ul className="ml-4 list-disc space-y-2">
              {otherChecks.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Build
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {zentrixServices.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Portfolio
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              {portfolioItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              {workProcess.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Us and Judge for Yourself
            </h3>

            <p>
              Read the feedback, visit the live sites and ask us anything. Call{" "}
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
              . We can also share more detail about past projects that match
              your needs.
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Talk to Our Team
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
              currentSlug="/lucknow-website-development-company-reviews"
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