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
      name: "What is the cost of website development in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on website type, pages, features, design and support. Share your needs and we will send a clear written proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Why do website quotes differ so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Companies often quote for different scopes, such as template versus custom design, or with versus without support. Compare what is included, not just the price.",
      },
    },
    {
      "@type": "Question",
      name: "Is a template website cheaper than a custom website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually yes, because it needs less design effort. Custom design costs more but gives your brand a unique identity.",
      },
    },
    {
      "@type": "Question",
      name: "Does the cost include hosting and a domain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Ask whether domain, hosting and SSL are included and what they cost each year.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an e-commerce website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the number of products, payment options, integrations and features. We quote after understanding your store.",
      },
    },
    {
      "@type": "Question",
      name: "Are there yearly costs after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Expect domain and hosting renewals, maintenance and any paid tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start small and add features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Starting with a focused first version is often the smartest way to begin.",
      },
    },
    {
      "@type": "Question",
      name: "Does a website bring customers on its own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. SEO, ads and social media help people find it and are separate services.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple site takes a few weeks. Larger sites and stores take longer, depending on scope and feedback speed.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote from Zentrix Infotech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839, message +91 63970 36898 on WhatsApp or email info@zentrixinfotech.com.",
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
              Cost of Website Development in Lucknow: What You Pay For and Why
            </h2>

            <p>
              The cost of website development in Lucknow depends on what you need the website to do, how many pages it has, how custom the design is and what support you want after launch. There is no single price that fits every business, and anyone who quotes one without asking questions is guessing. This guide explains every factor that moves the price, the costs people forget, and how to set a sensible budget. At Zentrix Infotech, we share a clear written proposal after understanding your needs, so you know what is included before you commit.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call:{" "}
              <a
                href="tel:+917248800839"
                className="font-semibold text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <span role="img" aria-label="WhatsApp">
                💬
              </span>{" "}
              WhatsApp:{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              |{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Website Prices Vary So Much
            </h3>

            <p>
              Ask three companies in Lucknow for a quote and you may get three very different numbers. That does not always mean one is cheap and another is expensive. It usually means they are quoting for different things.
            </p>

            <p>
              One quote may include custom design, mobile testing, basic SEO setup and a month of support. Another may include a ready-made template and nothing else. Comparing only the final number is like comparing two vehicles without checking the engine, safety features or warranty.
            </p>

            <p>Before you compare prices, compare what is included.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Main Factors That Decide Website Development Cost
            </h3>

            <h4 className="font-semibold text-gray-900">1. Type of Website</h4>

            <p>
              A simple five-page business website needs far less work than an online store with hundreds of products, or a portal where customers log in and track orders.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Simple business website:</strong> home, about, services, gallery and contact
              </li>
              <li>
                <strong>Business website with blog and lead forms:</strong> more pages, more content structure
              </li>
              <li>
                <strong>E-commerce store:</strong> catalogue, cart, checkout, payments, order management
              </li>
              <li>
                <strong>Web application or portal:</strong> user accounts, dashboards, data handling, security
              </li>
              <li>
                <strong>Landing page:</strong> one focused page, usually the lowest effort
              </li>
            </ul>

            <h4 className="font-semibold text-gray-900">
              2. Number of Pages and Features
            </h4>

            <p>
              Every extra page needs design, content placement and testing. Every extra feature, such as booking, live chat, multi-language support, filters or calculators, adds development and testing time.
            </p>

            <h4 className="font-semibold text-gray-900">
              3. Design Approach: Template or Custom
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Template-based design:</strong> quicker and usually lower in cost, but the site may look similar to others.
              </li>
              <li>
                <strong>Custom design:</strong> planned around your brand and audience. It takes more effort and gives you a distinct identity.
              </li>
            </ul>

            <p>
              Neither is always right. A small local service may do well with a clean, well-adapted layout, while a brand that depends on its image benefits from custom design.
            </p>

            <h4 className="font-semibold text-gray-900">
              4. Content, Photos and Branding
            </h4>

            <p>
              If you already have a logo, product photos and written content, the project moves faster. If you need help with copywriting, photography or branding, those services add to the effort.
            </p>

            <h4 className="font-semibold text-gray-900">5. Integrations</h4>

            <p>
              Connecting your website to payment gateways, WhatsApp, CRM tools, accounting software, booking systems or delivery partners requires extra development and testing.
            </p>

            <h4 className="font-semibold text-gray-900">
              6. Mobile Experience and Speed
            </h4>

            <p>
              A responsive, fast website takes careful design and optimisation. This is not a luxury, since most Lucknow customers will visit from a phone.
            </p>

            <h4 className="font-semibold text-gray-900">7. SEO Foundation</h4>

            <p>
              Clean structure, page titles, meta descriptions, readable URLs and fast loading should be built in from the start. Ongoing SEO is a separate service.
            </p>

            <h4 className="font-semibold text-gray-900">8. Security</h4>

            <p>
              SSL, protected forms and secure practices matter for every site, and more so for stores and portals that handle customer data.
            </p>

            <h4 className="font-semibold text-gray-900">9. Timeline</h4>

            <p>
              Urgent projects may need more resources at once. A realistic timeline usually gives better value.
            </p>

            <h4 className="font-semibold text-gray-900">
              10. Support After Launch
            </h4>

            <p>
              Updates, bug fixes, security checks and new features are often priced separately from the build.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Cost by Type of Website: What to Expect
            </h3>

            <p>
              We do not publish a rate card because every project differs, but this guide shows how effort and cost usually rise.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Website type
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Typical effort
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      What pushes cost up
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Landing page
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Low</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Custom animations, many sections, integrations
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Small business website
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Low to medium
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      More pages, custom design, content help
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Business website with blog and forms
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Medium
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Content structure, SEO setup, integrations
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      E-commerce website
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Medium to high
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Product count, payments, logistics, inventory
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Web application or portal
                    </td>
                    <td className="border border-gray-200 px-4 py-3">High</td>
                    <td className="border border-gray-200 px-4 py-3">
                      User roles, dashboards, security, custom logic
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Redesign of an existing site
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Medium
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Size of old site, content migration, SEO protection
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For a figure that fits your project, share your requirements and we will send a written proposal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Costs People Often Forget
            </h3>

            <p>Development is not the only expense. A fair budget also includes:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Domain name:</strong> your website address, usually renewed every year.
              </li>
              <li>
                <strong>Hosting:</strong> the server where your website lives. The needs of a small site and a busy store are very different.
              </li>
              <li>
                <strong>SSL certificate:</strong> the security layer that shows the padlock in the browser. Many hosts include it.
              </li>
              <li>
                <strong>Content and photography:</strong> professional photos and clear writing improve results more than most people expect.
              </li>
              <li>
                <strong>Premium plugins, tools or licences:</strong> some features rely on paid tools that renew yearly.
              </li>
              <li>
                <strong>Maintenance:</strong> updates, backups, security checks and small edits.
              </li>
              <li>
                <strong>Marketing:</strong> a website does not bring visitors on its own. SEO, Google Ads and social media are separate and ongoing.
              </li>
            </ul>

            <p>
              Ask every company you speak to which of these are included and which are extra.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              One-Time Costs vs Ongoing Costs
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>One-time:</strong> design, development, setup, testing, launch.
              </li>
              <li>
                <strong>Ongoing:</strong> domain renewal, hosting, maintenance, updates, security, marketing, new features.
              </li>
            </ul>

            <p>
              A website is closer to a shop than to a printed brochure. You invest in building it, then keep it clean, stocked and visible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Set Your Website Budget
            </h3>

            <p>
              A simple worksheet helps you decide before you talk to any company. Fill in your own numbers:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Goal:</strong> what must the website achieve? Calls, orders, bookings or admissions?
              </li>
              <li>
                <strong>Value of one customer:</strong> how much is a new customer worth to you over a year?
              </li>
              <li>
                <strong>Target:</strong> how many extra customers per month would make the website worthwhile?
              </li>
              <li>
                <strong>Maximum build budget:</strong> the amount you are comfortable investing now.
              </li>
              <li>
                <strong>Monthly running budget:</strong> hosting, maintenance and marketing.
              </li>
              <li>
                <strong>Must-have features:</strong> what is essential at launch?
              </li>
              <li>
                <strong>Later features:</strong> what can wait?
              </li>
            </ul>

            <p>
              If one extra customer pays for a meaningful part of the website, the decision becomes clearer. We can help you work through this on a call.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Smart Ways to Start Lean
            </h3>

            <p>You do not have to build everything on day one.</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Launch a focused first version with essential pages and features, then add more as results come in.
              </li>
              <li>
                Start with a landing page for a campaign, then grow it into a full site.
              </li>
              <li>
                Prepare your content and photos before the project begins, so design moves faster.
              </li>
              <li>
                Choose one or two integrations first, such as WhatsApp and a booking form.
              </li>
              <li>
                Plan for phases, for example website first, store second, app later.
              </li>
            </ul>

            <p>
              Starting lean does not mean starting weak. It means spending where it matters most.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Warning Signs in a Website Quote
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>A price offered with no questions asked about your business</li>
              <li>No written list of what is included</li>
              <li>
                Vague words such as &quot;all features&quot; without details
              </li>
              <li>No mention of mobile design, speed or security</li>
              <li>Unclear ownership of your design, domain and content</li>
              <li>No information about support after launch</li>
              <li>Promises of top rankings or guaranteed leads</li>
            </ul>

            <p>
              A professional proposal should be specific, in writing and easy to understand.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What to Ask Before You Pay
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>What exactly is included in this price?</li>
              <li>How many pages, revisions and features are covered?</li>
              <li>Is the site mobile responsive and tested?</li>
              <li>Who owns the design files, domain and content?</li>
              <li>What are the yearly costs after launch?</li>
              <li>What does support include, and for how long?</li>
              <li>What is the timeline, and what do you need from me?</li>
              <li>Can I see live websites similar to my project?</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Businesses Choose Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital solutions company offering web development, UI/UX design, mobile apps, software development, cloud solutions and digital marketing. Our offices are in Moradabad and Ghaziabad, and we serve clients across Uttar Pradesh and India, including Lucknow, through calls, video meetings and visits when needed.
            </p>

            <p>
              We have completed 250+ projects for 270+ clients and hold a 4.7 out of 5 client rating. Our portfolio includes The Buyzaar Mart, HerbsFox, Kamla Devi Group of Institutions (KDEDU), Vasterior, PS Decor and Alluring Glimpses, so you can see our work before you decide.
            </p>

            <p>What you can expect from us:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>A discovery call to understand your goals</li>
              <li>A written proposal with a clear scope</li>
              <li>Mobile-first design and clean, fast code</li>
              <li>A basic SEO foundation built in</li>
              <li>Clear communication and regular updates</li>
              <li>Support after launch</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Pricing Approach
            </h3>

            <p>
              We price each project after understanding it. The proposal depends on pages, features, design effort, integrations, content support, timeline and support needs. We explain what is included, what is optional and what could change the cost later, so there are no surprises midway through the project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get a Clear Quote for Your Website
            </h3>

            <p>
              If you want a clear answer on the cost of website development in Lucknow, tell Zentrix Infotech about your business and goals. We will recommend the right type of website, explain each choice in plain language and send a written proposal you can compare with confidence.
            </p>

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>{" "}
              |{" "}
              <span role="img" aria-label="WhatsApp">
                💬
              </span>{" "}
              <a
                href="https://wa.me/916397036898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>{" "}
              |{" "}
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
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
                  1. What is the cost of website development in Lucknow?
                </h4>
                <p>
                  It depends on website type, pages, features, design and support. Share your needs and we will send a clear written proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Why do website quotes differ so much?
                </h4>
                <p>
                  Companies often quote for different scopes, such as template versus custom design, or with versus without support. Compare what is included, not just the price.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Is a template website cheaper than a custom website?
                </h4>
                <p>
                  Usually yes, because it needs less design effort. Custom design costs more but gives your brand a unique identity.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Does the cost include hosting and a domain?
                </h4>
                <p>
                  Not always. Ask whether domain, hosting and SSL are included and what they cost each year.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How much does an e-commerce website cost?
                </h4>
                <p>
                  It depends on the number of products, payment options, integrations and features. We quote after understanding your store.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Are there yearly costs after launch?
                </h4>
                <p>
                  Yes. Expect domain and hosting renewals, maintenance and any paid tools.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can I start small and add features later?
                </h4>
                <p>
                  Yes. Starting with a focused first version is often the smartest way to begin.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Does a website bring customers on its own?
                </h4>
                <p>
                  Not automatically. SEO, ads and social media help people find it and are separate services.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. How long does a website take to build?
                </h4>
                <p>
                  A simple site takes a few weeks. Larger sites and stores take longer, depending on scope and feedback speed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I get a quote from Zentrix Infotech?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , message{" "}
                  <a
                    href="https://wa.me/916397036898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 63970 36898
                  </a>{" "}
                  on WhatsApp or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  .
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
              currentSlug="/cost-of-website-development-in-lucknow"
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