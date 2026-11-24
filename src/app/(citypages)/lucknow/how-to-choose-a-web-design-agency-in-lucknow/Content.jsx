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
      name: "How do I choose a web design agency in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare live portfolios, client feedback, SEO skills, itemised pricing and post-launch support.",
      },
    },
    {
      "@type": "Question",
      name: "What should I ask a web design agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask about technology, ownership, timeline, SEO, total cost and support after launch.",
      },
    },
    {
      "@type": "Question",
      name: "How much does web design cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on pages and features. Request an itemised quote for your exact needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website design project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most business websites take a few weeks, depending on content and features.",
      },
    },
    {
      "@type": "Question",
      name: "Is a cheap web design agency a good idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very low prices often mean missing features, weak security or poor support.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose a local agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Choose on quality, communication and results, not just location.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech serve Lucknow clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with Lucknow businesses through calls, video meetings and remote delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should. Confirm ownership of domain, content and files in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Can a design agency help with SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Good agencies build in SEO basics and can offer ongoing marketing.",
      },
    },
    {
      "@type": "Question",
      name: "What are red flags when hiring an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instant quotes, no live examples, vague ownership terms and guaranteed rankings.",
      },
    },
  ],
};

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
              How to Choose a Web Design Agency in Lucknow: A Practical Guide
            </h2>

            <p>
              Choosing a web design agency feels simple until you start. Search for options in Lucknow and you will find dozens of names, each promising stunning designs, fast delivery and low prices. Their portfolios look impressive. Their quotes range from a few thousand rupees to several lakhs. How do you tell who will genuinely help your business and who will simply deliver a pretty page that goes nowhere?
            </p>

            <p>
              This guide gives you a clear method. It explains what to check, what to ask, which warning signs to watch for and how to compare agencies fairly. It also shows how Zentrix Infotech approaches web design, so you can judge us by the same standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 1: Know What You Need Before You Contact Anyone
            </h3>

            <p>
              Agencies can only give accurate answers when you give accurate briefs. Before making calls, spend thirty minutes writing down the following:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Your goal.</strong> Do you want more phone calls, online orders, appointment bookings or simply a credible presence?
              </li>
              <li>
                <strong>Your audience.</strong> Who are your customers, and what do they search for?
              </li>
              <li>
                <strong>Your pages and features.</strong> A five-page brochure site, an online store and a booking portal are very different projects.
              </li>
              <li>
                <strong>Your budget range.</strong> Even a rough figure helps an agency propose something realistic.
              </li>
              <li>
                <strong>Your timeline.</strong> Is there a launch date, festival season or event driving the schedule?
              </li>
              <li>
                <strong>Examples you like.</strong> Two or three websites whose style or function you admire.
              </li>
            </ul>

            <p>
              With this brief in hand, every quote you receive will be comparable, and you will immediately notice which agencies ask thoughtful questions and which just send a price.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 2: Judge the Portfolio Like a Customer, Not a Designer
            </h3>

            <p>
              Every agency shows its best work, so look beyond attractive screenshots. Open the live websites and test them:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Load them on your phone. Do they open quickly and read clearly?
              </li>
              <li>
                Click through the pages. Is navigation obvious? Do buttons work?
              </li>
              <li>
                Look for business results. Is there a clear way to call, enquire, book or buy?
              </li>
              <li>
                Check variety. Has the agency solved different kinds of problems, or does everything look like the same template?
              </li>
              <li>
                Find relevant experience. Have they built for a business similar to yours?
              </li>
            </ul>

            <p>
              A strong portfolio shows sites that are attractive and useful. At Zentrix Infotech, our projects range from a retail franchise platform (The Buyzaar Mart) and an organic herbs store (HerbsFox) to luxury interior and wedding portfolios (Vasterior, PS Decor), an educational institution (Kamla Devi Group of Institutions) and healthcare sites such as Jigyasa Hospital. We invite you to open each one and judge them yourself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 3: Look for Proof Beyond the Agency&apos;s Own Words
            </h3>

            <p>
              Testimonials on an agency&apos;s site are useful, but check whether they are specific. Vague praise such as &quot;great service&quot; says little. Useful feedback mentions outcomes: more enquiries, steady bookings, improved local visibility, easier appointment booking.
            </p>

            <p>
              Our clients have shared exactly this kind of detail. A pharmacy owner told us his online presence was almost zero before and that customers now find him through search and social ads. A hospital director described a clean, professional site that makes appointment booking easy. A resort owner reported a noticeable increase in bookings during peak season.
            </p>

            <p>
              Ask any agency whether you may speak to a past client. Confident agencies say yes without hesitation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 4: Check the Technology and Why It Matters
            </h3>

            <p>
              You do not need to be technical, but a little understanding protects you. The platform an agency uses affects speed, security, cost of changes and your freedom later.
            </p>

            <p>Ask these questions in plain language:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>What technology will you use for my website, and why?</li>
              <li>Will the site be fast on mobile phones?</li>
              <li>Will I own the code, design files and content when the project ends?</li>
              <li>Can another developer take over later if needed?</li>
            </ul>

            <p>
              Zentrix Infotech builds with modern tools including React.js, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Firebase and Tailwind CSS. For you, that means quick-loading pages, layouts that adapt to every screen and a foundation that can grow into online payments, customer accounts or a mobile app without a rebuild.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 5: Confirm That Design Includes SEO and Speed
            </h3>

            <p>
              A beautiful website that nobody can find is an expensive brochure. Good design and search visibility have to be planned together. Ask whether the agency handles:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Mobile-first, responsive layouts</li>
              <li>Fast page loading and image optimisation</li>
              <li>Clean page structure with proper headings</li>
              <li>Title tags and meta descriptions for every page</li>
              <li>Local SEO basics for Lucknow customers</li>
              <li>Analytics setup, so you can see what is working</li>
            </ul>

            <p>
              If the answer to these is &quot;we can do that later for extra cost,&quot; be careful. Retrofitting SEO is slower and costlier than building it in. We include these foundations in every project, and we also offer SEO, social media and paid campaigns for businesses that want help attracting visitors after launch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 6: Understand Pricing and Compare Fairly
            </h3>

            <p>
              Cost is the question everyone asks, and it deserves a careful answer. Website prices in Lucknow vary widely because projects vary widely. These factors shape the cost:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of pages and the complexity of layouts</li>
              <li>Custom design versus a simple, clean template-based approach</li>
              <li>Features such as online payments, bookings, logins or multilingual support</li>
              <li>Who writes the content and prepares images</li>
              <li>Ongoing maintenance, hosting and marketing</li>
            </ul>

            <p>
              When comparing quotes, line them up item by item. A low price often leaves out things you will need: responsive design, security, SEO basics, revisions or support. Ask each agency for an itemised proposal and check what happens if you want changes midway.
            </p>

            <p>
              Be wary of extremely cheap offers. They commonly rely on pirated themes, copied designs or rushed work, and fixing them later often costs more than building properly the first time. Equally, a high price does not guarantee quality. Judge value by clarity, experience and fit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 7: Evaluate Communication From the First Call
            </h3>

            <p>
              The way an agency treats you before you pay is the best preview of how it will treat you afterward. Notice:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Do they ask about your business, or only about your budget?</li>
              <li>Do they explain things in plain language?</li>
              <li>Do they respond promptly and honestly?</li>
              <li>Do they set realistic timelines, or promise everything instantly?</li>
              <li>Do you speak with the people who will actually work on your project?</li>
            </ul>

            <p>
              Good agencies explain trade-offs openly. If a team says yes to every request without discussion, that is often a warning rather than a strength.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 8: Ask About Process, Revisions and Ownership
            </h3>

            <p>
              A clear process prevents most project disputes. Ask the agency to describe each stage: discovery, design, review, development, testing, launch and support. At Zentrix Infotech we work in this order:
            </p>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery.</strong> We learn your goals, audience and competitors.
              </li>
              <li>
                <strong>Proposal.</strong> You receive scope, timeline and cost in writing.
              </li>
              <li>
                <strong>Design.</strong> You review and approve the look before development begins.
              </li>
              <li>
                <strong>Development.</strong> We build with clean, scalable code and share progress regularly.
              </li>
              <li>
                <strong>Testing.</strong> We check speed, security and behaviour across devices and browsers.
              </li>
              <li>
                <strong>Launch.</strong> We take the site live and connect analytics.
              </li>
              <li>
                <strong>Support.</strong> We maintain and improve it as your business grows.
              </li>
            </ol>

            <p>
              Also settle ownership. You should own your domain, content and final website files, and the contract should say so.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Step 9: Plan for Life After Launch
            </h3>

            <p>
              Websites need updates, security patches and occasional new features. Ask who handles these, how quickly they respond and what it costs. An agency that disappears after delivery can leave you stuck the first time something breaks. We provide maintenance and ongoing support, and our team is reachable by phone, email and WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Red Flags to Watch For
            </h3>

            <p>
              Walk away, or at least ask harder questions, if you notice any of these:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>A price quoted instantly without understanding your needs</li>
              <li>No live examples, or examples that do not work properly</li>
              <li>Pressure to sign immediately or pay everything upfront</li>
              <li>Vague answers about who owns the website</li>
              <li>No mention of mobile design, speed or SEO</li>
              <li>Guarantees of number one Google rankings, which nobody can honestly promise</li>
              <li>No clear plan for support after launch</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Simple Way to Compare Agencies
            </h3>

            <p>
              Rate each agency from one to five on portfolio, client feedback, technology, SEO, pricing clarity, communication, ownership terms and support. The highest total is usually your best choice, even if it is not the cheapest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Consider Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech has completed more than 250 projects for over 270 clients and holds a 4.7 out of 5 rating. We combine design, development, cloud services and digital marketing under one roof, so your website and your growth plans work together. We serve Lucknow and Uttar Pradesh clients through calls, video meetings and WhatsApp, with transparent communication and practical pricing for startups, small businesses and established companies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start the Conversation
            </h3>

            <p>
              Tell us about your business, your goals and your budget. We will suggest a practical plan, explain the options openly and send a clear proposal, with no pressure.
            </p>

            <p>
              Call:{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
            </p>

            <p>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Your Free Consultation
              </Link>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. How do I choose a web design agency in Lucknow?
                </h4>
                <p>
                  Compare live portfolios, client feedback, SEO skills, itemised pricing and post-launch support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. What should I ask a web design agency?
                </h4>
                <p>
                  Ask about technology, ownership, timeline, SEO, total cost and support after launch.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. How much does web design cost in Lucknow?
                </h4>
                <p>
                  It depends on pages and features. Request an itemised quote for your exact needs.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How long does a website design project take?
                </h4>
                <p>
                  Most business websites take a few weeks, depending on content and features.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Is a cheap web design agency a good idea?
                </h4>
                <p>
                  Very low prices often mean missing features, weak security or poor support.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Should I choose a local agency?
                </h4>
                <p>
                  Not necessarily. Choose on quality, communication and results, not just location.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Does Zentrix Infotech serve Lucknow clients?
                </h4>
                <p>
                  Yes. We work with Lucknow businesses through calls, video meetings and remote delivery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I own my website?
                </h4>
                <p>
                  You should. Confirm ownership of domain, content and files in writing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Can a design agency help with SEO?
                </h4>
                <p>
                  Yes. Good agencies build in SEO basics and can offer ongoing marketing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. What are red flags when hiring an agency?
                </h4>
                <p>
                  Instant quotes, no live examples, vague ownership terms and guaranteed rankings.
                </p>
              </div>
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
                    href="/services/ui-ux-designing"
                    className="text-blue-600 hover:underline"
                  >
                    UI/UX Design Services
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
                    href="/services/digital-marketing"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-blue-600 hover:underline"
                  >
                    About Us
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
              currentSlug="/how-to-choose-a-web-design-agency-in-lucknow"
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