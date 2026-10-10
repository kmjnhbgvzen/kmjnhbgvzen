import React from "react";
import ImaMbdClient from "./ImaMbdClient";

export const metadata = {
  title: "IMA Moradabad Case Study | Medical Association & Community Healthcare | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech designed a connected digital platform for the Indian Medical Association (IMA) Moradabad Branch — uniting medical education, CME programmes, community health camps, and doctor welfare.",
  keywords: [
    "IMA Moradabad Case Study",
    "Indian Medical Association Moradabad",
    "Medical Association Website Design",
    "CME Medical Education Platform",
    "Healthcare Association UX",
    "Zentrix Infotech Projects",
    "Doctor Network Website India",
    "Community Health Camp Platform",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/ima-mbd",
  },
  openGraph: {
    title: "IMA Moradabad Case Study | Building a Connected Digital Platform for Medical Professionals",
    description:
      "A complete case study on how Zentrix Infotech structured IMA Moradabad's digital presence — connecting doctors, CME workshops, blood donation drives, public health campaigns, and member welfare.",
    url: "https://www.zentrixinfotech.com/projects/ima-mbd",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png",
        width: 1200,
        height: 630,
        alt: "IMA Moradabad Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMA Moradabad Case Study | Medical Community Digital Platform by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed IMA Moradabad's medical association initiatives, CME programmes, and community health camps into a professional online portal.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function ImaMbdPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "IMA Moradabad Case Study: Building a Connected Digital Platform for Medical Professionals & Community Healthcare",
    description:
      "Zentrix Infotech engineered an accessible digital platform for the Indian Medical Association (IMA) Moradabad Branch — presenting continuing medical education, health camps, blood donation drives, and doctor support.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764836429/www.imamoradabad.com__Nest_Hub_Max_-min_lszssv.png",
    author: {
      "@type": "Organization",
      name: "Zentrix Infotech",
      url: "https://www.zentrixinfotech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zentrix Infotech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.zentrixinfotech.com/projects/ima-mbd",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImaMbdClient />
    </>
  );
}
