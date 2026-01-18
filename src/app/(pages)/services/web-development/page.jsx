import React from "react";
import Content from "./Content";
import FAQSchema from "./FAQSchema";

export const metadata = {
  title:
    "Web Development Services | Affordable & Scalable Websites – Zentrix Infotech",

  description:
    "Zentrix Infotech provides affordable web development services, building fast, secure, and scalable websites tailored for business growth and online presence.",

  keywords: [
    "web development services",
    "website development company",
    "affordable web development services",
    "affordable website development services",
    "professional website development",
    "custom website development company",
    "business website development services",
    "responsive website development",
    "web development services for small business",
    "modern website development company",
    "scalable website solutions provider"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/web-development",
  },
  openGraph: {
    title:
      "Web Development Services | Affordable & Scalable Websites – Zentrix Infotech",
    description:
      "Zentrix Infotech provides affordable web development services, building fast, secure, and scalable websites tailored for business growth and online presence.",
    url: "https://www.zentrixinfotech.com/services/web-development",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Web Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development Services | Affordable & Scalable Websites – Zentrix Infotech",
    description:
      "Zentrix Infotech provides affordable web development services, building fast, secure, and scalable websites tailored for business growth and online presence.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
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
      <FAQSchema />
    </div>
  );
};

export default Page;
