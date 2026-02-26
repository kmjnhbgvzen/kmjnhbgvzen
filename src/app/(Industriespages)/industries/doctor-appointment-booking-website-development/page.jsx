import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Doctor Appointment Website Development Services | Zentrix Infotech",

  description:
    "Get a secure, mobile-friendly doctor appointment website developed by Zentrix Infotech. Features include online booking, real-time availability, automated reminders, telemedicine support & payment integration. Contact us today!",

  keywords: [
    "doctor appointment website development, online doctor booking system, healthcare appointment platform, doctor appointment website, online appointment booking for doctors, hospital appointment website, clinic booking website development, telemedicine website development, healthcare website development India, doctor booking system, patient appointment management system, Zentrix Infotech healthcare, medical appointment website, online doctor consultation booking, appointment scheduling software for clinics"
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/doctor-appointment-booking-website-development",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Doctor Appointment Website Development Services | Zentrix Infotech",
    description:
      "Get a secure, mobile-friendly doctor appointment website developed by Zentrix Infotech. Features include online booking, real-time availability, automated reminders, telemedicine support & payment integration. Contact us today!",
    url: "https://www.zentrixinfotech.com/industries/doctor-appointment-booking-website-development",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor Appointment Website Development Services | Zentrix Infotech",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Doctor Appointment Website Development Services | Zentrix Infotech",
    description:
      "Get a secure, mobile-friendly doctor appointment website developed by Zentrix Infotech. Features include online booking, real-time availability, automated reminders, telemedicine support & payment integration. Contact us today!",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon-v2.ico",
  },
};

// ✅ DIGITAL MARKETING FOR DOCTORS PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;