import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Banner() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#103b60] via-[#10466f] to-[#0c385b] px-6 pb-8 pt-24 text-white sm:pb-10 sm:pt-32 md:pb-10 md:pt-40">
        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Breadcrumb Links */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200 sm:text-base"
          >
            <Link
              href="/"
              className="transition hover:text-white hover:underline"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="transition hover:text-white hover:underline"
            >
              Products
            </Link>
          </nav>

          {/* Main Heading */}
          <h5 className="mb-4 mt-6 max-w-5xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
     Moradabad Software Development Company Case Studies    
          </h5>

          {/* Description */}
          <p className="mb-6 max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
Looking for a Moradabad software development company that delivers real business results? Zentrix Infotech builds fast, reliable, and scalable custom software that solves your unique challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="tel:+917248800839"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-5 py-3 font-semibold text-[#103b60] transition hover:bg-blue-50 sm:w-auto"
            >
              <Phone size={18} />
              +91 72488 00839
            </a>

            <a
              href="mailto:zentrixit@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/80 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#103b60] sm:w-auto"
            >
              <Mail size={18} />
              Book Appointment
            </a>
          </div>

          {/* Location - Next Line */}
          <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">
            Moradabad, Uttar Pradesh
          </p>

        </div>
      </section>
    </main>
  );
}