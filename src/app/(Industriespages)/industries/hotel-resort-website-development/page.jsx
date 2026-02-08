import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Hotel & Resort Website Development | Get More Bookings with Zentrix",

  description:
    "Increase direct bookings with professional hotel & resort website development. Zentrix builds fast, SEO-friendly, mobile-ready websites designed to attract guests and grow your hospitality business.",

  keywords: [
    "hotel website development, resort website development, hospitality website design, hotel booking website, resort web design services, hotel web development company, SEO for hotel websites, mobile-friendly hotel website, hotel website with booking system, custom resort website, Zentrix website development, hotel website to increase bookings, hospitality digital solutions",
    
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/hotel-resort-website-development",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Hotel & Resort Website Development | Get More Bookings with Zentrix",
    description:
      "Increase direct bookings with professional hotel & resort website development. Zentrix builds fast, SEO-friendly, mobile-ready websites designed to attract guests and grow your hospitality business.",
    url: "https://www.zentrixinfotech.com/industries/hotel-resort-website-development",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel & Resort Website Development",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Hotel & Resort Website Development | Get More Bookings with Zentrix",
    description:
      "Increase direct bookings with professional hotel & resort website development. Zentrix builds fast, SEO-friendly, mobile-ready websites designed to attract guests and grow your hospitality business.",
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