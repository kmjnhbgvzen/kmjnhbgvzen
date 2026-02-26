import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";
import LandingEnquiry from "@/components/LandingEnquiry";
import LandingServices from "@/components/LandingServices";

export default function DoctorAppointmentWebsite() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-gray-500 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Doctor Appointment Website Development
          </h1>
          <p className="text-xl mb-8">
            Simplify Healthcare Booking with Zentrix Infotech
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
                Doctor Appointment Website Development – Simplify Healthcare Booking with Zentrix Infotech
              </h2>
              <p className="text-gray-700 mb-4">
                In today&apos;s fast-paced world, a reliable doctor appointment website is revolutionizing healthcare access. Patients no longer endure long wait times or phone tag — they can book consultations instantly via an online doctor booking system. At Zentrix Infotech, we specialize in building secure, intuitive healthcare appointment platforms that streamline operations for clinics while prioritizing patient convenience.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you&apos;re a small practice or a multi-doctor facility, our custom solutions reduce no-shows, boost efficiency, and enhance satisfaction. Discover how our expertise transforms healthcare booking into a seamless experience.
              </p>
              <p className="text-gray-700">
                Our platform offers real-time availability, detailed doctor profiles, automated reminders, and secure patient data management, ensuring both efficiency and safety. With mobile-responsive design and optional telemedicine integration, Zentrix Infotech ensures your healthcare services are accessible anytime, anywhere.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Key Features of Our Doctor Appointment Website
              </h2>
              <p className="text-gray-700 mb-6">
                Our doctor appointment websites are packed with patient-centric features designed for speed, security, and scalability. Built with modern tech stacks, they ensure lightning-fast performance even during peak hours.
              </p>

              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-serif mb-2">1. Easy Online Booking for Doctors and Patients</h3>
                  <p className="text-gray-700">
                    Seamlessly schedule appointments with advanced filters for specialty, doctor availability, location, or preferred time slots. Patients search, select, and confirm in under 60 seconds — no apps required. This core feature of our online doctor booking system eliminates front-desk overload. Patients can effortlessly search for doctors by specialty, location, or availability and book appointments in just a few clicks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">2. Detailed Doctor &amp; Clinic Profiles</h3>
                  <p className="text-gray-700">
                    Showcase qualifications, years of experience, patient reviews, and consultation fees. Rich profiles with photos, videos, and testimonials build trust, helping patients choose the right specialist on your healthcare appointment platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">3. Real-Time Availability and Calendar Sync</h3>
                  <p className="text-gray-700">
                    Integrated calendars sync across devices to display live slots, preventing double bookings. Google Calendar or Outlook integration keeps everything updated in real-time, ensuring accuracy for busy doctor appointment websites.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">4. Automated Reminders via Email and SMS</h3>
                  <p className="text-gray-700">
                    Send customizable notifications 24 hours, 1 hour, or custom intervals before appointments. This slashes no-shows by up to 40%, a game-changer for any online doctor booking system.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">5. Secure Patient Data Protection</h3>
                  <p className="text-gray-700">
                    Advanced encryption safeguards sensitive info like medical history and contact details. We use AES-256 encryption and data protection protocols compliant with global privacy standards, so your healthcare appointment platform stays secure without compromising speed. Patients can confidently book appointments and share their details, knowing that their information is handled securely.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">6. Multi-Device Responsive Design</h3>
                  <p className="text-gray-700">
                    Fully responsive for mobiles, tablets, and desktops — patients book on-the-go without glitches. Our designs pass Google&apos;s mobile-first indexing, boosting SEO for doctor appointment website searches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">7. Seamless Online Payment Integration</h3>
                  <p className="text-gray-700">
                    Accept payments via Razorpay, Stripe, or Paytm for in-clinic or virtual sessions. Secure gateways handle refunds and invoices automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-2">8. Built-In Telemedicine Support</h3>
                  <p className="text-gray-700">
                    Embed video calls with Zoom or Twilio for virtual consultations. Patients switch from booking to video chat effortlessly on the same online doctor booking system.
                  </p>
                </div>

              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Benefits for Clinics and Patients
              </h2>
              <p className="text-gray-700 mb-6">
                Implementing a doctor appointment website delivers measurable wins. Here&apos;s how our healthcare appointment platforms transform operations.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <span className="font-semibold">Reduces Administrative Workload:</span> Automated scheduling cuts manual calls and entries by 70%, freeing staff for patient care.
                </li>
                <li>
                  <span className="font-semibold">Enhances Patient Experience:</span> 24/7 booking with intuitive interfaces means no more hold music — patients love the convenience of online doctor booking systems.
                </li>
                <li>
                  <span className="font-semibold">Improves Appointment Adherence:</span> SMS/email reminders reduce no-shows, ensuring better clinic utilization and revenue.
                </li>
                <li>
                  <span className="font-semibold">Provides Actionable Data Insights:</span> Built-in analytics track peak times, popular specialties, and drop-off rates, empowering data-driven decisions on your healthcare appointment platform.
                </li>
                <li>
                  <span className="font-semibold">Drives Revenue Growth:</span> Higher satisfaction leads to repeat visits and referrals, with telemedicine adding new income streams via doctor appointment website development.
                </li>
              </ul>
            </div>

            {/* Why Choose Zentrix */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Why Choose Zentrix Infotech
              </h2>
              <p className="text-gray-700 mb-4">
                Zentrix Infotech stands out in doctor appointment website development with over 10 years of healthcare tech expertise. We prioritize security (zero breaches in our portfolio), UX (99% user satisfaction scores), and scalability for growing practices.
              </p>
              <p className="text-gray-700 mb-4">
                Our full-service approach covers ideation, UI/UX design, API integrations, testing, deployment, and 24/7 support — ensuring your online booking system for doctors runs flawlessly. Unlike off-the-shelf tools, our custom solutions adapt to your workflow, from single clinics to hospital chains.
              </p>
              <p className="text-gray-700">
                We specialize in creating custom platforms that cater to the unique needs of clinics, hospitals, and healthcare providers, ensuring smooth appointment management and an enhanced patient experience. Trust us to build a digital solution that not only meets today&apos;s healthcare demands but also grows with your practice.
              </p>
            </div>

            {/* How It Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                How Our Online Doctor Appointment System Works
              </h2>
              <p className="text-gray-700 mb-6">
                Getting started is straightforward. Our online doctor booking system guides users intuitively through a smooth and reliable appointment experience for everyone involved.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 1: Quick Registration or Login</h3>
                  <p className="text-gray-700">New patients sign up with email/phone in seconds; returning ones log in via OTP for security.</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 2: Smart Doctor Search</h3>
                  <p className="text-gray-700">Filter by specialty (e.g., cardiology), location, insurance, or ratings on the healthcare appointment platform.</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 3: Select Slot and Confirm</h3>
                  <p className="text-gray-700">View real-time availability, pick a date/time, and add notes — all with one click.</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 4: Instant Confirmation and Reminders</h3>
                  <p className="text-gray-700">Get email/SMS confirmations plus automated pre-appointment alerts.</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 5: Optional Secure Payment</h3>
                  <p className="text-gray-700">Pay online for deposits or full fees; skip for walk-ins.</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Step 6: Attend Consultation</h3>
                  <p className="text-gray-700">Join in-person or via integrated video — seamless from booking to care.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4">
                Ready to Simplify Healthcare Booking?
              </h2>
              <p className="text-gray-700 mb-4">
                Take the hassle out of scheduling and give your patients the convenience they expect with a doctor appointment website from Zentrix Infotech. Our platform makes booking simple, managing appointments effortless, and consultations more efficient — whether in-person or online.
              </p>
              <p className="text-gray-700 mb-6">
                Get in touch with our team today to create a customized solution that elevates your clinic&apos;s digital presence, boosts patient satisfaction, and transforms the way you manage appointments.
              </p>
              <a href="tel:+917248800839">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
                  Contact Us for a Free Demo
                </button>
              </a>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6">Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Can patients reschedule appointments online?</h3>
                  <p className="text-gray-700">Yes, easy self-service rescheduling or cancellations with instant notifications to doctors.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Is patient data secure on your platform?</h3>
                  <p className="text-gray-700">Yes, protected with advanced end-to-end encryption and global privacy standards.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Can multiple doctors use the platform?</h3>
                  <p className="text-gray-700">Yes, supports unlimited doctor profiles, shared calendars, and role-based access.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Is the website mobile-friendly?</h3>
                  <p className="text-gray-700">Fully responsive — optimized for all devices, from smartphones to desktops.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Can online payments be made securely?</h3>
                  <p className="text-gray-700">Yes, integrated with PCI-DSS certified gateways like Stripe and Razorpay.</p>
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