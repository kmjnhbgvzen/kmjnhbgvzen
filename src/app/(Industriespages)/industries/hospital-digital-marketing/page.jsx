import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Hospital Digital Marketing Services in Delhi | Healthcare Marketing Agency",

  description:
    "Boost your hospital’s online presence with expert hospital digital marketing services in Delhi. We help healthcare brands generate more patient leads through SEO, Google Ads, social media marketing, and reputation management in Delhi NCR.",

  keywords: [
    "hospital digital marketing services in delhi, healthcare marketing agency in delhi, hospital marketing company delhi, medical digital marketing delhi, healthcare digital marketing services delhi, hospital seo services in delhi, doctor marketing agency delhi, medical marketing services delhi, hospital lead generation delhi, patient acquisition marketing delhi, best hospital digital marketing agency in delhi, digital marketing for hospitals in delhi ncr, hospital branding and marketing delhi"
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/hospital-digital-marketing",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Hospital Digital Marketing Services in Delhi | Healthcare Marketing Agency",
    description:
      "Boost your hospital’s online presence with expert hospital digital marketing services in Delhi. We help healthcare brands generate more patient leads through SEO, Google Ads, social media marketing, and reputation management in Delhi NCR.",
    url: "https://www.zentrixinfotech.com/industries/hospital-digital-marketing",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hospital Digital Marketing Services in Delhi | Healthcare Marketing Agency",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Hospital Digital Marketing Services in Delhi | Healthcare Marketing Agency",
    description:
      "Boost your hospital’s online presence with expert hospital digital marketing services in Delhi. We help healthcare brands generate more patient leads through SEO, Google Ads, social media marketing, and reputation management in Delhi NCR.",
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