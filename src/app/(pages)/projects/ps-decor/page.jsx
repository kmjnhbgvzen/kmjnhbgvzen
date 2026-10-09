import React from "react";
import PSDecorClient from "./PSDecorClient";

export const metadata = {
  title: "PS Decor Case Study | Luxury Wedding & Event Digital Experience | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech crafted a luxury digital experience for PS Decor (Pradeep Shukla Decor) — showcasing luxury wedding décor, destination celebrations, and seamless client enquiry journeys.",
  keywords: [
    "PS Decor Case Study",
    "Pradeep Shukla Decor Website",
    "Luxury Wedding Website Development",
    "Wedding Planning Digital Experience",
    "Event Management Website Design",
    "Zentrix Infotech Projects",
    "Destination Wedding Portal",
    "Luxury Event Décor Portfolio",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/ps-decor",
  },
  openGraph: {
    title: "PS Decor Case Study | Crafting a Luxury Digital Experience for Weddings & Celebrations",
    description:
      "A complete case study on how Zentrix Infotech designed and developed the bespoke digital platform for PS Decor, combining visual elegance with structured wedding service discovery.",
    url: "https://www.zentrixinfotech.com/projects/ps-decor",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764834884/www.psdecor.in_-min_pvdtes.png",
        width: 1200,
        height: 630,
        alt: "PS Decor Luxury Wedding Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PS Decor Case Study | Luxury Wedding Digital Experience by Zentrix Infotech",
    description:
      "See how Zentrix Infotech transformed PS Decor's wedding & luxury event management services into an elegant, image-led online experience.",
    images: ["https://res.cloudinary.com/dewxpvl5s/image/upload/v1764834884/www.psdecor.in_-min_pvdtes.png"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function PSDecorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PS Decor Case Study: Crafting a Luxury Digital Experience for Weddings & Celebrations",
    description:
      "Zentrix Infotech developed a digital experience designed to showcase PS Decor's creative capabilities, organize its diverse service offerings, and help potential clients explore wedding inspiration.",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764834884/www.psdecor.in_-min_pvdtes.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/ps-decor",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PSDecorClient />
    </>
  );
}
