import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";

export default function DigitalMarketingForDoctors() {
  return (
    <main className="bg-white">
      
      {/* Hero */}
      <section className="relative bg-gray-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-4 mt-15">
            Digital Marketing for Doctors & Medical Clinics
          </h1>
          <p className="text-xl mb-8">
            Attract More Patients. Build Trust. Grow Your Practice.
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
                Digital Marketing for Doctors: Smart Ways to Grow Your Practice Online
              </h2>
              <p className="text-gray-700 mb-4">
                The healthcare industry is becoming more digital every year, and patients now rely heavily on the internet to find the right doctor. From searching "best doctor near me" to reading reviews before booking an appointment, the decision-making process has shifted online. This makes digital marketing for doctors one of the most effective ways to increase visibility, build trust, and attract more patients.
              </p>
              <p className="text-gray-700">
                Having a strong digital presence ensures that when patients search for medical services, your clinic appears as a reliable option rather than getting lost among competitors.
              </p>
            </div>

            {/* Why Doctors Need Digital Marketing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Why Doctors Need Digital Marketing
              </h2>
              <p className="text-gray-700 mb-4">
                Many patients prefer convenience and quick access to information. If your practice is easy to find online and provides clear details, patients are more likely to choose you.
              </p>
              <p className="text-gray-700 mb-4">Key advantages include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Higher online visibility</li>
                <li>Increased patient inquiries</li>
                <li>Stronger credibility</li>
                <li>Better patient engagement</li>
                <li>Sustainable long-term growth</li>
              </ul>
              <p className="text-gray-700">
                Simply being present online can significantly impact your appointment rates.
              </p>
            </div>

            {/* Build a Professional Website */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Build a Professional Website
              </h2>
              <p className="text-gray-700 mb-4">
                Your website works as your digital clinic and often creates the first impression. A well-designed site should load quickly, be mobile-friendly, and provide essential information without confusion.
              </p>
              <p className="text-gray-700 mb-4">Important elements to include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Doctor profile and qualifications</li>
                <li>List of treatments and services</li>
                <li>Online appointment booking</li>
                <li>Clinic location with contact details</li>
                <li>Patient testimonials</li>
              </ul>
              <p className="text-gray-700">
                When patients see a professional website, it immediately increases confidence in your expertise.
              </p>
            </div>

            {/* Local SEO */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Local SEO Helps Patients Find You Faster
              </h2>
              <p className="text-gray-700 mb-4">
                Most people search for doctors within their area, which makes local SEO extremely valuable. Optimizing your Google Business Profile improves your chances of appearing in local searches and on maps.
              </p>
              <p className="text-gray-700">
                Make sure your profile is complete with accurate contact details, working hours, services, and real clinic photos. Encouraging satisfied patients to leave positive reviews can further strengthen your online presence, as ratings often influence patient decisions.
              </p>
            </div>

            {/* Reputation Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Reputation Matters More Than Ever
              </h2>
              <p className="text-gray-700 mb-4">
                Trust is the foundation of healthcare. Before choosing a doctor, patients often read reviews to understand others' experiences.
              </p>
              <p className="text-gray-700 mb-4">You can strengthen your reputation by:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Requesting feedback from happy patients</li>
                <li>Responding politely to reviews</li>
                <li>Addressing concerns professionally</li>
                <li>Maintaining consistent service quality</li>
              </ul>
              <p className="text-gray-700">
                Even a small number of genuine positive reviews can make your clinic stand out.
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Use Social Media to Educate and Engage
              </h2>
              <p className="text-gray-700 mb-4">
                Social media platforms provide an opportunity to connect directly with your community while showcasing your knowledge. Sharing useful and easy-to-understand content helps position you as a trusted expert.
              </p>
              <p className="text-gray-700">
                Consider posting health tips, preventive care advice, short educational videos, and myth-versus-fact information. Consistency is important — regular updates keep your practice visible and familiar to potential patients.
              </p>
            </div>

            {/* Paid Advertising */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Paid Advertising for Immediate Visibility
              </h2>
              <p className="text-gray-700 mb-4">
                While search engine optimization builds steady growth, paid advertising can deliver faster results. Search ads allow your clinic to appear when patients urgently need care, helping you capture high-intent searches.
              </p>
              <p className="text-gray-700 mb-4">Benefits of paid ads include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Instant exposure</li>
                <li>Targeted local audience</li>
                <li>More appointment bookings</li>
                <li>Measurable return on investment</li>
              </ul>
              <p className="text-gray-700">
                Even a moderate budget can generate quality leads when campaigns are optimized correctly.
              </p>
            </div>

            {/* Content Marketing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Create Helpful Content to Build Authority
              </h2>
              <p className="text-gray-700 mb-4">
                Educational content not only improves search rankings but also builds patient trust. Writing blogs that answer common health questions shows your expertise and helps patients feel informed before their visit.
              </p>
              <p className="text-gray-700">
                Topics such as symptoms to watch for, preventive healthcare, treatment options, and recovery tips are highly valuable. Over time, consistent content positions you as a dependable medical authority in your area.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Final Thoughts
              </h2>
              <p className="text-gray-700 mb-4">
                Digital marketing is no longer optional for doctors who want to grow their practice. Patients are actively searching online for trustworthy healthcare providers, and a strong digital presence ensures they find you first.
              </p>
              <p className="text-gray-700 mb-4">
                By combining a professional website, local SEO, reputation management, social media engagement, and targeted advertising, doctors can create a powerful system for attracting and retaining patients.
              </p>
              <p className="text-gray-700">
                Investing in digital marketing today sets the foundation for long-term success, helping your practice remain competitive in an increasingly digital healthcare landscape.
              </p>
            </div>

            

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px] xl:w-[500px] order-2">
            <div className="lg:sticky lg:top-28">
              <LandingEnquiry />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}