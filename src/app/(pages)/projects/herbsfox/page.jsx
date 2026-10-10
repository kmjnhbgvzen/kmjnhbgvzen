import React from "react";
import HerbsfoxClient from "./HerbsfoxClient";

export const metadata = {
  title: "Herbsfox Case Study | Herbal Products & E-Commerce Platform | Zentrix Infotech",
  description:
    "Explore how Zentrix Infotech built a structured e-commerce experience for Herbsfox — combining product discovery, weight variation selection, herbal education, and a seamless shopping cart journey.",
  keywords: [
    "Herbsfox Case Study",
    "Herbal E-Commerce Website Design",
    "Online Herbal Store UX",
    "Organic Products Web Development",
    "Product Variation Selector UX",
    "Zentrix Infotech Projects",
    "Herbsfox Online Shopping",
    "Natural Wellness E-Commerce Platform",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/herbsfox",
  },
  openGraph: {
    title: "Herbsfox Case Study | Bringing Herbal Products & Nature-Inspired Wellness Into a Digital Shopping Experience",
    description:
      "A complete case study on how Zentrix Infotech designed Herbsfox's e-commerce platform — integrating online product catalogues, herbal information guides, dynamic weight pricing, and intuitive cart actions.",
    url: "https://www.zentrixinfotech.com/projects/herbsfox",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png",
        width: 1200,
        height: 630,
        alt: "Herbsfox Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbsfox Case Study | Herbal E-Commerce Digital Experience by Zentrix Infotech",
    description:
      "See how Zentrix Infotech brought Herbsfox's herbal products and educational content together into a structured, responsive online store.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function HerbsfoxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Herbsfox Case Study: Bringing Herbal Products & Nature-Inspired Wellness Into a Digital Shopping Experience",
    description:
      "Zentrix Infotech engineered an accessible, structured e-commerce platform for Herbsfox — connecting online product catalogues, herbal educational content, selectable weights, and streamlined cart actions.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764660008/herbsfox.com__Nest_Hub_Max_bdj25p.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/herbsfox",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HerbsfoxClient />
    </>
  );
}
