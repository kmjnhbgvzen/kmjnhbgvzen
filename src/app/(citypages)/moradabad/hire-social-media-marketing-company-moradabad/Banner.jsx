import Link from "next/link";
import { Users, TrendingUp, Star, Phone, CheckCircle2 } from "lucide-react";

export default function Banner() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        {/* Dark & Subtle Blue/Purple Gradient Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-indigo-950/85 backdrop-blur-[0.5px]"></div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-4 md:mt-30">
            Hire Social Media Marketing Company Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Zentrix Infotech is a top-rated social media marketing firm in Moradabad, offering professional services to help local businesses grow online. Our team creates custom strategies, engaging content, and targeted ad campaigns to boost brand visibility, increase followers, and drive real results. Whether you&apos;re a startup or an established business, we deliver affordable and effective social media solutions tailored to your goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Call Button */}
            <a href="tel:+917248800839">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg cursor-pointer">
                <Phone size={18} />
                <span className="text-base">+91 72488 00839</span>
              </button>
            </a>

            {/* Email Button */}
            <a href="mailto:zentrixit@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition cursor-pointer">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
