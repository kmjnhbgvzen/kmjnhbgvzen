import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Real Estate Website Development | High-Converting Property Websites",

  description:
    "Looking for professional real estate website development? Build fast, SEO-optimized, lead-driven property websites that convert visitors into buyers.",

  keywords: [
    "real estate website development, real estate website design, property website development, real estate web development services, real estate portal development, property listing website, real estate SEO website, real estate web solutions, real estate business website, real estate lead generation website, real estate mobile website, real estate CRM website, custom real estate website, real estate agency website design, commercial real estate website, residential property website, real estate website for builders"
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/real-estate-website-development",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Real Estate Website Development | High-Converting Property Websites",
    description:
      "Looking for professional real estate website development? Build fast, SEO-optimized, lead-driven property websites that convert visitors into buyers.",
    url: "https://www.zentrixinfotech.com/industries/real-estate-website-development",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Website Development | High-Converting Property Websites",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Real Estate Website Development | High-Converting Property Websites",
    description:
      "Looking for professional real estate website development? Build fast, SEO-optimized, lead-driven property websites that convert visitors into buyers.",
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