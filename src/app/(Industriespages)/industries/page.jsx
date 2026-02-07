import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR INDUSTRIES PAGE
export const metadata = {
  title:
    "Industries We Serve | Zentrix Infotech – Digital Growth Solutions for Every Business",

  description:
    "Explore the industries we help grow at Zentrix Infotech. From hospitals and real estate to schools, manufacturers, and corporate businesses, we deliver digital strategies, technology solutions, and scalable systems that drive real business results.",

  keywords: [
    "industries we serve",
    "business industries digital solutions",
    "digital solutions for hospitals",
    "real estate digital services",
    "technology solutions for businesses",
    "growth solutions for companies",
    "digital transformation services india",
    "industries served by zentrix infotech",
    "business growth company",
    "software and marketing solutions for industries",
    "b2b digital solutions provider",
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Industries We Serve | Zentrix Infotech – Digital Growth Solutions for Every Business",
    description:
      "Discover how Zentrix Infotech empowers industries with high-performance websites, software, automation, and growth-driven digital strategies.",
    url: "https://www.zentrixinfotech.com/industries",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg", // replace later with industries banner if available
        width: 1200,
        height: 630,
        alt: "Industries Served by Zentrix Infotech",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Industries We Serve | Zentrix Infotech – Digital Growth Solutions for Every Business",
    description:
      "See how Zentrix Infotech helps hospitals, builders, schools, manufacturers, and enterprises scale with powerful digital and technology solutions.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon-v2.ico",
  },
};

// ✅ INDUSTRIES PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
