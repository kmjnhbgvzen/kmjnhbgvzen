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
      name: "What does a development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It designs, builds, tests and maintains digital products such as websites, software and mobile apps for businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zentrix Infotech work with Lucknow clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Lucknow businesses through calls, video meetings and remote project delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Which services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development, custom software, mobile apps, UI/UX design, cloud solutions and digital marketing.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on features and complexity. Share your requirements for a clear, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "How long will my project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Websites usually take a few weeks. Software and apps take longer, depending on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Which technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React.js, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Firebase and Tailwind CSS.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build both Android and iOS apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build native and cross-platform apps for both platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website rank on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build in SEO fundamentals, including speed, clean code and metadata. Rankings also depend on content and competition.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, updates and ongoing improvements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call, email or message us on WhatsApp, and we will arrange a discovery conversation.",
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
              Development Company in Lucknow: One Team for Websites, Software and Apps
            </h2>

            <p>
              Every business in Lucknow, from a Gomti Nagar clinic to a Hazratganj showroom, now runs partly on technology. Customers book online, compare prices on their phones and expect an instant response. The companies that win are the ones whose digital tools actually work: a website that loads quickly, software that removes manual effort, and an app that customers enjoy using.
            </p>

            <p>
              Zentrix Infotech is a development company serving Lucknow and the wider Uttar Pradesh region. We design and build websites, custom software, mobile apps and cloud solutions that solve real business problems. With 250+ projects completed, 270+ clients served and a 4.7/5 rating, we have turned ideas from startups, hospitals, colleges, retailers and resorts into products people use every day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What a Development Company Should Really Do
            </h3>

            <p>
              Many businesses hire a developer, receive a finished product and then discover it does not fit how they work. A good development company starts somewhere else: with your goals. Before a single line of code is written, we ask what you want to achieve. More enquiries? Faster billing? A smoother booking process? Lower operating costs?
            </p>

            <p>
              Only then do we choose the design, the technology and the features. This simple order of work is why our clients describe their projects in terms of results: more patient enquiries, higher bookings in peak season, steadier leads and stronger local visibility.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Development Services for Lucknow Businesses
            </h3>

            <h4 className="font-semibold text-gray-900">
              1. Website Development
            </h4>

            <p>
              Your website is your shop window, salesperson and brand introduction in one. We build fast, responsive and search-friendly websites using React.js and Next.js, covering business sites, ecommerce stores, portfolios and institutional platforms. Each site is built to look sharp on mobile, tablet and desktop, and to score well on speed tests, because slow pages lose customers.
            </p>

            <h4 className="font-semibold text-gray-900">
              2. Custom Software Development
            </h4>

            <p>
              Off-the-shelf software forces you to change your process to match its limits. Custom software does the opposite. We build tools around the way your team works: inventory and billing systems, CRM platforms, internal dashboards, booking engines and workflow automation. The result is less paperwork, fewer errors and clearer data for decisions.
            </p>

            <h4 className="font-semibold text-gray-900">
              3. Mobile App Development
            </h4>

            <p>
              Lucknow customers live on their smartphones, so an app can become your most direct channel. We develop native and cross-platform apps for Android and iOS, from delivery and ordering apps to service booking and loyalty platforms. We focus on smooth performance, simple navigation and reliable back-end systems that handle growth.
            </p>

            <h4 className="font-semibold text-gray-900">4. UI/UX Design</h4>

            <p>
              Great technology fails when people cannot figure out how to use it. Our designers create clean, intuitive interfaces after studying how your customers think and behave. We prototype early so you can see and approve the experience before development begins, which saves both time and budget.
            </p>

            <h4 className="font-semibold text-gray-900">5. Cloud Solutions</h4>

            <p>
              Reliable infrastructure matters as much as good code. We help businesses deploy, migrate and manage applications in the cloud, with attention to security, uptime and the ability to scale during busy periods without overpaying in quiet ones.
            </p>

            <h4 className="font-semibold text-gray-900">
              6. Digital Marketing
            </h4>

            <p>
              A finished product still needs visitors. Our marketing team supports your launch with SEO, social media and paid campaigns. Clients such as Jai Balaji Bath and Tiles, Ahlawat Pharmacy and Hawk Eye Shooting Institute have credited these campaigns with better local visibility and steady enquiries.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Technology Stack
            </h3>

            <p>
              We select tools for speed, security and long-term maintainability, rather than chasing trends. Our team works with:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Front end:</strong> React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux
              </li>
              <li>
                <strong>Back end:</strong> Node.js, Python
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, Firebase
              </li>
            </ul>

            <p>
              This modern stack gives you pages that load quickly, interfaces that feel smooth and codebases that other developers can read and extend years from now. You are never locked into a system only we understand.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How We Work: A Clear Seven-Step Process
            </h3>

            <ol className="ml-4 list-decimal space-y-2">
              <li>
                <strong>Discovery call.</strong> We listen to your goals, audience, budget and timeline.
              </li>
              <li>
                <strong>Proposal and plan.</strong> You receive a clear scope, feature list and schedule.
              </li>
              <li>
                <strong>Design and prototype.</strong> We build visual mockups you can review and approve.
              </li>
              <li>
                <strong>Development.</strong> Our engineers write clean, scalable code in short cycles, with progress shared regularly.
              </li>
              <li>
                <strong>Testing.</strong> We check performance, security and behaviour across devices and browsers.
              </li>
              <li>
                <strong>Launch.</strong> We deploy, connect analytics and confirm everything works under real conditions.
              </li>
              <li>
                <strong>Support and growth.</strong> We maintain, update and improve your product as your business grows.
              </li>
            </ol>

            <p>
              Communication runs through the entire process. You can reach us by phone, email or WhatsApp, and you will always know what is happening with your project.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industries We Build For
            </h3>

            <p>
              Lucknow&apos;s economy is wonderfully varied, and our portfolio reflects that range:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Healthcare:</strong> appointment booking and patient information for hospitals and clinics, as with Jigyasa Hospital and Oracle Eye Hospital
              </li>
              <li>
                <strong>Education:</strong> admissions, course pages and student resources for institutions such as Kamla Devi Group of Institutions
              </li>
              <li>
                <strong>Retail and ecommerce:</strong> multi-category stores, ordering and delivery management, as in The Buyzaar Mart and HerbsFox
              </li>
              <li>
                <strong>Interiors, weddings and events:</strong> portfolio-led websites that generate enquiries, including Vasterior, Alluring Glimpses and PS Decor
              </li>
              <li>
                <strong>Hospitality and tourism:</strong> resort websites and booking enquiries, such as Kairvi Fort Resort
              </li>
              <li>
                <strong>Real estate and construction:</strong> project showcases and lead capture
              </li>
              <li>
                <strong>Export and manufacturing:</strong> product catalogues and request-for-quote forms for international buyers
              </li>
              <li>
                <strong>Startups:</strong> fast, lean launches that leave room to grow
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Lucknow Businesses Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Experience you can verify.</strong> More than 250 projects across many industries means we have likely solved a problem similar to yours.
              </li>
              <li>
                <strong>Results over decoration.</strong> We judge success by enquiries, bookings, sales and time saved, not by how impressive a demo looks.
              </li>
              <li>
                <strong>One partner, fewer headaches.</strong> Design, development, cloud and marketing sit under one roof. You avoid the usual delays that happen when several vendors point at each other.
              </li>
              <li>
                <strong>Fair, transparent pricing.</strong> We offer value-driven packages for startups, small businesses and established companies. You see the scope and cost before work starts.
              </li>
              <li>
                <strong>Built to grow.</strong> Our scalable architecture lets you add payments, new features, languages or a mobile app later without rebuilding the foundation.
              </li>
              <li>
                <strong>Search-ready by default.</strong> Clean code, fast loading, proper metadata and mobile-first layouts are part of every build, so your product is ready to be found.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Local Understanding, Modern Delivery
            </h3>

            <p>
              Lucknow customers value trust, clarity and good service. They compare options carefully and often check reviews before they call. We build with that behaviour in mind: prominent contact details, clear service explanations, visible proof of past work, WhatsApp and call buttons, and local SEO foundations such as location-aware content, Google Business Profile guidance and structured data.
            </p>

            <p>
              Because our team collaborates through calls, video meetings and shared project updates, geography is no obstacle. We work with clients across Uttar Pradesh and beyond, and deliver projects remotely with the same attention you would expect from a local team. If an in-person meeting would help, we are happy to arrange one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes We Help You Avoid
            </h3>

            <p>
              After hundreds of projects, certain patterns repeat. Knowing them can save you months and a surprising amount of money.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Building everything at once.</strong> Trying to launch every feature on day one delays the release and inflates the budget. We usually recommend a focused first version, then expansion based on real customer feedback.
              </li>
              <li>
                <strong>Ignoring mobile users.</strong> Most visitors arrive on a phone. A site designed only for desktop quietly loses the majority of its audience.
              </li>
              <li>
                <strong>Treating SEO as an afterthought.</strong> Retrofitting search optimisation is slower and more expensive than building it in. We plan structure, speed and content together.
              </li>
              <li>
                <strong>Skipping maintenance.</strong> Unpatched software becomes slow and vulnerable. A modest support plan protects your investment far more cheaply than an emergency rebuild.
              </li>
              <li>
                <strong>Choosing on price alone.</strong> The cheapest quote often hides missing features, weak security or no support. We prefer to explain exactly what you are paying for.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing the Right Development Partner: A Quick Checklist
            </h3>

            <p>Before you sign with any agency, ask these questions:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Can they show live projects in your industry or a similar one?</li>
              <li>Do they explain the plan, cost and timeline in plain language?</li>
              <li>Will you own the code and the content when the project ends?</li>
              <li>What support do they provide after launch?</li>
              <li>Do they build for speed, security and search from the start?</li>
            </ul>

            <p>
              We are happy to answer every one of these openly. Honest answers up front are the foundation of a good working relationship.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Start Your Project With Zentrix Infotech
            </h3>

            <p>
              Whether you want a new website, a custom business tool, a mobile app or a stronger digital presence, the first step is a simple conversation. Tell us what you want to achieve, and we will recommend the right approach, timeline and budget.
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
              Contact Zentrix Infotech today and take the first step toward technology that works as hard as you do.
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
                  1. What does a development company do?
                </h4>
                <p>
                  It designs, builds, tests and maintains digital products such as websites, software and mobile apps for businesses.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Does Zentrix Infotech work with Lucknow clients?
                </h4>
                <p>
                  Yes. We serve Lucknow businesses through calls, video meetings and remote project delivery.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Which services do you offer?
                </h4>
                <p>
                  Website development, custom software, mobile apps, UI/UX design, cloud solutions and digital marketing.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How much does a project cost?
                </h4>
                <p>
                  Cost depends on features and complexity. Share your requirements for a clear, no-obligation quote.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How long will my project take?
                </h4>
                <p>
                  Websites usually take a few weeks. Software and apps take longer, depending on scope.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Which technologies do you use?
                </h4>
                <p>
                  React.js, Next.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Firebase and Tailwind CSS.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Can you build both Android and iOS apps?
                </h4>
                <p>
                  Yes. We build native and cross-platform apps for both platforms.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Will my website rank on Google?
                </h4>
                <p>
                  We build in SEO fundamentals, including speed, clean code and metadata. Rankings also depend on content and competition.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you provide support after launch?
                </h4>
                <p>
                  Yes. We offer maintenance, updates and ongoing improvements.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How do I get started?
                </h4>
                <p>
                  Call, email or message us on WhatsApp, and we will arrange a discovery conversation.
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
              currentSlug="/development-company-in-lucknow"
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