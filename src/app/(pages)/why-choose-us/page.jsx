import React from "react";
import Content from "./Content";


export const metadata = {
  title:
    "Why Choose Zentrix Infotech | Trusted Digital & IT Solutions Partner",

  description:
    "Discover why businesses choose Zentrix Infotech for digital marketing, web development, software solutions, UI/UX design, and cloud services. We focus on expertise, transparency, and real business results.",

  keywords: [
    "why choose zentrix infotech",
    "trusted digital marketing company",
    "reliable it solutions company",
    "best web development partner",
    "experienced software development company",
    "affordable digital services provider",
    "it company for business growth",
    "professional digital agency india",
    "result driven it services company"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/why-choose-us",
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    title:
      "Why Choose Zentrix Infotech | Expertise, Trust & Results",
    description:
      "Learn what makes Zentrix Infotech a trusted partner for digital marketing, web development, software solutions, and cloud services.",
    url: "https://www.zentrixinfotech.com/why-choose-us",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Why Choose Zentrix Infotech – Trusted Digital & IT Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Why Choose Zentrix Infotech | Trusted Digital & IT Partner",
    description:
      "See why businesses trust Zentrix Infotech for reliable, affordable, and result-driven digital and IT solutions.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


// ✅ ✅ ✅ PORTFOLIO PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
