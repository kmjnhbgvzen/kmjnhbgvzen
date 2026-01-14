import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Digital Marketing Services | SEO, Social Media & Growth Marketing – Zentrix Infotech",

  description:
    "Zentrix Infotech offers result-driven digital marketing services including SEO, social media marketing, paid ads, content marketing, and online growth solutions tailored for businesses.",

  keywords: [
    "digital marketing services company",
    "professional digital marketing services",
    "seo and digital marketing company",
    "social media marketing services",
    "online marketing solutions for business",
    "affordable digital marketing services",
    "performance driven digital marketing",
    "digital growth marketing agency",
    "internet marketing services provider",
    "digital marketing company for small business"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/digital-marketing",
  },
  openGraph: {
    title:
      "Digital Marketing Services | SEO, Social Media & Growth Marketing – Zentrix Infotech",
    description:
      "Zentrix Infotech offers result-driven digital marketing services including SEO, social media marketing, paid ads, content marketing, and online growth solutions tailored for businesses.",
    url: "https://www.zentrixinfotech.com/services/digital-marketing",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Digital Marketing Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Services | SEO, Social Media & Growth Marketing – Zentrix Infotech",
    description:
      "Zentrix Infotech offers result-driven digital marketing services including SEO, social media marketing, paid ads, content marketing, and online growth solutions tailored for businesses.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};


// ✅ ✅ ✅ SERVICES PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
