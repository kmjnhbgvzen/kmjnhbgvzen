import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Digital Marketing Case Studies in Moradabad: How Zentrix Infotech
              Helps Local Businesses Grow
            </h2>

            <p>
              Every digital marketing company says it gets results. A case
              study shows how. It takes a real business, describes the problem
              it faced, explains what was done and shares what changed. For a
              business owner in Moradabad deciding where to invest a marketing
              budget, that kind of evidence is far more useful than a list of
              services.
            </p>

            <p>
              This page presents digital marketing case studies and client
              success stories from Zentrix Infotech, a Moradabad-based digital
              and IT company with 250+ projects delivered for 270+ clients and
              a 4.7/5 rating. Each example is based on the work we did and the
              feedback our clients shared with us. We have chosen not to
              publish invented percentages or exact figures, because outcomes
              depend on each business, and we prefer to describe what happened
              honestly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Case Studies Matter
            </h3>

            <p>When you compare agencies, case studies help you check four things:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Relevance.</strong> Has the agency worked with a
                business like yours?
              </li>
              <li>
                <strong>Approach.</strong> Does it start with a plan, or just
                run ads?
              </li>
              <li>
                <strong>Outcome.</strong> Did the client see real change, such
                as enquiries, bookings or footfall?
              </li>
              <li>
                <strong>Honesty.</strong> Does the agency explain limits and
                context, or only show the best numbers?
              </li>
            </ul>

            <p>Read every case study, including ours, with these questions in mind.</p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech was founded on the belief that technology should
              solve real business problems. We offer digital marketing, web
              development, UI/UX design, mobile apps, software development and
              cloud solutions. Our office is at Buddhi Vihar Phase 2,
              Moradabad, with a second presence in Ghaziabad, and we serve
              clients across India.
            </p>

            <p>
              Our work follows three words: Strategise, Execute, Grow. We study
              the business, plan the channels, carry out the work and keep
              improving based on tracking.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 1: Healthcare — Jigyasa Hospital
            </h3>

            <p>
              <strong>The challenge.</strong> A hospital needs to be easy to
              find, easy to trust and easy to book. Patients search on Google,
              read reviews and look for a clear way to schedule an appointment.
            </p>

            <p>
              <strong>What we did.</strong> We worked on a clean, professional
              website with simple appointment booking, supported by digital
              marketing across Google and social media.
            </p>

            <p>
              <strong>The outcome.</strong> Dr. C.P. Singh describes the
              website as clean and professional with easy booking, and reports
              a consistent rise in patient enquiries through Google and social
              media since the marketing efforts began.
            </p>

            <p>
              <strong>Key lesson.</strong> In healthcare, trust and convenience
              matter as much as visibility. A clear website and a simple
              booking path turn searches into appointments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 2: Hospitality — Kairvi Fort Resort
            </h3>

            <p>
              <strong>The challenge.</strong> A resort depends on seasonal
              demand. It must stand out during peak periods and present its
              experience attractively to travellers who compare many options.
            </p>

            <p>
              <strong>What we did.</strong> We built an elegant, functional
              website and ran digital campaigns aimed at relevant travellers
              and peak seasons.
            </p>

            <p>
              <strong>The outcome.</strong> Rishabh Singhal reports that the
              site turned out elegant and functional and that the campaigns
              brought real results, including a noticeable boost in bookings
              during peak seasons.
            </p>

            <p>
              <strong>Key lesson.</strong> Hospitality marketing works best
              when strong visuals, a smooth website and well-timed campaigns
              work together.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 3: Building Materials — Jai Balaji Bath and Tiles
            </h3>

            <p>
              <strong>The challenge.</strong> A dealer wanted to reach builders
              and dealers beyond the people it already knew, and to be visible
              when local buyers searched online.
            </p>

            <p>
              <strong>What we did.</strong> We ran digital marketing campaigns
              focused on search and social media to reach trade and local
              audiences.
            </p>

            <p>
              <strong>The outcome.</strong> Sumit Gupta says the campaigns
              helped the business reach new builders and dealers it could not
              reach earlier, improved local visibility sharply and created a
              steady flow of enquiries through social media and search.
            </p>

            <p>
              <strong>Key lesson.</strong> For trade-focused businesses,
              reaching the right professionals is more valuable than reaching a
              large general audience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 4: Real Estate — Park Square
            </h3>

            <p>
              <strong>The challenge.</strong> Property buyers compare many
              projects and need confidence before visiting a site. The goal was
              quality leads and more site visits.
            </p>

            <p>
              <strong>What we did.</strong> We ran targeted digital marketing
              campaigns to attract likely property buyers.
            </p>

            <p>
              <strong>The outcome.</strong> Manish Sharma shares that the team
              helped attract property buyers, that the campaigns generated
              quality leads and that footfall at the site went up.
            </p>

            <p>
              <strong>Key lesson.</strong> In real estate, lead quality matters
              more than lead volume, and targeting is what delivers it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 5: Local Retail and Pharmacy — Ahlawat Pharmacy
            </h3>

            <p>
              <strong>The challenge.</strong> A neighbourhood pharmacy had
              almost no online presence, so customers who searched online could
              not find it.
            </p>

            <p>
              <strong>What we did.</strong> We built its online visibility
              through search and social advertising campaigns.
            </p>

            <p>
              <strong>The outcome.</strong> Anuj Kumar says people now discover
              the business through search and social ads, and that orders and
              footfall have grown steadily since the campaigns started.
            </p>

            <p>
              <strong>Key lesson.</strong> Local businesses can gain a lot from
              the basics: being found on Google, appearing in local searches
              and staying visible on social platforms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 6: Education and Training — Hawk Eye Shooting
              Institute
            </h3>

            <p>
              <strong>The challenge.</strong> A new institute needed a strong
              opening and a steady stream of student enquiries.
            </p>

            <p>
              <strong>What we did.</strong> We used targeted advertising to
              reach the right audience at the right time for the grand opening
              and afterward.
            </p>

            <p>
              <strong>The outcome.</strong> Sanjeev Vishnoi credits targeted
              ads for a successful grand opening and says the institute now
              receives student enquiries regularly through Instagram and
              Google.
            </p>

            <p>
              <strong>Key lesson.</strong> For launches, timing and audience
              targeting decide whether an opening is busy or quiet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Case Study 7: Retail Franchise — The Buyzaar Mart
            </h3>

            <p>
              <strong>The challenge.</strong> A retail franchise brand wanted
              to attract franchise partners and build local awareness around
              new store openings in Delhi NCR.
            </p>

            <p>
              <strong>What we did.</strong> We built a modern e-commerce and
              franchise platform and ran a marketing strategy aimed at
              franchise enquiries and brand visibility.
            </p>

            <p>
              <strong>The outcome.</strong> Arush Gogia says the strategy
              helped launch the franchise network, brought quality franchise
              enquiries and increased brand visibility across Delhi NCR, with
              store openings now generating strong local engagement.
            </p>

            <p>
              <strong>Key lesson.</strong> Franchise marketing needs two
              audiences at once: potential partners and local customers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Website and Brand Projects
            </h3>

            <p>
              Not every project starts with ads. For several clients we focused
              on websites and brand presence first, including Vasterior Pvt.
              Ltd. (interior and Vastu design), Alluring Glimpses (spatial and
              interior design), PS Decor (wedding and event design), Herbsfox
              (organic herbs and spices marketplace), Southern Palate (spice
              e-commerce) and Kdedu (education). Their feedback describes
              modern, easy-to-use sites that show their work well, and PS Decor
              notes that its site helped bring more client enquiries. Intirio
              World adds that the digital marketing push helped generate
              qualified leads consistently.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Patterns Across Our Case Studies
            </h3>

            <p>Looking at these projects together, a few patterns appear:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>A strong website comes first.</strong> Marketing sends
                people to a page, and that page decides whether they enquire.
              </li>
              <li>
                <strong>Local visibility pays off.</strong> Google search, maps
                and social media bring nearby customers.
              </li>
              <li>
                <strong>Targeting beats volume.</strong> Reaching the right
                people produces better leads than reaching many people.
              </li>
              <li>
                <strong>Timing matters.</strong> Launches, seasons and
                festivals need planned campaigns.
              </li>
              <li>
                <strong>Tracking guides decisions.</strong> Knowing where
                enquiries come from lets us cut waste and strengthen what
                works.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Note on Results
            </h3>

            <p>
              Each business starts from a different place, with its own
              industry, competition, budget and speed of decision-making. The
              outcomes above belong to those clients and cannot be promised to
              anyone else. What we do promise is honest strategy, careful
              execution and clear reporting.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Digital Marketing Services
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>SEO and local SEO:</strong> Technical fixes, keyword
                research, content and Google Business Profile optimization.
              </li>
              <li>
                <strong>Social media marketing:</strong> Content, page
                management and paid campaigns on Instagram, Facebook and
                LinkedIn.
              </li>
              <li>
                <strong>Google Ads and PPC:</strong> Search, display and
                remarketing campaigns.
              </li>
              <li>
                <strong>Content marketing:</strong> Blogs, service pages and
                guides.
              </li>
              <li>
                <strong>Website design and conversion optimization:</strong>{" "}
                Faster, clearer sites that turn visitors into enquiries.
              </li>
              <li>
                <strong>Branding and design:</strong> Logos, social templates
                and brand guidelines.
              </li>
              <li>
                <strong>WhatsApp and email marketing:</strong> Catalogues,
                broadcasts and follow-ups.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Zentrix Infotech
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Local understanding:</strong> We know Moradabad&apos;s
                market, customers and seasons.
              </li>
              <li>
                <strong>One team, many skills:</strong> Marketing, design,
                development and cloud work together.
              </li>
              <li>
                <strong>Transparent reporting:</strong> You see leads, calls
                and conversions, not only impressions.
              </li>
              <li>
                <strong>You keep ownership:</strong> Ad accounts, analytics and
                website access stay in your name.
              </li>
              <li>
                <strong>Flexible budgets:</strong> Start with the
                highest-return channels and scale as results come in.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Let&apos;s Write Your Success Story
            </h3>

            <p>
              If you want results like those described above, the first step is
              a conversation. Tell us about your business, your goals and your
              budget, and we will suggest a practical plan.
            </p>

            <p>
              <strong>Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <strong>Office:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What is a digital marketing case study?
                </h4>
                <p>
                  It is a real example showing a business&apos;s problem, the
                  marketing work done and the results achieved.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which industries are covered in your case studies?
                </h4>
                <p>
                  Healthcare, hospitality, building materials, real estate,
                  retail, education, franchise and e-commerce.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Can I get the same results as these clients?
                </h4>
                <p>
                  Not guaranteed. Results depend on your industry, budget,
                  competition and starting point.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Why don&apos;t you show exact percentages?
                </h4>
                <p>
                  We prefer honest descriptions over inflated numbers, since
                  outcomes vary by business.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Can I speak to a past client?
                </h4>
                <p>
                  Yes. We can arrange references relevant to your industry on
                  request.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How long do results usually take?
                </h4>
                <p>
                  Paid ads can bring enquiries within weeks. SEO usually shows
                  early gains in 2 to 3 months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do you also build websites?
                </h4>
                <p>
                  Yes. Our development and UI/UX team builds new sites and
                  improves existing ones.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Which services were used in these projects?
                </h4>
                <p>
                  SEO, social media, Google Ads, website development and
                  design, depending on each client&apos;s goals.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Do you guarantee rankings or leads?
                </h4>
                <p>
                  No honest agency can. We commit to transparent work and
                  measurable reporting.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. How can I contact Zentrix Infotech?
                </h4>
                <p>
                  Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
                  </a>
                  , WhatsApp{" "}
                  <a
                    href="tel:+916397036898"
                    className="text-blue-600 hover:underline"
                  >
                    +91 63970 36898
                  </a>{" "}
                  or email{" "}
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

            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <strong>WhatsApp / Call:</strong>{" "}
              <a
                href="tel:+917248800839"
                className="text-blue-600 hover:underline"
              >
                +91 72488 00839
              </a>
              {" / "}
              <a
                href="tel:+916397036898"
                className="text-blue-600 hover:underline"
              >
                +91 63970 36898
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
                    href="/moradabad/digital-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/digital-marketing-company-in-moradabad-reviews"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Company Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/seo-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Services in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/moradabad/digital-marketing-case-studies-in-moradabad"
            />
          </div>
        </div>

        <div className="order-2 w-full p-4 sm:p-8 lg:order-2 lg:w-[500px]">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
            <RecentBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;