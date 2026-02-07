import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Digital Marketing for Doctors & Clinics | Get More Patients | Zentrix Infotech",

  description:
    "Attract more patients to your clinic with proven digital marketing strategies. Increase appointments, build trust, and grow your medical practice with SEO, Google Ads, and social media marketing from Zentrix Infotech.",

  keywords: [
    "digital marketing for doctors",
    "medical marketing",
    "healthcare marketing",
    "doctor SEO",
    "clinic marketing",
    "patient acquisition",
    "medical practice growth",
    "doctor advertising",
    "healthcare SEO",
    "medical clinic marketing",
    "hospital digital marketing",
    "doctor online marketing india",
    "clinic lead generation",
    "medical reputation management",
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/digital-marketing-for-doctors",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Digital Marketing for Doctors & Clinics | Get More Patients | Zentrix Infotech",
    description:
      "Fill your appointment calendar with qualified patients. Zentrix Infotech provides specialized digital marketing for doctors including local SEO, Google Ads, social media, and reputation management.",
    url: "https://www.zentrixinfotech.com/industries/digital-marketing-for-doctors",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing for Doctors and Medical Clinics",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing for Doctors & Clinics | Get More Patients",
    description:
      "Grow your medical practice with targeted SEO, Google Ads, and social media marketing. Attract more patients and build a 5-star reputation online.",
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