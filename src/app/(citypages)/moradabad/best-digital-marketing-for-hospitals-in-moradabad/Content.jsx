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
              Best Digital Marketing for Hospitals in Moradabad
            </h2>

            <p>
              Every hospital wants the &quot;best&quot; digital marketing, but
              best does not mean the loudest ads or the most posts. For a
              hospital, the best digital marketing is the kind that helps the
              right patient find accurate information at the right moment,
              trust what they see and reach your team easily. It does this
              without breaking medical ethics.
            </p>

            <p>
              This guide explains what the best digital marketing for hospitals
              in Moradabad looks like in practice. It covers eight guiding
              principles, a comparison of average and strong approaches, a
              seasonal plan and the numbers that actually matter.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What &quot;Best&quot; Should Mean for a Hospital
            </h3>

            <p>
              When hospitals call a marketing approach the best, they usually
              mean one of these:
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>It brings more patient enquiries</li>
              <li>It improves trust and reputation</li>
              <li>It keeps information accurate and safe</li>
              <li>It helps every department, not only a few</li>
              <li>It stays within advertising rules and medical ethics</li>
            </ul>

            <p>
              The best approach balances all five. Chasing only one, such as ad
              clicks, often damages another, such as trust.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Eight Principles of Strong Hospital Digital Marketing
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              1. Patient First, Hospital Second
            </h4>

            <p>
              Write and design for the patient&apos;s questions: Where do I go?
              Who treats this? How do I book? What should I expect? Pages that
              begin with the hospital&apos;s history before answering these
              questions lose busy, worried visitors.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              2. Accuracy Before Anything Else
            </h4>

            <p>
              A wrong emergency number, an old doctor timing or an outdated
              service list can cause real harm. Strong marketing treats
              accuracy as the first rule. Details should match across your
              website, Google profile and social pages.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              3. Doctor-Led Content
            </h4>

            <p>
              Patients trust people. Doctor profiles, short explanations in a
              doctor&apos;s own words and clear departments make a hospital
              feel human. All medical content should be reviewed by the
              relevant doctor before publishing.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              4. Local First
            </h4>

            <p>
              Most hospital patients come from the city and nearby areas. Local
              search visibility, Google Maps presence, Hindi and Hinglish
              content and community awareness matter more than broad national
              reach.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              5. Easy Action
            </h4>

            <p>
              Every important page should show a clear next step: call, WhatsApp
              or book an appointment. If a patient has to hunt for the phone
              number, you lose them.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              6. Honest Proof
            </h4>

            <p>
              Genuine reviews, real photos and clear facilities build trust.
              Strong marketing never uses fake reviews or misleading
              before-and-after claims, and always protects patient privacy.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              7. Joined-Up Channels
            </h4>

            <p>
              Website, SEO, ads, social media, reviews and WhatsApp should tell
              one consistent story. A patient who sees an ad should land on a
              page that matches it.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              8. Measured and Improved Every Month
            </h4>

            <p>
              Strong marketing tracks calls, enquiries and bookings, then
              improves what works. If nobody reviews the numbers, nothing gets
              better.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Average vs Strong: How to Tell the Difference
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Area
                    </th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Average approach
                    </th>
                    <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      Strong approach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Website</td>
                    <td className="border border-gray-200 px-3 py-2">
                      Slow, hard to read on a phone
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Fast, simple, mobile-first with clear booking options
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Doctor information
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Names only, often outdated
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Detailed profiles, timings and approved information
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Google profile
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Basic listing, few photos
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Complete profile, regular updates, active replies
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Content</td>
                    <td className="border border-gray-200 px-3 py-2">
                      Occasional generic posts
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Planned, doctor-reviewed health content in English, Hindi
                      and Hinglish
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Ads</td>
                    <td className="border border-gray-200 px-3 py-2">
                      Boosted posts with no clear goal
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Focused campaigns with tracking and good landing pages
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">Reviews</td>
                    <td className="border border-gray-200 px-3 py-2">
                      Collected randomly, rarely answered
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Ethical review process with professional replies
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Emergency details
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Hard to find or inconsistent
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Always accurate and highly visible
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Reporting
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Likes and impressions
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Calls, enquiries, bookings and next steps
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">
                      Compliance
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Unclear or ignored
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      Checked against advertising rules and privacy norms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Use this table as a quick self-audit. If most of your answers
              fall in the left column, there is clear room to improve.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Channel-by-Channel Best Practice
            </h3>

            <h4 className="text-lg font-semibold text-gray-900">
              Website and SEO
            </h4>

            <p>
              Create separate pages for each department, doctor and major
              treatment. Use plain language, include FAQs and make sure pages
              load quickly. Search in your patients&apos; words, such as
              &quot;heart specialist Moradabad&quot; and Hindi or Hinglish
              versions.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Google Business Profile
            </h4>

            <p>
              Keep the name, address, phone number, timings and categories
              exact. Add real photos and post updates about camps or new
              services. Reply to every review.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">
              Social Media and Video
            </h4>

            <p>
              Share health education, doctor introductions and event updates.
              Educational posts build trust better than constant promotion.
              Short, clear videos work well when doctors explain a topic
              simply.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">Paid Ads</h4>

            <p>
              Run focused campaigns for specific services or events, such as a
              health check-up package or a new department. Send people to a
              page designed for booking. Follow platform health-ad policies.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>

            <p>
              Use WhatsApp Business for appointment enquiries, reminders and
              follow-up, with patient consent and care for privacy.
            </p>

            <h4 className="text-lg font-semibold text-gray-900">Reputation</h4>

            <p>
              Invite honest feedback, reply politely and escalate serious
              concerns to management. Never argue publicly or share patient
              details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              A Seasonal Calendar for Hospital Content
            </h3>

            <p>
              Health needs change through the year. Planning ahead helps you
              publish timely, useful information. Adjust it to your
              departments.
            </p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Summer:</strong> Hydration, heat-related illness, skin
                care and food safety.
              </li>
              <li>
                <strong>Monsoon:</strong> Fever, dengue and malaria awareness,
                stomach infections and safe water, and a reminder to see a
                doctor early for persistent fever.
              </li>
              <li>
                <strong>Winter:</strong> Respiratory care, joint pain, heart
                care for older adults and seasonal flu advice.
              </li>
              <li>
                <strong>Festival season:</strong> Food and air-quality
                guidance, safe celebrations and holiday timings for the
                hospital.
              </li>
              <li>
                <strong>Throughout the year:</strong> Health check-up
                awareness, vaccination reminders, women&apos;s and
                children&apos;s health topics, and awareness days relevant to
                your departments.
              </li>
            </ul>

            <p>
              Keep all medical advice general and accurate, and avoid anything
              that could replace a proper consultation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Metrics That Matter
            </h3>

            <p>Management does not need dozens of charts. Focus on:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>
                Enquiries: phone calls, WhatsApp messages and form submissions
              </li>
              <li>Appointments: requests and confirmed bookings</li>
              <li>
                Google profile actions: calls, direction requests and website
                clicks
              </li>
              <li>Reviews: number, average rating and response time</li>
              <li>
                Page performance: which department and doctor pages get
                visitors and which convert
              </li>
              <li>Ad results, if running: enquiries and cost per enquiry</li>
            </ul>

            <p>
              Results vary by department, competition and starting point, so
              compare your own progress month to month and not against another
              hospital.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Mistakes That Stop Hospitals Being the Best
            </h3>

            <ul className="ml-4 list-disc space-y-2">
              <li>Treating marketing as only ads or only social media</li>
              <li>Letting doctor and timing information go out of date</li>
              <li>Ignoring slow phone and WhatsApp replies</li>
              <li>
                Making claims about cures, guaranteed outcomes or being number
                one
              </li>
              <li>Using patient photos or stories without written consent</li>
              <li>Buying fake reviews or followers</li>
              <li>Copying content from other hospital websites</li>
              <li>Not tracking where enquiries come from</li>
            </ul>

            <p>
              Please also check the current advertising guidelines of the
              National Medical Commission and your state medical council before
              running any promotion.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose an Agency That Supports Best Practice
            </h3>

            <p>Look for an agency that:</p>

            <ul className="ml-4 list-disc space-y-2">
              <li>Has healthcare experience and can show live work</li>
              <li>Explains its plan in plain language</li>
              <li>Offers reports focused on enquiries and bookings</li>
              <li>Gives you ownership of your website and accounts</li>
              <li>Refuses to promise rankings or patient numbers</li>
              <li>Respects medical ethics and patient privacy</li>
            </ul>

            <p>
              Ask for references and speak to a past client before you decide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Hospitals Consider Zentrix Infotech
            </h3>

            <p>
              Zentrix Infotech is based at 12/11, Buddhi Vihar Phase 2,
              Moradabad. We have completed 250+ projects for 270+ clients and
              hold a 4.7 out of 5 rating. Our healthcare experience includes
              Jigyasa Hospital, and Oracle Eye Hospital appears on our client
              list. Dr. C.P. Singh of Jigyasa Hospital shared that the website
              made appointment booking easy and that patient enquiries through
              Google and social media rose consistently after the marketing
              work began.
            </p>

            <p>
              We handle websites, SEO, ads, social media and design under one
              roof. We encourage you to compare us with other agencies using
              the principles above, because the right choice should be clear
              from the evidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Talk to Our Team
            </h3>

            <p>
              Share your hospital&apos;s departments and goals, and we will
              review your digital presence and suggest a practical plan.
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
                  1. What is the best digital marketing for hospitals?
                </h4>
                <p>
                  It is accurate, patient-first marketing that brings real
                  enquiries while following medical ethics.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  2. Which channel matters most for a hospital?
                </h4>
                <p>
                  Google search and Maps usually matter most, supported by a
                  good website and reviews.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  3. Are ads needed for hospitals?
                </h4>
                <p>
                  Not always. Ads help with fast results or new services, but
                  long-term work builds lasting visibility.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  4. How important are reviews?
                </h4>
                <p>
                  Very. Honest reviews strongly influence which hospital
                  patients choose.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  5. How do you keep emergency details accurate?
                </h4>
                <p>
                  We check them across your website and listings regularly and
                  update changes quickly.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  6. Can you create content in Hindi and Hinglish?
                </h4>
                <p>
                  Yes. We write in English, Hindi and Hinglish for local
                  searches.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  7. Do doctors review the content?
                </h4>
                <p>
                  Yes. Relevant doctors approve medical content before it goes
                  live.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  8. Can you guarantee patients or rankings?
                </h4>
                <p>
                  No. Honest agencies set goals and share real data without
                  guarantees.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-gray-900">
                  9. How soon will we see results?
                </h4>
                <p>
                  Ads may bring enquiries within weeks. SEO and reviews usually
                  take several months.
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
                    href="/moradabad/digital-marketing-agency-for-hospitals-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Marketing Agency for Hospitals in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/hospital-marketing-services-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Hospital Marketing Services in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/medical-marketing-agency-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Medical Marketing Agency in Moradabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moradabad/healthcare-digital-marketing-agency-in-moradabad"
                    className="text-blue-600 hover:underline"
                  >
                    Healthcare Digital Marketing Agency in Moradabad
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
              </ul>
            </div>

            <CityInternalLinks
              city="moradabad"
              currentSlug="/best-digital-marketing-for-hospitals-in-moradabad"
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