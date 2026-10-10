import React from "react";
import AlluringGlimpsesClient from "./AlluringGlimpsesClient";

export const metadata = {
  title: "Alluring Glimpses Case Study | Interior Design & Spatial Storytelling | Zentrix Infotech",
  description:
    "Discover how Zentrix Infotech crafted a unified digital experience for Alluring Glimpses — uniting interior design, exterior architecture, bespoke furniture, and Nazaakat artisanal décor into a cohesive platform.",
  keywords: [
    "Alluring Glimpses Case Study",
    "Interior Design Website Development",
    "Architecture & Spatial Design UX",
    "Bespoke Furniture Website",
    "Nazaakat Artisanal Decor",
    "Zentrix Infotech Projects",
    "Interior Studio Bijnor Ghaziabad",
    "Luxury Home Decor Digital Experience",
  ],
  alternates: {
    canonical: "https://www.zentrixinfotech.com/projects/alluring-glimpses",
  },
  openGraph: {
    title: "Alluring Glimpses Case Study | Transforming Spaces Through Thoughtful Design & Digital Storytelling",
    description:
      "A complete case study on how Zentrix Infotech structured Alluring Glimpses' multi-offering brand architecture — showcasing Design Studio services, Alluring Glimpses Homes, and Nazaakat artisanal candles.",
    url: "https://www.zentrixinfotech.com/projects/alluring-glimpses",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png",
        width: 1200,
        height: 630,
        alt: "Alluring Glimpses Website Case Study Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alluring Glimpses Case Study | Interior & Lifestyle UX by Zentrix Infotech",
    description:
      "See how Zentrix Infotech brought Alluring Glimpses' interior design studio, bespoke furniture, and Nazaakat artisanal collections together into a cohesive digital experience.",
    images: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function AlluringGlimpsesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Alluring Glimpses Case Study: Transforming Spaces Through Thoughtful Design & Digital Storytelling",
    description:
      "Zentrix Infotech developed a sophisticated digital platform for Alluring Glimpses — organizing interior design services, exterior architecture, bespoke furniture, and Nazaakat artisanal décor.",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1764749292/alluring-glimpses-iota.vercel.app__Nest_Hub_Max_-min_vwnvln.png",
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
      "@id": "https://www.zentrixinfotech.com/projects/alluring-glimpses",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlluringGlimpsesClient />
    </>
  );
}
