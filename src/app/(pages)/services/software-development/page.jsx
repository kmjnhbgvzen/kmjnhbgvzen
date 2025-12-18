import React from "react";
import Content from "./Content";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title:
    "Software Development Services | Affordable Custom Solutions – Zentrix Infotech",

  description:
    "Zentrix Infotech offers affordable software development services, delivering custom, scalable, and reliable software solutions tailored to business needs.",

  keywords: [
    "affordable software development services",
    "custom software development company",
    "software development services for business",
    "business software solutions provider",
    "cost effective software development",
    "professional software development services",
    "software development company for startups",
    "custom business software solutions",
    "enterprise software development services",
    "reliable software development partner"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/services/software-development",
  },

  

  openGraph: {
    title:
      "Software Development Services | Affordable Custom Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable software development services, delivering custom, scalable, and reliable software solutions tailored to business needs.",
    url: "https://www.zentrixinfotech.com/services/software-development",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Software Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Software Development Services | Affordable Custom Solutions – Zentrix Infotech",
    description:
      "Zentrix Infotech offers affordable software development services, delivering custom, scalable, and reliable software solutions tailored to business needs.",
    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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
