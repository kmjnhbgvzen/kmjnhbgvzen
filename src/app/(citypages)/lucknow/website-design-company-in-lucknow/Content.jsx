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
      name: "What does a website design company in Lucknow do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It plans and creates your website layout and user experience so visitors find information easily and take action such as calling or enquiring.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website design take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple business website usually takes a few weeks. Larger sites and online stores take longer, depending on pages, features and feedback speed.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we design is responsive and tested on mobiles, tablets and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my old website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We refresh the design, improve speed and structure, and keep your useful content and search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build online stores with easy browsing, secure payments and smooth checkout.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be SEO friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build in clean structure, headings, meta tags and fast loading. Ongoing SEO can be added separately.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website design cost in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on pages, features and customisation. Share your requirements and we will send a clear proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ownership terms are agreed in writing before the project starts, so you know exactly what you receive.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can help with updates, fixes and improvements after your site goes live.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 72488 00839 or email info@zentrixinfotech.com. We will discuss your goals and suggest next steps.",
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
              Website Design Company in Lucknow That Turns Visitors into Customers
            </h2>

            <p>
              Zentrix Infotech is a website design company in Lucknow that builds fast, mobile-friendly and SEO-ready websites for businesses that want more enquiries, not just a nice-looking page. From chikankari brands and restaurants to clinics, coaching institutes and real estate developers, we design websites that earn trust in the first few seconds and guide visitors to call, message or buy.
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
              Why Your Business Needs a Professional Website Design in Lucknow
            </h3>

            <p>
              Customers in Lucknow now search on their phones before they visit a shop, book a doctor or hire a service. If your website is slow, cluttered or hard to use on mobile, they leave and call your competitor.
            </p>

            <p>A professional website design helps you:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Build trust quickly with a clean layout, real photos and clear contact details
              </li>
              <li>
                Get enquiries around the clock, even when your office is closed
              </li>
              <li>
                Support your marketing, because every ad, post and listing sends people to your site
              </li>
              <li>
                Stand out locally, since many businesses still run outdated websites
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is an IT and digital solutions company offering web design, web development, UI/UX design, mobile apps, software development, cloud solutions and digital marketing. Our offices are in Moradabad and Ghaziabad, and we work with clients across Uttar Pradesh, including Lucknow, through calls, video meetings and in-person visits when required.
            </p>

            <p>
              We have completed 250+ projects for 270+ clients and hold a 4.7 out of 5 client rating. Our approach is simple: understand your business, design for your customer and measure what happens after launch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Designing Services in Lucknow
            </h3>

            <h4 className="font-semibold text-gray-900">
              Custom Website Design in Lucknow
            </h4>

            <p>
              We do not force your business into a ready-made template. Layout, colours, typography and page structure are planned around your brand, your audience and your goals.
            </p>

            <h4 className="font-semibold text-gray-900">
              Business and Corporate Website Design
            </h4>

            <p>
              Professional websites for companies, consultants, manufacturers and service providers, with clear service pages, company information and strong calls to action.
            </p>

            <h4 className="font-semibold text-gray-900">
              E-commerce Website Design
            </h4>

            <p>
              Online stores with easy product browsing, secure payment options and a smooth checkout that works well on a phone.
            </p>

            <h4 className="font-semibold text-gray-900">
              Landing Page Design
            </h4>

            <p>
              Focused pages for ad campaigns, launches and events, built to turn clicks into enquiries.
            </p>

            <h4 className="font-semibold text-gray-900">
              Website Redesign Services
            </h4>

            <p>
              If your site looks old, loads slowly or brings no leads, we redesign it while protecting the content and search visibility you already have.
            </p>

            <h4 className="font-semibold text-gray-900">
              UI/UX Design
            </h4>

            <p>
              Interfaces designed around how real visitors scroll, tap and decide, so the path to your enquiry form or contact button feels natural.
            </p>

            <h4 className="font-semibold text-gray-900">
              Responsive and Mobile-First Design
            </h4>

            <p>
              Every website adapts to mobiles, tablets and desktops. We design for the small screen first because that is where most of your visitors are.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix as Your Web Design Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Design with a business goal.</strong> A beautiful website that does not bring customers is only a brochure. Every page we plan has a clear purpose and a clear next step.
              </li>
              <li>
                <strong>Mobile-first by default.</strong> We design and test on real phones before anything goes live.
              </li>
              <li>
                <strong>Speed and SEO from day one.</strong> Clean code, compressed images and a logical page structure give your website a strong base for search.
              </li>
              <li>
                <strong>Honest communication.</strong> You know the timeline, the deliverables and what we need from you. No jargon and no surprises.
              </li>
              <li>
                <strong>Public proof.</strong> Our portfolio and client feedback are on our website, so you can judge our work before you decide.
              </li>
              <li>
                <strong>One team for design, development and marketing.</strong> When you are ready for SEO or ads, your website and your marketing already work together.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Website Design Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call:</strong> we learn about your business, customers, competitors and goals.
              </li>
              <li>
                <strong>Planning and sitemap:</strong> we decide which pages you need and how visitors will move through them.
              </li>
              <li>
                <strong>Wireframes:</strong> simple layouts show the structure of key pages before visual design starts.
              </li>
              <li>
                <strong>Visual design:</strong> we apply your brand colours, logo and imagery and share the design for feedback.
              </li>
              <li>
                <strong>Development:</strong> approved designs are built into a fast, responsive and secure website.
              </li>
              <li>
                <strong>Testing:</strong> we check devices, browsers, forms, links and loading speed.
              </li>
              <li>
                <strong>Launch and support:</strong> we go live, connect analytics and stay available for updates.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website Design for Every Lucknow Industry
            </h3>

            <p>Good design looks different for each business type. We create websites for:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Fashion, chikankari and handicraft sellers:</strong> image-led catalogues, galleries and easy WhatsApp ordering
              </li>
              <li>
                <strong>Restaurants, bakeries and food brands:</strong> menus, online ordering and appetising visuals
              </li>
              <li>
                <strong>Hospitals, clinics and doctors:</strong> doctor profiles, department pages and appointment booking
              </li>
              <li>
                <strong>Schools, colleges and coaching institutes:</strong> course details, admission forms and results
              </li>
              <li>
                <strong>Real estate and construction:</strong> project pages, floor plans, maps and lead forms
              </li>
              <li>
                <strong>Hotels, resorts and event planners:</strong> gallery-rich pages and booking enquiries
              </li>
              <li>
                <strong>Manufacturers, traders and distributors:</strong> catalogues, company profiles and quote requests
              </li>
              <li>
                <strong>Startups and professionals:</strong> simple, credible sites that explain what you do
              </li>
            </ul>

            <p>
              Whether your business is in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar or anywhere else in Lucknow, we can plan and build your website remotely and meet when it helps.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Portfolio: Web Design Work You Can See
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Vasterior:</strong> a luxury interior and Vastu design studio website presenting elegant residential and commercial work
              </li>
              <li>
                <strong>Alluring Glimpses:</strong> a visual, atmosphere-led website for a spatial and interior design brand
              </li>
              <li>
                <strong>PS Decor:</strong> a wedding and event design website that showcases celebrations. The client shared that it helped bring more enquiries
              </li>
              <li>
                <strong>Kamla Devi Group of Institutions (KDEDU):</strong> an education website for students and faculty
              </li>
              <li>
                <strong>HerbsFox:</strong> an online marketplace for herbs, spices and wellness products
              </li>
              <li>
                <strong>The Buyzaar Mart:</strong> a retail and franchise platform with a multi-category shopping experience
              </li>
            </ul>

            <p>
              <Link
                href="/portfolio"
                className="text-blue-600 hover:underline"
              >
                Visit our portfolio page
              </Link>{" "}
              to see these projects in detail.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Features Every Business Website Should Have
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>A homepage that explains what you do within a few seconds</li>
              <li>Simple navigation and clear service or product pages</li>
              <li>Click-to-call and WhatsApp buttons</li>
              <li>Short enquiry or appointment forms</li>
              <li>Testimonials placed near key actions</li>
              <li>High-quality images that load quickly</li>
              <li>Google Maps and full contact details</li>
              <li>SSL security and reliable hosting</li>
              <li>On-page SEO basics such as headings, page titles and meta descriptions</li>
              <li>Analytics to track visitors and enquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Fast, SEO-Friendly and Secure Websites
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Speed:</strong> we optimise images and keep code clean so pages open quickly even on slower mobile networks.
              </li>
              <li>
                <strong>SEO foundation:</strong> proper headings, readable URLs, meta tags and internal links help search engines understand your pages. Ongoing SEO can be added as your next step.
              </li>
              <li>
                <strong>Security:</strong> SSL, protected forms and secure practices help visitors trust your site.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Affects Website Design Cost in Lucknow?
            </h3>

            <p>Prices differ because projects differ. The main factors are:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Number of pages and layout complexity</li>
              <li>Business website, landing page or online store</li>
              <li>Custom animations, illustrations or special features</li>
              <li>Content, photography and branding needs</li>
              <li>Integrations such as payment gateways, booking tools or CRM</li>
              <li>Support and maintenance after launch</li>
            </ul>

            <p>
              After a short discussion, we share a clear proposal so you know exactly what is included.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose a Website Design Company in Lucknow
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Open their portfolio websites on your own phone.</li>
              <li>Ask if the design will be responsive and fast.</li>
              <li>Confirm who owns the design files, domain and content.</li>
              <li>Ask about timelines, revisions and post-launch support.</li>
              <li>Read genuine client feedback, not only ratings.</li>
              <li>Check that they can help with SEO and marketing later.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get Your Website Designed by Zentrix Infotech
            </h3>

            <p>
              If you want a website design company in Lucknow that combines strong design with a practical, business-first approach, Zentrix Infotech is ready to help. Share your business and goals, and we will suggest the right website for you.
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
                  1. What does a website design company in Lucknow do?
                </h4>
                <p>
                  It plans and creates your website layout and user experience so visitors find information easily and take action such as calling or enquiring.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. How long does website design take?
                </h4>
                <p>
                  A simple business website usually takes a few weeks. Larger sites and online stores take longer, depending on pages, features and feedback speed.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Will my website work on mobile?
                </h4>
                <p>
                  Yes. Every website we design is responsive and tested on mobiles, tablets and desktops.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Can you redesign my old website?
                </h4>
                <p>
                  Yes. We refresh the design, improve speed and structure, and keep your useful content and search visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Do you design e-commerce websites?
                </h4>
                <p>
                  Yes. We build online stores with easy browsing, secure payments and smooth checkout.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Will my website be SEO friendly?
                </h4>
                <p>
                  Yes. We build in clean structure, headings, meta tags and fast loading. Ongoing SEO can be added separately.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How much does website design cost in Lucknow?
                </h4>
                <p>
                  Cost depends on pages, features and customisation. Share your requirements and we will send a clear proposal.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will I own my website?
                </h4>
                <p>
                  Ownership terms are agreed in writing before the project starts, so you know exactly what you receive.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you offer support after launch?
                </h4>
                <p>
                  Yes. We can help with updates, fixes and improvements after your site goes live.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I start my project?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@zentrixinfotech.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@zentrixinfotech.com
                  </a>
                  . We will discuss your goals and suggest next steps.
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
              currentSlug="/web-development-company-in-lucknow"
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