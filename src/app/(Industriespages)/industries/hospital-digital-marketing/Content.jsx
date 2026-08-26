import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";
import LandingServices from "@/components/LandingServices";

export default function HospitalDigitalMarketing() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-gray-500 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Hospital Digital Marketing Services by Zentrix Infotech
          </h1>
          <p className="text-xl mb-8">
            Grow Your Healthcare Brand Online
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+917248800839">
              <button className="bg-blue-500 px-3 py-2 rounded-lg font-semiserif border-2 border-white hover:bg-blue-400">
                <Phone className="inline mr-2" size={20} />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="py-16 px-6">
        <div className="max-w-9xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* Main Content */}
          <div className="flex-1 order-1">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Hospital Digital Marketing Services by Zentrix Infotech
              </h2>
              <p className="text-gray-700 mb-4">
                In India&apos;s rapidly digitizing healthcare landscape, hospitals that dominate online searches win the patient race. At Zentrix Infotech, our hospital digital marketing services help multi-specialty hospitals, super-specialty centers, and community clinics in multiple cities. From SEO-optimized websites to reputation management, we build your online presence to drive real appointments.
              </p>
              <p className="text-gray-700 mb-4">
                In today&apos;s competitive healthcare industry, having a strong online presence is no longer optional — it&apos;s essential. Zentrix Infotech offers result-driven hospital digital marketing services designed to help hospitals, clinics, and healthcare brands attract more patients, build trust, and increase appointments consistently. As a specialized healthcare digital marketing agency, we bring strategies that truly work.
              </p>
              <p className="text-gray-700">
                With ethical marketing practices, transparent reporting, and customized strategies tailored to your hospital&apos;s goals, Zentrix Infotech helps you strengthen your brand authority, improve patient engagement, and grow your healthcare business sustainably across India.
              </p>
            </div>

            {/* Importance of Digital Marketing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Importance of Digital Marketing for Hospitals
              </h2>
              <p className="text-gray-700 mb-4">
                In today&apos;s digital age, most patients search online before choosing a hospital or doctor, making digital marketing essential for healthcare providers. A strong online presence helps hospitals build trust, increase visibility, and connect with patients at the right time. Through social media marketing, paid advertising, engaging healthcare content, and online reputation management, hospitals can attract the right audience and encourage more appointment bookings.
              </p>
              <p className="text-gray-700 mb-6">
                Digital marketing also allows hospitals to highlight their services, advanced facilities, and patient success stories, building credibility in a competitive market. With the growing reliance on smartphones and online searches, a strategic digital marketing approach ensures steady patient growth, stronger brand recognition, and long-term success for hospitals.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                <li>
                  <span className="font-semibold">Increased Online Visibility:</span> Most patients search online before visiting a hospital. Digital marketing ensures your hospital appears where patients are actively looking for healthcare services.
                </li>
                <li>
                  <span className="font-semibold">Builds Trust and Credibility:</span> An active online presence, patient testimonials, and informative content help establish your hospital as a reliable and trustworthy healthcare provider.
                </li>
                <li>
                  <span className="font-semibold">Better Patient Engagement:</span> Through social media platforms, emails, and informative posts, hospitals can communicate directly with patients and build long-term relationships.
                </li>
                <li>
                  <span className="font-semibold">Higher Appointment Bookings:</span> Targeted digital campaigns help attract the right audience, resulting in more inquiries and increased patient appointments.
                </li>
                <li>
                  <span className="font-semibold">Cost-Effective Marketing:</span> Compared to traditional advertising methods, digital marketing offers measurable results and better return on investment.
                </li>
                <li>
                  <span className="font-semibold">Strengthens Brand Awareness:</span> Consistent online promotion helps hospitals create a strong brand identity and stand out in a competitive healthcare market.
                </li>
                <li>
                  <span className="font-semibold">Improved Online Reputation:</span> Managing reviews and responding to patient feedback online helps maintain a positive image and encourages new patients to choose your hospital.
                </li>
              </ul>
            </div>

            {/* Rising Competition */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Rising Competition in Healthcare Industry
              </h2>
              <p className="text-gray-700 mb-4">
                The healthcare industry is becoming increasingly competitive as new hospitals, specialty clinics, and diagnostic centers continue to emerge in every city. Patients today have more choices than ever and often compare facilities, doctors, services, pricing, and reviews before making a decision.
              </p>
              <p className="text-gray-700">
                Private hospitals are investing in advanced technology, modern infrastructure, and specialized treatments to stand out in the market. At the same time, patient expectations have evolved — they seek not only quality medical care but also transparency, convenience, and strong communication. In this highly competitive environment, hospitals must focus on strategic branding, patient engagement, and consistent visibility to maintain trust and attract a steady flow of patients.
              </p>
            </div>

            {/* How Zentrix Helps Attract Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Zentrix Infotech Helps Hospitals Attract More Patients
              </h2>
              <p className="text-gray-700 mb-4">
                Zentrix Infotech helps hospitals attract more patients by implementing strategic, data-driven digital marketing solutions tailored specifically for the healthcare industry. We design high-converting, mobile-friendly hospital websites that clearly present services, doctors, infrastructure, and patient testimonials to encourage appointment bookings.
              </p>
              <p className="text-gray-700 mb-4">
                Our team enhances local visibility so your hospital appears when patients search for healthcare services in your area. Through targeted Google and social media advertising campaigns, we connect your hospital with the right audience based on location, treatment needs, and demographics.
              </p>
              <p className="text-gray-700">
                We also strengthen your brand through consistent social media engagement, informative healthcare content, and professional online reputation management that builds trust. Additionally, our lead generation and automation systems — including WhatsApp integration and inquiry follow-ups — ensure that every potential patient inquiry is captured and converted into appointments, driving steady and sustainable growth for your hospital.
              </p>
            </div>

            {/* Why Digital Marketing is Important */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Why Digital Marketing is Important for Hospitals
              </h2>
              <p className="text-gray-700 mb-4">
                In today&apos;s digital era, most patients search online before choosing a hospital or doctor. Whether it&apos;s checking reviews, comparing services, or booking appointments, the internet plays a major role in healthcare decisions. That&apos;s why digital marketing has become essential for hospitals to grow, build trust, and stay competitive.
              </p>
              <p className="text-gray-700 mb-4">
                Digital marketing is highly important for hospitals because today&apos;s patients rely heavily on the internet to find healthcare services, read reviews, compare facilities, and book appointments. A strong online presence helps hospitals reach the right audience at the right time, especially when people are actively searching for medical care.
              </p>
              <p className="text-gray-700 mb-4">
                Through social media platforms, online advertisements, and an informative website, hospitals can build trust by sharing patient testimonials, doctor profiles, treatment information, and health awareness content. Digital marketing also improves communication by allowing patients to ask questions, receive updates, and book appointments easily from their phones or computers. Compared to traditional advertising methods, it is more cost-effective and allows hospitals to measure results and improve their strategies accordingly.
              </p>
              <p className="text-gray-700 font-semibold">
                Digital marketing isn&apos;t hype — it&apos;s a necessity.
              </p>
            </div>

            {/* Online Reputation Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Online Reputation Management
              </h2>
              <p className="text-gray-700 mb-4">
                Online Reputation Management helps hospitals monitor, manage, and improve their online reviews and public perception to build patient trust and credibility.
              </p>
              <p className="text-gray-700 mb-4">
                Online Reputation Management is essential for hospitals because patients often check online reviews and ratings before choosing a healthcare provider. Positive reviews build trust and influence decision-making, while negative feedback, if not handled properly, can harm a hospital&apos;s credibility.
              </p>
              <p className="text-gray-700">
                By actively monitoring reviews, responding professionally to patient feedback, and addressing concerns quickly, hospitals can maintain a strong and trustworthy image. It also involves sharing positive patient experiences, testimonials, and success stories to strengthen brand perception. Effective reputation management not only improves public confidence but also helps hospitals attract more patients and maintain long-term relationships within the community.
              </p>
            </div>

            {/* Services Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Hospital Digital Marketing Services Offered by Zentrix Infotech
              </h2>
              <p className="text-gray-700 mb-4">
                Zentrix Infotech offers a range of digital marketing services tailored to help hospitals and healthcare providers grow their online presence and attract more patients. Their services include professional website design and development to create informative and user-friendly hospital websites, social media marketing to share health content and engage with potential patients, and online advertising campaigns to increase visibility and appointment inquiries.
              </p>
              <p className="text-gray-700 mb-4">
                They also manage online reviews and reputation, run targeted paid ads on platforms like Google and social networks to reach local audiences effectively, and provide analytics and reporting to track campaign performance and optimize results over time.
              </p>
              <p className="text-gray-700">
                By combining these digital marketing solutions, Zentrix Infotech helps hospitals build credibility, enhance patient engagement, and achieve measurable growth in a competitive healthcare landscape.
              </p>
            </div>

            {/* How Zentrix is Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Zentrix Infotech is Different
              </h2>
              <p className="text-gray-700 mb-4">
                Zentrix Infotech stands out from other digital marketing agencies because it combines industry-specific expertise with personalized service and measurable results. Unlike one-size-fits-all providers, Zentrix Infotech takes the time to understand each hospital&apos;s unique goals, target audience, and challenges before crafting tailored strategies that deliver real impact.
              </p>
              <p className="text-gray-700 mb-6">
                Their approach focuses not just on driving traffic, but on generating meaningful patient engagement, improving brand reputation, and increasing appointment conversions. With a strong emphasis on data-driven decision-making, regular performance tracking, and transparent reporting, we stand out in a crowded digital agency landscape.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                <li>
                  <span className="font-semibold">Data-Driven Strategies:</span> We use real patient data, campaign analytics, and performance metrics to attract more patients, improve engagement, and build trust. Instead of relying on assumptions, we analyze measurable insights to optimize marketing efforts and deliver better healthcare communication.
                </li>
                <li>
                  <span className="font-semibold">Ethical Marketing Approach:</span> Our healthcare marketing focuses on transparency, honesty, and patient well-being above all else. We communicate accurate information about treatments, services, pricing, and outcomes without exaggeration or misleading claims. Instead of fear-based promotions, we emphasize education, awareness, and informed decision-making.
                </li>
                <li>
                  <span className="font-semibold">Transparent Reporting:</span> We openly share accurate, clear, and honest information about services, outcomes, pricing, and performance to build trust and accountability with every client.
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Ready to Grow Your Hospital&apos;s Patient Base?
              </h2>
              <p className="text-gray-700 mb-4">
                Don&apos;t let competitors steal your patients. Book a free digital marketing audit and strategy session with Zentrix Infotech today. See how hospital digital marketing can transform your practice.
              </p>
              <p className="text-gray-700 mb-4">
                Call: <a href="tel:+917248800839" className="text-blue-600 hover:underline">+91 72488 00839</a> &nbsp;|&nbsp; Email: <a href="mailto:info@zentrixinfotech.com" className="text-blue-600 hover:underline">info@zentrixinfotech.com</a>
              </p>
              <a href="tel:+917248800839">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                  Book Free Consultation Now
                </button>
              </a>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">1. What is hospital digital marketing?</h3>
                  <p className="text-gray-700">Hospital digital marketing promotes healthcare services online to attract and engage patients.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">2. How can digital marketing benefit my hospital?</h3>
                  <p className="text-gray-700">It helps increase patient inquiries, improve visibility, and build trust online.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">3. Which platforms are best for hospital marketing?</h3>
                  <p className="text-gray-700">Search engines, social media, websites, and online directories are most effective.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">4. Is digital marketing suitable for small hospitals?</h3>
                  <p className="text-gray-700">Yes, it helps small hospitals compete and reach local patients effectively.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">5. How do you measure marketing success?</h3>
                  <p className="text-gray-700">Success is measured through leads, appointments, website traffic, and engagement metrics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">6. Does digital marketing help build hospital reputation?</h3>
                  <p className="text-gray-700">Yes, it strengthens credibility through reviews, content, and consistent communication.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px] xl:w-[500px] order-2">
            <div className="lg:sticky lg:top-28">
              <LandingEnquiry />
            </div>
          </div>

        </div>

        <LandingServices />

      </section>

    </main>
  );
}