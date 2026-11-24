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
      name: "What website design services do you offer in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom design, business websites, e-commerce design, landing pages, redesign, UI/UX and mobile-first design.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a website design project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple site usually takes a few weeks. Larger sites and stores take longer, depending on pages, features and feedback speed.",
      },
    },
    {
      "@type": "Question",
      name: "Are your websites mobile friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website is responsive and tested on mobiles, tablets and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We improve design, speed and structure while keeping useful content and search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build online stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design e-commerce websites with easy browsing, secure payments and simple checkout.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be SEO friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build in clean structure, headings, meta tags and fast loading. Ongoing SEO can be added.",
      },
    },
    {
      "@type": "Question",
      name: "How much do website design services cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, features and customisation. Share your needs and we will send a clear proposal.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your logo, service details, photos and goals. If you do not have them, we will guide you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help with updates, fixes, security checks and improvements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Zentrix Infotech?",
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
              Website Design Services in Lucknow That Bring You Real Enquiries
            </h2>

            <p>
              Zentrix Infotech provides complete website design services in Lucknow for businesses that want more than a good-looking page. We design websites that load fast, work smoothly on mobile, build trust in the first few seconds and guide visitors to call, message or buy. If you run a boutique, clinic, institute, restaurant, real estate project or manufacturing business, your website should work as your best salesperson, open every hour of every day.
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
              What Website Design Services Include
            </h3>

            <p>
              Website design is not only colours and pictures. It covers every decision that shapes how a visitor experiences your business online:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Page layout and structure</li>
              <li>Navigation and menus</li>
              <li>Colours, fonts and brand style</li>
              <li>Images, icons and graphics</li>
              <li>Forms, buttons and calls to action</li>
              <li>Mobile and tablet behaviour</li>
              <li>Loading speed and basic search readiness</li>
            </ul>

            <p>
              When these work together, a visitor understands your offer in seconds, trusts you and finds the next step easily. When they do not, the visitor leaves and contacts a competitor.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Design Matters for Lucknow Businesses
            </h3>

            <p>
              Customers in Lucknow search on their phones before they visit a shop, book a doctor, choose a coaching centre or hire a decorator. They compare two or three options within minutes and usually contact the one that feels clear and reliable.
            </p>

            <p>A professionally designed website helps you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Build trust with a clean layout, real photos and visible contact details
              </li>
              <li>
                Capture enquiries day and night, even when your office is closed
              </li>
              <li>
                Support every marketing channel, since ads, social posts and listings all lead to your site
              </li>
              <li>
                Stand apart locally, because many competitors still run slow or outdated websites
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Design Services in Lucknow
            </h3>

            <h4 className="font-semibold text-gray-900">
              Custom Website Design
            </h4>

            <p>
              We do not force your business into a ready-made template. Layout, colours, typography and page flow are planned around your brand, your audience and your goals.
            </p>

            <p>
              <strong>Best for:</strong> companies, consultants, institutes and service providers who want a distinct identity.
            </p>

            <h4 className="font-semibold text-gray-900">
              Business and Corporate Website Design
            </h4>

            <p>
              A professional site with home, about, services, portfolio, testimonials and contact pages, with calls to action where visitors are ready to act.
            </p>

            <p>
              <strong>Best for:</strong> established businesses that need a credible online presence.
            </p>

            <h4 className="font-semibold text-gray-900">
              E-commerce Website Design
            </h4>

            <p>
              Store designs with product listings, product pages, cart, checkout and payment options, all built for easy buying on a phone.
            </p>

            <p>
              <strong>Best for:</strong> sellers of fashion, chikankari, handicrafts, food items, wellness products and retail goods.
            </p>

            <h4 className="font-semibold text-gray-900">
              Landing Page Design
            </h4>

            <p>
              A focused single page with a strong headline, benefits, proof, a short form and one clear button.
            </p>

            <p>
              <strong>Best for:</strong> ad campaigns, admissions, events and product launches.
            </p>

            <h4 className="font-semibold text-gray-900">
              Website Redesign Services
            </h4>

            <p>
              We review your current site, modernise the design, improve navigation and speed, and carefully protect useful content and search visibility.
            </p>

            <p>
              <strong>Best for:</strong> websites that look outdated, load slowly or bring few enquiries.
            </p>

            <h4 className="font-semibold text-gray-900">
              UI/UX Design Services
            </h4>

            <p>
              Research-led interface design, user flows, wireframes and clickable layouts, so the experience feels natural before development begins.
            </p>

            <p>
              <strong>Best for:</strong> portals, booking systems, web applications and large websites.
            </p>

            <h4 className="font-semibold text-gray-900">
              Responsive and Mobile-First Design
            </h4>

            <p>
              Layouts that adapt to mobiles, tablets and desktops, with tap-friendly buttons, readable text and quick loading on mobile networks.
            </p>

            <p>
              <strong>Best for:</strong> every business. It is included in all our projects.
            </p>

            <h4 className="font-semibold text-gray-900">
              Industry-Specific Website Design
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Healthcare:</strong> doctor profiles, department pages and appointment booking
              </li>
              <li>
                <strong>Education:</strong> course pages, admission forms and results
              </li>
              <li>
                <strong>Real estate:</strong> project showcases, floor plans and lead forms
              </li>
              <li>
                <strong>Hospitality and events:</strong> galleries, packages and booking enquiries
              </li>
              <li>
                <strong>Restaurants and food brands:</strong> menus, online ordering and location details
              </li>
              <li>
                <strong>Manufacturing and trade:</strong> catalogues and request-a-quote forms
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Which Website Design Service Do You Need?
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Your situation
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Best-fit service
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      New business, no website
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Business website design
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Selling products online
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      E-commerce website design
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Running ads or an event
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Landing page design
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Old, slow or unattractive site
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Website redesign
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Complex app, portal or booking tool
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      UI/UX design and development
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Limited budget, want to start small
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Focused first version, expand later
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Not sure where you fit? Call us. A short conversation usually makes the right choice clear.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Add-On Services That Help Your Website Perform
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>SEO setup and ongoing SEO:</strong> page titles, meta descriptions, clean structure and content planning
              </li>
              <li>
                <strong>Digital marketing:</strong> Google Ads, social media campaigns and lead generation
              </li>
              <li>
                <strong>Mobile app development:</strong> native and cross-platform apps for iOS and Android
              </li>
              <li>
                <strong>Software development:</strong> custom systems for billing, operations and management
              </li>
              <li>
                <strong>Cloud solutions:</strong> reliable hosting, deployment and scaling
              </li>
            </ul>

            <p>
              With design, development and marketing under one team, your website and campaigns are planned together.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Design Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> we learn about your business, customers, competitors and goals.
              </li>
              <li>
                <strong>Planning and sitemap:</strong> we agree on pages and visitor journeys.
              </li>
              <li>
                <strong>Wireframes:</strong> we sketch key pages so you approve the flow early.
              </li>
              <li>
                <strong>Visual design:</strong> we apply your brand and share designs for feedback.
              </li>
              <li>
                <strong>Development:</strong> approved designs become a fast, secure, responsive website.
              </li>
              <li>
                <strong>Testing:</strong> we check devices, browsers, forms, links and speed.
              </li>
              <li>
                <strong>Launch:</strong> we go live and connect analytics.
              </li>
              <li>
                <strong>Support:</strong> we stay available for updates and improvements.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What We Need From You
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Your logo and brand colours, if available</li>
              <li>A short description of your services or products</li>
              <li>Photos of your work, products, team or premises</li>
              <li>Examples of websites you like and dislike</li>
              <li>Your main goal: calls, orders, bookings or admissions</li>
              <li>One person who can approve feedback quickly</li>
            </ul>

            <p>
              No content or photos yet? Tell us. We will guide you on what to prepare.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Proof You Can Check: Our Portfolio
            </h3>

            <p>
              We have designed websites across interiors, education, wellness, retail and events:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Vasterior:</strong> a luxury interior and Vastu design studio website
              </li>
              <li>
                <strong>Alluring Glimpses:</strong> a visual, atmosphere-led site for a spatial and interior design brand
              </li>
              <li>
                <strong>PS Decor:</strong> a wedding and event design site. The client shared that it helped bring more enquiries
              </li>
              <li>
                <strong>Kamla Devi Group of Institutions (KDEDU):</strong> an education website for students and faculty
              </li>
              <li>
                <strong>HerbsFox:</strong> an online marketplace for herbs, spices and wellness products
              </li>
              <li>
                <strong>The Buyzaar Mart:</strong> a retail and franchise platform with multi-category shopping
              </li>
            </ul>

            <p>
              We have completed 250+ projects for 270+ clients and hold a 4.7 out of 5 client rating.{" "}
              <Link href="/portfolio" className="text-blue-600 hover:underline">
                Visit our portfolio page
              </Link>{" "}
              for more.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Design with a purpose:</strong> every page has a job, and every job leads to an action.
              </li>
              <li>
                <strong>Mobile-first thinking:</strong> we design for the screen most of your customers use.
              </li>
              <li>
                <strong>Fast and search-ready:</strong> clean code and sensible structure give you a strong SEO base.
              </li>
              <li>
                <strong>Clear communication:</strong> you know the scope, timeline and next step at every stage.
              </li>
              <li>
                <strong>One team, many skills:</strong> design, development, SEO and marketing together.
              </li>
              <li>
                <strong>Remote-friendly service:</strong> our offices are in Moradabad and Ghaziabad, and we serve Lucknow clients through calls, video meetings and visits when needed.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Features Every Business Website Should Have
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>A homepage that explains what you do within seconds</li>
              <li>Simple navigation and clear service pages</li>
              <li>Click-to-call and WhatsApp buttons</li>
              <li>Short enquiry or appointment forms</li>
              <li>Testimonials near key actions</li>
              <li>High-quality images that load quickly</li>
              <li>Google Maps and full contact details</li>
              <li>SSL security and reliable hosting</li>
              <li>On-page SEO basics: headings, titles and meta descriptions</li>
              <li>Analytics to track visitors and enquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Pricing Works
            </h3>

            <p>There is no single price for every website. Your proposal depends on:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of pages and layout complexity</li>
              <li>Business website, landing page or online store</li>
              <li>Custom features, animations or integrations</li>
              <li>Content, photography and branding support</li>
              <li>Payment, booking or CRM integrations</li>
              <li>Maintenance and support after launch</li>
            </ul>

            <p>
              After a short discussion, we send a written proposal so you know what is included before you decide. You can start with a focused first version and add features as you grow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Care After Launch
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Content and image updates</li>
              <li>Bug fixes and security checks</li>
              <li>Speed and performance reviews</li>
              <li>New pages, products or features</li>
              <li>Analytics review and improvement suggestions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Website Design Project
            </h3>

            <p>
              If you want dependable website design services in Lucknow, share your business and goals with Zentrix Infotech. We will recommend the right service and a clear plan to get your website live.
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
                  1. What website design services do you offer in Lucknow?
                </h4>
                <p>
                  Custom design, business websites, e-commerce design, landing pages, redesign, UI/UX and mobile-first design.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does a website design project take?
                </h4>
                <p>
                  A simple site usually takes a few weeks. Larger sites and stores take longer, depending on pages, features and feedback speed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Are your websites mobile friendly?
                </h4>
                <p>
                  Yes. Every website is responsive and tested on mobiles, tablets and desktops.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you redesign my existing website?
                </h4>
                <p>
                  Yes. We improve design, speed and structure while keeping useful content and search visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you build online stores?
                </h4>
                <p>
                  Yes. We design e-commerce websites with easy browsing, secure payments and simple checkout.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website be SEO friendly?
                </h4>
                <p>
                  Yes. We build in clean structure, headings, meta tags and fast loading. Ongoing SEO can be added.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How much do website design services cost in Lucknow?
                </h4>
                <p>
                  Cost depends on pages, features and customisation. Share your needs and we will send a clear proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. What do you need to start?
                </h4>
                <p>
                  Your logo, service details, photos and goals. If you do not have them, we will guide you.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We help with updates, fixes, security checks and improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I contact Zentrix Infotech?
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
              currentSlug="/website-design-services-in-lucknow"
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