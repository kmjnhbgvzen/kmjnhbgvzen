import Link from "next/link";
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import RecentBlog from "@/components/RecentBlog";
import CityInternalLinks from "@/components/CityInternalLinks";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1 lg:border-r lg:border-gray-100">
          <div className="max-w-4xl space-y-8 leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Doctor Marketing Strategy in Moradabad
            </h2>

            <p>
              Many doctors try marketing in bits and pieces. A few social media
              posts this month, a boosted ad next month, a new website when
              someone suggests it. The effort is real, but results are patchy,
              because nothing connects to a plan.
            </p>

            <p>
              A doctor marketing strategy is that plan. It answers four simple
              questions. Who do you want to treat? Why should they choose you?
              Where will they find you? How will you know it is working? This
              guide gives you a framework for building a strategy for a
              practice in Moradabad, followed by a 12-month roadmap you can
              adapt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Strategy vs Tactics: What Is the Difference?
            </h3>

            <p>
              Tactics are actions: posting a video, running an ad, asking for a
              review. Strategy is the reason behind those actions and the order
              in which you do them. A tactic without a strategy is like
              prescribing a medicine without a diagnosis. It may help, but you
              cannot be sure why.
            </p>

            <p>
              A good strategy keeps your effort focused, your budget sensible
              and your message consistent across your website, Google profile,
              social media and clinic.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Five-Part Framework
            </h3>

            <p>
              Use these five parts as your checklist: Positioning, Patients,
              Pathways, Proof and Performance.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Part 1: Positioning (Why Choose You?)
            </h4>

            <p>
              Positioning is the clear, honest answer to &quot;why should a
              patient pick me?&quot; It is not a slogan. It comes from real
              strengths.
            </p>

            <p>Ask yourself:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>What do I treat best, and which cases do I see most?</li>
              <li>What do patients say they like about my clinic?</li>
              <li>
                Do I offer something practical, such as evening hours, women
                doctors, same-day appointments or advanced equipment?
              </li>
              <li>What do I want to be known for in Moradabad?</li>
            </ul>

            <p>
              Write one or two plain sentences, for example: &quot;A family
              dental clinic focused on painless, clearly explained
              treatment.&quot; Use it everywhere. Avoid claims of being the
              best or the number one, because these are hard to prove and can
              break advertising rules.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Part 2: Patients (Who Are You Speaking To?)
            </h4>

            <p>
              Different patients need different messages. Choose two or three
              main groups. For example:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Parents looking for a paediatrician or vaccination</li>
              <li>Women seeking maternity, gynaecology or skin care</li>
              <li>Older adults managing joint pain, diabetes or heart care</li>
              <li>Young professionals needing dental, skin or fitness care</li>
              <li>Families needing a regular family doctor</li>
            </ul>

            <p>
              For each group, note what worries them, what they search for,
              which language they use and which channel they trust. A worried
              parent may search at night on a phone. An older patient may rely
              on a neighbour&apos;s advice or a referral.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Part 3: Pathways (How Will They Find You?)
            </h4>

            <p>
              Pathways are the routes patients take to reach you. Match your
              channels to the patient, not to what is trendy.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Pathway
                    </th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Best for
                    </th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Role in the strategy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Google search and Maps
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Patients ready to book
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Your most important source of local enquiries
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Website
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Patients comparing doctors
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Builds trust and explains treatments
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      WhatsApp
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Questions, booking, follow-up
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Turns interest into appointments
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Social media and video
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Building familiarity
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Introduces you before patients visit
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Paid ads
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Fast enquiries or new services
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Short-term boost alongside long-term work
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Referrals from doctors and diagnostic centres
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Specialist care
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Steady, high-trust patient flow
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Community and camps
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Local awareness
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Builds goodwill and word of mouth
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              You do not need every pathway on day one. Start with search,
              website and reviews, then add others as capacity grows.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Part 4: Proof (Why Should They Believe You?)
            </h4>

            <p>
              Patients cannot judge medical quality directly, so they look for
              signs of trust:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Your qualifications, experience and registration details</li>
              <li>Honest reviews from real patients</li>
              <li>Clear treatment information</li>
              <li>Real photos of the clinic and team</li>
              <li>A professional website and Google profile</li>
              <li>Consistent details everywhere</li>
            </ul>

            <p>
              Proof must be genuine. Never use fake reviews or misleading
              before-and-after images, and always get consent before using any
              patient story or photo. Dr. C.P. Singh of Jigyasa Hospital
              described the hospital website as clean and professional with easy
              appointment booking, and reported a steady rise in enquiries
              through Google and social media after marketing began. This is
              the kind of proof that builds confidence, and it should come from
              real experience.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Part 5: Performance (How Will You Measure It?)
            </h4>

            <p>Decide in advance what success means. Common measures are:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Phone calls and WhatsApp enquiries</li>
              <li>Appointment requests and actual bookings</li>
              <li>Google profile views, calls and direction requests</li>
              <li>New reviews and average rating</li>
              <li>
                Cost per enquiry and per booked patient, if you run ads
              </li>
            </ul>

            <p>
              Review these every month. If you cannot measure it, you cannot
              improve it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Patient Funnel: Where Marketing Meets the Clinic
            </h3>

            <p>Think of the patient journey in four stages:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Awareness:</strong> The patient realises they have a
                problem and searches or asks around.
              </li>
              <li>
                <strong>Consideration:</strong> They compare doctors, read
                reviews and visit websites.
              </li>
              <li>
                <strong>Decision:</strong> They call, message or book.
              </li>
              <li>
                <strong>Loyalty:</strong> They visit, feel cared for, return
                and recommend you.
              </li>
            </ul>

            <p>
              Marketing handles the first three stages. The fourth belongs to
              your clinic: how quickly the phone is answered, how patients are
              welcomed and how follow-up is handled. A strong strategy covers
              both, because the best marketing cannot fix a missed call.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Choosing Channels by Goal
            </h3>

            <p>
              <strong>Goal: Be found by local patients.</strong> Focus on
              Google Business Profile, local SEO, reviews and a mobile-friendly
              website.
            </p>

            <p>
              <strong>Goal: Get enquiries quickly.</strong> Use Google Ads for
              specific treatments, with a landing page built for booking.
            </p>

            <p>
              <strong>Goal: Build trust and personal brand.</strong> Use short
              videos, educational posts and doctor introduction pages.
            </p>

            <p>
              <strong>Goal: Promote a new service or camp.</strong> Combine
              social media ads, search ads and WhatsApp updates over a defined
              period.
            </p>

            <p>
              <strong>Goal: Grow through referrals.</strong> Build
              relationships with nearby doctors and diagnostic centres, within
              professional ethics.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Budget Principles Without Guesswork
            </h3>

            <p>You do not need exact numbers to plan well. Follow these principles:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Foundation first.</strong> Fix the website, Google
                profile and tracking before spending heavily on ads.
              </li>
              <li>
                <strong>Split short-term and long-term.</strong> Ads bring
                quick enquiries, while SEO, content and reviews keep working
                over time.
              </li>
              <li>
                <strong>Test small, then scale.</strong> Try one treatment or
                one area first, and expand what works.
              </li>
              <li>
                <strong>Protect your best services.</strong> Put more effort
                behind treatments that are most valuable to your practice and
                where you have capacity to see more patients.
              </li>
              <li>
                <strong>Keep a reserve.</strong> Leave room to adjust after the
                first results.
              </li>
            </ul>

            <p>
              Agency fees and ad spend are separate costs, so plan for both.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Your 12-Month Roadmap
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Quarter 1: Foundation
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>Define positioning and target patients</li>
              <li>
                Build or improve the website with treatment and doctor pages
              </li>
              <li>Complete and verify the Google Business Profile</li>
              <li>Set up call, form and WhatsApp tracking</li>
              <li>Start collecting genuine reviews</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Quarter 2: Visibility
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>Publish treatment pages and patient education content</li>
              <li>Begin regular social media and short videos</li>
              <li>
                Start local SEO work in English, Hindi and Hinglish
              </li>
              <li>Test a small ad campaign for one or two treatments</li>
              <li>Introduce yourself to nearby referring doctors</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Quarter 3: Growth
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>Expand content around your most searched treatments</li>
              <li>Improve pages that get visitors but few calls</li>
              <li>Adjust ad targeting based on results</li>
              <li>
                Organise a camp or community talk, with proper permissions
              </li>
              <li>Strengthen follow-up through WhatsApp</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900">
              Quarter 4: Review and Refine
            </h4>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Compare your first-quarter and last-quarter numbers
              </li>
              <li>Drop what did not work</li>
              <li>Plan new services or branches for the next year</li>
              <li>
                Update your website and profile with fresh information
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Strategy by Stage of Practice
            </h3>

            <p>
              <strong>New clinic:</strong> Focus on being visible and trusted
              quickly. Website, Google profile, reviews and a small ad test
              come first.
            </p>

            <p>
              <strong>Growing clinic:</strong> Add content, referrals and
              deeper local SEO, and track which treatments bring the best
              patients.
            </p>

            <p>
              <strong>Established practice or hospital:</strong> Manage
              reputation, build department-wise pages, keep information
              consistent and protect your name online.
            </p>

            <p>
              <strong>Doctor building a personal brand:</strong> Invest in
              video, patient education and a clear doctor profile page.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Strategy Mistakes
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Starting with ads before the website and Google profile are
                ready
              </li>
              <li>Trying every channel at once</li>
              <li>Using the same message for every patient group</li>
              <li>Ignoring phone and WhatsApp response speed</li>
              <li>Tracking likes instead of bookings</li>
              <li>Making claims about cures or guaranteed results</li>
              <li>Not reviewing results month after month</li>
            </ul>

            <p>
              Please also check the current advertising guidelines of the
              National Medical Commission and your state medical council before
              running any promotion.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How Zentrix Infotech Can Help
            </h3>

            <p>
              Zentrix Infotech is based at 12/11, Buddhi Vihar Phase 2,
              Moradabad. We have completed 250+ projects for 270+ clients and
              hold a 4.7 out of 5 rating. We help doctors define their strategy
              and then carry it out through websites, SEO, ads, social media
              and design. Every plan starts with a conversation about your
              speciality, your patients and your goals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Our Team
            </h3>

            <p>
              Tell us about your practice, and we will suggest a practical
              strategy for the next 12 months.
            </p>

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
                ✉️
              </span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@zentrixinfotech.com"
                className="text-blue-600 hover:underline"
              >
                info@zentrixinfotech.com
              </a>
              <br />
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              <strong>Office:</strong> 12/11, Buddhi Vihar Phase 2, Moradabad,
              Uttar Pradesh 244001
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  1. What is a doctor marketing strategy?
                </h4>
                <p>
                  It is a plan covering who you serve, why they choose you,
                  where they find you and how you measure results.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Why does a doctor need a strategy?
                </h4>
                <p>
                  It keeps effort and budget focused instead of scattered across
                  random posts and ads.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Where should a doctor start?
                </h4>
                <p>
                  Start with a mobile website, a complete Google Business
                  Profile and genuine reviews.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. Which channels work best in Moradabad?
                </h4>
                <p>
                  Google search and Maps, WhatsApp, reviews and referrals
                  usually matter most locally.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. Are paid ads necessary?
                </h4>
                <p>
                  Not always. They help with fast results or new services, but
                  long-term work builds lasting visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. How long before the strategy shows results?
                </h4>
                <p>
                  Ads may bring enquiries within weeks. SEO and reviews usually
                  take several months.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. How do I measure success?
                </h4>
                <p>
                  Track calls, WhatsApp enquiries, bookings, reviews and profile
                  actions each month.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can a small clinic use this strategy?
                </h4>
                <p>
                  Yes. Start with the basics and add channels as your practice
                  grows.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. Should I write content in Hindi?
                </h4>
                <p>
                  Yes. Hindi and Hinglish match how many local patients search.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  10. Can doctors advertise in India?
                </h4>
                <p>
                  Yes, within rules. Avoid claims of cures or superiority, and
                  check NMC and state council guidance.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  11. How often should I review the plan?
                </h4>
                <p>Review results monthly and adjust the plan every quarter.</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  12. How can Zentrix help?
                </h4>
                <p>
                  We plan and run your website, SEO, ads and social media. Call{" "}
                  <a
                    href="tel:+917248800839"
                    className="text-blue-600 hover:underline"
                  >
                    +91 72488 00839
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
                    href="/medical-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Medical Marketing Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/website-development-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Website Development Company in Moradabad
                  </Link>
                </li>
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
                    href="/moradabad/seo-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    SEO Company in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/social-media-marketing-company-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Social Media Marketing Company in Moradabad
                  </Link>
                </li>
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/doctor-marketing-strategy-in-moradabad"
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